'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Facebook, Youtube, Globe, Coffee, Heart } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, url: 'https://linkedin.com', color: 'hover:bg-blue-600' },
    { icon: Github, url: 'https://github.com', color: 'hover:bg-gray-600' },
    { icon: Twitter, url: 'https://twitter.com', color: 'hover:bg-blue-400' },
    { icon: Facebook, url: 'https://facebook.com', color: 'hover:bg-blue-700' },
    { icon: Youtube, url: 'https://youtube.com', color: 'hover:bg-red-600' },
    { icon: Globe, url: 'https://wordpress.com', color: 'hover:bg-blue-500' },
    { icon: Coffee, url: 'https://behance.net', color: 'hover:bg-purple-600' },
    { icon: Globe, url: 'https://dribbble.com', color: 'hover:bg-pink-500' },
  ]

  const organizations = [
    {
      name: 'Tierhilfe Hoffnung',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      url: 'https://tierhilfe-hoffnung.com'
    },
    {
      name: 'Tierschutzverein',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      url: 'https://tierschutzverein.com'
    }
  ]

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Menu Button */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="px-8 lg:px-16 py-16">
        {/* Organizations Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Learn more about the following organizations and feel free to support them.
          </p>
          
          <div className="flex justify-center space-x-12">
            {organizations.map((org, index) => (
              <motion.a
                key={index}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.1, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white text-black py-8 mb-16 relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="whitespace-nowrap text-6xl lg:text-8xl font-black"
          >
            JAVASCRIPT / JQUERY — PHP — WORDPRESS — REACT — NODE.JS — 
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-8 h-8 text-white" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center space-x-8 text-white/60 text-sm">
            <a href="#" className="hover:text-white transition-colors">IMPRINT</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">DISCLAIMER</a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-white/60 text-sm flex items-center justify-center space-x-2">
            <span>Developed with a lot of</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </p>
        </motion.div>

        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-20 pb-12"
        >
          <div className="flex float-right items-center justify-between">
            
            
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}