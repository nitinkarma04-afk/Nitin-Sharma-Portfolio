import { SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiTailwindcss, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techItems = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#9CA3AF]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Java (DSA)", icon: <FaJava className="text-[#E76F00]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> }
];

export default function TechStrip() {
  return (
    <div className="w-full border-y border-[#252A35] bg-[#08090D]/80 backdrop-blur-md py-6 my-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] shrink-0 font-mono">
            Core Technologies
          </span>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3">
            {techItems.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11141B] border border-[#252A35] hover:border-blue-500/40 hover:bg-[#171B24] transition-all duration-200 text-xs sm:text-sm text-[#F5F7FA] font-medium shadow-sm hover:-translate-y-0.5"
              >
                <span className="text-sm shrink-0">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
