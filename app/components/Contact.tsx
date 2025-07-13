'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Menu Button */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl lg:text-8xl font-black mb-8">
            GET IN <span className="text-red-500">TOUCH</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            For questions, suggestions or anything else, a mail is enough to contact me.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="flex items-center justify-center space-x-4 text-2xl">
            <Mail className="w-8 h-8" />
            <span>hello@just-a-web-developer.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-2xl">
            <Phone className="w-8 h-8" />
            <span>+49 (0) 2369 2959116</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto w-full"
        >
          <form className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder="Please tell me your name?"
                  className="w-full bg-white text-black px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="How can I reply to you (e-mail)? *"
                  className="w-full bg-white text-black px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <textarea
                placeholder="What would you like to talk about? *"
                rows={6}
                className="w-full bg-white text-black px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                required
              />
            </div>

            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                id="privacy"
                className="mt-2 w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                required
              />
              <label htmlFor="privacy" className="text-sm text-white/80 leading-relaxed">
                I have taken note of the privacy policy. I agree that my information and data will be 
                collected and stored to answer my inquiry by phone or e-mail. My data will not be passed 
                on to other third parties. Note: You can revoke your consent at any time for the future by e-mail 
                to hello@just-a-web-developer.com.*
              </label>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}