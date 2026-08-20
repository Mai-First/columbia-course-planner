// ============================================================
// courses.js — All course definitions
// Key = short code used as ID throughout the app
// ============================================================

window.COURSES = {

  // ── Mathematics ────────────────────────────────────────────
  "MATH1101": {
    code: "MATH UN1101", name: "Calculus I", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "MATH", category: "math",
    description: "Limits, derivatives, integrals of functions of one variable. Applications to physics and the social sciences.",
    professors: ["Patrick Gallagher", "Mikhail Smirnov", "Julien Dubedat"]
  },
  "MATH1102": {
    code: "MATH UN1102", name: "Calculus II", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1101"], difficulty: 3,
    dept: "MATH", category: "math",
    description: "Methods of integration, applications of the integral, Taylor's theorem, and infinite series.",
    professors: ["Patrick Gallagher", "Mikhail Smirnov", "Chris Ivanov"]
  },
  "MATH1201": {
    code: "MATH UN1201", name: "Calculus III", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1102"], difficulty: 3,
    dept: "MATH", category: "math",
    description: "Vectors in 2D/3D, partial derivatives, gradients, multiple integrals, vector calculus, Stokes' theorem.",
    professors: ["Giulia Sacchetti", "Julien Dubedat", "Daniela de Silva"]
  },
  "MATH2010": {
    code: "MATH UN2010", name: "Linear Algebra", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1102"], difficulty: 3,
    dept: "MATH", category: "math",
    description: "Matrices, vector spaces, linear transformations, eigenvalues and eigenvectors, canonical forms, applications.",
    professors: ["Patrick Gallagher", "Daniele Alessandrini", "Lindsay Piechnik"]
  },
  "MATH3027": {
    code: "MATH UN3027", name: "Ordinary Differential Equations", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1102","MATH2010"], difficulty: 3,
    dept: "MATH", category: "math",
    description: "First and second-order ODEs, systems of ODEs, power series solutions, Laplace transforms, boundary value problems.",
    professors: ["Mikhail Smirnov", "Simon Brendle"]
  },
  "MATH4061": {
    code: "MATH GU4061", name: "Introduction to Modern Analysis I", credits: 3,
    offered: ["fall"], prereqs: ["MATH2010","MATH1201"], difficulty: 5,
    dept: "MATH", category: "math",
    description: "Metric spaces, completeness, compactness, continuity, uniform convergence, differentiation, Riemann integration. Notoriously rigorous — proof-heavy.",
    professors: ["Daniele Alessandrini", "Francesco Lin"]
  },
  "MATH4062": {
    code: "MATH GU4062", name: "Introduction to Modern Analysis II", credits: 3,
    offered: ["spring"], prereqs: ["MATH4061"], difficulty: 5,
    dept: "MATH", category: "math",
    description: "Power series, analytic functions, implicit function theorem, Fubini theorem, change of variables, Lebesgue measure and integration, function spaces.",
    professors: ["Daniele Alessandrini", "Francesco Lin"]
  },
  "MATH4150": {
    code: "MATH 4150", name: "Introduction to Number Theory", credits: 3,
    offered: ["spring"], prereqs: ["MATH2010"], difficulty: 4,
    dept: "MATH", category: "math",
    description: "Divisibility, congruences, prime distribution, quadratic reciprocity.",
    professors: ["Patrick Gallagher"]
  },
  "MATH4500": {
    code: "MATH 4500", name: "Introduction to Probability", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1201"], difficulty: 3,
    dept: "MATH", category: "math",
    description: "Probability spaces, random variables, distributions, limit theorems.",
    professors: ["Julien Dubedat"]
  },

  // ── Statistics ─────────────────────────────────────────────
  "STAT1201": {
    code: "STAT 1201", name: "Introduction to Statistics", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "STAT", category: "math",
    description: "Descriptive statistics, probability, inference, regression.",
    professors: ["Tian Zheng", "Liam Paninski"]
  },
  "STAT4109": {
    code: "STAT 4109", name: "Probability and Statistics for Data Science", credits: 3,
    offered: ["fall"], prereqs: ["MATH1102"], difficulty: 3,
    dept: "STAT", category: "math",
    description: "Random variables, distributions, estimation, hypothesis testing.",
    professors: ["Bodhi Sen", "Tian Zheng"]
  },

  // ── Physics ────────────────────────────────────────────────
  "PHYS1401": {
    code: "PHYS UN1401", name: "General Physics I (Mechanics)", credits: 4,
    offered: ["fall","spring"], prereqs: ["MATH1101"], difficulty: 3,
    dept: "PHYS", category: "physics",
    description: "Calculus-based mechanics: kinematics, Newton's laws, work-energy, momentum, rotational dynamics, and gravitation.",
    professors: ["Szabolcs Marka", "Emlyn Hughes"]
  },
  "PHYS1402": {
    code: "PHYS UN1402", name: "General Physics II (Electricity & Magnetism)", credits: 4,
    offered: ["fall","spring"], prereqs: ["PHYS1401","MATH1102"], difficulty: 4,
    dept: "PHYS", category: "physics",
    description: "Electrostatics, Gauss's law, circuits, magnetic fields, electromagnetic induction, Maxwell's equations, optics. Steeper conceptual curve than Physics I.",
    professors: ["Szabolcs Marka", "Emlyn Hughes"]
  },
  "PHYS2801": {
    code: "PHYS UN2801", name: "Quantum Mechanics I", credits: 3,
    offered: ["fall"], prereqs: ["PHYS1402","MATH3027"], difficulty: 5,
    dept: "PHYS", category: "physics",
    description: "Wave functions, Schrödinger equation, operators, uncertainty principle, hydrogen atom, angular momentum, and spin.",
    professors: ["Emlyn Hughes", "Szabolcs Marka"]
  },
  "PHYS3003": {
    code: "PHYS UN3003", name: "Mechanics", credits: 3,
    offered: ["fall"], prereqs: ["PHYS1402","MATH3027"], difficulty: 4,
    dept: "PHYS", category: "physics",
    description: "Lagrangian and Hamiltonian mechanics, central force problem, rigid body dynamics, small oscillations.",
    professors: ["Szabolcs Marka"]
  },
  "PHYS4003": {
    code: "PHYS UN4003", name: "Electricity and Magnetism", credits: 3,
    offered: ["spring"], prereqs: ["PHYS1402","MATH3027"], difficulty: 4,
    dept: "PHYS", category: "physics",
    description: "Classical electrodynamics using Griffiths: boundary-value problems, multipole expansion, magnetostatics, electromagnetic waves.",
    professors: ["Emlyn Hughes"]
  },
  "PHYS4018": {
    code: "PHYS UN4018", name: "Thermodynamics and Statistical Mechanics", credits: 3,
    offered: ["spring"], prereqs: ["PHYS2801","PHYS1402"], difficulty: 4,
    dept: "PHYS", category: "physics",
    description: "Laws of thermodynamics, entropy, partition functions, quantum statistical mechanics, phase transitions.",
    professors: ["Szabolcs Marka"]
  },
  "PHYS4040": {
    code: "PHYS UN4040", name: "Physics Lab", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHYS1402"], difficulty: 2,
    dept: "PHYS", category: "physics",
    description: "Experimental techniques: electronics, optics, nuclear, solid-state experiments. Written lab reports required.",
    professors: ["Various instructors"]
  },

  // ── Chemistry ──────────────────────────────────────────────
  "CHEM1403": {
    code: "CHEM 1403", name: "General Chemistry I", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 3,
    dept: "CHEM", category: "science",
    description: "Atomic structure, bonding, thermodynamics, equilibrium.",
    professors: ["Ann McDermott"]
  },

  // ── Writing ────────────────────────────────────────────────
  "ENGL1010": {
    code: "ENGL 1010", name: "University Writing", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "ENGL", category: "writing",
    description: "Argument, analysis, and academic writing across disciplines.",
    professors: ["Various instructors"]
  },

  // ── Core Curriculum (CC/GS) ────────────────────────────────
  "CORE_LHUM1": {
    code: "HUMA C1001", name: "Literature Humanities I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Ancient Mediterranean: Homer, Sappho, Aeschylus, Plato, Virgil.",
    professors: ["Various instructors — small sections"]
  },
  "CORE_LHUM2": {
    code: "HUMA C1002", name: "Literature Humanities II", credits: 4,
    offered: ["spring"], prereqs: ["CORE_LHUM1"], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Medieval to modern: Dante, Shakespeare, Dostoevsky, Virginia Woolf.",
    professors: ["Various instructors — small sections"]
  },
  "CORE_CC1": {
    code: "CCSC C1101", name: "Contemporary Civilization I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Western political and moral philosophy: Plato through Kant.",
    professors: ["Various instructors — small sections"]
  },
  "CORE_CC2": {
    code: "CCSC C1102", name: "Contemporary Civilization II", credits: 4,
    offered: ["spring"], prereqs: ["CORE_CC1"], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Political thought from the Enlightenment to the present.",
    professors: ["Various instructors — small sections"]
  },
  "CORE_AHUM": {
    code: "AHUM C1001", name: "Art Humanities", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Major works of Western visual art from Ancient Greece to the present.",
    professors: ["Various instructors — small sections"]
  },
  "CORE_MHUM": {
    code: "MHUM C1001", name: "Music Humanities", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Active listening and analysis of Western music from Gregorian chant to jazz.",
    professors: ["Various instructors — small sections"]
  },
  "CORE_WRITE": {
    code: "ENGL C1010", name: "University Writing (CC/GS)", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "CORE", category: "writing",
    description: "Analytical writing in response to literary and non-fiction texts.",
    professors: ["Various instructors — small sections"]
  },
  "CORE_FRSCI": {
    code: "SCEN C1400", name: "Frontiers of Science", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Introductory seminar in scientific reasoning across disciplines.",
    professors: ["Various instructors"]
  },
  "CORE_GLOB": {
    code: "Global Core", name: "Global Core Requirement", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "CORE", category: "core-curriculum",
    description: "Culture, history, and society beyond the Western tradition.",
    professors: ["Various instructors"]
  },

  // ── Computer Science (SEAS/CC/GS/Barnard) ─────────────────
  "COMS1004": {
    code: "COMS W1004", name: "Introduction to Computer Science and Programming in Java", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "COMS", category: "core-cs",
    description: "General introduction for students interested in CS or engineering. Covers fundamental concepts, problem-solving, and Java programming. No prior experience required.",
    professors: ["Adam Cannon", "Jae Woo Lee", "Paul Blaer", "Chris Murphy"]
  },
  "COMS1007": {
    code: "COMS W1007", name: "Honors Introduction to Computer Science", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "COMS", category: "core-cs",
    description: "Accelerated introduction with emphasis on theory, algorithms, and Python. For students with some prior programming experience.",
    professors: ["Jae Woo Lee"]
  },
  "COMS3134": {
    code: "COMS W3134", name: "Data Structures in Java", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS1004"], difficulty: 3,
    dept: "COMS", category: "core-cs",
    description: "Arrays, linked lists, queues, trees, graphs, hashing, sorting, searching, and storage management. Algorithm analysis using Java.",
    professors: ["Jae Woo Lee", "Adam Cannon", "Paul Blaer"]
  },
  "COMS3157": {
    code: "COMS W3157", name: "Advanced Programming", credits: 4,
    offered: ["fall","spring"], prereqs: ["COMS3134"], difficulty: 4,
    dept: "COMS", category: "core-cs",
    description: "C programming language, Unix systems programming, Git, Make, TCP/IP networking, and C++ fundamentals. Significant programming workload.",
    professors: ["Brian Borowski", "Jae Woo Lee"]
  },
  "COMS3203": {
    code: "COMS W3203", name: "Discrete Mathematics", credits: 4,
    offered: ["fall","spring"], prereqs: ["COMS1004"], difficulty: 3,
    dept: "COMS", category: "core-cs",
    description: "Logic and formal proofs, sequences, mathematical induction, binomial coefficients, finite probability, recurrence relations, graph theory: isomorphism, traversability, planarity, colorings.",
    professors: ["Jonathan Gross", "Ansaf Salleb-Aouissi"]
  },
  "COMS3261": {
    code: "COMS W3261", name: "Computer Science Theory", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3203"], difficulty: 4,
    dept: "COMS", category: "core-cs",
    description: "Formal languages, automata, computability (Turing machines, halting problem), and computational complexity (P vs NP). Proof-heavy.",
    professors: ["Rocco Servedio", "Xi Chen"]
  },
  "COMS3251": {
    code: "COMS W3251", name: "Computational Linear Algebra", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1102"], difficulty: 3,
    dept: "COMS", category: "core-cs",
    description: "Linear algebra from a computational perspective: SVD, PCA, least squares, numerical methods. Used in ML and data science.",
    professors: ["Nakul Verma", "Tony Dear"]
  },
  "CSEE3827": {
    code: "CSEE W3827", name: "Fundamentals of Computer Systems", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3157"], difficulty: 4,
    dept: "CSEE", category: "core-cs",
    description: "Digital logic, binary representations, assembly language, processor design, pipelining, memory hierarchy, caches. Hardware-software interface.",
    professors: ["Tim Pinkston", "Martha Kim"]
  },
  "COMS4231": {
    code: "COMS W4231", name: "Analysis of Algorithms", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3261","COMS3134"], difficulty: 5,
    dept: "COMS", category: "core-cs",
    description: "Advanced algorithm design: divide-and-conquer, dynamic programming, greedy algorithms, graph algorithms, NP-completeness, approximation. Considered one of the hardest CS theory courses.",
    professors: ["Rocco Servedio", "Xi Chen", "Eleni Drinea"]
  },
  "COMS4701": {
    code: "COMS W4701", name: "Artificial Intelligence", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3134"], difficulty: 3,
    dept: "COMS", category: "elective",
    description: "Classical AI: search, constraint satisfaction, adversarial games, Bayesian networks, probabilistic inference, and intro to machine learning.",
    professors: ["Tony Dear", "Ansaf Salleb-Aouissi"]
  },
  "COMS4705": {
    code: "COMS W4705", name: "Natural Language Processing", credits: 3,
    offered: ["spring"], prereqs: ["COMS3134","COMS4231"], difficulty: 4,
    dept: "COMS", category: "elective",
    description: "Statistical NLP: language models, sequence labeling, parsing, machine translation, question answering, large language models.",
    professors: ["Julia Hirschberg", "Daniel Bauer"]
  },
  "COMS4771": {
    code: "COMS W4771", name: "Machine Learning", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3251","STAT4109"], difficulty: 4,
    dept: "COMS", category: "elective",
    description: "Linear/logistic regression, SVMs, kernel methods, neural networks, clustering, PCA. Math-heavy — requires strong linear algebra and probability.",
    professors: ["Ansaf Salleb-Aouissi", "Nakul Verma", "Shuran Song"]
  },
  "COMS4118": {
    code: "COMS W4118", name: "Operating Systems I", credits: 3,
    offered: ["fall"], prereqs: ["CSEE3827"], difficulty: 5,
    dept: "COMS", category: "elective",
    description: "Process management, threads, synchronization, memory management, file systems, security. Notorious for heavy kernel programming assignments in C.",
    professors: ["Jason Nieh", "Junfeng Yang"]
  },
  "COMS4119": {
    code: "COMS W4119", name: "Computer Networks", credits: 3,
    offered: ["spring"], prereqs: ["CSEE3827"], difficulty: 4,
    dept: "COMS", category: "elective",
    description: "Layered network architecture, TCP/IP protocols, routing algorithms, congestion control, wireless networks, network security.",
    professors: ["Henning Schulzrinne", "Dan Rubenstein"]
  },
  "COMS4111": {
    code: "COMS W4111", name: "Introduction to Databases", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3134"], difficulty: 3,
    dept: "COMS", category: "elective",
    description: "Relational model, SQL, transactions, query optimization.",
    professors: ["Eugene Wu", "Kenneth Ross"]
  },
  "COMS4115": {
    code: "COMS W4115", name: "Programming Languages and Translators", credits: 3,
    offered: ["fall"], prereqs: ["COMS3157","COMS3261"], difficulty: 4,
    dept: "COMS", category: "elective",
    description: "Lexing, parsing, semantic analysis, code generation; build a compiler.",
    professors: ["Alfred Aho", "Stephen Edwards"]
  },
  "COMS4156": {
    code: "COMS W4156", name: "Advanced Software Engineering", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3134"], difficulty: 3,
    dept: "COMS", category: "elective",
    description: "Software design, testing, CI/CD, agile, team project.",
    professors: ["Gail Kaiser", "Kenneth Ross"]
  },
  "COMS4824": {
    code: "COMS W4824", name: "Computer Architecture", credits: 3,
    offered: ["spring"], prereqs: ["CSEE3827"], difficulty: 4,
    dept: "COMS", category: "elective",
    description: "Pipelining, memory hierarchy, parallelism, GPU architecture.",
    professors: ["Martha Kim", "Tim Pinkston"]
  },
  "COMS4160": {
    code: "COMS W4160", name: "Computer Graphics", credits: 3,
    offered: ["fall"], prereqs: ["COMS3134"], difficulty: 4,
    dept: "COMS", category: "elective",
    description: "Rendering, geometry, transformations, and animation; builds a ray tracer and rasterizer.",
    professors: ["Changxi Zheng"]
  },
  "COMS4170": {
    code: "COMS W4170", name: "User Interface Design", credits: 3,
    offered: ["fall","spring"], prereqs: ["COMS3134"], difficulty: 3,
    dept: "COMS", category: "elective",
    description: "Principles and methods for designing and evaluating human-computer interfaces.",
    professors: ["Lydia Chilton"]
  },

  // ── Economics (CC/GS/Barnard) ──────────────────────────────
  "ECON1105": {
    code: "ECON UN1105", name: "Principles of Economics", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "ECON", category: "economics",
    description: "Supply and demand, market equilibrium, GDP, inflation, fiscal policy.",
    professors: ["Sunil Gulati", "Brendan O'Flaherty", "Jonathan Rork"]
  },
  "ECON3211": {
    code: "ECON W3211", name: "Intermediate Microeconomics", credits: 3,
    offered: ["fall","spring"], prereqs: ["ECON1105","MATH1101"], difficulty: 3,
    dept: "ECON", category: "economics",
    description: "Consumer theory, production, competitive markets, game theory.",
    professors: ["Brendan O'Flaherty", "Sunil Gulati", "Yeon-Koo Che"]
  },
  "ECON3213": {
    code: "ECON W3213", name: "Intermediate Macroeconomics", credits: 3,
    offered: ["fall","spring"], prereqs: ["ECON1105","MATH1101"], difficulty: 3,
    dept: "ECON", category: "economics",
    description: "National income, IS-LM, Keynesian models, growth theory, monetary policy.",
    professors: ["Michael Woodford", "Brendan O'Flaherty", "David Weinstein"]
  },
  "ECON3412": {
    code: "ECON W3412", name: "Introduction to Econometrics", credits: 3,
    offered: ["fall","spring"], prereqs: ["ECON3211","STAT1201"], difficulty: 4,
    dept: "ECON", category: "economics",
    description: "OLS, instrumental variables, panel data, difference-in-differences.",
    professors: ["Serena Ng", "Miguel Urquiola"]
  },
  "ECON4710": {
    code: "ECON W4710", name: "Game Theory", credits: 3,
    offered: ["spring"], prereqs: ["ECON3211"], difficulty: 4,
    dept: "ECON", category: "elective",
    description: "Nash equilibrium, extensive form games, mechanism design, auctions.",
    professors: ["Yeon-Koo Che", "Sunil Gulati"]
  },
  "ECON4100": {
    code: "ECON W4100", name: "Economics of Poverty and Inequality", credits: 3,
    offered: ["fall"], prereqs: ["ECON3211"], difficulty: 3,
    dept: "ECON", category: "elective",
    description: "Labor markets, social insurance, education policy, intergenerational mobility.",
    professors: ["Brendan O'Flaherty"]
  },
  "ECON4840": {
    code: "ECON W4840", name: "Economic History of the United States", credits: 3,
    offered: ["fall"], prereqs: ["ECON3211"], difficulty: 3,
    dept: "ECON", category: "elective",
    description: "Long-run economic growth, industrialization, labor, and inequality in the US.",
    professors: ["Jonathan Rork"]
  },
  "ECON4530": {
    code: "ECON W4530", name: "Environmental Economics", credits: 3,
    offered: ["spring"], prereqs: ["ECON3211"], difficulty: 3,
    dept: "ECON", category: "elective",
    description: "Externalities, public goods, pollution policy, climate economics.",
    professors: ["Geoffrey Heal"]
  },
  "ECON4415": {
    code: "ECON W4415", name: "Econometrics II", credits: 3,
    offered: ["spring"], prereqs: ["ECON3412"], difficulty: 4,
    dept: "ECON", category: "elective",
    description: "Advanced causal inference: RDD, matching, time series, maximum likelihood.",
    professors: ["Serena Ng", "Miguel Urquiola"]
  },
  "ECON4999": {
    code: "ECON W4999", name: "Senior Thesis", credits: 4,
    offered: ["fall","spring"], prereqs: ["ECON3412"], difficulty: 4,
    dept: "ECON", category: "major",
    description: "Original empirical research paper on an economics topic.",
    professors: ["Advisor assigned"]
  },
  "ECON2261": {
    code: "ECON UN2261", name: "Accounting and Finance for Economics", credits: 3,
    offered: ["fall","spring"], prereqs: ["ECON1105"], difficulty: 3,
    dept: "ECON", category: "economics",
    description: "Financial accounting and the basics of corporate finance; fulfills the accounting requirement for the financial economics major.",
    professors: ["TBA"]
  },
  "ECON3025": {
    code: "ECON UN3025", name: "Financial Economics", credits: 4,
    offered: ["fall","spring"], prereqs: ["ECON3211"], difficulty: 4,
    dept: "ECON", category: "economics",
    description: "Asset pricing, risk and return, market efficiency, and the role of financial markets in allocating capital.",
    professors: ["TBA"]
  },
  "ECON4280": {
    code: "ECON GU4280", name: "Corporate Finance", credits: 3,
    offered: ["spring"], prereqs: ["ECON3025","ECON3412"], difficulty: 4,
    dept: "ECON", category: "economics",
    description: "Capital structure, valuation, investment decisions, and corporate governance.",
    professors: ["TBA"]
  },
  "ECON4918": {
    code: "ECON GU4918", name: "Seminar in Financial Economics", credits: 4,
    offered: ["fall","spring"], prereqs: ["ECON3025","ECON3412"], difficulty: 4,
    dept: "ECON", category: "economics",
    description: "Capstone seminar applying financial-economics theory to current research; fulfills the major's seminar requirement.",
    professors: ["Advisor assigned"]
  },

  // ── Political Science (CC) ─────────────────────────────────
  "POLS1101": {
    code: "POLS UN1101", name: "Introduction to Political Science", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "POLS", category: "major",
    description: "Core subfields: comparative politics, IR, American politics, theory.",
    professors: ["Gregory Mitrovich", "Page Fortna", "Kimberle Crenshaw"]
  },
  "POLS2200": {
    code: "POLS W2200", name: "Comparative Politics", credits: 3,
    offered: ["fall","spring"], prereqs: ["POLS1101"], difficulty: 3,
    dept: "POLS", category: "major",
    description: "Regimes, democratization, state formation, political parties.",
    professors: ["Isabela Mares", "Andrew Nathan"]
  },
  "POLS2210": {
    code: "POLS W2210", name: "International Relations", credits: 3,
    offered: ["fall","spring"], prereqs: ["POLS1101"], difficulty: 3,
    dept: "POLS", category: "major",
    description: "War, cooperation, international institutions, nuclear deterrence.",
    professors: ["Page Fortna", "Gregory Mitrovich"]
  },
  "POLS2220": {
    code: "POLS W2220", name: "American Politics", credits: 3,
    offered: ["fall","spring"], prereqs: ["POLS1101"], difficulty: 3,
    dept: "POLS", category: "major",
    description: "Congress, presidency, courts, parties, elections, public opinion.",
    professors: ["Kimberle Crenshaw", "Greg Wawro"]
  },
  "POLS2230": {
    code: "POLS W2230", name: "Political Theory", credits: 3,
    offered: ["fall","spring"], prereqs: ["POLS1101"], difficulty: 3,
    dept: "POLS", category: "major",
    description: "Hobbes, Locke, Rousseau, Mill, Marx, Rawls, contemporary debates.",
    professors: ["Andrew Arato", "Jean Cohen"]
  },
  "POLS3710": {
    code: "POLS W3710", name: "Research Methods in Political Science", credits: 3,
    offered: ["fall"], prereqs: ["POLS2200","POLS2210"], difficulty: 3,
    dept: "POLS", category: "major",
    description: "Case studies, quantitative analysis, experimental design, causal inference.",
    professors: ["Greg Wawro", "Page Fortna"]
  },
  "POLS4000": {
    code: "POLS W4000", name: "Senior Research Seminar", credits: 4,
    offered: ["fall","spring"], prereqs: ["POLS3710"], difficulty: 4,
    dept: "POLS", category: "major",
    description: "Capstone research paper on an original political science question.",
    professors: ["Advisor assigned"]
  },
  "POLS3500": {
    code: "POLS W3500", name: "International Security", credits: 3,
    offered: ["spring"], prereqs: ["POLS2210"], difficulty: 3,
    dept: "POLS", category: "elective",
    description: "Nuclear deterrence, civil wars, terrorism, humanitarian intervention.",
    professors: ["Page Fortna", "Gregory Mitrovich"]
  },
  "POLS3200": {
    code: "POLS W3200", name: "Democracy and Dictatorship", credits: 3,
    offered: ["fall"], prereqs: ["POLS2200"], difficulty: 3,
    dept: "POLS", category: "elective",
    description: "Theories of regime change, democratic backsliding, authoritarian resilience.",
    professors: ["Isabela Mares"]
  },
  "POLS3245": {
    code: "POLS UN3245", name: "Racial and Ethnic Politics", credits: 3,
    offered: ["fall"], prereqs: ["POLS2220"], difficulty: 3,
    dept: "POLS", category: "elective",
    description: "Race and ethnicity in American political behavior, representation, and policy.",
    professors: ["TBA"]
  },
  "POLS3210": {
    code: "POLS UN3210", name: "Judicial Politics", credits: 3,
    offered: ["spring"], prereqs: ["POLS2220"], difficulty: 3,
    dept: "POLS", category: "elective",
    description: "Courts, judicial decision-making, and the politics of law in the United States.",
    professors: ["TBA"]
  },
  "POLS3623": {
    code: "POLS UN3623", name: "Ending War and Building Peace", credits: 3,
    offered: ["fall"], prereqs: ["POLS2210"], difficulty: 3,
    dept: "POLS", category: "elective",
    description: "Conflict termination, peacekeeping, and post-conflict reconstruction.",
    professors: ["TBA"]
  },

  // ── Psychology (Barnard) ───────────────────────────────────
  "PSYC1001": {
    code: "PSYC BC1001", name: "Introduction to Psychology", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "PSYC", category: "major",
    description: "Biological, cognitive, developmental, social, and clinical psychology.",
    professors: ["Geraldine Downey", "Barbara Tversky", "Nim Tottenham"]
  },
  "PSYC2225": {
    code: "PSYC BC2225", name: "Research Methods in Psychology", credits: 3,
    offered: ["fall","spring"], prereqs: ["PSYC1001"], difficulty: 3,
    dept: "PSYC", category: "major",
    description: "Experimental design, hypothesis testing, APA writing, ethics.",
    professors: ["Geraldine Downey", "Nim Tottenham"]
  },
  "PSYC2236": {
    code: "PSYC BC2236", name: "Statistical Methods in Psychology", credits: 3,
    offered: ["fall","spring"], prereqs: ["PSYC2225"], difficulty: 3,
    dept: "PSYC", category: "major",
    description: "t-tests, ANOVA, correlation, regression, non-parametrics using SPSS/R.",
    professors: ["Geraldine Downey"]
  },
  "PSYC3100": {
    code: "PSYC BC3100", name: "Cognitive Psychology", credits: 3,
    offered: ["fall","spring"], prereqs: ["PSYC1001"], difficulty: 3,
    dept: "PSYC", category: "major",
    description: "Perception, attention, memory, language, reasoning, decision making.",
    professors: ["Barbara Tversky", "Daphna Shohamy"]
  },
  "PSYC3200": {
    code: "PSYC BC3200", name: "Social Psychology", credits: 3,
    offered: ["fall"], prereqs: ["PSYC1001"], difficulty: 3,
    dept: "PSYC", category: "major",
    description: "Attitudes, persuasion, conformity, attraction, prejudice, helping behavior.",
    professors: ["Geraldine Downey"]
  },
  "PSYC3300": {
    code: "PSYC BC3300", name: "Developmental Psychology", credits: 3,
    offered: ["spring"], prereqs: ["PSYC1001"], difficulty: 3,
    dept: "PSYC", category: "major",
    description: "Cognitive, social, and emotional development from infancy to adulthood.",
    professors: ["Nim Tottenham"]
  },
  "PSYC3400": {
    code: "PSYC BC3400", name: "Abnormal Psychology", credits: 3,
    offered: ["fall","spring"], prereqs: ["PSYC1001"], difficulty: 3,
    dept: "PSYC", category: "elective",
    description: "Classification, etiology, and treatment of psychological disorders.",
    professors: ["Geraldine Downey", "Barbara Tversky"]
  },
  "PSYC3500": {
    code: "PSYC BC3500", name: "Neuroscience and Behavior", credits: 3,
    offered: ["fall"], prereqs: ["PSYC1001"], difficulty: 4,
    dept: "PSYC", category: "elective",
    description: "Neural bases of perception, learning, memory, emotion, and motivation.",
    professors: ["Nim Tottenham", "Daphna Shohamy"]
  },
  "PSYC4000": {
    code: "PSYC BC4000", name: "Advanced Lab in Psychology", credits: 4,
    offered: ["fall","spring"], prereqs: ["PSYC2236"], difficulty: 4,
    dept: "PSYC", category: "major",
    description: "Conduct original empirical research in a lab; write up findings.",
    professors: ["Advisor assigned"]
  },

  // ── History (GS) ───────────────────────────────────────────
  "HIST1000": {
    code: "HIST UN1000", name: "The World Since 1500", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "HIST", category: "major",
    description: "Global history: exploration, colonialism, industrialization, world wars.",
    professors: ["Matthew Connelly", "Susan Pedersen"]
  },
  "HIST2000": {
    code: "HIST W2000", name: "Historical Methods", credits: 3,
    offered: ["fall"], prereqs: ["HIST1000"], difficulty: 3,
    dept: "HIST", category: "major",
    description: "Primary sources, archival research, historiography, writing history.",
    professors: ["Matthew Connelly", "Anders Stephanson"]
  },
  "HIST3100": {
    code: "HIST W3100", name: "Modern Europe Seminar", credits: 3,
    offered: ["fall","spring"], prereqs: ["HIST2000"], difficulty: 3,
    dept: "HIST", category: "major",
    description: "Seminar on topics in European history from the French Revolution onward.",
    professors: ["Susan Pedersen", "Mark Mazower"]
  },
  "HIST3200": {
    code: "HIST W3200", name: "American History Seminar", credits: 3,
    offered: ["fall","spring"], prereqs: ["HIST2000"], difficulty: 3,
    dept: "HIST", category: "major",
    description: "Seminar on topics in US history: race, capitalism, foreign policy.",
    professors: ["Anders Stephanson", "Matthew Connelly"]
  },
  "HIST3300": {
    code: "HIST W3300", name: "Global History Seminar", credits: 3,
    offered: ["spring"], prereqs: ["HIST2000"], difficulty: 3,
    dept: "HIST", category: "major",
    description: "Transnational topics: empire, migration, decolonization, human rights.",
    professors: ["Susan Pedersen", "Mark Mazower"]
  },
  "HIST2310": {
    code: "HIST UN2310", name: "European Intellectual History", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "HIST", category: "elective",
    description: "Major currents in modern European thought from the Enlightenment to the twentieth century.",
    professors: ["TBA"]
  },
  "HIST2660": {
    code: "HIST UN2660", name: "Latin American Civilization I", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "HIST", category: "elective",
    description: "Indigenous, colonial, and early national Latin America through the nineteenth century.",
    professors: ["TBA"]
  },
  "HIST2701": {
    code: "HIST UN2701", name: "The Ottoman Empire", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "HIST", category: "elective",
    description: "Rise, expansion, and transformation of the Ottoman Empire from 1300 to the twentieth century.",
    professors: ["TBA"]
  },
  "HIST2772": {
    code: "HIST UN2772", name: "West African History", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "HIST", category: "elective",
    description: "States, trade, and societies of West Africa from the medieval empires through the colonial era.",
    professors: ["TBA"]
  },
  "HIST2810": {
    code: "HIST UN2810", name: "History of South Asia I", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "HIST", category: "elective",
    description: "The Indian subcontinent from early empires through the eighteenth century.",
    professors: ["TBA"]
  },
  "HIST2344": {
    code: "HIST UN2344", name: "World Economy, Empire and War, 1900–50", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "HIST", category: "elective",
    description: "Global economic integration, empire, and the two world wars in the first half of the twentieth century.",
    professors: ["TBA"]
  },
  "HIST4000": {
    code: "HIST W4000", name: "Senior Thesis", credits: 4,
    offered: ["fall","spring"], prereqs: ["HIST3100"], difficulty: 5,
    dept: "HIST", category: "major",
    description: "Year-long original historical research paper based on primary sources.",
    professors: ["Advisor assigned"]
  },

  // ── English (CC) ───────────────────────────────────────────
  "ENGL2000": {
    code: "ENGL W2000", name: "Introduction to Literary Studies", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "ENGL", category: "major",
    description: "Literary analysis: close reading, genre, form, and critical approaches.",
    professors: ["Bruce Robbins", "Edward Mendelson"]
  },
  "ENGL3100": {
    code: "ENGL W3100", name: "Shakespeare", credits: 3,
    offered: ["fall","spring"], prereqs: ["ENGL2000"], difficulty: 3,
    dept: "ENGL", category: "elective",
    description: "Major plays and poems with attention to language, performance, context.",
    professors: ["James Shapiro", "Jean Howard"]
  },
  "ENGL3200": {
    code: "ENGL W3200", name: "American Literature", credits: 3,
    offered: ["fall","spring"], prereqs: ["ENGL2000"], difficulty: 3,
    dept: "ENGL", category: "elective",
    description: "American prose and poetry from colonial times to the contemporary.",
    professors: ["Sharon Marcus", "Bruce Robbins"]
  },
  "ENGL3300": {
    code: "ENGL W3300", name: "Literary Theory and Criticism", credits: 3,
    offered: ["fall"], prereqs: ["ENGL2000"], difficulty: 4,
    dept: "ENGL", category: "major",
    description: "Formalism, psychoanalysis, structuralism, postcolonial theory, queer theory.",
    professors: ["Bruce Robbins", "Gayatri Spivak"]
  },
  "ENGL3400": {
    code: "ENGL W3400", name: "The Novel", credits: 3,
    offered: ["spring"], prereqs: ["ENGL2000"], difficulty: 3,
    dept: "ENGL", category: "elective",
    description: "History and theory of the novel; from Defoe to Woolf to Morrison.",
    professors: ["Sharon Marcus", "Edward Mendelson"]
  },
  "ENGL3500": {
    code: "ENGL W3500", name: "Postcolonial Literature", credits: 3,
    offered: ["spring"], prereqs: ["ENGL2000"], difficulty: 3,
    dept: "ENGL", category: "elective",
    description: "Literature of empire and its aftermath; Achebe, Rhys, Rushdie, Coetzee.",
    professors: ["Gayatri Spivak", "Bruce Robbins"]
  },
  "ENGL3329": {
    code: "ENGL UN3329", name: "What Shakespeare Read", credits: 3,
    offered: ["spring"], prereqs: ["ENGL2000"], difficulty: 4,
    dept: "ENGL", category: "elective",
    description: "Shakespeare's sources and reading: the classical, biblical, and Renaissance texts behind the plays.",
    professors: ["TBA"]
  },
  "ENGL3327": {
    code: "ENGL UN3327", name: "Old New York", credits: 3,
    offered: ["fall"], prereqs: ["ENGL2000"], difficulty: 3,
    dept: "ENGL", category: "elective",
    description: "The literature of New York City from the nineteenth century through the early twentieth.",
    professors: ["TBA"]
  },
  "ENGL3055": {
    code: "ENGL UN3055", name: "US Poetry of the 1960s", credits: 3,
    offered: ["spring"], prereqs: ["ENGL2000"], difficulty: 3,
    dept: "ENGL", category: "elective",
    description: "American poetry and poetics of the 1960s and the era's social movements.",
    professors: ["TBA"]
  },
  "ENGL4619": {
    code: "ENGL GU4619", name: "African-American Literature I", credits: 3,
    offered: ["fall"], prereqs: ["ENGL2000"], difficulty: 4,
    dept: "ENGL", category: "elective",
    description: "African-American literary traditions from their origins through the early twentieth century.",
    professors: ["TBA"]
  },
  "ENGL4000": {
    code: "ENGL W4000", name: "Senior Seminar in English", credits: 4,
    offered: ["fall"], prereqs: ["ENGL3300"], difficulty: 4,
    dept: "ENGL", category: "major",
    description: "Capstone seminar; produce a substantial original critical essay.",
    professors: ["James Shapiro", "Sharon Marcus"]
  },

  // ── Electrical Engineering (SEAS) ─────────────────────────
  "ELEN3082": {
    code: "ELEN E3082", name: "Electrical Circuits", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHYS1402","MATH3027"], difficulty: 3,
    dept: "ELEN", category: "major",
    description: "Circuit analysis, Thevenin/Norton, AC circuits, Laplace methods.",
    professors: ["Predrag Jelenkovic", "Yannis Tsividis"]
  },
  "ELEN3106": {
    code: "ELEN E3106", name: "Signals and Systems", credits: 3,
    offered: ["fall","spring"], prereqs: ["ELEN3082","MATH3027"], difficulty: 4,
    dept: "ELEN", category: "major",
    description: "Continuous and discrete signals, Fourier transforms, filtering, sampling.",
    professors: ["Predrag Jelenkovic"]
  },
  "ELEN3401": {
    code: "ELEN E3401", name: "Electronic Devices I", credits: 3,
    offered: ["fall"], prereqs: ["PHYS1402","CHEM1403"], difficulty: 4,
    dept: "ELEN", category: "major",
    description: "Semiconductor physics, p-n junctions, diodes, BJT, MOSFET.",
    professors: ["Yannis Tsividis"]
  },
  "ELEN4702": {
    code: "ELEN E4702", name: "Communications Theory", credits: 3,
    offered: ["spring"], prereqs: ["ELEN3106","STAT4109"], difficulty: 4,
    dept: "ELEN", category: "elective",
    description: "Modulation, channel capacity, noise, error-correcting codes.",
    professors: ["Predrag Jelenkovic"]
  },
  "ELEN4810": {
    code: "ELEN E4810", name: "Digital Signal Processing", credits: 3,
    offered: ["fall"], prereqs: ["ELEN3106"], difficulty: 4,
    dept: "ELEN", category: "elective",
    description: "DFT, FFT, digital filters, spectral analysis, speech processing.",
    professors: ["Predrag Jelenkovic", "Yannis Tsividis"]
  },
  "ELEN4830": {
    code: "ELEN E4830", name: "VLSI Design", credits: 3,
    offered: ["spring"], prereqs: ["ELEN3401"], difficulty: 4,
    dept: "ELEN", category: "elective",
    description: "CMOS logic design, static timing analysis, power, chip layout.",
    professors: ["Yannis Tsividis"]
  },
  "ELEN4999": {
    code: "ELEN E4999", name: "Senior Design Project", credits: 3,
    offered: ["fall","spring"], prereqs: ["ELEN3106","ELEN3401"], difficulty: 4,
    dept: "ELEN", category: "major",
    description: "Capstone hardware/software engineering design project in a team.",
    professors: ["Advisor assigned"]
  },

  // ── Applied Math (SEAS) ────────────────────────────────────
  "APMA3101": {
    code: "APMA E3101", name: "Principles of Applied Mathematics I", credits: 3,
    offered: ["fall"], prereqs: ["MATH3027","MATH1201"], difficulty: 4,
    dept: "APMA", category: "major",
    description: "PDEs, separation of variables, Fourier series, Green's functions.",
    professors: ["Guillaume Bal", "Michael Weinstein"]
  },
  "APMA3102": {
    code: "APMA E3102", name: "Principles of Applied Mathematics II", credits: 3,
    offered: ["spring"], prereqs: ["APMA3101"], difficulty: 4,
    dept: "APMA", category: "major",
    description: "Complex analysis, potential theory, asymptotic methods.",
    professors: ["Michael Weinstein"]
  },
  "APMA4200": {
    code: "APMA E4200", name: "Partial Differential Equations", credits: 3,
    offered: ["fall"], prereqs: ["APMA3101","MATH4061"], difficulty: 5,
    dept: "APMA", category: "elective",
    description: "Elliptic, parabolic, and hyperbolic PDEs; Sobolev spaces.",
    professors: ["Guillaume Bal"]
  },
  "APMA4301": {
    code: "APMA E4301", name: "Numerical Methods", credits: 3,
    offered: ["spring"], prereqs: ["MATH2010","MATH3027","COMS1004"], difficulty: 4,
    dept: "APMA", category: "elective",
    description: "Root finding, interpolation, numerical integration, ODEs, linear systems.",
    professors: ["Guillaume Bal", "Michael Weinstein"]
  },


  // ── Biology ────────────────────────────────────────────────
  "BIOL1500": {
    code: "BIOL UN1500", name: "Introductory Biology I", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 3,
    dept: "BIOL", category: "science",
    description: "Cell biology, genetics, evolution, and diversity of life.",
    professors: ["Molly Przeworski", "Darcy Kelley"]
  },
  "BIOL1501": {
    code: "BIOL UN1501", name: "Introductory Biology II", credits: 3,
    offered: ["spring"], prereqs: ["BIOL1500"], difficulty: 3,
    dept: "BIOL", category: "science",
    description: "Ecology, animal physiology, plant biology, and behavior.",
    professors: ["Darcy Kelley"]
  },
  "CHEM1404": {
    code: "CHEM 1404", name: "General Chemistry II", credits: 4,
    offered: ["spring"], prereqs: ["CHEM1403"], difficulty: 3,
    dept: "CHEM", category: "science",
    description: "Kinetics, electrochemistry, coordination chemistry, nuclear chemistry.",
    professors: ["Ann McDermott"]
  },
  "BIOL2401": {
    code: "BIOL W2401", name: "Molecular Biology", credits: 3,
    offered: ["fall","spring"], prereqs: ["BIOL1500","CHEM1403"], difficulty: 4,
    dept: "BIOL", category: "science",
    description: "DNA replication, transcription, translation, regulation of gene expression.",
    professors: ["Molly Przeworski"]
  },
  "BIOL3004": {
    code: "BIOL W3004", name: "Genetics", credits: 3,
    offered: ["fall"], prereqs: ["BIOL1500"], difficulty: 3,
    dept: "BIOL", category: "science",
    description: "Mendelian genetics, linkage, mutation, genomics, population genetics.",
    professors: ["Molly Przeworski"]
  },

  // ── Sociology ──────────────────────────────────────────────
  "SOCI1010": {
    code: "SOCI UN1010", name: "Introduction to Sociology", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "SOCI", category: "major",
    description: "Society, culture, inequality, institutions, and social change.",
    professors: ["Shamus Khan", "Herbert Gans", "Sudhir Venkatesh"]
  },
  "SOCI2001": {
    code: "SOCI W2001", name: "Social Theory", credits: 3,
    offered: ["fall","spring"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "major",
    description: "Classical and contemporary theory: Marx, Weber, Durkheim, Bourdieu, Foucault.",
    professors: ["Shamus Khan"]
  },
  "SOCI3000": {
    code: "SOCI W3000", name: "Research Methods in Sociology", credits: 3,
    offered: ["fall"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "major",
    description: "Quantitative and qualitative methods, survey design, ethnography.",
    professors: ["Herbert Gans", "Shamus Khan"]
  },
  "SOCI3100": {
    code: "SOCI W3100", name: "Inequality and Stratification", credits: 3,
    offered: ["fall","spring"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "elective",
    description: "Class, race, gender inequality; mobility, poverty, and social reproduction.",
    professors: ["Herbert Gans"]
  },
  "SOCI3200": {
    code: "SOCI W3200", name: "Urban Sociology", credits: 3,
    offered: ["spring"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "elective",
    description: "Cities, neighborhoods, segregation, gentrification, urban poverty.",
    professors: ["Sudhir Venkatesh"]
  },
  "SOCI3213": {
    code: "SOCI UN3213", name: "Sociology of African American Life", credits: 3,
    offered: ["fall"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "elective",
    description: "Social structure, culture, and inequality in African American communities.",
    professors: ["TBA"]
  },
  "SOCI3235": {
    code: "SOCI UN3235", name: "Social Movements", credits: 3,
    offered: ["spring"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "elective",
    description: "The emergence, dynamics, and outcomes of social movements and collective action.",
    professors: ["TBA"]
  },
  "SOCI3265": {
    code: "SOCI UN3265", name: "Sociology of Work and Gender", credits: 3,
    offered: ["fall"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "elective",
    description: "Gender, labor markets, and the organization of paid and unpaid work.",
    professors: ["TBA"]
  },
  "SOCI3914": {
    code: "SOCI UN3914", name: "Inequality, Poverty, and Mobility", credits: 3,
    offered: ["spring"], prereqs: ["SOCI1010"], difficulty: 3,
    dept: "SOCI", category: "elective",
    description: "Causes and consequences of economic inequality, poverty, and social mobility.",
    professors: ["TBA"]
  },
  "SOCI4000": {
    code: "SOCI W4000", name: "Senior Seminar in Sociology", credits: 4,
    offered: ["fall"], prereqs: ["SOCI2001","SOCI3000"], difficulty: 4,
    dept: "SOCI", category: "major",
    description: "Capstone seminar; original sociological research paper.",
    professors: ["Shamus Khan"]
  },

  // ── Philosophy ─────────────────────────────────────────────
  "PHIL1401": {
    code: "PHIL UN1401", name: "Introduction to Philosophy", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "PHIL", category: "major",
    description: "Knowledge, mind, ethics, free will, and the existence of God.",
    professors: ["Akeel Bilgrami", "Justin Clarke-Doane"]
  },
  "PHIL2110": {
    code: "PHIL W2110", name: "History of Ancient Philosophy", credits: 3,
    offered: ["fall"], prereqs: ["PHIL1401"], difficulty: 3,
    dept: "PHIL", category: "major",
    description: "Pre-Socratics, Plato, Aristotle, and Hellenistic philosophy.",
    professors: ["Christia Mercer"]
  },
  "PHIL2120": {
    code: "PHIL W2120", name: "History of Modern Philosophy", credits: 3,
    offered: ["spring"], prereqs: ["PHIL1401"], difficulty: 3,
    dept: "PHIL", category: "major",
    description: "Descartes, Hume, Kant, and the emergence of modern thought.",
    professors: ["Christia Mercer", "Akeel Bilgrami"]
  },
  "PHIL3010": {
    code: "PHIL W3010", name: "Ethics", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHIL1401"], difficulty: 3,
    dept: "PHIL", category: "elective",
    description: "Consequentialism, deontology, virtue ethics, and applied ethics.",
    professors: ["Justin Clarke-Doane", "Akeel Bilgrami"]
  },
  "PHIL3300": {
    code: "PHIL W3300", name: "Philosophy of Mind", credits: 3,
    offered: ["spring"], prereqs: ["PHIL1401"], difficulty: 3,
    dept: "PHIL", category: "elective",
    description: "Consciousness, mental causation, intentionality, personal identity.",
    professors: ["Akeel Bilgrami"]
  },
  "PHIL3600": {
    code: "PHIL W3600", name: "Logic", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 3,
    dept: "PHIL", category: "elective",
    description: "Propositional logic, predicate logic, formal proofs, and metalogic.",
    professors: ["Justin Clarke-Doane"]
  },
  "PHIL3551": {
    code: "PHIL UN3551", name: "Philosophy of Science", credits: 3,
    offered: ["fall"], prereqs: ["PHIL1401"], difficulty: 4,
    dept: "PHIL", category: "elective",
    description: "Explanation, confirmation, realism, and the nature of scientific theories.",
    professors: ["TBA"]
  },
  "PHIL3601": {
    code: "PHIL UN3601", name: "Metaphysics", credits: 3,
    offered: ["spring"], prereqs: ["PHIL1401"], difficulty: 4,
    dept: "PHIL", category: "elective",
    description: "Existence, identity, time, causation, and the fundamental structure of reality.",
    professors: ["TBA"]
  },
  "PHIL3751": {
    code: "PHIL UN3751", name: "Political Philosophy", credits: 3,
    offered: ["fall"], prereqs: ["PHIL1401"], difficulty: 4,
    dept: "PHIL", category: "elective",
    description: "Justice, authority, liberty, and equality in the Western political tradition.",
    professors: ["TBA"]
  },
  "PHIL3960": {
    code: "PHIL UN3960", name: "Epistemology", credits: 3,
    offered: ["spring"], prereqs: ["PHIL1401"], difficulty: 4,
    dept: "PHIL", category: "elective",
    description: "Knowledge, justification, skepticism, and the foundations of belief.",
    professors: ["TBA"]
  },
  "PHIL4000": {
    code: "PHIL W4000", name: "Senior Seminar in Philosophy", credits: 4,
    offered: ["fall"], prereqs: ["PHIL2110","PHIL2120"], difficulty: 4,
    dept: "PHIL", category: "major",
    description: "Advanced seminar on a central problem in contemporary philosophy.",
    professors: ["Akeel Bilgrami"]
  },

  // ── Mechanical Engineering (SEAS) ─────────────────────────
  "MECE1001": {
    code: "MECE E1001", name: "Introduction to Mechanical Engineering", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "MECE", category: "major",
    description: "Engineering design, statics, materials, CAD, professional ethics.",
    professors: ["Arvind Narayanaswamy"]
  },
  "MECE3420": {
    code: "MECE E3420", name: "Mechanics of Solids", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHYS1401","MATH3027"], difficulty: 3,
    dept: "MECE", category: "major",
    description: "Stress, strain, beam bending, torsion, failure theories.",
    professors: ["Arvind Narayanaswamy"]
  },
  "MECE3600": {
    code: "MECE E3600", name: "Engineering Thermodynamics", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHYS1402","MATH1201"], difficulty: 3,
    dept: "MECE", category: "major",
    description: "Laws of thermodynamics, entropy, power cycles, refrigeration.",
    professors: ["Yuan Yang"]
  },
  "MECE4201": {
    code: "MECE E4201", name: "Mechanical Vibrations", credits: 3,
    offered: ["spring"], prereqs: ["MECE3420","MATH3027"], difficulty: 4,
    dept: "MECE", category: "elective",
    description: "Free and forced vibrations, resonance, multi-DOF systems, active control.",
    professors: ["Arvind Narayanaswamy"]
  },
  "MECE4602": {
    code: "MECE E4602", name: "Fluid Mechanics", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHYS1402","MATH1201"], difficulty: 4,
    dept: "MECE", category: "major",
    description: "Fluid statics, Bernoulli, Navier-Stokes, boundary layers, turbulence.",
    professors: ["Yuan Yang"]
  },
  "MECE4999": {
    code: "MECE E4999", name: "Senior Design Project (ME)", credits: 3,
    offered: ["fall","spring"], prereqs: ["MECE3420","MECE3600"], difficulty: 4,
    dept: "MECE", category: "major",
    description: "Capstone mechanical engineering design project in a team.",
    professors: ["Advisor assigned"]
  },

  // ── Chemical Engineering (SEAS) ────────────────────────────
  "CHEME2410": {
    code: "CHEME E2410", name: "Intro to Chemical Engineering", credits: 3,
    offered: ["fall"], prereqs: ["CHEM1403","MATH1102"], difficulty: 3,
    dept: "CHEME", category: "major",
    description: "Material and energy balances for chemical processes.",
    professors: ["Ponisseril Somasundaran"]
  },
  "CHEME3520": {
    code: "CHEME E3520", name: "Chemical Engineering Thermodynamics", credits: 3,
    offered: ["spring"], prereqs: ["CHEME2410","MATH3027"], difficulty: 4,
    dept: "CHEME", category: "major",
    description: "Phase equilibrium, reaction equilibrium, equations of state.",
    professors: ["Ponisseril Somasundaran"]
  },
  "CHEME3720": {
    code: "CHEME E3720", name: "Transport Phenomena", credits: 3,
    offered: ["fall"], prereqs: ["CHEME2410","MATH3027"], difficulty: 4,
    dept: "CHEME", category: "major",
    description: "Heat, mass, and momentum transport; dimensional analysis.",
    professors: ["Ponisseril Somasundaran"]
  },
  "CHEME4410": {
    code: "CHEME E4410", name: "Chemical Reaction Engineering", credits: 3,
    offered: ["spring"], prereqs: ["CHEME3520","CHEME3720"], difficulty: 4,
    dept: "CHEME", category: "major",
    description: "Reactor design: batch, CSTR, PFR; heterogeneous catalysis.",
    professors: ["Ponisseril Somasundaran"]
  },
  "CHEME4999": {
    code: "CHEME E4999", name: "Senior Design Project (ChE)", credits: 3,
    offered: ["fall","spring"], prereqs: ["CHEME4410"], difficulty: 4,
    dept: "CHEME", category: "major",
    description: "Design and economics of an industrial chemical process.",
    professors: ["Advisor assigned"]
  },

  // ── Biomedical Engineering (SEAS) ─────────────────────────
  "BMEN1004": {
    code: "BMEN E1004", name: "Introduction to Biomedical Engineering", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "BMEN", category: "major",
    description: "BME design, biostatistics, physiology, biomechanics, medical imaging.",
    professors: ["Lance Kam", "Samuel Sia"]
  },
  "BMEN3110": {
    code: "BMEN E3110", name: "Biomedical Systems Engineering", credits: 3,
    offered: ["spring"], prereqs: ["BMEN1004","MATH3027"], difficulty: 3,
    dept: "BMEN", category: "major",
    description: "Physiological systems as engineering models; feedback control.",
    professors: ["Samuel Sia"]
  },
  "BMEN4550": {
    code: "BMEN E4550", name: "Biomechanics", credits: 3,
    offered: ["fall"], prereqs: ["BMEN1004","PHYS1401","MATH2010"], difficulty: 4,
    dept: "BMEN", category: "major",
    description: "Mechanics of cells, tissues, bones, joints, and cardiovascular system.",
    professors: ["Lance Kam"]
  },
  "BMEN4600": {
    code: "BMEN E4600", name: "Biosignals and Medical Imaging", credits: 3,
    offered: ["spring"], prereqs: ["ELEN3106","BMEN1004"], difficulty: 4,
    dept: "BMEN", category: "major",
    description: "ECG, EEG, MRI, CT, ultrasound; signal processing for biomedical applications.",
    professors: ["Andrew Laine"]
  },
  "BMEN4999": {
    code: "BMEN E4999", name: "Senior Design Project (BME)", credits: 3,
    offered: ["fall","spring"], prereqs: ["BMEN3110"], difficulty: 4,
    dept: "BMEN", category: "major",
    description: "Capstone biomedical engineering design and innovation project.",
    professors: ["Advisor assigned"]
  },

  // ── Operations Research / IEOR (SEAS) ─────────────────────
  "IEOR2500": {
    code: "IEOR E2500", name: "Introduction to Industrial Engineering", credits: 3,
    offered: ["fall"], prereqs: ["MATH1102"], difficulty: 2,
    dept: "IEOR", category: "major",
    description: "Systems modeling, optimization, production planning, supply chain.",
    professors: ["Karl Sigman"]
  },
  "IEOR3106": {
    code: "IEOR E3106", name: "Introduction to Operations Research", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH2010","STAT4109"], difficulty: 3,
    dept: "IEOR", category: "major",
    description: "Linear programming, network flows, integer programming, duality.",
    professors: ["Karl Sigman", "Daniel Lacker"]
  },
  "IEOR3600": {
    code: "IEOR E3600", name: "Stochastic Models", credits: 3,
    offered: ["spring"], prereqs: ["STAT4109"], difficulty: 4,
    dept: "IEOR", category: "major",
    description: "Markov chains, queuing theory, renewal theory, simulation.",
    professors: ["Karl Sigman"]
  },
  "IEOR4520": {
    code: "IEOR E4520", name: "Applied Machine Learning for OR", credits: 3,
    offered: ["spring"], prereqs: ["IEOR3106","STAT4109"], difficulty: 3,
    dept: "IEOR", category: "elective",
    description: "Regression, classification, clustering, reinforcement learning for OR.",
    professors: ["Daniel Lacker"]
  },
  "IEOR4999": {
    code: "IEOR E4999", name: "Senior Design Project (IEOR)", credits: 3,
    offered: ["fall","spring"], prereqs: ["IEOR3106"], difficulty: 4,
    dept: "IEOR", category: "major",
    description: "Applied operations research capstone project.",
    professors: ["Advisor assigned"]
  },

  // ── Statistics major courses ───────────────────────────────
  "STAT3001": {
    code: "STAT W3001", name: "Introduction to Statistical Inference", credits: 3,
    offered: ["fall","spring"], prereqs: ["STAT4109"], difficulty: 3,
    dept: "STAT", category: "major",
    description: "Point and interval estimation, hypothesis testing, regression.",
    professors: ["Tian Zheng", "Bodhi Sen"]
  },
  "STAT4205": {
    code: "STAT W4205", name: "Linear Regression Models", credits: 3,
    offered: ["fall"], prereqs: ["STAT3001","MATH2010"], difficulty: 3,
    dept: "STAT", category: "elective",
    description: "Simple and multiple regression, diagnostics, ANOVA, model selection.",
    professors: ["Tian Zheng"]
  },
  "STAT4315": {
    code: "STAT W4315", name: "Statistical Inference", credits: 3,
    offered: ["spring"], prereqs: ["STAT3001"], difficulty: 4,
    dept: "STAT", category: "elective",
    description: "Likelihood, Bayes, minimax, large-sample theory.",
    professors: ["Bodhi Sen"]
  },
  "STAT4224": {
    code: "STAT W4224", name: "Bayesian Statistics", credits: 3,
    offered: ["spring"], prereqs: ["STAT3001"], difficulty: 4,
    dept: "STAT", category: "elective",
    description: "Bayesian inference, prior specification, MCMC, hierarchical models.",
    professors: ["Liam Paninski"]
  },

  // ── Neuroscience and Behavior (NSBV) ───────────────────────
  "NSBV2000": {
    code: "NSBV UN2000", name: "Introduction to Neuroscience", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 3,
    dept: "NSBV", category: "major",
    description: "Neurons, synapses, sensory systems, motor control, cognition, and brain disorders.",
    professors: ["Darcy Kelley", "Liam Paninski", "Daphna Shohamy"]
  },
  "NSBV3001": {
    code: "NSBV W3001", name: "Cellular and Molecular Neuroscience", credits: 3,
    offered: ["fall"], prereqs: ["NSBV2000","BIOL1500"], difficulty: 4,
    dept: "NSBV", category: "major",
    description: "Ion channels, action potentials, synaptic transmission, receptor pharmacology.",
    professors: ["Darcy Kelley"]
  },
  "NSBV3002": {
    code: "NSBV W3002", name: "Systems Neuroscience", credits: 3,
    offered: ["spring"], prereqs: ["NSBV2000"], difficulty: 4,
    dept: "NSBV", category: "major",
    description: "Neural circuits underlying vision, hearing, motor control, and homeostasis.",
    professors: ["Liam Paninski", "Darcy Kelley"]
  },
  "NSBV3503": {
    code: "NSBV W3503", name: "Cognitive Neuroscience", credits: 3,
    offered: ["fall","spring"], prereqs: ["NSBV2000"], difficulty: 3,
    dept: "NSBV", category: "elective",
    description: "Neural basis of attention, memory, language, decision-making, and emotion.",
    professors: ["Daphna Shohamy", "Nim Tottenham"]
  },
  "NSBV4001": {
    code: "NSBV W4001", name: "Advanced Topics in Neuroscience", credits: 3,
    offered: ["spring"], prereqs: ["NSBV3001","NSBV3002"], difficulty: 4,
    dept: "NSBV", category: "major",
    description: "Current research in molecular, systems, and computational neuroscience.",
    professors: ["Liam Paninski"]
  },
  "NSBV4301": {
    code: "NSBV W4301", name: "Neuroscience Research", credits: 4,
    offered: ["fall","spring"], prereqs: ["NSBV3001"], difficulty: 4,
    dept: "NSBV", category: "major",
    description: "Original laboratory research with faculty mentor; written report and presentation.",
    professors: ["Advisor assigned"]
  },

  // ── Anthropology (ANTH) ────────────────────────────────────
  "ANTH1001": {
    code: "ANTH UN1001", name: "Introduction to Cultural Anthropology", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "ANTH", category: "major",
    description: "Culture, kinship, religion, economy, and politics across human societies.",
    professors: ["Mahmood Mamdani", "Rosalind Morris", "Brian Larkin"]
  },
  "ANTH2200": {
    code: "ANTH W2200", name: "Social Theory for Anthropologists", credits: 3,
    offered: ["fall"], prereqs: ["ANTH1001"], difficulty: 3,
    dept: "ANTH", category: "major",
    description: "Marx, Weber, Durkheim, Lévi-Strauss, Foucault, and feminist theory.",
    professors: ["Rosalind Morris", "Mahmood Mamdani"]
  },
  "ANTH3000": {
    code: "ANTH W3000", name: "Ethnographic Research Methods", credits: 3,
    offered: ["spring"], prereqs: ["ANTH1001"], difficulty: 3,
    dept: "ANTH", category: "major",
    description: "Participant observation, interviewing, archival research, and ethnographic writing.",
    professors: ["Brian Larkin"]
  },
  "ANTH3100": {
    code: "ANTH W3100", name: "Medical Anthropology", credits: 3,
    offered: ["spring"], prereqs: ["ANTH1001"], difficulty: 3,
    dept: "ANTH", category: "elective",
    description: "Illness, healing, biomedicine, and global health from a cultural perspective.",
    professors: ["Rosalind Morris"]
  },
  "ANTH3200": {
    code: "ANTH W3200", name: "Political Ecology", credits: 3,
    offered: ["fall"], prereqs: ["ANTH1001"], difficulty: 3,
    dept: "ANTH", category: "elective",
    description: "Environment, resources, power, and colonialism in anthropological perspective.",
    professors: ["Brian Larkin"]
  },
  "ANTH4001": {
    code: "ANTH W4001", name: "Senior Seminar in Anthropology", credits: 4,
    offered: ["fall","spring"], prereqs: ["ANTH2200","ANTH3000"], difficulty: 5,
    dept: "ANTH", category: "major",
    description: "Capstone research paper drawing on ethnographic or archival fieldwork.",
    professors: ["Mahmood Mamdani", "Rosalind Morris"]
  },

  // ── Film Studies (FILM) ────────────────────────────────────
  "FILM1001": {
    code: "FILM UN1001", name: "Introduction to Film Studies", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "FILM", category: "major",
    description: "Language of cinema: mise-en-scène, editing, sound, genre, and narrative.",
    professors: ["Annette Insdorf", "Richard Pena"]
  },
  "FILM2001": {
    code: "FILM W2001", name: "History of Cinema", credits: 3,
    offered: ["fall","spring"], prereqs: ["FILM1001"], difficulty: 3,
    dept: "FILM", category: "major",
    description: "From early silents to contemporary global cinema; major movements and directors.",
    professors: ["Annette Insdorf", "Richard Pena"]
  },
  "FILM2100": {
    code: "FILM W2100", name: "Film Theory and Criticism", credits: 3,
    offered: ["spring"], prereqs: ["FILM1001"], difficulty: 3,
    dept: "FILM", category: "major",
    description: "Psychoanalytic, feminist, postcolonial, and apparatus theories of cinema.",
    professors: ["Annette Insdorf"]
  },
  "FILM3001": {
    code: "FILM W3001", name: "Documentary Film", credits: 3,
    offered: ["fall"], prereqs: ["FILM2001"], difficulty: 3,
    dept: "FILM", category: "elective",
    description: "Modes of documentary representation from Grierson to contemporary web docs.",
    professors: ["Richard Pena"]
  },
  "FILM3100": {
    code: "FILM W3100", name: "World Cinema", credits: 3,
    offered: ["spring"], prereqs: ["FILM2001"], difficulty: 3,
    dept: "FILM", category: "elective",
    description: "New waves in Europe, Latin America, Asia, and Africa; transnational cinema.",
    professors: ["Richard Pena", "Annette Insdorf"]
  },
  "FILM4001": {
    code: "FILM W4001", name: "Senior Seminar in Film Studies", credits: 4,
    offered: ["fall"], prereqs: ["FILM2100"], difficulty: 4,
    dept: "FILM", category: "major",
    description: "Original critical research paper on a film, filmmaker, or theoretical problem.",
    professors: ["Annette Insdorf"]
  },

  // ── Art History (AHIS) ─────────────────────────────────────
  "AHIS1001": {
    code: "AHIS UN1001", name: "Introduction to Art History", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "AHIS", category: "major",
    description: "How to look at art: form, iconography, patronage, and cultural context.",
    professors: ["Barry Bergdoll", "Simon Schama"]
  },
  "AHIS2001": {
    code: "AHIS W2001", name: "Ancient and Medieval Art", credits: 3,
    offered: ["fall"], prereqs: ["AHIS1001"], difficulty: 3,
    dept: "AHIS", category: "major",
    description: "Egyptian, Greek, Roman, Byzantine, and Medieval European art and architecture.",
    professors: ["Barry Bergdoll"]
  },
  "AHIS2002": {
    code: "AHIS W2002", name: "Renaissance to Modern Art", credits: 3,
    offered: ["spring"], prereqs: ["AHIS1001"], difficulty: 3,
    dept: "AHIS", category: "major",
    description: "Italian Renaissance through Impressionism, Modernism, and the avant-garde.",
    professors: ["Simon Schama", "Barry Bergdoll"]
  },
  "AHIS3001": {
    code: "AHIS W3001", name: "Methods in Art History", credits: 3,
    offered: ["fall"], prereqs: ["AHIS1001"], difficulty: 3,
    dept: "AHIS", category: "major",
    description: "Connoisseurship, iconology, social history, semiotics, and postcolonial approaches.",
    professors: ["Barry Bergdoll"]
  },
  "AHIS3100": {
    code: "AHIS W3100", name: "Contemporary Art and Theory", credits: 3,
    offered: ["spring"], prereqs: ["AHIS2002"], difficulty: 3,
    dept: "AHIS", category: "elective",
    description: "Post-1960 art movements: minimalism, conceptualism, performance, digital media.",
    professors: ["Simon Schama"]
  },
  "AHIS4001": {
    code: "AHIS W4001", name: "Senior Seminar in Art History", credits: 4,
    offered: ["fall"], prereqs: ["AHIS3001"], difficulty: 4,
    dept: "AHIS", category: "major",
    description: "Original research paper using primary sources, museum objects, or archival material.",
    professors: ["Barry Bergdoll", "Simon Schama"]
  },

  // ── Urban Studies (Barnard) ────────────────────────────────
  "URBS3100": {
    code: "URBS BC3100", name: "Housing and Inequality", credits: 3,
    offered: ["spring"], prereqs: ["URBS1515"], difficulty: 3,
    dept: "URBS", category: "elective",
    description: "Affordable housing, gentrification, homelessness, and housing policy in American cities.",
    professors: ["David Madden", "Sudhir Venkatesh"]
  },

  // ── Dance (Barnard) ────────────────────────────────────────
  "DNCE1101": {
    code: "DNCE BC1101", name: "Introduction to Dance", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "DNCE", category: "major",
    description: "Dance as art form and cultural practice; technique, improvisation, and viewing.",
    professors: ["Donna Faye Burchfield"]
  },
  "DNCE2001": {
    code: "DNCE BC2001", name: "Dance History and Theory", credits: 3,
    offered: ["fall"], prereqs: ["DNCE1101"], difficulty: 2,
    dept: "DNCE", category: "major",
    description: "Western concert dance, global traditions, and critical frameworks for understanding movement.",
    professors: ["Donna Faye Burchfield"]
  },
  "DNCE3001": {
    code: "DNCE BC3001", name: "Choreography", credits: 3,
    offered: ["spring"], prereqs: ["DNCE2001"], difficulty: 3,
    dept: "DNCE", category: "major",
    description: "Principles of choreographic composition; improvisation to structured movement.",
    professors: ["Donna Faye Burchfield"]
  },
  "DNCE3200": {
    code: "DNCE BC3200", name: "Dance Technique and Performance", credits: 3,
    offered: ["fall","spring"], prereqs: ["DNCE1101"], difficulty: 3,
    dept: "DNCE", category: "elective",
    description: "Advanced technique and rehearsal for public performance.",
    professors: ["Donna Faye Burchfield"]
  },
  "DNCE4001": {
    code: "DNCE BC4001", name: "Senior Choreography Thesis", credits: 4,
    offered: ["fall","spring"], prereqs: ["DNCE3001"], difficulty: 4,
    dept: "DNCE", category: "major",
    description: "Culminating choreographic work or critical thesis with public presentation.",
    professors: ["Donna Faye Burchfield"]
  },

  // ── Theater (Barnard) ──────────────────────────────────────
  "THTR1101": {
    code: "THTR BC1101", name: "Introduction to Theater", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "THTR", category: "major",
    description: "Theater as live art: acting, directing, design, and the collaborative process.",
    professors: ["Anne Bogart"]
  },
  "THTR2001": {
    code: "THTR BC2001", name: "Theater History", credits: 3,
    offered: ["fall"], prereqs: ["THTR1101"], difficulty: 2,
    dept: "THTR", category: "major",
    description: "From Greek tragedy to Brecht and contemporary devised theater.",
    professors: ["Anne Bogart"]
  },
  "THTR3001": {
    code: "THTR BC3001", name: "Dramatic Structure and Script Analysis", credits: 3,
    offered: ["spring"], prereqs: ["THTR2001"], difficulty: 3,
    dept: "THTR", category: "major",
    description: "How plays work: action, conflict, time, and the dramaturgy of major playwrights.",
    professors: ["Anne Bogart"]
  },
  "THTR3200": {
    code: "THTR BC3200", name: "Acting", credits: 3,
    offered: ["fall","spring"], prereqs: ["THTR1101"], difficulty: 3,
    dept: "THTR", category: "elective",
    description: "Stanislavski-based technique, scene study, and physical theater practice.",
    professors: ["Anne Bogart"]
  },
  "THTR4001": {
    code: "THTR BC4001", name: "Senior Thesis Production", credits: 4,
    offered: ["fall","spring"], prereqs: ["THTR3001"], difficulty: 4,
    dept: "THTR", category: "major",
    description: "Direct, perform, or write an original production or critical thesis.",
    professors: ["Anne Bogart"]
  },

  // ── Music ─────────────────────────────────────────────────
  "MUSI1101": {
    code: "MUSI UN1101", name: "Music Humanities", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "MUSI", category: "major",
    description: "Listening-based survey of Western music from Gregorian chant to the 20th century. Core curriculum course for CC students.",
    professors: ["Various instructors"]
  },
  "MUSI2501": {
    code: "MUSI UN2501", name: "Music Theory I", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "MUSI", category: "major",
    description: "Fundamentals of tonal harmony: scales, intervals, triads, voice leading, basic counterpoint. Piano skills helpful.",
    professors: ["George Lewis"]
  },
  "MUSI2502": {
    code: "MUSI UN2502", name: "Music Theory II", credits: 3,
    offered: ["spring"], prereqs: ["MUSI2501"], difficulty: 3,
    dept: "MUSI", category: "major",
    description: "Advanced tonal harmony, secondary dominants, modulation, 20th century techniques.",
    professors: ["George Lewis"]
  },
  "MUSI3101": {
    code: "MUSI UN3101", name: "History of Western Music I", credits: 3,
    offered: ["fall"], prereqs: ["MUSI1101"], difficulty: 3,
    dept: "MUSI", category: "major",
    description: "Medieval, Renaissance, and Baroque music; analysis of major repertoire and composers.",
    professors: ["Anne Shreffler", "George Lewis"]
  },
  "MUSI3102": {
    code: "MUSI UN3102", name: "History of Western Music II", credits: 3,
    offered: ["spring"], prereqs: ["MUSI1101"], difficulty: 3,
    dept: "MUSI", category: "major",
    description: "Classical, Romantic, and 20th-century music; modernism, atonality, and contemporary practice.",
    professors: ["George Lewis"]
  },
  "MUSI3500": {
    code: "MUSI UN3500", name: "Music and Culture", credits: 3,
    offered: ["fall","spring"], prereqs: ["MUSI1101"], difficulty: 3,
    dept: "MUSI", category: "elective",
    description: "Topics in ethnomusicology, jazz history, popular music, and world music traditions.",
    professors: ["George Lewis", "Anne Shreffler"]
  },
  "MUSI4001": {
    code: "MUSI UN4001", name: "Senior Seminar in Music", credits: 4,
    offered: ["fall"], prereqs: ["MUSI3101"], difficulty: 4,
    dept: "MUSI", category: "major",
    description: "Capstone research seminar; original musicological or composition thesis.",
    professors: ["George Lewis"]
  },

  // ── Human Rights ───────────────────────────────────────────
  "HRTS1000": {
    code: "HRTS UN1000", name: "Introduction to Human Rights", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "HRTS", category: "major",
    description: "History and foundations of international human rights law, institutions, and advocacy.",
    professors: ["Mark Mazower", "Elazar Barkan"]
  },
  "HRTS3000": {
    code: "HRTS UN3000", name: "Human Rights Research Methods", credits: 3,
    offered: ["fall"], prereqs: ["HRTS1000"], difficulty: 3,
    dept: "HRTS", category: "major",
    description: "Qualitative and quantitative methods for human rights documentation and analysis.",
    professors: ["Elazar Barkan"]
  },
  "HRTS3100": {
    code: "HRTS UN3100", name: "International Human Rights Law", credits: 3,
    offered: ["spring"], prereqs: ["HRTS1000"], difficulty: 3,
    dept: "HRTS", category: "major",
    description: "UN system, regional mechanisms, international criminal law, genocide convention.",
    professors: ["Mark Mazower"]
  },
  "HRTS3200": {
    code: "HRTS UN3200", name: "Comparative Genocide Studies", credits: 3,
    offered: ["spring"], prereqs: ["HRTS1000"], difficulty: 3,
    dept: "HRTS", category: "elective",
    description: "Holocaust, Rwanda, Cambodia, Bosnia; prevention, accountability, and memory.",
    professors: ["Elazar Barkan", "Mark Mazower"]
  },
  "HRTS4001": {
    code: "HRTS UN4001", name: "Human Rights Capstone", credits: 4,
    offered: ["fall","spring"], prereqs: ["HRTS3000"], difficulty: 4,
    dept: "HRTS", category: "major",
    description: "Original policy research paper on a human rights problem; field engagement with NGOs or UN agencies.",
    professors: ["Elazar Barkan"]
  },

  // ── Linguistics ────────────────────────────────────────────
  "LING1101": {
    code: "LING UN1101", name: "Language and Linguistics", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "LING", category: "major",
    description: "Introduction to the scientific study of language: phonology, morphology, syntax, semantics, and language acquisition.",
    professors: ["John McWhorter", "Maria Polinsky"]
  },
  "LING3101": {
    code: "LING UN3101", name: "Syntax", credits: 3,
    offered: ["fall"], prereqs: ["LING1101"], difficulty: 4,
    dept: "LING", category: "major",
    description: "Formal syntax: phrase structure, movement, binding theory, generative grammar. Technically demanding.",
    professors: ["Maria Polinsky"]
  },
  "LING3102": {
    code: "LING UN3102", name: "Phonology", credits: 3,
    offered: ["spring"], prereqs: ["LING1101"], difficulty: 3,
    dept: "LING", category: "major",
    description: "Sound systems of human languages: feature theory, syllable structure, phonological rules, optimality theory.",
    professors: ["Maria Polinsky"]
  },
  "LING3200": {
    code: "LING UN3200", name: "Semantics", credits: 3,
    offered: ["spring"], prereqs: ["LING1101"], difficulty: 3,
    dept: "LING", category: "elective",
    description: "Meaning in natural language: truth conditions, compositionality, quantification, modality, presupposition.",
    professors: ["John McWhorter"]
  },
  "LING4001": {
    code: "LING UN4001", name: "Senior Thesis in Linguistics", credits: 4,
    offered: ["fall","spring"], prereqs: ["LING3101","LING3102"], difficulty: 4,
    dept: "LING", category: "major",
    description: "Original linguistic analysis of a grammatical or typological phenomenon.",
    professors: ["Maria Polinsky"]
  },

  // ── Chemistry major (upper-level) ─────────────────────────
  "CHEM2045": {
    code: "CHEM UN2045", name: "Organic Chemistry I", credits: 3,
    offered: ["fall","spring"], prereqs: ["CHEM1403"], difficulty: 4,
    dept: "CHEM", category: "science",
    description: "Structure, bonding, and reactions of organic compounds: alkanes, alkenes, alkynes, stereochemistry, substitution, and elimination.",
    professors: ["Scott Snyder", "Tristan Lambert"]
  },
  "CHEM2046": {
    code: "CHEM UN2046", name: "Organic Chemistry II", credits: 3,
    offered: ["spring"], prereqs: ["CHEM2045"], difficulty: 4,
    dept: "CHEM", category: "science",
    description: "Aromatic compounds, carbonyl chemistry, amines, polymers, spectroscopy (NMR, IR, MS), and multi-step synthesis.",
    professors: ["Tristan Lambert"]
  },
  "CHEM3080": {
    code: "CHEM UN3080", name: "Physical Chemistry I", credits: 3,
    offered: ["fall"], prereqs: ["CHEM1403","MATH3027","PHYS1402"], difficulty: 5,
    dept: "CHEM", category: "science",
    description: "Quantum mechanics, atomic and molecular structure, spectroscopy. One of the most mathematically demanding chemistry courses.",
    professors: ["Ann McDermott"]
  },
  "CHEM4100": {
    code: "CHEM UN4100", name: "Advanced Inorganic Chemistry", credits: 3,
    offered: ["spring"], prereqs: ["CHEM2046","CHEM3080"], difficulty: 4,
    dept: "CHEM", category: "elective",
    description: "Symmetry, group theory, coordination chemistry, bioinorganic applications.",
    professors: ["Ann McDermott"]
  },
  "CHEM4250": {
    code: "CHEM UN4250", name: "Senior Research in Chemistry", credits: 4,
    offered: ["fall","spring"], prereqs: ["CHEM2046"], difficulty: 4,
    dept: "CHEM", category: "major",
    description: "Laboratory research with faculty; contributes to publication-level chemistry research. Written thesis required.",
    professors: ["Advisor assigned"]
  },

  // ── Civil Engineering and Engineering Mechanics (CIEN) ─────
  "CIEN3010": {
    code: "CIEN E3010", name: "Engineering Mechanics: Statics", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHYS1401","MATH1102"], difficulty: 3,
    dept: "CIEN", category: "major",
    description: "Equilibrium of particles and rigid bodies. Resultants, centroids, moments of inertia, friction, and trusses.",
    professors: ["Kuo-Wei Liao", "Raimondo Betti"]
  },
  "CIEN3030": {
    code: "CIEN E3030", name: "Mechanics of Solids", credits: 3,
    offered: ["fall","spring"], prereqs: ["CIEN3010","MATH1201"], difficulty: 4,
    dept: "CIEN", category: "major",
    description: "Stress, strain, axial loading, torsion, bending of beams, shear flow, and column buckling.",
    professors: ["Raimondo Betti", "Huiming Yin"]
  },
  "CIEN3210": {
    code: "CIEN E3210", name: "Fluid Mechanics", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH2010","PHYS1401"], difficulty: 4,
    dept: "CIEN", category: "major",
    description: "Fluid statics and dynamics, continuity, Bernoulli and Navier-Stokes equations, pipe flow, and open channels.",
    professors: ["Patricia Culligan", "Upmanu Lall"]
  },
  "CIEN4200": {
    code: "CIEN E4200", name: "Structural Analysis", credits: 3,
    offered: ["fall"], prereqs: ["CIEN3030"], difficulty: 4,
    dept: "CIEN", category: "major",
    description: "Statically determinate and indeterminate structures. Force method, displacement method, influence lines.",
    professors: ["Raimondo Betti", "Kuo-Wei Liao"]
  },
  "CIEN4700": {
    code: "CIEN E4700", name: "Civil Engineering Systems", credits: 3,
    offered: ["spring"], prereqs: ["CIEN3210"], difficulty: 3,
    dept: "CIEN", category: "major",
    description: "Systems analysis applied to civil infrastructure: transportation, water, and energy networks. Optimization and risk.",
    professors: ["Patricia Culligan", "Upmanu Lall"]
  },
  "CIEN4999": {
    code: "CIEN E4999", name: "Civil Engineering Senior Design", credits: 3,
    offered: ["spring"], prereqs: ["CIEN4200"], difficulty: 3,
    dept: "CIEN", category: "major",
    description: "Capstone design project integrating structural, environmental, and systems engineering principles.",
    professors: ["Advisor assigned"]
  },

  // ── Earth and Environmental Engineering (EAEE) ──────────────
  "EAEE2100": {
    code: "EAEE E2100", name: "Earth Systems Engineering and Management", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "EAEE", category: "science",
    description: "Introduction to the Earth system and engineering design for sustainability. Climate, energy, and environmental policy.",
    professors: ["Dickson Despommier", "Klaus Lackner"]
  },
  "EAEE3100": {
    code: "EAEE E3100", name: "Environmental Data Analysis", credits: 3,
    offered: ["fall"], prereqs: ["MATH2010","STAT1201"], difficulty: 3,
    dept: "EAEE", category: "science",
    description: "Statistical tools for environmental engineering: regression, time series, risk assessment, and Monte Carlo methods.",
    professors: ["Upmanu Lall", "Wade McGillis"]
  },
  "EAEE4000": {
    code: "EAEE E4000", name: "Fate and Transport in Environmental Systems", credits: 3,
    offered: ["spring"], prereqs: ["EAEE3100","CIEN3210"], difficulty: 4,
    dept: "EAEE", category: "major",
    description: "Mass transport of contaminants in air, water, and soil. Advection, dispersion, chemical kinetics, and fate modeling.",
    professors: ["Wade McGillis", "Upmanu Lall"]
  },
  "EAEE4150": {
    code: "EAEE E4150", name: "Air and Water Quality Engineering", credits: 3,
    offered: ["fall"], prereqs: ["EAEE4000"], difficulty: 3,
    dept: "EAEE", category: "major",
    description: "Air pollution control, water treatment processes, and regulatory frameworks for environmental quality.",
    professors: ["Klaus Lackner", "Dickson Despommier"]
  },
  "EAEE4999": {
    code: "EAEE E4999", name: "Senior Project in Earth and Environmental Engineering", credits: 3,
    offered: ["spring"], prereqs: ["EAEE4000"], difficulty: 3,
    dept: "EAEE", category: "major",
    description: "Capstone research or design project in earth and environmental engineering with written report.",
    professors: ["Advisor assigned"]
  },

  // ── Applied Physics (APPH) ───────────────────────────────────
  "APPH3300": {
    code: "APPH E3300", name: "Quantum Mechanics II", credits: 3,
    offered: ["spring"], prereqs: ["PHYS2801","MATH3027"], difficulty: 5,
    dept: "APPH", category: "major",
    description: "Perturbation theory, identical particles, scattering, quantum entanglement, and applications to solid-state systems.",
    professors: ["Francesco Lin", "Brian Cole"]
  },
  "APPH4200": {
    code: "APPH E4200", name: "Condensed Matter Physics", credits: 3,
    offered: ["fall"], prereqs: ["APPH3300","PHYS4018"], difficulty: 5,
    dept: "APPH", category: "major",
    description: "Crystal structure, phonons, free electron model, band theory, semiconductors, and superconductivity.",
    professors: ["Abhay Pasupathy", "Cory Dean"]
  },
  "APPH4500": {
    code: "APPH E4500", name: "Advanced Laboratory in Applied Physics", credits: 3,
    offered: ["fall","spring"], prereqs: ["PHYS4003"], difficulty: 3,
    dept: "APPH", category: "major",
    description: "Hands-on experiments in optics, nuclear physics, condensed matter, and electronics. Emphasis on scientific writing.",
    professors: ["Instructor TBA"]
  },

  // ── Additional Biology (Barnard Biology major) ─────────────
  "BIOL3600": {
    code: "BIOL W3600", name: "Cell Biology", credits: 3,
    offered: ["spring"], prereqs: ["BIOL1500","CHEM1403"], difficulty: 4,
    dept: "BIOL", category: "science",
    description: "Membrane structure, cytoskeleton, cell signaling, mitosis, and cancer biology.",
    professors: ["Molly Przeworski", "Darcy Kelley"]
  },
  "BIOL4001": {
    code: "BIOL W4001", name: "Senior Research Seminar in Biology", credits: 4,
    offered: ["fall","spring"], prereqs: ["BIOL2401"], difficulty: 4,
    dept: "BIOL", category: "science",
    description: "Original laboratory or computational biology research with faculty mentor.",
    professors: ["Advisor assigned"]
  },

  // ── African American & African Diaspora Studies (AFAS) ─────
  "AFAS1001": {
    code: "AFAS UN1001", name: "Introduction to African-American Studies", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "AFAS", category: "major",
    description: "Interdisciplinary gateway to the history, culture, and politics of the African diaspora.",
    professors: ["TBA"]
  },
  "AFAS1002": {
    code: "AFAS UN1002", name: "Major Debates in African-American Studies", credits: 4,
    offered: ["spring"], prereqs: ["AFAS1001"], difficulty: 2,
    dept: "AFAS", category: "major",
    description: "Key intellectual debates that have shaped the field of African-American studies.",
    professors: ["TBA"]
  },
  "AFAS3030": {
    code: "AFAS UN3030", name: "African-American Music", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "AFAS", category: "elective",
    description: "African-American musical traditions from spirituals through jazz, soul, and hip hop.",
    professors: ["TBA"]
  },
  "AFAS3936": {
    code: "AFAS UN3936", name: "Black Intellectuals Seminar", credits: 4,
    offered: ["spring"], prereqs: ["AFAS1001"], difficulty: 3,
    dept: "AFAS", category: "elective",
    description: "Seminar on major Black intellectuals and their political and cultural thought.",
    professors: ["TBA"]
  },
  "AFAS4035": {
    code: "AFAS GU4035", name: "Criminal Justice and the Carceral State", credits: 4,
    offered: ["fall"], prereqs: ["AFAS1001"], difficulty: 3,
    dept: "AFAS", category: "elective",
    description: "Race, criminal justice, and mass incarceration in the twentieth-century United States.",
    professors: ["TBA"]
  },
  "AFAS4080": {
    code: "AFAS GU4080", name: "Black Feminist Imaginaries", credits: 4,
    offered: ["spring"], prereqs: ["AFAS1001"], difficulty: 3,
    dept: "AFAS", category: "elective",
    description: "Black feminist practices and poethics across literature, art, and theory.",
    professors: ["TBA"]
  },
  "AFAS3940": {
    code: "AFAS UN3940", name: "Senior Thesis Seminar", credits: 4,
    offered: ["fall"], prereqs: ["AFAS1002"], difficulty: 4,
    dept: "AFAS", category: "major",
    description: "Capstone research seminar for African-American studies majors.",
    professors: ["Advisor assigned"]
  },

  // ── American Studies (AMST) ────────────────────────────────
  "AMST1010": {
    code: "AMST UN1010", name: "Introduction to American Studies", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "AMST", category: "major",
    description: "Interdisciplinary exploration of American values, institutions, and cultural expression.",
    professors: ["TBA"]
  },
  "AMST3933": {
    code: "AMST UN3933", name: "The American Graphic Novel", credits: 4,
    offered: ["spring"], prereqs: ["AMST1010"], difficulty: 3,
    dept: "AMST", category: "elective",
    description: "Seminar on the graphic novel as an American literary and visual form.",
    professors: ["TBA"]
  },
  "AMST3937": {
    code: "AMST UN3937", name: "American Journalism and Democracy", credits: 4,
    offered: ["fall"], prereqs: ["AMST1010"], difficulty: 3,
    dept: "AMST", category: "elective",
    description: "Seminar on the press and democratic life in the United States.",
    professors: ["TBA"]
  },
  "AMST3943": {
    code: "AMST UN3943", name: "Free Speech in American Society", credits: 4,
    offered: ["spring"], prereqs: ["AMST1010"], difficulty: 3,
    dept: "AMST", category: "elective",
    description: "Seminar on the history and law of free expression in America.",
    professors: ["TBA"]
  },
  "AMST3998": {
    code: "AMST UN3995", name: "Senior Thesis in American Studies", credits: 4,
    offered: ["fall","spring"], prereqs: ["AMST1010"], difficulty: 4,
    dept: "AMST", category: "major",
    description: "Independent senior thesis in American studies.",
    professors: ["Advisor assigned"]
  },

  // ── Astronomy (ASTR) ───────────────────────────────────────
  "MATH1202": {
    code: "MATH UN1202", name: "Calculus IV", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1201"], difficulty: 3,
    dept: "MATH", category: "math",
    description: "Multiple integrals, vector calculus, Green's and Stokes' theorems.",
    professors: ["TBA"]
  },
  "ASTR2001": {
    code: "ASTR UN2001", name: "Introduction to Astrophysics I", credits: 3,
    offered: ["fall"], prereqs: ["PHYS1401","MATH1102"], difficulty: 3,
    dept: "ASTR", category: "science",
    description: "Stellar physics: structure, evolution, and death of stars.",
    professors: ["TBA"]
  },
  "ASTR2002": {
    code: "ASTR UN2002", name: "Introduction to Astrophysics II", credits: 3,
    offered: ["spring"], prereqs: ["ASTR2001"], difficulty: 3,
    dept: "ASTR", category: "science",
    description: "Galaxies, large-scale structure, and cosmology.",
    professors: ["TBA"]
  },
  "ASTR3102": {
    code: "ASTR UN3102", name: "Planetary Dynamics and Solar System Physics", credits: 3,
    offered: ["spring"], prereqs: ["ASTR2001"], difficulty: 3,
    dept: "ASTR", category: "elective",
    description: "Orbital dynamics, planetary formation, and the physics of the solar system.",
    professors: ["TBA"]
  },
  "ASTR3273": {
    code: "ASTR UN3273", name: "High Energy Astrophysics", credits: 3,
    offered: ["fall"], prereqs: ["ASTR2002"], difficulty: 4,
    dept: "ASTR", category: "elective",
    description: "Neutron stars, black holes, and high-energy phenomena in the universe.",
    professors: ["TBA"]
  },
  "ASTR3646": {
    code: "ASTR UN3646", name: "Observational Astronomy", credits: 3,
    offered: ["fall"], prereqs: ["ASTR2001"], difficulty: 3,
    dept: "ASTR", category: "elective",
    description: "Ground-based observational techniques, instrumentation, and data analysis.",
    professors: ["TBA"]
  },
  "ASTR4260": {
    code: "ASTR GU4260", name: "Modeling the Universe", credits: 3,
    offered: ["spring"], prereqs: ["ASTR2002"], difficulty: 4,
    dept: "ASTR", category: "elective",
    description: "Scientific computing applied to astrophysical simulation and modeling.",
    professors: ["TBA"]
  },
  "ASTR3997": {
    code: "ASTR UN3997", name: "Senior Thesis in Astronomy", credits: 3,
    offered: ["fall","spring"], prereqs: ["ASTR2002"], difficulty: 4,
    dept: "ASTR", category: "major",
    description: "Independent senior research in astronomy or astrophysics.",
    professors: ["Advisor assigned"]
  },

  // ── Classics (LATN/GREK/CLCV) ──────────────────────────────
  "LATN1101": {
    code: "LATN UN1101", name: "Elementary Latin I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "CLAS", category: "major",
    description: "Introduction to Latin grammar and reading.",
    professors: ["TBA"]
  },
  "LATN1102": {
    code: "LATN UN1102", name: "Elementary Latin II", credits: 4,
    offered: ["spring"], prereqs: ["LATN1101"], difficulty: 2,
    dept: "CLAS", category: "major",
    description: "Completion of Latin grammar; graded readings from Latin prose.",
    professors: ["TBA"]
  },
  "LATN2101": {
    code: "LATN UN2101", name: "Intermediate Latin I", credits: 4,
    offered: ["fall"], prereqs: ["LATN1102"], difficulty: 3,
    dept: "CLAS", category: "major",
    description: "Readings from Catullus and Cicero with grammar review.",
    professors: ["TBA"]
  },
  "LATN2102": {
    code: "LATN UN2102", name: "Intermediate Latin II", credits: 4,
    offered: ["spring"], prereqs: ["LATN2101"], difficulty: 3,
    dept: "CLAS", category: "major",
    description: "Readings in Latin poetry and prose at the intermediate level.",
    professors: ["TBA"]
  },
  "GREK2102": {
    code: "GREK UN2102", name: "Intermediate Greek II", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "major",
    description: "Intermediate readings in ancient Greek poetry and prose.",
    professors: ["TBA"]
  },
  "CLCV3059": {
    code: "CLCV UN3059", name: "Worlds of Alexander the Great", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "Alexander's conquests and the Hellenistic world, in translation.",
    professors: ["TBA"]
  },
  "CLCV3070": {
    code: "CLCV UN3070", name: "Polis: The Ancient Greek City-State", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "Biography of the Greek polis as a political and cultural form.",
    professors: ["TBA"]
  },
  "CLAS3996": {
    code: "CLAS UN3996", name: "Major Seminar in Classics", credits: 4,
    offered: ["fall"], prereqs: ["LATN2102"], difficulty: 4,
    dept: "CLAS", category: "major",
    description: "Methods seminar preparing majors for senior thesis research.",
    professors: ["Advisor assigned"]
  },
  "CLAS3998": {
    code: "CLAS UN3998", name: "Senior Thesis in Classics", credits: 4,
    offered: ["spring"], prereqs: ["CLAS3996"], difficulty: 4,
    dept: "CLAS", category: "major",
    description: "Independent senior thesis in classics.",
    professors: ["Advisor assigned"]
  },

  // ── Religion (RELI) ────────────────────────────────────────
  "RELI1612": {
    code: "RELI UN1612", name: "Religion and the History of Hip Hop", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "RELI", category: "major",
    description: "Gateway course using hip hop to explore religion as an analytical category.",
    professors: ["TBA"]
  },
  "RELI2305": {
    code: "RELI UN2305", name: "Islam", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "RELI", category: "major",
    description: "Survey of Islamic thought, practice, and history.",
    professors: ["TBA"]
  },
  "RELI2405": {
    code: "RELI UN2405", name: "Chinese Religious Traditions", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "RELI", category: "major",
    description: "Confucian, Daoist, and Buddhist traditions in China.",
    professors: ["TBA"]
  },
  "RELI3199": {
    code: "RELI UN3199", name: "Theory of Religion", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "RELI", category: "major",
    description: "Required theory course: classic and contemporary approaches to the study of religion.",
    professors: ["TBA"]
  },
  "RELI3314": {
    code: "RELI UN3314", name: "Qur'an", credits: 4,
    offered: ["spring"], prereqs: ["RELI2305"], difficulty: 3,
    dept: "RELI", category: "elective",
    description: "The Qur'an as scripture, literature, and object of interpretation.",
    professors: ["TBA"]
  },
  "RELI4217": {
    code: "RELI GU4217", name: "American Religions in Extremis", credits: 4,
    offered: ["spring"], prereqs: ["RELI3199"], difficulty: 4,
    dept: "RELI", category: "major",
    description: "Advanced seminar on new and radical religious movements in America.",
    professors: ["TBA"]
  },

  // ── French (FREN) ──────────────────────────────────────────
  "FREN1101": {
    code: "FREN UN1101", name: "Elementary French I", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "FREN", category: "major",
    description: "Introduction to French language and francophone cultures.",
    professors: ["TBA"]
  },
  "FREN1102": {
    code: "FREN UN1102", name: "Elementary French II", credits: 4,
    offered: ["fall","spring"], prereqs: ["FREN1101"], difficulty: 2,
    dept: "FREN", category: "major",
    description: "Completion of elementary French grammar and communication.",
    professors: ["TBA"]
  },
  "FREN2101": {
    code: "FREN UN2101", name: "Intermediate French I", credits: 4,
    offered: ["fall","spring"], prereqs: ["FREN1102"], difficulty: 2,
    dept: "FREN", category: "major",
    description: "Intermediate French language and culture.",
    professors: ["TBA"]
  },
  "FREN2102": {
    code: "FREN UN2102", name: "Intermediate French II", credits: 4,
    offered: ["fall","spring"], prereqs: ["FREN2101"], difficulty: 2,
    dept: "FREN", category: "major",
    description: "Completion of the intermediate French sequence.",
    professors: ["TBA"]
  },
  "FREN3405": {
    code: "FREN UN3405", name: "Read, Think, Write in French", credits: 3,
    offered: ["fall","spring"], prereqs: ["FREN2102"], difficulty: 3,
    dept: "FREN", category: "major",
    description: "Advanced training in reading, analysis, and composition in French.",
    professors: ["TBA"]
  },
  "FREN3409": {
    code: "FREN UN3409", name: "Intro to French & Francophone Studies: History", credits: 3,
    offered: ["fall"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "major",
    description: "Historical foundations of France and the francophone world.",
    professors: ["TBA"]
  },
  "FREN3410": {
    code: "FREN UN3410", name: "Intro to French & Francophone Studies: Literature", credits: 3,
    offered: ["spring"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "major",
    description: "Survey of French and francophone literature.",
    professors: ["TBA"]
  },
  "FREN3503": {
    code: "FREN UN3503", name: "Enlightenment / Counter-Enlightenment", credits: 3,
    offered: ["fall"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "French Enlightenment thought and its critics (pre-1800 literature).",
    professors: ["TBA"]
  },
  "FREN3600": {
    code: "FREN UN3600", name: "Introduction to French Civilization", credits: 3,
    offered: ["spring"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "French cultural and institutional history.",
    professors: ["TBA"]
  },
  "FREN3714": {
    code: "FREN UN3714", name: "1914–2014: A Century of Literatures in French", credits: 3,
    offered: ["fall"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "Twentieth- and twenty-first-century literatures in French.",
    professors: ["TBA"]
  },
  "FREN3242": {
    code: "FREN UN3242", name: "French Language, Society, Culture Through Paris", credits: 3,
    offered: ["spring"], prereqs: ["FREN2102"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "Paris as a lens on French language and society.",
    professors: ["TBA"]
  },
  "FREN3995": {
    code: "FREN UN3995", name: "Senior Seminar in French", credits: 3,
    offered: ["fall"], prereqs: ["FREN3409","FREN3410"], difficulty: 4,
    dept: "FREN", category: "major",
    description: "Capstone seminar for French and francophone studies majors.",
    professors: ["Advisor assigned"]
  },

  // ── Italian (ITAL) ─────────────────────────────────────────
  "ITAL1101": {
    code: "ITAL UN1101", name: "Elementary Italian I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "ITAL", category: "major",
    description: "Introduction to Italian language and culture.",
    professors: ["TBA"]
  },
  "ITAL1102": {
    code: "ITAL UN1102", name: "Elementary Italian II", credits: 4,
    offered: ["spring"], prereqs: ["ITAL1101"], difficulty: 2,
    dept: "ITAL", category: "major",
    description: "Completion of elementary Italian.",
    professors: ["TBA"]
  },
  "ITAL2101": {
    code: "ITAL UN2101", name: "Intermediate Italian I", credits: 4,
    offered: ["fall"], prereqs: ["ITAL1102"], difficulty: 2,
    dept: "ITAL", category: "major",
    description: "Intermediate Italian language.",
    professors: ["TBA"]
  },
  "ITAL2102": {
    code: "ITAL UN2102", name: "Intermediate Italian II", credits: 4,
    offered: ["spring"], prereqs: ["ITAL2101"], difficulty: 2,
    dept: "ITAL", category: "major",
    description: "Completion of intermediate Italian.",
    professors: ["TBA"]
  },
  "ITAL3335": {
    code: "ITAL UN3335", name: "Advanced Italian I", credits: 3,
    offered: ["fall"], prereqs: ["ITAL2102"], difficulty: 3,
    dept: "ITAL", category: "major",
    description: "Advanced Italian language through cultural content.",
    professors: ["TBA"]
  },
  "ITAL3333": {
    code: "ITAL UN3333", name: "Introduction to Italian Literature I", credits: 3,
    offered: ["fall"], prereqs: ["ITAL2102"], difficulty: 3,
    dept: "ITAL", category: "major",
    description: "Italian literature from its origins through the Renaissance, taught in Italian.",
    professors: ["TBA"]
  },
  "ITAL3334": {
    code: "ITAL UN3334", name: "Introduction to Italian Literature II", credits: 3,
    offered: ["spring"], prereqs: ["ITAL3333"], difficulty: 3,
    dept: "ITAL", category: "major",
    description: "Italian literature from the Enlightenment to the present, taught in Italian.",
    professors: ["TBA"]
  },
  "ITAL4091": {
    code: "ITAL GU4091", name: "Dante's Divina Commedia I", credits: 3,
    offered: ["fall"], prereqs: ["ITAL3333"], difficulty: 4,
    dept: "ITAL", category: "elective",
    description: "Close reading of the Inferno and Purgatorio.",
    professors: ["TBA"]
  },
  "ITAL4502": {
    code: "ITAL GU4502", name: "Italian Cultural Studies I", credits: 3,
    offered: ["fall"], prereqs: ["ITAL2102"], difficulty: 3,
    dept: "ITAL", category: "elective",
    description: "Italian cultural history, taught in English.",
    professors: ["TBA"]
  },
  "ITAL4499": {
    code: "CLIA GU4499", name: "Mediterranean Humanities I", credits: 3,
    offered: ["spring"], prereqs: ["ITAL2102"], difficulty: 3,
    dept: "ITAL", category: "elective",
    description: "The Mediterranean as a literary and cultural space.",
    professors: ["TBA"]
  },
  "ITAL3993": {
    code: "ITAL UN3993", name: "Senior Thesis / Tutorial in Italian", credits: 3,
    offered: ["spring"], prereqs: ["ITAL3334"], difficulty: 4,
    dept: "ITAL", category: "major",
    description: "Independent senior research in Italian studies.",
    professors: ["Advisor assigned"]
  },

  // ── German (GERM) ──────────────────────────────────────────
  "GERM1101": {
    code: "GERM UN1101", name: "Elementary German I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "GERM", category: "major",
    description: "Introduction to German language and culture.",
    professors: ["TBA"]
  },
  "GERM1102": {
    code: "GERM UN1102", name: "Elementary German II", credits: 4,
    offered: ["spring"], prereqs: ["GERM1101"], difficulty: 2,
    dept: "GERM", category: "major",
    description: "Completion of elementary German.",
    professors: ["TBA"]
  },
  "GERM2101": {
    code: "GERM UN2101", name: "Intermediate German I", credits: 4,
    offered: ["fall"], prereqs: ["GERM1102"], difficulty: 2,
    dept: "GERM", category: "major",
    description: "Intermediate German language.",
    professors: ["TBA"]
  },
  "GERM2102": {
    code: "GERM UN2102", name: "Intermediate German II", credits: 4,
    offered: ["spring"], prereqs: ["GERM2101"], difficulty: 2,
    dept: "GERM", category: "major",
    description: "Completion of intermediate German.",
    professors: ["TBA"]
  },
  "GERM3001": {
    code: "GERM UN3001", name: "Advanced German I", credits: 3,
    offered: ["fall"], prereqs: ["GERM2102"], difficulty: 3,
    dept: "GERM", category: "major",
    description: "Advanced German language with a Berlin focus.",
    professors: ["TBA"]
  },
  "GERM3333": {
    code: "GERM UN3333", name: "Introduction to German Literary Studies", credits: 3,
    offered: ["fall"], prereqs: ["GERM2102"], difficulty: 3,
    dept: "GERM", category: "major",
    description: "Short literary texts and methodological approaches to German literature.",
    professors: ["TBA"]
  },
  "GERM3442": {
    code: "GERM UN3442", name: "18th-Century German Literature", credits: 3,
    offered: ["fall"], prereqs: ["GERM3333"], difficulty: 3,
    dept: "GERM", category: "elective",
    description: "Enlightenment, Sturm und Drang, and Weimar classicism.",
    professors: ["TBA"]
  },
  "GERM3443": {
    code: "GERM UN3443", name: "19th-Century German Literature", credits: 3,
    offered: ["spring"], prereqs: ["GERM3333"], difficulty: 3,
    dept: "GERM", category: "elective",
    description: "Romanticism through realism in German literature.",
    professors: ["TBA"]
  },
  "GERM3444": {
    code: "GERM UN3444", name: "20th–21st Century German Literature", credits: 3,
    offered: ["spring"], prereqs: ["GERM3333"], difficulty: 3,
    dept: "GERM", category: "elective",
    description: "Modernism to the present in German-language literature.",
    professors: ["TBA"]
  },
  "GERM4170": {
    code: "GERM GU4170", name: "Kafka", credits: 3,
    offered: ["fall"], prereqs: ["GERM3333"], difficulty: 3,
    dept: "GERM", category: "elective",
    description: "Seminar on Kafka's fiction, taught in English.",
    professors: ["TBA"]
  },
  "GERM4350": {
    code: "GERM GU4350", name: "German Film After 1945", credits: 3,
    offered: ["spring"], prereqs: ["GERM3333"], difficulty: 3,
    dept: "GERM", category: "elective",
    description: "Postwar and contemporary German cinema.",
    professors: ["TBA"]
  },
  "GERM4448": {
    code: "GERM GU4448", name: "Poetics of Childhood", credits: 3,
    offered: ["spring"], prereqs: ["GERM3333"], difficulty: 3,
    dept: "GERM", category: "elective",
    description: "Childhood in German literature and thought.",
    professors: ["TBA"]
  },

  // ── Russian / Slavic (RUSS) ────────────────────────────────
  "RUSS1101": {
    code: "RUSS UN1101", name: "First-Year Russian I", credits: 5,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Introduction to Russian language.",
    professors: ["TBA"]
  },
  "RUSS1102": {
    code: "RUSS UN1102", name: "First-Year Russian II", credits: 5,
    offered: ["spring"], prereqs: ["RUSS1101"], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Completion of first-year Russian.",
    professors: ["TBA"]
  },
  "RUSS2101": {
    code: "RUSS UN2101", name: "Second-Year Russian I", credits: 5,
    offered: ["fall"], prereqs: ["RUSS1102"], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Intermediate Russian language.",
    professors: ["TBA"]
  },
  "RUSS2102": {
    code: "RUSS UN2102", name: "Second-Year Russian II", credits: 5,
    offered: ["spring"], prereqs: ["RUSS2101"], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Completion of second-year Russian.",
    professors: ["TBA"]
  },
  "RUSS3101": {
    code: "RUSS UN3101", name: "Third-Year Russian I", credits: 4,
    offered: ["fall"], prereqs: ["RUSS2102"], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Advanced Russian language and readings.",
    professors: ["TBA"]
  },
  "RUSS3102": {
    code: "RUSS UN3102", name: "Third-Year Russian II", credits: 4,
    offered: ["spring"], prereqs: ["RUSS3101"], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Completion of third-year Russian.",
    professors: ["TBA"]
  },
  "RUSS3220": {
    code: "RUSS UN3220", name: "Literature and Empire", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Nineteenth-century Russian literature survey, in translation.",
    professors: ["TBA"]
  },
  "RUSS3221": {
    code: "RUSS UN3221", name: "Literature and Revolution", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "RUSS", category: "major",
    description: "Twentieth-century Russian literature survey, in translation.",
    professors: ["TBA"]
  },
  "RUSS4039": {
    code: "CLRS GU4039", name: "Chekhov and Others", credits: 3,
    offered: ["fall"], prereqs: ["RUSS3220"], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "Chekhov in the context of Russian and world drama.",
    professors: ["TBA"]
  },
  "RUSS4910": {
    code: "RUSS GU4910", name: "Literary Translation", credits: 4,
    offered: ["spring"], prereqs: ["RUSS3102"], difficulty: 4,
    dept: "RUSS", category: "elective",
    description: "Workshop in literary translation from Russian.",
    professors: ["TBA"]
  },
  "RUSS4127": {
    code: "RUSS GU4127", name: "Russian Through Music", credits: 3,
    offered: ["fall"], prereqs: ["RUSS3102"], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "Advanced Russian language through song and musical culture.",
    professors: ["TBA"]
  },

  // ── East Asian Languages & Cultures (EAAS) ─────────────────
  "CHNS3003": {
    code: "CHNS UN3003", name: "Third-Year Chinese I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "major",
    description: "Third-year modern Chinese (or equivalent proficiency in Japanese/Korean/Tibetan/Vietnamese).",
    professors: ["TBA"]
  },
  "CHNS3004": {
    code: "CHNS UN3004", name: "Third-Year Chinese II", credits: 4,
    offered: ["spring"], prereqs: ["CHNS3003"], difficulty: 3,
    dept: "EAAS", category: "major",
    description: "Completion of third-year Chinese proficiency.",
    professors: ["TBA"]
  },
  "ASCE1359": {
    code: "ASCE UN1359", name: "Intro to East Asian Civilization: China", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "EAAS", category: "major",
    description: "Survey of Chinese civilization from antiquity to the present.",
    professors: ["TBA"]
  },
  "ASCE1361": {
    code: "ASCE UN1361", name: "Intro to East Asian Civilization: Japan", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "EAAS", category: "major",
    description: "Survey of Japanese civilization from antiquity to the present.",
    professors: ["TBA"]
  },
  "EAAS3990": {
    code: "EAAS UN3990", name: "Approaches to East Asian Studies", credits: 4,
    offered: ["fall"], prereqs: ["ASCE1359"], difficulty: 3,
    dept: "EAAS", category: "major",
    description: "Required methodology seminar, taken fall of junior year.",
    professors: ["TBA"]
  },
  "EAAS3322": {
    code: "EAAS UN3322", name: "East Asian Cinema", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "Cinema of China, Japan, and Korea.",
    professors: ["TBA"]
  },
  "EAAS3913": {
    code: "EAAS UN3913", name: "The Chinese Short Story", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "Love, ghosts, and cannibalism: the Chinese short story tradition.",
    professors: ["TBA"]
  },
  "HSEA3862": {
    code: "HSEA UN3862", name: "History of Korea to 1900", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "Korean history from early states through the late Chosŏn.",
    professors: ["TBA"]
  },
  "EAAS3901": {
    code: "EAAS UN3901", name: "Senior Thesis in East Asian Studies", credits: 4,
    offered: ["spring"], prereqs: ["EAAS3990"], difficulty: 4,
    dept: "EAAS", category: "major",
    description: "Independent senior thesis with the thesis research workshop.",
    professors: ["Advisor assigned"]
  },

  // ── Middle Eastern, South Asian & African Studies (MDES) ───
  "ARAB1101": {
    code: "ARAB UN1101", name: "Elementary Arabic I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "MDES", category: "major",
    description: "Introduction to Modern Standard Arabic (other regional languages also satisfy the requirement).",
    professors: ["TBA"]
  },
  "ARAB1102": {
    code: "ARAB UN1102", name: "Elementary Arabic II", credits: 4,
    offered: ["spring"], prereqs: ["ARAB1101"], difficulty: 3,
    dept: "MDES", category: "major",
    description: "Completion of elementary Arabic.",
    professors: ["TBA"]
  },
  "ARAB2101": {
    code: "ARAB UN2101", name: "Intermediate Arabic I", credits: 4,
    offered: ["fall"], prereqs: ["ARAB1102"], difficulty: 3,
    dept: "MDES", category: "major",
    description: "Intermediate Modern Standard Arabic.",
    professors: ["TBA"]
  },
  "ARAB2102": {
    code: "ARAB UN2102", name: "Intermediate Arabic II", credits: 4,
    offered: ["spring"], prereqs: ["ARAB2101"], difficulty: 3,
    dept: "MDES", category: "major",
    description: "Completion of two years of Arabic.",
    professors: ["TBA"]
  },
  "MDES1003": {
    code: "MDES UN1003", name: "Premodern Islamic Worlds", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "major",
    description: "Approved introductory culture course for the MESAAS major.",
    professors: ["TBA"]
  },
  "MDES3000": {
    code: "MDES UN3000", name: "Theory and Culture", credits: 4,
    offered: ["fall"], prereqs: ["MDES1003"], difficulty: 3,
    dept: "MDES", category: "major",
    description: "Required core seminar in theory, typically junior or senior year.",
    professors: ["TBA"]
  },
  "MDES2641": {
    code: "MDES UN2641", name: "Cinemas of India", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "elective",
    description: "Indian cinema from the studio era to the present.",
    professors: ["TBA"]
  },
  "MDES3042": {
    code: "MDES UN3042", name: "Palestinian-Israeli Politics and Society", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "MDES", category: "elective",
    description: "History and politics of Palestine and Israel.",
    professors: ["TBA"]
  },
  "MDES4122": {
    code: "MDES GU4122", name: "The Novel in Africa", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "MDES", category: "elective",
    description: "The African novel from decolonization to the present.",
    professors: ["TBA"]
  },
  "MDES4765": {
    code: "MDES GU4765", name: "Shi'ites and Shi'ism", credits: 3,
    offered: ["fall"], prereqs: ["MDES1003"], difficulty: 3,
    dept: "MDES", category: "elective",
    description: "History and thought of Shi'i Islam.",
    professors: ["TBA"]
  },

  // ── Architecture (ARCH) ────────────────────────────────────
  "ARCH1010": {
    code: "ARCH UN1010", name: "Design Futures: New York City", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "ARCH", category: "major",
    description: "Introduction to architectural thinking through the city of New York.",
    professors: ["TBA"]
  },
  "ARCH2101": {
    code: "ARCH UN2101", name: "Architectural Design: Systems and Materials", credits: 4,
    offered: ["fall"], prereqs: ["ARCH1010"], difficulty: 3,
    dept: "ARCH", category: "major",
    description: "First design studio: systems, materials, and representation.",
    professors: ["TBA"]
  },
  "ARCH2103": {
    code: "ARCH UN2103", name: "Architectural Design: Environments and Mediations", credits: 4,
    offered: ["spring"], prereqs: ["ARCH2101"], difficulty: 3,
    dept: "ARCH", category: "major",
    description: "Second design studio: environments, media, and mediation.",
    professors: ["TBA"]
  },
  "ARCH3201": {
    code: "ARCH UN3201", name: "Advanced Architectural Design I", credits: 4,
    offered: ["fall"], prereqs: ["ARCH2101","ARCH2103"], difficulty: 4,
    dept: "ARCH", category: "major",
    description: "Advanced design studio with independent project development.",
    professors: ["TBA"]
  },
  "ARCH3117": {
    code: "ARCH UN3117", name: "Modern Architecture in the World", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "ARCH", category: "major",
    description: "Required global history of modern architecture.",
    professors: ["TBA"]
  },
  "ARCH3120": {
    code: "ARCH UN3120", name: "City, Landscape, and Ecology", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "ARCH", category: "elective",
    description: "Urban landscapes and ecological thinking in design.",
    professors: ["TBA"]
  },
  "ARCH3901": {
    code: "ARCH UN3901", name: "Senior Seminar in Architecture", credits: 3,
    offered: ["spring"], prereqs: ["ARCH3117"], difficulty: 4,
    dept: "ARCH", category: "major",
    description: "Capstone seminar; portfolio and research writing sample.",
    professors: ["Advisor assigned"]
  },

  // ── Comparative Literature & Society (CPLS) ────────────────
  "CPLS3900": {
    code: "CPLS UN3900", name: "Introduction to Comparative Literature and Society", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "major",
    description: "Gateway to the ICLS major, taken spring of sophomore year.",
    professors: ["TBA"]
  },
  "CPLS3800": {
    code: "CPLS UN3800", name: "Justice Now", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "elective",
    description: "Literature, law, and the idea of justice across cultures.",
    professors: ["TBA"]
  },
  "CPLS4227": {
    code: "CPLS GU4227", name: "Anatomy in Nineteenth-Century Fiction", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "elective",
    description: "Blood, guts, and lancets: medicine in the nineteenth-century novel.",
    professors: ["TBA"]
  },
  "CPLS4685": {
    code: "CPLS GU4685", name: "Theory from the South", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 4,
    dept: "CPLS", category: "elective",
    description: "Critical theory from the Global South.",
    professors: ["TBA"]
  },
  "CPLS3991": {
    code: "CPLS UN3991", name: "Senior Seminar in Comparative Literature", credits: 4,
    offered: ["fall"], prereqs: ["CPLS3900"], difficulty: 4,
    dept: "CPLS", category: "major",
    description: "Capstone seminar, fall of senior year.",
    professors: ["Advisor assigned"]
  },
  "CPLS3995": {
    code: "CPLS UN3995", name: "Senior Thesis in Comparative Literature", credits: 3,
    offered: ["spring"], prereqs: ["CPLS3991"], difficulty: 4,
    dept: "CPLS", category: "major",
    description: "Optional senior thesis.",
    professors: ["Advisor assigned"]
  },

  // ── Creative Writing (WRIT) ────────────────────────────────
  "WRIT3100": {
    code: "WRIT UN3100", name: "Open Fiction Workshop", credits: 3,
    offered: ["fall","spring"], prereqs: ["WRIT1100"], difficulty: 3,
    dept: "WRIT", category: "major",
    description: "Fiction workshop open to majors by application.",
    professors: ["TBA"]
  },
  "WRIT3200": {
    code: "WRIT UN3200", name: "Open Nonfiction Workshop", credits: 3,
    offered: ["fall","spring"], prereqs: ["WRIT1200"], difficulty: 3,
    dept: "WRIT", category: "major",
    description: "Creative nonfiction workshop.",
    professors: ["TBA"]
  },
  "WRIT3300": {
    code: "WRIT UN3300", name: "Open Poetry Workshop", credits: 3,
    offered: ["fall","spring"], prereqs: ["WRIT1300"], difficulty: 3,
    dept: "WRIT", category: "major",
    description: "Poetry workshop.",
    professors: ["TBA"]
  },
  "WRIT3101": {
    code: "WRIT UN3101", name: "Senior Fiction Workshop", credits: 4,
    offered: ["fall"], prereqs: ["WRIT3100"], difficulty: 4,
    dept: "WRIT", category: "major",
    description: "Advanced workshop for seniors in the major.",
    professors: ["TBA"]
  },
  "WRIT3137": {
    code: "WRIT UN3137", name: "Plant People (Seminar)", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "WRIT", category: "elective",
    description: "Craft seminar reading literature from a writer's perspective.",
    professors: ["TBA"]
  },
  "WRIT3321": {
    code: "WRIT UN3321", name: "Ecopoetics (Seminar)", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "WRIT", category: "elective",
    description: "Craft seminar on poetry and the environment.",
    professors: ["TBA"]
  },

  // ── Earth & Environmental Sciences (EESC) ──────────────────
  "EESC2100": {
    code: "EESC UN2100", name: "Earth's Environmental Systems: The Climate System", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EESC", category: "science",
    description: "The physics and chemistry of Earth's climate.",
    professors: ["TBA"]
  },
  "EESC2200": {
    code: "EESC UN2200", name: "Earth's Environmental Systems: The Solid Earth", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "EESC", category: "science",
    description: "Plate tectonics, earth materials, and the solid earth system.",
    professors: ["TBA"]
  },
  "EESC2300": {
    code: "EESC UN2300", name: "Earth's Environmental Systems: The Life System", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EESC", category: "science",
    description: "The biosphere and its interaction with Earth systems.",
    professors: ["TBA"]
  },
  "EESC3101": {
    code: "EESC UN3101", name: "Geochemistry for a Habitable Planet", credits: 3,
    offered: ["fall"], prereqs: ["EESC2200","CHEM1403"], difficulty: 4,
    dept: "EESC", category: "elective",
    description: "Chemical processes shaping Earth's habitability.",
    professors: ["TBA"]
  },
  "EESC4008": {
    code: "EESC GU4008", name: "Introduction to Atmospheric Science", credits: 3,
    offered: ["spring"], prereqs: ["EESC2100","MATH1101"], difficulty: 4,
    dept: "EESC", category: "elective",
    description: "Dynamics and thermodynamics of the atmosphere.",
    professors: ["TBA"]
  },
  "EESC4925": {
    code: "EESC GU4925", name: "Introduction to Physical Oceanography", credits: 3,
    offered: ["fall"], prereqs: ["EESC2100"], difficulty: 4,
    dept: "EESC", category: "elective",
    description: "Ocean circulation and its role in climate.",
    professors: ["TBA"]
  },
  "EESC4949": {
    code: "EESC GU4949", name: "Introduction to Seismology", credits: 3,
    offered: ["spring"], prereqs: ["EESC2200","PHYS1401"], difficulty: 4,
    dept: "EESC", category: "elective",
    description: "Earthquakes and seismic imaging of Earth's interior.",
    professors: ["TBA"]
  },
  "EESC3901": {
    code: "EESC UN3901", name: "Senior Seminar in Earth Sciences", credits: 3,
    offered: ["fall"], prereqs: ["EESC2200"], difficulty: 4,
    dept: "EESC", category: "major",
    description: "Capstone research seminar (or summer field course).",
    professors: ["Advisor assigned"]
  },

  // ── Ecology, Evolution & Environmental Biology (EEEB) ──────
  "EEEB2001": {
    code: "EEEB UN2001", name: "Environmental Biology I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EEEB", category: "science",
    description: "Gateway course: ecology and evolution from organisms to ecosystems.",
    professors: ["TBA"]
  },
  "EEEB3005": {
    code: "EEEB UN3005", name: "Intro Statistics for Ecology and Evolution", credits: 3,
    offered: ["spring"], prereqs: ["EEEB2001"], difficulty: 3,
    dept: "EEEB", category: "science",
    description: "Statistical methods for ecological and evolutionary data.",
    professors: ["TBA"]
  },
  "EEEB3087": {
    code: "EEEB UN3087", name: "Conservation Biology", credits: 3,
    offered: ["fall"], prereqs: ["EEEB2001"], difficulty: 3,
    dept: "EEEB", category: "elective",
    description: "The science of protecting biodiversity.",
    professors: ["TBA"]
  },
  "EEEB4100": {
    code: "EEEB GU4100", name: "Forest Ecology", credits: 3,
    offered: ["fall"], prereqs: ["EEEB2001"], difficulty: 4,
    dept: "EEEB", category: "elective",
    description: "Lab and field study of forest ecosystems.",
    professors: ["TBA"]
  },
  "EEEB4201": {
    code: "EEEB GU4201", name: "Ecology, Behavior and Conservation of Mammals", credits: 3,
    offered: ["spring"], prereqs: ["EEEB2001"], difficulty: 4,
    dept: "EEEB", category: "elective",
    description: "Integrative seminar on mammalian ecology and conservation.",
    professors: ["TBA"]
  },
  "EEEB3991": {
    code: "EEEB UN3991", name: "Thesis Research Seminar", credits: 3,
    offered: ["fall","spring"], prereqs: ["EEEB3005"], difficulty: 4,
    dept: "EEEB", category: "major",
    description: "Senior thesis seminar with summer research internship.",
    professors: ["Advisor assigned"]
  },

  // ── Cognitive Science (COGS) ───────────────────────────────
  "COGS1001": {
    code: "COGS UN1001", name: "Introduction to Cognitive Science", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "COGS", category: "major",
    description: "Foundational survey of mind and cognition across disciplines.",
    professors: ["TBA"]
  },
  "COGS3903": {
    code: "COGS UN3903", name: "Senior Project in Cognitive Science", credits: 4,
    offered: ["fall","spring"], prereqs: ["COGS1001"], difficulty: 4,
    dept: "COGS", category: "major",
    description: "Year-long capstone research project.",
    professors: ["Advisor assigned"]
  },

  // ── Ethnicity & Race Studies (CSER) ────────────────────────
  "CSER1010": {
    code: "CSER UN1010", name: "Introduction to Comparative Ethnic Studies", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "CSER", category: "major",
    description: "Gateway to the comparative study of ethnicity and race.",
    professors: ["TBA"]
  },
  "CSER3928": {
    code: "CSER UN3928", name: "Colonization / Decolonization", credits: 4,
    offered: ["fall"], prereqs: ["CSER1010"], difficulty: 3,
    dept: "CSER", category: "major",
    description: "Historical and theoretical approaches to colonization and its afterlives.",
    professors: ["TBA"]
  },
  "CSER3942": {
    code: "CSER UN3942", name: "Race and Racisms", credits: 4,
    offered: ["spring"], prereqs: ["CSER1010"], difficulty: 3,
    dept: "CSER", category: "major",
    description: "Comparative study of race-making and racisms.",
    professors: ["TBA"]
  },
  "CSER3919": {
    code: "CSER UN3919", name: "Modes of Inquiry", credits: 4,
    offered: ["spring"], prereqs: ["CSER1010"], difficulty: 3,
    dept: "CSER", category: "major",
    description: "Research methods in ethnicity and race studies.",
    professors: ["TBA"]
  },
  "CSER3922": {
    code: "CSER UN3922", name: "Race & Representation in Asian American Cinema", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Asian American identity on screen.",
    professors: ["TBA"]
  },
  "CSER3926": {
    code: "CSER UN3926", name: "Latin Music and Identity", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Latin music as a site of identity and politics.",
    professors: ["TBA"]
  },
  "CSER3990": {
    code: "CSER UN3990", name: "Senior Project Seminar", credits: 4,
    offered: ["fall"], prereqs: ["CSER3919"], difficulty: 4,
    dept: "CSER", category: "major",
    description: "Capstone research seminar.",
    professors: ["Advisor assigned"]
  },

  // ── Hispanic Studies (SPAN) ────────────────────────────────
  "SPAN1101": {
    code: "SPAN UN1101", name: "Elementary Spanish I", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "SPAN", category: "major",
    description: "Introduction to Spanish language.",
    professors: ["TBA"]
  },
  "SPAN1102": {
    code: "SPAN UN1102", name: "Elementary Spanish II", credits: 4,
    offered: ["fall","spring"], prereqs: ["SPAN1101"], difficulty: 2,
    dept: "SPAN", category: "major",
    description: "Completion of elementary Spanish.",
    professors: ["TBA"]
  },
  "SPAN2101": {
    code: "SPAN UN2101", name: "Intermediate Spanish I", credits: 4,
    offered: ["fall","spring"], prereqs: ["SPAN1102"], difficulty: 2,
    dept: "SPAN", category: "major",
    description: "Intermediate Spanish language.",
    professors: ["TBA"]
  },
  "SPAN2102": {
    code: "SPAN UN2102", name: "Intermediate Spanish II", credits: 4,
    offered: ["fall","spring"], prereqs: ["SPAN2101"], difficulty: 2,
    dept: "SPAN", category: "major",
    description: "Completion of intermediate Spanish.",
    professors: ["TBA"]
  },
  "SPAN3300": {
    code: "SPAN UN3300", name: "Advanced Language Through Content", credits: 3,
    offered: ["fall","spring"], prereqs: ["SPAN2102"], difficulty: 3,
    dept: "SPAN", category: "major",
    description: "Advanced Spanish through cultural and literary content.",
    professors: ["TBA"]
  },
  "SPAN3349": {
    code: "SPAN UN3349", name: "Hispanic Cultures I", credits: 3,
    offered: ["fall"], prereqs: ["SPAN3300"], difficulty: 3,
    dept: "SPAN", category: "major",
    description: "Iberian and Latin American cultures from the medieval period through 1700.",
    professors: ["TBA"]
  },
  "SPAN3350": {
    code: "SPAN UN3350", name: "Hispanic Cultures II", credits: 3,
    offered: ["spring"], prereqs: ["SPAN3300"], difficulty: 3,
    dept: "SPAN", category: "major",
    description: "Hispanic cultures from the eighteenth century onward.",
    professors: ["TBA"]
  },
  "SPAN3731": {
    code: "SPAN UN3731", name: "Environment & Cities: Cultures of the Iberian Peninsula", credits: 3,
    offered: ["fall"], prereqs: ["SPAN3300"], difficulty: 3,
    dept: "SPAN", category: "elective",
    description: "Iberian urban and environmental cultures.",
    professors: ["TBA"]
  },
  "SPAN3991": {
    code: "SPAN UN3991", name: "Senior Seminar in Hispanic Studies", credits: 4,
    offered: ["spring"], prereqs: ["SPAN3349","SPAN3350"], difficulty: 4,
    dept: "SPAN", category: "major",
    description: "Required capstone seminar.",
    professors: ["Advisor assigned"]
  },

  // ── Sustainable Development (SDEV) ─────────────────────────
  "SDEV2300": {
    code: "SDEV UN2300", name: "Challenges of Sustainable Development", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "SDEV", category: "major",
    description: "Foundational survey of sustainable development challenges.",
    professors: ["TBA"]
  },
  "EESC2330": {
    code: "EESC UN2330", name: "Science for Sustainable Development", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "EESC", category: "science",
    description: "Earth-system science underpinning sustainable development.",
    professors: ["TBA"]
  },
  "SDEV3355": {
    code: "SDEV UN3355", name: "Climate Change and Law", credits: 3,
    offered: ["fall"], prereqs: ["SDEV2300"], difficulty: 3,
    dept: "SDEV", category: "elective",
    description: "Legal frameworks for climate mitigation and adaptation.",
    professors: ["TBA"]
  },
  "SDEV3390": {
    code: "SDEV UN3390", name: "GIS for Sustainable Development", credits: 3,
    offered: ["spring"], prereqs: ["SDEV2300"], difficulty: 3,
    dept: "SDEV", category: "elective",
    description: "Geographic information systems for development analysis.",
    professors: ["TBA"]
  },
  "SDEV3410": {
    code: "SDEV UN3410", name: "Cities and Sustainability", credits: 3,
    offered: ["fall"], prereqs: ["SDEV2300"], difficulty: 3,
    dept: "SDEV", category: "elective",
    description: "Urban systems and sustainable city-making.",
    professors: ["TBA"]
  },
  "SDEV4250": {
    code: "SDEV GU4250", name: "Climate Change: Resilience and Adaptation", credits: 3,
    offered: ["spring"], prereqs: ["SDEV2300"], difficulty: 4,
    dept: "SDEV", category: "elective",
    description: "Resilience frameworks for climate adaptation.",
    professors: ["TBA"]
  },
  "SDEV3280": {
    code: "SDEV UN3280", name: "Workshop in Sustainable Development", credits: 4,
    offered: ["spring"], prereqs: ["SDEV2300","EESC2330"], difficulty: 4,
    dept: "SDEV", category: "major",
    description: "Practicum/capstone workshop on a real-world sustainability problem.",
    professors: ["Advisor assigned"]
  },

  // ── Visual Arts (VIAR) ─────────────────────────────────────
  "VIAR1000": {
    code: "VIAR UN1000", name: "Basic Drawing", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Fundamentals of visual vocabulary and drawing materials.",
    professors: ["TBA"]
  },
  "VIAR2100": {
    code: "VIAR UN2100", name: "Painting I", credits: 3,
    offered: ["fall"], prereqs: ["VIAR1000"], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Introduction to painting skills and concepts.",
    professors: ["TBA"]
  },
  "VIAR2300": {
    code: "VIAR UN2300", name: "Sculpture I", credits: 3,
    offered: ["spring"], prereqs: ["VIAR1000"], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Wood, metal, and plaster casting fundamentals.",
    professors: ["TBA"]
  },
  "VIAR2420": {
    code: "VIAR UN2420", name: "Printmaking I: Intaglio", credits: 3,
    offered: ["fall"], prereqs: ["VIAR1000"], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Intaglio process: line etching and related techniques.",
    professors: ["TBA"]
  },
  "VIAR3500": {
    code: "VIAR UN3500", name: "Introduction to Moving Image", credits: 3,
    offered: ["spring"], prereqs: ["VIAR1000"], difficulty: 3,
    dept: "VIAR", category: "major",
    description: "Digital video production and editing workshop.",
    professors: ["TBA"]
  },
  "VIAR3330": {
    code: "VIAR UN3330", name: "Contemporary Art Practice Colloquium", credits: 3,
    offered: ["fall"], prereqs: ["VIAR1000"], difficulty: 3,
    dept: "VIAR", category: "major",
    description: "Junior-year colloquium on contemporary art practice.",
    professors: ["TBA"]
  },
  "VIAR3900": {
    code: "VIAR UN3900", name: "Senior Thesis I", credits: 2,
    offered: ["fall"], prereqs: ["VIAR3330"], difficulty: 4,
    dept: "VIAR", category: "major",
    description: "First semester of the senior thesis exhibition project.",
    professors: ["Advisor assigned"]
  },
  "VIAR3901": {
    code: "VIAR UN3901", name: "Senior Thesis II", credits: 2,
    offered: ["spring"], prereqs: ["VIAR3900"], difficulty: 4,
    dept: "VIAR", category: "major",
    description: "Completion and exhibition of the senior thesis body of work.",
    professors: ["Advisor assigned"]
  },

  // ── Women's & Gender Studies (WMST) ────────────────────────
  "WMST1001": {
    code: "WMST UN1001", name: "Introduction to Women & Gender Studies", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "WMST", category: "major",
    description: "Gateway to the interdisciplinary study of women, gender, and sexuality.",
    professors: ["TBA"]
  },
  "WMST3311": {
    code: "WMST UN3311", name: "Feminist Theory", credits: 4,
    offered: ["fall"], prereqs: ["WMST1001"], difficulty: 3,
    dept: "WMST", category: "major",
    description: "Feminist epistemologies through phenomenology, Marxism, queer and critical race theory.",
    professors: ["TBA"]
  },
  "WMST3514": {
    code: "WMST UN3514", name: "Historical Approaches to Feminist Questions", credits: 4,
    offered: ["spring"], prereqs: ["WMST1001"], difficulty: 3,
    dept: "WMST", category: "major",
    description: "Gender, race, and sexuality across slavery, colonialism, and capitalism.",
    professors: ["TBA"]
  },
  "WMST3915": {
    code: "WMST UN3915", name: "Gender, Sexuality & Power in Transnational Perspectives", credits: 4,
    offered: ["fall"], prereqs: ["WMST1001"], difficulty: 3,
    dept: "WMST", category: "major",
    description: "Global care chains, sex work, and transnational feminist movements.",
    professors: ["TBA"]
  },
  "WMST3600": {
    code: "WMST UN3600", name: "The Politics of Food", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "WMST", category: "elective",
    description: "Food through raced and gendered power dynamics.",
    professors: ["TBA"]
  },
  "WMST4210": {
    code: "WMST GU4210", name: "Black Geographies", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "WMST", category: "elective",
    description: "Black place-making as political struggle and world-making.",
    professors: ["TBA"]
  },
  "WMST3521": {
    code: "WMST UN3521", name: "Senior Seminar I", credits: 4,
    offered: ["fall"], prereqs: ["WMST3311"], difficulty: 4,
    dept: "WMST", category: "major",
    description: "Capstone research seminar with a substantial research project.",
    professors: ["Advisor assigned"]
  },

  // ── Global Affairs & Public Policy (GAPP) ──────────────────
  "GAPP2100": {
    code: "GAPP IA2100", name: "Contemporary Debates in Global Affairs and Public Policy", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "GAPP", category: "major",
    description: "Foundational course on current global policy debates.",
    professors: ["TBA"]
  },
  "GAPP2150": {
    code: "GAPP IA2150", name: "Policymaking: Politics, Ethics, and Communication", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "GAPP", category: "major",
    description: "How policy is made, argued, and communicated.",
    professors: ["TBA"]
  },
  "GAPP2200": {
    code: "GAPP IA2200", name: "Intro to Quantitative Analysis for Global Affairs", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "GAPP", category: "major",
    description: "Quantitative methods for policy analysis.",
    professors: ["TBA"]
  },
  "GAPP3999": {
    code: "GAPP IA3999", name: "Policy Practicum in Global Affairs", credits: 4,
    offered: ["fall","spring"], prereqs: ["GAPP2100","GAPP2200"], difficulty: 4,
    dept: "GAPP", category: "major",
    description: "Two-semester senior capstone on a real-world policy challenge.",
    professors: ["Advisor assigned"]
  },

  // ── Public Health (PUBH — special program/minor) ───────────
  "PUBH3100": {
    code: "PUBH UN3100", name: "Fundamentals of Global Health", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "PUBH", category: "elective",
    description: "Global patterns of health, disease, and health systems.",
    professors: ["TBA"]
  },
  "PUBH3200": {
    code: "PUBH UN3200", name: "Introduction to Public Health", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "PUBH", category: "elective",
    description: "Core concepts and methods of public health.",
    professors: ["TBA"]
  },
  "PUBH4200": {
    code: "PUBH GU4200", name: "Environment, Health, and Justice", credits: 3,
    offered: ["fall"], prereqs: ["PUBH3200"], difficulty: 3,
    dept: "PUBH", category: "elective",
    description: "Environmental determinants of health and environmental justice.",
    professors: ["TBA"]
  },

  // ── Computer Engineering additions (ELEN/CSEE) ─────────────
  "ELEN1201": {
    code: "ELEN E1201", name: "Introduction to Electrical Engineering", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "ELEN", category: "major",
    description: "First course in electrical engineering: circuits, signals, and systems overview.",
    professors: ["TBA"]
  },
  "ELEN3331": {
    code: "ELEN E3331", name: "Electronic Circuits", credits: 3,
    offered: ["spring"], prereqs: ["ELEN3082"], difficulty: 4,
    dept: "ELEN", category: "major",
    description: "Analysis and design of electronic circuits with transistors and op-amps.",
    professors: ["TBA"]
  },
  "CSEE4823": {
    code: "CSEE W4823", name: "Advanced Logic Design", credits: 3,
    offered: ["fall"], prereqs: ["CSEE3827"], difficulty: 4,
    dept: "CSEE", category: "elective",
    description: "Advanced digital logic design and hardware description languages.",
    professors: ["TBA"]
  },
  "CSEE4840": {
    code: "CSEE W4840", name: "Embedded Systems", credits: 3,
    offered: ["spring"], prereqs: ["CSEE3827"], difficulty: 4,
    dept: "CSEE", category: "elective",
    description: "Design of dedicated hardware/software systems; project-based.",
    professors: ["TBA"]
  },

  // ── Materials Science (MSAE) ───────────────────────────────
  "MSAE3010": {
    code: "MSAE E3010", name: "Foundations of Materials Science", credits: 3,
    offered: ["fall"], prereqs: ["CHEM1403","PHYS1402"], difficulty: 3,
    dept: "MSAE", category: "major",
    description: "Structure, properties, and processing of engineering materials.",
    professors: ["TBA"]
  },
  "MSAE3012": {
    code: "MSAE E3012", name: "Laboratory in Materials Science I", credits: 2,
    offered: ["spring"], prereqs: ["MSAE3010"], difficulty: 3,
    dept: "MSAE", category: "major",
    description: "Experimental methods in materials characterization.",
    professors: ["TBA"]
  },
  "MSAE3100": {
    code: "MSAE E3100", name: "Crystallography", credits: 3,
    offered: ["fall"], prereqs: ["MSAE3010"], difficulty: 4,
    dept: "MSAE", category: "major",
    description: "Crystal structures, symmetry, and diffraction.",
    professors: ["TBA"]
  },
  "MSAE3201": {
    code: "MSAE E3201", name: "Materials Thermodynamics and Phase Diagrams", credits: 3,
    offered: ["spring"], prereqs: ["MSAE3010"], difficulty: 4,
    dept: "MSAE", category: "major",
    description: "Thermodynamics of materials and phase equilibria.",
    professors: ["TBA"]
  },
  "MSAE4102": {
    code: "MSAE E4102", name: "Synthesis and Processing of Materials", credits: 3,
    offered: ["fall"], prereqs: ["MSAE3201"], difficulty: 4,
    dept: "MSAE", category: "elective",
    description: "How materials are made: synthesis routes and processing.",
    professors: ["TBA"]
  },
  "MSAE4206": {
    code: "MSAE E4206", name: "Electrical and Magnetic Properties of Solids", credits: 3,
    offered: ["spring"], prereqs: ["MSAE3100"], difficulty: 4,
    dept: "MSAE", category: "elective",
    description: "Electronic and magnetic behavior of materials.",
    professors: ["TBA"]
  },
  "MSAE4215": {
    code: "MSAE E4215", name: "Mechanical Behavior of Materials", credits: 3,
    offered: ["fall"], prereqs: ["MSAE3010"], difficulty: 4,
    dept: "MSAE", category: "elective",
    description: "Deformation, fracture, and strengthening mechanisms.",
    professors: ["TBA"]
  },
  "MSAE3156": {
    code: "MSAE E3156", name: "Design Project", credits: 3,
    offered: ["spring"], prereqs: ["MSAE3201"], difficulty: 4,
    dept: "MSAE", category: "major",
    description: "Team-based materials design project.",
    professors: ["Advisor assigned"]
  },

  // ── Depth pass: AFAS ───────────────────────────────────────
  "AFAS1003": {
    code: "AFAS UN1003", name: "Blackness and Frenchness: A Radical Genealogy", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "AFAS", category: "elective",
    description: "Black thought and identity in the francophone world.",
    professors: ["TBA"]
  },
  "AFAS3001": {
    code: "AFAS UN3001", name: "The Nonfiction Writing of Ntozake Shange", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "AFAS", category: "elective",
    description: "Sing a Black girl's song: Shange's essays and nonfiction.",
    professors: ["TBA"]
  },
  "AFAS3930": {
    code: "AFAS UN3930", name: "Topics in the Black Experience", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 3,
    dept: "AFAS", category: "elective",
    description: "Rotating topics seminar in African diaspora studies.",
    professors: ["TBA"]
  },
  "AFAS4031": {
    code: "AFAS GU4031", name: "Popular Music / Protest Movements", credits: 4,
    offered: ["spring"], prereqs: ["AFAS1001"], difficulty: 3,
    dept: "AFAS", category: "elective",
    description: "Music and Black protest movements; limited advanced undergraduates.",
    professors: ["TBA"]
  },
  "AFAS4037": {
    code: "AFAS GU4037", name: "Third World Studies", credits: 4,
    offered: ["fall"], prereqs: ["AFAS1001"], difficulty: 3,
    dept: "AFAS", category: "elective",
    description: "Comparative colonialism and third-world political thought.",
    professors: ["TBA"]
  },

  // ── Depth pass: AMST ───────────────────────────────────────
  "AMST3930": {
    code: "AMST UN3930", name: "Topics in American Studies", credits: 4,
    offered: ["fall","spring"], prereqs: ["AMST1010"], difficulty: 3,
    dept: "AMST", category: "elective",
    description: "Rotating topics seminar in American studies.",
    professors: ["TBA"]
  },

  // ── Depth pass: ASTR ───────────────────────────────────────
  "ASTR1403": {
    code: "ASTR UN1403", name: "Earth, Moon, and Planets", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 1,
    dept: "ASTR", category: "science",
    description: "Non-calculus survey of the solar system.",
    professors: ["TBA"]
  },
  "ASTR1404": {
    code: "ASTR UN1404", name: "Stars, Galaxies, and Cosmology", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 1,
    dept: "ASTR", category: "science",
    description: "Non-calculus survey of stars, galaxies, and the universe.",
    professors: ["TBA"]
  },
  "ASTR1453": {
    code: "ASTR UN1453", name: "Another Earth", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 1,
    dept: "ASTR", category: "science",
    description: "Exoplanets and the search for habitable worlds.",
    professors: ["TBA"]
  },
  "ASTR3998": {
    code: "ASTR UN3998", name: "Independent Research II", credits: 3,
    offered: ["spring"], prereqs: ["ASTR3997"], difficulty: 4,
    dept: "ASTR", category: "major",
    description: "Second term of senior independent research.",
    professors: ["Advisor assigned"]
  },

  // ── Depth pass: RELI ───────────────────────────────────────
  "RELI1120": {
    code: "RELI UN1120", name: "Love Your Enemies?", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "RELI", category: "major",
    description: "Gateway course on ethics of enmity and love across traditions.",
    professors: ["TBA"]
  },
  "RELI2312": {
    code: "RELI UN2312", name: "Religion and Nasty Women", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "RELI", category: "major",
    description: "Gender, transgression, and religious tradition.",
    professors: ["TBA"]
  },
  "RELI2779": {
    code: "RELI UN2779", name: "Introduction to Native American Religious Traditions", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "RELI", category: "major",
    description: "Survey of Indigenous North American religious life.",
    professors: ["TBA"]
  },
  "RELI3007": {
    code: "RELI UN3007", name: "Laboring in God's Image: Religion, Labor, and the Human", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "RELI", category: "elective",
    description: "Religion and the meaning of work.",
    professors: ["TBA"]
  },
  "RELI4216": {
    code: "RELI GU4216", name: "Religion and Capitalism", credits: 4,
    offered: ["fall"], prereqs: ["RELI3199"], difficulty: 4,
    dept: "RELI", category: "elective",
    description: "Faith and the American market.",
    professors: ["TBA"]
  },
  "RELI4223": {
    code: "RELI GU4223", name: "Dreams", credits: 4,
    offered: ["spring"], prereqs: ["RELI3199"], difficulty: 4,
    dept: "RELI", category: "elective",
    description: "Dreaming in religious thought and practice.",
    professors: ["TBA"]
  },
  "RELI4376": {
    code: "RELI GU4376", name: "A Political Introduction to the Christian Scriptures", credits: 4,
    offered: ["fall"], prereqs: ["RELI3199"], difficulty: 4,
    dept: "RELI", category: "elective",
    description: "The Christian scriptures read politically.",
    professors: ["TBA"]
  },
  "RELI4616": {
    code: "RELI GU4616", name: "Technology, Religion, Future", credits: 4,
    offered: ["spring"], prereqs: ["RELI3199"], difficulty: 4,
    dept: "RELI", category: "elective",
    description: "Religion and emerging technologies.",
    professors: ["TBA"]
  },

  // ── Depth pass: Classics (CLCV/LATN/GREK) ──────────────────
  "CLCV1001": {
    code: "CLCV UN1001", name: "Introduction to Greek Mythology", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 1,
    dept: "CLAS", category: "elective",
    description: "Greek myth and its afterlives, in translation.",
    professors: ["TBA"]
  },
  "CLCV2441": {
    code: "CLCV UN2441", name: "Egypt in the Classical World", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "CLAS", category: "elective",
    description: "Egypt's place in the Greek and Roman Mediterranean.",
    professors: ["TBA"]
  },
  "CLCV3008": {
    code: "CLCV UN3008", name: "The Age of Augustus", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "Rome's transformation under Augustus.",
    professors: ["TBA"]
  },
  "CLCV3009": {
    code: "CLCV UN3009", name: "Ancient Greek and Roman Medicine", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "Medicine and the body in the ancient world.",
    professors: ["TBA"]
  },
  "CLCV3069": {
    code: "CLCV UN3069", name: "Society and Power in the Hellenistic Age", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "The Mediterranean world after Alexander.",
    professors: ["TBA"]
  },
  "CLCV3101": {
    code: "CLCV UN3101", name: "Archaeology of Ancient Egypt and Nubia", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "Material culture of the Nile valley.",
    professors: ["TBA"]
  },
  "CLCV3111": {
    code: "CLCV UN3111", name: "Plato and Confucius: Comparative Ancient Philosophy", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "Greek and Chinese philosophy in comparison.",
    professors: ["TBA"]
  },
  "CLCV3220": {
    code: "CLCV UN3220", name: "War, Reality, and Truth in Thucydides", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "elective",
    description: "Thucydides' history of the Peloponnesian War.",
    professors: ["TBA"]
  },
  "LATN3012": {
    code: "LATN UN3012", name: "Augustan Poetry", credits: 3,
    offered: ["fall"], prereqs: ["LATN2102"], difficulty: 4,
    dept: "CLAS", category: "major",
    description: "Vergil and Horace in Latin.",
    professors: ["TBA"]
  },
  "GREK3309": {
    code: "GREK UN3309", name: "Selections from Greek Literature", credits: 3,
    offered: ["spring"], prereqs: ["GREK2102"], difficulty: 4,
    dept: "CLAS", category: "major",
    description: "Advanced readings in ancient Greek.",
    professors: ["TBA"]
  },

  // ── Depth pass: FREN ───────────────────────────────────────
  "FREN3515": {
    code: "FREN UN3515", name: "Writing the Self Workshop", credits: 3,
    offered: ["spring"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "Autobiographical writing workshop in French.",
    professors: ["TBA"]
  },
  "FREN3517": {
    code: "FREN UN3517", name: "Montaigne, Descartes, Pascal", credits: 3,
    offered: ["fall"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "Early modern French thought (pre-1800).",
    professors: ["TBA"]
  },
  "FREN3666": {
    code: "FREN UN3666", name: "Molière", credits: 3,
    offered: ["spring"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "Molière's comedies in context (pre-1800).",
    professors: ["TBA"]
  },
  "FREN3726": {
    code: "FREN UN3726", name: "Sex, Class, and Shame in 20th–21st Century French Literature", credits: 3,
    offered: ["fall"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "Contemporary French literature and social identity.",
    professors: ["TBA"]
  },
  "FREN3766": {
    code: "FREN UN3766", name: "Transcribing and Writing Tales in Africa", credits: 3,
    offered: ["spring"], prereqs: ["FREN3405"], difficulty: 3,
    dept: "FREN", category: "elective",
    description: "Francophone African oral and written traditions.",
    professors: ["TBA"]
  },
  "FREN3996": {
    code: "FREN UN3996", name: "Senior Tutorial in Literature", credits: 3,
    offered: ["spring"], prereqs: ["FREN3995"], difficulty: 4,
    dept: "FREN", category: "major",
    description: "Honors senior tutorial with an essay.",
    professors: ["Advisor assigned"]
  },

  // ── Depth pass: ITAL ───────────────────────────────────────
  "ITAL3337": {
    code: "ITAL UN3337", name: "Italian Through Cinema", credits: 3,
    offered: ["spring"], prereqs: ["ITAL3335"], difficulty: 3,
    dept: "ITAL", category: "major",
    description: "Language through content: Italian cinema.",
    professors: ["TBA"]
  },
  "ITAL3339": {
    code: "ITAL UN3339", name: "Learning Italian in Class and Online", credits: 3,
    offered: ["fall"], prereqs: ["ITAL2102"], difficulty: 3,
    dept: "ITAL", category: "major",
    description: "Telecollaboration with Italy; language through content.",
    professors: ["TBA"]
  },
  "ITAL3341": {
    code: "ITAL UN3341", name: "Art Itineraries: Italian Through Art", credits: 3,
    offered: ["spring"], prereqs: ["ITAL2102"], difficulty: 3,
    dept: "ITAL", category: "major",
    description: "Language through content: Italian art.",
    professors: ["TBA"]
  },
  "ITAL3342": {
    code: "ITAL UN3342", name: "Business Italian and the Made in Italy Excellence", credits: 3,
    offered: ["fall"], prereqs: ["ITAL2102"], difficulty: 3,
    dept: "ITAL", category: "major",
    description: "Language through content: business Italian.",
    professors: ["TBA"]
  },
  "ITAL3645": {
    code: "ITAL UN3645", name: "Grand Tour in Italy", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "ITAL", category: "elective",
    description: "Travelers and travel writing in Italy, in English.",
    professors: ["TBA"]
  },
  "ITAL3661": {
    code: "ITAL UN3661", name: "Machiavelli and Renaissance Florence", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "ITAL", category: "elective",
    description: "New perspectives on Machiavelli, in English.",
    professors: ["TBA"]
  },
  "ITAL3865": {
    code: "ITAL UN3865", name: "Introduction to Fashion Studies", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "ITAL", category: "elective",
    description: "Fashion as Italian cultural industry, in English.",
    professors: ["TBA"]
  },

  // ── Depth pass: GERM ───────────────────────────────────────
  "GERM3002": {
    code: "GERM UN3002", name: "Advanced German II", credits: 3,
    offered: ["spring"], prereqs: ["GERM2102"], difficulty: 3,
    dept: "GERM", category: "major",
    description: "Advanced German language, second course.",
    professors: ["TBA"]
  },
  "GERM3445": {
    code: "GERM UN3445", name: "German Literature After 1945", credits: 3,
    offered: ["fall"], prereqs: ["GERM3333"], difficulty: 3,
    dept: "GERM", category: "elective",
    description: "Postwar German-language literature, in German.",
    professors: ["TBA"]
  },
  "GERM3991": {
    code: "GERM UN3991", name: "Advanced Topics in German Literature", credits: 3,
    offered: ["spring"], prereqs: ["GERM3333"], difficulty: 4,
    dept: "GERM", category: "elective",
    description: "Rotating advanced literature seminar.",
    professors: ["TBA"]
  },

  // ── Depth pass: RUSS/CLRS ──────────────────────────────────
  "CLRS3309": {
    code: "CLRS UN3309", name: "Fact and Fiction: The Document in Russian and American Literature", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "Documentary modes across Russian and American writing, in translation.",
    professors: ["TBA"]
  },
  "CLRS3314": {
    code: "CLRS UN3314", name: "Women's Autofiction and Life Writing in Russian", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "The story, she told: Russian women's life writing, in translation.",
    professors: ["TBA"]
  },
  "CLRS3316": {
    code: "CLRS UN3316", name: "Literature, Homophobia, and Russian Identity", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "Queer writing and its reception in Russia, in translation.",
    professors: ["TBA"]
  },
  "CLRS4011": {
    code: "CLRS GU4011", name: "Dostoevsky, Tolstoy, and the English Novel", credits: 3,
    offered: ["spring"], prereqs: ["RUSS3220"], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "The Russian and English novel in dialogue, in translation.",
    professors: ["TBA"]
  },
  "CLRS4022": {
    code: "CLRS GU4022", name: "Russia and Asia: Orientalism, Eurasianism, Internationalism", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "Russia's engagements with Asia in culture and thought.",
    professors: ["TBA"]
  },
  "CLRS4036": {
    code: "CLRS GU4036", name: "Nabokov and Global Culture", credits: 3,
    offered: ["spring"], prereqs: ["RUSS3221"], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "Nabokov across languages and cultures.",
    professors: ["TBA"]
  },
  "CLRS4038": {
    code: "CLRS GU4038", name: "Dostoevsky, Demons, Dickens", credits: 3,
    offered: ["fall"], prereqs: ["RUSS3220"], difficulty: 3,
    dept: "RUSS", category: "elective",
    description: "Dostoevsky and Dickens on evil and society.",
    professors: ["TBA"]
  },

  // ── Depth pass: EAAS ───────────────────────────────────────
  "AHUM1400": {
    code: "AHUM UN1400", name: "Colloquium on Major Texts (East Asia)", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "EAAS", category: "major",
    description: "Required colloquium on major East Asian texts.",
    professors: ["TBA"]
  },
  "ASCE1363": {
    code: "ASCE UN1363", name: "Intro to East Asian Civilization: Korea", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "EAAS", category: "major",
    description: "Survey of Korean civilization.",
    professors: ["TBA"]
  },
  "ASCE1365": {
    code: "ASCE UN1365", name: "Intro to East Asian Civilization: Tibet", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "EAAS", category: "major",
    description: "Survey of Tibetan civilization.",
    professors: ["TBA"]
  },
  "ASCE1367": {
    code: "ASCE UN1367", name: "Intro to East Asian Civilization: Vietnam", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "EAAS", category: "major",
    description: "Survey of Vietnamese civilization.",
    professors: ["TBA"]
  },
  "EAAS2342": {
    code: "EAAS UN2342", name: "Mythology of East Asia", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "EAAS", category: "elective",
    description: "Myth and legend across East Asia.",
    professors: ["TBA"]
  },
  "EAAS3215": {
    code: "EAAS UN3215", name: "Korean Literature and Film", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "Modern Korean literature and its film adaptations.",
    professors: ["TBA"]
  },
  "EAAS3217": {
    code: "EAAS UN3217", name: "Korean Popular Cinema", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "South Korean cinema from the golden age to Hallyu.",
    professors: ["TBA"]
  },
  "EAAS3263": {
    code: "EAAS UN3263", name: "Image-Making and Visual Culture in Tibet, 1900–Present", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "Modern Tibetan visual culture.",
    professors: ["TBA"]
  },
  "EAAS3310": {
    code: "EAAS UN3310", name: "Social Problems in Contemporary China", credits: 3,
    offered: ["spring"], prereqs: ["ASCE1359"], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "Contemporary Chinese society; background in Chinese history desirable.",
    professors: ["TBA"]
  },
  "EAAS3313": {
    code: "EAAS UN3313", name: "Introduction to Chinese Cinemas", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EAAS", category: "elective",
    description: "Chinese-language cinema across the mainland, Taiwan, and Hong Kong.",
    professors: ["TBA"]
  },

  // ── Depth pass: MDES ───────────────────────────────────────
  "MDES1001": {
    code: "MDES UN1001", name: "Critical Theory: A Global Perspective", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "elective",
    description: "Critical theory beyond the European canon.",
    professors: ["TBA"]
  },
  "MDES1030": {
    code: "MDES UN1030", name: "\"Game of Thrones\": On Epics and Empires", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "elective",
    description: "Epic literature and empire, from antiquity to fantasy.",
    professors: ["TBA"]
  },
  "AHUM1399": {
    code: "AHUM UN1399", name: "Colloquium on Major Texts: Middle East and India", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "major",
    description: "Required regional-texts colloquium for the MESAAS major.",
    professors: ["TBA"]
  },
  "ASCM2003": {
    code: "ASCM UN2003", name: "Introduction to Islamic Civilization", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "major",
    description: "Approved introductory culture course for the MESAAS major.",
    professors: ["TBA"]
  },
  "MDES2004": {
    code: "MDES UN2004", name: "Conflicts: Race, Region, Religion", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "elective",
    description: "Conflict and identity across the MESAAS regions.",
    professors: ["TBA"]
  },
  "MDES2012": {
    code: "MDES UN2012", name: "Finding Happiness: Readings in Arab-Islamic Texts", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "elective",
    description: "Happiness and the good life in Arab-Islamic thought.",
    professors: ["TBA"]
  },
  "MDES2042": {
    code: "MDES UN2042", name: "South Asia at the Crossroads of Empires", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "MDES", category: "elective",
    description: "South Asian history between empires.",
    professors: ["TBA"]
  },
  "MDES2650": {
    code: "MDES UN2650", name: "Gandhi and His Interlocutors", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "MDES", category: "elective",
    description: "Gandhi's thought and its critics.",
    professors: ["TBA"]
  },
  "MDES3048": {
    code: "MDES UN3048", name: "Pandemics: A Global History", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "MDES", category: "elective",
    description: "Disease and empire in global history.",
    professors: ["TBA"]
  },
  "MDES3121": {
    code: "MDES UN3121", name: "Literature and Cultures of Struggle in South Africa", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "MDES", category: "elective",
    description: "South African writing against apartheid and after.",
    professors: ["TBA"]
  },

  // ── Depth pass: ARCH ───────────────────────────────────────
  "ARCH1030": {
    code: "ARCH UN1030", name: "The City: Thinking with the Urban Built Environment", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "ARCH", category: "elective",
    description: "The urban built environment as a way of thinking.",
    professors: ["TBA"]
  },
  "ARCH2530": {
    code: "ARCH UN2530", name: "Life Beyond Emergency: Domesticities of Displacement", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "ARCH", category: "elective",
    description: "Architecture of displacement and refuge.",
    professors: ["TBA"]
  },
  "ARCH3202": {
    code: "ARCH UN3202", name: "Advanced Architectural Design II", credits: 4,
    offered: ["spring"], prereqs: ["ARCH3201"], difficulty: 4,
    dept: "ARCH", category: "major",
    description: "Second advanced design studio.",
    professors: ["TBA"]
  },
  "ARCH3312": {
    code: "ARCH UN3312", name: "Special Topics in Architecture", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 3,
    dept: "ARCH", category: "elective",
    description: "Rotating topics seminar.",
    professors: ["TBA"]
  },
  "ARCH4260": {
    code: "ARCH GU4260", name: "Colonial Cities in the French Empire", credits: 4,
    offered: ["fall"], prereqs: ["ARCH3117"], difficulty: 3,
    dept: "ARCH", category: "elective",
    description: "Urbanism and empire in the francophone world.",
    professors: ["TBA"]
  },
  "ARCH4305": {
    code: "ARCH GU4305", name: "Abolition Architecture", credits: 4,
    offered: ["spring"], prereqs: ["ARCH3117"], difficulty: 3,
    dept: "ARCH", category: "elective",
    description: "Architecture, carcerality, and abolitionist design.",
    professors: ["TBA"]
  },

  // ── Depth pass: CPLS ───────────────────────────────────────
  "CPLS3931": {
    code: "CPLS UN3931", name: "Life at the End of Life: Palliative Care and Service", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "elective",
    description: "Narrative medicine and end-of-life care.",
    professors: ["TBA"]
  },
  "CPLS4200": {
    code: "CLPS GU4200", name: "A Comprehensive Introduction to Freud's Theories", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "elective",
    description: "Freud's theories and their literary afterlives.",
    professors: ["TBA"]
  },
  "CPLS4162": {
    code: "CPLS GU4162", name: "Transnational Feminisms — China and Beyond", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "elective",
    description: "Feminist thought across borders.",
    professors: ["TBA"]
  },
  "CPLS4325": {
    code: "CPLS GU4325", name: "Abolition Medicine: Medical Racisms and Anti-Racisms", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "elective",
    description: "Race and medicine in comparative perspective.",
    professors: ["TBA"]
  },
  "CPLS4545": {
    code: "CPLS GU4545", name: "Wittgenstein in the Machine", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 4,
    dept: "CPLS", category: "elective",
    description: "Language, mind, and machines after Wittgenstein.",
    professors: ["TBA"]
  },
  "CPLS4876": {
    code: "CLPS GU4876", name: "1001 Nights, Then and Now", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CPLS", category: "elective",
    description: "The Nights across cultures and centuries.",
    professors: ["TBA"]
  },

  // ── Depth pass: WRIT ───────────────────────────────────────
  "WRIT1100": {
    code: "WRIT UN1100", name: "Beginning Fiction Workshop", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "WRIT", category: "major",
    description: "First workshop in fiction; required before open workshops.",
    professors: ["TBA"]
  },
  "WRIT1200": {
    code: "WRIT UN1200", name: "Beginning Nonfiction Workshop", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "WRIT", category: "major",
    description: "First workshop in creative nonfiction.",
    professors: ["TBA"]
  },
  "WRIT1300": {
    code: "WRIT UN1300", name: "Beginning Poetry Workshop", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2,
    dept: "WRIT", category: "major",
    description: "First workshop in poetry.",
    professors: ["TBA"]
  },
  "WRIT3031": {
    code: "WRIT UN3031", name: "Intro to Audio Storytelling", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "WRIT", category: "elective",
    description: "Craft seminar in narrative audio.",
    professors: ["TBA"]
  },
  "WRIT3048": {
    code: "WRIT UN3048", name: "Writing Your World with Lydia Davis", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "WRIT", category: "elective",
    description: "Craft seminar on short forms and observation.",
    professors: ["TBA"]
  },
  "WRIT3131": {
    code: "WRIT UN3131", name: "New Worlds in Writing and VR", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "WRIT", category: "elective",
    description: "World-building across prose and virtual reality.",
    professors: ["TBA"]
  },
  "WRIT3210": {
    code: "WRIT UN3210", name: "The Modern Culture Writer", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "WRIT", category: "elective",
    description: "Criticism and cultural journalism as craft.",
    professors: ["TBA"]
  },
  "WRIT3217": {
    code: "WRIT UN3217", name: "Science and Sensibility", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "WRIT", category: "elective",
    description: "Writing about science for general readers.",
    professors: ["TBA"]
  },

  // ── Depth pass: EESC breadth ───────────────────────────────
  "EESC1001": {
    code: "EESC UN1001", name: "Dinosaurs and the History of Life", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 1,
    dept: "EESC", category: "science",
    description: "Breadth course: the fossil record and evolution of life.",
    professors: ["TBA"]
  },
  "EESC1030": {
    code: "EESC UN1030", name: "Oceanography", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 1,
    dept: "EESC", category: "science",
    description: "Breadth course: the ocean system.",
    professors: ["TBA"]
  },
  "EESC1201": {
    code: "EESC UN1201", name: "Environmental Risks and Disasters", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 1,
    dept: "EESC", category: "science",
    description: "Breadth course: natural hazards and risk.",
    professors: ["TBA"]
  },
  "EESC1600": {
    code: "EESC UN1600", name: "Earth Resources and Sustainable Development", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 1,
    dept: "EESC", category: "science",
    description: "Breadth course: resources and sustainability.",
    professors: ["TBA"]
  },

  // ── Depth pass: EEEB ───────────────────────────────────────
  "EEEB1010": {
    code: "EEEB UN1010", name: "Human Origins and Evolution", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "EEEB", category: "science",
    description: "The evolution of the human lineage.",
    professors: ["TBA"]
  },
  "EEEB2002": {
    code: "EEEB UN2002", name: "Environmental Biology II", credits: 4,
    offered: ["spring"], prereqs: ["EEEB2001"], difficulty: 3,
    dept: "EEEB", category: "science",
    description: "Second gateway course: ecosystems to global processes.",
    professors: ["TBA"]
  },
  "EEEB3215": {
    code: "EEEB UN3215", name: "Introduction to Human Osteology", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "EEEB", category: "elective",
    description: "The human skeleton in evolutionary context.",
    professors: ["TBA"]
  },
  "EEEB3320": {
    code: "EEEB UN3320", name: "Biological Interactions in a Changing World", credits: 3,
    offered: ["spring"], prereqs: ["EEEB2001"], difficulty: 3,
    dept: "EEEB", category: "elective",
    description: "Species interactions under global change.",
    professors: ["TBA"]
  },
  "EEEB3910": {
    code: "EEEB UN3910", name: "The Neandertals", credits: 4,
    offered: ["fall"], prereqs: ["EEEB1010"], difficulty: 3,
    dept: "EEEB", category: "elective",
    description: "Neandertal biology, behavior, and extinction.",
    professors: ["TBA"]
  },

  // ── Depth pass: COGS options ───────────────────────────────
  "PSYC2210": {
    code: "PSYC UN2210", name: "Cognition: Basic Processes", credits: 3,
    offered: ["fall"], prereqs: ["PSYC1001"], difficulty: 3,
    dept: "PSYC", category: "elective",
    description: "Attention, memory, and thought: core cognitive processes.",
    professors: ["TBA"]
  },
  "PSYC2430": {
    code: "PSYC UN2430", name: "Cognitive Neuroscience", credits: 3,
    offered: ["spring"], prereqs: ["PSYC1001"], difficulty: 3,
    dept: "PSYC", category: "elective",
    description: "Neural bases of cognition.",
    professors: ["TBA"]
  },
  "PHIL2655": {
    code: "PHIL UN2655", name: "Cognitive Science and Philosophy", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "PHIL", category: "elective",
    description: "Philosophical foundations of cognitive science.",
    professors: ["TBA"]
  },
  "PHIL3252": {
    code: "PHIL UN3252", name: "Philosophy of Language and Mind", credits: 3,
    offered: ["spring"], prereqs: ["PHIL1401"], difficulty: 4,
    dept: "PHIL", category: "elective",
    description: "Meaning, reference, and mental content.",
    professors: ["TBA"]
  },
  "COGS3952": {
    code: "COGS UN3952", name: "Philosophy of Computing", credits: 3,
    offered: ["fall"], prereqs: ["COGS1001"], difficulty: 3,
    dept: "COGS", category: "elective",
    description: "Computation as a lens on mind and knowledge.",
    professors: ["TBA"]
  },
  "NSBV3381": {
    code: "NSBV BC3381", name: "Visual Neuroscience", credits: 3,
    offered: ["spring"], prereqs: ["NSBV2000"], difficulty: 4,
    dept: "NSBV", category: "elective",
    description: "The visual system from retina to cortex.",
    professors: ["TBA"]
  },

  // ── Depth pass: CSER ───────────────────────────────────────
  "CSER3303": {
    code: "CSER UN3303", name: "Whiteness, Sentiment, and Political Belonging", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Whiteness as a political and affective formation.",
    professors: ["TBA"]
  },
  "CSER3490": {
    code: "CSER UN3490", name: "Post-9/11 Immigration Policies", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Immigration policy and racialization after 9/11.",
    professors: ["TBA"]
  },
  "CSER3701": {
    code: "CSER UN3701", name: "Latinx Racial Identity and Cultural Production", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Latinx identity across media and culture.",
    professors: ["TBA"]
  },
  "CSER3702": {
    code: "CSER UN3702", name: "Memory and Monuments in the U.S. West", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Public memory and contested monuments.",
    professors: ["TBA"]
  },
  "CSER3821": {
    code: "CSER UN3821", name: "Archives of Possibility", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Archival practice and marginalized histories.",
    professors: ["TBA"]
  },
  "CSER3905": {
    code: "CSER UN3905", name: "Asian Americans and the Psychology of Race", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Race and psychology in Asian American experience.",
    professors: ["TBA"]
  },
  "CSER3940": {
    code: "CSER UN3940", name: "Comparative Study of Constitutional Challenges", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Constitutions and contested rights, comparatively.",
    professors: ["TBA"]
  },
  "CSER3949": {
    code: "CSER UN3949", name: "Global Artivisms", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "CSER", category: "elective",
    description: "Art and activism across the globe.",
    professors: ["TBA"]
  },

  // ── Depth pass: SPAN ───────────────────────────────────────
  "SPAN3315": {
    code: "SPAN UN3315", name: "New York as Theatre of Spanish Modernity", credits: 3,
    offered: ["fall"], prereqs: ["SPAN3300"], difficulty: 3,
    dept: "SPAN", category: "elective",
    description: "Spanish modernity staged in New York.",
    professors: ["TBA"]
  },
  "SPAN3366": {
    code: "SPAN UN3366", name: "Unseen Things: Fantastic Narratives in Contemporary Spain", credits: 3,
    offered: ["spring"], prereqs: ["SPAN3300"], difficulty: 3,
    dept: "SPAN", category: "elective",
    description: "The fantastic in contemporary Spanish fiction.",
    professors: ["TBA"]
  },
  "SPAN4010": {
    code: "SPAN GU4010", name: "Language Crossing in Latinx Caribbean Cultural Production", credits: 3,
    offered: ["fall"], prereqs: ["SPAN3300"], difficulty: 4,
    dept: "SPAN", category: "elective",
    description: "Multilingualism in Latinx Caribbean culture.",
    professors: ["TBA"]
  },

  // ── Depth pass: SDEV ───────────────────────────────────────
  "SDEV2000": {
    code: "SDEV UN2000", name: "Introduction to Environmental Law", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "SDEV", category: "elective",
    description: "Foundations of U.S. and international environmental law.",
    professors: ["TBA"]
  },
  "SDEV2050": {
    code: "SDEV UN2050", name: "Environmental Policy and Governance", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "SDEV", category: "elective",
    description: "Institutions and policy design for the environment.",
    professors: ["TBA"]
  },
  "SDEV2100": {
    code: "SDEV UN2100", name: "Introduction to Climate Justice", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "SDEV", category: "elective",
    description: "Equity and justice in climate policy.",
    professors: ["TBA"]
  },
  "SDEV2320": {
    code: "SDEV UN2320", name: "Economics and Financial Methods for Sustainable Development", credits: 3,
    offered: ["spring"], prereqs: ["ECON1105","MATH1101"], difficulty: 3,
    dept: "SDEV", category: "elective",
    description: "Economic tools for sustainability analysis.",
    professors: ["TBA"]
  },
  "SDEV3310": {
    code: "SDEV UN3310", name: "Ethics of Sustainable Development", credits: 3,
    offered: ["fall"], prereqs: ["SDEV2300"], difficulty: 3,
    dept: "SDEV", category: "elective",
    description: "Ethical frameworks for development choices.",
    professors: ["TBA"]
  },
  "SDEV3360": {
    code: "SDEV UN3360", name: "Disasters and Development", credits: 3,
    offered: ["spring"], prereqs: ["EESC2330","SDEV2300"], difficulty: 3,
    dept: "SDEV", category: "elective",
    description: "Disaster risk and development pathways.",
    professors: ["TBA"]
  },
  "SDEV3366": {
    code: "SDEV UN3366", name: "Energy Law", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "SDEV", category: "elective",
    description: "Legal frameworks of energy systems and transition.",
    professors: ["TBA"]
  },

  // ── Depth pass: VIAR ───────────────────────────────────────
  "VIAR1004": {
    code: "VIAR UN1004", name: "Basic Drawing — NYC as Muse", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Foundation drawing with the city as subject.",
    professors: ["TBA"]
  },
  "VIAR2001": {
    code: "VIAR UN2001", name: "Drawing II", credits: 3,
    offered: ["fall"], prereqs: ["VIAR1000"], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Continued drawing practice.",
    professors: ["TBA"]
  },
  "VIAR2021": {
    code: "VIAR UN2021", name: "Figure Drawing", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Popular and historical gestures: drawing the figure.",
    professors: ["TBA"]
  },
  "VIAR2200": {
    code: "VIAR UN2200", name: "Ceramics I", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "VIAR", category: "major",
    description: "Introduction to ceramics.",
    professors: ["TBA"]
  },
  "VIAR3010": {
    code: "VIAR UN3010", name: "Collage: Mixed Media", credits: 3,
    offered: ["spring"], prereqs: ["VIAR1000"], difficulty: 3,
    dept: "VIAR", category: "major",
    description: "Mixed-media and collage practice.",
    professors: ["TBA"]
  },
  "VIAR3101": {
    code: "VIAR UN3101", name: "Painting II", credits: 3,
    offered: ["spring"], prereqs: ["VIAR1000","VIAR2100"], difficulty: 3,
    dept: "VIAR", category: "major",
    description: "Intermediate painting.",
    professors: ["TBA"]
  },
  "VIAR3201": {
    code: "VIAR UN3201", name: "Ceramics II", credits: 3,
    offered: ["spring"], prereqs: ["VIAR2200"], difficulty: 3,
    dept: "VIAR", category: "major",
    description: "Intermediate ceramics.",
    professors: ["TBA"]
  },
  "VIAR3301": {
    code: "VIAR UN3301", name: "Sculpture II", credits: 3,
    offered: ["fall"], prereqs: ["VIAR2300"], difficulty: 3,
    dept: "VIAR", category: "major",
    description: "Intermediate sculpture.",
    professors: ["TBA"]
  },

  // ── Depth pass: WMST ───────────────────────────────────────
  "WMST3125": {
    code: "WMST UN3125", name: "Introduction to Sexuality Studies", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2,
    dept: "WMST", category: "major",
    description: "Alternative gateway: the interdisciplinary study of sexuality.",
    professors: ["TBA"]
  },
  "WMST3200": {
    code: "WMST UN3200", name: "Queer Theory", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "WMST", category: "elective",
    description: "Foundations and debates in queer theory.",
    professors: ["TBA"]
  },
  "WMST3522": {
    code: "WMST UN3522", name: "Senior Seminar II", credits: 4,
    offered: ["spring"], prereqs: ["WMST3521"], difficulty: 4,
    dept: "WMST", category: "major",
    description: "Optional second capstone term.",
    professors: ["Advisor assigned"]
  },

  // ── Depth pass: GAPP ───────────────────────────────────────
  "GAPP2250": {
    code: "GAPP IA2250", name: "Analytical Tools for Global Affairs and Public Policy", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 3,
    dept: "GAPP", category: "major",
    description: "Alternative quantitative-methods course for the major.",
    professors: ["TBA"]
  },
  "GAPP3998": {
    code: "GAPP IA3998", name: "Policy Practicum Preparatory Seminar", credits: 1.5,
    offered: ["fall"], prereqs: ["GAPP2100"], difficulty: 3,
    dept: "GAPP", category: "major",
    description: "Preparation for the senior policy practicum.",
    professors: ["Advisor assigned"]
  },

  // ── Hand-verification additions ────────────────────────────
  "PHYS1403": {
    code: "PHYS UN1403", name: "General Physics III (Waves and Optics)", credits: 3,
    offered: ["fall"], prereqs: ["PHYS1402"], difficulty: 3,
    dept: "PHYS", category: "physics",
    description: "Third semester of the introductory sequence: waves, optics, and modern physics.",
    professors: ["TBA"]
  },
  "GREK2101": {
    code: "GREK UN2101", name: "Intermediate Greek I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3,
    dept: "CLAS", category: "major",
    description: "Intermediate readings in ancient Greek prose.",
    professors: ["TBA"]
  },
  "RUSS4342": {
    code: "RUSS GU4342", name: "Fourth-Year Russian I", credits: 4,
    offered: ["fall"], prereqs: ["RUSS3102"], difficulty: 4,
    dept: "RUSS", category: "major",
    description: "Advanced Russian language, fourth year.",
    professors: ["TBA"]
  },
  "RUSS4343": {
    code: "RUSS GU4343", name: "Fourth-Year Russian II", credits: 4,
    offered: ["spring"], prereqs: ["RUSS4342"], difficulty: 4,
    dept: "RUSS", category: "major",
    description: "Completion of fourth-year Russian.",
    professors: ["TBA"]
  },

  "URBS1515": {
    code: "URBS UN1515", name: "Introduction to Urban Studies", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2,
    dept: "URBS", category: "major",
    description: "Foundational overview of urban studies as an interdisciplinary field.",
    professors: ["TBA"]
  },
  "URBS3545": {
    code: "URBS UN3545", name: "Junior Colloquium in Urban Studies", credits: 4,
    offered: ["spring"], prereqs: ["URBS1515"], difficulty: 3,
    dept: "URBS", category: "major",
    description: "Research-skills seminar taken junior year.",
    professors: ["TBA"]
  },
  "URBS3992": {
    code: "URBS UN3992", name: "Senior Seminar in Urban Studies I", credits: 4,
    offered: ["fall"], prereqs: ["URBS3545"], difficulty: 4,
    dept: "URBS", category: "major",
    description: "First term of the year-long senior research seminar.",
    professors: ["Advisor assigned"]
  },
  "URBS3993": {
    code: "URBS UN3993", name: "Senior Seminar in Urban Studies II", credits: 4,
    offered: ["spring"], prereqs: ["URBS3992"], difficulty: 4,
    dept: "URBS", category: "major",
    description: "Completion of the independent senior research project.",
    professors: ["Advisor assigned"]
  },
  "STAT4203": {
    code: "STAT GU4203", name: "Probability Theory", credits: 3,
    offered: ["fall","spring"], prereqs: ["MATH1201","STAT1201"], difficulty: 4,
    dept: "STAT", category: "major",
    description: "Rigorous probability: random variables, distributions, limit theorems.",
    professors: ["TBA"]
  },
  "STAT4204": {
    code: "STAT GU4204", name: "Statistical Inference", credits: 3,
    offered: ["fall","spring"], prereqs: ["STAT4203"], difficulty: 4,
    dept: "STAT", category: "major",
    description: "Estimation, hypothesis testing, and the theory of inference.",
    professors: ["TBA"]
  },
  "STAT4206": {
    code: "STAT GU4206", name: "Statistical Computing and Introduction to Data Science", credits: 3,
    offered: ["fall"], prereqs: ["STAT4204"], difficulty: 4,
    dept: "STAT", category: "major",
    description: "Computational statistics, R programming, and data science practice.",
    professors: ["TBA"]
  },
  "STAT4207": {
    code: "STAT GU4207", name: "Elementary Stochastic Processes", credits: 3,
    offered: ["spring"], prereqs: ["STAT4203"], difficulty: 4,
    dept: "STAT", category: "major",
    description: "Markov chains, Poisson processes, and stochastic modeling.",
    professors: ["TBA"]
  },

  // ── Barnard hand-verification: real BC courses ─────────────
  "AFRS2004": { code: "AFRS BC2004", name: "Introduction to African Studies", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "AFRS", category: "major",
    description: "Introductory survey of African studies.", professors: ["TBA"] },
  "AFRS2005": { code: "AFRS BC2005", name: "Caribbean Cultures and Societies", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2, dept: "AFRS", category: "major",
    description: "Cultures and societies of the Caribbean.", professors: ["TBA"] },
  "AFRS2006": { code: "AFRS BC2006", name: "Introduction to African Diaspora", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "AFRS", category: "major",
    description: "Introduction to the African diaspora.", professors: ["TBA"] },
  "AFRS3110": { code: "AFRS BC3110", name: "The Africana Colloquium", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3, dept: "AFRS", category: "major",
    description: "Key theories and methodologies of the Black diaspora.", professors: ["TBA"] },
  "AFRS3998": { code: "AFRS BC3998", name: "Africana Studies Senior Seminar", credits: 4,
    offered: ["fall"], prereqs: ["AFRS3110"], difficulty: 4, dept: "AFRS", category: "major",
    description: "Interdisciplinary research seminar culminating in the senior essay.", professors: ["Advisor assigned"] },
  "AMSTBC1001": { code: "AMST BC1001", name: "What Is American Studies?", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "AMST", category: "major",
    description: "Barnard gateway to American studies, taken before sophomore year.", professors: ["TBA"] },
  "AMSTBC3001": { code: "AMST BC3001", name: "Methods Seminar: Cultural Studies", credits: 4,
    offered: ["spring"], prereqs: ["AMSTBC1001"], difficulty: 3, dept: "AMST", category: "major",
    description: "Methods in American cultural studies.", professors: ["TBA"] },
  "AMSTBC3704": { code: "AMST BC3704", name: "Senior Research Essay Seminar", credits: 4,
    offered: ["spring"], prereqs: ["AMSTBC3001"], difficulty: 4, dept: "AMST", category: "major",
    description: "Revision of original research into a 10,000-word thesis.", professors: ["Advisor assigned"] },
  "ANTH1002": { code: "ANTH UN1002", name: "The Interpretation of Culture", credits: 3,
    offered: ["fall","spring"], prereqs: [], difficulty: 2, dept: "ANTH", category: "major",
    description: "Required introduction to cultural interpretation.", professors: ["TBA"] },
  "ANTH3040": { code: "ANTH UN3040", name: "Anthropological Theory", credits: 4,
    offered: ["fall"], prereqs: ["ANTH1002"], difficulty: 3, dept: "ANTH", category: "major",
    description: "Required theory course for majors.", professors: ["TBA"] },
  "ANTHBC3868": { code: "ANTH BC3868", name: "Ethnographic Field Research in NYC", credits: 4,
    offered: ["spring"], prereqs: ["ANTH1002"], difficulty: 3, dept: "ANTH", category: "major",
    description: "Methods course recommended before senior year.", professors: ["TBA"] },
  "ANTHBC3871": { code: "ANTH BC3871", name: "Senior Thesis Seminar I", credits: 4,
    offered: ["fall"], prereqs: ["ANTH3040"], difficulty: 4, dept: "ANTH", category: "major",
    description: "First term of the senior thesis seminar.", professors: ["Advisor assigned"] },
  "ANTHBC3872": { code: "ANTH BC3872", name: "Senior Thesis Seminar II", credits: 4,
    offered: ["spring"], prereqs: ["ANTHBC3871"], difficulty: 4, dept: "ANTH", category: "major",
    description: "Completion of the senior essay.", professors: ["Advisor assigned"] },
  "AHISBC1001": { code: "AHIS BC1001", name: "Introduction to Art History I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "AHIS", category: "major",
    description: "Barnard's first-semester art history survey.", professors: ["TBA"] },
  "AHISBC1002": { code: "AHIS BC1002", name: "Introduction to Art History II", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2, dept: "AHIS", category: "major",
    description: "Barnard's second-semester art history survey.", professors: ["TBA"] },
  "AHISBC3970": { code: "AHIS BC3970", name: "Methods and Theories of Art History", credits: 4,
    offered: ["fall"], prereqs: ["AHISBC1002"], difficulty: 3, dept: "AHIS", category: "major",
    description: "Methods course taken junior or senior year.", professors: ["TBA"] },
  "AHISBC3959": { code: "AHIS BC3959", name: "Senior Research Seminar", credits: 4,
    offered: ["fall","spring"], prereqs: ["AHISBC3970"], difficulty: 4, dept: "AHIS", category: "major",
    description: "Senior thesis research seminar.", professors: ["Advisor assigned"] },
  "FRENBC1203": { code: "FREN BC1203", name: "Intermediate French I", credits: 4,
    offered: ["fall","spring"], prereqs: [], difficulty: 2, dept: "FREN", category: "major",
    description: "Barnard intermediate French, first term.", professors: ["TBA"] },
  "FRENBC1204": { code: "FREN BC1204", name: "Intermediate French II", credits: 4,
    offered: ["fall","spring"], prereqs: ["FRENBC1203"], difficulty: 2, dept: "FREN", category: "major",
    description: "Barnard intermediate French, second term.", professors: ["TBA"] },
  "FRENBC3021": { code: "FREN BC3021", name: "Major French Texts I", credits: 3,
    offered: ["fall"], prereqs: ["FRENBC1204"], difficulty: 3, dept: "FREN", category: "major",
    description: "Core survey of French literature, first term.", professors: ["TBA"] },
  "FRENBC3022": { code: "FREN BC3022", name: "Major French Texts II", credits: 3,
    offered: ["spring"], prereqs: ["FRENBC1204"], difficulty: 3, dept: "FREN", category: "major",
    description: "Core survey of French literature, second term.", professors: ["TBA"] },
  "FRENBC3091": { code: "FREN BC3091", name: "Senior Thesis in French", credits: 4,
    offered: ["spring"], prereqs: ["FRENBC3021","FRENBC3022"], difficulty: 4, dept: "FREN", category: "major",
    description: "Thesis supervised and defended before a committee.", professors: ["Advisor assigned"] },
  "EESCBC1001": { code: "EESC BC1001", name: "Environmental Science I", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "EESC", category: "science",
    description: "Barnard's foundation environmental science course.", professors: ["TBA"] },
  "EESCBC3800": { code: "EESC BC3800", name: "Senior Research Seminar I", credits: 3,
    offered: ["fall"], prereqs: ["EESC2100"], difficulty: 4, dept: "EESC", category: "major",
    description: "First term of the environmental science capstone.", professors: ["Advisor assigned"] },
  "EESCBC3801": { code: "EESC BC3801", name: "Senior Research Seminar II", credits: 3,
    offered: ["spring"], prereqs: ["EESCBC3800"], difficulty: 4, dept: "EESC", category: "major",
    description: "Completion of the capstone research project.", professors: ["Advisor assigned"] },

  // ── Barnard hand-verification batch 2 ──────────────────────
  "GERMBC3009": { code: "GERM BC3009", name: "Advanced German Language Practice", credits: 3,
    offered: ["fall"], prereqs: ["GERM2102"], difficulty: 3, dept: "GERM", category: "major",
    description: "Barnard advanced language course.", professors: ["TBA"] },
  "GERMBC3031": { code: "GERM BC3031", name: "Major German Poets", credits: 3,
    offered: ["spring"], prereqs: ["GERM2102"], difficulty: 3, dept: "GERM", category: "elective",
    description: "German poetry from Goethe to the present, in German.", professors: ["TBA"] },
  "GERMBC3050": { code: "GERM BC3050", name: "German Migrant Literature", credits: 3,
    offered: ["fall"], prereqs: ["GERM2102"], difficulty: 3, dept: "GERM", category: "elective",
    description: "Migration and identity in German-language writing.", professors: ["TBA"] },
  "GERMBC3061": { code: "GERM BC3061", name: "Senior Seminar / Tutorial in German", credits: 4,
    offered: ["fall"], prereqs: ["GERM3333"], difficulty: 4, dept: "GERM", category: "major",
    description: "Barnard senior capstone in German.", professors: ["Advisor assigned"] },
  "ITAL3336": { code: "ITAL UN3336", name: "Advanced Italian II", credits: 3,
    offered: ["spring"], prereqs: ["ITAL3335"], difficulty: 3, dept: "ITAL", category: "major",
    description: "Second advanced Italian language course.", professors: ["TBA"] },
  "PHILBC4050": { code: "PHIL BC4050", name: "Senior Seminar in Philosophy", credits: 4,
    offered: ["fall","spring"], prereqs: ["PHIL2110","PHIL2120"], difficulty: 4, dept: "PHIL", category: "major",
    description: "Barnard senior seminar; option of year-long senior essay.", professors: ["Advisor assigned"] },
  "RELIGU4105": { code: "RELI GU4105", name: "Religion Lab", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 3, dept: "RELI", category: "major",
    description: "Methods, strategies, and materials for research in religion.", professors: ["TBA"] },
  "RELIBC3997": { code: "RELI BC3997", name: "Senior Research Seminar I", credits: 4,
    offered: ["fall"], prereqs: ["RELI3199"], difficulty: 4, dept: "RELI", category: "major",
    description: "First term of the Barnard senior thesis sequence.", professors: ["Advisor assigned"] },
  "RELIBC3998": { code: "RELI BC3998", name: "Senior Research Seminar II", credits: 4,
    offered: ["spring"], prereqs: ["RELIBC3997"], difficulty: 4, dept: "RELI", category: "major",
    description: "Completion of the senior thesis.", professors: ["Advisor assigned"] },
  "SPANBC3990": { code: "SPAN BC3990", name: "Senior Seminar (Barnard)", credits: 4,
    offered: ["fall"], prereqs: ["SPAN3349","SPAN3350"], difficulty: 4, dept: "SPAN", category: "major",
    description: "Senior research seminar with a 20+ page paper in Spanish.", professors: ["Advisor assigned"] },
  "FILMBC3201": { code: "FILM BC3201", name: "Introduction to Film and Media Studies", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "FILM", category: "major",
    description: "Prerequisite for all Barnard film courses.", professors: ["TBA"] },
  "FILMGU4000": { code: "FILM GU4000", name: "Film and Media Theory", credits: 3,
    offered: ["spring"], prereqs: ["FILMBC3201"], difficulty: 3, dept: "FILM", category: "major",
    description: "Core theory course for the film major.", professors: ["TBA"] },
  "FILM2010": { code: "FILM UN2010", name: "Film History: Beginnings to 1930", credits: 3,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "FILM", category: "major",
    description: "Silent and early cinema.", professors: ["TBA"] },
  "FILM2020": { code: "FILM UN2020", name: "Film History: 1930-1960", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2, dept: "FILM", category: "major",
    description: "Classical studio-era cinema.", professors: ["TBA"] },
  "FILMBC3119": { code: "FILM BC3119", name: "Screenwriting Fundamentals", credits: 3,
    offered: ["fall"], prereqs: ["FILMBC3201"], difficulty: 3, dept: "FILM", category: "major",
    description: "Lab in critical/creative practice: screenwriting.", professors: ["TBA"] },
  "FILMBC3200": { code: "FILM BC3200", name: "Film Production", credits: 3,
    offered: ["spring"], prereqs: ["FILMBC3201"], difficulty: 3, dept: "FILM", category: "major",
    description: "Lab in critical/creative practice: production.", professors: ["TBA"] },
  "FILMBC3997": { code: "ENGL BC3997", name: "Senior Seminar (Film)", credits: 4,
    offered: ["fall"], prereqs: ["FILMGU4000"], difficulty: 4, dept: "FILM", category: "major",
    description: "Senior capstone seminar for film majors.", professors: ["Advisor assigned"] },
  "WMSTBC2150": { code: "WMST BC2150", name: "Intersectional Feminisms", credits: 3,
    offered: ["spring"], prereqs: [], difficulty: 2, dept: "WMST", category: "major",
    description: "Alternative gateway: feminisms and intersectionality.", professors: ["TBA"] },
  "WMSTBC2140": { code: "WMST BC2140", name: "Critical Approaches in Social and Cultural Theory", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 3, dept: "WMST", category: "major",
    description: "Required foundation in social and cultural theory.", professors: ["TBA"] },
  "ASCM2008": { code: "ASCM UN2008", name: "Contemporary Islamic Civilization", credits: 4,
    offered: ["spring"], prereqs: [], difficulty: 2, dept: "MDES", category: "major",
    description: "Islamic civilization in the modern world.", professors: ["TBA"] },
  "ASCM2357": { code: "ASCM UN2357", name: "Introduction to Indian Civilization", credits: 4,
    offered: ["fall"], prereqs: [], difficulty: 2, dept: "MDES", category: "major",
    description: "Survey of South Asian civilization.", professors: ["TBA"] },
  "ASST3900": { code: "ASST BC3900", name: "Senior Thesis Seminar (AMEC)", credits: 4,
    offered: ["fall"], prereqs: ["MDES3000"], difficulty: 4, dept: "MDES", category: "major",
    description: "Senior thesis seminar; thesis completed via spring independent study.", professors: ["Advisor assigned"] }

}; // end COURSES
