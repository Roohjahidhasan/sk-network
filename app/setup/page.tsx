import { ConnectionSetup } from "@/components/connection-setup"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "New Connection Setup - SK NETWORK",
  description:
    "Get started with SK NETWORK fiber optic internet. Check coverage, choose your plan, and schedule installation.",
}

export default function SetupPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ConnectionSetup />
      <Footer />
    </main>
  )
}
