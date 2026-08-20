// ============================================================
// steps.js — UI rendering for all 4 steps
// ============================================================

// ── Step 1: School Selection ──────────────────────────────────
window.renderStep1 = function () {
  const schools = [
    {
      id: "CC",
      icon: "&#9812;",
      name: "Columbia College",
      full: "Columbia College (CC)",
      desc: "The flagship liberal arts college. Students complete the renowned Core Curriculum alongside their major."
    },
    {
      id: "SEAS",
      icon: "&#9881;",
      name: "Engineering (SEAS)",
      full: "Fu Foundation School of Engineering",
      desc: "Rigorous science and engineering programs with access to Columbia's research centers and NYC tech scene."
    },
    {
      id: "GS",
      icon: "&#9880;",
      name: "General Studies",
      full: "School of General Studies (GS)",
      desc: "A full BA program for non-traditional students. Same Columbia degrees, flexible scheduling options."
    },
    {
      id: "Barnard",
      icon: "&#10050;",
      name: "Barnard College",
      full: "Barnard College",
      desc: "Affiliated women's college with cross-registration across Columbia. Strong liberal arts and STEM programs."
    }
  ];

  const selected = STATE.school;

  return `
    <div class="step-header">
      <h2>Choose Your School</h2>
      <p>Select the school you are enrolled in (or planning to enroll in).</p>
    </div>
    <div class="school-grid">
      ${schools.map(s => `
        <div class="school-card ${selected === s.id ? 'selected' : ''}"
             onclick="selectSchool('${s.id}')">
          <span class="school-card-icon">${s.icon}</span>
          <h3>${s.name}</h3>
          <div class="school-full">${s.full}</div>
          <p>${s.desc}</p>
        </div>
      `).join("")}
    </div>
    <div class="btn-actions">
      <button class="btn btn-primary" onclick="goToStep(2)"
              ${!selected ? "disabled" : ""}>
        Continue &rarr;
      </button>
    </div>
  `;
};

// ── Step 2: Major Selection ───────────────────────────────────
window.renderStep2 = function () {
  const school = STATE.school;
  const majorList = Object.values(MAJORS).filter(m => m.school === school);
  const minorList = Object.values(MINORS).filter(m =>
    !m.available_to || m.available_to.includes(school)
  );

  const allMajors = Object.values(MAJORS);

  function majorOptions(exclude) {
    return majorList
      .filter(m => m.id !== exclude)
      .map(m => `<option value="${m.id}" ${STATE.majors[1] === m.id ? 'selected' : ''}>${m.name}</option>`)
      .join("");
  }

  const doubleMajorMajors = majorList
    .filter(m => m.id !== STATE.majors[0])
    .map(m => `<option value="${m.id}" ${STATE.majors[1] === m.id ? 'selected' : ''}>${m.name} (${m.degree})</option>`)
    .join("");

  return `
    <div class="step-header">
      <h2>Choose Your Major</h2>
      <p>Select your primary major. Optionally add a double major or minor.</p>
    </div>
    <div class="major-form">

      <div class="form-block">
        <h3>Primary Major <span class="badge">Required</span></h3>
        <select id="sel-major1" onchange="updateMajor1(this.value)">
          <option value="">— Select a major —</option>
          ${majorList.map(m => `<option value="${m.id}" ${STATE.majors[0] === m.id ? 'selected' : ''}>${m.name} (${m.degree})</option>`).join("")}
        </select>
        ${STATE.majors[0] && MAJORS[STATE.majors[0]] ? `
          <div style="margin-top:10px;font-size:13px;color:var(--grey-600);line-height:1.5;">
            ${MAJORS[STATE.majors[0]].description}
          </div>
        ` : ""}
      </div>

      <div class="form-block">
        <label class="toggle-row">
          <input type="checkbox" id="chk-double" onchange="toggleDouble(this.checked)"
                 ${STATE.addDouble ? "checked" : ""}>
          Add a Double Major
        </label>
        ${STATE.addDouble ? `
          <div class="sub-select">
            <select id="sel-major2" onchange="updateMajor2(this.value)">
              <option value="">— Select a second major —</option>
              ${doubleMajorMajors}
            </select>
          </div>
        ` : ""}
      </div>

      <div class="form-block">
        <label class="toggle-row">
          <input type="checkbox" id="chk-minor" onchange="toggleMinor(this.checked)"
                 ${STATE.addMinor ? "checked" : ""}>
          Add a Minor
        </label>
        ${STATE.addMinor ? `
          <div class="sub-select">
            <select id="sel-minor" onchange="updateMinor(this.value)">
              <option value="">— Select a minor —</option>
              ${minorList.map(m => `<option value="${m.id}" ${STATE.minors[0] === m.id ? 'selected' : ''}>${m.name}</option>`).join("")}
            </select>
          </div>
        ` : ""}
      </div>

      <div class="form-block">
        <h3>When do you start?</h3>
        <div class="semester-choice">
          <label>
            <input type="radio" name="start-sem" value="fall"
                   ${STATE.startSemester !== "spring" ? "checked" : ""}
                   onchange="STATE.startSemester='fall'">
            Fall semester
          </label>
          <label>
            <input type="radio" name="start-sem" value="spring"
                   ${STATE.startSemester === "spring" ? "checked" : ""}
                   onchange="STATE.startSemester='spring'">
            Spring semester
          </label>
        </div>
      </div>

      <div class="form-block">
        <h3>What year are you currently in? <span class="badge badge-opt">Optional</span></h3>
        <p style="font-size:13px;color:var(--grey-600);margin:4px 0 10px;">
          If you've already completed some courses, you can mark them in the next step so they won't appear in your plan.
        </p>
        <div class="semester-choice">
          ${["Incoming / 1st Year","2nd Year","3rd Year","4th Year"].map((label, i) => `
            <label>
              <input type="radio" name="curr-year" value="${i + 1}"
                     ${STATE.currentYear === (i + 1) ? "checked" : ""}
                     onchange="setCurrentYear(this.value)">
              ${label}
            </label>
          `).join("")}
        </div>
      </div>

    </div>
    <div class="btn-actions">
      <button class="btn btn-ghost" onclick="goToStep(1)">&larr; Back</button>
      <button class="btn btn-primary" onclick="goToStep(3)"
              ${!STATE.majors[0] ? "disabled" : ""}>
        Review Course List &rarr;
      </button>
    </div>
  `;
};

