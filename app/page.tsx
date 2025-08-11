import Hero from "@/components/hero"
import QuickActions from "@/components/quick-actions"
import Carousel from "@/components/carousel"
import CitizenPortal from "@/components/citizen-portal"
import MayorMessage from "@/components/mayor-message"
import NewsSection from "@/components/news-section"
import EmergencyContacts from "@/components/emergency-contacts"

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <Carousel />
      <CitizenPortal />
      <MayorMessage />
      <NewsSection />
      <EmergencyContacts />
    </>
  )
}
