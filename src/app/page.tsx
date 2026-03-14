"use client";

import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />

    </>
  );
}