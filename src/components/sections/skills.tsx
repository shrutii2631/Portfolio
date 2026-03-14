import { SectionHeader } from "./section-header";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React JS", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    skills: ["Flask", "Django", "FastAPI", "MySQL", "Relational Databases"],
  },
  {
    title: "Data Science & ML",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "EDA",
      "Data Preprocessing",
      "OpenCV",
    ],
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    title: "Developer Tools",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Docker Desktop",
      "Jupyter Notebook",
      "Linux",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen md:min-h-[150dvh] relative px-6 md:px-10 lg:px-16 pt-24 md:pt-32"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          id="skills"
          title="Skills & Tools"
          desc="My core skills and tools used in development, machine learning, dashboards, and databases."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;