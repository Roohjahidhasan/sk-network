"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-[#05070a]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-white">sk</span>
            <span className="text-red-500">network</span>
          </div>
        </Link>

        <div className="hidden lg:flex space-x-10 text-sm font-semibold tracking-wide">
          <Link href="/#home" className="hover:text-red-500 transition">
            HOME
          </Link>
          <Link href="/#about" className="hover:text-red-500 transition">
            WHY US
          </Link>
          <Link href="/#packages" className="hover:text-red-500 transition">
            PACKAGES
          </Link>
          <Link href="/portal" className="hover:text-red-500 transition">
            BDIX PORTAL
          </Link>
          <Link href="/#speedtest" className="hover:text-red-500 transition">
            SPEEDTEST
          </Link>
          <Link href="/#contact" className="hover:text-red-500 transition">
            SUPPORT
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://sknetwork.ispdigital.cloud/Account/Login"
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs hover:bg-red-500 hover:text-white transition"
          >
            CLIENT PORTAL
          </Link>
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#05070a] border-t border-white/5">
          <div className="flex flex-col space-y-4 px-6 py-6 text-sm font-semibold">
            <Link href="/#home" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/#about" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>
              WHY US
            </Link>
            <Link href="/#packages" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>
              PACKAGES
            </Link>
            <Link href="/portal" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>
              BDIX PORTAL
            </Link>
            <Link href="/#speedtest" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>
              SPEEDTEST
            </Link>
            <Link href="/#contact" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>
              SUPPORT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
