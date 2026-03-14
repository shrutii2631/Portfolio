"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PROJECTS = [
  {
    id: 1,
    name: "Shopify Sales Analytics Dashboard",
    description:
      "Interactive Power BI dashboard built to analyze Shopify sales performance, customer behavior, and revenue trends for data-driven decision making.",
    link: "https://github.com/shrutii2631/Shopify-PowerBI",
    image: "/assets/projects-screenshots/shopify-powerbi.png",
  },
  {
    id: 2,
    name: "Car Price Prediction",
    description:
      "Machine learning project that predicts car prices using Python, Pandas, NumPy, and Scikit-learn based on vehicle features and historical data.",
    link: "https://github.com/shrutii2631/CAR_PREDICTION",
    image: "/assets/projects-screenshots/car-prediction.png",
  },
  {
    id: 3,
    name: "Storify",
    description:
      "Web application for creating, managing, and exploring digital stories with a clean interface and practical content-sharing experience.",
    link: "https://github.com/shrutii2631/storify",
    image: "/assets/projects-screenshots/storify.png",
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
