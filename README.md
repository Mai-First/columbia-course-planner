# Columbia Course Planner

A four-year course planner for Columbia students across all four undergraduate schools: Columbia College, SEAS, General Studies, and Barnard.

Pick your school and major (with optional double major or minor), check off what you have already taken, and the planner builds a semester-by-semester plan that respects prerequisites, which term each course is offered, and per-semester workload. Professor picks favor highly rated instructors on [CULPA](https://culpa.info), with links out to current reviews.

## What is in the catalog

- 148 majors across CC, SEAS, GS, and Barnard, curated from the official school bulletins
- Around 630 courses with prerequisites, offered terms, and credits
- Requirement groups that model real rules: required sequences, "choose N of M" distributions, elective menus
- GS and Barnard majors verified against their own bulletins, including Barnard's BC course numbering

## Running it

No build step. Serve the folder with any static server and open it in a browser:

```bash
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.

## Data model

All data lives in three plain JavaScript files so it is easy to edit by hand:

- `js/data/courses.js`: every course (code, name, credits, offered terms, prerequisites, difficulty, professors)
- `js/data/majors.js`: majors and minors as requirement groups
- `js/data/professors.js`: professor ratings, approximate and dated, with CULPA links

The scheduler (`js/planner/scheduler.js`) topologically sorts courses by prerequisite, then assigns them to semesters under credit and difficulty caps, extending past four years when a heavy load needs it.

## Validating the catalog

The repo includes a validation script (see `.claude/commands/validate-catalog.md`) that checks every major against the course list: missing courses, broken prerequisites, impossible elective counts, and more. The catalog currently passes with zero errors.

## A note on accuracy

Requirements are curated from the official bulletins but simplified in places, and offerings change every year. Always confirm your plan with your school's bulletin and your adviser.
