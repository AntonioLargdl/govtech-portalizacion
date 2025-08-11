"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function MayorMessage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 overflow-hidden" style={{
            boxShadow: '0 25px 50px -12px rgba(0, 87, 127, 0.25), 0 0 0 1px rgba(44, 120, 152, 0.1)'
          }}>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative h-64 md:h-full"
                >
                  <Image
                    src="/images/presidente.jpg"
                    alt="Alfonso Jesús Martínez Alcázar"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#404b68]/20" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="p-8 md:p-12"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#404b68] mb-2">
                      Alfonso Jesús Martínez Alcázar
                    </h3>
                    <p className="text-[#2c7898] font-semibold">
                      Presidente Municipal de Morelia 2024-2027
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg font-medium text-[#404b68]">
                      ¡Hola, bienvenidos!
                    </p>
                    <p className="leading-relaxed">
                      En este portal encontrarás información oficial del Gobierno Municipal, 
                      convocatorias, reglamentos, historia, así como herramientas para el 
                      trámite de los servicios en línea.
                    </p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-xl font-bold text-[#2c7898] italic"
                    >
                      Con tu participación, Morelia vuelve a brillar.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
