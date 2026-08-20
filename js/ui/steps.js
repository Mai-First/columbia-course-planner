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
      desc: "The liberal arts college. You complete the Core Curriculum alongside your major."
    },
    {
      id: "SEAS",
      icon: "&#9881;",
      name: "Engineering (SEAS)",
      full: "Fu Foundation School of Engineering",
      desc: "Engineering and applied science degrees, with a shared first-year foundation."
    },
    {
      id: "GS",
      icon: "&#9880;",
      name: "General Studies",
      full: "School of General Studies (GS)",
      desc: "The same Columbia BA for students returning to school or on a nontraditional path."
    },
    {
      id: "Barnard",
      icon: "&#10050;",
      name: "Barnard College",
      full: "Barnard College",
      desc: "Women's college affiliated with Columbia, with full cross-registration."
    }
  ];

  const selected = STATE.school;

  return `
    <div class="step-header">
      <h2>Choose Your School</h2>
      <p>Pick the school you attend or plan to attend.</p>
    </div>
    <div class="school-grid">
      ${schools.map(s => `
        <div class="school-card ${selected === s.id ? 'selected' : ''}"
             role="button" tabindex="0" aria-pressed="${selected === s.id}"
             onclick="selectSchool('${s.id}')"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectSchool('${s.id}');}">
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
      <p>Pick your major. Add a double major or minor if you want one.</p>
    </div>
    <div class="major-form">

      <div class="form-block">
        <h3>Primary Major <span class="badge">Required</span></h3>
        <select id="sel-major1" onchange="updateMajor1(this.value)">
          <option value="">Select a major</option>
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
              <option value="">Select a second major</option>
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
              <option value="">Select a minor</option>
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
          Your plan will only schedule courses in the semesters you have left; earlier years show as already completed.
          Mark finished courses in the next step so they won't be scheduled again.
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
      <p>Required courses are pre-selected. Check <strong>Done</strong> on anything you've finished so it isn't scheduled again.</p>
    </div>
    ${completedCount > 0 ? `
      <div class="completed-banner">
        &#10003; <strong>${completedCount} course${completedCount > 1 ? "s" : ""} marked done.</strong> They won't be scheduled.
      </div>
    ` : ""}
    <datalist id="all-courses">
      ${Object.values(COURSES).map(c => `<option value="${c.code}">${c.name}</option>`).join("")}
    </datalist>
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
          <p>&#9432; Required courses are locked; they all appear in your plan.</p>
          <p style="margin-top:6px;">&#9432; Use the checkboxes to pick your electives.</p>
          <p style="margin-top:6px;">&#9432; The plan respects prerequisites and offered terms, and spreads credits evenly across your remaining semesters.</p>
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
        ${groupCourseList(group).map(code => {
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
        ${needsSel ? `
          <div class="add-course-row">
            <input list="all-courses" class="add-course-input"
                   placeholder="Add any course as an option (type a code or name)&hellip;"
                   onchange="addCustomElective('${group.id}', this)">
          </div>` : ""}
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
  const completedSems = STATE.planResult.completedSems || 0;

  // Completed semesters don't get grid boxes; they're summarized up top.
  const remaining = plan.filter(sem => !sem.completed);
  const yearGroups = [];
  remaining.forEach(sem => {
    let yg = yearGroups.find(y => y.year === sem.year);
    if (!yg) { yg = { year: sem.year, semesters: [] }; yearGroups.push(yg); }
    yg.semesters.push(sem);
  });

  const taken = Object.keys(STATE.completedCourses).filter(c => COURSES[c]);
  const completedYears = Math.floor(completedSems / 2);
  const takenHtml = (completedSems > 0 || taken.length > 0) ? `
    <div class="taken-card">
      <h4>&#10003; Taken so far${completedYears > 0 ? ` &middot; Year${completedYears > 1 ? "s 1&ndash;" + completedYears : " 1"} complete` : ""}</h4>
      ${taken.length > 0
        ? `<div class="taken-chips">${taken.map(code =>
            `<span class="taken-chip" title="${COURSES[code].name}">${COURSES[code].code}</span>`).join("")}</div>`
        : `<div class="taken-empty">Nothing marked yet. Go back to Courses and check off what you've finished.</div>`}
    </div>
  ` : "";

  return `
    <div class="plan-toolbar">
      <div>
        <h2>Your ${numYears}-Year Plan</h2>
        <div class="plan-meta">
          ${STATE.majors.filter(Boolean).map(id => MAJORS[id] ? MAJORS[id].name : "").join(" + ")}
          ${STATE.minors[0] && MINORS[STATE.minors[0]] ? " + " + MINORS[STATE.minors[0]].name : ""}
          &nbsp;&bull;&nbsp; ${totalCredits} credits planned
          &nbsp;&bull;&nbsp; max ${creditCap()} credits/term (${STATE.school} policy)
          ${(STATE.planResult.completedSems || 0) > 0 ? `&nbsp;&bull;&nbsp; resuming from Year ${Math.floor(STATE.planResult.completedSems / 2) + 1}` : ""}
        </div>
        <div class="plan-edit-hint">Use "Move to" and "Swap with" on any course card to adjust the plan; credits and difficulty update as you go.</div>
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

    ${takenHtml}

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
          <div class="cl-item done">${c.code} &middot; ${c.name}</div>
        `).join("")}
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
  const cap = creditCap();

  // Semesters the student has already finished: no courses, just a marker.
  if (sem.completed) {
    return `
      <div class="semester-box completed">
        <div class="semester-box-header${typeClass}">
          <span class="semester-title">${icon} ${sem.label}</span>
          <span class="semester-credits">&#10003; done</span>
        </div>
        <div class="sem-completed-note">Already completed before this plan.</div>
      </div>
    `;
  }

  // Build difficulty bar: fill proportional to avg (max 5)
  const diffPct = Math.min(100, Math.round((diffAvg / 5) * 100));

  return `
    <div class="semester-box">
      <div class="semester-box-header${typeClass}">
        <span class="semester-title">${icon} ${sem.label}</span>
        <span class="semester-credits">${sem.credits} / ${cap} credits</span>
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

  // Edit controls: move to another legal semester, or swap for an
  // alternative from the same choose/elective group.
  const eligible = eligibleSemestersFor(c.id);
  const alts = planAlternativesFor(c.id);
  const editHtml = (eligible.length || alts.length) ? `
    <div class="cc-edit">
      ${eligible.length ? `
        <select class="cc-edit-select" onchange="if(this.value!==''){movePlanCourse('${c.id}', parseInt(this.value));}">
          <option value="">Move to&hellip;</option>
          ${eligible.map(e => `<option value="${e.index}">${e.label}</option>`).join("")}
        </select>` : ""}
      ${alts.length ? `
        <select class="cc-edit-select" onchange="if(this.value!==''){swapPlanCourse('${c.id}', this.value);}">
          <option value="">Swap with&hellip;</option>
          ${alts.map(a => `<option value="${a}">${COURSES[a].code} &middot; ${COURSES[a].name}</option>`).join("")}
        </select>` : ""}
    </div>
  ` : "";

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
      ${editHtml}
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
  text += "* Professor ratings from CULPA (culpa.info). Check for current reviews.\n";

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "columbia-course-plan.txt";
  a.click();
  URL.revokeObjectURL(url);
};
