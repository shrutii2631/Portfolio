"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20"
    >
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8">
        <div className="max-w-3xl">
          <p className="text-base md:text-xl text-zinc-400 mb-4">
            Hi, I am
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin leading-none text-white whitespace-nowrap">
            Aniket Kumar Rai
          </h1>

          <p className="mt-4 text-base md:text-xl text-zinc-400">
            Data Science Enthusiast · Python Developer · ML Learner
          </p>

          <p className="mt-6 max-w-2xl text-sm md:text-base text-zinc-300 leading-7">
            Computer Science Engineering student passionate about data science,
            machine learning, and Python development. I enjoy building
            data-driven applications, dashboards, and practical ML projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/assets/Resume.pdf"
              target="_blank"
              className="rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              <span className="inline-flex items-center gap-2">
                <Download size={18} />
                View Resume
              </span>
            </Link>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition "
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="https://github.com/aniketrai07"
              target="_blank"
              className="rounded-lg border border-white/20 p-3 text-white hover:bg-white/10 transition"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/aniket-rai7"
              target="_blank"
              className="rounded-lg border border-white/20 p-3 text-white hover:bg-white/10 transition"
            >
              <Linkedin size={20} />
            </Link>

            <Link
              href="mailto:aniketrai274409@gmail.com"
              className="rounded-lg border border-white/20 p-3 text-white hover:bg-white/10 transition"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-start justify-center flex-shrink-0 pt-6">
          <div className="rounded-full p-[6px] border border-white/70 bg-white/5 shadow-[0_0_25px_rgba(255,255,255,0.12)]">
            <img
              src="/assets/me.jpg"
              alt="Aniket Kumar Rai"
              className="w-[300px] h-[300px] xl:w-[340px] xl:h-[340px] object-cover rounded-full border-[3px] border-white/90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;