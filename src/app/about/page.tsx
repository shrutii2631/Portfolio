"use client";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaCode,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa6";
import {
  SiBootstrap,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGithub,
  // SiJira,
  SiJupyter,
  SiLinux,
  SiMysql,
  SiOpencv,
  SiPandas,
  SiPowerbi,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTableau,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "skumari63160@gmail.com",
    href: "mailto:skumari63160@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Phone",
    content: "+91 9798774160",
    href: "tel:+919798774160",
    icon: <FaPhone />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shruti286/",
    content: "/in/shruti286",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/shrutii2631",
    content: "/shrutii2631",
    icon: <FaGithub />,
  },
];

const CORE_STACK = [
  { name: "Python", icon: <SiPython size={"42px"} color={"#3776AB"} /> },
  { name: "React", icon: <SiReact size={"42px"} color={"#61DAFB"} /> },
  { name: "Flask", icon: <SiFlask size={"42px"} color={"#ffffff"} /> },
  { name: "FastAPI", icon: <SiFastapi size={"42px"} color={"#009688"} /> },
  { name: "MySQL", icon: <SiMysql size={"42px"} color={"#4479A1"} /> },
  { name: "Power BI", icon: <SiPowerbi size={"42px"} color={"#F2C811"} /> },
  { name: "Pandas", icon: <SiPandas size={"42px"} color={"#150458"} /> },
  { name: "Scikit-learn", icon: <SiScikitlearn size={"42px"} color={"#F7931E"} /> },
  { name: "OpenCV", icon: <SiOpencv size={"42px"} color={"#5C3EE8"} /> },
  { name: "Tableau", icon: <SiTableau size={"42px"} color={"#E97627"} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={"42px"} color={"#06b6d4"} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={"42px"} color={"#7952B3"} /> },
];

