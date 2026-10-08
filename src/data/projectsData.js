 // src/data/projectsData.js
import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";

export const projectsData = [
  {
    id: 1,
    title: "Personal Information System",
    image: project1,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    github: "https://github.com/yourusername/personal-information-system",
    live: "#",
    desc: "Built a secure full-stack system with authentication and CRUD.",
    caseStudy: {
      problem: "Secure personal data handling",
      solution: "Auth + DB integration",
      learnings: ["Auth", "CRUD", "API"],
    },
  },
  {
    id: 2,
    title: "Lost & Found Portal",
    image: project2,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    github: "https://github.com/yourusername/lost-and-found-portal",
    live: "#",
    desc: "Platform to report and recover lost items.",
    caseStudy: {
      problem: "Lost items management",
      solution: "Search + backend logic",
      learnings: ["Forms", "Search", "Backend"],
    },
  },
];
