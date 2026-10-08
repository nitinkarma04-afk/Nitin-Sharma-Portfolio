import { FiGithub, FiFolder, FiArrowUpRight } from "react-icons/fi";
import { socialLinks } from "../../data/socialLinks";
import SectionHeading from "../common/SectionHeading";

const repositories = [
  {
    name: "Ai-Virtual-Assistant",
    description: "Full-stack AI virtual assistant built with React and Node.js.",
    category: "Full-Stack / AI",
    tech: "JavaScript",
    url: "https://github.com/nitinkarma04-afk/Ai-Virtual-Assistant"
  },
  {
    name: "Eventora",
    description: "Full-stack event booking platform built with the MERN stack.",
    category: "Full-Stack / MERN",
    tech: "JavaScript",
    url: "https://github.com/nitinkarma04-afk/Eventora"
  },
  {
    name: "JAVA-DSA",
    description: "Data Structures & Algorithms practice and problem solving.",
    category: "DSA / Problem Solving",
    tech: "Java",
    url: "https://github.com/nitinkarma04-afk/JAVA-DSA"
  }
];

export default function GithubActivity() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GitHub & Repositories"
          title="GitHub &"
          highlight="Code"
          subtitle="Explore selected repositories, projects, and coding work on GitHub."
        />

        <div className="space-y-8">
          {/* GitHub Profile Identity Header */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#11141B] border border-[#252A35] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center justify-center text-2xl text-[#F5F7FA] shrink-0 shadow-inner">
                <FiGithub />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#F5F7FA]">
                  @nitinkarma04-afk
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
                  Full-Stack Developer • Building real-world web applications
                </p>
              </div>
            </div>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171B24] hover:bg-[#252A35] text-[#F5F7FA] border border-[#252A35] hover:border-blue-500/40 text-sm font-medium transition-all hover:-translate-y-0.5 shadow-sm shrink-0"
            >
              <span>Explore GitHub</span>
              <FiArrowUpRight className="text-base text-blue-400" />
            </a>
          </div>

          {/* Unified Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View repository ${repo.name} on GitHub`}
                className="p-6 rounded-2xl bg-[#11141B] border border-[#252A35] hover:border-blue-500/40 hover:bg-[#171B24] transition-all duration-200 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon, Title & Arrow */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#08090D] border border-[#252A35] flex items-center justify-center text-blue-400 shrink-0 group-hover:border-blue-500/30 transition-colors">
                        <FiFolder className="text-base" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold font-heading text-[#F5F7FA] group-hover:text-blue-300 transition-colors truncate">
                        {repo.name}
                      </h4>
                    </div>
                    <FiArrowUpRight className="text-base text-[#9CA3AF] group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed line-clamp-3 mb-6">
                    {repo.description}
                  </p>
                </div>

                {/* Bottom Metadata & Action */}
                <div className="pt-4 border-t border-[#252A35]/60 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#9CA3AF] bg-[#08090D] px-2.5 py-1 rounded-md border border-[#252A35]">
                    {repo.category}
                  </span>

                  <span className="font-medium text-blue-400 group-hover:text-blue-300 flex items-center gap-1 transition-colors">
                    <span>GitHub</span>
                    <FiArrowUpRight className="text-xs" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
