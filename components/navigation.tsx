"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useTransition } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isPending, startTransition] = useTransition()

  const handleThemeToggle = () => {
    startTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark")
    })
  }

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/sk-logo.png" alt="SK NETWORK" width={200} height={80} className="h-14 w-auto" />
        </Link>

        <div className="hidden lg:flex space-x-8 text-sm font-semibold">
          <Link href="/#home" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#packages" className="hover:text-primary transition-colors">
            Packages
          </Link>
          <Link href="/#coverage" className="hover:text-primary transition-colors">
            Coverage
          </Link>
          <Link href="/setup" className="hover:text-primary transition-colors">
            Get Connected
          </Link>
          <Link href="/portal" className="hover:text-primary transition-colors">
            BDIX Portal
          </Link>
          <Link href="/#support" className="hover:text-primary transition-colors">
            Support
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            href="https://sknetwork.ispdigital.cloud/Account/Login"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Client Login
          </Link>
          <button className="lg:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex flex-col space-y-4 px-6 py-6 text-sm font-semibold">
            <Link href="/#home" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/#services"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#packages"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/#coverage"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Coverage
            </Link>
            <Link href="/setup" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Get Connected
            </Link>
            <Link href="/portal" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              BDIX Portal
            </Link>
            <Link
              href="/#support"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
