/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ProjectsProps {
  nextSection: () => void;
  prevSection: () => void;
  currentSection: number;
  totalSections: number;
}

interface Project {
  name: string;
  description: string;
  year: string;
  imageUrl: string;
}

export default function Projects({
  nextSection,
  prevSection,
  currentSection,
  totalSections,
}: ProjectsProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      name: "CMS GEEK",
      description: "Design & Development",
      year: "2018",
      imageUrl:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "TATORT RUHRPOTT",
      description: "Design & Development",
      year: "2022",
      imageUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "JUST A WEB DEVELOPER",
      description: "Design & Development",
      year: "2023",
      imageUrl:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // Mouse tracking effect
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (hoveredProject !== null) {
      document.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, [hoveredProject]);

  return (
    <div
      className="min-h-screen bg-[#BD0A0A] relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="pt-16 pb-8 px-8 lg:px-16 fade-in-up"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 text-shadow">
            OWN <span className="text-black">PROJECTS</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl">
            Since customer projects always come first, there is often not much
            time left for my own projects. Here is a small selection.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex-1 px-8 lg:px-16 relative">
          {/* Top border */}
          <div className="max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Row */}
                <div className="border border-x-0 border-white/50 py-10 transition-all duration-500 relative z-20">
                  <div className="flex items-center justify-between w-full">
                    {/* Dot */}
                    <div className="flex-shrink-0">
                      {/* Project indicator */}
                      <motion.div
                        className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full relative"
                        whileHover={{ scale: 1.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white rounded-full"
                          animate={{
                            scale: hoveredProject === index ? [1, 1.3, 1] : 1,
                            opacity: hoveredProject === index ? [1, 0.7, 1] : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: hoveredProject === index ? Infinity : 0,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Project Name */}
                    <div className="flex-1 ml-6 md:ml-8">
                      <motion.h3
                        className="text-3xl lg:text-6xl font-black text-white transition-colors duration-300"
                        animate={{
                          x: hoveredProject === index ? 5 : 0,
                          color:
                            hoveredProject === index ? "#f3f4f6" : "#ffffff",
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {project.name}
                      </motion.h3>
                      <div className="flex lg:hidden">
                      <div className="text-white/70 text-sm md:text-base lg:text-lg xl:text-xl font-light">
                        {project.description}
                      </div>
                    </div>
                    </div>


                    

                    
                    {/* Arrow Button */}
                    <div className="flex justify-between items-center space-x-10">
                      {/* Description - Hidden on mobile */}
                    <div className="hidden lg:flex flex-1 justify-center">
                      <div className="text-white/70 text-sm md:text-base lg:text-lg xl:text-xl font-light">
                        {project.description}
                      </div>
                    </div>

                    {/* Right Side - Description, Year, Arrow */}

                    {/* Year */}
                    <div className="flex items-center space-x-4 ">
<div className="text-white text-xl lg:text-2xl xl:text-3xl font-light">
                        {project.year}
                      </div>
                    </div>
                      <motion.button
                        className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Images with Perfect Tracking */}
      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div
            className="fixed pointer-events-none z-50"
            style={{
              left: mousePosition.x + 50, // Distance from cursor
              top: mousePosition.y - 200,
            }}
            initial={{
              opacity: 0,
              x: -150,
              scale: 0.8,
              rotate: -15,
            }}
            animate={{
              opacity: 1,
              x: 0, // Slide to position
              scale: 1,
              rotate: -8,
            }}
            exit={{
              opacity: 0,
              x: 150,
              scale: 0.8,
              rotate: 15,
              animationDelay:1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.8,
              opacity: { duration: 0.4 },
              x: { duration: 0.5 },
              scale: { duration: 0.4 },
              rotate: { duration: 0.5 },
            }}
            key={hoveredProject} // Force re-animation on each hover
          >
            <motion.div
              animate={{
                rotate: -8 + mousePosition.x * 0.01,
                y: Math.sin(Date.now() * 0.001) * 5, // Subtle floating
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              }}
              className="relative"
            >
              <div className="w-[400px] lg:w-[450px] xl:w-[500px] h-[250px] lg:h-[250px] xl:h-[250px] overflow-hidden shadow-2xl transform">
                <img
                  src={projects[hoveredProject].imageUrl}
                  alt={projects[hoveredProject].name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Project info overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-bold">
                    {projects[hoveredProject].name}
                  </div>
                  <div className="text-sm opacity-90">
                    {projects[hoveredProject].year}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
