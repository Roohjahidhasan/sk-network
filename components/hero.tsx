"use client"

import Link from "next/link"
import { ArrowRight, Zap, Shield, Clock, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const heroSlides = [
  {
    image: "/fiber-optic-cables-glowing.jpg",
    title: "Fiber Optic Network",
    description: "Experience the power of pure light-speed connectivity",
  },
  {
    image: "/happy-family-using-internet-at-home.jpg",
    title: "Connected Homes",
    description: "Bringing families together with seamless internet",
  },
  {
    image: "/network-server-room-modern-technology.jpg",
    title: "Enterprise Infrastructure",
    description: "Professional-grade networking equipment",
  },
  {
    image: "/bdix-bangladesh-internet-exchange.jpg",
    title: "BDIX Connectivity",
    description: "Lightning-fast local content delivery",
  },
]

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(239, 68, 68, 0.3)"
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary/20">
            <Zap className="w-4 h-4" />
            Bangladesh's Fastest Fiber Network
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-balance">
            Lightning Fast
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Broadband Internet
            </span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed text-pretty">
            Experience ultra-fast fiber optic internet with unlimited bandwidth, BDIX connectivity, and 24/7 local
            support. Perfect for homes, offices, and businesses across Dhaka.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 transition-all"
            >
              View Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:01885093170"
              className="inline-flex items-center gap-2 border-2 border-border hover:bg-accent/5 px-8 py-4 rounded-full font-bold transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-2xl">1Gbps</div>
                <div className="text-xs text-muted-foreground">Max Speed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-2xl">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-2xl">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-3xl border border-border/50 overflow-hidden relative group">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-muted-foreground">{slide.description}</p>
                </div>
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
