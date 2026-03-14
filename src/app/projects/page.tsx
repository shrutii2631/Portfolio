"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PROJECTS = [
  {
    id: 1,
    name: "Face Recognition Attendance System",
    description: "AI-based attendance system using Flask and OpenCV to automate face-recognition-powered student attendance.",
    link: "https://github.com/aniketrai07/Face-Recognition-Attendance-System",
    image: "/assets/projects-screenshots/portfolio/project.png",
  },
  {
    id: 2,
    name: "Ivy League Intelligence",
    description: "FastAPI-based research assistant that collects university data, deadlines, and admissions insights with automation.",
    link: "https://github.com/aniketrai07/Ivy-league-Intelligence",
    image: "/assets/projects-screenshots/web.png",
  },
  {
    id: 3,
    name: "Fleet Manager Chatbot",
    description: "Flask chatbot application built to automate fleet management queries with a practical conversational interface.",
    link: "https://github.com/aniketrai07/Storify-project",
    image: "/assets/projects-screenshots/1.webp",
  },
  {
    id: 4,
    name: "Car Price Prediction",
    description: "Machine learning workflow using Python, Pandas, NumPy, and Scikit-learn to estimate car prices from automobile features.",
    link: "https://github.com/aniketrai07/ML-Model",
    image: "/assets/projects-screenshots/Senticome.png",
  },
  {
    id: 5,
    name: "Customer Churn Dashboard",
    description: "Power BI dashboard using DAX and Power Query to identify churn risk, trends, and high-value retention opportunities.",
    link: "https://github.com/aniketrai07/Customer-Churn-Analysis",
    image: "/assets/projects-screenshots/Amza.webp",
  },
];

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 min-h-screen py-8">
      <h1 className="text-4xl font-bold mt-[100px] mb-[50px]">Projects</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {PROJECTS.map((project) => (
          <li
            className="w-full max-w-[320px] h-[410px] border-[.5px] rounded-md border-zinc-600 overflow-hidden hover:border-zinc-500 transition-colors"
            key={project.id}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="h-[200px] overflow-hidden bg-zinc-900">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                className="w-full h-[200px] object-cover"
                width={320}
                height={200}
                priority
              />
            </div>
            <div className="p-4 text-zinc-300 h-[210px] flex flex-col">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              </Link>
              <p className="text-xs text-zinc-500 flex-grow overflow-y-auto leading-6">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                View Project →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