// ── Step 3: Course Checklist ──────────────────────────────────
window.renderStep3 = function () {
  const allGroups = getRequirementGroups();
  const totalRequired = countRequiredCredits(allGroups);
  const totalSelected = countSelectedCredits(allGroups);
  const completedCount = Object.keys(STATE.completedCourses).length;

  return `
    <div class="step-header">
      <h2>Your Required Courses</h2>
      <p>All required courses are pre-selected. Check <strong>Already done</strong> for courses you've completed — they'll be excluded from your plan but their prereqs will be satisfied.</p>
    </div>
    ${completedCount > 0 ? `
      <div class="completed-banner">
        &#10003; <strong>${completedCount} course${completedCount > 1 ? "s" : ""} marked as completed</strong> — excluded from your plan.
      </div>
    ` : ""}
    <div class="checklist-layout">
      <div class="checklist-groups">
        ${allGroups.map(group => renderGroup(group)).join("")}
        <div class="btn-actions">
          <button class="btn btn-ghost" onclick="goToStep(2)">&larr; Back</button>
          <button class="btn btn-primary" onclick="buildPlan()">
            Generate 4-Year Plan &rarr;
          </button>
        </div>
      </div>
      <div class="checklist-sidebar">
        <div class="sidebar-card">
          <h4>Credit Summary</h4>
          <div class="credit-bar-wrap">
            <div class="credit-bar-label">
              <span>Selected credits</span>
              <span><strong>${totalSelected}</strong> / ~${MAJORS[STATE.majors[0]].min_credits}</span>
            </div>
            <div class="credit-bar">
              <div class="credit-bar-fill" style="width:${Math.min(100, Math.round(totalSelected / MAJORS[STATE.majors[0]].min_credits * 100))}%"></div>
            </div>
          </div>
          ${allGroups.map(g => {
            const gSelected = countGroupSelected(g);
            return `
              <div class="credit-stat">
                <span>${g.name}</span>
                <strong>${gSelected} cr</strong>
              </div>
            `;
          }).join("")}
        </div>
        <div class="sidebar-card" style="font-size:12px;color:var(--grey-600);line-height:1.6;">
          <h4>Notes</h4>
          <p>&#9432; Required courses are locked and will all appear in your plan.</p>
          <p style="margin-top:6px;">&#9432; Elective checkboxes let you choose which courses to include.</p>
          <p style="margin-top:6px;">&#9432; The algorithm respects prerequisites and semester availability.</p>
          <p style="margin-top:6px;">&#9432; Always verify with the <a href="https://bulletin.columbia.edu" target="_blank">Columbia Bulletin</a> and your advisor.</p>
        </div>
      </div>
    </div>
  `;
};

