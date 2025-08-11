"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

const navItems = [
  "Inicio",
  "Ayuntamiento", 
  "Servicios del portal",
  "Morelia",
  "Transparencia",
  "Obras y Acciones",
  "Atención Ciudadana"
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative bg-gradient-to-r from-[#404b68] via-[#433a6f] to-[#625e8b] backdrop-blur-md sticky top-0 z-50 overflow-hidden">
      {/* Animated gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#00577f]/30 to-[#2c7898]/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-5 right-20 w-24 h-24 bg-gradient-to-br from-[#706e94]/30 to-[#433a6f]/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute -bottom-5 left-1/2 w-28 h-28 bg-gradient-to-br from-[#2c7898]/20 to-[#00577f]/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  color: "#60a5fa",
                  textShadow: "0 0 8px rgba(96, 165, 250, 0.5)"
                }}
                className="text-white hover:text-blue-300 transition-all duration-300 font-medium relative group"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#2c7898] group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-white p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-to-b from-[#404b68]/95 to-[#433a6f]/95 backdrop-blur-md border-t border-white/20 rounded-b-lg"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block px-4 py-3 text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 transition-all duration-300 border-b border-white/10 last:border-b-0"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
