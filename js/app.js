// ============================================================
// app.js — Main application controller
// ============================================================

// ── Global State ─────────────────────────────────────────────
window.STATE = {
  step: 1,
  school: null,
  majors: [null, null],     // [primary, double major]
  minors: [null],
  addDouble: false,
  addMinor: false,
  startSemester: "fall",
  currentYear: null,        // 1-4 (student's current year, optional)
  completedCourses: {},     // { courseCode: true } — already taken
  selectedElectives: {},    // { groupId: [courseCode, ...] }
  planResult: null
};

// ── Render ────────────────────────────────────────────────────
function render() {
  const el = document.getElementById("main-content");
  if (!el) return;

  switch (STATE.step) {
    case 1: el.innerHTML = renderStep1(); break;
    case 2: el.innerHTML = renderStep2(); break;
    case 3: el.innerHTML = renderStep3(); break;
    case 4: el.innerHTML = renderStep4(); break;
    default: el.innerHTML = "<p>Unknown step.</p>";
  }

  updateProgressBar();
}

function updateProgressBar() {
  const steps = document.querySelectorAll(".prog-step");
  const lines = document.querySelectorAll(".prog-line");

  steps.forEach((btn, i) => {
    const s = i + 1;
    btn.classList.remove("active", "done");
    if (s < STATE.step) btn.classList.add("done");
    else if (s === STATE.step) btn.classList.add("active");
    // Enable clicking back to completed steps
    btn.disabled = s > STATE.step;
  });

  lines.forEach((line, i) => {
    line.classList.toggle("done", i + 1 < STATE.step);
  });
}

