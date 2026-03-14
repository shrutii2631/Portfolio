import { ReactNode } from "react";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import {
  SiReact,
  SiPython,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiSqlite,
  SiJavascript,
  SiTailwindcss,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPowerbi,
  SiOpencv,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: React.ReactNode;
};

export const PROJECT_SKILLS: Record<string, Skill> = {
  react: { title: "React", bg: "black", fg: "white", icon: <SiReact /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  flask: { title: "Flask", bg: "black", fg: "white", icon: <SiFlask /> },
  fastapi: { title: "FastAPI", bg: "black", fg: "white", icon: <SiFastapi /> },
  sqlite: { title: "SQLite", bg: "black", fg: "white", icon: <SiSqlite /> },
  mysql: { title: "MySQL", bg: "black", fg: "white", icon: <SiMysql /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  scikit: { title: "Scikit-learn", bg: "black", fg: "white", icon: <SiScikitlearn /> },
  pandas: { title: "Pandas", bg: "black", fg: "white", icon: <SiPandas /> },
  numpy: { title: "NumPy", bg: "black", fg: "white", icon: <SiNumpy /> },
  powerbi: { title: "Power BI", bg: "black", fg: "white", icon: <SiPowerbi /> },
  opencv: { title: "OpenCV", bg: "black", fg: "white", icon: <SiOpencv /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  live: string;
  github?: string;
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: ReactNode;
};

const projects: Project[] = [
  {
    id: "face-recognition",
    category: "AI / Computer Vision",
    title: "Face Recognition Attendance System",
    src: `${BASE_PATH}/face-attendance.png`,
    screenshots: ["face-attendance.png"],
    live: "https://github.com/aniketrai07/Face-Recognition-Attendance-System",
    github: "https://github.com/aniketrai07/Face-Recognition-Attendance-System",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            AI-based system that automatically marks attendance using facial
            recognition with OpenCV.
          </TypographyP>

          <TypographyH3 className="my-4">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li>Real-time face detection and recognition</li>
            <li>Flask backend with database storage</li>
            <li>Automated attendance logging</li>
          </ul>

          <TypographyH3 className="my-6">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/face-attendance.png`]} />
        </div>
      );
    },
  },

  {
    id: "ivy-league",
    category: "AI Research Tool",
    title: "Ivy League Intelligence",
    src: `${BASE_PATH}/ivy-league.png`,
    screenshots: ["ivy-league.png"],
    live: "https://github.com/aniketrai07/Ivy-league-Intelligence",
    github: "https://github.com/aniketrai07/Ivy-league-Intelligence",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sqlite,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            AI-powered platform that gathers and organizes Ivy League
            university data for easier research and comparison.
          </TypographyP>

          <TypographyH3 className="my-4">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li>Automated university data collection</li>
            <li>FastAPI backend with SQLite storage</li>
            <li>Interactive research tool</li>
          </ul>

          <SlideShow images={[`${BASE_PATH}/ivy-league.png`]} />
        </div>
      );
    },
  },

  {
    id: "storify",
    category: "Web Application",
    title: "Storify Project",
    src: `${BASE_PATH}/storify.png`,
    screenshots: ["storify.png"],
    live: "https://github.com/aniketrai07/Storify-project",
    github: "https://github.com/aniketrai07/Storify-project",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            Web-based system designed to manage and organize digital content
            with a clean and responsive interface.
          </TypographyP>

          <TypographyH3 className="my-4">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li>Full stack web application</li>
            <li>Interactive UI with React</li>
            <li>Flask backend integration</li>
          </ul>

          <SlideShow images={[`${BASE_PATH}/storify.png`]} />
        </div>
      );
    },
  },

  {
  id: "car-price",
  category: "Machine Learning",
  title: "Car Price Prediction",
  src: `${BASE_PATH}/car-price.png`,
  screenshots: ["car-price.png"],
  live: "https://github.com/aniketrai07/ML-Model",
  github: "https://github.com/aniketrai07/ML-Model",
  skills: {
    frontend: [PROJECT_SKILLS.pandas, PROJECT_SKILLS.numpy],
    backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.scikit],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Predictive machine learning workflow for estimating car prices based on automobile features.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
        <ul className="list-disc ml-6 font-mono">
          <li>Analyzes factors like engine size, horsepower, mileage, and weight.</li>
          <li>Uses preprocessing, train-test split, and supervised learning.</li>
          <li>Built as a practical regression project with evaluation metrics.</li>
        </ul>
        <TypographyH3 className="my-6">Preview</TypographyH3>
        <SlideShow images={[`${BASE_PATH}/car-price.png`]} />
      </div>
    );
  },
},
  {
  id: "customer-churn",
  category: "Analytics / Dashboard",
  title: "Customer Churn Analysis",
  src: `${BASE_PATH}/churn-analysis.png`,
  screenshots: ["churn-analysis.png"],
  live: "https://github.com/aniketrai07/Customer-Churn-Analysis",
  github: "https://github.com/aniketrai07/Customer-Churn-Analysis",
  skills: {
    frontend: [PROJECT_SKILLS.powerbi],
    backend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.pandas],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Interactive churn analysis dashboard built to identify high-risk customer segments and churn drivers.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
        <ul className="list-disc ml-6 font-mono">
          <li>Works with customer records to surface churn patterns.</li>
          <li>Uses dashboard logic and transformations for analysis.</li>
          <li>Highlights insights that support retention decisions.</li>
        </ul>
        <TypographyH3 className="my-6">Preview</TypographyH3>
        <SlideShow images={[`${BASE_PATH}/churn-analysis.png`]} />
      </div>
    );
  },
},
];

export default projects;