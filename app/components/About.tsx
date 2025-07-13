/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { motion } from 'framer-motion'

interface AboutProps {
  nextSection: () => void
  prevSection: () => void
  currentSection: number
  totalSections: number
}

export default function About({ nextSection, prevSection, currentSection, totalSections }: AboutProps) {
  return (
    <div className="min-h-screen red-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Images */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover-lift"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center">
                    <div className="text-white/50 text-4xl">👨‍💻</div>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover-lift"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-500 rounded-xl flex items-center justify-center">
                    <div className="text-white/50 text-4xl">📸</div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover-lift"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-400 rounded-xl flex items-center justify-center">
                  <div className="text-white/50 text-6xl">🎨</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8"
            >

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="space-y-6 text-white/90 text-lg leading-relaxed"
              >
                <p>
                  Nice that you have found me. Here you can find everything about me and my 
                  work as a web developer. Feel free to contact me if you have any questions.
                </p>
                
                <p>
                  I am very lucky that I was able to turn my hobby into a profession. I regularly 
                  get new challenges that can be solved with code. Sometimes the solution is 
                  simple, sometimes a bit more complicated, but never boring.
                </p>
                
                <p>
                  I started web design in 2001, in a time where everything was programmed 
                  manually in html, css and php. Responsiveness didn't matter at that 
                  time, because there were no smartphones or tablets yet. The 
                  coolest tool at that time was Flash to create animations. That time is long 
                  gone and nobody builds websites with Flash anymore.
                </p>
                
                <p>
                  In 2005 I started as an e-commerce / online marketing manager in a 
                  company, then from 2011 as a videographer and web designer. Here I 
                  use programs like Dreamweaver, Adobe Premiere and After Effects. 
                  Then since 2014 as a web developer / frontend developer in an advertising 
                  agency.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                onClick={nextSection}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}