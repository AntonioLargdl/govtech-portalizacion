"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#404b68] via-[#433a6f] to-[#625e8b] text-white overflow-hidden">
      {/* Animated gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#00577f]/20 to-[#2c7898]/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-10 right-10 w-36 h-36 bg-gradient-to-br from-[#706e94]/25 to-[#433a6f]/25 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-br from-[#2c7898]/15 to-[#00577f]/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute -bottom-10 right-1/4 w-28 h-28 bg-gradient-to-br from-[#625e8b]/20 to-[#706e94]/20 rounded-full blur-2xl"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#404b68]/50 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-4 py-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20">
              <Image
                src="/images/morelia-white.png"
                alt="Morelia"
                width={60}
                height={60}
                className="h-20 w-auto"
              />
              <Image
                src="/images/ayuntamiento-white.png"
                alt="Ayuntamiento"
                width={60}
                height={60}
                className="h-20 w-auto"
              />
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Contacto
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-blue-300" />
                    <p className="font-semibold text-blue-200">Dirección:</p>
                  </div>
                  <p className="opacity-90">Centro Administrativo Morelia "CAM". Eduardo Ruiz No. 570 | Centro Histórico. C.P. 58000 | Morelia, Michoacán</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
              <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Enlaces
              </h3>
              <div className="space-y-3">
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="block text-sm hover:text-blue-300 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
                >
                  Aviso de privacidad
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="block text-sm hover:text-blue-300 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
                >
                  Transparencia
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
              <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Síguenos
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="p-3 bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl hover:from-blue-500/30 hover:to-blue-700/30 transition-all duration-300 border border-blue-400/20 flex items-center justify-center"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="p-3 bg-gradient-to-br from-pink-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl hover:from-pink-500/30 hover:to-purple-700/30 transition-all duration-300 border border-pink-400/20 flex items-center justify-center"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="p-3 bg-gradient-to-br from-sky-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl hover:from-sky-500/30 hover:to-blue-700/30 transition-all duration-300 border border-sky-400/20 flex items-center justify-center"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="p-3 bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl hover:from-red-500/30 hover:to-red-700/30 transition-all duration-300 border border-red-400/20 flex items-center justify-center"
                >
                  <Youtube className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent pt-8 text-center"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <p className="text-sm bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent font-medium">
              © 2025 H. Ayuntamiento de Morelia | Todos los derechos reservados
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
