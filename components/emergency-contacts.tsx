"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Shield, Users, Heart } from 'lucide-react'

const emergencyContacts = [
  {
    number: "072",
    service: "Atención ciudadana",
    icon: Phone,
    gradient: "from-[#00577f] to-[#2c7898]"
  },
  {
    number: "911", 
    service: "Emergencias",
    icon: Shield,
    gradient: "from-red-500 to-red-600"
  },
  {
    number: "4431135000",
    service: "Policía de Morelia",
    icon: Shield,
    gradient: "from-[#433a6f] to-[#625e8b]"
  },
  {
    number: "4431134000",
    service: "DIF Municipal", 
    icon: Heart,
    gradient: "from-[#2c7898] to-[#706e94]"
  },
  {
    number: "4433225501",
    service: "Protección civil",
    icon: Users,
    gradient: "from-[#625e8b] to-[#404b68]"
  }
]

export default function EmergencyContacts() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-[#2c7898]/20 via-[#00577f]/15 to-[#706e94]/20 overflow-hidden">
      {/* Animated gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-5 left-10 w-24 h-24 bg-gradient-to-br from-[#00577f]/10 to-[#2c7898]/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-5 right-20 w-28 h-28 bg-gradient-to-br from-[#706e94]/8 to-[#433a6f]/8 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 space-y-4"
        >
          <h2 className="text-3xl font-bold text-[#404b68]">
            Teléfonos de emergencia
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#00577f] to-[#2c7898] mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[#2c7898] font-medium mt-3 tracking-wider"
          >
            TE AYUDAMOS EN EL MOMENTO
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:w-full gap-4">
          {emergencyContacts.map((contact, index) => (
            <motion.div
              key={contact.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group w-full"
            >
              <Card className="h-full lg:w-full lg:flex-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold mb-1 text-[#404b68] group-hover:text-[#2c7898] transition-colors"
                  >
                    {contact.number}
                  </motion.h3>
                  
                  <h4 className="text-sm font-semibold text-[#2c7898]">
                    {contact.service}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
