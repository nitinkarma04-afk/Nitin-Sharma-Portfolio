import { FiCheckCircle, FiCompass, FiTerminal, FiLayers, FiServer, FiZap } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { journeyStages } from "../../data/journey";

const stageIcons = {
  "01": <FiTerminal className="text-blue-400" />,
  "02": <FiLayers className="text-indigo-400" />,
  "03": <FiServer className="text-emerald-400" />,
  "04": <FiZap className="text-violet-400" />,
  "05": <FiCompass className="text-cyan-400" />
};

export default function DevelopmentJourney() {
  return (
    <section id="journey" className="py-20 md:py-28 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Growth Timeline"
          title="Development"
          highlight="Journey & Evolution"
          subtitle="From foundational computer science theory to architecting and deploying full-stack production web applications."
        />

        {/* Timeline Items */}
        <div className="relative border-l border-[#252A35] ml-4 md:ml-32 space-y-12">
          {journeyStages.map((stage) => (
            <div key={stage.step} className="relative pl-6 md:pl-10 group">
              {/* Timeline Marker Icon */}
              <div className="absolute -left-4 top-1.5 w-8 h-8 rounded-full bg-[#11141B] border border-blue-500/40 flex items-center justify-center text-sm shadow-md shadow-blue-500/10 group-hover:scale-110 group-hover:border-blue-400 transition-transform">
                {stageIcons[stage.step] || <FiCheckCircle className="text-blue-400" />}
              </div>

              {/* Side Year / Phase Label for Desktop */}
              <div className="hidden md:block absolute -left-32 top-2.5 text-right w-24">
                <span className="text-xs font-mono font-bold text-blue-400 block">
                  STAGE {stage.step}
                </span>
                <span className="text-[11px] text-[#9CA3AF] block font-mono">
                  {stage.period}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl bg-[#11141B] border border-[#252A35] hover:border-blue-500/30 hover:bg-[#171B24] transition-all duration-300 shadow-lg">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="md:hidden text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    STAGE {stage.step}
                  </span>
                  <span className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                    {stage.phase}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#F5F7FA] mb-2">
                  {stage.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#252A35]/60">
                  {stage.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#08090D] border border-[#252A35] text-xs font-mono text-[#F5F7FA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
