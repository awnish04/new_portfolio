"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Calendar, Tag, User } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // Entry animation per card
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card header */}
      <div className="border-t border-white/10 py-8 hover:bg-white/5 transition-colors duration-300 rounded-lg px-6">
        <div className="flex items-center justify-between">
          {/* Left: Project info */}
          <div className="flex items-center space-x-8 flex-1">
            {/* Dot indicator */}
            <motion.div
              className="w-4 h-4 bg-red-500 rounded-full relative"
              whileHover={{ scale: 1.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-red-500 rounded-full"
                animate={{
                  scale: isHovered ? [1, 1.4, 1] : 1,
                  opacity: isHovered ? [1, 0.6, 1] : 1,
                }}
                transition={{
                  duration: 0.8,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Title & meta */}
            <div className="flex-1">
              <div className="flex items-center space-x-6 mb-2">
                <motion.h3
                  className="text-3xl lg:text-4xl font-black text-white group-hover:text-red-400 transition-colors"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {project.title}
                </motion.h3>
              </div>
              <div className="flex items-center space-x-6 text-white/60 text-sm">
                <span className="flex items-center space-x-1">
                  <Tag className="w-4 h-4" />
                  <span>{project.category}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{project.client}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600"
            whileHover={{ rotate: 45, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </motion.a>
        </div>

        {/* Expandable section (preview) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden mt-6"
        >
          <motion.div
            initial={{ scale: 0.97 }}
            animate={{ scale: isHovered ? 1 : 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left: Image */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0.95,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay & tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-semibold text-sm">{project.client}</div>
                  <div className="text-xs opacity-70">{project.year}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600/90 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </motion.div>

              {/* Right: Details */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{
                  x: isHovered ? 0 : 30,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="flex justify-between">
                  <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {project.subtitle}
                  </h4>

                  </div>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-white font-semibold mb-2 text-sm">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: isHovered ? 1 : 0 }}
                        transition={{
                          duration: 0.3,
                          delay: isHovered ? 0.2 + i * 0.04 : 0,
                          ease: "easeOut",
                        }}
                        className="px-2 py-1 bg-red-600/20 text-red-300 rounded-full text-xs border border-red-600/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View button */}
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{
                    y: isHovered ? 0 : 15,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: isHovered ? 0.3 : 0,
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Project</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
