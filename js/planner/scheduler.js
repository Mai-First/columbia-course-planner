// ============================================================
// scheduler.js — Prerequisite-aware course scheduling algorithm
// Uses Kahn's topological sort + greedy semester assignment
// ============================================================

window.Scheduler = (function () {

  // ── Helpers ────────────────────────────────────────────────

  function semesterType(index, startSemester) {
    // index 0 = first semester for this student
    if (startSemester === "fall") return index % 2 === 0 ? "fall" : "spring";
    return index % 2 === 0 ? "spring" : "fall";
  }

  function semesterLabel(index, startSemester) {
    const year = Math.floor(index / 2) + 1;
    const type = semesterType(index, startSemester);
    return (type === "fall" ? "Fall" : "Spring") + " — Year " + year;
  }

  // Select best professor for a course (highest CULPA score, prefer gold nugget)
  function selectBestProfessor(courseCode) {
    const course = COURSES[courseCode];
    if (!course || !course.professors || course.professors.length === 0) return null;
    const candidates = course.professors
      .map(name => PROFESSORS[name])
      .filter(Boolean)
      .sort((a, b) => {
        const nuggetVal = { gold: 3, silver: 2, null: 1 };
        const aN = nuggetVal[a.nugget] || 1;
        const bN = nuggetVal[b.nugget] || 1;
        if (aN !== bN) return bN - aN;
        return (b.score || 0) - (a.score || 0);
      });
    return candidates[0] || null;
  }

  // ── Core algorithm ─────────────────────────────────────────

  /**
   * Generate a semester-by-semester plan.
   *
   * @param {string[]} courseCodes  - All courses to schedule (deduplicated)
   * @param {string}   startSem    - "fall" or "spring"
   * @param {number}   totalSems   - Number of semesters (default 8)
   * @returns {{ plan: object[], warnings: string[], courseMap: object }}
   */
  function generate(courseCodes, startSem, totalSems) {
    startSem = startSem || "fall";
    totalSems = totalSems || 8;

    // Deduplicate
    const codes = [...new Set(courseCodes)].filter(c => COURSES[c]);
    const missing = [...new Set(courseCodes)].filter(c => !COURSES[c]);

    // Only include prereqs that are themselves in the course list
    // (otherwise the scheduler would stall waiting for a prereq not in the plan)
    const codeSet = new Set(codes);

    // ── Build in-degree map and adjacency list ──────────────
    // Edge: A → B means "B depends on A" (A must come before B)
    const inDegree = {};
    const outEdges = {}; // outEdges[A] = [B, C...] (courses that need A)

    codes.forEach(c => { inDegree[c] = 0; outEdges[c] = []; });

    codes.forEach(code => {
      const course = COURSES[code];
      course.prereqs.forEach(prereq => {
        if (codeSet.has(prereq)) {
          outEdges[prereq].push(code);
          inDegree[code]++;
        }
        // If prereq is not in the plan, we just ignore it (assumed already done
        // or will be added by the user checking off completed courses)
      });
    });

    // ── Kahn's Algorithm ────────────────────────────────────
    const queue = codes.filter(c => inDegree[c] === 0);
    const sortedCodes = [];

    while (queue.length > 0) {
      // Pick course with lowest difficulty first (easier courses first when no constraint)
      queue.sort((a, b) => (COURSES[a].difficulty || 3) - (COURSES[b].difficulty || 3));
      const code = queue.shift();
      sortedCodes.push(code);
      outEdges[code].forEach(dep => {
        inDegree[dep]--;
        if (inDegree[dep] === 0) queue.push(dep);
      });
    }

    // Detect cycle (should not happen with real course data)
    if (sortedCodes.length < codes.length) {
      const cycled = codes.filter(c => !sortedCodes.includes(c));
      return {
        plan: [],
        warnings: ["Circular prerequisite detected: " + cycled.join(", ")],
        courseMap: {}
      };
    }

    // ── Initialize semesters ────────────────────────────────
    const semesters = [];
    for (let i = 0; i < totalSems; i++) {
      semesters.push({
        index: i,
        type: semesterType(i, startSem),
        label: semesterLabel(i, startSem),
        year: Math.floor(i / 2) + 1,
        courses: [],
        credits: 0,
        difficulty_sum: 0
      });
    }

    const MAX_CREDITS = 18;
    const MAX_DIFFICULTY = 20; // sum of course difficulties per semester
    const MAX_COURSES = 6;

    const assignedSem = {}; // courseCode → semester index
    const warnings = [];

    // ── Assign courses to semesters ─────────────────────────
    sortedCodes.forEach(code => {
      const course = COURSES[code];

      // Earliest semester: one after the latest prereq
      let earliest = 0;
      course.prereqs.forEach(prereq => {
        if (assignedSem[prereq] !== undefined) {
          earliest = Math.max(earliest, assignedSem[prereq] + 1);
        }
      });

      // Find the best semester to slot this course
      let assigned = false;
      for (let i = earliest; i < totalSems; i++) {
        const sem = semesters[i];
        // Check semester type matches course offering
        if (!course.offered.includes(sem.type)) continue;
        // Check load constraints
        if (sem.credits + course.credits > MAX_CREDITS) continue;
        if (sem.difficulty_sum + (course.difficulty || 3) > MAX_DIFFICULTY) continue;
        if (sem.courses.length >= MAX_COURSES) continue;

        // Assign
        const bestProf = selectBestProfessor(code);
        sem.courses.push({
          code: course.code,
          id: code,
          name: course.name,
          credits: course.credits,
          category: course.category || "major",
          dept: course.dept,
          professor: bestProf,
          allProfessors: course.professors || []
        });
        sem.credits += course.credits;
        sem.difficulty_sum += (course.difficulty || 3);
        assignedSem[code] = i;
        assigned = true;
        break;
      }

      if (!assigned) {
        warnings.push(`Could not schedule ${course.code} (${course.name}) in ${totalSems} semesters. Consider an extra semester.`);
      }
    });

    if (missing.length > 0) {
      warnings.push(`Unrecognized course codes (not in database): ${missing.join(", ")}. They were skipped.`);
    }

    // ── Compute per-semester difficulty rating ──────────────
    semesters.forEach(sem => {
      if (sem.courses.length === 0) {
        sem.difficulty_avg = 0;
        sem.difficulty_label = "Empty";
        sem.difficulty_class = "diff-empty";
        return;
      }
      // Weighted average: Σ(difficulty × credits) / total_credits
      const weightedSum = sem.courses.reduce((s, c) => s + (COURSES[c.id]?.difficulty || 3) * c.credits, 0);
      const avg = weightedSum / sem.credits;
      sem.difficulty_avg = Math.round(avg * 10) / 10;

      if (avg < 2.4) {
        sem.difficulty_label = "Light";
        sem.difficulty_class = "diff-light";
      } else if (avg < 3.0) {
        sem.difficulty_label = "Moderate";
        sem.difficulty_class = "diff-moderate";
      } else if (avg < 3.6) {
        sem.difficulty_label = "Heavy";
        sem.difficulty_class = "diff-heavy";
      } else {
        sem.difficulty_label = "Very Heavy";
        sem.difficulty_class = "diff-very-heavy";
      }
    });

    return { plan: semesters, warnings, assignedSem };
  }

  // ── Public API ─────────────────────────────────────────────
  return { generate, selectBestProfessor };

})();
