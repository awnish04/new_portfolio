'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
  onMenuClick: () => void
}

export default function Navigation({ onMenuClick }: NavigationProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 12 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onMenuClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-xl group transition-colors duration-300
        ${hovered ? 'bg-white' : 'bg-none'}
      `}
    >
      {/* Always-running pulse animation */}
      <motion.div
        className={`absolute w-16 h-16 rounded-full border-4 
          ${hovered ? 'border-red-400' : 'border-white'}
          opacity-30
        `}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 1.5,delay:2, repeat: Infinity }}
      />
      <motion.div
        className={`absolute w-20 h-20 rounded-full border-2 
          ${hovered ? 'border-red-400' : 'border-white'}
          opacity-30
        `}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 1.5,delay:2, repeat: Infinity }}
      />

      {/* 9-dot grid with color change on hover */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-colors duration-300">
        <div className="grid grid-cols-3 gap-[3px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 
                ${hovered ? 'bg-red-600' : 'bg-white'}
              `}
            />
          ))}
        </div>
      </div>
    </motion.button>
  )
}
