# Validate Catalog

Validate the integrity of the catalog data, which lives in three files:
`js/data/courses.js` (`window.COURSES`), `js/data/majors.js` (`window.MAJORS` and `window.MINORS`),
and `js/data/professors.js` (`window.PROFESSORS`). Run all checks and report issues clearly.

## Instructions

Do NOT just eyeball the files — run the script below. It loads the three data files in a fake
`window` sandbox, then validates the flat globals.

Run this exact command from the project root:

```bash
node -e "
const fs = require('fs');

// ── Load the three data files into a fake window ──
const window = {};
global.window = window;
for (const f of ['js/data/courses.js', 'js/data/professors.js', 'js/data/majors.js']) {
  if (!fs.existsSync(f)) { console.error('MISSING FILE:', f); process.exit(1); }
  try {
    eval(fs.readFileSync(f, 'utf8'));
  } catch (e) {
    console.error('PARSE ERROR in ' + f + ' —', e.message);
    process.exit(1);
  }
}

const courses     = window.COURSES     || {};
const majors      = window.MAJORS      || {};
const minors      = window.MINORS      || {};
const professors  = window.PROFESSORS  || {};
const VALID_SCHOOLS = ['CC','SEAS','GS','Barnard'];

const errors   = [];
const warnings = [];

// ── 1. Course codes referenced in majors that don't exist in courses ──
const allMajorRefs = new Set();
for (const [majorId, major] of Object.entries(majors)) {
  for (const group of (major.requirement_groups || [])) {
    for (const code of (group.courses || [])) {
      allMajorRefs.add(code);
      if (!courses[code]) {
        errors.push(\`MISSING COURSE: \"\${code}\" referenced in \${majorId} › \${group.id} but not defined in courses\`);
      }
    }
  }
}

// ── 2. Course codes referenced in minors that don't exist in courses ──
for (const [minorId, minor] of Object.entries(minors)) {
  for (const code of (minor.courses || [])) {
    if (!courses[code]) {
      errors.push(\`MISSING COURSE: \"\${code}\" referenced in minor \${minorId} but not defined in courses\`);
    }
  }
}

// ── 3. Courses defined but never referenced by any major or minor ──
const allMinorRefs = new Set(Object.values(minors).flatMap(m => m.courses || []));
for (const code of Object.keys(courses)) {
  if (!allMajorRefs.has(code) && !allMinorRefs.has(code)) {
    warnings.push(\`ORPHAN COURSE: \"\${code}\" (\${courses[code].name}) is defined but not referenced by any major or minor\`);
  }
}

// ── 4. Elective groups where elective_count > courses listed ──
//     and required groups where choose > courses listed ──
for (const [majorId, major] of Object.entries(majors)) {
  for (const group of (major.requirement_groups || [])) {
    const listed = (group.courses || []).length;
    if (group.type === 'elective') {
      const count = group.elective_count || 0;
      if (count > listed) {
        errors.push(\`ELECTIVE MISMATCH: \${majorId} › \${group.id} requires \${count} electives but only lists \${listed} course options\`);
      }
    }
    if (group.choose !== undefined && group.choose > listed) {
      errors.push(\`CHOOSE MISMATCH: \${majorId} › \${group.id} has choose:\${group.choose} but only lists \${listed} course options\`);
    }
  }
}

// ── 5. Duplicate major IDs ──
//     (MAJORS is a flat object, so JS already dedupes keys; flag accidental
//      same-name collisions across schools as a warning instead.)
const nameSchool = {};
for (const [majorId, major] of Object.entries(majors)) {
  const key = (major.name || '') + '|' + (major.school || '');
  if (nameSchool[key]) {
    warnings.push(\`DUPLICATE MAJOR: \"\${major.name}\" in \${major.school} appears as both \${nameSchool[key]} and \${majorId}\`);
  }
  nameSchool[key] = majorId;
}

// ── 6. Duplicate group IDs within a major ──
for (const [majorId, major] of Object.entries(majors)) {
  const seen = new Set();
  for (const group of (major.requirement_groups || [])) {
    if (seen.has(group.id)) {
      errors.push(\`DUPLICATE GROUP ID: \"\${group.id}\" appears more than once in \${majorId}\`);
    }
    seen.add(group.id);
  }
}

// ── 7. Majors missing required fields ──
for (const [majorId, major] of Object.entries(majors)) {
  if (!major.name)               errors.push(\`MISSING FIELD: \${majorId} has no name\`);
  if (!major.degree)             errors.push(\`MISSING FIELD: \${majorId} has no degree\`);
  if (!major.school)             errors.push(\`MISSING FIELD: \${majorId} has no school\`);
  else if (!VALID_SCHOOLS.includes(major.school))
                                 errors.push(\`INVALID SCHOOL: \${majorId} has school \"\${major.school}\" (expected one of \${VALID_SCHOOLS.join(', ')})\`);
  if (!major.min_credits)        warnings.push(\`MISSING FIELD: \${majorId} has no min_credits\`);
  if (!major.requirement_groups) errors.push(\`MISSING FIELD: \${majorId} has no requirement_groups\`);
}

// ── 8. Every professor named on a course exists in PROFESSORS ──
//     (Placeholder names like 'TBA' / 'Various...' are allowed.)
const isPlaceholderProf = n => /^TBA$|various|staff|^see |advisor/i.test(n);
for (const [code, course] of Object.entries(courses)) {
  for (const name of (course.professors || [])) {
    if (!isPlaceholderProf(name) && !professors[name]) {
      warnings.push(\`UNKNOWN PROFESSOR: \"\${name}\" on \${code} (\${course.code}) is not defined in PROFESSORS\`);
    }
  }
}

// ── 9. Every prereq code exists in COURSES ──
for (const [code, course] of Object.entries(courses)) {
  for (const pre of (course.prereqs || [])) {
    if (!courses[pre]) {
      errors.push(\`MISSING PREREQ: \"\${pre}\" listed as prereq of \${code} (\${course.code}) but not defined in courses\`);
    }
  }
}

// ── 10. Every MINORS.available_to school is valid ──
for (const [minorId, minor] of Object.entries(minors)) {
  for (const s of (minor.available_to || [])) {
    if (!VALID_SCHOOLS.includes(s)) {
      errors.push(\`INVALID SCHOOL: minor \${minorId} lists available_to \"\${s}\" (expected one of \${VALID_SCHOOLS.join(', ')})\`);
    }
  }
}

// ── Summary ──
console.log('');
console.log('=== CATALOG VALIDATION REPORT ===');
console.log(\`Courses: \${Object.keys(courses).length}  |  Majors: \${Object.keys(majors).length}  |  Minors: \${Object.keys(minors).length}  |  Professors: \${Object.keys(professors).length}\`);
console.log('');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed — catalog is clean.');
} else {
  if (errors.length > 0) {
    console.log(\`❌ ERRORS (\${errors.length}) — must fix before deploying:\`);
    errors.forEach(e => console.log('  ' + e));
    console.log('');
  }
  if (warnings.length > 0) {
    console.log(\`⚠️  WARNINGS (\${warnings.length}) — review but not blocking:\`);
    warnings.forEach(w => console.log('  ' + w));
    console.log('');
  }
}

process.exit(errors.length > 0 ? 1 : 0);
"
```

After running, report the full output to the user exactly as printed. If there are errors, explain
what each one means and offer to fix them.

## Check reference
1. **MISSING COURSE** — a major/minor references a course code with no definition in `courses.js`.
2. **MISSING COURSE (minor)** — same, for a minor.
3. **ORPHAN COURSE** (warning) — a course defined but used by no major/minor.
4. **ELECTIVE / CHOOSE MISMATCH** — `elective_count` (or `choose`) exceeds the listed options.
5. **DUPLICATE MAJOR** (warning) — two major IDs share a name + school.
6. **DUPLICATE GROUP ID** — a `requirement_groups` id repeats within one major.
7. **MISSING FIELD / INVALID SCHOOL** — a major lacks name/degree/school/requirement_groups, or has a bad school.
8. **UNKNOWN PROFESSOR** (warning) — a non-placeholder professor named on a course is missing from `professors.js`.
9. **MISSING PREREQ** — a `prereqs` entry has no matching course definition.
10. **INVALID SCHOOL (minor)** — a minor's `available_to` lists a school other than CC/SEAS/GS/Barnard.
