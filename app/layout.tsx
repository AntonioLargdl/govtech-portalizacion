import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'H. Ayuntamiento de Morelia - Portal Ciudadano',
  description: 'Portal oficial del Gobierno Municipal de Morelia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
