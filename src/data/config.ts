const config = {
  title: "Shruti Kumari | Python Full Stack Developer",
  description: {
    long: "Explore the portfolio of Shruti Kumari, a Computer Science Engineering student focused on Python full-stack development, machine learning, analytics, and practical software projects. The portfolio highlights AI-powered applications, dashboards, web apps, and academic achievements presented in a polished interactive style.",
    short:
      "Shruti Kumari — Python Full Stack Developer, machine learning enthusiast, and CSE student.",
  },
  keywords: [
    "Shruti Kumari",
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
  author: "Shruti Kumari",
  email: "skumari63160@gmail.com",
  site: "http://localhost:3000",
  githubUsername: "aniketrai07",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://www.linkedin.com/in/shruti286/ ",
    linkedin: "https://www.linkedin.com/in/shruti286/ ",
    instagram: "mailto:skumari63160@gmail.com",
    github: "https://github.com/shrutii2631                                                    ",
  },
};
export { config };
