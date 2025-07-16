"use client";



import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import PixelBackground from "./ui/PixelBackground"; // Ensure correct path

export default function Menu({ isOpen, onClose, goToSection }) {
  const menuItems = [
    { name: "ABOUT ME", section: 1 },
    { name: "SELECTED WORKS", section: 2 },
    { name: "OWN PROJECTS", section: 3 },
    { name: "PHOTOGRAPHY", section: 4 },
    { name: "CONTACT", section: 5 },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="menu-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* 🟠 Pixel Transition Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <PixelBackground />
          </div>

          {/* 🔵 Menu Content */}
          <div className="relative z-30 flex flex-col h-full text-white">
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute top-8 right-8 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg z-50"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8 text-white" />
            </motion.button>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-16 lg:px-32">
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: 0.9 + index * 0.03, type: "spring" }}
                    onClick={() => {
                      goToSection(item.section);
                      onClose();
                    }}
                    className="block text-left text-6xl lg:text-8xl font-black text-red-500 hover:text-red-800 transition-colors w-full"
                    whileHover={{ x: 20 }}
                  >
                    {item.name}
                  </motion.button>

                  // <motion.button
                  //   key={item.name}
                  //   initial={{ opacity: 0, x: -100 }}
                  //   animate={{ opacity: 1, x: 0 }}
                  //   exit={{ opacity: 0, x: -100 }}
                  //   transition={{ delay: 1.2 + index * 0.03, type: "spring" }}
                  //   whileHover={{
                  //     x: 20,
                  //     transition: { type: "tween", duration: 0.2 }, // <- fast and responsive
                  //   }}
                  //   onClick={() => {
                  //     goToSection(item.section);
                  //     onClose();
                  //   }}
                  //   className="block text-left text-6xl lg:text-8xl font-black text-red-500 hover:text-red-800 transition-colors w-full"
                  // >
                  //   {item.name}
                  // </motion.button>
                ))}
              </nav>

              {/* Footer Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 2 }}
                className="absolute bottom-16 right-16 text-right text-red-500 space-y-4 z-40"
              >
                <div className="text-2xl font-bold">CODE SNIPPETS</div>
                <div className="text-2xl font-bold">FLOATING CONTACT BTN</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
