import { FiArrowDown, FiDownload } from "react-icons/fi";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import DeveloperCard from "./DeveloperCard";
import { socialLinks } from "../../data/socialLinks";

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-600/5 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Small Status Greeting */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141B] border border-[#252A35] text-xs sm:text-sm font-medium text-[#F5F7FA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-[#9CA3AF]">Hi, I'm</span>
              <span className="font-semibold text-white">Nitin Sharma</span>
              <span className="text-[#252A35]">|</span>
              <span className="text-blue-400 font-mono text-xs">Final-Year B.Tech IT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold font-heading tracking-tight text-[#F5F7FA] leading-[1.15]">
              Full-Stack{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                MERN Developer
              </span>
            </h1>

            {/* Recruiter-focused Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I build modern, scalable web applications with React, Node.js, Express, and MongoDB. Focused on clean architecture, responsive UX, and production deployment.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="#projects"
                onClick={scrollToProjects}
                variant="primary"
                size="md"
                icon={<FiArrowDown className="animate-bounce text-sm" />}
              >
                View Projects
              </Button>

              <Button
                href={socialLinks.resume}
                download="NITIN-SHARMA-Resume.pdf"
                variant="secondary"
                size="md"
                icon={<FiDownload className="text-blue-400 text-sm" />}
                external
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-6 border-t border-[#252A35]/60 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">
                Connect With Me
              </span>
              <SocialLinks iconSize="text-base" />
            </div>
          </div>

          {/* Right Column: Desktop Developer Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DeveloperCard />
          </div>
        </div>
      </div>
    </section>
  );
}
