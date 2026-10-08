import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle, FiServer, FiLayers, FiAlertCircle, FiAward } from "react-icons/fi";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import TechBadge from "../components/common/TechBadge";
import { getProjectBySlug, projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#08090D] text-[#F5F7FA] flex flex-col justify-between">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-32 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#11141B] border border-[#252A35] flex items-center justify-center mx-auto text-rose-400 text-2xl mb-6">
            <FiAlertCircle />
          </div>
          <h1 className="text-3xl font-bold font-heading mb-3">Project Not Found</h1>
          <p className="text-[#9CA3AF] mb-8">
            The project case study you requested could not be found or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition-all"
          >
            <FiArrowLeft />
            <span>Return to Projects</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F7FA] font-sans antialiased overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link & Breadcrumb */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#9CA3AF] hover:text-blue-400 transition-colors group"
            >
              <FiArrowLeft className="text-base group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Projects</span>
            </Link>

            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
          </div>

          {/* Hero Header Area */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#11141B] border border-[#252A35] shadow-2xl relative overflow-hidden mb-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-wider font-mono text-blue-400 font-semibold">
                Architecture & Engineering Case Study
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F5F7FA] tracking-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
                {project.description}
              </p>

              {/* Technologies Tags */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold block mb-2 font-mono">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} size="md" active />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#252A35] flex flex-wrap items-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Open Live Demo</span>
                  <FiExternalLink className="text-base" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#171B24] hover:bg-[#252A35] text-[#F5F7FA] border border-[#252A35] hover:border-blue-500/40 font-medium text-sm sm:text-base transition-all hover:-translate-y-0.5"
                >
                  <FiGithub className="text-blue-400 text-base" />
                  <span>Inspect GitHub Source</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section: Architecture & System Design */}
          {project.architecture && (
            <section className="mb-12">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center justify-center text-blue-400">
                    <FiLayers className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F7FA]">
                      Architecture & Stack Design
                    </h2>
                    <p className="text-xs sm:text-sm text-[#9CA3AF]">
                      How the application layers communicate and scale.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.architecture.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#08090D] border border-[#252A35] flex items-start gap-3"
                    >
                      <FiCheckCircle className="text-blue-400 mt-1 shrink-0" />
                      <span className="text-sm text-[#F5F7FA] font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section: Key Features */}
          {project.features && (
            <section className="mb-12">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center justify-center text-indigo-400">
                    <FiServer className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F7FA]">
                      Core Features & Capabilities
                    </h2>
                    <p className="text-xs sm:text-sm text-[#9CA3AF]">
                      Key functionality implemented across frontend and backend.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center gap-3 text-sm text-[#F5F7FA]"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section: Challenges & Technical Solutions */}
          {project.challenges && (
            <section className="mb-12">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F7FA]">
                  Engineering Challenges & Solutions
                </h2>

                <div className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-[#08090D] border border-[#252A35] space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider shrink-0 mt-0.5">
                          Problem:
                        </span>
                        <p className="text-sm font-semibold text-[#F5F7FA]">{c.problem}</p>
                      </div>
                      <div className="flex items-start gap-2 pt-2 border-t border-[#252A35]/50">
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider shrink-0 mt-0.5">
                          Solution:
                        </span>
                        <p className="text-sm text-[#9CA3AF]">{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section: Key Learnings */}
          {project.learnings && (
            <section className="mb-12">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center justify-center text-amber-400">
                    <FiAward className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F7FA]">
                      Engineering Takeaways & Learnings
                    </h2>
                    <p className="text-xs sm:text-sm text-[#9CA3AF]">
                      Key engineering principles reinforced during the project lifecycle.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.learnings.map((learning, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center gap-3 text-sm text-[#F5F7FA]"
                    >
                      <FiCheckCircle className="text-emerald-400 shrink-0" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom Next / Other Projects */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#252A35] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FA]">
                Ready to review another project?
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">
                Explore more full-stack applications in the portfolio.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/#projects"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-md shadow-blue-500/20"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}