// ── Navigation ────────────────────────────────────────────────
window.goToStep = function (n) {
  if (n < 1 || n > 4) return;
  if (n > STATE.step && !canAdvanceTo(n)) return;
  STATE.step = n;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function canAdvanceTo(step) {
  if (step === 2) return !!STATE.school;
  if (step === 3) return !!STATE.majors[0];
  if (step === 4) return !!STATE.planResult;
  return true;
}

window.resetApp = function () {
  window.STATE = {
    step: 1, school: null, majors: [null,null], minors: [null],
    addDouble: false, addMinor: false, startSemester: "fall",
    currentYear: null, completedCourses: {},
    selectedElectives: {}, planResult: null
  };
  render();
};

// ── Step 1 actions ────────────────────────────────────────────
window.selectSchool = function (schoolId) {
  STATE.school = schoolId;
  STATE.majors = [null, null];
  STATE.minors = [null];
  STATE.addDouble = false;
  STATE.addMinor = false;
  STATE.selectedElectives = {};
  STATE.completedCourses = {};
  render();
};

window.setCurrentYear = function (yr) {
  STATE.currentYear = yr ? parseInt(yr) : null;
};

// ── Step 2 actions ────────────────────────────────────────────
window.updateMajor1 = function (id) {
  STATE.majors[0] = id || null;
  STATE.selectedElectives = {};
  if (id) initElectives(id);
  render();
};

window.updateMajor2 = function (id) {
  STATE.majors[1] = id || null;
  if (id) initElectives(id);
  render();
};

window.updateMinor = function (id) {
  STATE.minors[0] = id || null;
  render();
};

window.toggleDouble = function (checked) {
  STATE.addDouble = checked;
  if (!checked) STATE.majors[1] = null;
  render();
};

window.toggleMinor = function (checked) {
  STATE.addMinor = checked;
  if (!checked) STATE.minors[0] = null;
  render();
};

// ── Group helpers ─────────────────────────────────────────────
// A group needs the student to pick a subset when it is an elective group
// OR a required group with a `choose: N` cap (e.g. "one from each subfield").
// Required groups without `choose` mean "take all listed courses".
window.groupNeedsSelection = function (group) {
  return group.type === "elective" || group.choose !== undefined;
};

// How many courses the student should end up with from this group.
window.groupSelectCount = function (group) {
  if (group.type === "elective") return group.elective_count || 0;
  if (group.choose !== undefined) return group.choose;
  return group.courses.length; // plain required → all of them
};

// Pre-select the first N courses for each group that needs a selection
function initElectives(majorId) {
  const major = MAJORS[majorId];
  if (!major) return;
  major.requirement_groups.forEach(group => {
    if (groupNeedsSelection(group) && !STATE.selectedElectives[group.id]) {
      STATE.selectedElectives[group.id] = group.courses.slice(0, groupSelectCount(group));
    }
  });
}

// ── Completed course actions ──────────────────────────────────
window.toggleCompleted = function (courseCode, checked) {
  if (checked) {
    STATE.completedCourses[courseCode] = true;
  } else {
    delete STATE.completedCourses[courseCode];
  }
  // Re-render the row to update visual state without full re-render
  const row = document.getElementById("row-" + courseCode);
  if (row) row.classList.toggle("course-completed", checked);
};

// ── Step 3 actions ────────────────────────────────────────────
window.toggleElective = function (groupId, courseCode, checked, el) {
  if (!STATE.selectedElectives[groupId]) STATE.selectedElectives[groupId] = [];
  const sel = STATE.selectedElectives[groupId];

  if (checked) {
    const group = getGroupById(groupId);
    const cap = group ? groupSelectCount(group) : 99;
    if (group && sel.length >= cap) {
      // Already at max; uncheck the box visually
      if (el) el.checked = false;
      showToast(`You can only select ${cap} course${cap === 1 ? "" : "s"} from this group.`);
      return;
    }
    if (!sel.includes(courseCode)) sel.push(courseCode);
  } else {
    const idx = sel.indexOf(courseCode);
    if (idx > -1) sel.splice(idx, 1);
  }

  // Re-render just the sidebar credit counts without full re-render
  const sidebar = document.querySelector(".checklist-sidebar");
  if (sidebar) {
    // Update the credit summary inline
    const allGroups = getRequirementGroups();
    const totalSelected = countSelectedCredits(allGroups);
    const progressEl = sidebar.querySelector(".credit-bar-fill");
    const labelEl = sidebar.querySelector(".credit-bar-label strong");
    if (progressEl && MAJORS[STATE.majors[0]]) {
      const pct = Math.min(100, Math.round(totalSelected / MAJORS[STATE.majors[0]].min_credits * 100));
      progressEl.style.width = pct + "%";
    }
    if (labelEl) labelEl.textContent = totalSelected;
  }
};

window.buildPlan = function () {
  const allCourses = collectAllCourseCodes();
  if (allCourses.length === 0) {
    showToast("No courses selected.");
    return;
  }
  // Try a standard 4-year (8-semester) plan first, then auto-extend up to 6
  // years for heavy loads (GS, double majors) so courses aren't dropped into
  // warnings. Use the first plan length where everything fits.
  const MIN_SEMS = 8, MAX_SEMS = 12;
  let result = null;
  for (let sems = MIN_SEMS; sems <= MAX_SEMS; sems += 2) {
    result = Scheduler.generate(allCourses, STATE.startSemester, sems);
    const couldNotPlace = result.warnings.some(w => w.includes("Could not schedule"));
    if (!couldNotPlace) break;
  }
  STATE.planResult = result;
  STATE.step = 4;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ── Helpers ───────────────────────────────────────────────────

// Collect all course codes to schedule (required + selected electives + minor)
// Excludes courses the student has already completed
window.collectAllCourseCodes = function () {
  const codes = new Set();
  const majorIds = STATE.majors.filter(Boolean);

  majorIds.forEach(majorId => {
    const major = MAJORS[majorId];
    if (!major) return;
    major.requirement_groups.forEach(group => {
      if (groupNeedsSelection(group)) {
        const sel = STATE.selectedElectives[group.id] || [];
        sel.forEach(c => codes.add(c));
      } else {
        group.courses.forEach(c => codes.add(c));
      }
    });
  });

  // Add minor courses
  const minorId = STATE.minors[0];
  if (minorId && MINORS[minorId]) {
    MINORS[minorId].courses.forEach(c => codes.add(c));
  }

  // Remove already-completed courses — the scheduler treats missing prereqs
  // as already satisfied, so prereq chains work correctly
  Object.keys(STATE.completedCourses).forEach(c => codes.delete(c));

  return [...codes];
};

// Get all requirement groups for current major(s)
window.getRequirementGroups = function () {
  const groups = [];
  const seen = new Set();

  STATE.majors.filter(Boolean).forEach(majorId => {
    const major = MAJORS[majorId];
    if (!major) return;
    major.requirement_groups.forEach(group => {
      const key = majorId + "_" + group.id;
      if (!seen.has(key)) {
        seen.add(key);
        groups.push({ ...group, _majorId: majorId });
      }
    });
  });

  return groups;
};

function getGroupById(groupId) {
  const groups = getRequirementGroups();
  return groups.find(g => g.id === groupId) || null;
}

// Target credits a group contributes toward the degree.
// Selection groups (electives or choose:N) count the number to pick × 3;
// plain required groups count the sum of all their courses' credits.
window.countRequiredCredits = function (groups) {
  return groups.reduce((sum, g) => {
    if (groupNeedsSelection(g)) {
      return sum + groupSelectCount(g) * 3;
    }
    return sum + g.courses.reduce((s, c) => s + (COURSES[c]?.credits || 3), 0);
  }, 0);
};

window.countSelectedCredits = function (groups) {
  return groups.reduce((sum, g) => sum + countGroupSelected(g), 0);
};

window.countGroupSelected = function (group) {
  if (groupNeedsSelection(group)) {
    const sel = STATE.selectedElectives[group.id] || [];
    return sel.reduce((s, c) => s + (COURSES[c]?.credits || 3), 0);
  }
  return group.courses.reduce((s, c) => s + (COURSES[c]?.credits || 3), 0);
};

// ── Toast notification ────────────────────────────────────────
function showToast(msg) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
    background:var(--grey-900);color:white;padding:10px 20px;
    border-radius:8px;font-size:13px;z-index:999;
    box-shadow:0 4px 20px rgba(0,0,0,.3);
    animation: fadeIn .2s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  render();
});
