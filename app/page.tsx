import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Coverage } from "@/components/coverage"
import { Packages } from "@/components/packages"
import { SpeedTest } from "@/components/speed-test"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoSlider } from "@/components/video-slider"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <VideoSlider />
      <Hero />
      <Features />
      <Coverage />
      <Packages />
      <SpeedTest />
      <Contact />
      <Footer />
    </main>
  )
}
