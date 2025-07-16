"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Projects from "./components/Projects";
import CodingSection from "./components/CodingSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const codingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { component: Hero, name: "hero", ref: heroRef },
    { component: About, name: "about", ref: aboutRef },
    { component: Works, name: "works", ref: worksRef },
    { component: Projects, name: "projects", ref: projectsRef },
    { component: CodingSection, name: "coding", ref: codingRef },
    { component: Contact, name: "contact", ref: contactRef },
    { component: Footer, name: "footer", ref: footerRef },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (index: number) => {
    const section = sections[index];
    if (section.ref.current) {
      section.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 gradient-bg flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white border-t-red-500 rounded-full mx-auto mb-4"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white text-xl font-semibold"
          >
            Loading Portfolio...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Navigation
        // currentSection={0}
        // goToSection={scrollToSection}
        // sections={sections}
        onMenuClick={handleMenuClick}
      />

      <Menu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        goToSection={scrollToSection}
      />

      {/* Single Page Layout */}
      <div className="w-full">
        {/* Hero Section */}
        <div ref={heroRef} className="min-h-screen">
          <Hero
            nextSection={() => scrollToSection(1)}
            prevSection={() => scrollToSection(sections.length - 1)}
            currentSection={0}
            totalSections={sections.length}
          />
        </div>
        
        <ProjectSection/>

        {/* Coding Section */}
        <div ref={codingRef} className="min-h-screen">
          <CodingSection />
        </div>

        {/* About Section */}
        <div ref={aboutRef} className="min-h-screen">
          <About
            nextSection={() => scrollToSection(2)}
            prevSection={() => scrollToSection(0)}
            currentSection={1}
            totalSections={sections.length}
          />
        </div>

        {/* Works Section */}
        <div ref={worksRef} className="min-h-screen">
          <Works
            nextSection={() => scrollToSection(3)}
            prevSection={() => scrollToSection(1)}
            currentSection={2}
            totalSections={sections.length}
          />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="min-h-screen">
          <Projects
            nextSection={() => scrollToSection(4)}
            prevSection={() => scrollToSection(2)}
            currentSection={3}
            totalSections={sections.length}
          />
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="min-h-screen">
          <Contact />
        </div>

        {/* Footer Section */}
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
