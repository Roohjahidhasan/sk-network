import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Coverage } from "@/components/coverage"
import { Packages } from "@/components/packages"
import { SpeedTest } from "@/components/speed-test"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SupportWidget } from "@/components/support-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Coverage />
      <Packages />
      <SpeedTest />
      <Contact />
      <Footer />
      <SupportWidget />
    </main>
  )
}
