"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const frontY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Sky - Moves down to prevent showing bottom */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[150%] -top-[50%]"
      >
        <Image
          src="/images/hero-bg.png"
          alt="Cielo de Morelia"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Front Cathedral Image - Full width */}
      <motion.div
        style={{ y: frontY }}
        className="absolute bottom-0 left-0 right-0 h-full z-20"
      >
        <Image
          src="/images/hero-front.png"
          alt="Catedral de Morelia"
          fill
          className="object-cover object-bottom w-full"
          priority
        />
      </motion.div>
            {/* Content Overlay */}
      <motion.div
        style={{ y: contentY }}
        className="absolute z-0 flex items-center justify-center w-full md:pt-28 pt-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-widest mb-4 drop-shadow-2xl -z-20 bg-gradient-to-r from-[#00577f] via-[#2c7898] to-[#7d9bb8] bg-clip-text text-transparent">
            MORELIA
          </motion.h1>          
        </motion.div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        style={{ y: contentY }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl -mt-20 md:mt-0"
        >  
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20"
          >
            Patrimonio de la Humanidad UNESCO
          </motion.span>       
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex justify-center"
          >
            <motion.button
              className="relative bg-gradient-to-r from-[#00577f] via-[#2c7898] to-[#7d9bb8] text-white px-12 py-4 text-xl font-bold shadow-2xl rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(0, 87, 127, 0.5)",
                  "0 0 60px rgba(0, 87, 127, 0.8)",
                  "0 0 30px rgba(0, 87, 127, 0.5)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">
                El mejor lugar para vivir
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-black/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
