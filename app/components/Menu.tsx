"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  goToSection: (index: number) => void;
}

export default function Menu({ isOpen, onClose, goToSection }: MenuProps) {
  const menuItems = [
    { name: "ABOUT ME", section: 1 },
    { name: "SELECTED WORKS", section: 2 },
    { name: "OWN PROJECTS", section: 3 },
    { name: "PHOTOGRAPHY", section: 4 },
    { name: "CONTACT", section: 5 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black z-50 flex flex-col"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={onClose}
            className="absolute top-8 right-8 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-8 h-8 text-white" />
            
          </motion.button>

          {/* Menu links */}
          <div className="flex-1 flex flex-col justify-center px-16 lg:px-32">
            <nav className="space-y-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: 0.01 + index * 0.01, type: "spring" }}
                  onClick={() => {
                    goToSection(item.section);
                    onClose();
                  }}
                  className="block text-left text-6xl lg:text-8xl font-black text-white hover:text-red-500 transition-colors w-full"
                  whileHover={{ x: 20 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Bottom right extra */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-16 right-16 text-right text-white space-y-4"
            >
              <div className="text-2xl font-bold">CODE SNIPPETS</div>
              <div className="text-2xl font-bold">FLOATING CONTACT BTN</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
