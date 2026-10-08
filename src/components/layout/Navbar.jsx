import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { socialLinks } from "../../data/socialLinks";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll listener for sticky background and active spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (isHomePage) {
        const sections = ["about", "skills", "projects", "journey", "contact"];
        const scrollPosition = window.scrollY + 120;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (!isHomePage && href.startsWith("#")) {
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090D]/85 backdrop-blur-md border-b border-[#252A35] py-3.5 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            N
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-[#F5F7FA] group-hover:text-blue-400 transition-colors">
            Nitin<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#11141B]/80 border border-[#252A35] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.href.substring(1);
            const target = isHomePage ? link.href : `/${link.href}`;

            return (
              <a
                key={link.name}
                href={target}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-[#F5F7FA] bg-blue-500/15 border border-blue-500/30"
                    : "text-[#9CA3AF] hover:text-[#F5F7FA] hover:bg-[#171B24]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="NITIN-SHARMA-Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#171B24] hover:bg-[#252A35] text-[#F5F7FA] border border-[#252A35] hover:border-blue-500/40 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
          >
            <FiDownload className="text-blue-400 text-sm" />
            <span>Resume</span>
          </a>
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => isHomePage && handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-md shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <span>Hire Me</span>
            <FiArrowUpRight className="text-sm" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="NITIN-SHARMA-Resume.pdf"
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#171B24] border border-[#252A35] text-[#F5F7FA] flex items-center gap-1"
          >
            <FiDownload className="text-blue-400" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-lg bg-[#11141B] border border-[#252A35] text-[#9CA3AF] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#08090D]/95 backdrop-blur-lg border-b border-[#252A35] z-40 px-6 py-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">Navigation</span>
            <div className="flex flex-col gap-1.5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl bg-[#11141B] border border-[#252A35] text-lg font-medium text-[#F5F7FA] hover:text-blue-400 hover:border-blue-500/30 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <FiArrowUpRight className="text-[#9CA3AF]" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#252A35] flex flex-col gap-3">
            <a
              href={socialLinks.resume}
              download="NITIN-SHARMA-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
