export const personalData = {
  name: "Nalla Vamsi Satyadev",
  role: "Information Technology Student & Full-Stack Developer",
  tagline: "Building clean, reliable web applications and experimenting with AI & LLMs.",
  location: "Bandhapuram, AP",
  phone: "+91 9398193184",
  email: "vamsichowdarynalla223@gmail.com",
  linkedin: "https://linkedin.com/in/vamsi-satyadev-nalla",
  github: "https://github.com/vamsisatyadev",
  statusBadge: "Available for Opportunities & Collaborations",
  summary: "I’m an IT student passionate about building clean, reliable web applications across the full stack using React.js, Angular, and Node.js. Beyond core web development, I love experimenting with AI—like integrating LLMs and smart APIs into real-world projects such as VedaFit AI and LAVIX. Winning local app development competitions has pushed me to keep building products that actually solve practical problems. I’m looking to bring that blend of full-stack engineering and curiosity for new tech to a collaborative development team.",
  stats: [
    { label: "Academic Excellence", value: "95%+" },
    { label: "Featured Projects", value: "3" },
    { label: "Core Certifications", value: "3+" },
    { label: "Stepcone 2k24", value: "2nd Prize" }
  ]
};

export const technicalSkillsSummary = {
  languages: ["Java", "Python", "C", "JavaScript", "SQL"],
  frontend: ["React.js", "Angular", "HTML5", "CSS3"],
  backendAndTools: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Git"]
};

export const aboutLensesData = [
  {
    id: "fullstack",
    lensName: "The Full-Stack Engineer",
    shortTag: "Full-Stack Craft",
    badge: "Full-Stack Developer",
    icon: "Code2",
    headline: "Building clean, reliable web applications across the full stack using React.js, Angular, and Node.js.",
    heroSummary: "Crafting responsive user interfaces with React & Angular, backed by reliable, scalable Node.js & RESTful APIs.",
    narrative: "I treat full-stack engineering as the craft of building clean, dependable software that solves practical problems. From engineering responsive front-end components and optimizing UI interaction flows to designing RESTful APIs and flexible database schemas, I focus on building maintainable, high-performance applications.",
    philosophy: "Clean code and dependable architectures turn good ideas into impactful digital products.",
    highlightPill: "React.js • Angular • Node.js",
    keyStats: [
      { label: "Frontend", value: "React & Angular" },
      { label: "Backend", value: "Node.js & FastAPI" },
      { label: "Databases", value: "MongoDB & SQL" }
    ],
    dailyDrivers: ["React.js", "Angular", "Node.js", "FastAPI", "MongoDB", "PostgreSQL", "JavaScript", "Git"]
  },
  {
    id: "aiexplorer",
    lensName: "The AI & Smart Systems Builder",
    shortTag: "AI & Smart APIs",
    badge: "LLM & GenAI Explorer",
    icon: "Sparkles",
    headline: "Integrating LLMs, RAG pipelines, and Generative AI APIs into real-world products.",
    heroSummary: "Building intelligent platforms like VedaFit AI and LAVIX powered by Meta LLaMA 3.1, RAG pipelines, and smart GenAI APIs.",
    narrative: "Beyond traditional web development, I experiment with bringing artificial intelligence into hands-on products. In VedaFit AI, I built a Retrieval-Augmented Generation (RAG) pipeline with Meta LLaMA 3.1 and FastAPI. In LAVIX, I integrated Generative AI APIs with Node.js backends for virtual try-on visualization.",
    philosophy: "AI is most valuable when thoughtfully integrated into practical, human-centered applications.",
    highlightPill: "Meta LLaMA 3.1 • RAG • GenAI APIs",
    keyStats: [
      { label: "AI Models", value: "Meta LLaMA 3.1" },
      { label: "Pipelines", value: "RAG & GenAI APIs" },
      { label: "Backend", value: "FastAPI & Node.js" }
    ],
    dailyDrivers: ["Meta LLaMA 3.1", "RAG", "FastAPI", "GenAI APIs", "Python", "MongoDB"]
  },
  {
    id: "problemsolver",
    lensName: "The Problem Solver & Achiever",
    shortTag: "Grit & Achievements",
    badge: "Stepcone 2k24 Winner & 95%+ Ranker",
    icon: "Trophy",
    headline: "Driven by competitive curiosity, problem solving, and an unbroken academic record.",
    heroSummary: "Stepcone 2k24 2nd Prize Winner with a 95%+ academic track record, passionate about shipping functional solutions.",
    narrative: "Winning local app development competitions like Stepcone 2k24 (2nd Prize in Mobile Application Development) has pushed me to keep building products that solve real problems. Backed by top academic consistency (950/1000 in Intermediate and 597/600 in SSC), I bring discipline, speed, and continuous learning to every challenge.",
    philosophy: "Disciplined execution and genuine curiosity are the foundations of great engineering.",
    highlightPill: "Stepcone 2k24 2nd Prize",
    keyStats: [
      { label: "Contest Prize", value: "Stepcone 2k24 (2nd)" },
      { label: "Inter (10+2)", value: "950 / 1000 (95%)" },
      { label: "SSC Board", value: "597 / 600 (99.5%)" }
    ],
    dailyDrivers: ["Java", "Python", "C", "Algorithms", "Agile Sprints", "Full-Stack Dev"]
  }
];


