"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cloud, Facebook, Instagram } from 'lucide-react'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-r from-[#404b68] via-[#433a6f] to-[#625e8b] text-white py-3 px-4"
    >
      {/* Animated gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-10 w-16 h-16 bg-gradient-to-br from-[#2c7898]/20 to-[#00577f]/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-2 right-20 w-12 h-12 bg-gradient-to-br from-[#706e94]/15 to-[#433a6f]/15 rounded-full blur-xl"
        />
      </div>
      
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/morelia-white.png"
            alt="Morelia"
            width={50}
            height={50}
            className="h-12 w-auto brightness-0 invert contrast-200"
          />
          <Image
            src="/images/ayuntamiento-white.png"
            alt="Ayuntamiento"
            width={50}
            height={50}
            className="h-12 w-auto "
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">H. Ayuntamiento de Morelia</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden sm:flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2"
          >
            <Cloud className="h-5 w-5" />
            <div className="text-sm">
              <div className="font-medium">22°C</div>
              <div className="text-xs opacity-90">Morelia</div>
            </div>
          </motion.div>
          
          <div className="flex items-center space-x-3">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
