import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import TechBadge from "../common/TechBadge";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group rounded-2xl bg-[#11141B] border border-[#252A35] hover:border-blue-500/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      {/* Top Graphic / Preview Area */}
      <div className="relative bg-[#08090D] p-6 border-b border-[#252A35] overflow-hidden">
        {/* Ambient Gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>

        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {project.badge || `Project 0${index + 1}`}
          </span>
          <span className="text-xs text-[#9CA3AF] font-mono">
            {project.category}
          </span>
        </div>

        {/* Project Header */}
        <h3 className="text-2xl font-bold font-heading text-[#F5F7FA] group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-blue-400 font-mono mt-1">
          {project.tagline}
        </p>

        {/* Micro feature pills */}
        <div className="mt-4 pt-4 border-t border-[#252A35]/60 flex items-center gap-3 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <FiCheckCircle className="text-xs" /> Deployed
          </span>
          <span>•</span>
          <span>Full-Stack Architecture</span>
        </div>
      </div>

      {/* Body Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">
            {project.shortDescription}
          </p>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold block">
              Stack & Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <TechBadge key={tech} name={tech} size="sm" />
              ))}
              {project.technologies.length > 5 && (
                <span className="text-xs font-mono text-[#9CA3AF] self-center pl-1">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons: Clear visual hierarchy */}
        <div className="pt-4 border-t border-[#252A35] space-y-3">
          {/* Primary + Secondary Action Row */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Primary CTA: Live Demo */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>Live Demo</span>
              <FiExternalLink className="text-sm shrink-0" />
            </a>

            {/* Secondary CTA: GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository of ${project.title}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#171B24] hover:bg-[#252A35] text-[#F5F7FA] border border-[#252A35] hover:border-blue-500/40 font-medium text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <FiGithub className="text-sm shrink-0 text-blue-400" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Tertiary CTA: View Full Case Study */}
          <Link
            to={`/project/${project.slug}`}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#9CA3AF] hover:text-blue-400 transition-colors"
          >
            <span>View Architecture Case Study</span>
            <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

