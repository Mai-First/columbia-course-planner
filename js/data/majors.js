// ============================================================
// majors.js — Major/minor definitions for all four schools
// ============================================================

window.MAJORS = {

  // ============================================================
  // SEAS — School of Engineering and Applied Science
  // ============================================================

  "cs-seas": {
    id: "cs-seas", name: "Computer Science", school: "SEAS", degree: "BS",
    description: "One of the top CS programs in the country. Strong focus on theory, systems, and emerging AI/ML areas.",
    min_credits: 128,
    requirement_groups: [
      {
        id: "math-calc", name: "Calculus", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201"],
        note: "Calculus through Calculus III (Calc I–II are prerequisites for Calc III)."
      },
      {
        id: "math-linalg", name: "Linear Algebra", type: "required", choose: 1,
        courses: ["COMS3251","MATH2010"],
        note: "One linear algebra course: Computational Linear Algebra (recommended) or Linear Algebra."
      },
      {
        id: "math-prob", name: "Probability & Statistics", type: "required", choose: 1,
        courses: ["STAT4109","STAT1201"],
        note: "One probability/statistics course."
      },
      {
        id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"],
        note: "Both semesters of physics required by SEAS."
      },
      {
        id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"],
        note: "University Writing (or equivalent)."
      },
      {
        id: "cs-core", name: "CS Core", type: "required",
        courses: ["COMS1004","COMS3134","COMS3157","COMS3203","COMS3261","CSEE3827","COMS4231"],
        note: "Core CS sequence plus Analysis of Algorithms (COMS W4231)."
      },
      {
        id: "cs-foundation", name: "Area Foundation Courses", type: "required", choose: 3,
        courses: ["COMS4118","COMS4111","COMS4115","COMS4119","COMS4156","COMS4824"],
        note: "Choose three Area Foundation (track) courses across systems, languages, databases, networks, and software engineering."
      },
      {
        id: "cs-electives", name: "CS Technical Electives", type: "elective",
        elective_count: 3,
        courses: ["COMS4701","COMS4705","COMS4771","COMS4160","COMS4170"],
        note: "Choose three additional CS courses at the 3000 level or above."
      },
      {
        id: "liberal", name: "Liberal Arts Electives", type: "elective",
        elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","POLS2210","POLS2200","HIST3200"],
        note: "SEAS requires a sequence of humanities/social-science electives. Choose six from the list or others."
      }
    ]
  },

  "ee-seas": {
    id: "ee-seas", name: "Electrical Engineering", school: "SEAS", degree: "BS",
    description: "Combines circuit theory, signals, devices, and systems. Strong bridge between hardware and software.",
    min_credits: 128,
    requirement_groups: [
      {
        id: "math", name: "Mathematics Foundation", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027","STAT4109"],
        note: "Advanced math needed for signals and systems courses."
      },
      {
        id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"],
        note: "Both semesters of calculus-based physics."
      },
      {
        id: "chem", name: "Chemistry", type: "required",
        courses: ["CHEM1403"],
        note: "Required for device physics (semiconductors)."
      },
      {
        id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"],
        note: "Writing requirement."
      },
      {
        id: "ee-core", name: "EE Core", type: "required",
        courses: ["ELEN3082","ELEN3106","ELEN3401"],
        note: "Circuits, Signals & Systems, and Devices are the core of EE."
      },
      {
        id: "cs-intro", name: "Programming", type: "required",
        courses: ["COMS1004"],
        note: "One programming course required for EE."
      },
      {
        id: "ee-electives", name: "EE Electives", type: "elective",
        elective_count: 4,
        courses: ["ELEN4702","ELEN4810","ELEN4830","COMS4118","COMS4824"],
        note: "Choose 4 upper-level EE or related courses."
      },
      {
        id: "ee-capstone", name: "Senior Design Project", type: "required",
        courses: ["ELEN4999"],
        note: "Required capstone for all EE students."
      },
      {
        id: "liberal", name: "Liberal Arts Electives", type: "elective",
        elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS requires 6 liberal arts electives."
      }
    ]
  },

  "appmath-seas": {
    id: "appmath-seas", name: "Applied Mathematics", school: "SEAS", degree: "BS",
    description: "Rigorous mathematics with applications to science and engineering. Ideal for quantitative careers.",
    min_credits: 128,
    requirement_groups: [
      {
        id: "math", name: "Mathematics Core", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027","MATH4061","MATH4062","MATH4500"],
        note: "Deep mathematical foundation through real analysis."
      },
      {
        id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"],
        note: "Calculus-based physics."
      },
      {
        id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"],
        note: "Writing requirement."
      },
      {
        id: "apma-core", name: "Applied Mathematics Core", type: "required",
        courses: ["APMA3101","APMA3102"],
        note: "Core applied math sequences."
      },
      {
        id: "cs-intro", name: "Programming", type: "required",
        courses: ["COMS1004"],
        note: "Programming is required."
      },
      {
        id: "apma-electives", name: "Applied Math Electives", type: "elective",
        elective_count: 4,
        courses: ["APMA4200","APMA4301","COMS4771","STAT4109","COMS4231"],
        note: "Choose 4 upper-level applied math or related courses."
      },
      {
        id: "liberal", name: "Liberal Arts Electives", type: "elective",
        elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS requires 6 liberal arts electives."
      }
    ]
  },

  // ============================================================
  // CC — Columbia College
  // ============================================================

  "econ-cc": {
    id: "econ-cc", name: "Economics", school: "CC", degree: "BA",
    description: "One of the most popular majors at Columbia. Strong quantitative focus with theory and empirical work.",
    min_credits: 124,
    requirement_groups: [
      {
        id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students must complete the Core Curriculum (usually over 4 years)."
      },
      {
        id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1201"],
        note: "Calculus I and III (multivariable). Per the Bulletin, the economics major requires Calc I plus Calc III (or an honors/accelerated sequence)."
      },
      {
        id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201"],
        note: "Intro statistics required before econometrics."
      },
      {
        id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"],
        note: "The four required courses for all economics majors."
      },
      {
        id: "econ-electives", name: "Economics Electives", type: "elective",
        elective_count: 5,
        courses: ["ECON4710","ECON4100","ECON4840","ECON4530","ECON4415"],
        note: "Choose 5 ECON courses at or above the 4000 level."
      },
      {
        id: "thesis", name: "Senior Requirement", type: "elective",
        elective_count: 1,
        courses: ["ECON4999"],
        note: "Optional senior thesis (counts toward elective total). Highly recommended for graduate school."
      }
    ]
  },

  "finec-cc": {
    id: "finec-cc", name: "Financial Economics", school: "CC", degree: "BA",
    description: "A joint Economics Department / Columbia Business School major on the role of financial markets and intermediaries in allocating capital. Popular with students headed to finance, consulting, or economics PhDs.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1201"],
        note: "Calculus I and III (multivariable), or an honors/accelerated sequence." },
      { id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201"],
        note: "Calculus-based introductory statistics (or higher)." },
      { id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"],
        note: "Core must be completed by spring of junior year." },
      { id: "finance-core", name: "Finance & Accounting Core", type: "required",
        courses: ["ECON2261","ECON3025","ECON4280"],
        note: "Accounting & Finance, Financial Economics, and Corporate Finance." },
      { id: "finec-electives", name: "Economics Electives", type: "elective", elective_count: 4,
        courses: ["ECON4710","ECON4100","ECON4840","ECON4530","ECON4415"],
        note: "Four electives; at least two from the Columbia/Barnard Economics departments." },
      { id: "finec-seminar", name: "Seminar", type: "required",
        courses: ["ECON4918"],
        note: "One economics seminar from the list eligible for the financial economics major." }
    ]
  },

  "finec-gs": {
    id: "finec-gs", name: "Financial Economics", school: "GS", degree: "BA",
    description: "The financial economics major through GS — a joint Economics Department / Columbia Business School program on financial markets and the allocation of capital.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1201"],
        note: "Calculus I and III (multivariable), or an honors/accelerated sequence." },
      { id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201"],
        note: "Calculus-based introductory statistics (or higher)." },
      { id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"],
        note: "Core must be completed by spring of junior year." },
      { id: "finance-core", name: "Finance & Accounting Core", type: "required",
        courses: ["ECON2261","ECON3025","ECON4280"],
        note: "Accounting & Finance, Financial Economics, and Corporate Finance." },
      { id: "finec-electives", name: "Economics Electives", type: "elective", elective_count: 4,
        courses: ["ECON4710","ECON4100","ECON4840","ECON4530","ECON4415"],
        note: "Four electives; at least two from the Columbia/Barnard Economics departments." },
      { id: "finec-seminar", name: "Seminar", type: "required",
        courses: ["ECON4918"],
        note: "One economics seminar from the list eligible for the financial economics major." }
    ]
  },

  "pols-cc": {
    id: "pols-cc", name: "Political Science", school: "CC", degree: "BA",
    description: "Study power, institutions, and governance across American, comparative, international, and theoretical subfields.",
    min_credits: 124,
    requirement_groups: [
      {
        id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students must complete the Core Curriculum."
      },
      {
        id: "pols-intro", name: "Introduction", type: "required",
        courses: ["POLS1101"],
        note: "Gateway course for the major."
      },
      {
        id: "pols-distribution", name: "Subfield Distribution (one from each)", type: "required",
        courses: ["POLS2200","POLS2210","POLS2220","POLS2230"],
        note: "Must take one course in each of the four subfields: Comparative, IR, American, Theory."
      },
      {
        id: "pols-methods", name: "Methods", type: "required",
        courses: ["POLS3710"],
        note: "Research methods required for all political science majors."
      },
      {
        id: "pols-electives", name: "Upper-Level Electives", type: "elective",
        elective_count: 3,
        courses: ["POLS3500","POLS3200","POLS3245","POLS3210","POLS3623"],
        note: "Choose 3 additional upper-level POLS courses (3000+)."
      },
      {
        id: "pols-senior", name: "Senior Requirement", type: "required",
        courses: ["POLS4000"],
        note: "Required senior seminar or thesis."
      }
    ]
  },

  "math-cc": {
    id: "math-cc", name: "Mathematics", school: "CC", degree: "BA",
    description: "Rigorous pure and applied mathematics. Excellent preparation for graduate school, finance, or data science.",
    min_credits: 124,
    requirement_groups: [
      {
        id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students must complete the Core Curriculum."
      },
      {
        id: "math-core", name: "Mathematics Core", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027","MATH4061","MATH4062"],
        note: "Full calculus through real analysis required."
      },
      {
        id: "math-electives", name: "Mathematics Electives", type: "elective",
        elective_count: 4,
        courses: ["MATH4150","MATH4500","COMS4231","STAT4109","APMA3101"],
        note: "Choose 4 additional upper-level math courses."
      }
    ]
  },

  "english-cc": {
    id: "english-cc", name: "English", school: "CC", degree: "BA",
    description: "Study literature from antiquity to the present. Develop critical reading, interpretation, and writing skills.",
    min_credits: 124,
    requirement_groups: [
      {
        id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students must complete the Core Curriculum."
      },
      {
        id: "engl-intro", name: "Introduction", type: "required",
        courses: ["ENGL2000"],
        note: "Gateway to the English major."
      },
      {
        id: "engl-theory", name: "Literary Theory", type: "required",
        courses: ["ENGL3300"],
        note: "Required theory course."
      },
      {
        id: "engl-historical", name: "Historical Breadth", type: "required", choose: 2,
        courses: ["ENGL3100","ENGL3329","ENGL4619"],
        note: "At least two courses in earlier-period literature (e.g. before 1900)."
      },
      {
        id: "engl-senior", name: "Senior Seminar", type: "required",
        courses: ["ENGL4000"],
        note: "Required capstone for English majors."
      },
      {
        id: "engl-electives", name: "Literature Electives", type: "elective",
        elective_count: 4,
        courses: ["ENGL3200","ENGL3400","ENGL3500","ENGL3055","ENGL3327"],
        note: "Choose four additional upper-level English courses across different periods and genres."
      }
    ]
  },

  // ============================================================
  // GS — School of General Studies
  // ============================================================

  "econ-gs": {
    id: "econ-gs", name: "Economics", school: "GS", degree: "BA",
    description: "Same rigorous economics curriculum as CC, with flexibility for non-traditional students.",
    min_credits: 124,
    requirement_groups: [
      {
        id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "GS students complete a modified Core. Check GS Bulletin for exact requirements."
      },
      {
        id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1201"],
        note: "Calculus I and III (multivariable). Intermediate micro/macro require multivariable calculus; verify the exact sequence in your school's catalog."
      },
      {
        id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201"],
        note: "Statistics required before econometrics."
      },
      {
        id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"],
        note: "Four required economics courses."
      },
      {
        id: "econ-electives", name: "Economics Electives", type: "elective",
        elective_count: 5,
        courses: ["ECON4710","ECON4100","ECON4840","ECON4530","ECON4415"],
        note: "Five upper-level economics electives."
      }
    ]
  },

  "hist-gs": {
    id: "hist-gs", name: "History", school: "GS", degree: "BA",
    description: "Study the past through primary sources and historical methods. Excellent preparation for law, journalism, or academia.",
    min_credits: 124,
    requirement_groups: [
      {
        id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students."
      },
      {
        id: "hist-intro", name: "Introduction", type: "required",
        courses: ["HIST1000"],
        note: "Gateway to the history major."
      },
      {
        id: "hist-methods", name: "Historical Methods", type: "required",
        courses: ["HIST2000"],
        note: "Required methods course for all history majors."
      },
      {
        id: "hist-regions", name: "Regional Distribution (\"removed in space\")", type: "required", choose: 3,
        courses: ["HIST2310","HIST2660","HIST2701","HIST2772","HIST2810","HIST2344"],
        note: "Breadth requirement: three courses across at least three different world regions."
      },
      {
        id: "hist-seminars", name: "Seminars", type: "required", choose: 2,
        courses: ["HIST3100","HIST3200","HIST3300"],
        note: "At least two History seminars, in different geographic/thematic areas."
      },
      {
        id: "hist-thesis", name: "Senior Thesis", type: "required",
        courses: ["HIST4000"],
        note: "Required year-long research thesis."
      }
    ]
  },

  "cs-gs": {
    id: "cs-gs", name: "Computer Science", school: "GS", degree: "BA",
    description: "The BA in CS through GS. Same rigorous curriculum as CC's CS program.",
    min_credits: 124,
    requirement_groups: [
      {
        id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students."
      },
      {
        id: "math-calc", name: "Calculus", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201"],
        note: "Calculus through Calculus III (Calc I–II are prerequisites)."
      },
      {
        id: "math-linalg", name: "Linear Algebra", type: "required", choose: 1,
        courses: ["COMS3251","MATH2010"],
        note: "Computational Linear Algebra (recommended) or Linear Algebra."
      },
      {
        id: "math-prob", name: "Probability & Statistics", type: "required", choose: 1,
        courses: ["STAT4109","STAT1201"],
        note: "One probability/statistics course."
      },
      {
        id: "cs-core", name: "CS Core", type: "required",
        courses: ["COMS1004","COMS3134","COMS3157","COMS3203","COMS3261","CSEE3827","COMS4231"],
        note: "Core CS sequence plus Analysis of Algorithms (COMS W4231)."
      },
      {
        id: "cs-foundation", name: "Area Foundation Courses", type: "required", choose: 3,
        courses: ["COMS4118","COMS4111","COMS4115","COMS4119","COMS4156","COMS4824"],
        note: "Choose three Area Foundation (track) courses."
      },
      {
        id: "cs-electives", name: "CS Electives", type: "elective",
        elective_count: 3,
        courses: ["COMS4701","COMS4705","COMS4771","COMS4160","COMS4170"],
        note: "Choose three additional CS courses at the 3000 level or above."
      }
    ]
  },

  // ============================================================
  // Barnard
  // ============================================================

  "econ-barnard": {
    id: "econ-barnard", name: "Economics", school: "Barnard", degree: "BA",
    description: "Barnard's economics curriculum combines rigorous theory with a liberal arts tradition. Cross-registration with Columbia available.",
    min_credits: 122,
    requirement_groups: [
      {
        id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"],
        note: "Barnard requires First-Year Writing and a lab science. Check Barnard Bulletin for full list."
      },
      {
        id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1201"],
        note: "Calculus I and III (multivariable). Intermediate micro/macro require multivariable calculus; verify the exact sequence in your school's catalog."
      },
      {
        id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201"],
        note: "Statistics required."
      },
      {
        id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"],
        note: "Four required economics courses."
      },
      {
        id: "econ-electives", name: "Economics Electives", type: "elective",
        elective_count: 5,
        courses: ["ECON4710","ECON4100","ECON4840","ECON4530","ECON4415"],
        note: "Five upper-level electives."
      }
    ]
  },

  "psych-barnard": {
    id: "psych-barnard", name: "Psychology", school: "Barnard", degree: "BA",
    description: "One of Barnard's flagship programs. Combines experimental research with a breadth of psychological perspectives.",
    min_credits: 122,
    requirement_groups: [
      {
        id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"],
        note: "First-Year Writing and lab science required."
      },
      {
        id: "psyc-core", name: "Psychology Core", type: "required",
        courses: ["PSYC1001","PSYC2225","PSYC2236"],
        note: "Intro, methods, and stats are required foundations."
      },
      {
        id: "psyc-distribution", name: "Content Areas (choose two)", type: "required", choose: 2,
        courses: ["PSYC3100","PSYC3200","PSYC3300"],
        note: "Must take courses in at least two of: Cognitive, Social, Developmental."
      },
      {
        id: "psyc-lab", name: "Advanced Lab", type: "required",
        courses: ["PSYC4000"],
        note: "Required research experience."
      },
      {
        id: "psyc-electives", name: "Psychology Electives", type: "elective",
        elective_count: 3,
        courses: ["PSYC3400","PSYC3500","PSYC3100","PSYC3200","PSYC3300"],
        note: "Three additional psychology courses."
      }
    ]
  },

  "cs-barnard": {
    id: "cs-barnard", name: "Computer Science", school: "Barnard", degree: "BA",
    description: "Barnard CS combines a strong technical foundation with Barnard's liberal arts education.",
    min_credits: 122,
    requirement_groups: [
      {
        id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"],
        note: "First-Year Writing and lab science required."
      },
      {
        id: "math-calc", name: "Calculus", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201"],
        note: "Calculus through Calculus III (Calc I–II are prerequisites)."
      },
      {
        id: "math-linalg", name: "Linear Algebra", type: "required", choose: 1,
        courses: ["COMS3251","MATH2010"],
        note: "Computational Linear Algebra (recommended) or Linear Algebra."
      },
      {
        id: "math-prob", name: "Probability & Statistics", type: "required", choose: 1,
        courses: ["STAT4109","STAT1201"],
        note: "One probability/statistics course."
      },
      {
        id: "cs-core", name: "CS Core", type: "required",
        courses: ["COMS1004","COMS3134","COMS3157","COMS3203","COMS3261","CSEE3827","COMS4231"],
        note: "Core CS sequence plus Analysis of Algorithms (COMS W4231)."
      },
      {
        id: "cs-foundation", name: "Area Foundation Courses", type: "required", choose: 3,
        courses: ["COMS4118","COMS4111","COMS4115","COMS4119","COMS4156","COMS4824"],
        note: "Choose three Area Foundation (track) courses."
      },
      {
        id: "cs-electives", name: "CS Electives", type: "elective",
        elective_count: 3,
        courses: ["COMS4701","COMS4705","COMS4771","COMS4160","COMS4170"],
        note: "Choose three additional CS courses at the 3000 level or above."
      }
    ]
  },


  // ── SEAS additions ─────────────────────────────────────────

  "mece-seas": {
    id: "mece-seas", name: "Mechanical Engineering", school: "SEAS", degree: "BS",
    description: "Design, mechanics, thermodynamics, and fluid systems. Strong preparation for aerospace, automotive, and energy industries.",
    min_credits: 128,
    requirement_groups: [
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027"],
        note: "Full calculus through ODEs required." },
      { id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "Both physics semesters required." },
      { id: "writing", name: "Writing", type: "required", courses: ["ENGL1010"], note: "" },
      { id: "cs-intro", name: "Programming", type: "required",
        courses: ["COMS1004"], note: "Programming required for SEAS." },
      { id: "mece-core", name: "Mechanical Engineering Core", type: "required",
        courses: ["MECE1001","MECE3420","MECE3600","MECE4602"],
        note: "Core ME courses." },
      { id: "mece-electives", name: "ME Electives", type: "elective", elective_count: 3,
        courses: ["MECE4201","ELEN3082","CHEME2410"],
        note: "Choose 3 upper-level engineering electives." },
      { id: "mece-capstone", name: "Senior Capstone", type: "required",
        courses: ["MECE4999"], note: "Required senior design project." },
      { id: "liberal", name: "Liberal Arts Electives", type: "elective", elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","SOCI1010"],
        note: "SEAS requires 6 liberal arts electives." }
    ]
  },

  "cheme-seas": {
    id: "cheme-seas", name: "Chemical Engineering", school: "SEAS", degree: "BS",
    description: "Apply chemistry, physics, and math to large-scale industrial processes. Pathways into pharma, materials, and energy.",
    min_credits: 128,
    requirement_groups: [
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027"],
        note: "Full calculus through ODEs." },
      { id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "chem", name: "Chemistry", type: "required",
        courses: ["CHEM1403","CHEM1404"], note: "Both semesters of general chemistry." },
      { id: "bio", name: "Biology", type: "required",
        courses: ["BIOL1500"], note: "Intro biology required for ChemE." },
      { id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"], note: "" },
      { id: "cheme-core", name: "Chemical Engineering Core", type: "required",
        courses: ["CHEME2410","CHEME3520","CHEME3720","CHEME4410"],
        note: "All four core ChemE courses required." },
      { id: "cheme-electives", name: "ChemE Electives", type: "elective", elective_count: 3,
        courses: ["BIOL2401","MECE3600","APMA3101"],
        note: "Choose 3 advanced engineering or science electives." },
      { id: "cheme-capstone", name: "Senior Capstone", type: "required",
        courses: ["CHEME4999"], note: "" },
      { id: "liberal", name: "Liberal Arts Electives", type: "elective", elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS requires 6 liberal arts electives." }
    ]
  },

  "bme-seas": {
    id: "bme-seas", name: "Biomedical Engineering", school: "SEAS", degree: "BS",
    description: "Engineering principles applied to biology and medicine. Excellent preparation for medical devices, biotech, and medical school.",
    min_credits: 128,
    requirement_groups: [
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027","STAT4109"],
        note: "Math through ODEs plus probability." },
      { id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "chem", name: "Chemistry & Biology", type: "required",
        courses: ["CHEM1403","BIOL1500"],
        note: "Chemistry and biology foundation." },
      { id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"], note: "" },
      { id: "ee-prereq", name: "Electrical Engineering Prereq", type: "required",
        courses: ["ELEN3082","ELEN3106"],
        note: "Circuits and signals required for biosignals course." },
      { id: "bme-core", name: "Biomedical Engineering Core", type: "required",
        courses: ["BMEN1004","BMEN3110","BMEN4550"],
        note: "All three required." },
      { id: "bme-electives", name: "BME Electives", type: "elective", elective_count: 3,
        courses: ["BMEN4600","BIOL2401","COMS4771","CHEM1404"],
        note: "Choose 3 from advanced BME or related fields." },
      { id: "bme-capstone", name: "Senior Capstone", type: "required",
        courses: ["BMEN4999"], note: "" },
      { id: "liberal", name: "Liberal Arts Electives", type: "elective", elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS requires 6 liberal arts electives." }
    ]
  },

  "ieor-seas": {
    id: "ieor-seas", name: "Operations Research (IEOR)", school: "SEAS", degree: "BS",
    description: "Apply mathematical optimization and data science to business, logistics, and finance. One of the most employable SEAS degrees.",
    min_credits: 128,
    requirement_groups: [
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","STAT4109"],
        note: "Calculus through Calc III, linear algebra, and probability/statistics for OR." },
      { id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"], note: "" },
      { id: "cs-intro", name: "Programming", type: "required",
        courses: ["COMS1004"], note: "" },
      { id: "ieor-core", name: "IEOR Core", type: "required",
        courses: ["IEOR2500","IEOR3106","IEOR3600"],
        note: "All three required." },
      { id: "ieor-electives", name: "IEOR Electives", type: "elective", elective_count: 4,
        courses: ["IEOR4520","COMS4771","COMS4231","APMA4301","STAT4205"],
        note: "Choose 4 upper-level OR or quantitative courses." },
      { id: "ieor-capstone", name: "Senior Capstone", type: "required",
        courses: ["IEOR4999"], note: "" },
      { id: "liberal", name: "Liberal Arts Electives", type: "elective", elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","SOCI1010"],
        note: "SEAS requires 6 liberal arts electives." }
    ]
  },

  // ── CC additions ────────────────────────────────────────────

  "hist-cc": {
    id: "hist-cc", name: "History", school: "CC", degree: "BA",
    description: "Study the past through primary sources and argument. Excellent prep for law, journalism, public policy, or academia.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the Core Curriculum." },
      { id: "hist-intro", name: "Introduction", type: "required",
        courses: ["HIST1000"], note: "" },
      { id: "hist-methods", name: "Historical Methods", type: "required",
        courses: ["HIST2000"], note: "Required methods course." },
      { id: "hist-regions", name: "Regional Distribution (\"removed in space\")", type: "required", choose: 3,
        courses: ["HIST2310","HIST2660","HIST2701","HIST2772","HIST2810","HIST2344"],
        note: "Breadth: three courses across at least three different world regions." },
      { id: "hist-seminars", name: "Seminars", type: "required", choose: 2,
        courses: ["HIST3100","HIST3200","HIST3300"],
        note: "At least two History seminars, in different areas." },
      { id: "hist-thesis", name: "Senior Thesis", type: "required",
        courses: ["HIST4000"], note: "Required senior thesis." }
    ]
  },

  "psych-cc": {
    id: "psych-cc", name: "Psychology", school: "CC", degree: "BA",
    description: "Scientific study of mind, brain, and behavior. Lab research required. Strong prep for medicine, counseling, or graduate study.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the Core Curriculum." },
      { id: "psyc-core", name: "Psychology Core", type: "required",
        courses: ["PSYC1001","PSYC2225","PSYC2236"],
        note: "Required foundation courses." },
      { id: "psyc-distribution", name: "Content Areas (choose two)", type: "required", choose: 2,
        courses: ["PSYC3100","PSYC3200","PSYC3300"],
        note: "Take courses in at least two content areas." },
      { id: "psyc-lab", name: "Advanced Lab", type: "required",
        courses: ["PSYC4000"], note: "Required research experience." },
      { id: "psyc-electives", name: "Psychology Electives", type: "elective", elective_count: 3,
        courses: ["PSYC3400","PSYC3500","PSYC3100","PSYC3200","PSYC3300"],
        note: "Three additional psychology electives." }
    ]
  },

  "cs-cc": {
    id: "cs-cc", name: "Computer Science", school: "CC", degree: "BA",
    description: "The BA in CS through Columbia College. Same rigorous CS curriculum with the Core Curriculum. No physics required.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the Core Curriculum." },
      { id: "math-calc", name: "Calculus", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201"],
        note: "Calculus through Calculus III (Calc I–II are prerequisites)." },
      { id: "math-linalg", name: "Linear Algebra", type: "required", choose: 1,
        courses: ["COMS3251","MATH2010"],
        note: "Computational Linear Algebra (recommended) or Linear Algebra." },
      { id: "math-prob", name: "Probability & Statistics", type: "required", choose: 1,
        courses: ["STAT4109","STAT1201"],
        note: "One probability/statistics course." },
      { id: "cs-core", name: "CS Core", type: "required",
        courses: ["COMS1004","COMS3134","COMS3157","COMS3203","COMS3261","CSEE3827","COMS4231"],
        note: "Core CS sequence plus Analysis of Algorithms (COMS W4231)." },
      { id: "cs-foundation", name: "Area Foundation Courses", type: "required", choose: 3,
        courses: ["COMS4118","COMS4111","COMS4115","COMS4119","COMS4156","COMS4824"],
        note: "Choose three Area Foundation (track) courses." },
      { id: "cs-electives", name: "CS Electives", type: "elective", elective_count: 3,
        courses: ["COMS4701","COMS4705","COMS4771","COMS4160","COMS4170"],
        note: "Choose three additional CS courses at the 3000 level or above." }
    ]
  },

  "sociol-cc": {
    id: "sociol-cc", name: "Sociology", school: "CC", degree: "BA",
    description: "Study social institutions, inequality, and culture. Rigorous methods training alongside engagement with sociological theory.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the Core Curriculum." },
      { id: "soci-core", name: "Sociology Core", type: "required",
        courses: ["SOCI1010","SOCI2001","SOCI3000"],
        note: "Intro, theory, and methods required." },
      { id: "soci-senior", name: "Senior Requirement", type: "required",
        courses: ["SOCI4000"], note: "" },
      { id: "soci-electives", name: "Sociology Electives", type: "elective", elective_count: 4,
        courses: ["SOCI3100","SOCI3200","SOCI3213","SOCI3235","SOCI3265","SOCI3914"],
        note: "Choose 4 sociology electives." }
    ]
  },

  "phil-cc": {
    id: "phil-cc", name: "Philosophy", school: "CC", degree: "BA",
    description: "Logic, ethics, mind, and knowledge. Develops rigorous reasoning skills valued in law, medicine, and research.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the Core Curriculum." },
      { id: "phil-intro", name: "Introduction", type: "required",
        courses: ["PHIL1401"], note: "" },
      { id: "phil-history", name: "History of Philosophy", type: "required",
        courses: ["PHIL2110","PHIL2120"],
        note: "Both ancient and modern required." },
      { id: "phil-senior", name: "Senior Seminar", type: "required",
        courses: ["PHIL4000"], note: "" },
      { id: "phil-electives", name: "Philosophy Electives", type: "elective", elective_count: 4,
        courses: ["PHIL3010","PHIL3300","PHIL3600","PHIL3551","PHIL3601","PHIL3751","PHIL3960"],
        note: "Choose 4 upper-level philosophy courses." }
    ]
  },

  "stats-cc": {
      "id": "stats-cc",
      "name": "Statistics",
      "school": "CC",
      "degree": "BA",
      "description": "Probability theory, statistical inference, and data analysis. High demand in tech, finance, and research.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "core",
              "name": "Core Curriculum",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_AHUM",
                  "CORE_MHUM",
                  "CORE_WRITE",
                  "CORE_FRSCI",
                  "CORE_GLOB"
              ],
              "note": "All CC students complete the Core Curriculum."
          },
          {
              "id": "math",
              "name": "Mathematics",
              "type": "required",
              "courses": [
                  "MATH1101",
                  "MATH1102",
                  "MATH1201",
                  "MATH2010"
              ],
              "note": "Calculus I–III and linear algebra."
          },
          {
              "id": "stats-intro",
              "name": "Statistics Prerequisite",
              "type": "required",
              "courses": [
                  "STAT1201"
              ],
              "note": ""
          },
          {
              "id": "cs-prog",
              "name": "Programming",
              "type": "required",
              "choose": 1,
              "courses": [
                  "COMS1004",
                  "STAT4206"
              ],
              "note": "One programming course (Java or applied statistical computing)."
          },
          {
              "id": "stats-core",
              "name": "Core Statistics",
              "type": "required",
              "courses": [
                  "STAT4203",
                  "STAT4204",
                  "STAT4205",
                  "STAT4206",
                  "STAT4207"
              ],
              "note": "Probability, inference, regression, statistical computing, and stochastic processes."
          },
          {
              "id": "stats-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 3,
              "courses": [
                  "STAT4224",
                  "STAT4315",
                  "STAT3001",
                  "COMS4771",
                  "IEOR3600"
              ],
              "note": "Three advanced electives (may include quantitative courses in related departments)."
          }
      ]
  },

  // ── GS additions ────────────────────────────────────────────

  "psych-gs": {
    id: "psych-gs", name: "Psychology", school: "GS", degree: "BA",
    description: "Scientific psychology with lab research requirement. Same curriculum as Barnard/CC psych programs.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "psyc-core", name: "Psychology Core", type: "required",
        courses: ["PSYC1001","PSYC2225","PSYC2236"], note: "" },
      { id: "psyc-distribution", name: "Content Areas (choose two)", type: "required", choose: 2,
        courses: ["PSYC3100","PSYC3200","PSYC3300"], note: "" },
      { id: "psyc-lab", name: "Advanced Lab", type: "required",
        courses: ["PSYC4000"], note: "" },
      { id: "psyc-electives", name: "Psychology Electives", type: "elective", elective_count: 3,
        courses: ["PSYC3400","PSYC3500","PSYC3100","PSYC3200","PSYC3300"], note: "" }
    ]
  },

  "pols-gs": {
    id: "pols-gs", name: "Political Science", school: "GS", degree: "BA",
    description: "Same rigorous political science curriculum as CC, with GS's flexible scheduling.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "pols-intro", name: "Introduction", type: "required",
        courses: ["POLS1101"], note: "" },
      { id: "pols-distribution", name: "Subfield Distribution", type: "required",
        courses: ["POLS2200","POLS2210","POLS2220","POLS2230"],
        note: "One course from each of the four subfields." },
      { id: "pols-methods", name: "Methods", type: "required",
        courses: ["POLS3710"], note: "" },
      { id: "pols-electives", name: "Upper-Level Electives", type: "elective", elective_count: 3,
        courses: ["POLS3500","POLS3200","POLS3245","POLS3210","POLS3623"], note: "" },
      { id: "pols-senior", name: "Senior Requirement", type: "required",
        courses: ["POLS4000"], note: "" }
    ]
  },

  "english-gs": {
    id: "english-gs", name: "English", school: "GS", degree: "BA",
    description: "Literature from antiquity to the present with a GS twist — many non-traditional students bring rich life experience to the texts.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "engl-intro", name: "Introduction", type: "required",
        courses: ["ENGL2000"], note: "" },
      { id: "engl-theory", name: "Literary Theory", type: "required",
        courses: ["ENGL3300"], note: "" },
      { id: "engl-historical", name: "Historical Breadth", type: "required", choose: 2,
        courses: ["ENGL3100","ENGL3329","ENGL4619"],
        note: "At least two courses in earlier-period literature (e.g. before 1900)." },
      { id: "engl-senior", name: "Senior Seminar", type: "required",
        courses: ["ENGL4000"], note: "" },
      { id: "engl-electives", name: "Literature Electives", type: "elective", elective_count: 4,
        courses: ["ENGL3200","ENGL3400","ENGL3500","ENGL3055","ENGL3327"], note: "" }
    ]
  },

  "math-gs": {
    id: "math-gs", name: "Mathematics", school: "GS", degree: "BA",
    description: "Rigorous mathematics through analysis. Strong preparation for graduate school, finance, and data science.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "math-core", name: "Mathematics Core", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027","MATH4061","MATH4062"], note: "" },
      { id: "math-electives", name: "Mathematics Electives", type: "elective", elective_count: 4,
        courses: ["MATH4150","MATH4500","COMS4231","STAT4109","APMA3101"], note: "" }
    ]
  },

  "sociol-gs": {
    id: "sociol-gs", name: "Sociology", school: "GS", degree: "BA",
    description: "Study society, culture, and inequality. GS students often bring unique sociological perspectives from their own life experience.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "soci-core", name: "Sociology Core", type: "required",
        courses: ["SOCI1010","SOCI2001","SOCI3000"], note: "" },
      { id: "soci-senior", name: "Senior Requirement", type: "required",
        courses: ["SOCI4000"], note: "" },
      { id: "soci-electives", name: "Sociology Electives", type: "elective", elective_count: 4,
        courses: ["SOCI3100","SOCI3200","SOCI3213","SOCI3235","SOCI3265","SOCI3914"], note: "" }
    ]
  },

  // ── Barnard additions ───────────────────────────────────────

  "math-barnard": {
    id: "math-barnard", name: "Mathematics", school: "Barnard", degree: "BA",
    description: "Barnard's math program emphasizes rigorous proof-writing and has a strong community of women mathematicians.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "First-Year Writing and lab science." },
      { id: "math-core", name: "Mathematics Core", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027","MATH4061","MATH4062"], note: "" },
      { id: "math-electives", name: "Mathematics Electives", type: "elective", elective_count: 4,
        courses: ["MATH4150","MATH4500","COMS4231","STAT4109","APMA3101"], note: "" }
    ]
  },

  "hist-barnard": {
    id: "hist-barnard", name: "History", school: "Barnard", degree: "BA",
    description: "Barnard history combines rigorous archival training with Barnard's commitment to gender and women's history.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "hist-intro", name: "Introduction", type: "required",
        courses: ["HIST1000"], note: "" },
      { id: "hist-methods", name: "Methods", type: "required",
        courses: ["HIST2000"], note: "" },
      { id: "hist-regions", name: "Regional Distribution (\"removed in space\")", type: "required", choose: 3,
        courses: ["HIST2310","HIST2660","HIST2701","HIST2772","HIST2810","HIST2344"],
        note: "Breadth: three courses across at least three different world regions." },
      { id: "hist-seminars", name: "Seminars", type: "required", choose: 2,
        courses: ["HIST3100","HIST3200","HIST3300"], note: "At least two History seminars required." },
      { id: "hist-thesis", name: "Senior Thesis", type: "required",
        courses: ["HIST4000"], note: "" }
    ]
  },

  "pols-barnard": {
    id: "pols-barnard", name: "Political Science", school: "Barnard", degree: "BA",
    description: "Barnard's political science program with access to all Columbia PoliSci courses and faculty.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "pols-intro", name: "Introduction", type: "required",
        courses: ["POLS1101"], note: "" },
      { id: "pols-distribution", name: "Subfield Distribution", type: "required",
        courses: ["POLS2200","POLS2210","POLS2220","POLS2230"], note: "" },
      { id: "pols-methods", name: "Methods", type: "required",
        courses: ["POLS3710"], note: "" },
      { id: "pols-electives", name: "Upper-Level Electives", type: "elective", elective_count: 3,
        courses: ["POLS3500","POLS3200","POLS3245","POLS3210","POLS3623"], note: "" },
      { id: "pols-senior", name: "Senior Requirement", type: "required",
        courses: ["POLS4000"], note: "" }
    ]
  },

  "english-barnard": {
    id: "english-barnard", name: "English", school: "Barnard", degree: "BA",
    description: "Barnard English has a particularly strong creative writing and feminist literary criticism tradition.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "engl-intro", name: "Introduction", type: "required",
        courses: ["ENGL2000"], note: "" },
      { id: "engl-theory", name: "Literary Theory", type: "required",
        courses: ["ENGL3300"], note: "" },
      { id: "engl-historical", name: "Historical Breadth", type: "required", choose: 2,
        courses: ["ENGL3100","ENGL3329","ENGL4619"],
        note: "At least two courses in earlier-period literature (e.g. before 1900)." },
      { id: "engl-senior", name: "Senior Seminar", type: "required",
        courses: ["ENGL4000"], note: "" },
      { id: "engl-electives", name: "Literature Electives", type: "elective", elective_count: 4,
        courses: ["ENGL3200","ENGL3400","ENGL3500","ENGL3055","ENGL3327"], note: "" }
    ]
  },

  "sociol-barnard": {
    id: "sociol-barnard", name: "Sociology", school: "Barnard", degree: "BA",
    description: "Barnard sociology with emphasis on gender, race, and intersectional approaches. Strong methods training.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "soci-core", name: "Sociology Core", type: "required",
        courses: ["SOCI1010","SOCI2001","SOCI3000"], note: "" },
      { id: "soci-senior", name: "Senior Requirement", type: "required",
        courses: ["SOCI4000"], note: "" },
      { id: "soci-electives", name: "Sociology Electives", type: "elective", elective_count: 4,
        courses: ["SOCI3100","SOCI3200","SOCI3213","SOCI3235","SOCI3265","SOCI3914"], note: "" }
    ]
  },

  // ── Barnard: Biology ────────────────────────────────────────
  "bio-barnard": {
    id: "bio-barnard", name: "Biology", school: "Barnard", degree: "BA",
    description: "A rigorous biology program with Columbia labs, covering molecular, cellular, and organismal biology. Gateway to medicine, research, and biotech.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "bio-foundation", name: "Biology Foundation", type: "required",
        courses: ["BIOL1500","BIOL1501","BIOL2401","BIOL3004"], note: "Core biology sequence." },
      { id: "chem-foundation", name: "Chemistry Foundation", type: "required",
        courses: ["CHEM1403","CHEM1404"], note: "Two semesters of general chemistry required." },
      { id: "bio-upper", name: "Upper-Level Biology", type: "required",
        courses: ["BIOL3600","BIOL4001"], note: "" },
      { id: "bio-electives", name: "Science Electives", type: "elective", elective_count: 2,
        courses: ["NSBV2000","PSYC3500","STAT4109","CHEM1404"], note: "Choose 2 additional science courses." }
    ]
  },

  // ── Barnard: Neuroscience ───────────────────────────────────
  "neurosci-barnard": {
    id: "neurosci-barnard", name: "Neuroscience", school: "Barnard", degree: "BA",
    description: "An interdisciplinary major combining biology, psychology, and physics to understand the brain and behavior. One of Barnard's fastest-growing programs.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "neuro-bio", name: "Biology Foundation", type: "required",
        courses: ["BIOL1500","CHEM1403"], note: "" },
      { id: "neuro-core", name: "Neuroscience Core", type: "required",
        courses: ["NSBV2000","NSBV3001","NSBV3002","NSBV4001"], note: "" },
      { id: "neuro-stats", name: "Quantitative Requirement", type: "required",
        courses: ["STAT4109"], note: "Statistics required for neuroscience research." },
      { id: "neuro-research", name: "Research", type: "required",
        courses: ["NSBV4301"], note: "Lab research with faculty mentor." },
      { id: "neuro-electives", name: "Neuroscience Electives", type: "elective", elective_count: 2,
        courses: ["NSBV3503","PSYC3500","BIOL2401","BIOL3600"], note: "Choose 2 electives." }
    ]
  },

  // ── Barnard: Urban Studies ──────────────────────────────────
  "urbanstud-barnard": {
      "id": "urbanstud-barnard",
      "name": "Urban Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "An interdisciplinary major examining cities through sociology, economics, policy, and planning. NYC itself is the classroom.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": ""
          },
          {
              "id": "urbs-intro",
              "name": "Introduction",
              "type": "required",
              "courses": [
                  "URBS1515"
              ],
              "note": ""
          },
          {
              "id": "urbs-breadth",
              "name": "Breadth (urban dimensions)",
              "type": "required",
              "choose": 3,
              "courses": [
                  "SOCI3200",
                  "ARCH1030",
                  "SDEV3410",
                  "ANTH3200",
                  "HIST3200"
              ],
              "note": "Urban-focused courses across social, spatial, historical, and ecological/cultural dimensions."
          },
          {
              "id": "urbs-methods",
              "name": "Research Methods",
              "type": "required",
              "choose": 1,
              "courses": [
                  "SDEV3390",
                  "ANTH3000",
                  "SOCI3000"
              ],
              "note": "A methods course (GIS, ethnography, or social research), sophomore or junior year."
          },
          {
              "id": "urbs-depth",
              "name": "Depth Cluster",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "URBS3100",
                  "SOCI3914",
                  "SOCI3235",
                  "ECON4100",
                  "SDEV2050"
              ],
              "note": "Student-proposed specialization cluster approved by the adviser."
          },
          {
              "id": "urbs-junior",
              "name": "Junior Colloquium",
              "type": "required",
              "courses": [
                  "URBS3545"
              ],
              "note": ""
          },
          {
              "id": "urbs-senior",
              "name": "Senior Seminar (year-long)",
              "type": "required",
              "courses": [
                  "URBS3992",
                  "URBS3993"
              ],
              "note": "Independent research project across both terms."
          }
      ]
  },

  // ── Barnard: Dance ──────────────────────────────────────────
  "dance-barnard": {
    id: "dance-barnard", name: "Dance", school: "Barnard", degree: "BA",
    description: "Barnard's acclaimed dance program integrates rigorous technique with choreography, theory, and performance. Home to the Barnard Movement Lab.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "dance-core", name: "Dance Core", type: "required",
        courses: ["DNCE1101","DNCE2001","DNCE3001","DNCE4001"], note: "" },
      { id: "dance-electives", name: "Dance Electives", type: "elective", elective_count: 2,
        courses: ["DNCE3200","THTR1101","ENGL2000"], note: "Choose 2 related electives." }
    ]
  },

  // ── Barnard: Theater ────────────────────────────────────────
  "theater-barnard": {
    id: "theater-barnard", name: "Theater", school: "Barnard", degree: "BA",
    description: "Barnard Theater connects to the Columbia School of the Arts and NYC's professional theater world. Strong acting, directing, and playwriting tracks.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "thtr-core", name: "Theater Core", type: "required",
        courses: ["THTR1101","THTR2001","THTR3001","THTR4001"], note: "" },
      { id: "thtr-electives", name: "Theater Electives", type: "elective", elective_count: 2,
        courses: ["THTR3200","DNCE1101","ENGL2000"], note: "Choose 2 related electives." }
    ]
  },

  // ── CC: Neuroscience ────────────────────────────────────────
  "neurosci-cc": {
    id: "neurosci-cc", name: "Neuroscience and Behavior", school: "CC", degree: "BA",
    description: "An interdisciplinary major in the biology and psychology of the nervous system. Ideal for pre-med students and those headed to neuroscience PhD programs.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "neuro-bio", name: "Biology Foundation", type: "required",
        courses: ["BIOL1500","BIOL1501","CHEM1403","CHEM1404"], note: "" },
      { id: "neuro-stats", name: "Statistics", type: "required",
        courses: ["STAT4109"], note: "" },
      { id: "neuro-core", name: "Neuroscience Core", type: "required",
        courses: ["NSBV2000","NSBV3001","NSBV3002","NSBV4001"], note: "" },
      { id: "neuro-research", name: "Research", type: "required",
        courses: ["NSBV4301"], note: "" },
      { id: "neuro-electives", name: "Neuroscience Electives", type: "elective", elective_count: 2,
        courses: ["NSBV3503","PSYC3500","BIOL2401","BIOL3600","PSYC1001"], note: "Choose 2 electives." }
    ]
  },

  // ── CC: Anthropology ────────────────────────────────────────
  "anthro-cc": {
    id: "anthro-cc", name: "Anthropology", school: "CC", degree: "BA",
    description: "Cultural anthropology with opportunities in archaeological, biological, and linguistic subfields. Great preparation for global careers or graduate study.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "anth-intro", name: "Introduction", type: "required",
        courses: ["ANTH1001"], note: "" },
      { id: "anth-theory", name: "Social Theory", type: "required",
        courses: ["ANTH2200"], note: "" },
      { id: "anth-methods", name: "Research Methods", type: "required",
        courses: ["ANTH3000"], note: "" },
      { id: "anth-senior", name: "Senior Seminar", type: "required",
        courses: ["ANTH4001"], note: "" },
      { id: "anth-electives", name: "Anthropology Electives", type: "elective", elective_count: 3,
        courses: ["ANTH3100","ANTH3200","SOCI1010","HIST1000"], note: "Choose 3 electives." }
    ]
  },

  // ── CC: Film Studies ────────────────────────────────────────
  "filmstud-cc": {
    id: "filmstud-cc", name: "Film Studies", school: "CC", degree: "BA",
    description: "One of the most popular majors at CC, combining critical analysis with film history and theory. Students have access to NYC's unparalleled film culture.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "film-intro", name: "Introduction", type: "required",
        courses: ["FILM1001"], note: "" },
      { id: "film-history", name: "Film History", type: "required",
        courses: ["FILM2001"], note: "" },
      { id: "film-theory", name: "Film Theory", type: "required",
        courses: ["FILM2100"], note: "" },
      { id: "film-senior", name: "Senior Seminar", type: "required",
        courses: ["FILM4001"], note: "" },
      { id: "film-electives", name: "Film Electives", type: "elective", elective_count: 3,
        courses: ["FILM3001","FILM3100","ENGL2000","ENGL3300"], note: "Choose 3 electives." }
    ]
  },

  // ── CC: Art History ─────────────────────────────────────────
  "arthist-cc": {
    id: "arthist-cc", name: "Art History", school: "CC", degree: "BA",
    description: "A rigorous humanities major examining art across cultures and centuries. Access to world-class museums in NYC — the Met, MoMA, and the Guggenheim.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "ahis-intro", name: "Introduction", type: "required",
        courses: ["AHIS1001"], note: "" },
      { id: "ahis-survey", name: "Survey Sequences", type: "required",
        courses: ["AHIS2001","AHIS2002"], note: "" },
      { id: "ahis-methods", name: "Methods", type: "required",
        courses: ["AHIS3001"], note: "" },
      { id: "ahis-senior", name: "Senior Seminar", type: "required",
        courses: ["AHIS4001"], note: "" },
      { id: "ahis-electives", name: "Art History Electives", type: "elective", elective_count: 3,
        courses: ["AHIS3100","ENGL2000","FILM1001","HIST1000"], note: "Choose 3 related courses." }
    ]
  },

  // ── GS: Neuroscience ────────────────────────────────────────
  "neurosci-gs": {
    id: "neurosci-gs", name: "Neuroscience and Behavior", school: "GS", degree: "BA",
    description: "Same interdisciplinary neuroscience curriculum as CC, with GS's flexible entry points for non-traditional students.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "neuro-bio", name: "Biology Foundation", type: "required",
        courses: ["BIOL1500","BIOL1501","CHEM1403"], note: "" },
      { id: "neuro-stats", name: "Statistics", type: "required",
        courses: ["STAT4109"], note: "" },
      { id: "neuro-core", name: "Neuroscience Core", type: "required",
        courses: ["NSBV2000","NSBV3001","NSBV3002","NSBV4001"], note: "" },
      { id: "neuro-research", name: "Research", type: "required",
        courses: ["NSBV4301"], note: "" },
      { id: "neuro-electives", name: "Neuroscience Electives", type: "elective", elective_count: 2,
        courses: ["NSBV3503","PSYC3500","BIOL2401","BIOL3600"], note: "" }
    ]
  },

  // ── GS: Anthropology ────────────────────────────────────────
  "anthro-gs": {
    id: "anthro-gs", name: "Anthropology", school: "GS", degree: "BA",
    description: "Cultural and social anthropology with GS's flexible scheduling. Many GS students have rich fieldwork experience that enriches seminar discussions.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "anth-intro", name: "Introduction", type: "required",
        courses: ["ANTH1001"], note: "" },
      { id: "anth-theory", name: "Social Theory", type: "required",
        courses: ["ANTH2200"], note: "" },
      { id: "anth-methods", name: "Research Methods", type: "required",
        courses: ["ANTH3000"], note: "" },
      { id: "anth-senior", name: "Senior Seminar", type: "required",
        courses: ["ANTH4001"], note: "" },
      { id: "anth-electives", name: "Anthropology Electives", type: "elective", elective_count: 3,
        courses: ["ANTH3100","ANTH3200","SOCI1010","HIST1000"], note: "" }
    ]
  },

  // ── GS: Philosophy ──────────────────────────────────────────
  "phil-gs": {
    id: "phil-gs", name: "Philosophy", school: "GS", degree: "BA",
    description: "Same rigorous Columbia Philosophy curriculum — logic, ethics, history of philosophy — with GS's flexible scheduling.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "phil-intro", name: "Introduction", type: "required",
        courses: ["PHIL1401"], note: "" },
      { id: "phil-history", name: "History of Philosophy", type: "required",
        courses: ["PHIL2110","PHIL2120"], note: "Ancient and modern required." },
      { id: "phil-senior", name: "Senior Seminar", type: "required",
        courses: ["PHIL4000"], note: "" },
      { id: "phil-electives", name: "Philosophy Electives", type: "elective", elective_count: 4,
        courses: ["PHIL3010","PHIL3300","PHIL3600","PHIL3551","PHIL3601","PHIL3751","PHIL3960"], note: "Choose 4 courses." }
    ]
  },

  // ── CC: Biology ─────────────────────────────────────────────
  "bio-cc": {
    id: "bio-cc", name: "Biological Sciences", school: "CC", degree: "BA",
    description: "Columbia College biology with access to world-class research labs. Covers molecular, cellular, evolutionary, and ecological biology. Strong pre-med pathway.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "bio-intro", name: "Biology Foundation", type: "required",
        courses: ["BIOL1500","BIOL1501"], note: "" },
      { id: "bio-chem", name: "Chemistry Foundation", type: "required",
        courses: ["CHEM1403","CHEM1404"], note: "" },
      { id: "bio-upper", name: "Upper-Level Biology", type: "required",
        courses: ["BIOL2401","BIOL3004","BIOL3600"], note: "" },
      { id: "bio-senior", name: "Senior Research", type: "required",
        courses: ["BIOL4001"], note: "" },
      { id: "bio-electives", name: "Biology Electives", type: "elective", elective_count: 2,
        courses: ["NSBV2000","PSYC3500","CHEM2045","STAT4109"], note: "" }
    ]
  },

  // ── CC: Physics ──────────────────────────────────────────────
  "physics-cc": {
    id: "physics-cc", name: "Physics", school: "CC", degree: "BA",
    description: "Rigorous physics curriculum with Columbia's world-class research environment. Strong preparation for graduate school, finance, and engineering careers.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "math-core", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027"], note: "" },
      { id: "phys-intro", name: "Introductory Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "phys-upper", name: "Upper-Level Physics", type: "required",
        courses: ["PHYS2801","PHYS3003","PHYS4003","PHYS4018"], note: "" },
      { id: "phys-lab", name: "Physics Lab", type: "required",
        courses: ["PHYS4040"], note: "" },
      { id: "phys-electives", name: "Physics Electives", type: "elective", elective_count: 2,
        courses: ["MATH4061","APMA3101","CHEM3080"], note: "" }
    ]
  },

  // ── CC: Chemistry ────────────────────────────────────────────
  "chem-cc": {
    id: "chem-cc", name: "Chemistry", school: "CC", degree: "BA",
    description: "Columbia's chemistry major is a gateway to medicine, chemical biology, and materials science. Access to renowned research groups including Nobel laureates.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "math-req", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH2010"], note: "" },
      { id: "phys-req", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "chem-core", name: "Chemistry Core", type: "required",
        courses: ["CHEM1403","CHEM1404","CHEM2045","CHEM2046"], note: "" },
      { id: "chem-upper", name: "Upper-Level Chemistry", type: "required",
        courses: ["CHEM3080","CHEM4250"], note: "" },
      { id: "chem-electives", name: "Chemistry Electives", type: "elective", elective_count: 2,
        courses: ["CHEM4100","BIOL2401","APMA3101"], note: "" }
    ]
  },

  // ── CC: Music ────────────────────────────────────────────────
  "music-cc": {
    id: "music-cc", name: "Music", school: "CC", degree: "BA",
    description: "Columbia's music program combines musicology, theory, and composition. Access to world-class faculty, the Miller Theatre, and NYC's vibrant music scene.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "music-hum", name: "Music Humanities", type: "required",
        courses: ["MUSI1101"], note: "Core Curriculum music requirement." },
      { id: "music-theory", name: "Theory Sequence", type: "required",
        courses: ["MUSI2501","MUSI2502"], note: "" },
      { id: "music-history", name: "Music History", type: "required",
        courses: ["MUSI3101","MUSI3102"], note: "" },
      { id: "music-senior", name: "Senior Seminar", type: "required",
        courses: ["MUSI4001"], note: "" },
      { id: "music-electives", name: "Music Electives", type: "elective", elective_count: 3,
        courses: ["MUSI3500","ENGL2000","PHIL1401"], note: "" }
    ]
  },

  // ── CC: Human Rights ─────────────────────────────────────────
  "humanrights-cc": {
    id: "humanrights-cc", name: "Human Rights", school: "CC", degree: "BA",
    description: "An interdisciplinary major combining history, law, philosophy, and political science. One of the most distinctive offerings at Columbia, with access to the Institute for the Study of Human Rights.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "hrts-intro", name: "Introduction", type: "required",
        courses: ["HRTS1000"], note: "" },
      { id: "hrts-methods", name: "Research Methods", type: "required",
        courses: ["HRTS3000"], note: "" },
      { id: "hrts-law", name: "International Law", type: "required",
        courses: ["HRTS3100"], note: "" },
      { id: "hrts-senior", name: "Capstone", type: "required",
        courses: ["HRTS4001"], note: "" },
      { id: "hrts-electives", name: "Electives", type: "elective", elective_count: 3,
        courses: ["HRTS3200","POLS2210","HIST3200","SOCI1010","ANTH1001"], note: "" }
    ]
  },

  // ── CC: Linguistics ──────────────────────────────────────────
  "ling-cc": {
    id: "ling-cc", name: "Linguistics", school: "CC", degree: "BA",
    description: "Columbia Linguistics spans formal syntax and phonology, psycholinguistics, and language diversity. Close ties to the Computer Science and Philosophy departments.",
    min_credits: 124,
    requirement_groups: [
      { id: "cc-core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "ling-intro", name: "Introduction", type: "required",
        courses: ["LING1101"], note: "" },
      { id: "ling-core", name: "Core Requirements", type: "required",
        courses: ["LING3101","LING3102"], note: "" },
      { id: "ling-senior", name: "Senior Thesis", type: "required",
        courses: ["LING4001"], note: "" },
      { id: "ling-electives", name: "Linguistics Electives", type: "elective", elective_count: 3,
        courses: ["LING3200","COMS3261","PHIL1401","ANTH1001"], note: "" }
    ]
  },

  // ── GS: Biology ──────────────────────────────────────────────
  "bio-gs": {
    id: "bio-gs", name: "Biology", school: "GS", degree: "BA",
    description: "Full biology curriculum with access to Columbia research labs. GS's flexible scheduling works well for students with prior research or lab experience.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "bio-intro", name: "Biology Foundation", type: "required",
        courses: ["BIOL1500","BIOL1501"], note: "" },
      { id: "bio-chem", name: "Chemistry Foundation", type: "required",
        courses: ["CHEM1403","CHEM1404"], note: "" },
      { id: "bio-upper", name: "Upper-Level Biology", type: "required",
        courses: ["BIOL2401","BIOL3004","BIOL3600"], note: "" },
      { id: "bio-senior", name: "Senior Research", type: "required",
        courses: ["BIOL4001"], note: "" },
      { id: "bio-electives", name: "Biology Electives", type: "elective", elective_count: 2,
        courses: ["NSBV2000","PSYC3500","CHEM2045","STAT4109"], note: "" }
    ]
  },

  // ── GS: Physics ──────────────────────────────────────────────
  "physics-gs": {
    id: "physics-gs", name: "Physics", school: "GS", degree: "BA",
    description: "Columbia physics curriculum with GS's flexible entry points. Strong pathway to graduate school, engineering, finance, and data science.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "math-core", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027"], note: "" },
      { id: "phys-intro", name: "Introductory Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "phys-upper", name: "Upper-Level Physics", type: "required",
        courses: ["PHYS2801","PHYS3003","PHYS4003","PHYS4018"], note: "" },
      { id: "phys-lab", name: "Physics Lab", type: "required",
        courses: ["PHYS4040"], note: "" },
      { id: "phys-electives", name: "Physics Electives", type: "elective", elective_count: 2,
        courses: ["MATH4061","APMA3101","CHEM3080"], note: "" }
    ]
  },

  // ── GS: Chemistry ────────────────────────────────────────────
  "chem-gs": {
    id: "chem-gs", name: "Chemistry", school: "GS", degree: "BA",
    description: "Full chemistry curriculum with GS flexibility. Many GS students pursue chemistry as a second degree or pre-professional pathway.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "math-req", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH2010"], note: "" },
      { id: "phys-req", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "chem-core", name: "Chemistry Core", type: "required",
        courses: ["CHEM1403","CHEM1404","CHEM2045","CHEM2046"], note: "" },
      { id: "chem-upper", name: "Upper-Level Chemistry", type: "required",
        courses: ["CHEM3080","CHEM4250"], note: "" },
      { id: "chem-electives", name: "Chemistry Electives", type: "elective", elective_count: 2,
        courses: ["CHEM4100","BIOL2401","APMA3101"], note: "" }
    ]
  },

  // ── GS: Music ────────────────────────────────────────────────
  "music-gs": {
    id: "music-gs", name: "Music", school: "GS", degree: "BA",
    description: "Same Columbia music curriculum as CC, with GS's flexible scheduling — ideal for working musicians and returning students.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "music-theory", name: "Theory Sequence", type: "required",
        courses: ["MUSI2501","MUSI2502"], note: "" },
      { id: "music-history", name: "Music History", type: "required",
        courses: ["MUSI3101","MUSI3102"], note: "" },
      { id: "music-senior", name: "Senior Seminar", type: "required",
        courses: ["MUSI4001"], note: "" },
      { id: "music-electives", name: "Music Electives", type: "elective", elective_count: 3,
        courses: ["MUSI3500","ENGL2000","PHIL1401"], note: "" }
    ]
  },

  // ── GS: Human Rights ─────────────────────────────────────────
  "humanrights-gs": {
    id: "humanrights-gs", name: "Human Rights", school: "GS", degree: "BA",
    description: "Interdisciplinary human rights major with access to Columbia's Institute for the Study of Human Rights. Many GS students bring direct field experience.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "hrts-core", name: "Human Rights Core", type: "required",
        courses: ["HRTS1000","HRTS3000","HRTS3100","HRTS4001"], note: "" },
      { id: "hrts-electives", name: "Electives", type: "elective", elective_count: 3,
        courses: ["HRTS3200","POLS2210","HIST3200","SOCI1010","ANTH1001"], note: "" }
    ]
  },

  // ── GS: Linguistics ──────────────────────────────────────────
  "ling-gs": {
    id: "ling-gs", name: "Linguistics", school: "GS", degree: "BA",
    description: "Formal linguistics — syntax, phonology, semantics — with GS's flexible scheduling.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "ling-intro", name: "Introduction", type: "required",
        courses: ["LING1101"], note: "" },
      { id: "ling-core", name: "Core Requirements", type: "required",
        courses: ["LING3101","LING3102"], note: "" },
      { id: "ling-senior", name: "Senior Thesis", type: "required",
        courses: ["LING4001"], note: "" },
      { id: "ling-electives", name: "Linguistics Electives", type: "elective", elective_count: 3,
        courses: ["LING3200","COMS3261","PHIL1401"], note: "" }
    ]
  },

  // ── Barnard: Physics & Astronomy ─────────────────────────────
  "physics-barnard": {
    id: "physics-barnard", name: "Physics and Astronomy", school: "Barnard", degree: "BA",
    description: "Barnard physics with cross-registration to Columbia's world-class physics department. Access to Nevis Laboratories and Columbia Astrophysics Lab.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "math-core", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027"], note: "" },
      { id: "phys-intro", name: "Introductory Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "phys-upper", name: "Upper-Level Physics", type: "required",
        courses: ["PHYS2801","PHYS3003","PHYS4003","PHYS4018"], note: "" },
      { id: "phys-electives", name: "Physics Electives", type: "elective", elective_count: 2,
        courses: ["PHYS4040","MATH4061","APMA3101"], note: "" }
    ]
  },

  // ── Barnard: Chemistry ───────────────────────────────────────
  "chem-barnard": {
    id: "chem-barnard", name: "Chemistry", school: "Barnard", degree: "BA",
    description: "Barnard's chemistry program prepares students for medical school, graduate research, and the biotech industry. Strong undergraduate research culture.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "math-req", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH2010"], note: "" },
      { id: "phys-req", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "chem-core", name: "Chemistry Core", type: "required",
        courses: ["CHEM1403","CHEM1404","CHEM2045","CHEM2046"], note: "" },
      { id: "chem-upper", name: "Upper-Level Chemistry", type: "required",
        courses: ["CHEM3080","CHEM4250"], note: "" },
      { id: "chem-electives", name: "Chemistry Electives", type: "elective", elective_count: 2,
        courses: ["CHEM4100","BIOL2401"], note: "" }
    ]
  },

  // ── Barnard: Music ───────────────────────────────────────────
  "music-barnard": {
    id: "music-barnard", name: "Music", school: "Barnard", degree: "BA",
    description: "Barnard Music combines musicological scholarship with composition and performance. Close ties to Columbia's music department and the Miller Theatre.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "music-theory", name: "Theory Sequence", type: "required",
        courses: ["MUSI2501","MUSI2502"], note: "" },
      { id: "music-history", name: "Music History", type: "required",
        courses: ["MUSI3101","MUSI3102"], note: "" },
      { id: "music-senior", name: "Senior Seminar", type: "required",
        courses: ["MUSI4001"], note: "" },
      { id: "music-electives", name: "Music Electives", type: "elective", elective_count: 3,
        courses: ["MUSI3500","ENGL2000","THTR1101"], note: "" }
    ]
  },

  // ── Barnard: Human Rights ────────────────────────────────────
  "humanrights-barnard": {
    id: "humanrights-barnard", name: "Human Rights", school: "Barnard", degree: "BA",
    description: "Barnard's human rights program emphasizes feminist and intersectional perspectives on international justice, complementing Columbia's Institute for Human Rights.",
    min_credits: 122,
    requirement_groups: [
      { id: "barnard-reqs", name: "Barnard Requirements", type: "required",
        courses: ["ENGL1010","CORE_FRSCI"], note: "" },
      { id: "hrts-core", name: "Human Rights Core", type: "required",
        courses: ["HRTS1000","HRTS3000","HRTS3100","HRTS4001"], note: "" },
      { id: "hrts-electives", name: "Electives", type: "elective", elective_count: 3,
        courses: ["HRTS3200","POLS2210","HIST3200","SOCI1010"], note: "" }
    ]
  },

  // ── SEAS: Civil Engineering and Engineering Mechanics ────────
  "ceem-seas": {
    id: "ceem-seas", name: "Civil Engineering & Eng. Mechanics", school: "SEAS", degree: "BS",
    description: "Design and analysis of infrastructure: buildings, bridges, water systems, and transportation networks. Combines structural, geotechnical, and environmental tracks.",
    min_credits: 128,
    requirement_groups: [
      {
        id: "math", name: "Mathematics Foundation", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027"],
        note: "Full calculus plus differential equations required for CEEM."
      },
      {
        id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"],
        note: "Both semesters of physics required."
      },
      {
        id: "chem", name: "Chemistry", type: "required",
        courses: ["CHEM1403"],
        note: "General Chemistry I required."
      },
      {
        id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"],
        note: "Writing requirement."
      },
      {
        id: "ceem-core", name: "CEEN Core", type: "required",
        courses: ["CIEN3010","CIEN3030","CIEN3210","CIEN4200","CIEN4999"],
        note: "Statics, Mechanics of Solids, Fluid Mechanics, Structural Analysis, and Senior Design."
      },
      {
        id: "ceem-electives", name: "Civil Engineering Electives", type: "elective",
        elective_count: 3,
        courses: ["CIEN4700","EAEE2100","EAEE4000","APMA3101"],
        note: "Choose 3 upper-level CIEN or related courses."
      },
      {
        id: "liberal", name: "Liberal Arts Electives", type: "elective",
        elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS requires 6 liberal arts electives."
      }
    ]
  },

  // ── SEAS: Earth and Environmental Engineering ────────────────
  "eee-seas": {
    id: "eee-seas", name: "Earth & Environmental Engineering", school: "SEAS", degree: "BS",
    description: "Engineering solutions to environmental challenges: climate change, water quality, air pollution, and sustainable energy systems. Highly interdisciplinary.",
    min_credits: 128,
    requirement_groups: [
      {
        id: "math", name: "Mathematics Foundation", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010"],
        note: "Calculus through multivariable required."
      },
      {
        id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"],
        note: "Both semesters of calculus-based physics."
      },
      {
        id: "chem", name: "Chemistry", type: "required",
        courses: ["CHEM1403","CHEM1404"],
        note: "Two semesters of general chemistry required."
      },
      {
        id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201"],
        note: "Statistics needed for environmental data analysis."
      },
      {
        id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"],
        note: "Writing requirement."
      },
      {
        id: "eee-core", name: "EEE Core", type: "required",
        courses: ["EAEE2100","EAEE3100","EAEE4000","EAEE4150","EAEE4999"],
        note: "Introduction through fate/transport, air/water quality, and senior capstone."
      },
      {
        id: "eee-electives", name: "EEE Electives", type: "elective",
        elective_count: 3,
        courses: ["CIEN3210","CIEN4700","APMA3101","BIOL1500"],
        note: "Choose 3 upper-level EEE, CIEN, or related courses."
      },
      {
        id: "liberal", name: "Liberal Arts Electives", type: "elective",
        elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS requires 6 liberal arts electives."
      }
    ]
  },

  // ── SEAS: Applied Physics ────────────────────────────────────
  "appphys-seas": {
    id: "appphys-seas", name: "Applied Physics", school: "SEAS", degree: "BS",
    description: "Physics at the intersection of science and engineering. Covers quantum mechanics, condensed matter, optics, and photonics — ideal for research, semiconductors, or PhD programs.",
    min_credits: 128,
    requirement_groups: [
      {
        id: "math", name: "Mathematics Foundation", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027","MATH4061"],
        note: "Full calculus through real analysis required."
      },
      {
        id: "physics-core", name: "Physics Core", type: "required",
        courses: ["PHYS1401","PHYS1402","PHYS2801","PHYS3003","PHYS4003","PHYS4018"],
        note: "Classical mechanics through E&M and thermal physics."
      },
      {
        id: "apph-advanced", name: "Advanced Applied Physics", type: "required",
        courses: ["APPH3300","APPH4200","APPH4500"],
        note: "Quantum Mechanics II, Condensed Matter, and Advanced Lab."
      },
      {
        id: "chem", name: "Chemistry", type: "required",
        courses: ["CHEM1403"],
        note: "General Chemistry I required."
      },
      {
        id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"],
        note: "Writing requirement."
      },
      {
        id: "apph-electives", name: "Applied Physics Electives", type: "elective",
        elective_count: 3,
        courses: ["PHYS4040","ELEN4830","COMS4771","APMA3101","APMA4200"],
        note: "Choose 3 upper-level applied physics or related technical courses."
      },
      {
        id: "liberal", name: "Liberal Arts Electives", type: "elective",
        elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS requires 6 liberal arts electives."
      }
    ]
  },

  // ── GS: Film Studies ────────────────────────────────────────
  "filmstud-gs": {
    id: "filmstud-gs", name: "Film Studies", school: "GS", degree: "BA",
    description: "Film history, theory, and criticism at Columbia with access to NYC's world-class film culture. GS's flexible scheduling suits working film professionals.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"], note: "" },
      { id: "film-intro", name: "Introduction", type: "required",
        courses: ["FILM1001"], note: "" },
      { id: "film-history", name: "Film History", type: "required",
        courses: ["FILM2001"], note: "" },
      { id: "film-theory", name: "Film Theory", type: "required",
        courses: ["FILM2100"], note: "" },
      { id: "film-senior", name: "Senior Seminar", type: "required",
        courses: ["FILM4001"], note: "" },
      { id: "film-electives", name: "Film Electives", type: "elective", elective_count: 3,
        courses: ["FILM3001","FILM3100","ENGL2000","ENGL3300"], note: "" }
    ]
  },

  // ── CC batch: interdisciplinary & humanities majors ─────────
  "afam-cc": {
    id: "afam-cc", name: "African American and African Diaspora Studies", school: "CC", degree: "BA",
    description: "Interdisciplinary study of the history, culture, and politics of Africa and the African diaspora.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "afas-gateway", name: "Gateway", type: "required",
        courses: ["AFAS1001","AFAS1002"],
        note: "Both gateway courses, ideally by end of sophomore year." },
      { id: "afas-electives", name: "Electives & Areas of Study", type: "elective", elective_count: 4,
        courses: ["AFAS1003","AFAS3001","AFAS3030","AFAS3930","AFAS3936","AFAS4031","AFAS4035","AFAS4037","AFAS4080","ENGL4619","HIST3200"],
        note: "Four courses across at least two departments, per your approved plan of study. GU4000-level courses expect the gateway sequence first." },
      { id: "afas-senior", name: "Senior Seminar", type: "required",
        courses: ["AFAS3940"],
        note: "Capstone thesis seminar." }
    ]
  },

  "amst-cc": {
    id: "amst-cc", name: "American Studies", school: "CC", degree: "BA",
    description: "Interdisciplinary study of American culture, politics, and society across departments.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "amst-intro", name: "Core Course", type: "required",
        courses: ["AMST1010"], note: "" },
      { id: "amst-seminars", name: "American Studies Seminars", type: "required", choose: 2,
        courses: ["AMST3930","AMST3933","AMST3937","AMST3943"],
        note: "Two 3000-level AMST seminars (Intro to American Studies first)." },
      { id: "amst-crossdept", name: "Courses from Other Departments", type: "elective", elective_count: 4,
        courses: ["HIST3200","ENGL3200","POLS2220","SOCI3213","AFAS1001","FILM2001"],
        note: "Four America-focused courses, incl. one in pre-1865 US history and one in CSER/AAADS." },
      { id: "amst-senior", name: "Senior Research Project", type: "required",
        courses: ["AMST3998"], note: "Senior thesis (or approved alternative)." }
    ]
  },

  "astro-cc": {
    id: "astro-cc", name: "Astronomy", school: "CC", degree: "BA",
    description: "The physics of stars, galaxies, and the universe, built on a physics and calculus foundation.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "astro-math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH1202"],
        note: "Calculus sequence through Calculus IV." },
      { id: "astro-phys", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"],
        note: "Introductory physics sequence (or honors equivalent)." },
      { id: "astro-core", name: "Astronomy Core", type: "required",
        courses: ["ASTR2001","ASTR2002"],
        note: "Introduction to Astrophysics I–II." },
      { id: "astro-electives", name: "Astronomy Electives", type: "elective", elective_count: 3,
        courses: ["ASTR3102","ASTR3273","ASTR3646","ASTR4260"],
        note: "Three astronomy courses at the 3000 level or above (each requires the calculus-based physics sequence)." },
      { id: "astro-intro", name: "Intro Astronomy (astronomy-track option)", type: "elective", elective_count: 1,
        courses: ["ASTR1403","ASTR1404","ASTR1453"],
        note: "The non-astrophysics Astronomy track may substitute two 1000-level surveys for Intro Astrophysics — pick one here as enrichment." },
      { id: "astro-senior", name: "Senior Thesis", type: "elective", elective_count: 1,
        courses: ["ASTR3997","ASTR3998"],
        note: "Optional senior thesis (two terms available), recommended for graduate school." }
    ]
  },

  "classics-cc": {
    id: "classics-cc", name: "Classics", school: "CC", degree: "BA",
    description: "Greek and Latin language, literature, and the civilizations of the ancient Mediterranean.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "clas-primary", name: "Primary Language (Latin)", type: "required",
        courses: ["LATN1101","LATN1102","LATN2101","LATN2102"],
        note: "Primary ancient language through the intermediate level (Greek track also available)." },
      { id: "clas-secondary", name: "Secondary Language (Greek)", type: "required",
        courses: ["GREK2102"],
        note: "Second ancient language to at least the intermediate level." },
      { id: "clas-advanced", name: "Advanced Language", type: "required", choose: 1,
        courses: ["LATN3012","GREK3309"],
        note: "3000-level reading course in your primary language (requires the intermediate sequence)." },
      { id: "clas-civ", name: "Civilization Courses", type: "required", choose: 2,
        courses: ["CLCV1001","CLCV2441","CLCV3008","CLCV3009","CLCV3059","CLCV3069","CLCV3070","CLCV3101","CLCV3111","CLCV3220"],
        note: "Breadth courses on the ancient Mediterranean, in translation." },
      { id: "clas-seminar", name: "Major Seminar", type: "required",
        courses: ["CLAS3996"], note: "" },
      { id: "clas-thesis", name: "Senior Thesis", type: "required",
        courses: ["CLAS3998"], note: "" }
    ]
  },

  "religion-cc": {
    id: "religion-cc", name: "Religion", school: "CC", degree: "BA",
    description: "The study of religious traditions, texts, and theory across cultures.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "reli-gateway", name: "Gateway Course", type: "required", choose: 1,
        courses: ["RELI1612","RELI1120"],
        note: "1000-level introduction to religion as an analytical category." },
      { id: "reli-traditions", name: "Introductory Traditions", type: "required", choose: 2,
        courses: ["RELI2305","RELI2405","RELI2779","RELI2312"],
        note: "Two 2000-level surveys of different religious traditions." },
      { id: "reli-theory", name: "Theory", type: "required",
        courses: ["RELI3199"],
        note: "Required theory course, offered in fall." },
      { id: "reli-intermediate", name: "Intermediate Courses (two)", type: "required",
        courses: ["RELI3314","RELI3007"],
        note: "Two focused 3000-level topical courses." },
      { id: "reli-seminar", name: "Advanced Seminars (two)", type: "required", choose: 2,
        courses: ["RELI4217","RELI4216","RELI4223","RELI4376","RELI4616"],
        note: "Two 4000-level seminars; expect prior Religion coursework (Theory first)." },
      { id: "reli-electives", name: "Additional Course", type: "elective", elective_count: 1,
        courses: ["PHIL1401","ANTH1001","HIST2701"],
        note: "One additional course in Religion or an approved cognate department." }
    ]
  },

  "french-cc": {
    id: "french-cc", name: "French and Francophone Studies", school: "CC", degree: "BA",
    description: "French language, literature, and the cultures of the francophone world.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "fren-language", name: "Language Sequence", type: "required",
        courses: ["FREN1101","FREN1102","FREN2101","FREN2102"],
        note: "Four-term sequence; placement exams may exempt some courses." },
      { id: "fren-core", name: "French Core", type: "required",
        courses: ["FREN3405","FREN3409","FREN3410"],
        note: "Read/Think/Write plus the two intro-to-studies courses." },
      { id: "fren-electives", name: "Electives", type: "elective", elective_count: 6,
        courses: ["FREN3242","FREN3503","FREN3515","FREN3517","FREN3600","FREN3666","FREN3714","FREN3726","FREN3766"],
        note: "Six upper-level courses, 18 points (all require Read/Think/Write first); at least one pre-1800 course — Enlightenment, Montaigne/Descartes/Pascal, or Molière; max two 'French Through X'." },
      { id: "fren-senior", name: "Senior Seminar", type: "required",
        courses: ["FREN3995"], note: "" },
      { id: "fren-tutorial", name: "Senior Tutorial (Honors)", type: "elective", elective_count: 1,
        courses: ["FREN3996"],
        note: "Optional honors tutorial after the senior seminar." }
    ]
  },

  "italian-cc": {
    id: "italian-cc", name: "Italian", school: "CC", degree: "BA",
    description: "Italian language, literature, and cultural studies from Dante to the present.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "ital-language", name: "Language Sequence", type: "required",
        courses: ["ITAL1101","ITAL1102","ITAL2101","ITAL2102"],
        note: "Through intermediate level; placement may exempt some courses." },
      { id: "ital-advanced", name: "Advanced Italian", type: "required",
        courses: ["ITAL3335"], note: "" },
      { id: "ital-content", name: "Language Through Content", type: "required", choose: 1,
        courses: ["ITAL3337","ITAL3339","ITAL3341","ITAL3342"],
        note: "One content course: cinema, telecollaboration, art, or business Italian (Italian Through Cinema requires Advanced Italian I)." },
      { id: "ital-lit", name: "Literature Sequence", type: "required",
        courses: ["ITAL3333","ITAL3334"],
        note: "Intro to Italian Literature I–II (or the Cultural Studies sequence)." },
      { id: "ital-electives", name: "Electives", type: "elective", elective_count: 5,
        courses: ["ITAL4091","ITAL4502","ITAL4499","ITAL3645","ITAL3661","ITAL3865"],
        note: "Six electives in the full major, at least two from the department (five modeled here; Dante requires the literature sequence)." },
      { id: "ital-senior", name: "Senior Thesis", type: "elective", elective_count: 1,
        courses: ["ITAL3993"], note: "Optional senior thesis/tutorial." }
    ]
  },

  "german-cc": {
    id: "german-cc", name: "German Literature and Cultural History", school: "CC", degree: "BA",
    description: "German language, literature, and intellectual history.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "germ-language", name: "Language Sequence", type: "required",
        courses: ["GERM1101","GERM1102","GERM2101","GERM2102"],
        note: "Elementary and intermediate German." },
      { id: "germ-advanced", name: "Advanced German", type: "required", choose: 1,
        courses: ["GERM3001","GERM3002"],
        note: "Advanced German I or II (requires the intermediate sequence)." },
      { id: "germ-methods", name: "Literary Studies", type: "required",
        courses: ["GERM3333"], note: "" },
      { id: "germ-surveys", name: "Surveys", type: "required", choose: 2,
        courses: ["GERM3442","GERM3443","GERM3444","GERM3445"],
        note: "Two surveys, at least one pre-20th century (all require Intro to German Literary Studies)." },
      { id: "germ-electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["GERM4170","GERM4350","GERM4448","GERM3991"],
        note: "3000/4000-level German courses, chosen with the DUS." }
    ]
  },

  "russian-cc": {
    id: "russian-cc", name: "Russian Language and Culture", school: "CC", degree: "BA",
    description: "Russian language through the advanced level with Russian literature and culture.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "russ-language", name: "Language Sequence", type: "required",
        courses: ["RUSS1101","RUSS1102","RUSS2101","RUSS2102","RUSS3101","RUSS3102"],
        note: "First- through third-year Russian (fourth year recommended for grad study)." },
      { id: "russ-surveys", name: "Literature Survey", type: "required", choose: 1,
        courses: ["RUSS3220","RUSS3221"],
        note: "At least one of the two literature surveys." },
      { id: "russ-electives", name: "Electives", type: "elective", elective_count: 5,
        courses: ["RUSS4039","RUSS4910","RUSS4127","CLRS3309","CLRS3314","CLRS3316","CLRS4011","CLRS4022","CLRS4036","CLRS4038"],
        note: "Five courses in Russian culture, history, literature, film, or music; at least one taught in Russian (GU4011/4036/4038 expect a literature survey first)." }
    ]
  },

  "eastasian-cc": {
    id: "eastasian-cc", name: "East Asian Languages and Cultures", school: "CC", degree: "BA",
    description: "The languages, histories, and cultures of China, Japan, Korea, Tibet, and Vietnam.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "eaas-language", name: "Language Proficiency", type: "required",
        courses: ["CHNS3003","CHNS3004"],
        note: "Third-year proficiency in Chinese, Japanese, Korean, Tibetan, or Vietnamese." },
      { id: "eaas-colloquium", name: "Colloquium on Major Texts", type: "required",
        courses: ["AHUM1400"],
        note: "Required colloquium (AHUM UN1400)." },
      { id: "eaas-surveys", name: "Civilization Surveys", type: "required", choose: 2,
        courses: ["ASCE1359","ASCE1361","ASCE1363","ASCE1365","ASCE1367"],
        note: "Two of the five introductory civilization surveys (China, Japan, Korea, Tibet, Vietnam)." },
      { id: "eaas-methods", name: "Approaches to East Asian Studies", type: "required",
        courses: ["EAAS3990"],
        note: "Required methodology seminar, fall of junior year." },
      { id: "eaas-electives", name: "Electives", type: "elective", elective_count: 4,
        courses: ["EAAS3322","EAAS3913","HSEA3862","EAAS2342","EAAS3215","EAAS3217","EAAS3263","EAAS3310","EAAS3313"],
        note: "Four East Asian studies courses at the 3000 level or above (Social Problems in Contemporary China expects the China survey first)." },
      { id: "eaas-senior", name: "Senior Thesis", type: "elective", elective_count: 1,
        courses: ["EAAS3901"], note: "Optional senior thesis with research workshop." }
    ]
  },

  "mesaas-cc": {
    id: "mesaas-cc", name: "Middle Eastern, South Asian, and African Studies", school: "CC", degree: "BA",
    description: "Interdisciplinary study of the Middle East, South Asia, and Africa with language training.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "mdes-language", name: "Language Requirement", type: "required",
        courses: ["ARAB1101","ARAB1102","ARAB2101","ARAB2102"],
        note: "Two years of one regional language (Arabic shown; Persian, Hebrew, Hindi/Urdu, Swahili, etc. also qualify)." },
      { id: "mdes-intro", name: "Introductory Culture Course", type: "required", choose: 1,
        courses: ["MDES1003","ASCM2003"],
        note: "One approved intro culture course (Premodern Islamic Worlds, Intro to Islamic Civilization, etc.)." },
      { id: "mdes-colloquium", name: "Regional Texts Colloquium", type: "required",
        courses: ["AHUM1399"],
        note: "Required colloquium (AHUM UN1399 or AFCV UN1020)." },
      { id: "mdes-theory", name: "Theory and Culture", type: "required",
        courses: ["MDES3000"],
        note: "Core seminar, typically junior/senior year." },
      { id: "mdes-electives", name: "Electives", type: "elective", elective_count: 5,
        courses: ["MDES2641","MDES3042","MDES4122","MDES4765","MDES1001","MDES1030","MDES2004","MDES2012","MDES2042","MDES2650","MDES3048","MDES3121"],
        note: "Fifteen points (~5 courses) chosen with director approval; up to six points from other departments." }
    ]
  },

  // CC majors administered through Barnard departments
  "dance-cc": {
    id: "dance-cc", name: "Dance", school: "CC", degree: "BA",
    description: "Dance technique, composition, and history, through the Barnard Department of Dance.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "dance-core", name: "Dance Core", type: "required",
        courses: ["DNCE1101","DNCE2001","DNCE3001","DNCE4001"], note: "" },
      { id: "dance-electives", name: "Related Electives", type: "elective", elective_count: 2,
        courses: ["DNCE3200","THTR1101","ENGL2000"], note: "Choose 2 related electives." }
    ]
  },

  "theater-cc": {
    id: "theater-cc", name: "Drama and Theatre Arts", school: "CC", degree: "BA",
    description: "Theatre history, performance, and production, through the Barnard Department of Theatre.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "thtr-core", name: "Theatre Core", type: "required",
        courses: ["THTR1101","THTR2001","THTR3001","THTR4001"], note: "" },
      { id: "thtr-electives", name: "Related Electives", type: "elective", elective_count: 2,
        courses: ["THTR3200","DNCE1101","ENGL2000"], note: "Choose 2 related electives." }
    ]
  },

  "urbanstud-cc": {
      "id": "urbanstud-cc",
      "name": "Urban Studies",
      "school": "CC",
      "degree": "BA",
      "description": "Cities, urban policy, and metropolitan life, through the Barnard Urban Studies program.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "core",
              "name": "Core Curriculum",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_AHUM",
                  "CORE_MHUM",
                  "CORE_WRITE",
                  "CORE_FRSCI",
                  "CORE_GLOB"
              ],
              "note": "All CC students complete the full Core Curriculum."
          },
          {
              "id": "urbs-intro",
              "name": "Introduction",
              "type": "required",
              "courses": [
                  "URBS1515"
              ],
              "note": ""
          },
          {
              "id": "urbs-breadth",
              "name": "Breadth (urban dimensions)",
              "type": "required",
              "choose": 3,
              "courses": [
                  "SOCI3200",
                  "ARCH1030",
                  "SDEV3410",
                  "ANTH3200",
                  "HIST3200"
              ],
              "note": "Urban-focused courses across social, spatial, historical, and ecological/cultural dimensions."
          },
          {
              "id": "urbs-methods",
              "name": "Research Methods",
              "type": "required",
              "choose": 1,
              "courses": [
                  "SDEV3390",
                  "ANTH3000",
                  "SOCI3000"
              ],
              "note": "A methods course (GIS, ethnography, or social research), sophomore or junior year."
          },
          {
              "id": "urbs-depth",
              "name": "Depth Cluster",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "URBS3100",
                  "SOCI3914",
                  "SOCI3235",
                  "ECON4100",
                  "SDEV2050"
              ],
              "note": "Student-proposed specialization cluster approved by the adviser."
          },
          {
              "id": "urbs-junior",
              "name": "Junior Colloquium",
              "type": "required",
              "courses": [
                  "URBS3545"
              ],
              "note": ""
          },
          {
              "id": "urbs-senior",
              "name": "Senior Seminar (year-long)",
              "type": "required",
              "courses": [
                  "URBS3992",
                  "URBS3993"
              ],
              "note": "Independent research project across both terms."
          }
      ]
  },

  "arch-cc": {
      "id": "arch-cc",
      "name": "Architecture",
      "school": "CC",
      "degree": "BA",
      "description": "Design studios with architectural history and theory — a liberal-arts path into architecture.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "core",
              "name": "Core Curriculum",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_AHUM",
                  "CORE_MHUM",
                  "CORE_WRITE",
                  "CORE_FRSCI",
                  "CORE_GLOB"
              ],
              "note": "All CC students complete the full Core Curriculum."
          },
          {
              "id": "arch-studios",
              "name": "Design Studios",
              "type": "required",
              "courses": [
                  "ARCH2101",
                  "ARCH2103",
                  "ARCH3201",
                  "ARCH3202"
              ],
              "note": "Four sequential studios, one per semester."
          },
          {
              "id": "arch-history",
              "name": "History Requirement",
              "type": "required",
              "courses": [
                  "ARCH3117"
              ],
              "note": "Modern Architecture in the World."
          },
          {
              "id": "arch-lectures",
              "name": "Lectures & Seminars",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "ARCH1010",
                  "ARCH1030",
                  "ARCH2530",
                  "ARCH3120",
                  "ARCH3312",
                  "ARCH4260",
                  "ARCH4305",
                  "AHIS2002",
                  "AHIS3100"
              ],
              "note": "Four courses: one history, one society/environment/global, one design/media/technology, one elective."
          },
          {
              "id": "arch-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "ARCH3901"
              ],
              "note": "Capstone: portfolio plus research writing sample."
          }
      ]
  },

  "complit-cc": {
    id: "complit-cc", name: "Comparative Literature and Society", school: "CC", degree: "BA",
    description: "Literature across languages and societies, through the Institute for Comparative Literature and Society.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "cpls-language", name: "Language Study", type: "required",
        courses: ["FREN1101","FREN1102","FREN2101","FREN2102"],
        note: "Four semesters of foreign language (any language; French shown) plus one advanced course." },
      { id: "cpls-intro", name: "Introduction", type: "required",
        courses: ["CPLS3900"], note: "Taken spring of sophomore year." },
      { id: "cpls-designated", name: "CPLS-Designated Courses", type: "required", choose: 2,
        courses: ["CPLS3800","CPLS4227","CPLS4685","CPLS3931","CPLS4200","CPLS4162","CPLS4325","CPLS4545","CPLS4876"], note: "" },
      { id: "cpls-electives", name: "Literature & Cognate Electives", type: "elective", elective_count: 2,
        courses: ["RUSS3220","MDES4122","ENGL3500","GERM4170"],
        note: "Courses on national/regional literatures and cognate disciplines." },
      { id: "cpls-senior", name: "Senior Seminar", type: "required",
        courses: ["CPLS3991"], note: "" },
      { id: "cpls-thesis", name: "Senior Thesis", type: "elective", elective_count: 1,
        courses: ["CPLS3995"], note: "Optional senior thesis." }
    ]
  },

  "crwr-cc": {
    id: "crwr-cc", name: "Creative Writing", school: "CC", degree: "BA",
    description: "Workshops in fiction, poetry, and nonfiction with literature seminars taught from a writer's perspective.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "crwr-beginning", name: "Beginning Workshops", type: "required", choose: 2,
        courses: ["WRIT1100","WRIT1200","WRIT1300"],
        note: "Beginning workshops (required before open workshops); one per semester." },
      { id: "crwr-workshops", name: "Open Workshops", type: "required", choose: 2,
        courses: ["WRIT3100","WRIT3200","WRIT3300"],
        note: "Open workshops in your genre(s); each requires a beginning workshop first." },
      { id: "crwr-senior-workshop", name: "Senior Workshop", type: "required",
        courses: ["WRIT3101"], note: "By application with writing sample." },
      { id: "crwr-seminars", name: "Craft Seminars", type: "required", choose: 4,
        courses: ["WRIT3137","WRIT3321","WRIT3031","WRIT3048","WRIT3131","WRIT3210","WRIT3217"],
        note: "Four seminars studying literature from a writer's perspective (max two per semester)." },
      { id: "crwr-related", name: "Related Courses", type: "elective", elective_count: 2,
        courses: ["ENGL3400","ENGL3200","PHIL1401"],
        note: "Approved by the Director of Undergraduate Studies." }
    ]
  },

  "earthsci-cc": {
    id: "earthsci-cc", name: "Earth and Environmental Sciences", school: "CC", degree: "BA",
    description: "The solid earth, climate, and life systems, with Lamont-Doherty research opportunities.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "eesc-foundation", name: "Foundation", type: "required",
        courses: ["EESC2200"], note: "The Solid Earth is required." },
      { id: "eesc-foundation2", name: "Second Foundation Course", type: "required", choose: 1,
        courses: ["EESC2100","EESC2300"],
        note: "Climate System or Life System." },
      { id: "eesc-support", name: "Supporting Math & Science", type: "required",
        courses: ["MATH1101","CHEM1403","PHYS1401"],
        note: "One calculus semester plus a chemistry/physics sequence." },
      { id: "eesc-breadth", name: "Breadth Courses", type: "required", choose: 2,
        courses: ["EESC1001","EESC1030","EESC1201","EESC1600"],
        note: "Science electives not requiring an Earth-science background (minimum 6 points)." },
      { id: "eesc-depth", name: "Depth Courses", type: "elective", elective_count: 3,
        courses: ["EESC3101","EESC4008","EESC4925","EESC4949"],
        note: "3000/4000-level courses with EESC prerequisites (Geochemistry needs an intro EESC course, Calc I, and General Chemistry)." },
      { id: "eesc-capstone", name: "Capstone", type: "required",
        courses: ["EESC3901"], note: "Senior seminar (or summer geology field course)." }
    ]
  },

  "eeeb-cc": {
    id: "eeeb-cc", name: "Ecology, Evolution, and Environmental Biology", school: "CC", degree: "BA",
    description: "Life on Earth from organisms to global processes — ecology, evolution, and conservation.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "eeeb-bio", name: "Biological Foundations", type: "required",
        courses: ["EEEB2001","EEEB2002","BIOL1500"],
        note: "Environmental Biology I–II (II requires I) plus introductory biology." },
      { id: "eeeb-physsci", name: "Physical Sciences", type: "required", choose: 2,
        courses: ["CHEM1403","PHYS1401","EESC2100"], note: "" },
      { id: "eeeb-quant", name: "Quantitative Foundations", type: "required",
        courses: ["MATH1101","EEEB3005"], note: "" },
      { id: "eeeb-advanced", name: "Advanced Electives", type: "elective", elective_count: 5,
        courses: ["EEEB3087","EEEB4100","EEEB4201","EEEB1010","EEEB3215","EEEB3320","EEEB3910"],
        note: "Five advanced electives, at least one with a lab (The Neandertals requires Human Origins first)." },
      { id: "eeeb-senior", name: "Senior Thesis", type: "required",
        courses: ["EEEB3991"], note: "Thesis seminar with summer research internship." }
    ]
  },

  "cogsci-cc": {
    id: "cogsci-cc", name: "Cognitive Science", school: "CC", degree: "BA",
    description: "Mind and cognition across psychology, neuroscience, philosophy, linguistics, and computation.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "cogs-intro", name: "Foundational Course", type: "required",
        courses: ["COGS1001"], note: "" },
      { id: "cogs-psych", name: "Psychology (Cognition)", type: "required", choose: 1,
        courses: ["PSYC3100","PSYC2210"],
        note: "One cognition-focused psychology course." },
      { id: "cogs-phil", name: "Philosophy", type: "required", choose: 1,
        courses: ["PHIL3300","PHIL2655","PHIL3252"],
        note: "One philosophy-of-mind/cognitive-science course." },
      { id: "cogs-ling", name: "Linguistics", type: "required",
        courses: ["LING1101"], note: "" },
      { id: "cogs-neuro", name: "Neuroscience", type: "required", choose: 1,
        courses: ["NSBV2000","PSYC3500","PSYC2430","NSBV3381"], note: "" },
      { id: "cogs-computation", name: "Mathematical & Computational Methods", type: "required",
        courses: ["COMS1004","STAT1201"], note: "Two methods courses required." },
      { id: "cogs-specialization", name: "Area of Specialization", type: "elective", elective_count: 4,
        courses: ["PSYC3300","NSBV3503","PHIL3600","LING3101","COGS3952","PSYC2430","PHIL3252"],
        note: "Four related electives in your chosen specialization (e.g. perception, decision science)." },
      { id: "cogs-senior", name: "Senior Capstone", type: "required",
        courses: ["COGS3903"], note: "Year-long senior project (or two advanced courses with papers)." }
    ]
  },

  "cser-cc": {
    id: "cser-cc", name: "Ethnicity and Race Studies", school: "CC", degree: "BA",
    description: "Comparative study of ethnicity and race, with specializations from Asian American to Indigenous studies.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "cser-intro", name: "Introduction", type: "required",
        courses: ["CSER1010"], note: "" },
      { id: "cser-corechoice", name: "Core Course", type: "required", choose: 1,
        courses: ["CSER3928","CSER3942"],
        note: "Colonization/Decolonization or Race and Racisms." },
      { id: "cser-methods", name: "Modes of Inquiry", type: "required",
        courses: ["CSER3919"], note: "" },
      { id: "cser-electives", name: "Specialization Electives", type: "elective", elective_count: 5,
        courses: ["CSER3303","CSER3490","CSER3701","CSER3702","CSER3821","CSER3905","CSER3922","CSER3926","CSER3940","CSER3949","AFAS4035","WMST4210"],
        note: "Five electives in your specialization track; at least one writing-intensive seminar." },
      { id: "cser-senior", name: "Senior Project Seminar", type: "required",
        courses: ["CSER3990"], note: "" }
    ]
  },

  "hispanic-cc": {
      "id": "hispanic-cc",
      "name": "Hispanic Studies",
      "school": "CC",
      "degree": "BA",
      "description": "Spanish language with the literatures and cultures of Iberia and Latin America.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "core",
              "name": "Core Curriculum",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_AHUM",
                  "CORE_MHUM",
                  "CORE_WRITE",
                  "CORE_FRSCI",
                  "CORE_GLOB"
              ],
              "note": "All CC students complete the full Core Curriculum."
          },
          {
              "id": "span-language",
              "name": "Language Foundation",
              "type": "required",
              "courses": [
                  "SPAN1101",
                  "SPAN1102",
                  "SPAN2101",
                  "SPAN2102"
              ],
              "note": "Through intermediate Spanish; placement may exempt courses."
          },
          {
              "id": "span-advanced",
              "name": "Advanced Language",
              "type": "required",
              "courses": [
                  "SPAN3300"
              ],
              "note": ""
          },
          {
              "id": "span-cultures",
              "name": "Hispanic Cultures",
              "type": "required",
              "courses": [
                  "SPAN3349",
                  "SPAN3350"
              ],
              "note": ""
          },
          {
              "id": "span-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "SPAN3315",
                  "SPAN3366",
                  "SPAN3731",
                  "SPAN4010",
                  "CPLS3800",
                  "FILM3100"
              ],
              "note": "Seven electives in the full major (five modeled), min three at 3000+ in the department; all SPAN electives require Advanced Language first."
          },
          {
              "id": "span-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "SPAN3991"
              ],
              "note": ""
          }
      ]
  },

  "sustdev-cc": {
      "id": "sustdev-cc",
      "name": "Sustainable Development",
      "school": "CC",
      "degree": "BA",
      "description": "Interdisciplinary science and policy of sustainability, run with the Climate School.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "core",
              "name": "Core Curriculum",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_AHUM",
                  "CORE_MHUM",
                  "CORE_WRITE",
                  "CORE_FRSCI",
                  "CORE_GLOB"
              ],
              "note": "All CC students complete the full Core Curriculum."
          },
          {
              "id": "sdev-foundation",
              "name": "Foundational Courses",
              "type": "required",
              "courses": [
                  "SDEV2300",
                  "EESC2330"
              ],
              "note": ""
          },
          {
              "id": "sdev-natsci",
              "name": "Natural Science",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CHEM1403",
                  "EESC2100",
                  "PHYS1401",
                  "EEEB2001"
              ],
              "note": "A natural-science sequence."
          },
          {
              "id": "sdev-socsci",
              "name": "Social Science",
              "type": "required",
              "choose": 2,
              "courses": [
                  "ECON1105",
                  "ANTH1001",
                  "SOCI1010",
                  "POLS1101"
              ],
              "note": ""
          },
          {
              "id": "sdev-quant",
              "name": "Quantitative Foundations",
              "type": "required",
              "choose": 1,
              "courses": [
                  "STAT1201",
                  "MATH2010"
              ],
              "note": ""
          },
          {
              "id": "sdev-electives",
              "name": "Analysis, Skills & Electives",
              "type": "elective",
              "elective_count": 6,
              "courses": [
                  "SDEV2000",
                  "SDEV2050",
                  "SDEV2100",
                  "SDEV2320",
                  "SDEV3310",
                  "SDEV3355",
                  "SDEV3360",
                  "SDEV3366",
                  "SDEV3390",
                  "SDEV3410",
                  "SDEV4250"
              ],
              "note": "Two analysis-and-solutions, two skills/actions, and two elective courses; a practicum/internship also required alongside the capstone workshop."
          },
          {
              "id": "sdev-capstone",
              "name": "Practicum & Capstone",
              "type": "required",
              "courses": [
                  "SDEV3280"
              ],
              "note": ""
          }
      ]
  },

  "viar-cc": {
    id: "viar-cc", name: "Visual Arts", school: "CC", degree: "BA",
    description: "Studio practice across media, culminating in a senior thesis exhibition.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "viar-foundation", name: "Foundation Drawing", type: "required", choose: 1,
        courses: ["VIAR1000","VIAR1004"], note: "" },
      { id: "viar-studios", name: "Studio Courses", type: "required", choose: 6,
        courses: ["VIAR2001","VIAR2021","VIAR2100","VIAR2200","VIAR2300","VIAR2420","VIAR3010","VIAR3101","VIAR3201","VIAR3301","VIAR3500"],
        note: "Six further studios across different media (II-level studios require the corresponding I: Painting II needs Painting I, Ceramics II needs Ceramics I, Sculpture II needs Sculpture I)." },
      { id: "viar-colloquium", name: "Contemporary Art Practice", type: "required",
        courses: ["VIAR3330"], note: "Junior-year colloquium." },
      { id: "viar-arthistory", name: "Art History", type: "required", choose: 1,
        courses: ["AHIS2002","AHIS3100"],
        note: "A 20th-century / contemporary art history course." },
      { id: "viar-senior", name: "Senior Thesis", type: "required",
        courses: ["VIAR3900","VIAR3901"],
        note: "Two-semester thesis with exhibition." }
    ]
  },

  "wgs-cc": {
    id: "wgs-cc", name: "Women's and Gender Studies", school: "CC", degree: "BA",
    description: "Interdisciplinary study of gender and sexuality, through the Institute for the Study of Women, Gender, and Sexuality.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "wmst-intro", name: "Introduction", type: "required", choose: 1,
        courses: ["WMST1001","WMST3125"],
        note: "Intro to Women & Gender Studies or Intro to Sexuality Studies." },
      { id: "wmst-theory", name: "Required Core", type: "required",
        courses: ["WMST3311","WMST3514","WMST3915"],
        note: "Feminist Theory expects the intro sequence first." },
      { id: "wmst-electives", name: "Electives", type: "elective", elective_count: 6,
        courses: ["WMST3200","WMST3600","WMST4210","CSER3942","AFAS4080","CPLS4162"],
        note: "Six approved courses on women, gender, and/or sexuality, chosen with the DUS." },
      { id: "wmst-senior", name: "Senior Seminar", type: "required",
        courses: ["WMST3521"], note: "Capstone research project (CC/GS senior majors)." },
      { id: "wmst-senior2", name: "Senior Seminar II", type: "elective", elective_count: 1,
        courses: ["WMST3522"], note: "Optional second capstone term." }
    ]
  },

  "gapp-cc": {
    id: "gapp-cc", name: "Global Affairs and Public Policy", school: "CC", degree: "BA",
    description: "Policy analysis and global affairs, run jointly with SIPA; culminates in a policy practicum.",
    min_credits: 124,
    requirement_groups: [
      { id: "core", name: "Core Curriculum", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_AHUM","CORE_MHUM","CORE_WRITE","CORE_FRSCI","CORE_GLOB"],
        note: "All CC students complete the full Core Curriculum." },
      { id: "gapp-econ", name: "Economics", type: "required",
        courses: ["ECON1105"], note: "" },
      { id: "gapp-policycore", name: "Policy Core", type: "required",
        courses: ["GAPP2100","GAPP2150"], note: "" },
      { id: "gapp-quant", name: "Quantitative Methods", type: "required", choose: 1,
        courses: ["GAPP2200","GAPP2250"], note: "" },
      { id: "gapp-electives", name: "Electives", type: "elective", elective_count: 5,
        courses: ["POLS2210","POLS3623","ECON4530","SDEV3355","SDEV2100","MDES3042","MDES3048"],
        note: "15 credits of approved electives across geopolitics, economic policy, and regional studies." },
      { id: "gapp-practicum", name: "Senior Policy Practicum", type: "required",
        courses: ["GAPP3998","GAPP3999"],
        note: "Preparatory seminar then the two-semester capstone practicum." }
    ]
  },

  "compeng-seas": {
    id: "compeng-seas", name: "Computer Engineering", school: "SEAS", degree: "BS",
    description: "Digital hardware and software systems, run jointly by the CS and EE departments.",
    min_credits: 128,
    requirement_groups: [
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010"],
        note: "Calculus through multivariable plus applied math/linear algebra." },
      { id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"], note: "" },
      { id: "cs-core", name: "CS Core", type: "required",
        courses: ["COMS1004","COMS3134","COMS3157","COMS3203","COMS3261"], note: "" },
      { id: "ee-core", name: "EE Core", type: "required",
        courses: ["ELEN1201","ELEN3082","ELEN3106","ELEN3331"],
        note: "Circuits, signals & systems, and electronics." },
      { id: "digital-core", name: "Digital Systems", type: "required",
        courses: ["CSEE3827","COMS4118"], note: "" },
      { id: "digital-advanced", name: "Advanced Digital Systems", type: "required", choose: 3,
        courses: ["COMS4119","CSEE4823","COMS4824","CSEE4840"],
        note: "Three of: networks, logic design, architecture, embedded systems." },
      { id: "tech-electives", name: "Technical Electives", type: "elective", elective_count: 3,
        courses: ["COMS4111","COMS4115","COMS4156","ELEN4810"],
        note: "15 points of approved technical electives." },
      { id: "liberal", name: "Liberal Arts Electives", type: "elective", elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS nontechnical requirement." }
    ]
  },

  "matsci-seas": {
    id: "matsci-seas", name: "Materials Science and Engineering", school: "SEAS", degree: "BS",
    description: "The science and engineering of materials — from nanomaterials to energy and biomaterials.",
    min_credits: 128,
    requirement_groups: [
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH3027"],
        note: "Calculus sequence plus differential equations / applied math." },
      { id: "physics", name: "Physics", type: "required",
        courses: ["PHYS1401","PHYS1402"], note: "" },
      { id: "chem", name: "Chemistry", type: "required",
        courses: ["CHEM1403","CHEM1404"], note: "" },
      { id: "writing", name: "Writing", type: "required",
        courses: ["ENGL1010"], note: "" },
      { id: "msae-core", name: "Materials Core", type: "required",
        courses: ["MSAE3010","MSAE3012","MSAE3100","MSAE3201"], note: "" },
      { id: "msae-advanced", name: "Advanced Materials", type: "required", choose: 2,
        courses: ["MSAE4215","MSAE4206","MSAE4102"], note: "" },
      { id: "msae-design", name: "Design Project", type: "required",
        courses: ["MSAE3156"], note: "" },
      { id: "liberal", name: "Liberal Arts Electives", type: "elective", elective_count: 6,
        courses: ["ECON1105","POLS1101","PSYC1001","HIST1000","ENGL2000","PHIL1401","SOCI1010","ANTH1001","AHIS1001","FILM1001"],
        note: "SEAS nontechnical requirement." }
    ]
  },


  // ── GS & Barnard variants — HAND-MAINTAINED (verified against each
  //    school's own bulletin/catalog; do NOT regenerate from CC majors) ──
  "afam-gs": {
      "id": "afam-gs",
      "name": "African American and African Diaspora Studies",
      "school": "GS",
      "degree": "BA",
      "description": "Interdisciplinary study of the history, culture, and politics of Africa and the African diaspora.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "afas-gateway",
              "name": "Gateway",
              "type": "required",
              "courses": [
                  "AFAS1001",
                  "AFAS1002"
              ],
              "note": "Both gateway courses, ideally by end of sophomore year."
          },
          {
              "id": "afas-electives",
              "name": "Electives & Areas of Study",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "AFAS1003",
                  "AFAS3001",
                  "AFAS3030",
                  "AFAS3930",
                  "AFAS3936",
                  "AFAS4031",
                  "AFAS4035",
                  "AFAS4037",
                  "AFAS4080",
                  "ENGL4619",
                  "HIST3200"
              ],
              "note": "Four courses across at least two departments, per your approved plan of study. GU4000-level courses expect the gateway sequence first."
          },
          {
              "id": "afas-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "AFAS3940"
              ],
              "note": "Capstone thesis seminar."
          }
      ]
  },

  "amst-gs": {
      "id": "amst-gs",
      "name": "American Studies",
      "school": "GS",
      "degree": "BA",
      "description": "Interdisciplinary study of American culture, politics, and society across departments.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "amst-intro",
              "name": "Core Course",
              "type": "required",
              "courses": [
                  "AMST1010"
              ],
              "note": ""
          },
          {
              "id": "amst-seminars",
              "name": "American Studies Seminars",
              "type": "required",
              "choose": 2,
              "courses": [
                  "AMST3930",
                  "AMST3933",
                  "AMST3937",
                  "AMST3943"
              ],
              "note": "Two 3000-level AMST seminars (Intro to American Studies first)."
          },
          {
              "id": "amst-crossdept",
              "name": "Courses from Other Departments",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "HIST3200",
                  "ENGL3200",
                  "POLS2220",
                  "SOCI3213",
                  "AFAS1001",
                  "FILM2001"
              ],
              "note": "Four America-focused courses, incl. one in pre-1865 US history and one in CSER/AAADS."
          },
          {
              "id": "amst-senior",
              "name": "Senior Research Project",
              "type": "required",
              "courses": [
                  "AMST3998"
              ],
              "note": "Senior thesis (or approved alternative)."
          }
      ]
  },

  "astro-gs": {
      "id": "astro-gs",
      "name": "Astronomy",
      "school": "GS",
      "degree": "BA",
      "description": "The physics of stars, galaxies, and the universe, built on a physics and calculus foundation.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "astro-math",
              "name": "Mathematics",
              "type": "required",
              "courses": [
                  "MATH1101",
                  "MATH1102",
                  "MATH1201",
                  "MATH1202"
              ],
              "note": "Calculus sequence through Calculus IV."
          },
          {
              "id": "astro-phys",
              "name": "Physics",
              "type": "required",
              "courses": [
                  "PHYS1401",
                  "PHYS1402",
                  "PHYS1403"
              ],
              "note": "Three-semester introductory physics sequence (or honors equivalent)."
          },
          {
              "id": "astro-physupper",
              "name": "Advanced Physics",
              "type": "required",
              "choose": 2,
              "courses": [
                  "PHYS2801",
                  "PHYS3003",
                  "PHYS4003",
                  "PHYS4018"
              ],
              "note": "Two physics courses at the 3000 level or above."
          },
          {
              "id": "astro-core",
              "name": "Astronomy Core",
              "type": "required",
              "courses": [
                  "ASTR2001",
                  "ASTR2002"
              ],
              "note": "Introduction to Astrophysics I–II."
          },
          {
              "id": "astro-electives",
              "name": "Astronomy Electives",
              "type": "elective",
              "elective_count": 3,
              "courses": [
                  "ASTR3102",
                  "ASTR3273",
                  "ASTR3646",
                  "ASTR4260"
              ],
              "note": "Three astronomy courses at the 3000 level or above (each requires the calculus-based physics sequence)."
          },
          {
              "id": "astro-intro",
              "name": "Intro Astronomy (astronomy-track option)",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "ASTR1403",
                  "ASTR1404",
                  "ASTR1453"
              ],
              "note": "The non-astrophysics Astronomy track may substitute two 1000-level surveys for Intro Astrophysics — pick one here as enrichment."
          },
          {
              "id": "astro-senior",
              "name": "Senior Thesis",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "ASTR3997",
                  "ASTR3998"
              ],
              "note": "Optional senior thesis (two terms available), recommended for graduate school."
          }
      ]
  },

  "classics-gs": {
      "id": "classics-gs",
      "name": "Classics",
      "school": "GS",
      "degree": "BA",
      "description": "Greek and Latin language, literature, and the civilizations of the ancient Mediterranean.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "clas-primary",
              "name": "Primary Language (Latin)",
              "type": "required",
              "courses": [
                  "LATN1101",
                  "LATN1102",
                  "LATN2101",
                  "LATN2102"
              ],
              "note": "Primary ancient language through the intermediate level (Greek track also available)."
          },
          {
              "id": "clas-secondary",
              "name": "Secondary Language (two courses)",
              "type": "required",
              "courses": [
                  "GREK2101",
                  "GREK2102"
              ],
              "note": "Two courses at or above the intermediate level in the second ancient language."
          },
          {
              "id": "clas-advanced",
              "name": "Advanced Language",
              "type": "required",
              "choose": 2,
              "courses": [
                  "LATN3012",
                  "GREK3309"
              ],
              "note": "Two advanced courses in the primary language (Latin/Greek options shown)."
          },
          {
              "id": "clas-civ",
              "name": "Civilization Courses",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CLCV1001",
                  "CLCV2441",
                  "CLCV3008",
                  "CLCV3009",
                  "CLCV3059",
                  "CLCV3069",
                  "CLCV3070",
                  "CLCV3101",
                  "CLCV3111",
                  "CLCV3220"
              ],
              "note": "Breadth courses on the ancient Mediterranean, in translation."
          },
          {
              "id": "clas-seminar",
              "name": "Major Seminar",
              "type": "required",
              "courses": [
                  "CLAS3996"
              ],
              "note": ""
          },
          {
              "id": "clas-thesis",
              "name": "Senior Thesis",
              "type": "required",
              "courses": [
                  "CLAS3998"
              ],
              "note": ""
          }
      ]
  },

  "religion-gs": {
      "id": "religion-gs",
      "name": "Religion",
      "school": "GS",
      "degree": "BA",
      "description": "The study of religious traditions, texts, and theory across cultures.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "reli-gateway",
              "name": "Gateway Course",
              "type": "required",
              "choose": 1,
              "courses": [
                  "RELI1612",
                  "RELI1120"
              ],
              "note": "1000-level introduction to religion as an analytical category."
          },
          {
              "id": "reli-traditions",
              "name": "Introductory Traditions",
              "type": "required",
              "choose": 2,
              "courses": [
                  "RELI2305",
                  "RELI2405",
                  "RELI2779",
                  "RELI2312"
              ],
              "note": "Two 2000-level surveys of different religious traditions."
          },
          {
              "id": "reli-theory",
              "name": "Theory",
              "type": "required",
              "courses": [
                  "RELI3199"
              ],
              "note": "Required theory course, offered in fall."
          },
          {
              "id": "reli-intermediate",
              "name": "Intermediate Courses (two)",
              "type": "required",
              "choose": 2,
              "courses": [
                  "RELI3314",
                  "RELI3007"
              ],
              "note": "Focused 3000-level topical study."
          },
          {
              "id": "reli-seminar",
              "name": "Advanced Seminars (two)",
              "type": "required",
              "choose": 2,
              "courses": [
                  "RELI4217",
                  "RELI4216",
                  "RELI4223",
                  "RELI4376",
                  "RELI4616"
              ],
              "note": "4000-level seminar; expects prior Religion coursework (Theory first)."
          },
          {
              "id": "reli-electives",
              "name": "Additional Course",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "PHIL1401",
                  "ANTH1001",
                  "HIST2701"
              ],
              "note": "One additional course in Religion or an approved cognate department."
          }
      ]
  },

  "french-gs": {
      "id": "french-gs",
      "name": "French and Francophone Studies",
      "school": "GS",
      "degree": "BA",
      "description": "French language, literature, and the cultures of the francophone world.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "fren-language",
              "name": "Language Sequence",
              "type": "required",
              "courses": [
                  "FREN1101",
                  "FREN1102",
                  "FREN2101",
                  "FREN2102"
              ],
              "note": "Four-term sequence; placement exams may exempt some courses."
          },
          {
              "id": "fren-core",
              "name": "French Core",
              "type": "required",
              "courses": [
                  "FREN3405",
                  "FREN3409",
                  "FREN3410"
              ],
              "note": "Read/Think/Write plus the two intro-to-studies courses."
          },
          {
              "id": "fren-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 6,
              "courses": [
                  "FREN3242",
                  "FREN3503",
                  "FREN3515",
                  "FREN3517",
                  "FREN3600",
                  "FREN3666",
                  "FREN3714",
                  "FREN3726",
                  "FREN3766"
              ],
              "note": "Six upper-level courses (18 points); include at least one pre-1800 course; max two 'French Through X'."
          },
          {
              "id": "fren-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "FREN3995"
              ],
              "note": ""
          },
          {
              "id": "fren-tutorial",
              "name": "Senior Tutorial (Honors)",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "FREN3996"
              ],
              "note": "Optional honors tutorial after the senior seminar."
          }
      ]
  },

  "italian-gs": {
      "id": "italian-gs",
      "name": "Italian",
      "school": "GS",
      "degree": "BA",
      "description": "Italian language, literature, and cultural studies from Dante to the present.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "ital-language",
              "name": "Language Sequence",
              "type": "required",
              "courses": [
                  "ITAL1101",
                  "ITAL1102",
                  "ITAL2101",
                  "ITAL2102"
              ],
              "note": "Through intermediate level; placement may exempt some courses."
          },
          {
              "id": "ital-advanced",
              "name": "Advanced Italian",
              "type": "required",
              "courses": [
                  "ITAL3335"
              ],
              "note": ""
          },
          {
              "id": "ital-content",
              "name": "Language Through Content",
              "type": "required",
              "choose": 1,
              "courses": [
                  "ITAL3337",
                  "ITAL3339",
                  "ITAL3341",
                  "ITAL3342"
              ],
              "note": "One content course: cinema, telecollaboration, art, or business Italian (Italian Through Cinema requires Advanced Italian I)."
          },
          {
              "id": "ital-lit",
              "name": "Literature Sequence",
              "type": "required",
              "courses": [
                  "ITAL3333",
                  "ITAL3334"
              ],
              "note": "Intro to Italian Literature I–II (or the Cultural Studies sequence)."
          },
          {
              "id": "ital-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "ITAL4091",
                  "ITAL4502",
                  "ITAL4499",
                  "ITAL3645",
                  "ITAL3661",
                  "ITAL3865"
              ],
              "note": "Six electives in the full major, at least two from the Italian Department (five modeled here)."
          },
          {
              "id": "ital-senior",
              "name": "Senior Thesis",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "ITAL3993"
              ],
              "note": "Optional senior thesis/tutorial."
          }
      ]
  },

  "german-gs": {
      "id": "german-gs",
      "name": "German Literature and Cultural History",
      "school": "GS",
      "degree": "BA",
      "description": "German language, literature, and intellectual history.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "germ-language",
              "name": "Language Sequence",
              "type": "required",
              "courses": [
                  "GERM1101",
                  "GERM1102",
                  "GERM2101",
                  "GERM2102"
              ],
              "note": "Elementary and intermediate German."
          },
          {
              "id": "germ-advanced",
              "name": "Advanced German",
              "type": "required",
              "choose": 1,
              "courses": [
                  "GERM3001",
                  "GERM3002"
              ],
              "note": "Advanced German I or II (requires the intermediate sequence)."
          },
          {
              "id": "germ-methods",
              "name": "Literary Studies",
              "type": "required",
              "courses": [
                  "GERM3333"
              ],
              "note": ""
          },
          {
              "id": "germ-surveys",
              "name": "Surveys",
              "type": "required",
              "choose": 2,
              "courses": [
                  "GERM3442",
                  "GERM3443",
                  "GERM3444",
                  "GERM3445"
              ],
              "note": "Two surveys, at least one pre-20th century (all require Intro to German Literary Studies)."
          },
          {
              "id": "germ-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "GERM4170",
                  "GERM4350",
                  "GERM4448",
                  "GERM3991"
              ],
              "note": "3000/4000-level German courses chosen with the DUS; include one course in German intellectual history."
          }
      ]
  },

  "russian-gs": {
      "id": "russian-gs",
      "name": "Russian Language and Culture",
      "school": "GS",
      "degree": "BA",
      "description": "Russian language through the advanced level with Russian literature and culture.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "russ-language",
              "name": "Language Sequence",
              "type": "required",
              "courses": [
                  "RUSS1101",
                  "RUSS1102",
                  "RUSS2101",
                  "RUSS2102",
                  "RUSS3101",
                  "RUSS3102",
                  "RUSS4342",
                  "RUSS4343"
              ],
              "note": "Eight semesters: first- through fourth-year Russian."
          },
          {
              "id": "russ-surveys",
              "name": "Literature Surveys (two)",
              "type": "required",
              "choose": 2,
              "courses": [
                  "RUSS3220",
                  "RUSS3221"
              ],
              "note": "Two surveys, including at least one in Russian literature."
          },
          {
              "id": "russ-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "RUSS4039",
                  "RUSS4910",
                  "RUSS4127",
                  "CLRS3309",
                  "CLRS3314",
                  "CLRS3316",
                  "CLRS4011",
                  "CLRS4022",
                  "CLRS4036",
                  "CLRS4038"
              ],
              "note": "Five courses in Russian culture, history, literature, film, or music; at least one taught in Russian (GU4011/4036/4038 expect a literature survey first)."
          }
      ]
  },

  "eastasian-gs": {
      "id": "eastasian-gs",
      "name": "East Asian Studies",
      "school": "GS",
      "degree": "BA",
      "description": "The languages, histories, and cultures of China, Japan, Korea, Tibet, and Vietnam.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "eaas-language",
              "name": "Language Proficiency",
              "type": "required",
              "courses": [
                  "CHNS3003",
                  "CHNS3004"
              ],
              "note": "Third-year proficiency in Chinese, Japanese, Korean, Tibetan, or Vietnamese."
          },
          {
              "id": "eaas-colloquium",
              "name": "Colloquium on Major Texts",
              "type": "required",
              "courses": [
                  "AHUM1400"
              ],
              "note": "Required colloquium (AHUM UN1400)."
          },
          {
              "id": "eaas-surveys",
              "name": "Civilization Surveys",
              "type": "required",
              "choose": 2,
              "courses": [
                  "ASCE1359",
                  "ASCE1361",
                  "ASCE1363",
                  "ASCE1365",
                  "ASCE1367"
              ],
              "note": "Two of the five introductory civilization surveys (China, Japan, Korea, Tibet, Vietnam)."
          },
          {
              "id": "eaas-methods",
              "name": "Approaches to East Asian Studies",
              "type": "required",
              "courses": [
                  "EAAS3990"
              ],
              "note": "Required methodology seminar, fall of junior year."
          },
          {
              "id": "eaas-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "EAAS3322",
                  "EAAS3913",
                  "HSEA3862",
                  "EAAS2342",
                  "EAAS3215",
                  "EAAS3217",
                  "EAAS3263",
                  "EAAS3310",
                  "EAAS3313"
              ],
              "note": "Four East Asian studies courses at the 3000 level or above (Social Problems in Contemporary China expects the China survey first)."
          },
          {
              "id": "eaas-senior",
              "name": "Senior Thesis",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "EAAS3901"
              ],
              "note": "Optional senior thesis with research workshop."
          }
      ]
  },

  "mesaas-gs": {
      "id": "mesaas-gs",
      "name": "Middle Eastern, South Asian, and African Studies",
      "school": "GS",
      "degree": "BA",
      "description": "Interdisciplinary study of the Middle East, South Asia, and Africa with language training.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "mdes-language",
              "name": "Language Requirement",
              "type": "required",
              "courses": [
                  "ARAB1101",
                  "ARAB1102",
                  "ARAB2101",
                  "ARAB2102"
              ],
              "note": "Two years of one regional language (Arabic shown; Persian, Hebrew, Hindi/Urdu, Swahili, etc. also qualify)."
          },
          {
              "id": "mdes-intro",
              "name": "Introductory Culture Course",
              "type": "required",
              "choose": 1,
              "courses": [
                  "MDES1003",
                  "ASCM2003"
              ],
              "note": "One approved intro culture course (Premodern Islamic Worlds, Intro to Islamic Civilization, etc.)."
          },
          {
              "id": "mdes-colloquium",
              "name": "Regional Texts Colloquium",
              "type": "required",
              "courses": [
                  "AHUM1399"
              ],
              "note": "Required colloquium (AHUM UN1399 or AFCV UN1020)."
          },
          {
              "id": "mdes-theory",
              "name": "Theory and Culture",
              "type": "required",
              "courses": [
                  "MDES3000"
              ],
              "note": "Core seminar, typically junior/senior year."
          },
          {
              "id": "mdes-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "MDES2641",
                  "MDES3042",
                  "MDES4122",
                  "MDES4765",
                  "MDES1001",
                  "MDES1030",
                  "MDES2004",
                  "MDES2012",
                  "MDES2042",
                  "MDES2650",
                  "MDES3048",
                  "MDES3121"
              ],
              "note": "Fifteen points (~5 courses) chosen with director approval; up to six points from other departments."
          }
      ]
  },

  "arch-gs": {
      "id": "arch-gs",
      "name": "Architecture",
      "school": "GS",
      "degree": "BA",
      "description": "Design studios with architectural history and theory — a liberal-arts path into architecture.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "arch-studios",
              "name": "Design Studios",
              "type": "required",
              "courses": [
                  "ARCH2101",
                  "ARCH2103",
                  "ARCH3201",
                  "ARCH3202"
              ],
              "note": "Four sequential studios, one per semester."
          },
          {
              "id": "arch-history",
              "name": "History Requirement",
              "type": "required",
              "courses": [
                  "ARCH3117"
              ],
              "note": "Modern Architecture in the World."
          },
          {
              "id": "arch-lectures",
              "name": "Lectures & Seminars",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "ARCH1010",
                  "ARCH1030",
                  "ARCH2530",
                  "ARCH3120",
                  "ARCH3312",
                  "ARCH4260",
                  "ARCH4305",
                  "AHIS2002",
                  "AHIS3100"
              ],
              "note": "Four courses: one history, one society/environment/global, one design/media/technology, one elective."
          },
          {
              "id": "arch-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "ARCH3901"
              ],
              "note": "Capstone: portfolio plus research writing sample."
          }
      ]
  },

  "complit-gs": {
      "id": "complit-gs",
      "name": "Comparative Literature and Society",
      "school": "GS",
      "degree": "BA",
      "description": "Literature across languages and societies, through the Institute for Comparative Literature and Society.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "cpls-language",
              "name": "Language Study",
              "type": "required",
              "courses": [
                  "FREN1101",
                  "FREN1102",
                  "FREN2101",
                  "FREN2102"
              ],
              "note": "Four semesters of foreign language (any language; French shown) plus one advanced course."
          },
          {
              "id": "cpls-intro",
              "name": "Introduction",
              "type": "required",
              "courses": [
                  "CPLS3900"
              ],
              "note": "Taken spring of sophomore year."
          },
          {
              "id": "cpls-designated",
              "name": "CPLS-Designated Courses",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CPLS3800",
                  "CPLS4227",
                  "CPLS4685",
                  "CPLS3931",
                  "CPLS4200",
                  "CPLS4162",
                  "CPLS4325",
                  "CPLS4545",
                  "CPLS4876"
              ],
              "note": ""
          },
          {
              "id": "cpls-electives",
              "name": "Literature & Cognate Electives",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "RUSS3220",
                  "MDES4122",
                  "ENGL3500",
                  "GERM4170"
              ],
              "note": "Courses on national/regional literatures and cognate disciplines."
          },
          {
              "id": "cpls-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "CPLS3991"
              ],
              "note": ""
          },
          {
              "id": "cpls-thesis",
              "name": "Senior Thesis",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "CPLS3995"
              ],
              "note": "Optional senior thesis."
          }
      ]
  },

  "crwr-gs": {
      "id": "crwr-gs",
      "name": "Creative Writing",
      "school": "GS",
      "degree": "BA",
      "description": "Workshops in fiction, poetry, and nonfiction with literature seminars taught from a writer's perspective.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "crwr-beginning",
              "name": "Beginning Workshops",
              "type": "required",
              "choose": 2,
              "courses": [
                  "WRIT1100",
                  "WRIT1200",
                  "WRIT1300"
              ],
              "note": "Beginning workshops (required before open workshops); one per semester."
          },
          {
              "id": "crwr-workshops",
              "name": "Open Workshops",
              "type": "required",
              "choose": 2,
              "courses": [
                  "WRIT3100",
                  "WRIT3200",
                  "WRIT3300"
              ],
              "note": "Open workshops in your genre(s); each requires a beginning workshop first."
          },
          {
              "id": "crwr-senior-workshop",
              "name": "Senior Workshop",
              "type": "required",
              "courses": [
                  "WRIT3101"
              ],
              "note": "By application with writing sample."
          },
          {
              "id": "crwr-seminars",
              "name": "Craft Seminars",
              "type": "required",
              "choose": 4,
              "courses": [
                  "WRIT3137",
                  "WRIT3321",
                  "WRIT3031",
                  "WRIT3048",
                  "WRIT3131",
                  "WRIT3210",
                  "WRIT3217"
              ],
              "note": "Four seminars studying literature from a writer's perspective (max two per semester)."
          },
          {
              "id": "crwr-related",
              "name": "Related Courses",
              "type": "elective",
              "elective_count": 3,
              "courses": [
                  "ENGL3400",
                  "ENGL3200",
                  "ENGL3500",
                  "PHIL1401"
              ],
              "note": "Three related courses approved by the Director of Undergraduate Studies."
          }
      ]
  },

  "earthsci-gs": {
      "id": "earthsci-gs",
      "name": "Earth Science",
      "school": "GS",
      "degree": "BA",
      "description": "The solid earth, climate, and life systems, with Lamont-Doherty research opportunities.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "eesc-foundation",
              "name": "Foundation",
              "type": "required",
              "courses": [
                  "EESC2200"
              ],
              "note": "The Solid Earth is required."
          },
          {
              "id": "eesc-foundation2",
              "name": "Second Foundation Course",
              "type": "required",
              "choose": 1,
              "courses": [
                  "EESC2100",
                  "EESC2300"
              ],
              "note": "Climate System or Life System."
          },
          {
              "id": "eesc-support",
              "name": "Supporting Math & Science",
              "type": "required",
              "courses": [
                  "MATH1101",
                  "CHEM1403",
                  "PHYS1401"
              ],
              "note": "One calculus semester plus a chemistry/physics sequence."
          },
          {
              "id": "eesc-breadth",
              "name": "Breadth Courses",
              "type": "required",
              "choose": 2,
              "courses": [
                  "EESC1001",
                  "EESC1030",
                  "EESC1201",
                  "EESC1600"
              ],
              "note": "Science electives not requiring an Earth-science background (minimum 6 points)."
          },
          {
              "id": "eesc-depth",
              "name": "Depth Courses",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "EESC3101",
                  "EESC4008",
                  "EESC4925",
                  "EESC4949"
              ],
              "note": "Four upper-level courses (12+ points); must include Geochemistry for a Habitable Planet (or Solid Earth Dynamics)."
          },
          {
              "id": "eesc-capstone",
              "name": "Capstone",
              "type": "required",
              "courses": [
                  "EESC3901"
              ],
              "note": "Senior seminar (or summer geology field course)."
          }
      ]
  },

  "eeeb-gs": {
      "id": "eeeb-gs",
      "name": "Environmental Biology",
      "school": "GS",
      "degree": "BA",
      "description": "Life on Earth from organisms to global processes — ecology, evolution, and conservation.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "eeeb-bio",
              "name": "Biological Foundations",
              "type": "required",
              "courses": [
                  "EEEB2001",
                  "EEEB2002"
              ],
              "note": "Environmental Biology I–II (II requires I)."
          },
          {
              "id": "eeeb-physsci",
              "name": "Physical Sciences",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CHEM1403",
                  "PHYS1401",
                  "EESC2100"
              ],
              "note": ""
          },
          {
              "id": "eeeb-quant",
              "name": "Quantitative Foundations",
              "type": "required",
              "courses": [
                  "MATH1101",
                  "EEEB3005",
                  "COMS1004"
              ],
              "note": "Three quantitative courses: calculus, statistics, and computing/GIS."
          },
          {
              "id": "eeeb-advanced",
              "name": "Advanced Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "EEEB3087",
                  "EEEB4100",
                  "EEEB4201",
                  "EEEB1010",
                  "EEEB3215",
                  "EEEB3320",
                  "EEEB3910"
              ],
              "note": "Five advanced electives, at least one with a lab (The Neandertals requires Human Origins first)."
          },
          {
              "id": "eeeb-senior",
              "name": "Senior Thesis",
              "type": "required",
              "courses": [
                  "EEEB3991"
              ],
              "note": "Thesis seminar with summer research internship."
          }
      ]
  },

  "cogsci-gs": {
      "id": "cogsci-gs",
      "name": "Cognitive Science",
      "school": "GS",
      "degree": "BA",
      "description": "Mind and cognition across psychology, neuroscience, philosophy, linguistics, and computation.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "cogs-intro",
              "name": "Foundational Course",
              "type": "required",
              "courses": [
                  "COGS1001"
              ],
              "note": ""
          },
          {
              "id": "cogs-psych",
              "name": "Psychology (Cognition)",
              "type": "required",
              "choose": 1,
              "courses": [
                  "PSYC3100",
                  "PSYC2210"
              ],
              "note": "One cognition-focused psychology course."
          },
          {
              "id": "cogs-phil",
              "name": "Philosophy",
              "type": "required",
              "choose": 1,
              "courses": [
                  "PHIL3300",
                  "PHIL2655",
                  "PHIL3252"
              ],
              "note": "One philosophy-of-mind/cognitive-science course."
          },
          {
              "id": "cogs-ling",
              "name": "Linguistics",
              "type": "required",
              "courses": [
                  "LING1101"
              ],
              "note": ""
          },
          {
              "id": "cogs-neuro",
              "name": "Neuroscience",
              "type": "required",
              "choose": 1,
              "courses": [
                  "NSBV2000",
                  "PSYC3500",
                  "PSYC2430",
                  "NSBV3381"
              ],
              "note": ""
          },
          {
              "id": "cogs-computation",
              "name": "Mathematical & Computational Methods",
              "type": "required",
              "courses": [
                  "COMS1004",
                  "STAT1201"
              ],
              "note": "Two methods courses required."
          },
          {
              "id": "cogs-specialization",
              "name": "Area of Specialization",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "PSYC3300",
                  "NSBV3503",
                  "PHIL3600",
                  "LING3101",
                  "COGS3952",
                  "PSYC2430",
                  "PHIL3252"
              ],
              "note": "Four related electives in your chosen specialization (e.g. perception, decision science)."
          },
          {
              "id": "cogs-senior",
              "name": "Senior Capstone",
              "type": "required",
              "courses": [
                  "COGS3903"
              ],
              "note": "Year-long senior project (or two advanced courses with papers)."
          }
      ]
  },

  "cser-gs": {
      "id": "cser-gs",
      "name": "Ethnicity and Race Studies",
      "school": "GS",
      "degree": "BA",
      "description": "Comparative study of ethnicity and race, with specializations from Asian American to Indigenous studies.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "cser-intro",
              "name": "Introduction",
              "type": "required",
              "courses": [
                  "CSER1010"
              ],
              "note": ""
          },
          {
              "id": "cser-corechoice",
              "name": "Core Course",
              "type": "required",
              "choose": 1,
              "courses": [
                  "CSER3928",
                  "CSER3942"
              ],
              "note": "Colonization/Decolonization or Race and Racisms."
          },
          {
              "id": "cser-methods",
              "name": "Modes of Inquiry",
              "type": "required",
              "courses": [
                  "CSER3919"
              ],
              "note": ""
          },
          {
              "id": "cser-electives",
              "name": "Specialization Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "CSER3303",
                  "CSER3490",
                  "CSER3701",
                  "CSER3702",
                  "CSER3821",
                  "CSER3905",
                  "CSER3922",
                  "CSER3926",
                  "CSER3940",
                  "CSER3949",
                  "AFAS4035",
                  "WMST4210"
              ],
              "note": "Five electives in your specialization track; at least one writing-intensive seminar."
          },
          {
              "id": "cser-senior",
              "name": "Senior Project Seminar",
              "type": "required",
              "courses": [
                  "CSER3990"
              ],
              "note": ""
          }
      ]
  },

  "hispanic-gs": {
      "id": "hispanic-gs",
      "name": "Hispanic Studies",
      "school": "GS",
      "degree": "BA",
      "description": "Spanish language with the literatures and cultures of Iberia and Latin America.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "span-language",
              "name": "Language Foundation",
              "type": "required",
              "courses": [
                  "SPAN1101",
                  "SPAN1102",
                  "SPAN2101",
                  "SPAN2102"
              ],
              "note": "Through intermediate Spanish; placement may exempt courses."
          },
          {
              "id": "span-advanced",
              "name": "Advanced Language",
              "type": "required",
              "courses": [
                  "SPAN3300"
              ],
              "note": ""
          },
          {
              "id": "span-cultures",
              "name": "Hispanic Cultures",
              "type": "required",
              "courses": [
                  "SPAN3349",
                  "SPAN3350"
              ],
              "note": ""
          },
          {
              "id": "span-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "SPAN3315",
                  "SPAN3366",
                  "SPAN3731",
                  "SPAN4010",
                  "CPLS3800",
                  "FILM3100"
              ],
              "note": "Seven electives in the full major (five modeled), min three at 3000+ in the department; all SPAN electives require Advanced Language first."
          },
          {
              "id": "span-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "SPAN3991"
              ],
              "note": ""
          }
      ]
  },

  "sustdev-gs": {
      "id": "sustdev-gs",
      "name": "Sustainable Development",
      "school": "GS",
      "degree": "BA",
      "description": "Interdisciplinary science and policy of sustainability, run with the Climate School.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "sdev-foundation",
              "name": "Foundational Courses",
              "type": "required",
              "courses": [
                  "SDEV2300",
                  "EESC2330"
              ],
              "note": ""
          },
          {
              "id": "sdev-natsci",
              "name": "Natural Science",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CHEM1403",
                  "EESC2100",
                  "PHYS1401",
                  "EEEB2001"
              ],
              "note": "A natural-science sequence."
          },
          {
              "id": "sdev-socsci",
              "name": "Social Science",
              "type": "required",
              "choose": 2,
              "courses": [
                  "ECON1105",
                  "ANTH1001",
                  "SOCI1010",
                  "POLS1101"
              ],
              "note": ""
          },
          {
              "id": "sdev-quant",
              "name": "Quantitative Foundations",
              "type": "required",
              "choose": 1,
              "courses": [
                  "STAT1201",
                  "MATH2010"
              ],
              "note": ""
          },
          {
              "id": "sdev-electives",
              "name": "Analysis, Skills & Electives",
              "type": "elective",
              "elective_count": 6,
              "courses": [
                  "SDEV2000",
                  "SDEV2050",
                  "SDEV2100",
                  "SDEV2320",
                  "SDEV3310",
                  "SDEV3355",
                  "SDEV3360",
                  "SDEV3366",
                  "SDEV3390",
                  "SDEV3410",
                  "SDEV4250"
              ],
              "note": "Two analysis-and-solutions, two skills/actions, and two elective courses; a practicum/internship also required alongside the capstone workshop."
          },
          {
              "id": "sdev-capstone",
              "name": "Practicum & Capstone",
              "type": "required",
              "courses": [
                  "SDEV3280"
              ],
              "note": ""
          }
      ]
  },

  "urbanstud-gs": {
      "id": "urbanstud-gs",
      "name": "Urban Studies",
      "school": "GS",
      "degree": "BA",
      "description": "Cities, urban policy, and metropolitan life, through the Barnard Urban Studies program.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "urbs-intro",
              "name": "Introduction",
              "type": "required",
              "courses": [
                  "URBS1515"
              ],
              "note": ""
          },
          {
              "id": "urbs-breadth",
              "name": "Breadth (urban dimensions)",
              "type": "required",
              "choose": 3,
              "courses": [
                  "SOCI3200",
                  "ARCH1030",
                  "SDEV3410",
                  "ANTH3200",
                  "HIST3200"
              ],
              "note": "Urban-focused courses across social, spatial, historical, and ecological/cultural dimensions."
          },
          {
              "id": "urbs-methods",
              "name": "Research Methods",
              "type": "required",
              "choose": 1,
              "courses": [
                  "SDEV3390",
                  "ANTH3000",
                  "SOCI3000"
              ],
              "note": "A methods course (GIS, ethnography, or social research), sophomore or junior year."
          },
          {
              "id": "urbs-depth",
              "name": "Depth Cluster",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "URBS3100",
                  "SOCI3914",
                  "SOCI3235",
                  "ECON4100",
                  "SDEV2050"
              ],
              "note": "Student-proposed specialization cluster approved by the adviser."
          },
          {
              "id": "urbs-junior",
              "name": "Junior Colloquium",
              "type": "required",
              "courses": [
                  "URBS3545"
              ],
              "note": ""
          },
          {
              "id": "urbs-senior",
              "name": "Senior Seminar (year-long)",
              "type": "required",
              "courses": [
                  "URBS3992",
                  "URBS3993"
              ],
              "note": "Independent research project across both terms."
          }
      ]
  },

  "viar-gs": {
      "id": "viar-gs",
      "name": "Visual Arts",
      "school": "GS",
      "degree": "BA",
      "description": "Studio practice across media, culminating in a senior thesis exhibition.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "viar-foundation",
              "name": "Foundation Drawing",
              "type": "required",
              "choose": 1,
              "courses": [
                  "VIAR1000",
                  "VIAR1004"
              ],
              "note": ""
          },
          {
              "id": "viar-studios",
              "name": "Studio Courses",
              "type": "required",
              "choose": 6,
              "courses": [
                  "VIAR2001",
                  "VIAR2021",
                  "VIAR2100",
                  "VIAR2200",
                  "VIAR2300",
                  "VIAR2420",
                  "VIAR3010",
                  "VIAR3101",
                  "VIAR3201",
                  "VIAR3301",
                  "VIAR3500"
              ],
              "note": "Six further studios across different media (II-level studios require the corresponding I: Painting II needs Painting I, Ceramics II needs Ceramics I, Sculpture II needs Sculpture I)."
          },
          {
              "id": "viar-colloquium",
              "name": "Contemporary Art Practice",
              "type": "required",
              "courses": [
                  "VIAR3330"
              ],
              "note": "Junior-year colloquium."
          },
          {
              "id": "viar-arthistory",
              "name": "Art History",
              "type": "required",
              "choose": 1,
              "courses": [
                  "AHIS2002",
                  "AHIS3100"
              ],
              "note": "A 20th-century / contemporary art history course."
          },
          {
              "id": "viar-senior",
              "name": "Senior Thesis",
              "type": "required",
              "courses": [
                  "VIAR3900",
                  "VIAR3901"
              ],
              "note": "Two-semester thesis with exhibition."
          }
      ]
  },

  "wgs-gs": {
      "id": "wgs-gs",
      "name": "Women's and Gender Studies",
      "school": "GS",
      "degree": "BA",
      "description": "Interdisciplinary study of gender and sexuality, through the Institute for the Study of Women, Gender, and Sexuality.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "wmst-intro",
              "name": "Introduction",
              "type": "required",
              "choose": 1,
              "courses": [
                  "WMST1001",
                  "WMST3125"
              ],
              "note": "Intro to Women & Gender Studies or Intro to Sexuality Studies."
          },
          {
              "id": "wmst-theory",
              "name": "Required Core",
              "type": "required",
              "courses": [
                  "WMST3311",
                  "WMST3514",
                  "WMST3915"
              ],
              "note": "Feminist Theory expects the intro sequence first."
          },
          {
              "id": "wmst-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 6,
              "courses": [
                  "WMST3200",
                  "WMST3600",
                  "WMST4210",
                  "CSER3942",
                  "AFAS4080",
                  "CPLS4162"
              ],
              "note": "Six approved courses on women, gender, and/or sexuality, chosen with the DUS."
          },
          {
              "id": "wmst-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "WMST3521"
              ],
              "note": "Capstone research project (CC/GS senior majors)."
          },
          {
              "id": "wmst-senior2",
              "name": "Senior Seminar II",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "WMST3522"
              ],
              "note": "Optional second capstone term."
          }
      ]
  },

  "dance-gs": {
      "id": "dance-gs",
      "name": "Dance",
      "school": "GS",
      "degree": "BA",
      "description": "Dance technique, composition, and history, through the Barnard Department of Dance.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "dance-core",
              "name": "Dance Core",
              "type": "required",
              "courses": [
                  "DNCE1101",
                  "DNCE2001",
                  "DNCE3001",
                  "DNCE4001"
              ],
              "note": ""
          },
          {
              "id": "dance-electives",
              "name": "Related Electives",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "DNCE3200",
                  "THTR1101",
                  "ENGL2000"
              ],
              "note": "Choose 2 related electives."
          }
      ]
  },

  "theater-gs": {
      "id": "theater-gs",
      "name": "Drama and Theatre Arts",
      "school": "GS",
      "degree": "BA",
      "description": "Theatre history, performance, and production, through the Barnard Department of Theatre.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "thtr-core",
              "name": "Theatre Core",
              "type": "required",
              "courses": [
                  "THTR1101",
                  "THTR2001",
                  "THTR3001",
                  "THTR4001"
              ],
              "note": ""
          },
          {
              "id": "thtr-electives",
              "name": "Related Electives",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "THTR3200",
                  "DNCE1101",
                  "ENGL2000"
              ],
              "note": "Choose 2 related electives."
          }
      ]
  },

  "stats-gs": {
      "id": "stats-gs",
      "name": "Statistics",
      "school": "GS",
      "degree": "BA",
      "description": "Probability theory, statistical inference, and data analysis. High demand in tech, finance, and research.",
      "min_credits": 124,
      "requirement_groups": [
          {
              "id": "gs-core",
              "name": "GS Core Requirements",
              "type": "required",
              "courses": [
                  "CORE_LHUM1",
                  "CORE_LHUM2",
                  "CORE_CC1",
                  "CORE_CC2",
                  "CORE_WRITE"
              ],
              "note": "Modified Core for GS students."
          },
          {
              "id": "math",
              "name": "Mathematics",
              "type": "required",
              "courses": [
                  "MATH1101",
                  "MATH1102",
                  "MATH1201",
                  "MATH2010"
              ],
              "note": "Calculus I–III and linear algebra."
          },
          {
              "id": "stats-intro",
              "name": "Statistics Prerequisite",
              "type": "required",
              "courses": [
                  "STAT1201"
              ],
              "note": ""
          },
          {
              "id": "cs-prog",
              "name": "Programming",
              "type": "required",
              "choose": 1,
              "courses": [
                  "COMS1004",
                  "STAT4206"
              ],
              "note": "One programming course (Java or applied statistical computing)."
          },
          {
              "id": "stats-core",
              "name": "Core Statistics",
              "type": "required",
              "courses": [
                  "STAT4203",
                  "STAT4204",
                  "STAT4205",
                  "STAT4206",
                  "STAT4207"
              ],
              "note": "Probability, inference, regression, statistical computing, and stochastic processes."
          },
          {
              "id": "stats-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 3,
              "courses": [
                  "STAT4224",
                  "STAT4315",
                  "STAT3001",
                  "COMS4771",
                  "IEOR3600"
              ],
              "note": "Three advanced electives (may include quantitative courses in related departments)."
          }
      ]
  },

  "afam-barnard": {
      "id": "afam-barnard",
      "name": "Africana Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "Interdisciplinary study of the history, culture, and politics of Africa and the African diaspora.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "afrs-intro",
              "name": "Introductory Courses",
              "type": "required",
              "choose": 2,
              "courses": [
                  "AFRS2004",
                  "AFRS2005",
                  "AFRS2006"
              ],
              "note": "Two of the three introductory courses."
          },
          {
              "id": "afrs-language",
              "name": "Language Proficiency",
              "type": "required",
              "choose": 1,
              "courses": [
                  "SPAN2102",
                  "FREN2102",
                  "ARAB2102"
              ],
              "note": "Fourth-semester proficiency in a language of Africa or the diaspora."
          },
          {
              "id": "afrs-harlem",
              "name": "Harlem Course",
              "type": "required",
              "choose": 1,
              "courses": [
                  "AFAS3030",
                  "ENGL4619"
              ],
              "note": "One Harlem-focused course chosen with your adviser."
          },
          {
              "id": "afrs-colloquium",
              "name": "Africana Colloquium",
              "type": "required",
              "courses": [
                  "AFRS3110"
              ],
              "note": ""
          },
          {
              "id": "afrs-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "AFAS1003",
                  "AFAS3001",
                  "AFAS3930",
                  "AFAS3936",
                  "AFAS4031",
                  "AFAS4035",
                  "AFAS4037",
                  "AFAS4080",
                  "MDES4122"
              ],
              "note": "Five electives, including one on Africa and one on gender."
          },
          {
              "id": "afrs-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "AFRS3998"
              ],
              "note": "Culminates in the senior essay."
          }
      ]
  },

  "amst-barnard": {
      "id": "amst-barnard",
      "name": "American Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "Interdisciplinary study of American culture, politics, and society across departments.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "amst-intro",
              "name": "Gateway",
              "type": "required",
              "courses": [
                  "AMSTBC1001"
              ],
              "note": "Taken before sophomore year."
          },
          {
              "id": "amst-historical",
              "name": "Historical Foundations",
              "type": "required",
              "choose": 2,
              "courses": [
                  "HIST3200",
                  "HIST2310",
                  "ENGL3200",
                  "AFAS1001"
              ],
              "note": "Two pre-1950 Americas courses from approved departments."
          },
          {
              "id": "amst-methods",
              "name": "Methods Seminar",
              "type": "required",
              "courses": [
                  "AMSTBC3001"
              ],
              "note": ""
          },
          {
              "id": "amst-research",
              "name": "Research Seminars",
              "type": "required",
              "choose": 2,
              "courses": [
                  "AMST3930",
                  "AMST3933",
                  "AMST3937",
                  "AMST3943"
              ],
              "note": "Two themed research seminars."
          },
          {
              "id": "amst-electives",
              "name": "Interdisciplinary Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "SOCI3213",
                  "POLS2220",
                  "FILM2001",
                  "CSER3303",
                  "AFAS3030",
                  "WMST3600"
              ],
              "note": "Five approved electives chosen with your adviser."
          },
          {
              "id": "amst-senior",
              "name": "Senior Capstone",
              "type": "required",
              "courses": [
                  "AMSTBC3704"
              ],
              "note": "10,000-word senior research essay."
          }
      ]
  },

  "anthro-barnard": {
      "id": "anthro-barnard",
      "name": "Anthropology",
      "school": "Barnard",
      "degree": "BA",
      "description": "Cultural anthropology with opportunities in archaeological, biological, and linguistic subfields. Great preparation for global careers or graduate study.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "anth-intro",
              "name": "Introduction",
              "type": "required",
              "courses": [
                  "ANTH1002"
              ],
              "note": "The Interpretation of Culture."
          },
          {
              "id": "anth-intro2",
              "name": "Second Introductory Course",
              "type": "required",
              "choose": 1,
              "courses": [
                  "ANTH1001",
                  "EEEB1010"
              ],
              "note": ""
          },
          {
              "id": "anth-theory",
              "name": "Anthropological Theory",
              "type": "required",
              "courses": [
                  "ANTH3040"
              ],
              "note": ""
          },
          {
              "id": "anth-methods",
              "name": "Methods (recommended)",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "ANTHBC3868",
                  "ANTH3000"
              ],
              "note": "Ethnographic methods before senior year."
          },
          {
              "id": "anth-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "ANTH2200",
                  "ANTH3100",
                  "ANTH3200",
                  "ANTH4001",
                  "EEEB3215",
                  "MDES2650"
              ],
              "note": "Six electives in the full major; three must be 3000-level or higher."
          },
          {
              "id": "anth-senior",
              "name": "Senior Thesis Seminars",
              "type": "required",
              "courses": [
                  "ANTHBC3871",
                  "ANTHBC3872"
              ],
              "note": "Year-long thesis sequence with senior essay."
          }
      ]
  },

  "arch-barnard": {
      "id": "arch-barnard",
      "name": "Architecture",
      "school": "Barnard",
      "degree": "BA",
      "description": "Design studios with architectural history and theory — a liberal-arts path into architecture.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "arch-studios",
              "name": "Design Studios",
              "type": "required",
              "courses": [
                  "ARCH2101",
                  "ARCH2103",
                  "ARCH3201",
                  "ARCH3202"
              ],
              "note": "Four sequential studios, one per semester."
          },
          {
              "id": "arch-history",
              "name": "History Requirement",
              "type": "required",
              "courses": [
                  "ARCH3117"
              ],
              "note": "Modern Architecture in the World."
          },
          {
              "id": "arch-lectures",
              "name": "Lectures & Seminars",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "ARCH1010",
                  "ARCH1030",
                  "ARCH2530",
                  "ARCH3120",
                  "ARCH3312",
                  "ARCH4260",
                  "ARCH4305",
                  "AHIS2002",
                  "AHIS3100"
              ],
              "note": "Four courses: one history, one society/environment/global, one design/media/technology, one elective."
          },
          {
              "id": "arch-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "ARCH3901"
              ],
              "note": "Capstone: portfolio plus research writing sample."
          }
      ]
  },

  "arthist-barnard": {
      "id": "arthist-barnard",
      "name": "Art History",
      "school": "Barnard",
      "degree": "BA",
      "description": "A rigorous humanities major examining art across cultures and centuries. Access to world-class museums in NYC — the Met, MoMA, and the Guggenheim.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "ahis-intro",
              "name": "Introductory Surveys",
              "type": "required",
              "courses": [
                  "AHISBC1001",
                  "AHISBC1002"
              ],
              "note": ""
          },
          {
              "id": "ahis-methods",
              "name": "Methods & Theories",
              "type": "required",
              "courses": [
                  "AHISBC3970"
              ],
              "note": "Junior or senior year."
          },
          {
              "id": "ahis-seminars",
              "name": "Seminars",
              "type": "required",
              "choose": 2,
              "courses": [
                  "AHIS3001",
                  "AHIS3100",
                  "AHIS4001"
              ],
              "note": "Two art history seminars."
          },
          {
              "id": "ahis-electives",
              "name": "Electives (temporal & geographic breadth)",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "AHIS1001",
                  "AHIS2001",
                  "AHIS2002",
                  "AHIS3100",
                  "EAAS3263",
                  "ARCH3117"
              ],
              "note": "Seven electives in the full major, covering three of four historical periods and two world regions."
          },
          {
              "id": "ahis-senior",
              "name": "Senior Research Seminar",
              "type": "required",
              "courses": [
                  "AHISBC3959"
              ],
              "note": "Senior thesis."
          }
      ]
  },

  "classics-barnard": {
      "id": "classics-barnard",
      "name": "Classics and Ancient Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "Greek and Latin language, literature, and the civilizations of the ancient Mediterranean.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "clas-primary",
              "name": "Primary Language (Latin)",
              "type": "required",
              "courses": [
                  "LATN1101",
                  "LATN1102",
                  "LATN2101",
                  "LATN2102"
              ],
              "note": "Primary ancient language through the intermediate level (Greek track also available)."
          },
          {
              "id": "clas-secondary",
              "name": "Secondary Language (Greek)",
              "type": "required",
              "courses": [
                  "GREK2102"
              ],
              "note": "Second ancient language to at least the intermediate level."
          },
          {
              "id": "clas-advanced",
              "name": "Advanced Language",
              "type": "required",
              "choose": 1,
              "courses": [
                  "LATN3012",
                  "GREK3309"
              ],
              "note": "3000-level reading course in your primary language (requires the intermediate sequence)."
          },
          {
              "id": "clas-civ",
              "name": "Civilization Courses",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CLCV1001",
                  "CLCV2441",
                  "CLCV3008",
                  "CLCV3009",
                  "CLCV3059",
                  "CLCV3069",
                  "CLCV3070",
                  "CLCV3101",
                  "CLCV3111",
                  "CLCV3220"
              ],
              "note": "Breadth courses on the ancient Mediterranean, in translation."
          },
          {
              "id": "clas-seminar",
              "name": "Major Seminar",
              "type": "required",
              "courses": [
                  "CLAS3996"
              ],
              "note": ""
          },
          {
              "id": "clas-thesis",
              "name": "Senior Thesis",
              "type": "required",
              "courses": [
                  "CLAS3998"
              ],
              "note": ""
          }
      ]
  },

  "cogsci-barnard": {
      "id": "cogsci-barnard",
      "name": "Cognitive Science",
      "school": "Barnard",
      "degree": "BA",
      "description": "Mind and cognition across psychology, neuroscience, philosophy, linguistics, and computation.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "cogs-intro",
              "name": "Foundational Course",
              "type": "required",
              "courses": [
                  "COGS1001"
              ],
              "note": ""
          },
          {
              "id": "cogs-psych",
              "name": "Psychology (Cognition)",
              "type": "required",
              "choose": 1,
              "courses": [
                  "PSYC3100",
                  "PSYC2210"
              ],
              "note": "One cognition-focused psychology course."
          },
          {
              "id": "cogs-phil",
              "name": "Philosophy",
              "type": "required",
              "choose": 1,
              "courses": [
                  "PHIL3300",
                  "PHIL2655",
                  "PHIL3252"
              ],
              "note": "One philosophy-of-mind/cognitive-science course."
          },
          {
              "id": "cogs-ling",
              "name": "Linguistics",
              "type": "required",
              "courses": [
                  "LING1101"
              ],
              "note": ""
          },
          {
              "id": "cogs-neuro",
              "name": "Neuroscience",
              "type": "required",
              "choose": 1,
              "courses": [
                  "NSBV2000",
                  "PSYC3500",
                  "PSYC2430",
                  "NSBV3381"
              ],
              "note": ""
          },
          {
              "id": "cogs-computation",
              "name": "Mathematical & Computational Methods",
              "type": "required",
              "courses": [
                  "COMS1004",
                  "STAT1201"
              ],
              "note": "Two methods courses required."
          },
          {
              "id": "cogs-specialization",
              "name": "Area of Specialization",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "PSYC3300",
                  "NSBV3503",
                  "PHIL3600",
                  "LING3101",
                  "COGS3952",
                  "PSYC2430",
                  "PHIL3252"
              ],
              "note": "Four related electives in your chosen specialization (e.g. perception, decision science)."
          },
          {
              "id": "cogs-senior",
              "name": "Senior Capstone",
              "type": "required",
              "courses": [
                  "COGS3903"
              ],
              "note": "Year-long senior project (or two advanced courses with papers)."
          }
      ]
  },

  "complit-barnard": {
      "id": "complit-barnard",
      "name": "Comparative Literature and Translation Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "Literature across languages and societies, through the Institute for Comparative Literature and Society.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "cpls-language",
              "name": "Language Study",
              "type": "required",
              "courses": [
                  "FREN1101",
                  "FREN1102",
                  "FREN2101",
                  "FREN2102"
              ],
              "note": "Four semesters of foreign language (any language; French shown) plus one advanced course."
          },
          {
              "id": "cpls-intro",
              "name": "Introduction",
              "type": "required",
              "courses": [
                  "CPLS3900"
              ],
              "note": "Taken spring of sophomore year."
          },
          {
              "id": "cpls-designated",
              "name": "CPLS-Designated Courses",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CPLS3800",
                  "CPLS4227",
                  "CPLS4685",
                  "CPLS3931",
                  "CPLS4200",
                  "CPLS4162",
                  "CPLS4325",
                  "CPLS4545",
                  "CPLS4876"
              ],
              "note": ""
          },
          {
              "id": "cpls-electives",
              "name": "Literature & Cognate Electives",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "RUSS3220",
                  "MDES4122",
                  "ENGL3500",
                  "GERM4170"
              ],
              "note": "Courses on national/regional literatures and cognate disciplines."
          },
          {
              "id": "cpls-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "CPLS3991"
              ],
              "note": ""
          },
          {
              "id": "cpls-thesis",
              "name": "Senior Thesis",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "CPLS3995"
              ],
              "note": "Optional senior thesis."
          }
      ]
  },

  "envsci-barnard": {
      "id": "envsci-barnard",
      "name": "Environmental Science",
      "school": "Barnard",
      "degree": "BA",
      "description": "The solid earth, climate, and life systems, with Lamont-Doherty research opportunities.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "eesc-foundation",
              "name": "Foundation",
              "type": "required",
              "courses": [
                  "EESCBC1001",
                  "EESC2100",
                  "EESC2200"
              ],
              "note": "Environmental Science I plus the Climate and Solid Earth systems courses."
          },
          {
              "id": "eesc-life",
              "name": "Life Systems",
              "type": "required",
              "choose": 1,
              "courses": [
                  "EESC2300",
                  "BIOL1500"
              ],
              "note": ""
          },
          {
              "id": "eesc-support",
              "name": "Supporting Sciences",
              "type": "required",
              "choose": 2,
              "courses": [
                  "CHEM1403",
                  "CHEM1404",
                  "PHYS1401",
                  "BIOL1501"
              ],
              "note": ""
          },
          {
              "id": "eesc-quant",
              "name": "Quantitative Foundation",
              "type": "required",
              "choose": 2,
              "courses": [
                  "MATH1101",
                  "MATH1102",
                  "STAT1201",
                  "ECON1105"
              ],
              "note": ""
          },
          {
              "id": "eesc-electives",
              "name": "Core Electives",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "EESC3101",
                  "EESC4008",
                  "EESC4925",
                  "EESC4949",
                  "EESC2330",
                  "EEEB3087"
              ],
              "note": "Four approved environmental science electives."
          },
          {
              "id": "eesc-capstone",
              "name": "Capstone",
              "type": "required",
              "courses": [
                  "EESCBC3800",
                  "EESCBC3801"
              ],
              "note": "Year-long senior research seminar."
          }
      ]
  },

  "film-barnard": {
      "id": "film-barnard",
      "name": "Film Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "One of the most popular majors at CC, combining critical analysis with film history and theory. Students have access to NYC's unparalleled film culture.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "film-intro",
              "name": "Introduction & Theory",
              "type": "required",
              "courses": [
                  "FILMBC3201",
                  "FILMGU4000"
              ],
              "note": "Intro (prerequisite for all) plus Film and Media Theory."
          },
          {
              "id": "film-history",
              "name": "Film History",
              "type": "required",
              "choose": 2,
              "courses": [
                  "FILM2010",
                  "FILM2020",
                  "FILM2001"
              ],
              "note": "Two history courses, at least one covering pre-1960."
          },
          {
              "id": "film-lab",
              "name": "Critical/Creative Practice Lab",
              "type": "required",
              "choose": 1,
              "courses": [
                  "FILMBC3119",
                  "FILMBC3200"
              ],
              "note": ""
          },
          {
              "id": "film-international",
              "name": "International Cinema",
              "type": "required",
              "choose": 1,
              "courses": [
                  "FILM3100",
                  "EAAS3313",
                  "MDES2641"
              ],
              "note": "One non-American cinema course."
          },
          {
              "id": "film-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "FILM2100",
                  "FILM3001",
                  "FILM4001",
                  "GERM4350",
                  "CSER3922",
                  "EAAS3217"
              ],
              "note": "Five approved electives."
          },
          {
              "id": "film-senior",
              "name": "Senior Capstone",
              "type": "required",
              "courses": [
                  "FILMBC3997"
              ],
              "note": ""
          }
      ]
  },

  "french-barnard": {
      "id": "french-barnard",
      "name": "French and Francophone Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "French language, literature, and the cultures of the francophone world.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "fren-language",
              "name": "Language Sequence",
              "type": "required",
              "courses": [
                  "FRENBC1203",
                  "FRENBC1204"
              ],
              "note": "Through Intermediate French II (or equivalent placement)."
          },
          {
              "id": "fren-core",
              "name": "Major French Texts",
              "type": "required",
              "courses": [
                  "FRENBC3021",
                  "FRENBC3022"
              ],
              "note": ""
          },
          {
              "id": "fren-advlang",
              "name": "Advanced Language",
              "type": "required",
              "choose": 2,
              "courses": [
                  "FREN3405",
                  "FREN3242",
                  "FREN3515"
              ],
              "note": "Three advanced language courses in the full major (two modeled)."
          },
          {
              "id": "fren-lit",
              "name": "Advanced Literature & Culture",
              "type": "elective",
              "elective_count": 4,
              "courses": [
                  "FREN3503",
                  "FREN3517",
                  "FREN3600",
                  "FREN3666",
                  "FREN3714",
                  "FREN3726",
                  "FREN3766"
              ],
              "note": "Four advanced courses, at least one pre-1800."
          },
          {
              "id": "fren-senior",
              "name": "Senior Thesis",
              "type": "required",
              "courses": [
                  "FRENBC3091"
              ],
              "note": "Defended before a departmental committee."
          }
      ]
  },

  "german-barnard": {
      "id": "german-barnard",
      "name": "German",
      "school": "Barnard",
      "degree": "BA",
      "description": "German language, literature, and intellectual history.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "germ-language",
              "name": "Language Sequence",
              "type": "required",
              "courses": [
                  "GERM1101",
                  "GERM1102",
                  "GERM2101",
                  "GERM2102"
              ],
              "note": "Through intermediate German (or placement)."
          },
          {
              "id": "germ-advanced",
              "name": "Advanced Language",
              "type": "required",
              "choose": 1,
              "courses": [
                  "GERM3001",
                  "GERM3002"
              ],
              "note": ""
          },
          {
              "id": "germ-bc-language",
              "name": "Barnard Language Course",
              "type": "required",
              "choose": 1,
              "courses": [
                  "GERMBC3009"
              ],
              "note": "One further language course (BC3009/3010/3012/3022)."
          },
          {
              "id": "germ-lit",
              "name": "Literature Electives",
              "type": "elective",
              "elective_count": 6,
              "courses": [
                  "GERM3333",
                  "GERMBC3031",
                  "GERMBC3050",
                  "GERM3442",
                  "GERM3443",
                  "GERM3444",
                  "GERM3445",
                  "GERM4170",
                  "GERM4350",
                  "GERM4448"
              ],
              "note": "Six or seven literature courses, taught in German where possible."
          },
          {
              "id": "germ-senior",
              "name": "Senior Seminar/Tutorial",
              "type": "required",
              "courses": [
                  "GERMBC3061"
              ],
              "note": ""
          }
      ]
  },

  "italian-barnard": {
      "id": "italian-barnard",
      "name": "Italian",
      "school": "Barnard",
      "degree": "BA",
      "description": "Italian language, literature, and cultural studies from Dante to the present.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "ital-language",
              "name": "Language Sequence",
              "type": "required",
              "courses": [
                  "ITAL1101",
                  "ITAL1102",
                  "ITAL2101",
                  "ITAL2102"
              ],
              "note": "Through intermediate level; placement may exempt some courses."
          },
          {
              "id": "ital-advanced",
              "name": "Advanced Italian",
              "type": "required",
              "courses": [
                  "ITAL3335"
              ],
              "note": ""
          },
          {
              "id": "ital-advanced2",
              "name": "Advanced Italian II / Content",
              "type": "required",
              "choose": 1,
              "courses": [
                  "ITAL3336",
                  "ITAL3337"
              ],
              "note": "Advanced Italian II or Italian Through Cinema."
          },
          {
              "id": "ital-lit",
              "name": "Literature Sequence",
              "type": "required",
              "courses": [
                  "ITAL3333",
                  "ITAL3334"
              ],
              "note": "Intro to Italian Literature I–II (or the Cultural Studies sequence)."
          },
          {
              "id": "ital-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 3,
              "courses": [
                  "ITAL4091",
                  "ITAL4502",
                  "ITAL4499",
                  "ITAL3645",
                  "ITAL3661",
                  "ITAL3865"
              ],
              "note": "3000/4000-level Italian or Italy-focused courses (Dante requires the literature sequence)."
          },
          {
              "id": "ital-senior",
              "name": "Senior Thesis",
              "type": "required",
              "courses": [
                  "ITAL3993"
              ],
              "note": "Senior thesis/tutorial (ITAL UN3993)."
          }
      ]
  },

  "phil-barnard": {
      "id": "phil-barnard",
      "name": "Philosophy",
      "school": "Barnard",
      "degree": "BA",
      "description": "Logic, ethics, mind, and knowledge. Develops rigorous reasoning skills valued in law, medicine, and research.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "phil-ancient",
              "name": "Ancient/Early Medieval",
              "type": "required",
              "courses": [
                  "PHIL2110"
              ],
              "note": ""
          },
          {
              "id": "phil-modern",
              "name": "Late Medieval/Early Modern",
              "type": "required",
              "courses": [
                  "PHIL2120"
              ],
              "note": ""
          },
          {
              "id": "phil-logic",
              "name": "Logic",
              "type": "required",
              "choose": 1,
              "courses": [
                  "PHIL3600",
                  "PHIL1401"
              ],
              "note": "Only one logic course counts."
          },
          {
              "id": "phil-ethics",
              "name": "Ethics/Political",
              "type": "required",
              "choose": 1,
              "courses": [
                  "PHIL3010",
                  "PHIL3751"
              ],
              "note": ""
          },
          {
              "id": "phil-me",
              "name": "Metaphysics/Epistemology",
              "type": "required",
              "choose": 1,
              "courses": [
                  "PHIL3300",
                  "PHIL3551",
                  "PHIL3601",
                  "PHIL3960"
              ],
              "note": ""
          },
          {
              "id": "phil-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 2,
              "courses": [
                  "PHIL2655",
                  "PHIL3252"
              ],
              "note": "Two additional philosophy courses."
          },
          {
              "id": "phil-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "PHILBC4050"
              ],
              "note": "With optional year-long senior essay."
          }
      ]
  },

  "religion-barnard": {
      "id": "religion-barnard",
      "name": "Religion",
      "school": "Barnard",
      "degree": "BA",
      "description": "The study of religious traditions, texts, and theory across cultures.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "reli-cluster",
              "name": "Major Cluster",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "RELI2305",
                  "RELI2405",
                  "RELI2779",
                  "RELI2312",
                  "RELI3314",
                  "RELI3007",
                  "RELI4216",
                  "RELI4223",
                  "RELI4376",
                  "RELI4616"
              ],
              "note": "Five courses organized around a tradition, area, or theme; include one seminar."
          },
          {
              "id": "reli-breadth",
              "name": "Breadth",
              "type": "required",
              "choose": 3,
              "courses": [
                  "RELI1612",
                  "RELI1120",
                  "RELI2305",
                  "RELI2405",
                  "RELI2779"
              ],
              "note": "Three courses for geographic, historical, and disciplinary range."
          },
          {
              "id": "reli-lab",
              "name": "Religion Lab",
              "type": "required",
              "courses": [
                  "RELIGU4105"
              ],
              "note": ""
          },
          {
              "id": "reli-theory",
              "name": "Theory",
              "type": "required",
              "courses": [
                  "RELI3199"
              ],
              "note": ""
          },
          {
              "id": "reli-senior",
              "name": "Senior Research Seminars",
              "type": "required",
              "courses": [
                  "RELIBC3997",
                  "RELIBC3998"
              ],
              "note": "Sequential year-long thesis sequence."
          }
      ]
  },

  "spanish-barnard": {
      "id": "spanish-barnard",
      "name": "Spanish and Latin American Cultures",
      "school": "Barnard",
      "degree": "BA",
      "description": "Spanish language with the literatures and cultures of Iberia and Latin America.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "span-language",
              "name": "Language Foundation",
              "type": "required",
              "courses": [
                  "SPAN1101",
                  "SPAN1102",
                  "SPAN2101",
                  "SPAN2102"
              ],
              "note": "Through intermediate Spanish; placement may exempt courses."
          },
          {
              "id": "span-advanced",
              "name": "Advanced Language",
              "type": "required",
              "courses": [
                  "SPAN3300"
              ],
              "note": ""
          },
          {
              "id": "span-cultures",
              "name": "Hispanic Cultures",
              "type": "required",
              "courses": [
                  "SPAN3349",
                  "SPAN3350"
              ],
              "note": ""
          },
          {
              "id": "span-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "SPAN3315",
                  "SPAN3366",
                  "SPAN3731",
                  "SPAN4010",
                  "CPLS3800",
                  "FILM3100"
              ],
              "note": "Seven upper-level electives in the full major, at least four from the department (five modeled)."
          },
          {
              "id": "span-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "SPANBC3990"
              ],
              "note": "Barnard senior seminar (SPAN BC3990); 20+ page paper in Spanish."
          }
      ]
  },

  "stats-barnard": {
      "id": "stats-barnard",
      "name": "Statistics",
      "school": "Barnard",
      "degree": "BA",
      "description": "Probability theory, statistical inference, and data analysis. High demand in tech, finance, and research.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "math",
              "name": "Mathematics",
              "type": "required",
              "courses": [
                  "MATH1101",
                  "MATH1102",
                  "MATH1201",
                  "MATH2010"
              ],
              "note": "Calculus I–III and linear algebra."
          },
          {
              "id": "stats-intro",
              "name": "Statistics Prerequisite",
              "type": "required",
              "courses": [
                  "STAT1201"
              ],
              "note": ""
          },
          {
              "id": "cs-prog",
              "name": "Programming",
              "type": "required",
              "choose": 1,
              "courses": [
                  "COMS1004",
                  "STAT4206"
              ],
              "note": "One programming course (Java or applied statistical computing)."
          },
          {
              "id": "stats-core",
              "name": "Core Statistics",
              "type": "required",
              "courses": [
                  "STAT4203",
                  "STAT4204",
                  "STAT4205",
                  "STAT4206",
                  "STAT4207"
              ],
              "note": "Probability, inference, regression, statistical computing, and stochastic processes."
          },
          {
              "id": "stats-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 3,
              "courses": [
                  "STAT4224",
                  "STAT4315",
                  "STAT3001",
                  "COMS4771",
                  "IEOR3600"
              ],
              "note": "Three advanced electives (may include quantitative courses in related departments)."
          }
      ]
  },

  "wgs-barnard": {
      "id": "wgs-barnard",
      "name": "Women's, Gender & Sexuality Studies",
      "school": "Barnard",
      "degree": "BA",
      "description": "Interdisciplinary study of gender and sexuality, through the Institute for the Study of Women, Gender, and Sexuality.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "wmst-intro",
              "name": "Introduction",
              "type": "required",
              "choose": 1,
              "courses": [
                  "WMST1001",
                  "WMSTBC2150",
                  "WMST3125"
              ],
              "note": "One of three gateway emphases."
          },
          {
              "id": "wmst-theory",
              "name": "Foundation Courses",
              "type": "required",
              "courses": [
                  "WMSTBC2140",
                  "WMST3311",
                  "WMST3514",
                  "WMST3915"
              ],
              "note": "Feminist Theory expects the intro sequence first."
          },
          {
              "id": "wmst-electives",
              "name": "Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "WMST3200",
                  "WMST3600",
                  "WMST4210",
                  "CSER3942",
                  "AFAS4080",
                  "CPLS4162"
              ],
              "note": "Five electives, at least two advanced research seminars."
          },
          {
              "id": "wmst-senior",
              "name": "Senior Seminar",
              "type": "required",
              "courses": [
                  "WMST3521"
              ],
              "note": "Capstone research project (CC/GS senior majors)."
          },
          {
              "id": "wmst-senior2",
              "name": "Senior Seminar II",
              "type": "elective",
              "elective_count": 1,
              "courses": [
                  "WMST3522"
              ],
              "note": "Optional second capstone term."
          }
      ]
  },

  "amec-barnard": {
      "id": "amec-barnard",
      "name": "Asian and Middle Eastern Cultures",
      "school": "Barnard",
      "degree": "BA",
      "description": "The languages, histories, and cultures of China, Japan, Korea, Tibet, and Vietnam.",
      "min_credits": 122,
      "requirement_groups": [
          {
              "id": "barnard-reqs",
              "name": "Barnard Requirements",
              "type": "required",
              "courses": [
                  "ENGL1010",
                  "CORE_FRSCI"
              ],
              "note": "Foundations: First-Year Writing and lab science shown; see Barnard for full Foundations."
          },
          {
              "id": "amec-language",
              "name": "Language Requirement",
              "type": "required",
              "courses": [
                  "ARAB1101",
                  "ARAB1102",
                  "ARAB2101",
                  "ARAB2102"
              ],
              "note": "Two years of one regional language (Arabic shown; many others qualify)."
          },
          {
              "id": "amec-colloquium",
              "name": "Major Texts Colloquium",
              "type": "required",
              "courses": [
                  "AHUM1399"
              ],
              "note": ""
          },
          {
              "id": "amec-theory",
              "name": "Theory and Culture",
              "type": "required",
              "courses": [
                  "MDES3000"
              ],
              "note": ""
          },
          {
              "id": "amec-civ",
              "name": "Civilization Courses",
              "type": "required",
              "choose": 2,
              "courses": [
                  "ASCM2003",
                  "ASCM2008",
                  "ASCM2357",
                  "MDES1003"
              ],
              "note": ""
          },
          {
              "id": "amec-electives",
              "name": "Concentration Electives",
              "type": "elective",
              "elective_count": 5,
              "courses": [
                  "MDES2641",
                  "MDES3042",
                  "MDES4122",
                  "MDES4765",
                  "MDES2004",
                  "MDES2012",
                  "MDES2042",
                  "MDES2650",
                  "MDES3121"
              ],
              "note": "Five courses forming a concentration."
          },
          {
              "id": "amec-senior",
              "name": "Senior Thesis Seminar",
              "type": "required",
              "courses": [
                  "ASST3900"
              ],
              "note": "Thesis completed via spring independent study (40+ pages)."
          }
      ]
  },

  // ── GS joint majors ─────────────────────────────────────────
  "econmath-gs": {
    id: "econmath-gs", name: "Economics-Mathematics", school: "GS", degree: "BA",
    description: "Joint major combining the economics core with substantial pure mathematics.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH4061"],
        note: "Calculus sequence, linear algebra, and analysis." },
      { id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"], note: "" },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["ECON4710","ECON4415","MATH4062","MATH4500"], note: "" }
    ]
  },

  "econstats-gs": {
    id: "econstats-gs", name: "Economics-Statistics", school: "GS", degree: "BA",
    description: "Joint major pairing economics with statistical theory and methods.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201"], note: "" },
      { id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201","STAT3001","STAT4205"], note: "" },
      { id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"], note: "" },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["ECON4415","STAT4224","STAT4315"], note: "" }
    ]
  },

  "econphil-gs": {
    id: "econphil-gs", name: "Economics-Philosophy", school: "GS", degree: "BA",
    description: "Joint major in economic reasoning and philosophical analysis.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1201"], note: "" },
      { id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"], note: "" },
      { id: "phil-core", name: "Philosophy Core", type: "required",
        courses: ["PHIL1401","PHIL3010","PHIL3600"],
        note: "Intro, ethics, and logic." },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["ECON4710","PHIL3551","PHIL3751"], note: "" }
    ]
  },

  "econpols-gs": {
    id: "econpols-gs", name: "Economics-Political Science", school: "GS", degree: "BA",
    description: "Joint major in political economy across both departments.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Math & Statistics", type: "required",
        courses: ["MATH1101","MATH1201","STAT1201"], note: "" },
      { id: "econ-core", name: "Economics Core", type: "required",
        courses: ["ECON1105","ECON3211","ECON3213","ECON3412"], note: "" },
      { id: "pols-core", name: "Political Science", type: "required",
        courses: ["POLS1101"], note: "" },
      { id: "pols-subfields", name: "Subfields", type: "required", choose: 2,
        courses: ["POLS2200","POLS2210","POLS2220","POLS2230"], note: "" },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["ECON4100","POLS3500","POLS3623"], note: "" }
    ]
  },

  "csmath-gs": {
    id: "csmath-gs", name: "Computer Science-Mathematics", school: "GS", degree: "BA",
    description: "Joint major in computation and pure mathematics.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH3027"], note: "" },
      { id: "cs-core", name: "CS Core", type: "required",
        courses: ["COMS1004","COMS3134","COMS3157","COMS3203","COMS3261","COMS4231"], note: "" },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["COMS4771","MATH4061","COMS4115"], note: "" }
    ]
  },

  "mathstats-gs": {
    id: "mathstats-gs", name: "Mathematics-Statistics", school: "GS", degree: "BA",
    description: "Joint major in mathematics and statistical theory.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH4061"], note: "" },
      { id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201","STAT3001","STAT4205","STAT4315"], note: "" },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["STAT4224","MATH4062","MATH4500"], note: "" }
    ]
  },

  "polsstats-gs": {
    id: "polsstats-gs", name: "Political Science-Statistics", school: "GS", degree: "BA",
    description: "Joint major in politics and quantitative methods.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "pols-core", name: "Political Science Core", type: "required",
        courses: ["POLS1101","POLS3710"], note: "" },
      { id: "pols-subfields", name: "Subfields", type: "required", choose: 2,
        courses: ["POLS2200","POLS2210","POLS2220","POLS2230"], note: "" },
      { id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201","STAT3001"], note: "" },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["POLS3500","POLS3200","STAT4205"], note: "" }
    ]
  },

  "datasci-gs": {
    id: "datasci-gs", name: "Data Science", school: "GS", degree: "BA",
    description: "Computation, statistics, and machine learning for data-driven problems.",
    min_credits: 124,
    requirement_groups: [
      { id: "gs-core", name: "GS Core Requirements", type: "required",
        courses: ["CORE_LHUM1","CORE_LHUM2","CORE_CC1","CORE_CC2","CORE_WRITE"],
        note: "Modified Core for GS students." },
      { id: "math", name: "Mathematics", type: "required",
        courses: ["MATH1101","MATH1102","MATH1201","MATH2010"], note: "" },
      { id: "cs", name: "Computer Science", type: "required",
        courses: ["COMS1004","COMS3134","COMS3251"], note: "" },
      { id: "stats", name: "Statistics", type: "required",
        courses: ["STAT1201","STAT3001"], note: "" },
      { id: "ml", name: "Machine Learning", type: "required",
        courses: ["COMS4771"], note: "" },
      { id: "electives", name: "Electives", type: "elective", elective_count: 2,
        courses: ["COMS4111","STAT4224","IEOR4520"], note: "" }
    ]
  },

}; // end MAJORS

