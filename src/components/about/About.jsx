import { useState } from "react";
import { FiBookOpen, FiUser, FiAward, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { aboutData } from "../../data/aboutData";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering With"
          highlight="Purpose & Focus"
          subtitle="Final-year B.Tech IT undergraduate specializing in full-stack web architecture and real-world engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Navigation / Highlights Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#11141B] border border-[#252A35] shadow-xl">
              <h3 className="text-lg font-bold font-heading text-[#F5F7FA] mb-4">
                Profile Highlights
              </h3>

              <div className="space-y-3">
                {aboutData.summary.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#08090D] border border-[#252A35] flex items-center justify-between"
                  >
                    <span className="text-xs text-[#9CA3AF] uppercase tracking-wider font-semibold">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-[#F5F7FA]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tab Navigation */}
              <div className="mt-6 pt-6 border-t border-[#252A35] space-y-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeTab === "overview"
                      ? "bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold"
                      : "text-[#9CA3AF] hover:text-white hover:bg-[#171B24]"
                  }`}
                >
                  <FiUser className="text-base" />
                  <span>About Overview</span>
                </button>

                <button
                  onClick={() => setActiveTab("education")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeTab === "education"
                      ? "bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold"
                      : "text-[#9CA3AF] hover:text-white hover:bg-[#171B24]"
                  }`}
                >
                  <FiBookOpen className="text-base" />
                  <span>Education History</span>
                </button>

                <button
                  onClick={() => setActiveTab("personal")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeTab === "personal"
                      ? "bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold"
                      : "text-[#9CA3AF] hover:text-white hover:bg-[#171B24]"
                  }`}
                >
                  <FiAward className="text-base" />
                  <span>Key Credentials</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Content */}
          <div className="lg:col-span-8">
            {activeTab === "overview" && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 font-mono">
                    Professional Summary
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#F5F7FA] mt-1">
                    {aboutData.summary.headline}
                  </h3>
                </div>

                <div className="space-y-4 text-[#9CA3AF] leading-relaxed text-base">
                  {aboutData.summary.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#252A35] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-[#F5F7FA]">
                    <FiCheckCircle className="text-emerald-400 shrink-0" />
                    <span>MERN Stack Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#F5F7FA]">
                    <FiCheckCircle className="text-emerald-400 shrink-0" />
                    <span>Production Web Deployments</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#F5F7FA]">
                    <FiCheckCircle className="text-emerald-400 shrink-0" />
                    <span>RESTful API Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#F5F7FA]">
                    <FiCheckCircle className="text-emerald-400 shrink-0" />
                    <span>Clean & Responsive UI/UX</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 font-mono">
                      Academic Background
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-[#F5F7FA] mt-1">
                      Education
                    </h3>
                  </div>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-[#252A35]">
                  {aboutData.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-8 space-y-1">
                      <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-[#11141B]"></div>
                      <span className="inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-1">
                        {edu.year}
                      </span>
                      <h4 className="text-lg font-bold text-[#F5F7FA]">{edu.degree}</h4>
                      <p className="text-sm font-medium text-blue-300">{edu.institution} • {edu.location}</p>
                      <p className="text-xs sm:text-sm text-[#9CA3AF] pt-1">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "personal" && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 font-mono">
                    Candidate Info
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#F5F7FA] mt-1">
                    Details & Contact Overview
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aboutData.personalInfo.map((info, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#08090D] border border-[#252A35] space-y-1"
                    >
                      <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">
                        {info.label}
                      </span>
                      <p className="text-sm sm:text-base font-semibold text-[#F5F7FA] truncate">
                        {info.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

