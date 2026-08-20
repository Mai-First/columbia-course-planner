# Columbia Course Planner

A four-year course planner for Columbia College, SEAS, General Studies, and Barnard.

Pick your school and major, add a double major or minor if you want one, and mark the courses you have taken. The planner builds a semester-by-semester schedule that honors prerequisites, offered terms, your school's credit cap (18 points per term at CC and GS, 19 at Barnard, 21 at SEAS), and a sane workload. Tell it you are a junior and it plans only your remaining semesters and lists your finished coursework at the top of the plan. Course cards link each professor's [CULPA](https://culpa.info) reviews, and the picks favor the best-rated instructors.

You can edit the plan it gives you. Each card has "Move to", which lists the semesters where that course fits, and "Swap with", which offers alternatives from the same requirement group. Credits and difficulty recalculate after each change.

## The catalog

- 148 majors across the four schools, built from the official bulletins
- About 630 courses with prerequisites, offered terms, and credits
- Requirement groups that express real rules: required sequences, "choose N of M" distributions, elective menus
- GS and Barnard majors checked against their own bulletins, down to Barnard's BC course numbers

## Running it

Serve the folder with any static server; nothing compiles.

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Data model

Three plain JavaScript files hold the data, so you can edit them by hand:

- `js/data/courses.js`: every course (code, name, credits, offered terms, prerequisites, difficulty, professors)
- `js/data/majors.js`: majors and minors as requirement groups
- `js/data/professors.js`: professor ratings, approximate and dated, with CULPA links

The scheduler (`js/planner/scheduler.js`) sorts courses by prerequisite, then fills semesters under the credit and difficulty caps. A double major that will not fit in eight semesters gets a ninth and tenth.

## Validating the catalog

`.claude/commands/validate-catalog.md` holds a script that checks every major against the course list: courses that do not exist, prerequisites that point nowhere, elective menus that demand more options than they list. The catalog passes with zero errors.

## Accuracy

The requirements follow the official bulletins, simplified in places, and course offerings change every year. Confirm your plan with your school's bulletin and your adviser before you register.
