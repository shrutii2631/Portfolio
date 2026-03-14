"use client";

import React from "react";
import { Mail, Phone, Github, Linkedin, FileDown, MapPin } from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";

const items = [
  {
    title: "Email",
    value: "skumari63160@gmail.com",
    href: "mailto:skumari63160@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    title: "Phone",
    value: "+91 9798774160",
    href: "tel:+919798774160",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    title: "Location",
    value: "Dhanbad, Jharkhand, India",
    href: "https://www.google.com/maps/search/Dhanbad,+Jharkhand,+India",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: "GitHub",
    value: "github.com/shrutii2631",
    href: "https://github.com/shrutii2631                                                    ",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/shruti286",
    href: "https://www.linkedin.com/in/shruti286/ ",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Resume",
    value: "Open PDF resume",
    href: "/assets/Resume.pdf",
    icon: <FileDown className="w-5 h-5" />,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-8 relative">
      <SectionWrapper className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-6 pb-14">
        <div className="relative isolate">
          {/* BACKGROUND TITLE */}
          <div className="inset-x-0 top-0 z-0 pointer-events-none text-center">
            <h2 className="text-5xl md:text-7xl font-semibold text-white/95 leading-none">
              Contact Me
            </h2>
            <p className="mt-3 text-base md:text-lg text-zinc-400">
              Feel free to reach out for internships, collaborations, or project discussions.
            </p>
          </div>

          {/* FOREGROUND CONTENT */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start pt-16">
            <div className="space-y-4">
              {items.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                >
                  <div className="mt-1 text-white">{item.icon}</div>
                  <div>
                    <p className="text-sm text-zinc-400">{item.title}</p>
                    <p className="text-white break-all">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-zinc-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Let me know how I can help you"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-zinc-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Your message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Leave a message..."
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-zinc-400 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ContactSection;