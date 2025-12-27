import { BdixPortal } from "@/components/bdix-portal"
import { SupportWidget } from "@/components/support-widget"

export const metadata = {
  title: "BDIX Portal - SK NETWORK",
  description: "Access BDIX servers, live TV, movies, and internet tools",
}

export default function PortalPage() {
  return (
    <>
      <BdixPortal />
      <SupportWidget />
    </>
  )
}
