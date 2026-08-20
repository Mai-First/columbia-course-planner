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
  customElectives: {},      // { groupId: [courseCode, ...] } — student-added options
  freeElectives: [],        // [courseCode, ...] — courses beyond major requirements
  planVariant: 0,           // increments on "try another layout"
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
    selectedElectives: {}, customElectives: {}, freeElectives: [],
    planVariant: 0, planResult: null
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
  STATE.customElectives = {};
  STATE.freeElectives = [];
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

// A group's full option list: its own menu plus any courses the student added.
window.groupCourseList = function (group) {
  const custom = (STATE.customElectives[group.id] || []).filter(c => !group.courses.includes(c));
  return group.courses.concat(custom);
};

// Resolve typed input to a catalog key. Accepts a short key ("COMS4771"),
// an official code ("COMS W4771"), or a datalist pick, case-insensitive.
function resolveCourseInput(raw) {
  const norm = raw.toLowerCase().replace(/\s+/g, " ");
  return Object.keys(COURSES).find(k =>
    k.toLowerCase() === norm.replace(/ /g, "") ||
    COURSES[k].code.toLowerCase() === norm ||
    (COURSES[k].code + " — " + COURSES[k].name).toLowerCase() === norm ||
    (COURSES[k].code + " · " + COURSES[k].name).toLowerCase() === norm
  );
}

// Add any catalog course to an elective/choose group.
window.addCustomElective = function (groupId, inputEl) {
  const raw = (inputEl.value || "").trim();
  if (!raw) return;
  const key = resolveCourseInput(raw);
  inputEl.value = "";
  if (!key) {
    showToast(`No course matching "${raw}" in the catalog.`);
    return;
  }
  if (STATE.completedCourses[key]) {
    showToast(`${COURSES[key].code} is marked as already completed.`);
    return;
  }
  if (!STATE.customElectives[groupId]) STATE.customElectives[groupId] = [];
  const group = getRequirementGroups().find(g => g.id === groupId);
  const already = group && groupCourseList(group).includes(key);
  if (already) {
    showToast(`${COURSES[key].code} is already an option in this group.`);
    return;
  }
  STATE.customElectives[groupId].push(key);
  // Auto-select it if the group still has room; otherwise tell the student
  // how to make the swap themselves.
  const sel = STATE.selectedElectives[groupId] || (STATE.selectedElectives[groupId] = []);
  if (group && sel.length < groupSelectCount(group) && !sel.includes(key)) {
    sel.push(key);
    render();
    showToast(`Added ${COURSES[key].code} and selected it.`);
  } else {
    render();
    showToast(`Added ${COURSES[key].code} as an option. Uncheck another course to select it.`);
  }
};

// ── Free electives & degree credits ───────────────────────────
// Columbia degrees require more credits than the major alone (about 124 at
// CC/GS, 128 at SEAS, 122 at Barnard); free electives close the gap.
window.degreeCredits = function () {
  const totals = STATE.majors.filter(Boolean)
    .map(id => (MAJORS[id] && MAJORS[id].min_credits) || 0);
  return Math.max(124, ...totals);
};

window.freeElectiveCredits = function () {
  return STATE.freeElectives.reduce((s, c) => s + (COURSES[c]?.credits || 3), 0);
};

window.completedCreditsMarked = function () {
  return Object.keys(STATE.completedCourses)
    .reduce((s, c) => s + (COURSES[c]?.credits || 0), 0);
};

window.addFreeElective = function (inputEl) {
  const raw = (inputEl.value || "").trim();
  if (!raw) return;
  const key = resolveCourseInput(raw);
  inputEl.value = "";
  if (!key) {
    showToast(`No course matching "${raw}" in the catalog.`);
    return;
  }
  if (STATE.completedCourses[key]) {
    showToast(`${COURSES[key].code} is marked as already completed.`);
    return;
  }
  if (STATE.freeElectives.includes(key) || collectAllCourseCodes().includes(key)) {
    showToast(`${COURSES[key].code} is already in your plan.`);
    return;
  }
  STATE.freeElectives.push(key);
  render();
  showToast(`Added ${COURSES[key].code} as a free elective.`);
};

