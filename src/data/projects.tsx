import { ReactNode } from "react";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import {
  SiPython,
  SiFlask,
  SiMysql,
  SiJavascript,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPowerbi,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: React.ReactNode;
};

export const PROJECT_SKILLS: Record<string, Skill> = {
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  flask: { title: "Flask", bg: "black", fg: "white", icon: <SiFlask /> },
  mysql: { title: "MySQL", bg: "black", fg: "white", icon: <SiMysql /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  html: { title: "HTML", bg: "black", fg: "white", icon: <SiHtml5 /> },
  css: { title: "CSS", bg: "black", fg: "white", icon: <SiCss3 /> },
  scikit: { title: "Scikit-learn", bg: "black", fg: "white", icon: <SiScikitlearn /> },
  pandas: { title: "Pandas", bg: "black", fg: "white", icon: <SiPandas /> },
  numpy: { title: "NumPy", bg: "black", fg: "white", icon: <SiNumpy /> },
  powerbi: { title: "Power BI", bg: "black", fg: "white", icon: <SiPowerbi /> },
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
    id: "shopify-powerbi",
    category: "Data Analytics / Dashboard",
    title: "Shopify Sales Analytics Dashboard",
    src: `${BASE_PATH}/shopify-powerbi.png`,
    screenshots: ["shopify-powerbi.png"],
    live: "https://github.com/shrutii2631/Shopify-PowerBI",
    github: "https://github.com/shrutii2631/Shopify-PowerBI",
    skills: {
      frontend: [PROJECT_SKILLS.powerbi],
      backend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.pandas],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            Interactive Power BI dashboard created to analyze Shopify sales
            performance, customer behavior, and revenue trends for better
            business insights.
          </TypographyP>

          <TypographyH3 className="my-4">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li>Tracks KPIs like sales trends and customer behavior</li>
            <li>Built using Power BI for interactive business reporting</li>
            <li>Supports data-driven decisions with visual insights</li>
          </ul>

          <TypographyH3 className="my-6">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/shopify-powerbi.png`]} />
        </div>
      );
    },
  },

  {
    id: "car-prediction",
    category: "Machine Learning",
    title: "Car Price Prediction",
    src: `${BASE_PATH}/car-prediction.png`,
    screenshots: ["car-prediction.png"],
    live: "https://github.com/shrutii2631/CAR_PREDICTION",
    github: "https://github.com/shrutii2631/CAR_PREDICTION",
    skills: {
      frontend: [PROJECT_SKILLS.pandas, PROJECT_SKILLS.numpy],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.scikit],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            Machine learning project built to predict car prices using vehicle
            features, preprocessing techniques, and regression-based modeling.
          </TypographyP>

          <TypographyH3 className="my-4">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li>Performed data preprocessing and feature handling</li>
            <li>Used Python, Pandas, NumPy, and Scikit-learn</li>
            <li>Built as a practical predictive analytics workflow</li>
          </ul>

          <TypographyH3 className="my-6">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/car-prediction.png`]} />
        </div>
      );
    },
  },

  {
    id: "storify",
    category: "Web Application",
    title: "Storify",
    src: `${BASE_PATH}/storify.png`,
    screenshots: ["storify.png"],
    live: "https://github.com/shrutii2631/storify",
    github: "https://github.com/shrutii2631/storify",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            Web-based application designed for creating, managing, and exploring
            digital stories with a clean and user-friendly interface.
          </TypographyP>

          <TypographyH3 className="my-4">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li>Clean and responsive web interface</li>
            <li>Django-powered backend with dynamic functionality</li>
            <li>Built for practical content sharing and management</li>
          </ul>

          <TypographyH3 className="my-6">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/storify.png`]} />
        </div>
      );
    },
  },
];

export default projects;
