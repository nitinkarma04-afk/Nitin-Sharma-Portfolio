import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090D] border-t border-[#252A35] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#252A35]/60">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-bold text-white text-sm">
                N
              </div>
              <span className="text-xl font-bold font-heading text-[#F5F7FA]">
                Nitin Sharma<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#9CA3AF] mt-1.5 max-w-sm">
              Full-Stack MERN Developer building scalable, performant web applications.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#9CA3AF]">
            <a href="#about" className="hover:text-[#F5F7FA] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#F5F7FA] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#F5F7FA] transition-colors">
              Projects
            </a>
            <a href="#journey" className="hover:text-[#F5F7FA] transition-colors">
              Journey
            </a>
            <a href="#contact" className="hover:text-[#F5F7FA] transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-[#11141B] border border-[#252A35] flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-blue-500/40 hover:bg-[#171B24] transition-all"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-[#11141B] border border-[#252A35] flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-blue-500/40 hover:bg-[#171B24] transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-lg bg-[#11141B] border border-[#252A35] flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-blue-500/40 hover:bg-[#171B24] transition-all"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>© {currentYear} Nitin Sharma. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed & Engineered with React + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

