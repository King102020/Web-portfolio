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
      "Developed and evaluated code for <span style='color: #60A5FA;'>mobile and web-based applications</span> while ensuring high functionality across diverse platforms.",
      "Implemented innovative features using <span style='color: #60A5FA;'>Kotlin</span>, resulting in a significant increase in monthly active users.",
      "Enhanced the efficiency of the codebase, resulting in a <span style='color: #60A5FA;'>15% decrease in crash rates</span>.",
      "Engaged in collaborative efforts with engineering colleagues, design professionals, and clientele to develop and enhance software products.",
      "Participated in <span style='color: #60A5FA;'>code reviews and software design sessions</span> to improve overall product quality."
    ],
  },
  {
    title: "Mobile Application Developer Intern",
    company_name: "Arresto Solution Pvt Ltd",
    date: "May 2023 - Aug 2023",
    details: [
      "Coordinated efforts between <span style='color: #60A5FA;'>development and QA teams</span>, addressing critical feedback from beta testers.",
      "Directly contributed findings that resolved <span style='color: #60A5FA;'>three major causes of app crashes</span> within two release cycles.",
      "Conducted thorough bug fixes and maintained code integrity through <span style='color: #60A5FA;'>regular monitoring</span> of technology implementations.",
      "Collaborated with senior developers to implement new features and improve existing functionality."
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

