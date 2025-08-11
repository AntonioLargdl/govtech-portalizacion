"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { FileText, Building, CreditCard, Users } from "lucide-react"

const services = [
  {
    title: "Predial   Municipal",
    description:
      "Conoce la plataforma de trámites y pagos en línea, en donde puedes consultar y pagar diferentes trámites.",
    icon: FileText,
    gradient: "from-[#00577f] to-[#2c7898]",
  },
  {
    title: "Licencia de funcionamiento",
    description: "Revalida tu Licencia de funcionamiento blanca en línea, consulta los requisitos.",
    icon: Building,
    gradient: "from-[#433a6f] to-[#625e8b]",
  },
  {
    title: "Facturación electrónica",
    description: "Genera los CFDI necesarios sobre los pagos realizados a la Tesorería Municipal.",
    icon: CreditCard,
    gradient: "from-[#2c7898] to-[#706e94]",
  },
  {
    title: "Sistema de Proveedores",
    description: "Consulta los requisitos para el Padrón de Proveedores y para el Padrón de Contratistas.",
    icon: Users,
    gradient: "from-[#625e8b] to-[#404b68]",
  },
]

export default function QuickActions() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <style jsx>{`
        .card-hover:hover {
          transform: translateY(-8px);
        }
        .card-hover:hover .icon-container {
          transform: scale(1.1);
        }
        .card-hover:hover .gradient-line {
          width: 100%;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#00577f]/10 to-[#2c7898]/10 rounded-full blur-2xl" />
        <div className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-[#433a6f]/8 to-[#625e8b]/8 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-[#2c7898]/12 to-[#706e94]/12 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-[#625e8b]/10 to-[#404b68]/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="Morelia Gobierno Digital"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-[#404b68] mb-4">Trámites más solicitados</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Consulta los trámites más solicitados por los ciudadanos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="group card-hover transition-all duration-300 ease-out">
              <Card className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                <CardContent className="p-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div
                    className={`icon-container w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-4 transition-all duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-xl font-bold text-[#404b68] mb-3 group-hover:text-[#2c7898] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div
                    className={`gradient-line h-1 bg-gradient-to-r ${service.gradient} mt-4 rounded-full w-0 group-hover:w-full transition-all duration-500`}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
