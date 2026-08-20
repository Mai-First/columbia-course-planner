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
    return (type === "fall" ? "Fall" : "Spring") + " · Year " + year;
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
   * @param {string}   startSem     - "fall" or "spring"
   * @param {number}   totalSems    - Number of semesters (default 8)
   * @param {object}   opts         - { completedSems, maxCredits }
   *   completedSems: semesters already finished (e.g. 4 for a junior);
   *     those semesters render but receive no courses.
   *   maxCredits: per-term registration cap without a petition
   *     (CC/GS 18, Barnard 19, SEAS 21).
   * @returns {{ plan: object[], warnings: string[], assignedSem: object }}
   */
  function generate(courseCodes, startSem, totalSems, opts) {
    startSem = startSem || "fall";
    totalSems = totalSems || 8;
    opts = opts || {};
    const completedSems = Math.max(0, opts.completedSems || 0);
    // Seeded RNG for "try another layout": seed 0 is fully deterministic;
    // higher seeds break ties randomly among near-equal choices, so each
    // variant is a different but equally valid arrangement.
    let rngState = (opts.seed || 0) * 2654435761 >>> 0;
    const rng = () => {
      rngState = (rngState + 0x6D2B79F5) >>> 0;
      let t = rngState;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const vary = (opts.seed || 0) > 0;

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

    // Chain depth: longest run of in-plan dependents below each course.
    // A course with depth 3 must leave at least 3 semesters after itself,
    // so balancing can never push a prerequisite so late its chain breaks.
    const depth = {};
    function chainDepth(c) {
      if (depth[c] !== undefined) return depth[c];
      depth[c] = 0; // guard against cycles; real value set below
      let d = 0;
      outEdges[c].forEach(dep => { d = Math.max(d, chainDepth(dep) + 1); });
      depth[c] = d;
      return d;
    }
    codes.forEach(chainDepth);

    // ── Kahn's Algorithm ────────────────────────────────────
    const queue = codes.filter(c => inDegree[c] === 0);
    const sortedCodes = [];

    while (queue.length > 0) {
      // Most-constrained first: longest prerequisite chains, then heavier
      // courses (packing big credit blocks first spreads loads more evenly).
      queue.sort((a, b) =>
        (depth[b] - depth[a]) ||
        ((COURSES[b].credits || 3) - (COURSES[a].credits || 3)));
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
        completed: i < completedSems,
        courses: [],
        credits: 0,
        difficulty_sum: 0
      });
    }

    const MAX_CREDITS = opts.maxCredits || 18;
    const MAX_DIFFICULTY = 20; // sum of course difficulties per semester
    const MAX_COURSES = 6;

    const assignedSem = {}; // courseCode → semester index
    const warnings = [];

    // ── Assign courses to semesters ─────────────────────────
    // Balanced placement: among every semester a course can legally occupy,
    // take the one with the fewest credits so the load spreads evenly
    // instead of front-loading the first years.
    sortedCodes.forEach(code => {
      const course = COURSES[code];

      // Earliest semester: after completed terms, and one after the latest prereq
      let earliest = completedSems;
      course.prereqs.forEach(prereq => {
        if (assignedSem[prereq] !== undefined) {
          earliest = Math.max(earliest, assignedSem[prereq] + 1);
        }
      });
      // Latest semester that still leaves room for this course's dependents.
      const latest = totalSems - 1 - (depth[code] || 0);

      const fits = sem =>
        !sem.completed &&
        course.offered.includes(sem.type) &&
        sem.credits + course.credits <= MAX_CREDITS &&
        sem.difficulty_sum + (course.difficulty || 3) <= MAX_DIFFICULTY &&
        sem.courses.length < MAX_COURSES;

      // Preferred window respects the chain bound; if nothing fits there,
      // fall back to any legal semester rather than dropping the course.
      let candidates = semesters.filter(s => s.index >= earliest && s.index <= latest && fits(s));
      if (candidates.length === 0) {
        candidates = semesters.filter(s => s.index >= earliest && fits(s));
      }
      // Courses with dependents stay as early as possible so term-locked
      // chains always have room; chain-end courses go to the lightest
      // semester, which is what actually spreads the load.
      let sem;
      if ((depth[code] || 0) > 0) {
        candidates.sort((a, b) => a.index - b.index);
        sem = candidates[0];
      } else {
        candidates.sort((a, b) =>
          (a.credits - b.credits) ||
          (a.difficulty_sum - b.difficulty_sum) ||
          (a.index - b.index));
        if (vary && candidates.length > 1) {
          // Any semester within 3 credits of the lightest is fair game.
          const near = candidates.filter(s => s.credits <= candidates[0].credits + 3);
          sem = near[Math.floor(rng() * near.length)];
        } else {
          sem = candidates[0];
        }
      }

      if (sem) {
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
        assignedSem[code] = sem.index;
      } else {
        warnings.push(`Could not schedule ${course.code} (${course.name}) in ${totalSems} semesters. Consider an extra semester.`);
      }
    });

    // ── Rebalance ───────────────────────────────────────────
    // Greedy placement can still stack chain tails late. Keep moving a course
    // out of the heaviest semester into a strictly lighter legal one (between
    // its prereqs and dependents) until no move improves the spread.
    let moved = true, guard = 0;
    while (moved && guard++ < 80) {
      moved = false;
      const heaviest = semesters
        .filter(s => !s.completed && s.courses.length > 0)
        .sort((a, b) => b.credits - a.credits)[0];
      if (!heaviest) break;
      for (const entry of [...heaviest.courses]) {
        const course = COURSES[entry.id];
        if (!course) continue;
        let lo = completedSems, hi = totalSems - 1;
        course.prereqs.forEach(p => {
          if (assignedSem[p] !== undefined) lo = Math.max(lo, assignedSem[p] + 1);
        });
        (outEdges[entry.id] || []).forEach(d => {
          if (assignedSem[d] !== undefined) hi = Math.min(hi, assignedSem[d] - 1);
        });
        let best = null;
        for (const t of semesters) {
          if (t.index < lo || t.index > hi || t === heaviest || t.completed) continue;
          if (!course.offered.includes(t.type)) continue;
          if (t.credits + entry.credits > MAX_CREDITS) continue;
          if (t.difficulty_sum + (course.difficulty || 3) > MAX_DIFFICULTY) continue;
          if (t.courses.length >= MAX_COURSES) continue;
          if (t.credits + entry.credits >= heaviest.credits) continue; // must strictly even out
          if (!best || t.credits < best.credits) best = t;
        }
        if (best) {
          heaviest.courses.splice(heaviest.courses.indexOf(entry), 1);
          heaviest.credits -= entry.credits;
          heaviest.difficulty_sum -= (course.difficulty || 3);
          best.courses.push(entry);
          best.credits += entry.credits;
          best.difficulty_sum += (course.difficulty || 3);
          assignedSem[entry.id] = best.index;
          moved = true;
          break;
        }
      }
    }

    if (missing.length > 0) {
      warnings.push(`Unrecognized course codes (not in database): ${missing.join(", ")}. They were skipped.`);
    }

    // ── Compute per-semester difficulty rating ──────────────
    recompute(semesters);

    return { plan: semesters, warnings, assignedSem };
  }

  // Recompute credits, difficulty sums, and labels for every semester.
  // Called after generation and again after any manual plan edit.
  function recompute(semesters) {
    semesters.forEach(sem => {
      sem.credits = sem.courses.reduce((s, c) => s + c.credits, 0);
      sem.difficulty_sum = sem.courses.reduce((s, c) => s + (COURSES[c.id]?.difficulty || 3), 0);

      if (sem.courses.length === 0) {
        sem.difficulty_avg = 0;
        sem.difficulty_label = sem.completed ? "Completed" : "Empty";
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
  }

  // ── Public API ─────────────────────────────────────────────
  return { generate, selectBestProfessor, recompute };

})();
