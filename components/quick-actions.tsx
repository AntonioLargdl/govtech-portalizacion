"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { FileText, Building, CreditCard, Users } from 'lucide-react'

const services = [
  {
    title: "Predial Municipal",
    description: "Conoce la plataforma de trámites y pagos en línea, en donde puedes consultar y pagar diferentes trámites.",
    icon: FileText,
    gradient: "from-[#00577f] to-[#2c7898]"
  },
  {
    title: "Licencia de funcionamiento",
    description: "Revalida tu Licencia de funcionamiento blanca en línea, consulta los requisitos.",
    icon: Building,
    gradient: "from-[#433a6f] to-[#625e8b]"
  },
  {
    title: "Facturación electrónica",
    description: "Genera los CFDI necesarios sobre los pagos realizados a la Tesorería Municipal.",
    icon: CreditCard,
    gradient: "from-[#2c7898] to-[#706e94]"
  },
  {
    title: "Proveedores",
    description: "Consulta los requisitos para el Padrón de Proveedores y para el Padrón de Contratistas.",
    icon: Users,
    gradient: "from-[#625e8b] to-[#404b68]"
  }
]

export default function QuickActions() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 mt-24 left-10 w-32 h-32 bg-gradient-to-br from-[#00577f]/20 to-[#2c7898]/20 rounded-full blur-2xl z-100"
        />
        <motion.div
          animate={{ 
            x: [0, -120, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-[#433a6f]/20 to-[#625e8b]/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-[#2c7898]/12 to-[#706e94]/12 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9
          }}
          className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-[#625e8b]/10 to-[#404b68]/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="Morelia Gobierno Digital"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-[#404b68] mb-4">
            Trámites más solicitados
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Consulta los trámites más solicitados por los ciudadanos
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#404b68] mb-3 group-hover:text-[#2c7898] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-1 bg-gradient-to-r ${service.gradient} mt-4 rounded-full`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