export const projectsData = [
  {
    id: "skill-swap",
    title: "SKILL SWAP Platform",
    category: "Full-Stack & P2P",
    badge: "Featured Platform",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    bullets: [
      "Built a peer-to-peer web application that lets users swap skills, book learning sessions, and manage incoming trade requests.",
      "Developed RESTful APIs for secure user login, automated skill matching, and real-time status updates.",
      "Designed flexible MongoDB database schemas to cleanly store user profiles, skill categories, and session histories."
    ],
    highlights: [
      { label: "Stack", value: "React & Node.js" },
      { label: "Feature", value: "P2P Skill Matching" },
      { label: "Database", value: "MongoDB Schemas" }
    ],
    github: "https://github.com/vamsisatyadev/skill-swap",
    demo: "#",
    gridSpan: "col-span-1 lg:col-span-2"
  },
  {
    id: "lavix-virtual-tryon",
    title: "LAVIX – AI-Powered Virtual Try-On Studio",
    category: "AI & Machine Learning",
    badge: "Featured AI Studio",
    stack: ["React.js", "Node.js", "GenAI APIs"],
    bullets: [
      "Designed system architecture workflows and interactive UI prototypes for an AI-powered virtual trial room platform.",
      "Developed frontend customer views and optimized API integration pipelines for real-time apparel visualization.",
      "Connected Generative AI APIs with Node.js backend services to handle incoming clothing image inputs smoothly."
    ],
    highlights: [
      { label: "AI Tech", value: "GenAI APIs" },
      { label: "Frontend", value: "Interactive React UI" },
      { label: "Backend", value: "Node.js Pipelines" }
    ],
    github: "https://github.com/vamsisatyadev/lavix-try-on",
    demo: "#",
    gridSpan: "col-span-1 lg:col-span-1"
  },
  {
    id: "vedafit-ai",
    title: "VedaFit AI – Culturally Intelligent Fitness Coach",
    category: "AI & Machine Learning",
    badge: "Featured AI Project",
    stack: ["Meta LLaMA 3.1", "RAG", "FastAPI", "MongoDB"],
    bullets: [
      "Built an AI fitness and diet coaching platform powered by Meta’s LLaMA 3.1 model and MongoDB.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline to deliver contextually accurate, personalized health advice.",
      "Developed high-performance backend endpoints using FastAPI to support real-time interactions and multi-language support."
    ],
    highlights: [
      { label: "LLM Model", value: "Meta LLaMA 3.1" },
      { label: "Architecture", value: "RAG Pipeline" },
      { label: "Backend", value: "FastAPI & MongoDB" }
    ],
    github: "https://github.com/vamsisatyadev/vedafit-ai",
    demo: "#",
    gridSpan: "col-span-1 lg:col-span-3"
  }
];