function renderGroup(group) {
  const needsSel = groupNeedsSelection(group);
  const needed = groupSelectCount(group);
  const selected = (STATE.selectedElectives[group.id] || []).length;

  return `
    <div class="req-group">
      <div class="req-group-header">
        <h4>${group.name}</h4>
        <div class="req-group-meta">
          ${needsSel
            ? `${selected} / ${needed} selected`
            : `${group.courses.length} required`
          }
        </div>
      </div>
      <div class="req-group-body">
        ${group.courses.map(code => {
          const c = COURSES[code];
          if (!c) return "";
          const isChecked = needsSel
            ? (STATE.selectedElectives[group.id] || []).includes(code)
            : true;
          const isDone = !!STATE.completedCourses[code];
          return `
            <div class="course-row ${isDone ? "course-completed" : ""}" id="row-${code}">
              <input type="checkbox"
                     ${needsSel ? (isChecked ? "checked" : "") : "checked disabled"}
                     ${isDone ? "disabled" : ""}
                     onchange="toggleElective('${group.id}', '${code}', this.checked, this)">
              <span class="course-code">${c.code}</span>
              <span class="course-name">${c.name}</span>
              <span class="course-credits">${c.credits} cr</span>
              <span class="course-offered">${c.offered.map(o => o === "fall" ? "F" : "Sp").join("/")}</span>
              <label class="done-label" title="Mark as already completed">
                <input type="checkbox" class="done-chk"
                       ${isDone ? "checked" : ""}
                       onchange="toggleCompleted('${code}', this.checked)">
                <span>Done</span>
              </label>
            </div>
          `;
        }).join("")}
        ${needsSel ? `<div class="elective-note">Choose ${needed} from above.</div>` : ""}
        ${group.note ? `<div class="elective-note">&#9432; ${group.note}</div>` : ""}
      </div>
    </div>
  `;
}

// ── Step 4: 4-Year Plan ───────────────────────────────────────
window.renderStep4 = function () {
  const { plan, warnings } = STATE.planResult;

  const totalCredits = plan.reduce((s, sem) => s + sem.credits, 0);
  const numYears = Math.ceil(plan.length / 2);
  const yearGroups = Array.from({ length: numYears }, (_, yr) => ({
    year: yr + 1,
    semesters: plan.slice(yr * 2, yr * 2 + 2)
  }));

  return `
    <div class="plan-toolbar">
      <div>
        <h2>Your ${numYears}-Year Plan</h2>
        <div class="plan-meta">
          ${STATE.majors.filter(Boolean).map(id => MAJORS[id] ? MAJORS[id].name : "").join(" + ")}
          ${STATE.minors[0] && MINORS[STATE.minors[0]] ? " + " + MINORS[STATE.minors[0]].name : ""}
          &nbsp;&bull;&nbsp; ${totalCredits} credits planned
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn btn-ghost" onclick="goToStep(3)">&larr; Edit Courses</button>
        <button class="btn btn-secondary" onclick="exportPlan()">&#8659; Export Plan</button>
        <button class="btn btn-ghost" onclick="resetApp()">Start Over</button>
      </div>
    </div>

    ${warnings.length > 0 ? `
      <div class="warnings-banner">
        <strong>&#9888; Scheduling Notices</strong>
        ${warnings.map(w => `<div>${w}</div>`).join("")}
      </div>
    ` : ""}

    <div class="plan-legend">
      <div class="legend-item"><div class="legend-dot" style="background:#3730A3"></div> Math</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--blue)"></div> CS Core</div>
      <div class="legend-item"><div class="legend-dot" style="background:#166534"></div> Elective</div>
      <div class="legend-item"><div class="legend-dot" style="background:#92400E"></div> Physics/Science</div>
      <div class="legend-item"><div class="legend-dot" style="background:#6B21A8"></div> Writing</div>
      <div class="legend-item"><div class="legend-dot" style="background:#9F1239"></div> Core Curriculum</div>
      <div class="legend-divider"></div>
      <div class="legend-item"><div class="diff-dot diff-light"></div> Light</div>
      <div class="legend-item"><div class="diff-dot diff-moderate"></div> Moderate</div>
      <div class="legend-item"><div class="diff-dot diff-heavy"></div> Heavy</div>
      <div class="legend-item"><div class="diff-dot diff-very-heavy"></div> Very Heavy</div>
    </div>

    <div class="plan-years">
      ${yearGroups.map(({ year, semesters }) => `
        <div class="plan-year">
          <div class="plan-year-header">Year ${year}</div>
          <div class="plan-year-sems">
            ${semesters.map(sem => renderSemesterBox(sem)).join("")}
          </div>
        </div>
      `).join("")}
    </div>

    <div class="plan-summary">
      <h3>Full Checklist</h3>
      <div class="checklist-mini">
        ${plan.flatMap(sem => sem.courses).map(c => `
          <div class="cl-item done">${c.code} — ${c.name}</div>
        `).join("")}
        ${Object.keys(STATE.completedCourses).length > 0 ? `
          <div style="margin-top:16px;font-weight:600;color:var(--grey-600);font-size:13px;">
            Already Completed (not in plan):
          </div>
          ${Object.keys(STATE.completedCourses).map(code => {
            const c = COURSES[code];
            if (!c) return "";
            return `<div class="cl-item done" style="opacity:.5;text-decoration:line-through;">${c.code} — ${c.name}</div>`;
          }).join("")}
        ` : ""}
      </div>
    </div>
  `;
};

function renderSemesterBox(sem) {
  const typeClass = sem.type === "spring" ? " spring" : "";
  const icon = sem.type === "fall" ? "&#9678;" : "&#9679;";
  const diffClass = sem.difficulty_class || "diff-empty";
  const diffLabel = sem.difficulty_label || "";
  const diffAvg = sem.difficulty_avg || 0;

  // Build difficulty bar: fill proportional to avg (max 5)
  const diffPct = Math.min(100, Math.round((diffAvg / 5) * 100));

  return `
    <div class="semester-box">
      <div class="semester-box-header${typeClass}">
        <span class="semester-title">${icon} ${sem.label}</span>
        <span class="semester-credits">${sem.credits} credits</span>
      </div>
      ${sem.courses.length > 0 ? `
        <div class="sem-difficulty-row">
          <span class="sem-diff-label ${diffClass}">${diffLabel}</span>
          <div class="sem-diff-bar-wrap" title="Expected difficulty: ${diffAvg}/5">
            <div class="sem-diff-bar ${diffClass}" style="width:${diffPct}%"></div>
          </div>
          <span class="sem-diff-num">${diffAvg}/5</span>
        </div>
      ` : ""}
      <div class="semester-courses">
        ${sem.courses.length === 0
          ? `<div style="font-size:12px;color:var(--grey-600);padding:8px;">No courses scheduled this semester.</div>`
          : sem.courses.map(c => renderCourseCard(c)).join("")
        }
      </div>
    </div>
  `;
}

function difficultyBadge(courseId) {
  const d = COURSES[courseId]?.difficulty || 3;
  const labels = { 1: "Very Easy", 2: "Easy", 3: "Moderate", 4: "Hard", 5: "Very Hard" };
  const classes = { 1: "diff-light", 2: "diff-light", 3: "diff-moderate", 4: "diff-heavy", 5: "diff-very-heavy" };
  return `<span class="course-diff-badge ${classes[d]}">${labels[d]}</span>`;
}

function renderCourseCard(c) {
  const prof = c.professor;
  const nuggetHtml = prof && prof.nugget
    ? `<span class="nugget ${prof.nugget}">${prof.nugget === "gold" ? "&#9733;" : "&#9734;"} ${prof.nugget}</span>`
    : "";

  const profHtml = prof
    ? `<a href="${prof.culpa_url}" target="_blank" rel="noopener">${prof.name}</a> ${nuggetHtml}`
    : (c.allProfessors && c.allProfessors.length > 0
        ? `<a href="https://culpa.info/search/instructors?search=${encodeURIComponent(c.allProfessors[0])}" target="_blank">${c.allProfessors[0]}</a>`
        : `<a href="https://culpa.info" target="_blank">Check CULPA</a>`
      );

  return `
    <div class="course-card">
      <div class="course-card-top">
        <span class="cc-code">${c.code}</span>
        <span class="cc-credits">${c.credits} cr</span>
      </div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-card-meta">
        <span class="cc-category ${c.category}">${c.category.replace(/-/g," ")}</span>
        ${difficultyBadge(c.id)}
      </div>
      <div class="cc-professor">
        <span>&#128100;</span>
        ${profHtml}
      </div>
    </div>
  `;
}

// ── Export ────────────────────────────────────────────────────
window.exportPlan = function () {
  const { plan } = STATE.planResult;
  let text = "COLUMBIA COURSE PLAN\n";
  text += "=".repeat(50) + "\n";
  text += "Major(s): " + STATE.majors.filter(Boolean).map(id => MAJORS[id]?.name || id).join(", ") + "\n";
  if (STATE.minors[0]) text += "Minor: " + (MINORS[STATE.minors[0]]?.name || STATE.minors[0]) + "\n";
  text += "\n";

  plan.forEach(sem => {
    if (sem.courses.length === 0) return;
    text += sem.label.toUpperCase() + " (" + sem.credits + " credits)\n";
    text += "-".repeat(40) + "\n";
    sem.courses.forEach(c => {
      const profName = c.professor ? c.professor.name : (c.allProfessors[0] || "TBD");
      text += `  ${c.code.padEnd(18)} ${c.name}\n`;
      text += `  ${"".padEnd(18)} Professor: ${profName} | ${c.credits} credits\n`;
    });
    text += "\n";
  });

  text += "\n* Always verify course offerings and requirements with the Columbia Bulletin and your advisor.\n";
  text += "* Professor ratings from CULPA (culpa.info) — check for current reviews.\n";

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "columbia-course-plan.txt";
  a.click();
  URL.revokeObjectURL(url);
};
