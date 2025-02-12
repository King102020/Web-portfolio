import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "My Self",
  },
  {
    id: "portfolio",
    title: "Portfolio", 
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  // {
  //   id: "resume",
  //   title: "Resume",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "AZUSOL GLOBAL LLP",
    date: "Mar 2024 - Present",
    details: [
      "Developed and evaluated code for <span style='color: #60A5FA;'>mobile and web-based applications</span> while ensuring high functionality across diverse platforms",
      "Reduced app crash rates by <span style='color: #60A5FA;'>15%</span> through systematic troubleshooting and establishing error handling protocols",
      "Coordinated with <span style='color: #60A5FA;'>product managers and design teams</span> to improve user experience and application stability",
      "Conducted thorough <span style='color: #60A5FA;'>code reviews</span> and maintained version control standards using Git"
    ],
  },
  {
    title: "Mobile Application Developer Intern",
    company_name: "Arresto Solution Pvt Ltd",
    date: "May 2023 - Aug 2023",
    details: [
      "Implemented innovative features using <span style='color: #60A5FA;'>Kotlin</span>, resulting in measurable increase in monthly active users",
      "Enhanced codebase efficiency, contributing to a <span style='color: #60A5FA;'>15% decrease</span> in application crash rates",
      "Engaged in collaborative efforts with <span style='color: #60A5FA;'>engineering colleagues and design professionals</span> to develop and enhance software products",
      "Integrated <span style='color: #60A5FA;'>third-party services and RESTful APIs</span> while maintaining consistent performance metrics"
    ],
  },
];

const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };

