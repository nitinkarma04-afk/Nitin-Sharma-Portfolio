import { useState } from "react";
import { FiCode, FiServer, FiDatabase, FiTerminal, FiTool } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { skillCategories } from "../../data/skills";

const categoryIcons = {
  frontend: <FiCode className="text-blue-400 text-lg" />,
  backend: <FiServer className="text-green-400 text-lg" />,
  database: <FiDatabase className="text-emerald-400 text-lg" />,
  languages: <FiTerminal className="text-purple-400 text-lg" />,
  tools: <FiTool className="text-amber-400 text-lg" />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills &"
          highlight="Tooling Stack"
          subtitle="A comprehensive toolkit cultivated through rigorous problem solving, full-stack development, and hands-on project implementations."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-[#11141B] text-[#9CA3AF] hover:text-white border border-[#252A35]"
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-[#11141B] text-[#9CA3AF] hover:text-white border border-[#252A35]"
              }`}
            >
              <span>{cat.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#11141B] border border-[#252A35] hover:border-blue-500/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-[#252A35]">
                  <div className="w-10 h-10 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center justify-center">
                    {categoryIcons[category.id] || <FiCode className="text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-[#F5F7FA]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF]">
                      {category.skills.length} core competencies
                    </p>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs text-[#9CA3AF] my-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? "bg-blue-500/10 text-blue-300 border border-blue-500/30"
                          : "bg-[#08090D] text-[#F5F7FA] border border-[#252A35]"
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-[#9CA3AF] font-mono ml-0.5">
                          • {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#252A35]/50 flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                <span>Status</span>
                <span className="text-emerald-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