window.removeFreeElective = function (key) {
  const i = STATE.freeElectives.indexOf(key);
  if (i > -1) STATE.freeElectives.splice(i, 1);
  render();
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

// Per-term registration caps without a petition, from each school's
// official policies (CC/GS: 18, Barnard: 19, SEAS: 21).
window.CREDIT_CAPS = { CC: 18, SEAS: 21, GS: 18, Barnard: 19 };

window.creditCap = function () {
  return CREDIT_CAPS[STATE.school] || 18;
};

window.buildPlan = function () {
  const allCourses = collectAllCourseCodes();
  if (allCourses.length === 0) {
    showToast("No courses selected.");
    return;
  }
  // Semesters already behind the student (year 3 = 4 semesters done).
  const completedSems = STATE.currentYear ? (STATE.currentYear - 1) * 2 : 0;

  // Try a standard 4-year (8-semester) plan first, then auto-extend for
  // heavy loads or late starts so courses aren't dropped into warnings.
  const MIN_SEMS = 8;
  const MAX_SEMS = Math.max(12, completedSems + 8);
  let result = null;
  for (let sems = MIN_SEMS; sems <= MAX_SEMS; sems += 2) {
    result = Scheduler.generate(allCourses, STATE.startSemester, sems, {
      completedSems: completedSems,
      maxCredits: creditCap(),
      seed: STATE.planVariant
    });
    const couldNotPlace = result.warnings.some(w => w.includes("Could not schedule"));
    if (!couldNotPlace) break;
  }
  result.completedSems = completedSems;
  STATE.planResult = result;
  STATE.step = 4;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// "Try another layout": rebuild the plan with a different (still valid)
// arrangement. Manual moves and swaps are replaced by the new layout.
window.regeneratePlan = function () {
  STATE.planVariant = (STATE.planVariant || 0) + 1;
  buildPlan();
  showToast(`Layout ${STATE.planVariant + 1}. Same requirements, different arrangement.`);
};

// ── Plan editing ──────────────────────────────────────────────

function planFindCourse(courseId) {
  const plan = STATE.planResult ? STATE.planResult.plan : [];
  for (const sem of plan) {
    const idx = sem.courses.findIndex(c => c.id === courseId);
    if (idx > -1) return { sem, idx, entry: sem.courses[idx] };
  }
  return null;
}

function planHasCourse(courseId) {
  return !!planFindCourse(courseId);
}

// Semesters a course could legally move to: not in the past, offered that
// term, within the credit cap, and keeping prereqs before dependents.
window.eligibleSemestersFor = function (courseId) {
  const plan = STATE.planResult.plan;
  const course = COURSES[courseId];
  const loc = planFindCourse(courseId);
  if (!course || !loc) return [];

  let minIdx = 0, maxIdx = plan.length - 1;
  plan.forEach((sem, i) => {
    sem.courses.forEach(c => {
      if (course.prereqs.includes(c.id)) minIdx = Math.max(minIdx, i + 1);
      if ((COURSES[c.id]?.prereqs || []).includes(courseId)) maxIdx = Math.min(maxIdx, i - 1);
    });
  });

  return plan.filter((sem, i) =>
    i >= minIdx && i <= maxIdx &&
    !sem.completed &&
    i !== loc.sem.index &&
    course.offered.includes(sem.type) &&
    sem.credits + course.credits <= creditCap()
  ).map(sem => ({ index: sem.index, label: sem.label }));
};

window.movePlanCourse = function (courseId, targetIdx) {
  const loc = planFindCourse(courseId);
  const ok = eligibleSemestersFor(courseId).some(e => e.index === targetIdx);
  if (!loc || !ok) {
    showToast("That semester doesn't work for this course (offering, credits, or prerequisites).");
    return;
  }
  loc.sem.courses.splice(loc.idx, 1);
  STATE.planResult.plan[targetIdx].courses.push(loc.entry);
  Scheduler.recompute(STATE.planResult.plan);
  render();
  showToast(`${loc.entry.code} moved to ${STATE.planResult.plan[targetIdx].label}.`);
};

// Alternatives: other courses from the same choose/elective group(s) that
// aren't already in the plan or completed.
window.planAlternativesFor = function (courseId) {
  const alts = new Set();
  getRequirementGroups().forEach(group => {
    if (!groupNeedsSelection(group)) return;
    const options = groupCourseList(group);
    if (!options.includes(courseId)) return;
    options.forEach(c => {
      if (c !== courseId && COURSES[c] && !STATE.completedCourses[c] && !planHasCourse(c)) {
        alts.add(c);
      }
    });
  });
  return [...alts];
};

window.swapPlanCourse = function (courseId, altId) {
  const loc = planFindCourse(courseId);
  const alt = COURSES[altId];
  if (!loc || !alt) return;

  // Keep the Step 3 checklist consistent with the swap.
  getRequirementGroups().forEach(group => {
    if (!groupNeedsSelection(group)) return;
    const sel = STATE.selectedElectives[group.id] || [];
    const i = sel.indexOf(courseId);
    if (i > -1 && groupCourseList(group).includes(altId)) sel[i] = altId;
  });

  loc.sem.courses.splice(loc.idx, 1);

  const bestProf = Scheduler.selectBestProfessor(altId);
  const entry = {
    code: alt.code, id: altId, name: alt.name, credits: alt.credits,
    category: alt.category || "major", dept: alt.dept,
    professor: bestProf, allProfessors: alt.professors || []
  };

  // Prefer the same semester; otherwise first semester that legally fits.
  const plan = STATE.planResult.plan;
  const fits = sem => !sem.completed &&
    alt.offered.includes(sem.type) &&
    sem.credits + alt.credits <= creditCap() &&
    !plan.some((s, i) => s.courses.some(c =>
      (alt.prereqs.includes(c.id) && i >= sem.index) ||
      ((COURSES[c.id]?.prereqs || []).includes(altId) && i <= sem.index)));
  let target = fits(loc.sem) ? loc.sem : plan.find(fits);

  if (!target) {
    loc.sem.courses.splice(loc.idx, 0, loc.entry); // revert
    showToast(`${alt.code} doesn't fit anywhere in this plan. Try regenerating instead.`);
    return;
  }
  target.courses.push(entry);
  Scheduler.recompute(plan);
  render();
  showToast(`Swapped in ${alt.code} (${target.label}).`);
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

  // Add free electives (courses beyond the major, toward the degree total)
  STATE.freeElectives.forEach(c => codes.add(c));

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
