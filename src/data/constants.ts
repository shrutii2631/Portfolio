export enum SkillNames {
  PYTHON = "python",
  JAVA = "java",
  SQL = "sql",
  REACT = "react",
  FASTAPI = "fastapi",
  FLASK = "flask",
  MYSQL = "mysql",
  GIT = "git",
  GITHUB = "github",
  OPENCV = "opencv",
  PANDAS = "pandas",
  NUMPY = "numpy",
  SCIKIT = "scikit",
  POWERBI = "powerbi",
  TABLEAU = "tableau",
  TAILWIND = "tailwind",
  BOOTSTRAP = "bootstrap",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Used for backend development, automation, and machine learning projects.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 2,
    name: "java",
    label: "Java",
    shortDescription: "Core DSA and problem-solving language.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SQL]: {
    id: 3,
    name: "sql",
    label: "SQL",
    shortDescription: "Used for relational database querying and data work.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.REACT]: {
    id: 4,
    name: "react",
    label: "React",
    shortDescription: "Frontend UI development for modern web apps.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 5,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High-performance backend APIs with Python.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 6,
    name: "flask",
    label: "Flask",
    shortDescription: "Lightweight Python backend framework.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 7,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational database design and storage.",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.GIT]: {
    id: 8,
    name: "git",
    label: "Git",
    shortDescription: "Version control for projects and teamwork.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 9,
    name: "github",
    label: "GitHub",
    shortDescription: "Project hosting and collaboration platform.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.OPENCV]: {
    id: 10,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "Computer vision for face detection and recognition.",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 11,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data analysis and preprocessing.",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.NUMPY]: {
    id: 12,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Array computing for ML workflows.",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.SCIKIT]: {
    id: 13,
    name: "scikit",
    label: "Scikit-learn",
    shortDescription: "Machine learning model building and evaluation.",
    color: "#F7931E",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.POWERBI]: {
    id: 14,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "Interactive dashboards and business insights.",
    color: "#F2C811",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  [SkillNames.TABLEAU]: {
    id: 15,
    name: "tableau",
    label: "Tableau",
    shortDescription: "Data visualization and storytelling.",
    color: "#E97627",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 16,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first responsive UI styling.",
    color: "#06b6d4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 17,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "Component-based responsive frontend design.",
    color: "#7952B3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const JOURNEY = [
  {
    year: "2023",
    title: "Started My B.Tech Journey",
    description:
      "Started my Bachelor of Technology in Computer Science Engineering. Began learning programming fundamentals including  SQL, Python and Java.",
  },
  {
    year: "2024",
    title: "Explored Development & Data Science",
    description:
     "Developed a strong interest in Web Development and Data Science. Learned Python, MySQL, and worked with multiple Python libraries including Pandas, NumPy, OpenCV, and Scikit-learn while building practical real-world projects.",
  },
  {
  year: "2024 - 2025",
  title: "Data Analytics & ML Projects",
  description:
    "Built projects like Fleet Manager Chatbot, Shopify Sales Dashboard, and Car Price Prediction ML models to improve problem solving and development skills."
},

  {
  year: "2025 - Present",
  title: "Placement Preparation & Advanced Skill Building",
  description:
    "Currently focused on preparing for technical placements by improving Data Structures & Algorithms, Machine Learning, Data Analytics, and Full Stack Development. Regularly solving coding problems on LeetCode and developing real-world projects to enhance my portfolio.",
}
];
export const themeDisclaimers = {
  dark: ["Dark mode activated."],
  light: ["Back to light mode."],
};
