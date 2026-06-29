'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

import Link from 'next/link'

interface ServiceSlide {
  id: number
  title: string
  offer: string
  description: string
  image: string
  speed: string
  price: string
  link: string
}

const services: ServiceSlide[] = [
  {
    id: 1,
    title: '🚀 Ultra Fast Internet',
    offer: 'Up to 100 Mbps',
    description: 'Lightning-fast fiber optic connectivity for streaming, gaming, and work from home',
    image: '/fiber-optic-cables-glowing.jpg',
    speed: '100 Mbps',
    price: '₳999/month',
    link: '#packages'
  },
  {
    id: 2,
    title: '🌐 BDIX Local Content',
    offer: '0ms Local Latency',
    description: 'Ultra-fast local content delivery with BDIX integration for zero-buffering streaming',
    image: '/network-server-room-modern-technology.jpg',
    speed: 'Local',
    price: 'Included',
    link: '/portal'
  },
  {
    id: 3,
    title: '🎬 Manu Media Server',
    offer: '2,500+ Content',
    description: 'Unlimited movies, series, and entertainment from your local cache server',
    image: '/happy-family-using-internet-at-home.jpg',
    speed: '4K Ready',
    price: 'Free with all plans',
    link: '/portal'
  },
  {
    id: 4,
    title: '🎯 Premium Package',
    offer: 'Save 30%',
    description: 'Get 100 Mbps + BDIX + Manu Media + 24/7 Support for one unbeatable price',
    image: '/bdix-bangladesh-internet-exchange.jpg',
    speed: 'All Features',
    price: '₳1,499/month',
    link: '#packages'
  }
]

export function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlay(false)
  }

  const slide = services[currentSlide]

  return (
    <section className={`relative w-full ${isFullscreen ? 'fixed inset-0 z-50' : 'h-[600px]'}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover transition-all duration-700"
          priority
        />
        {/* Transparent Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center px-8 md:px-16">
        <div className="max-w-xl">
          <div className="inline-block px-4 py-2 bg-red-600/30 rounded-full border border-red-600/60 mb-6 backdrop-blur-sm">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">{slide.offer}</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {slide.title}
          </h2>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            {slide.description}
          </p>
          
          {/* Service Details */}
          <div className="flex gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <p className="text-white/60 text-sm">Speed</p>
              <p className="text-white font-bold text-lg">{slide.speed}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <p className="text-white/60 text-sm">Pricing</p>
              <p className="text-red-400 font-bold text-lg">{slide.price}</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href={slide.link}>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg">
              Connect Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Fullscreen Button */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm"
        aria-label="Toggle fullscreen"
      >
        <Maximize2 className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 h-2 bg-red-600'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-10 text-white/60 text-sm font-mono">
        {String(currentSlide + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
      </div>
    </section>
  )
}