export const experienceData = [
  {
    company: "AI Smart Live Solutions",
    location: "Vizag",
    role: "Web Developer Intern",
    type: "Internship",
    period: "Internship",
    contributions: [
      "Engineered responsive frontend components and optimized UI interaction flows using modern JavaScript frameworks.",
      "Integrated backend RESTful APIs and streamlined data processing pipelines for real-time application scalability."
    ],
    skillsUsed: ["JavaScript", "Frontend Development", "RESTful APIs", "Data Processing", "UI Optimization"]
  },
  {
    company: "Krifty Software Technologies",
    location: "Kakinada",
    role: "Web Technology Intern",
    type: "Internship",
    period: "Internship",
    contributions: [
      "Built responsive UI components using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility.",
      "Collaborated in an Agile team to troubleshoot bugs and deploy stable feature updates."
    ],
    skillsUsed: ["HTML5", "CSS3", "JavaScript", "Cross-Browser Compatibility", "Agile", "Bug Fixing"]
  }
];

export const educationData = [
  {
    institution: "GMR Institute of Technology",
    location: "Rajam, AP",
    degree: "Bachelor of Technology",
    stream: "Information Technology",
    period: "2023 – 2027",
    status: "Currently Pursuing (B.Tech)",
    highlight: "B.Tech in Information Technology",
    icon: "GraduationCap"
  },
  {
    institution: "Sasi Junior College",
    location: "Velivennu, AP",
    degree: "Intermediate (MPC)",
    stream: "Mathematics, Physics, Chemistry",
    period: "2021 – 2023",
    score: "950 / 1000",
    scorePercentage: "95.0%",
    status: "Completed",
    highlight: "Score: 950 / 1000 (95.0%)",
    icon: "BookOpen"
  },
  {
    institution: "Sri Chaitanya School",
    location: "Devarapalli, AP",
    degree: "Secondary School Certificate (SSC)",
    stream: "Class 10 Board",
    period: "2019 – 2020",
    score: "597 / 600",
    scorePercentage: "99.5%",
    status: "Completed",
    highlight: "Score: 597 / 600 (99.5%)",
    icon: "Award"
  }
];

export const certificationsData = [
  {
    title: "2nd Prize Winner – Mobile Application Development Contest",
    issuer: "Stepcone 2k24",
    type: "Award & Competition Honors",
    highlight: true,
    badgeText: "🏆 2nd Prize Winner",
    date: "Stepcone 2k24",
    description: "Awarded 2nd Prize in the Mobile Application Development Contest at Stepcone 2k24.",
    icon: "Trophy"
  },
  {
    title: "Angular Web Developer",
    issuer: "Infosys",
    type: "Web Development",
    highlight: false,
    badgeText: "Infosys Verified",
    date: "Certified",
    description: "Professional certification in Angular web development, component architecture, and modern frontend engineering.",
    icon: "CheckCircle2"
  },
  {
    title: "Generative AI Masterclass",
    issuer: "Coursera",
    type: "Artificial Intelligence",
    highlight: false,
    badgeText: "Coursera Verified",
    date: "Certified",
    description: "Hands-on mastery of Large Language Models (LLMs), prompt engineering, Generative AI APIs, and intelligent pipelines.",
    icon: "Sparkles"
  },
  {
    title: "AWS Cloud Foundational",
    issuer: "Amazon Web Services",
    type: "Cloud Infrastructure",
    highlight: false,
    badgeText: "AWS Foundational",
    date: "Certified",
    description: "Foundational validation of AWS cloud architecture, infrastructure services, and scalable deployment fundamentals.",
    icon: "Cloud"
  }
];

