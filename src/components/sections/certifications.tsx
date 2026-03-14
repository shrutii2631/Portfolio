"use client";

import Image from "next/image";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const certifications = [
  {
    title: "NPTEL Cloud Computing",
    org: "IIT Kharagpur • NPTEL",
    image: "/assets/certifications/cloud-computing.png",
  },
  {
    title: "Data Structures & Algorithms using Java",
    org: "CipherSchools",
    image: "/assets/certifications/dsa-java.png",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    org: "Oracle",
    image: "/assets/certifications/oracle-ai.png",
  },
  {
    title: "Prompt Engineering: ChatGPT, Generative AI & LLM",
    org: "Infosys Springboard",
    image: "/assets/certifications/prompt-engineering.png",
  },
  {
    title: "Interpersonal Communication for Engineering Leaders",
    org: "Rice University • Coursera",
    image: "/assets/certifications/rice-communication.png",
  },
];

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="max-w-7xl mx-auto">
      <SectionHeader
        id="certifications"
        title="Certifications"
        desc="Professional certifications and learning achievements"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-lg hover:scale-[1.02] transition duration-300 block"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={900}
              height={600}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.org}</p>
              <p className="text-xs text-cyan-300 mt-2">Click to open certificate</p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}