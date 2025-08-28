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
    title: "Flutter Developer",
    company_name: "UPDOT",
    date: "May 2025 - Present",
    details: [
      "Managed live production app with more than <span style='color: #60A5FA;'>ten thousand active users</span> across Android and iOS platforms using Flutter, Provider, and Firebase ecosystem",
      "Implemented core features including <span style='color: #60A5FA;'>push notifications, deep linking</span>, Firebase Analytics, content management system integration using REST APIs, and <span style='color: #60A5FA;'>payment gateway</span> with secure authentication",
      "Maintained app store presence on <span style='color: #60A5FA;'>Google Play Store and Apple App Store</span>, handling releases, updates, and compliance requirements while monitoring store performance metrics",
      "Minimized crash rates through proactive <span style='color: #60A5FA;'>error monitoring</span>, exception handling, and <span style='color: #60A5FA;'>performance optimization</span> using Firebase Crashlytics and custom logging solutions"
    ],
  },
  {
    title: "Software Developer",
    company_name: "AZUSOL GLOBAL LLP",
    date: "Apr 2024 - May 2025",
    details: [
      "Developed, designed and evaluated code for mobile and web-based applications in <span style='color: #60A5FA;'>Flutter</span> while ensuring high functionality across diverse platforms, with <span style='color: #60A5FA;'>BLoC and GetX</span> for state management",
      "Integrated <span style='color: #60A5FA;'>real-time APIs</span> and local databases like <span style='color: #60A5FA;'>Hive and SQLite</span>, ensuring seamless data flow at scale",
      "Improved service reliability and reduced latency through systematic debugging and optimizations",
      "Worked with <span style='color: #60A5FA;'>Microsoft Azure</span>, implementing AI-driven features and cloud-native solutions",
      "Engaged in daily stand-ups and sprint planning to support iterative development and team alignment"
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

