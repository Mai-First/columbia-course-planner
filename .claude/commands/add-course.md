# Add Course

Add a new course to `js/data/courses.js` based on what the user describes. The catalog lives in three
flat files — `js/data/courses.js` (`window.COURSES`), `js/data/majors.js` (`window.MAJORS` /
`window.MINORS`), and `js/data/professors.js` (`window.PROFESSORS`). A course is a key/value entry
directly on the `window.COURSES` object. Extract all details from the user's message — do not ask
clarifying questions unless a required field is completely absent.

## Required fields
- **Key** (short ID): department prefix + number, no spaces. Examples: `COMS4281`, `MATH3027`, `ECON4710`. Derive from the course code if not explicitly given.
- **code**: Full formatted course code. Examples: `"COMS W4281"`, `"MATH UN3027"`, `"ECON W4710"`.
- **name**: Full course name.
- **credits**: Number (default 3 if not mentioned).
- **offered**: Array of semesters. Use `["fall","spring"]` if not specified, `["fall"]` or `["spring"]` if mentioned.
- **prereqs**: Array of short-ID strings. Use `[]` if none mentioned.
- **difficulty**: Integer 1–5. Infer from context (intro = 2, upper-level = 3, theory/grad = 4–5). Ask only if truly ambiguous.
- **dept**: Department code. Examples: `"COMS"`, `"MATH"`, `"ECON"`.
- **category**: One of `"core-cs"`, `"math"`, `"physics"`, `"science"`, `"economics"`, `"writing"`, `"core-curriculum"`, `"major"`, `"elective"`. Pick the best fit.
- **description**: 1–2 sentence description. Generate a reasonable one if not provided.
- **professors**: Array of professor name strings. Use `["TBA"]` if none mentioned.

## Steps

1. Parse the user's message and extract all course details.
2. Read `js/data/courses.js` to find the right insertion point — courses are grouped by department with comment headers like `// ── Economics ──`. Find the matching dept block, or add a new one at the end of the `window.COURSES = { ... }` object if the dept doesn't exist yet.
3. Also check that the key doesn't already exist. If it does, tell the user and stop.
4. Format the new entry exactly like existing entries:

```js
  "XXXX0000": {
    code: "DEPT UN0000", name: "Course Name", credits: 3,
    offered: ["fall","spring"], prereqs: ["PREREQ1"], difficulty: 3,
    dept: "DEPT", category: "major",
    description: "One or two sentence description.",
    professors: ["Professor Name"]
  },
```

5. Insert it at the END of the correct department block (before the next `// ──` comment or before the closing `};` of the `window.COURSES` object).
6. If any named professor is not already a key in `js/data/professors.js` (`window.PROFESSORS`), either add a professor entry there (with `nugget`, `score`, `culpa_url`, `courses`, `note`, `last_checked`) or use a placeholder like `"TBA"`. The validator warns about professors named on a course but missing from `PROFESSORS`.
7. Tell the user:
   - The key that was used
   - Where it was inserted (which dept block)
   - A reminder to run `/validate-catalog` to confirm integrity
   - A reminder to bump the version in `index.html` (the `?v=` query strings) before deploying

## Edge cases
- If the user gives a prereq course name instead of a key (e.g. "prereq is Calculus I"), look up the correct key from the existing courses in `js/data/courses.js` and use that.
- If the dept block doesn't exist yet, create it with a comment header: `// ── Department Name ──────────────────────────────────────`
