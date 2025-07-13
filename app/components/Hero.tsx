'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Code, Camera, Palette } from 'lucide-react'

interface HeroProps {
  nextSection: () => void
  prevSection: () => void
  currentSection: number
  totalSections: number
}

export default function Hero({ nextSection }: HeroProps) {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-10"
      >
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-lg">JUST A</div>
            <div className="text-red-400 text-sm">WEB DEVELOPER</div>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex items-center justify-between h-screen px-8 lg:px-16">
        <div className="flex-1 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-black text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              HI, I AM{' '}
              <span className="text-red-500 relative">
                CHRIS
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-red-600 text-white px-6 py-3 inline-block font-semibold text-lg"
            >
              * WORDPRESS DEVELOPER | UI & UX DESIGNER | PHOTOGRAPHER
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex items-center space-x-4 pt-8"
            >
              <motion.button
                onClick={nextSection}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 hover:shadow-lg pulse-red"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
                <span className="font-semibold">FIND OUT MORE</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex space-x-8 pt-8"
            >
              <div className="flex items-center space-x-2 text-white/70">
                <Code className="w-5 h-5" />
                <span>Development</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Palette className="w-5 h-5" />
                <span>Design</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Camera className="w-5 h-5" />
                <span>Photography</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Character illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:block flex-1 relative"
        >
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-96 h-96 bg-gradient-to-br from-red-500/20 to-transparent rounded-full flex items-center justify-center"
            >
              <div className="w-64 h-64 bg-red-600/30 rounded-full flex items-center justify-center">
                <Code className="w-32 h-32 text-white/50" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}