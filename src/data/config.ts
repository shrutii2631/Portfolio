const config = {
  title: "Aniket Kumar Rai | Python Full Stack Developer",
  description: {
    long: "Explore the portfolio of Aniket Kumar Rai, a Computer Science Engineering student focused on Python full-stack development, machine learning, analytics, and practical software projects. The portfolio highlights AI-powered applications, dashboards, web apps, and academic achievements presented in a polished interactive style.",
    short:
      "Aniket Kumar Rai — Python Full Stack Developer, machine learning enthusiast, and CSE student.",
  },
  keywords: [
    "Aniket Kumar Rai",
    "Aniket Rai",
    "portfolio",
    "python developer",
    "full stack developer",
    "machine learning",
    "data science",
    "power bi",
    "react",
    "flask",
    "fastapi",
    "computer science engineering",
    "Lovely Professional University",
  ],
  author: "Aniket Kumar Rai",
  email: "aniketrai274409@gmail.com",
  site: "http://localhost:3000",
  githubUsername: "aniketrai07",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://www.linkedin.com/in/aniket-rai7/",
    linkedin: "https://www.linkedin.com/in/aniket-rai7/",
    instagram: "mailto:aniketrai274409@gmail.com",
    github: "https://github.com/aniketrai07",
  },
};
export { config };
