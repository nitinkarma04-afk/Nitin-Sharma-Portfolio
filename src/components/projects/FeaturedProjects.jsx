import { FiGithub } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import { socialLinks } from "../../data/socialLinks";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Production Work"
          title="Featured"
          highlight="Engineering Projects"
          subtitle="Real-world, full-stack applications with live deployments and open-source repositories designed for high performance and clean architecture."
        />

        {/* Projects Grid: Balanced 2-card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {featured.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom GitHub Archive Callout */}
        <div className="max-w-5xl mx-auto mt-14 p-6 rounded-2xl bg-[#11141B] border border-[#252A35] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold font-heading text-[#F5F7FA]">
              Looking for more repositories and experiments?
            </h4>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
              Check out my GitHub for additional algorithms, backend utilities, and frontend components.
            </p>
          </div>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171B24] hover:bg-[#252A35] text-[#F5F7FA] border border-[#252A35] hover:border-blue-500/40 text-sm font-medium transition-all shrink-0 shadow-sm hover:-translate-y-0.5"
          >
            <FiGithub className="text-blue-400" />
            <span>Visit GitHub Archive</span>
          </a>
        </div>
      </div>
    </section>
  );
}
