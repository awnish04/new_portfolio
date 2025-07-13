/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Carousel from "./ui/Carousel";
import ProjectCard from "./ui/ProjectCard";

interface WorksProps {
  nextSection: () => void;
  prevSection: () => void;
  currentSection: number;
  totalSections: number;
}

export default function Works({
  nextSection,
  prevSection,
  currentSection,
  totalSections,
}: WorksProps) {
  const projects = [
    {
      id: 1,
      title: "LUXURY VILLA PORT D'ANDRATX",
      subtitle: "MODERN ELEGANCE EMBEDDED IN THE NATURAL BEAUTY OF MALLORCA",
      category: "Property Website",
      year: "2023",
      client: "Luxury Real Estate",
      description:
        "On this lovely apartment you find the rock from the design of this elegant modern villa with maximum comfort and luxurious amenities. The website showcases stunning photography and immersive virtual tours.",
      technologies: [
        "WordPress",
        "Custom Theme",
        "Advanced Custom Fields",
        "GSAP",
      ],
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://villa-andratx.com",
    },
    {
      id: 2,
      title: "SECURESS INSURANCE",
      subtitle: "COMPREHENSIVE INSURANCE SOLUTIONS FOR MODERN BUSINESSES",
      category: "Corporate Website",
      year: "2023",
      client: "Securess GmbH",
      description:
        "A modern insurance platform providing comprehensive coverage solutions with user-friendly interface and seamless claim processing. Built with performance and accessibility in mind.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image:
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://securess.com",
    },
    {
      id: 3,
      title: "TECH STARTUP PLATFORM",
      subtitle: "INNOVATIVE SOLUTIONS FOR MODERN BUSINESSES",
      category: "Platform Design",
      year: "2022",
      client: "StartupHub",
      description:
        "A cutting-edge platform designed for tech startups to showcase their innovations and connect with investors. Features include pitch deck builder and investor matching.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://startup-platform.com",
    },
    {
      id: 4,
      title: "CREATIVE AGENCY PORTFOLIO",
      subtitle: "SHOWCASING CREATIVE EXCELLENCE AND INNOVATION",
      category: "Agency Website",
      year: "2022",
      client: "Creative Studio",
      description:
        "A stunning portfolio website for a creative agency, featuring interactive animations, case studies, and a dynamic project showcase with advanced filtering capabilities.",
      technologies: ["Gatsby", "GraphQL", "Framer Motion", "Contentful"],
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://creative-agency.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="pt-16 pb-8 px-8 lg:px-16 fade-in-up"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 text-shadow">
            SELECTED <span className="text-[#BD0A0A]">WORKS</span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Here are a handful of references. Move the mouse over the
            corresponding reference to see project details and preview.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-8 lg:px-16 mb-16"
        >
          <div className="max-w-full mx-auto">
            <Carousel items={projects} />
          </div>
        </motion.div>

        {/* Projects List with Hover Effects */}
        <div className="px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">All Projects</h3>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 p-8 lg:px-16"
        >
          <div className="flex items-center justify-center pt-8">
            <motion.button
              onClick={nextSection}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


// 'use client'

// import { motion } from 'framer-motion'
// import Carousel from './ui/Carousel'
// import ProjectCard from './ui/ProjectCard'

// interface WorksProps {
//   nextSection: () => void
//   prevSection: () => void
//   currentSection: number
//   totalSections: number
// }

// export default function Works({ nextSection, prevSection, currentSection, totalSections }: WorksProps) {
//   const projects = [
//     {
//       id: 1,
//       title: "LUXURY VILLA PORT D'ANDRATX",
//       subtitle: "MODERN ELEGANCE EMBEDDED IN THE NATURAL BEAUTY OF MALLORCA",
//       category: "Property Website",
//       year: "2023",
//       client: "Luxury Real Estate",
//       description: "On this lovely apartment you find the rock from the design of this elegant modern villa with maximum comfort and luxurious amenities. The website showcases stunning photography and immersive virtual tours.",
//       technologies: ["WordPress", "Custom Theme", "Advanced Custom Fields", "GSAP"],
//       image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
//       url: "https://villa-andratx.com"
//     },
//     {
//       id: 2,
//       title: "SECURESS INSURANCE",
//       subtitle: "COMPREHENSIVE INSURANCE SOLUTIONS FOR MODERN BUSINESSES",
//       category: "Corporate Website",
//       year: "2023",
//       client: "Securess GmbH",
//       description: "A modern insurance platform providing comprehensive coverage solutions with user-friendly interface and seamless claim processing. Built with performance and accessibility in mind.",
//       technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
//       image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
//       url: "https://securess.com"
//     },
//     {
//       id: 3,
//       title: "TECH STARTUP PLATFORM",
//       subtitle: "INNOVATIVE SOLUTIONS FOR MODERN BUSINESSES",
//       category: "Platform Design",
//       year: "2022",
//       client: "StartupHub",
//       description: "A cutting-edge platform designed for tech startups to showcase their innovations and connect with investors. Features include pitch deck builder and investor matching.",
//       technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
//       image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
//       url: "https://startup-platform.com"
//     },
//     {
//       id: 4,
//       title: "CREATIVE AGENCY PORTFOLIO",
//       subtitle: "SHOWCASING CREATIVE EXCELLENCE AND INNOVATION",
//       category: "Agency Website",
//       year: "2022",
//       client: "Creative Studio",
//       description: "A stunning portfolio website for a creative agency, featuring interactive animations, case studies, and a dynamic project showcase with advanced filtering capabilities.",
//       technologies: ["Gatsby", "GraphQL", "Framer Motion", "Contentful"],
//       image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
//       url: "https://creative-agency.com"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gray-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }} />
//         </div>
//       </div>

//       <div className="relative z-10 min-h-screen">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="pt-20 pb-12 px-8 lg:px-16 text-center"
//         >
//           <h2 className="text-6xl lg:text-8xl font-black text-white mb-6">
//             SELECTED <span className="text-red-500">WORKS</span>
//           </h2>
//           <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
//             Here are a handful of references. Move the mouse over the corresponding reference to see project details and preview.
//           </p>
//         </motion.div>

//         {/* Carousel Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="px-8 lg:px-16 mb-20"
//         >
//           <div className="max-w-7xl mx-auto">
//             <Carousel items={projects} />
//           </div>
//         </motion.div>

//         {/* Projects List with Hover Effects */}
//         <div className="px-8 lg:px-16">
//           <div className="max-w-7xl mx-auto">
//             <h3 className="text-2xl font-bold text-white mb-8">
//               All Projects
//             </h3>
//             {projects.map((project, index) => (
//               <ProjectCard
//                 key={project.id}
//                 project={project}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="mt-16 p-8 lg:px-16"
//         >
//           <div className="flex items-center justify-between border-t border-white/10 pt-8">
//             <div className="text-white/40 text-sm">
//               © 2024 Chris - Web Developer. All rights reserved.
//             </div>
            
//             <motion.button
//               onClick={nextSection}
//               className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View My Projects
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }