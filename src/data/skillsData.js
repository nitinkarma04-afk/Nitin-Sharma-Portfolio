 // src/data/skillsData.js

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import bootstrap from "../assets/skills/bootstrap.png";
import figma from "../assets/skills/figma.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import nodejs from "../assets/skills/nodejs.png";
import express from "../assets/skills/express.png";
import mongodb from "../assets/skills/mongodb.png";
import java from "../assets/skills/java.png";
import c from "../assets/skills/c.png";
import cpp from "../assets/skills/cpp.png";

export const skillsData = {
  frontend: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Bootstrap", icon: bootstrap },
  ],

  backend: [
    { name: "Node.js", icon: nodejs },
    { name: "Express", icon: express },
    { name: "MongoDB", icon: mongodb },
  ],

  tools: [
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Figma", icon: figma },
  ],

  languages: [
    { name: "Java", icon: java },
    { name: "C", icon: c },
    { name: "C++", icon: cpp },
  ],
};
