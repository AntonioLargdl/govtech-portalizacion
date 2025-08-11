"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from 'lucide-react'

const news = [
  {
    title: "SERVICIO PÚBLICO. Realiza Municipio de Morelia operativo integral en coordinación con gobierno estatal",
    date: "5 de junio de 2025",
    category: "SERVICIO PÚBLICO",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "MEDIO AMBIENTE. Regala árboles Alfonso Martínez en conmemoración del Día Mundial del Medio Ambiente",
    date: "5 de junio de 2025", 
    category: "MEDIO AMBIENTE",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "INFRAESTRUCTURA. Retira Morelia cables en desuso durante operativo especial",
    date: "5 de junio de 2025",
    category: "INFRAESTRUCTURA", 
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function NewsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 120, 0],
            y: [0, -70, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 left-8 w-42 h-42 bg-gradient-to-br from-[#00577f]/8 to-[#2c7898]/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-12 w-36 h-36 bg-gradient-to-br from-[#433a6f]/6 to-[#625e8b]/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 90, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-24 left-1/3 w-38 h-38 bg-gradient-to-br from-[#2c7898]/10 to-[#706e94]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#404b68] mb-4">
            Noticias
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mantente informado de las últimas noticias y eventos del municipio
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2c7898] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#404b68] mb-4 line-clamp-3 group-hover:text-[#2c7898] transition-colors">
                    {article.title}
                  </h3>
                  
                  <Button 
                    variant="ghost" 
                    className="text-[#2c7898] hover:text-[#404b68] p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Leer más <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#00577f] to-[#2c7898] hover:from-[#2c7898] to-[#00577f] text-white px-8 py-3 rounded-full"
          >
            Ver más noticias
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