const DEV_TOOLS = [
  { name: "VS Code", icon: <SiVisualstudiocode size={"38px"} color={"#007ACC"} /> },
  { name: "GitHub", icon: <SiGithub size={"38px"} color={"#ffffff"} /> },
  { name: "Docker", icon: <SiDocker size={"38px"} color={"#2496ED"} /> },
  // { name: "Jira", icon: <SiJira size={"38px"} color={"#0052CC"} /> },
  { name: "Jupyter", icon: <SiJupyter size={"38px"} color={"#F37626"} /> },
  { name: "Linux", icon: <SiLinux size={"38px"} color={"#FCC624"} /> },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">

        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 bg-white/5"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="flex flex-row lg:flex-col items-center">

              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-8 w-[110px] md:w-[150px] lg:w-[220px] aspect-square bg-zinc-800 object-cover"
                  alt="Shruti Kumari"
                  src="/assets/me.jpg"
                />
              </div>

              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl text-white font-semibold">
                  Shruti Kumari
                </p>

                <p className="hidden lg:block text-sm text-zinc-400 text-center leading-6 max-w-xs">
                  Passionate about building practical data analytics, machine learning, and web-based solutions.
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />

              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-14 border-zinc-700 bg-zinc-800 hover:border-zinc-500 hover:bg-zinc-700/80 border-[.5px] rounded-md transition"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-6 text-lg">{link.icon}</div>

                      <div className="flex flex-col">
                        <div className="text-sm text-white">{link.name}</div>
                        <div className="text-xs text-zinc-500">{link.content}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="basis-3/4 w-full">
          <div
            className="p-8 md:p-10 border-[.5px] rounded-2xl border-zinc-600 bg-white/5"
            style={{ backdropFilter: "blur(2px)" }}
          >

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-3">
              About Me
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-10">
              Building practical products with data, code, and problem solving.
            </h1>

            {/* Skill Cards */}

            <div className="grid md:grid-cols-3 gap-4 mb-10">

              <div className="border-[.5px] border-zinc-600 rounded-xl p-5 bg-zinc-900/40">
                <FaCode className="text-2xl text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                <p className="text-sm text-zinc-400 leading-7">
                  I enjoy building practical applications with clean interfaces and efficient backend logic.
                </p>
              </div>

              <div className="border-[.5px] border-zinc-600 rounded-xl p-5 bg-zinc-900/40">
                <FaLaptopCode className="text-2xl text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
                <p className="text-sm text-zinc-400 leading-7">
                  I work on data preprocessing, exploratory analysis, and beginner ML models for real use cases.
                </p>
              </div>

              <div className="border-[.5px] border-zinc-600 rounded-xl p-5 bg-zinc-900/40">
                <FaChartLine className="text-2xl text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Data & Insights</h3>
                <p className="text-sm text-zinc-400 leading-7">
                  I transform raw data into dashboards and insights using tools like Power BI and Tableau.
                </p>
              </div>

            </div>

            {/* Intro */}

            <p className="mb-8 leading-8 text-zinc-300">
              Hey! I’m Shruti, a Computer Science Engineering student at Lovely Professional University.
              Since starting my B.Tech journey in 2023, I have been building my skills in data analytics,
              machine learning, and software development through hands-on learning and projects.
            </p>

            <p className="mb-10 leading-8 text-zinc-300">
              Through projects like a Fleet Manager Chatbot, Shopify Sales Analytics Dashboard,
              and a Car Price Prediction model, I continue strengthening my skills in Python,
              Power BI, SQL, and problem solving while building practical data-driven solutions.
            </p>

            {/* Extra Curricular */}

            <h2 className="text-3xl text-white mb-8">Extra-Curricular</h2>

            <div className="grid md:grid-cols-2 gap-5 mb-10">

              <div className="border-[.5px] border-zinc-600 rounded-xl p-5 bg-zinc-900/40">
                <p className="text-lg font-semibold text-white">
                  Student Placement Coordinator
                </p>
                <p className="text-zinc-400 mt-2">
                  Coordinated placement activities and supported communication between
                  students and the Training & Placement cell during recruitment drives.
                </p>
              </div>

              <div className="border-[.5px] border-zinc-600 rounded-xl p-5 bg-zinc-900/40">
                <p className="text-lg font-semibold text-white">
                  Indian Red Cross Society
                </p>
                <p className="text-zinc-400 mt-2">
                  Participated in community welfare and health awareness programs
                  and supported social service initiatives.
                </p>
              </div>

            </div>

            {/* Core Stack */}

            <h2 className="text-3xl text-white mb-8">Core Stack</h2>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {CORE_STACK.map((tool) => (
                <div
                  key={tool.name}
                  className="border-[.5px] border-zinc-600 rounded-xl p-4 flex flex-col items-center justify-center gap-3 bg-zinc-900/40 hover:bg-zinc-800/50 transition"
                >
                  {tool.icon}
                  <span className="text-xs text-zinc-400 text-center">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Dev Tools */}

            <h2 className="text-3xl text-white my-10">Developer Tools</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {DEV_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="border-[.5px] border-zinc-600 rounded-xl p-4 flex flex-col items-center justify-center gap-3 bg-zinc-900/40 hover:bg-zinc-800/50 transition"
                >
                  {tool.icon}
                  <span className="text-xs text-zinc-400 text-center">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Education */}

            <h2 className="text-3xl my-10 text-white">Education Snapshot</h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="border-[.5px] border-zinc-600 rounded-xl p-5 bg-zinc-900/40">
                <p className="text-lg font-semibold text-white">
                  Lovely Professional University
                </p>
                <p className="text-zinc-400 mt-2">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-zinc-500 mt-2">
                  August 2023 – Present · CGPA 6.45
                </p>
              </div>

              <div className="border-[.5px] border-zinc-600 rounded-xl p-5 bg-zinc-900/40">
                <p className="text-lg font-semibold text-white">
                  Kendriya Vidyalaya
                </p>
                <p className="text-zinc-400 mt-2">
                  Maithon Dam, Dhanbad
                </p>
                <p className="text-zinc-500 mt-2">
                  Intermediate: 73.4% · Matriculation: 88.83%
                </p>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
