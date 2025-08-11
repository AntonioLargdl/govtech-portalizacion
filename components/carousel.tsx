"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/images/c1.jpeg",
    title: "Cabildo Juvenil",
    description: "Novena Edición - Participación ciudadana juvenil"
  },
  {
    image: "/images/c2.jpg", 
    title: "Sistema Antisoborno",
    description: "Certificación Internacional ISO 37001:2016"
  },
  {
    image: "/images/c3.jpg",
    title: "Módulos de Recaudación",
    description: "Consulta aquí los módulos de recaudación 2025"
  }
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-[#433a6f] via-[#625e8b] to-[#706e94] overflow-hidden">
      <div className=" mx-auto px-4">
        <div className="relative h-auto md:h-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1600/771' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                style={{ aspectRatio: '1600/771' }}
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
