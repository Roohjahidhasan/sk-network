'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react'

interface VideoSlide {
  id: number
  title: string
  description: string
  videoThumbnail: string
  videoUrl: string
}

const videos: VideoSlide[] = [
  {
    id: 1,
    title: 'SK Network Fiber Network',
    description: 'Experience the future of connectivity with our advanced fiber optic infrastructure',
    videoThumbnail: 'linear-gradient(135deg, #e1322d 0%, #1e2a6e 100%)',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'BDIX Integration Benefits',
    description: 'Local content delivery for ultra-fast streaming and gaming performance',
    videoThumbnail: 'linear-gradient(135deg, #1e2a6e 0%, #e1322d 100%)',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'Manu Media Server Library',
    description: 'Unlimited entertainment with our local content cache server',
    videoThumbnail: 'linear-gradient(135deg, #e1322d 0%, #1e2a6e 50%, #e1322d 100%)',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: '24/7 Customer Support',
    description: 'Always here to help with instant chat, WhatsApp, and phone support',
    videoThumbnail: 'linear-gradient(135deg, #1e2a6e 0%, #e1322d 50%, #1e2a6e 100%)',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
]

export function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length)
    setIsAutoPlay(false)
  }

  const slide = videos[currentSlide]

  return (
    <section className={`relative w-full ${isFullscreen ? 'fixed inset-0 z-50' : 'h-[600px]'}`}>
      {/* Video Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{ background: slide.videoThumbnail }}
        />
        {/* Transparent Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl mb-8">
          <div className="inline-block px-4 py-2 bg-red-600/20 rounded-full border border-red-600/50 mb-6">
            <span className="text-red-400 text-sm font-semibold">SK NETWORK</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slide.title}
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            {slide.description}
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all hover:scale-105">
            <Play className="w-5 h-5" />
            Watch Now
          </button>
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
        {videos.map((_, index) => (
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
        {String(currentSlide + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
      </div>
    </section>
  )
}
