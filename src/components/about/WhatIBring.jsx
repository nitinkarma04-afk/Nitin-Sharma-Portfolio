import { FiLayers, FiCpu, FiLayout, FiCloud } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { aboutData } from "../../data/aboutData";

const icons = {
  fullstack: <FiLayers className="w-6 h-6 text-blue-400" />,
  "problem-solving": <FiCpu className="w-6 h-6 text-indigo-400" />,
  "clean-ui": <FiLayout className="w-6 h-6 text-cyan-400" />,
  deployment: <FiCloud className="w-6 h-6 text-violet-400" />
};

export default function WhatIBring() {
  return (
    <section className="py-16 md:py-24 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Value Proposition"
          title="What I"
          highlight="Bring to Your Team"
          subtitle="A combination of solid full-stack development skills, algorithmic problem solving, and production-driven mindset."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.whatIBring.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#11141B] border border-[#252A35] hover:border-blue-500/40 hover:bg-[#171B24] transition-all duration-300 group shadow-lg flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                  {icons[item.id] || <FiLayers className="w-6 h-6 text-blue-400" />}
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold font-heading text-[#F5F7FA] mt-1 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#252A35]/60 flex items-center text-xs font-medium text-[#9CA3AF] group-hover:text-blue-300 transition-colors">
                <span>Production Focused</span>
                <span className="ml-auto">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

