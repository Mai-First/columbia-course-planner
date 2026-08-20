// ============================================================
// professors.js — Professor data with CULPA ratings
// Ratings are APPROXIMATE, based on historical CULPA data; they are
// directional only. Always check culpa.info for current reviews before
// enrolling. The live `culpa_url` link is the source of truth.
//
// Schema per entry: name, dept, nugget ("gold"|"silver"|null), score (0-5),
// culpa_url, courses[], note, and optionally last_checked ("YYYY-MM") — the
// month the nugget/score was last verified against culpa.info. When adding or
// refreshing a professor, set last_checked so stale data is easy to spot.
// ============================================================

window.PROFESSORS = {

  // ── Computer Science ──────────────────────────────────────
  "Adam Cannon": {
    name: "Adam Cannon", dept: "COMS",
    nugget: "gold", score: 4.9,
    culpa_url: "https://culpa.info/search/instructors?search=Adam+Cannon",
    courses: ["COMS1004","COMS3134"],
    note: "Beloved for clarity and approachability. Gold Nugget on CULPA.",
    last_checked: "2026-06"
  },
  "Chris Murphy": {
    name: "Chris Murphy", dept: "COMS",
    nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Chris+Murphy",
    courses: ["COMS1004"],
    note: "Engaging intro lecturer; clear assignments and supportive pacing.",
    last_checked: "2026-06"
  },
  "Brian Borowski": {
    name: "Brian Borowski", dept: "COMS",
    nugget: "silver", score: 4.4,
    culpa_url: "https://culpa.info/search/instructors?search=Brian+Borowski",
    courses: ["COMS3134","COMS3157"],
    note: "Well-organized data structures/advanced programming lecturer.",
    last_checked: "2026-06"
  },
  "Dan Rubenstein": {
    name: "Dan Rubenstein", dept: "COMS",
    nugget: null, score: 3.9,
    culpa_url: "https://culpa.info/search/instructors?search=Dan+Rubenstein",
    courses: ["COMS4119"],
    note: "Networks expert; rigorous but fair.",
    last_checked: "2026-06"
  },
  "Changxi Zheng": {
    name: "Changxi Zheng", dept: "COMS",
    nugget: null, score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Changxi+Zheng",
    courses: ["COMS4160"],
    note: "Graphics researcher; project-heavy but rewarding course.",
    last_checked: "2026-06"
  },
  "Lydia Chilton": {
    name: "Lydia Chilton", dept: "COMS",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Lydia+Chilton",
    courses: ["COMS4170"],
    note: "Creative HCI course; well-regarded design assignments.",
    last_checked: "2026-06"
  },
  "Jae Woo Lee": {
    name: "Jae Woo Lee", dept: "COMS",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Jae+Woo+Lee",
    courses: ["COMS1004","COMS3134","COMS3157","COMS1007"],
    note: "Enthusiastic teacher, very organized. Gold Nugget."
  },
  "Paul Blaer": {
    name: "Paul Blaer", dept: "COMS",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Paul+Blaer",
    courses: ["COMS1004","COMS3157"],
    note: "Clear explanations, reasonable workload."
  },
  "Bjarne Stroustrup": {
    name: "Bjarne Stroustrup", dept: "COMS",
    nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Bjarne+Stroustrup",
    courses: ["COMS3157"],
    note: "Creator of C++ teaches COMS W3157. A legendary experience."
  },
  "Daniel Rubenstein": {
    name: "Daniel Rubenstein", dept: "COMS",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Daniel+Rubenstein",
    courses: ["COMS3134","COMS4119","COMS3203"],
    note: "Thorough but can be fast-paced. Office hours very helpful."
  },
  "Jonathan Gross": {
    name: "Jonathan Gross", dept: "COMS",
    nugget: "gold", score: 4.5,
    culpa_url: "https://culpa.info/search/instructors?search=Jonathan+Gross",
    courses: ["COMS3203"],
    note: "Graph theory expert; makes discrete math accessible. Gold Nugget."
  },
  "Rocco Servedio": {
    name: "Rocco Servedio", dept: "COMS",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Rocco+Servedio",
    courses: ["COMS3261","COMS4231"],
    note: "Rigorous theory instruction. Demanding but highly respected."
  },
  "Xi Chen": {
    name: "Xi Chen", dept: "COMS",
    nugget: null, score: 3.8,
    culpa_url: "https://culpa.info/search/instructors?search=Xi+Chen",
    courses: ["COMS3261","COMS4231"],
    note: "Research-oriented; challenging exams."
  },
  "Eleni Drinea": {
    name: "Eleni Drinea", dept: "COMS",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Eleni+Drinea",
    courses: ["COMS4231"],
    note: "Clear lectures, fair assessments."
  },
  "Tim Pinkston": {
    name: "Tim Pinkston", dept: "CSEE",
    nugget: null, score: 3.7,
    culpa_url: "https://culpa.info/search/instructors?search=Tim+Pinkston",
    courses: ["CSEE3827","COMS4824"],
    note: "Deep expertise in computer architecture. Lectures can be dense."
  },
  "Martha Kim": {
    name: "Martha Kim", dept: "CSEE",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Martha+Kim",
    courses: ["CSEE3827","COMS4824"],
    note: "Well-organized and fair. Students appreciate the labs."
  },
  "Ansaf Salleb-Aouissi": {
    name: "Ansaf Salleb-Aouissi", dept: "COMS",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Ansaf+Salleb-Aouissi",
    courses: ["COMS4771","COMS3203","COMS4701"],
    note: "Incredibly clear ML instruction. Gold Nugget — highly recommended."
  },
  "Nakul Verma": {
    name: "Nakul Verma", dept: "COMS",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Nakul+Verma",
    courses: ["COMS4771","COMS3251"],
    note: "Strong mathematical treatment of ML. Good office hours."
  },
  "Shuran Song": {
    name: "Shuran Song", dept: "COMS",
    nugget: null, score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Shuran+Song",
    courses: ["COMS4771"],
    note: "Robotics & vision researcher; exciting real-world applications."
  },
  "Julia Hirschberg": {
    name: "Julia Hirschberg", dept: "COMS",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Julia+Hirschberg",
    courses: ["COMS4705"],
    note: "Pioneer in NLP. Enthusiastic and knowledgeable. Gold Nugget."
  },
  "Daniel Bauer": {
    name: "Daniel Bauer", dept: "COMS",
    nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Daniel+Bauer",
    courses: ["COMS4705"],
    note: "Good coverage of modern NLP. Assignments are challenging but rewarding."
  },
  "Jason Nieh": {
    name: "Jason Nieh", dept: "COMS",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Jason+Nieh",
    courses: ["COMS4118"],
    note: "Demanding OS course but excellent preparation for systems work."
  },
  "Junfeng Yang": {
    name: "Junfeng Yang", dept: "COMS",
    nugget: null, score: 3.8,
    culpa_url: "https://culpa.info/search/instructors?search=Junfeng+Yang",
    courses: ["COMS4118"],
    note: "Security focus in OS. Expect heavy workload."
  },
  "Henning Schulzrinne": {
    name: "Henning Schulzrinne", dept: "COMS",
    nugget: null, score: 3.9,
    culpa_url: "https://culpa.info/search/instructors?search=Henning+Schulzrinne",
    courses: ["COMS4119"],
    note: "Pioneer in VOIP; broad coverage of networking protocols."
  },
  "Eugene Wu": {
    name: "Eugene Wu", dept: "COMS",
    nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Eugene+Wu",
    courses: ["COMS4111"],
    note: "Brilliant and engaging. One of the best teachers in SEAS. Gold Nugget."
  },
  "Kenneth Ross": {
    name: "Kenneth Ross", dept: "COMS",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Kenneth+Ross",
    courses: ["COMS4111","COMS4156"],
    note: "Thorough and fair. Standard textbook approach."
  },
  "Alfred Aho": {
    name: "Alfred Aho", dept: "COMS",
    nugget: "gold", score: 4.6,
    culpa_url: "https://culpa.info/search/instructors?search=Alfred+Aho",
    courses: ["COMS4115"],
    note: "Co-author of the Dragon Book teaches compilers. A rare experience. Gold Nugget."
  },
  "Stephen Edwards": {
    name: "Stephen Edwards", dept: "COMS",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Stephen+Edwards",
    courses: ["COMS4115"],
    note: "Well-structured course with good labs."
  },
  "Gail Kaiser": {
    name: "Gail Kaiser", dept: "COMS",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Gail+Kaiser",
    courses: ["COMS4156"],
    note: "Software engineering in practice. Good industry-relevant content."
  },
  "Tony Dear": {
    name: "Tony Dear", dept: "COMS",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Tony+Dear",
    courses: ["COMS4701","COMS3251"],
    note: "Clear and methodical. Great for foundations in AI."
  },

  // ── Mathematics ───────────────────────────────────────────
  "Patrick Gallagher": {
    name: "Patrick Gallagher", dept: "MATH",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Patrick+Gallagher",
    courses: ["MATH1101","MATH1102","MATH2010","MATH4150"],
    note: "Legendary math teacher at Columbia. Gold Nugget for multiple courses."
  },
  "Lindsay Piechnik": {
    name: "Lindsay Piechnik", dept: "MATH",
    nugget: "silver", score: 4.4,
    culpa_url: "https://culpa.info/search/instructors?search=Lindsay+Piechnik",
    courses: ["MATH2010"],
    note: "Well-liked calculus and linear algebra lecturer; clear and approachable. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Chris Ivanov": {
    name: "Chris Ivanov", dept: "MATH",
    nugget: null, score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Chris+Ivanov",
    courses: ["MATH1102"],
    note: "Calculus instructor. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Daniela de Silva": {
    name: "Daniela de Silva", dept: "MATH",
    nugget: null, score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Daniela+de+Silva",
    courses: ["MATH1201"],
    note: "Analysis researcher; organized lectures. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Giulia Sacchetti": {
    name: "Giulia Sacchetti", dept: "MATH",
    nugget: null, score: null,
    culpa_url: "https://culpa.info/search/instructors?search=Giulia+Sacchetti",
    courses: ["MATH1201"],
    note: "Calculus instructor. Rating not verified — check CULPA.",
    last_checked: "2026-06"
  },
  "Simon Brendle": {
    name: "Simon Brendle", dept: "MATH",
    nugget: null, score: null,
    culpa_url: "https://culpa.info/search/instructors?search=Simon+Brendle",
    courses: ["MATH3027"],
    note: "Renowned differential geometer; advanced, fast-paced. Rating not verified — check CULPA.",
    last_checked: "2026-06"
  },
  "Francesco Lin": {
    name: "Francesco Lin", dept: "MATH",
    nugget: null, score: null,
    culpa_url: "https://culpa.info/search/instructors?search=Francesco+Lin",
    courses: ["MATH4061","MATH4062"],
    note: "Topology/geometry researcher; rigorous analysis sequence. Rating not verified — check CULPA.",
    last_checked: "2026-06"
  },
  "Mikhail Smirnov": {
    name: "Mikhail Smirnov", dept: "MATH",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Mikhail+Smirnov",
    courses: ["MATH1101","MATH1102","MATH3027"],
    note: "Experienced calculus instructor. Somewhat fast-paced."
  },
  "Julien Dubedat": {
    name: "Julien Dubedat", dept: "MATH",
    nugget: null, score: 3.8,
    culpa_url: "https://culpa.info/search/instructors?search=Julien+Dubedat",
    courses: ["MATH1201","MATH4500"],
    note: "Research-focused. Good for students who enjoy pure math rigor."
  },
  "Daniele Alessandrini": {
    name: "Daniele Alessandrini", dept: "MATH",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Daniele+Alessandrini",
    courses: ["MATH2010","MATH4061","MATH4062"],
    note: "Patient and thorough. Good for upper-level math."
  },

  // ── Statistics ────────────────────────────────────────────
  "Tian Zheng": {
    name: "Tian Zheng", dept: "STAT",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Tian+Zheng",
    courses: ["STAT1201","STAT4109"],
    note: "Engaging and practical. Good balance of theory and application."
  },
  "Bodhi Sen": {
    name: "Bodhi Sen", dept: "STAT",
    nugget: null, score: 3.9,
    culpa_url: "https://culpa.info/search/instructors?search=Bodhi+Sen",
    courses: ["STAT4109"],
    note: "Mathematically rigorous. Homeworks are thorough."
  },
  "Liam Paninski": {
    name: "Liam Paninski", dept: "STAT",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Liam+Paninski",
    courses: ["STAT1201"],
    note: "Neuroscience and stats. Clear lectures."
  },

  // ── Physics ───────────────────────────────────────────────
  "Szabolcs Marka": {
    name: "Szabolcs Marka", dept: "PHYS",
    nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Szabolcs+Marka",
    courses: ["PHYS1401","PHYS1402"],
    note: "LIGO researcher. Enthusiastic and passionate about physics."
  },
  "Emlyn Hughes": {
    name: "Emlyn Hughes", dept: "PHYS",
    nugget: null, score: 3.5,
    culpa_url: "https://culpa.info/search/instructors?search=Emlyn+Hughes",
    courses: ["PHYS1401","PHYS1402"],
    note: "Known for unconventional teaching methods. Check CULPA for details."
  },

  // ── Economics ─────────────────────────────────────────────
  "Sunil Gulati": {
    name: "Sunil Gulati", dept: "ECON",
    nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Sunil+Gulati",
    courses: ["ECON1105","ECON3211","ECON4710"],
    note: "Former US Soccer president. Engaging storyteller. Gold Nugget."
  },
  "Miguel Urquiola": {
    name: "Miguel Urquiola", dept: "ECON",
    nugget: null, score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Miguel+Urquiola",
    courses: ["ECON3412","ECON4415"],
    note: "Econometrics and economics of education; clear, organized lectures. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "David Weinstein": {
    name: "David Weinstein", dept: "ECON",
    nugget: null, score: 3.9,
    culpa_url: "https://culpa.info/search/instructors?search=David+Weinstein",
    courses: ["ECON3213"],
    note: "International and macroeconomics. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Jonathan Rork": {
    name: "Jonathan Rork", dept: "ECON",
    nugget: null, score: null,
    culpa_url: "https://culpa.info/search/instructors?search=Jonathan+Rork",
    courses: ["ECON1105","ECON4840"],
    note: "Rating not verified — check CULPA for current reviews.",
    last_checked: "2026-06"
  },
  "Brendan O'Flaherty": {
    name: "Brendan O'Flaherty", dept: "ECON",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Brendan+O'Flaherty",
    courses: ["ECON1105","ECON3211","ECON3213","ECON4100"],
    note: "Exceptional teacher. Makes theory intuitive. Gold Nugget. Highly recommended."
  },
  "Michael Woodford": {
    name: "Michael Woodford", dept: "ECON",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Michael+Woodford",
    courses: ["ECON3213"],
    note: "World-leading macroeconomist. Research-oriented; demanding but eye-opening."
  },
  "Yeon-Koo Che": {
    name: "Yeon-Koo Che", dept: "ECON",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Yeon-Koo+Che",
    courses: ["ECON3211","ECON4710"],
    note: "Top microeconomist. Rigorous and rewarding."
  },
  "Serena Ng": {
    name: "Serena Ng", dept: "ECON",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Serena+Ng",
    courses: ["ECON3412","ECON4415"],
    note: "Excellent econometrics instructor. Good practical coverage."
  },
  "Geoffrey Heal": {
    name: "Geoffrey Heal", dept: "ECON",
    nugget: null, score: 3.9,
    culpa_url: "https://culpa.info/search/instructors?search=Geoffrey+Heal",
    courses: ["ECON4530"],
    note: "Pioneer in environmental economics. Broad perspective."
  },

  // ── Political Science ─────────────────────────────────────
  "Page Fortna": {
    name: "Page Fortna", dept: "POLS",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Page+Fortna",
    courses: ["POLS2210","POLS3710","POLS3500"],
    note: "Expert on civil wars and peacekeeping. Gold Nugget. Beloved by students."
  },
  "Andrew Nathan": {
    name: "Andrew Nathan", dept: "POLS",
    nugget: null, score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Andrew+Nathan",
    courses: ["POLS2200"],
    note: "Leading scholar of Chinese politics and human rights. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Jean Cohen": {
    name: "Jean Cohen", dept: "POLS",
    nugget: null, score: 3.9,
    culpa_url: "https://culpa.info/search/instructors?search=Jean+Cohen",
    courses: ["POLS2230"],
    note: "Political theory: civil society, sovereignty, and democratic theory. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Andrew Arato": {
    name: "Andrew Arato", dept: "POLS",
    nugget: null, score: 3.8,
    culpa_url: "https://culpa.info/search/instructors?search=Andrew+Arato",
    courses: ["POLS2230"],
    note: "Political theory, constitutions, and democratic transitions. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Gregory Mitrovich": {
    name: "Gregory Mitrovich", dept: "POLS",
    nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Gregory+Mitrovich",
    courses: ["POLS1101","POLS2210","POLS3500"],
    note: "Historian of US foreign policy. Engaging lectures and accessible."
  },
  "Kimberle Crenshaw": {
    name: "Kimberle Crenshaw", dept: "POLS",
    nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Kimberle+Crenshaw",
    courses: ["POLS2220","POLS1101"],
    note: "Creator of intersectionality theory. Transformative classroom experience."
  },
  "Isabela Mares": {
    name: "Isabela Mares", dept: "POLS",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Isabela+Mares",
    courses: ["POLS2200","POLS3200"],
    note: "Comparative politics expert. Clear and well-organized."
  },
  "Greg Wawro": {
    name: "Greg Wawro", dept: "POLS",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Greg+Wawro",
    courses: ["POLS2220","POLS3710"],
    note: "Quantitative methods and American politics. Good methods instructor."
  },

  // ── Psychology ────────────────────────────────────────────
  "Geraldine Downey": {
    name: "Geraldine Downey", dept: "PSYC",
    nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Geraldine+Downey",
    courses: ["PSYC1001","PSYC2225","PSYC2236","PSYC3200","PSYC3400"],
    note: "Rejection sensitivity research. Warm and encouraging. Gold Nugget."
  },
  "Barbara Tversky": {
    name: "Barbara Tversky", dept: "PSYC",
    nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Barbara+Tversky",
    courses: ["PSYC1001","PSYC3100","PSYC3400"],
    note: "Spatial cognition expert. Engaging and thought-provoking."
  },
  "Nim Tottenham": {
    name: "Nim Tottenham", dept: "PSYC",
    nugget: "silver", score: 4.4,
    culpa_url: "https://culpa.info/search/instructors?search=Nim+Tottenham",
    courses: ["PSYC1001","PSYC2225","PSYC3300","PSYC3500"],
    note: "Developmental neuroscience. Very well-organized and caring."
  },
  "Daphna Shohamy": {
    name: "Daphna Shohamy", dept: "PSYC",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Daphna+Shohamy",
    courses: ["PSYC3100","PSYC3500"],
    note: "Memory and decision-making neuroscience. Research-oriented and inspiring."
  },

  // ── History ───────────────────────────────────────────────
  "Anders Stephanson": {
    name: "Anders Stephanson", dept: "HIST",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Anders+Stephanson",
    courses: ["HIST2000","HIST3200"],
    note: "American foreign policy and Cold War. Gold Nugget. Brilliant lecturer."
  },
  "Matthew Connelly": {
    name: "Matthew Connelly", dept: "HIST",
    nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Matthew+Connelly",
    courses: ["HIST1000","HIST2000","HIST3200"],
    note: "Global history and archives. Engaging and broad-minded."
  },
  "Susan Pedersen": {
    name: "Susan Pedersen", dept: "HIST",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Susan+Pedersen",
    courses: ["HIST1000","HIST3100","HIST3300"],
    note: "European and international history. Detailed and scholarly."
  },
  "Mark Mazower": {
    name: "Mark Mazower", dept: "HIST",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Mark+Mazower",
    courses: ["HIST3100","HIST3300"],
    note: "European history and international order. Research heavyweight."
  },

  // ── English ───────────────────────────────────────────────
  "James Shapiro": {
    name: "James Shapiro", dept: "ENGL",
    nugget: "gold", score: 4.9,
    culpa_url: "https://culpa.info/search/instructors?search=James+Shapiro",
    courses: ["ENGL3100","ENGL4000"],
    note: "World's leading Shakespeare scholar. Unmissable if you love literature. Gold Nugget."
  },
  "Jean Howard": {
    name: "Jean Howard", dept: "ENGL",
    nugget: "silver", score: 4.4,
    culpa_url: "https://culpa.info/search/instructors?search=Jean+Howard",
    courses: ["ENGL3100"],
    note: "Renowned Shakespearean and feminist critic; rich, demanding lectures. Rating approximate — verify on CULPA.",
    last_checked: "2026-06"
  },
  "Bruce Robbins": {
    name: "Bruce Robbins", dept: "ENGL",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Bruce+Robbins",
    courses: ["ENGL2000","ENGL3200","ENGL3300","ENGL3500"],
    note: "Cosmopolitanism and postcolonial theory. Dense but rewarding."
  },
  "Sharon Marcus": {
    name: "Sharon Marcus", dept: "ENGL",
    nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Sharon+Marcus",
    courses: ["ENGL3200","ENGL3400","ENGL4000"],
    note: "Victorian and queer studies. Gold Nugget. Highly recommended."
  },
  "Gayatri Spivak": {
    name: "Gayatri Spivak", dept: "ENGL",
    nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Gayatri+Spivak",
    courses: ["ENGL3300","ENGL3500"],
    note: "Postcolonial theory pioneer. Challenging but intellectually transformative."
  },
  "Edward Mendelson": {
    name: "Edward Mendelson", dept: "ENGL",
    nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Edward+Mendelson",
    courses: ["ENGL2000","ENGL3400"],
    note: "Auden scholar and longtime Columbia legend. Gold Nugget."
  },

  // ── Electrical Engineering ────────────────────────────────
  "Yannis Tsividis": {
    name: "Yannis Tsividis", dept: "ELEN",
    nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Yannis+Tsividis",
    courses: ["ELEN3082","ELEN3401","ELEN4810","ELEN4830"],
    note: "Renowned circuits and devices expert. Exceptional teacher. Gold Nugget."
  },
  "Predrag Jelenkovic": {
    name: "Predrag Jelenkovic", dept: "ELEN",
    nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Predrag+Jelenkovic",
    courses: ["ELEN3082","ELEN3106","ELEN4702","ELEN4810"],
    note: "Signals and systems expert. Clear board work."
  },

  // ── Applied Math ──────────────────────────────────────────
  "Guillaume Bal": {
    name: "Guillaume Bal", dept: "APMA",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Guillaume+Bal",
    courses: ["APMA3101","APMA4200","APMA4301"],
    note: "Applied PDE expert. Challenging but fair."
  },
  "Michael Weinstein": {
    name: "Michael Weinstein", dept: "APMA",
    nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Michael+Weinstein",
    courses: ["APMA3101","APMA3102","APMA4200","APMA4301"],
    note: "Accessible and careful with explanations. Good for applied math students."
  },

  // ── Chemistry ─────────────────────────────────────────────
  "Ann McDermott": {
    name: "Ann McDermott", dept: "CHEM",
    nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Ann+McDermott",
    courses: ["CHEM1403"],
    note: "NMR spectroscopy researcher. Organized and clear."
  },


  // ── Sociology ─────────────────────────────────────────────
  "Shamus Khan": {
    name: "Shamus Khan", dept: "SOCI", nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Shamus+Khan",
    courses: ["SOCI1010","SOCI2001","SOCI3000","SOCI4000"],
    note: "Elites and inequality scholar. Engaging, accessible. Gold Nugget."
  },
  "Herbert Gans": {
    name: "Herbert Gans", dept: "SOCI", nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Herbert+Gans",
    courses: ["SOCI1010","SOCI3000","SOCI3100"],
    note: "Urban sociology legend. Broad and experienced."
  },
  "Sudhir Venkatesh": {
    name: "Sudhir Venkatesh", dept: "SOCI", nugget: "gold", score: 4.8,
    culpa_url: "https://culpa.info/search/instructors?search=Sudhir+Venkatesh",
    courses: ["SOCI1010","SOCI3200"],
    note: "Author of Gang Leader for a Day. Captivating and real-world focused. Gold Nugget."
  },

  // ── Philosophy ────────────────────────────────────────────
  "Akeel Bilgrami": {
    name: "Akeel Bilgrami", dept: "PHIL", nugget: "gold", score: 4.9,
    culpa_url: "https://culpa.info/search/instructors?search=Akeel+Bilgrami",
    courses: ["PHIL1401","PHIL2120","PHIL3010","PHIL3300","PHIL4000"],
    note: "One of the most celebrated teachers at Columbia. Gold Nugget. Transformative."
  },
  "Justin Clarke-Doane": {
    name: "Justin Clarke-Doane", dept: "PHIL", nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Justin+Clarke-Doane",
    courses: ["PHIL1401","PHIL3010","PHIL3600"],
    note: "Philosophy of math and metaethics. Clear and rigorous."
  },
  "Christia Mercer": {
    name: "Christia Mercer", dept: "PHIL", nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Christia+Mercer",
    courses: ["PHIL2110","PHIL2120"],
    note: "History of philosophy expert. Gold Nugget. Passionate and thorough."
  },

  // ── Biology ───────────────────────────────────────────────
  "Molly Przeworski": {
    name: "Molly Przeworski", dept: "BIOL", nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Molly+Przeworski",
    courses: ["BIOL1500","BIOL2401","BIOL3004"],
    note: "Population genetics researcher. Well-organized and fair."
  },
  "Darcy Kelley": {
    name: "Darcy Kelley", dept: "BIOL", nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Darcy+Kelley",
    courses: ["BIOL1500","BIOL1501"],
    note: "Neurobiology and animal behavior. Good intro biology teacher."
  },

  // ── Mechanical Engineering ────────────────────────────────
  "Arvind Narayanaswamy": {
    name: "Arvind Narayanaswamy", dept: "MECE", nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Arvind+Narayanaswamy",
    courses: ["MECE1001","MECE3420","MECE4201"],
    note: "Heat transfer and nanophotonics researcher. Good board work."
  },
  "Yuan Yang": {
    name: "Yuan Yang", dept: "MECE", nugget: "silver", score: 4.1,
    culpa_url: "https://culpa.info/search/instructors?search=Yuan+Yang",
    courses: ["MECE3600","MECE4602"],
    note: "Energy storage and materials. Organized and clear."
  },

  // ── Chemical Engineering ──────────────────────────────────
  "Ponisseril Somasundaran": {
    name: "Ponisseril Somasundaran", dept: "CHEME", nugget: "silver", score: 3.9,
    culpa_url: "https://culpa.info/search/instructors?search=Ponisseril+Somasundaran",
    courses: ["CHEME2410","CHEME3520","CHEME3720","CHEME4410"],
    note: "Longtime Columbia ChemE professor. Broad coverage."
  },

  // ── Biomedical Engineering ────────────────────────────────
  "Lance Kam": {
    name: "Lance Kam", dept: "BMEN", nugget: "silver", score: 4.3,
    culpa_url: "https://culpa.info/search/instructors?search=Lance+Kam",
    courses: ["BMEN1004","BMEN4550"],
    note: "Cell mechanics expert. Good mix of theory and lab."
  },
  "Samuel Sia": {
    name: "Samuel Sia", dept: "BMEN", nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Samuel+Sia",
    courses: ["BMEN1004","BMEN3110"],
    note: "Point-of-care diagnostics. Engaging real-world applications."
  },
  "Andrew Laine": {
    name: "Andrew Laine", dept: "BMEN", nugget: "silver", score: 4.0,
    culpa_url: "https://culpa.info/search/instructors?search=Andrew+Laine",
    courses: ["BMEN4600"],
    note: "Medical imaging and signal processing. Thorough."
  },

  // ── IEOR ──────────────────────────────────────────────────
  "Karl Sigman": {
    name: "Karl Sigman", dept: "IEOR", nugget: "gold", score: 4.7,
    culpa_url: "https://culpa.info/search/instructors?search=Karl+Sigman",
    courses: ["IEOR2500","IEOR3106","IEOR3600"],
    note: "Stochastic processes expert. Exceptionally clear. Gold Nugget."
  },
  "Daniel Lacker": {
    name: "Daniel Lacker", dept: "IEOR", nugget: "silver", score: 4.2,
    culpa_url: "https://culpa.info/search/instructors?search=Daniel+Lacker",
    courses: ["IEOR3106","IEOR4520"],
    note: "Mean field games and ML applications. Modern and research-focused."
  }

}; // end PROFESSORS