// ============================================================
// Minor definitions (simplified — just required courses)
// ============================================================
window.MINORS = {
  "medren-minor": {
    id: "medren-minor", name: "Medieval and Renaissance Studies Minor",
    available_to: ["CC","GS","Barnard"],
    courses: ["AHIS2001","ENGL3100","LATN2101","RELI2305","CLCV3070"]
  },
  "publichealth-minor": {
    id: "publichealth-minor", name: "Public Health (Special Program)",
    available_to: ["CC","GS","Barnard","SEAS"],
    courses: ["PUBH3100","PUBH3200","PUBH4200","STAT1201"]
  },
  "cs-minor": {
    id: "cs-minor", name: "Computer Science Minor",
    available_to: ["CC","GS","Barnard"],
    courses: ["COMS1004","COMS3134","COMS3157","COMS3203","COMS3261","CSEE3827"]
  },
  "econ-minor": {
    id: "econ-minor", name: "Economics Minor",
    available_to: ["CC","GS","Barnard","SEAS"],
    courses: ["ECON1105","ECON3211","ECON3213","ECON3412"]
  },
  "math-minor": {
    id: "math-minor", name: "Mathematics Minor",
    available_to: ["CC","GS","Barnard","SEAS"],
    courses: ["MATH1101","MATH1102","MATH1201","MATH2010","MATH4061"]
  },
  "stats-minor": {
    id: "stats-minor", name: "Statistics Minor",
    available_to: ["CC","GS","Barnard","SEAS"],
    courses: ["STAT1201","STAT4109","COMS3251","ECON3412"]
  }
};
