import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
})

export const metadata: Metadata = {
  title: "SK NETWORK | Premium Fiber Optic Internet Solutions",
  description:
    "Ultra-low latency fiber optics designed for pro gamers, 4K streamers, and high-performance businesses in Dhaka. 99.9% uptime guarantee.",
  keywords: "fiber internet, broadband, ISP, Dhaka, Bangladesh, gaming internet, 4K streaming",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
