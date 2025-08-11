"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Heart, FileText, Eye, Hammer, Phone, Building, Newspaper } from 'lucide-react'

const portalSections = [
  {
    title: "Ayuntamiento",
    description: "Información institucional y estructura organizacional",
    icon: Building2,
    gradient: "from-[#00577f] to-[#2c7898]"
  },
  {
    title: "Morelia el mejor lugar para vivir",
    description: "Descubre todo lo que nuestra ciudad tiene para ofrecer",
    icon: Heart,
    gradient: "from-[#433a6f] to-[#625e8b]"
  },
  {
    title: "Trámites y servicios",
    description: "Realiza tus trámites de manera fácil y rápida",
    icon: FileText,
    gradient: "from-[#2c7898] to-[#706e94]"
  },
  {
    title: "Transparencia",
    description: "Acceso a información pública y rendición de cuentas",
    icon: Eye,
    gradient: "from-[#625e8b] to-[#404b68]"
  },
  {
    title: "Obras y acciones",
    description: "Conoce los proyectos y obras en desarrollo",
    icon: Hammer,
    gradient: "from-[#00577f] to-[#433a6f]"
  },
  {
    title: "Atención ciudadana",
    description: "Canales de comunicación y atención al ciudadano",
    icon: Phone,
    gradient: "from-[#2c7898] to-[#625e8b]"
  },
  {
    title: "Dependencias",
    description: "Directorio de dependencias municipales",
    icon: Building,
    gradient: "from-[#706e94] to-[#404b68]"
  },
  {
    title: "Noticias",
    description: "Mantente informado de las últimas noticias",
    icon: Newspaper,
    gradient: "from-[#433a6f] to-[#00577f]"
  }
]

export default function CitizenPortal() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Animated gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, -90, 0],
            y: [0, 70, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-5 w-44 h-44 bg-gradient-to-br from-[#00577f]/6 to-[#2c7898]/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 110, 0],
            y: [0, -90, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/3 right-10 w-38 h-38 bg-gradient-to-br from-[#433a6f]/8 to-[#625e8b]/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 70, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-[#2c7898]/7 to-[#706e94]/7 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12
          }}
          className="absolute bottom-10 right-1/3 w-36 h-36 bg-gradient-to-br from-[#625e8b]/9 to-[#404b68]/9 rounded-full blur-3xl"
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
            Portal Ciudadano
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Accede a todos los servicios y información del gobierno municipal
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#404b68] mb-2 group-hover:text-[#2c7898] transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
