import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import TechStrip from "../components/hero/TechStrip";
import About from "../components/about/About";
import WhatIBring from "../components/about/WhatIBring";
import Skills from "../components/skills/Skills";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import DevelopmentJourney from "../components/journey/DevelopmentJourney";
import GithubActivity from "../components/github/GithubActivity";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F7FA] font-sans antialiased overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Tech Stack Strip */}
        <TechStrip />

        {/* 3. About Section */}
        <About />

        {/* 4. What I Bring Section */}
        <WhatIBring />

        {/* 5. Skills Section */}
        <Skills />

        {/* 6. Featured Projects */}
        <FeaturedProjects />

        {/* 7. Development Journey */}
        <DevelopmentJourney />

        {/* 8. GitHub Activity */}
        <GithubActivity />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Scroll restoration & floating top trigger */}
      <ScrollToTop />
    </div>
  );
}