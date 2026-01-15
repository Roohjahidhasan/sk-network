"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import {
  Wrench,
  Maximize2,
  X,
  Radio,
  Server,
  Film,
  Gauge,
  Globe,
  Activity,
  Monitor,
  Wifi,
  Play,
  Search,
  TrendingUp,
  Star,
  Users,
  Signal,
  ChevronRight,
  Sparkles,
  Zap,
  Download,
  Network,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MediaPlayer } from "@/components/media-player"

type Section = "live" | "movies" | "manu" | "tools"

const tvChannels = [
  { name: "Roarzone", url: "https://tv.roarzone.info/", type: "external" },
  { name: "Cityplex Live", url: "http://live.cityplex.live/", type: "external" },
  { name: "Channel 1", url: "http://172.16.29.28/", type: "local" },
  { name: "Gazi TV", url: "http://moviemazic.xyz/live-tv/gazi-tv.html", type: "external" },
  { name: "Channel 2", url: "http://172.17.50.112/", type: "local" },
  { name: "Channel 3", url: "http://10.99.99.99/", type: "local" },
  { name: "Channel 4", url: "http://10.10.10.2/", type: "local" },
  { name: "Channel 5", url: "http://172.16.50.2/", type: "local" },
  { name: "11Plus Live", url: "https://11plus.live/", type: "external" },
  { name: "Channel 6", url: "http://192.168.91.8/", type: "local" },
]

const movieServers = [
  { name: "ICC FTP", url: "http://10.16.100.244/", type: "local" },
  { name: "Dhaka Flix", url: "http://10.100.100.10/", type: "local" },
  { name: "Movie Hat", url: "http://172.16.50.4/", type: "local" },
  { name: "Moviehaat", url: "https://moviehaat.net/", type: "external" },
  { name: "Cityplex", url: "https://cityplex.live/", type: "external" },
  { name: "Moviemazic", url: "http://moviemazic.xyz/", type: "external" },
  { name: "Binodonmela", url: "http://binodonmela.net/", type: "external" },
  { name: "Takdhum", url: "http://www.takdhum.net:8096/web/index.html#!/home.html", type: "external" },
]

const manuMediaContent = [
  { title: "Latest Movies", count: "2,500+", category: "Hollywood & Bollywood", icon: Film },
  { title: "Web Series", count: "850+", category: "Netflix, Prime, Disney+", icon: Monitor },
  { title: "TV Shows", count: "1,200+", category: "Popular Series", icon: Radio },
  { title: "Anime Collection", count: "450+", category: "Subbed & Dubbed", icon: Star },
]

const sampleMediaItems = [
  {
    id: 1,
    title: "Sample Movie 1",
    thumbnail: "/action-movie-poster.png",
    type: "video" as const,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: "Sample Movie 2",
    thumbnail: "/thriller-movie-poster.png",
    type: "video" as const,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    title: "Sample Series",
    thumbnail: "/drama-series-poster.png",
    type: "video" as const,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    title: "Sample Image",
    thumbnail: "/abstract-movie-poster.png",
    type: "image" as const,
    url: "/cinematic-landscape.png",
  },
]

export function BdixPortal() {
  const [activeSection, setActiveSection] = useState<Section>("live")
  const [ipAddress, setIpAddress] = useState("Loading...")
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string
    type: "video" | "image"
    title: string
  } | null>(null)
  const [speedTestResult, setSpeedTestResult] = useState<string>("")
  const [pingResult, setPingResult] = useState<string>("")
  const [dnsResult, setDnsResult] = useState<string>("")
  const [isTestingSpeed, setIsTestingSpeed] = useState(false)
  const [isTestingPing, setIsTestingPing] = useState(false)
  const [isTestingDns, setIsTestingDns] = useState(false)

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress("Failed to load IP"))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(239, 68, 68, 0.3)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Functional network testing tools
  const runSpeedTest = async () => {
    setIsTestingSpeed(true)
    setSpeedTestResult("Testing download speed...")

    try {
      const startTime = Date.now()
      const response = await fetch("https://speed.cloudflare.com/__down?bytes=25000000", { cache: "no-store" })
      const data = await response.blob()
      const endTime = Date.now()

      const durationInSeconds = (endTime - startTime) / 1000
      const bitsLoaded = data.size * 8
      const speedMbps = (bitsLoaded / durationInSeconds / 1024 / 1024).toFixed(2)

      setSpeedTestResult(`Download Speed: ${speedMbps} Mbps`)
    } catch (error) {
      setSpeedTestResult("Speed test failed. Please try again.")
    } finally {
      setIsTestingSpeed(false)
    }
  }

  const runPingTest = async () => {
    setIsTestingPing(true)
    setPingResult("Testing latency...")

    try {
      const startTime = Date.now()
      await fetch("https://www.google.com", { method: "HEAD", cache: "no-store" })
      const endTime = Date.now()
      const latency = endTime - startTime

      setPingResult(`Latency: ${latency}ms`)
    } catch (error) {
      setPingResult("Ping test failed. Please try again.")
    } finally {
      setIsTestingPing(false)
    }
  }

  const runDnsLookup = async () => {
    setIsTestingDns(true)
    setDnsResult("Looking up DNS...")

    try {
      const response = await fetch(`https://dns.google/resolve?name=google.com`)
      const data = await response.json()

      if (data.Answer && data.Answer.length > 0) {
        const ips = data.Answer.map((answer: any) => answer.data).join(", ")
        setDnsResult(`DNS: ${ips}`)
      } else {
        setDnsResult("No DNS records found")
      }
    } catch (error) {
      setDnsResult("DNS lookup failed. Please try again.")
    } finally {
      setIsTestingDns(false)
    }
  }

  const handleSectionChange = useCallback((section: Section) => {
    requestAnimationFrame(() => {
      setActiveSection(section)
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      {selectedMedia && (
        <MediaPlayer
          src={selectedMedia.src}
          type={selectedMedia.type}
          title={selectedMedia.title}
          onClose={() => setSelectedMedia(null)}
        />
      )}

      <div className="relative z-10 border-b border-white/5 bg-black/60 backdrop-blur-2xl sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
                  BDIX Portal
                </h1>
                <p className="text-zinc-500 mt-0.5 text-sm">Premium streaming & network hub</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                <span className="text-sm text-emerald-400 font-medium">All Systems Online</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                <Users className="w-4 h-4 text-zinc-400" />
                <span className="text-sm text-zinc-400">1,247 Active</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {[
              { id: "live", icon: Radio, label: "Live TV", badge: "24/7" },
              { id: "movies", icon: Server, label: "FTP Servers", badge: "8" },
              { id: "manu", icon: Film, label: "Manu Media", badge: "5K+" },
              { id: "tools", icon: Wrench, label: "Network Tools", badge: "Pro" },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSectionChange(tab.id as Section)}
                  className={`group relative flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold transition-all ${
                    activeSection === tab.id
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-xl shadow-red-500/30"
                      : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900/60 hover:text-white border border-zinc-800/50 hover:border-zinc-700/50"
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                  {tab.label}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeSection === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-zinc-800/80 text-zinc-500 group-hover:bg-zinc-800 group-hover:text-zinc-400"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {fullscreenUrl && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            onClick={() => setFullscreenUrl(null)}
            className="fixed top-6 right-6 z-60 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-2xl font-semibold transition-all shadow-2xl shadow-red-500/50 hover:shadow-red-500/70"
          >
            <X className="w-5 h-5" />
            Exit Fullscreen
          </button>
          <iframe src={fullscreenUrl} className="w-full h-full" title="Fullscreen Content" allowFullScreen />
        </div>
      )}

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        {activeSection === "live" && (
          <section>
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Live TV Channels</h2>
                  <p className="text-zinc-500 text-lg">Watch live sports, news, and entertainment</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900">
                    <TrendingUp className="w-4 h-4" />
                    Popular
                  </Button>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <Input
                      placeholder="Search channels..."
                      className="pl-10 w-64 bg-zinc-900/50 border-zinc-800"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tvChannels.map((channel, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-950/50 rounded-3xl shadow-2xl overflow-hidden border border-zinc-900/50 hover:border-red-500/30 transition-all hover:shadow-red-500/10"
                >
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-medium text-white">LIVE</span>
                    </div>
                    {channel.type === "external" && (
                      <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/10">
                        <span className="text-xs font-medium text-zinc-400">HD</span>
                      </div>
                    )}
                  </div>

                  <div className="aspect-video relative overflow-hidden bg-zinc-900">
                    <iframe src={channel.url} className="w-full h-full" title={channel.name} allowFullScreen />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-white mb-1">{channel.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                          <Signal className="w-3.5 h-3.5" />
                          <span>Premium Quality</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center">
                        <Play className="w-5 h-5 text-red-500" />
                      </div>
                    </div>

                    <button
                      onClick={() => setFullscreenUrl(channel.url)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Watch Fullscreen
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "movies" && (
          <section>
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">FTP & Media Servers</h2>
                  <p className="text-zinc-500 text-lg">Browse extensive library of movies, series, and entertainment</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900">
                    <Star className="w-4 h-4" />
                    Featured
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {movieServers.map((server, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-950/50 rounded-3xl shadow-2xl overflow-hidden border border-zinc-900/50 hover:border-red-500/30 transition-all hover:shadow-red-500/10"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-400">Fast</span>
                    </div>
                  </div>

                  <div className="aspect-video relative overflow-hidden bg-zinc-900">
                    <iframe src={server.url} className="w-full h-full" title={server.name} allowFullScreen />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-white mb-1">{server.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                          <Server className="w-3.5 h-3.5" />
                          <span>FTP Server</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center">
                        <Film className="w-5 h-5 text-red-500" />
                      </div>
                    </div>

                    <button
                      onClick={() => setFullscreenUrl(server.url)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Open Server
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "manu" && (
          <section>
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-2">Manu Media Server</h2>
              <p className="text-zinc-500 text-lg">Instant access to thousands of movies, series, and entertainment</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {manuMediaContent.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-6 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-zinc-500 text-sm mb-4">{item.category}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                          {item.count}
                        </p>
                        <p className="text-zinc-600 text-xs">titles</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Media Library</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <Input placeholder="Search media..." className="pl-10 w-64 bg-zinc-900/50 border-zinc-800" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {sampleMediaItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-zinc-950/50 rounded-2xl overflow-hidden border border-zinc-900/50 hover:border-red-500/30 transition-all cursor-pointer"
                    onClick={() => setSelectedMedia({ src: item.url, type: item.type, title: item.title })}
                  >
                    <div className="aspect-[2/3] relative overflow-hidden bg-zinc-900">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                          <Play className="w-7 h-7 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-zinc-500 capitalize">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Access Media Library</h3>
                    <p className="text-sm text-zinc-500">Stream your favorite content instantly</p>
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600">
                  <Play className="w-4 h-4" />
                  Browse All
                </Button>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 bg-black shadow-2xl">
                <iframe
                  src="http://192.168.1.100:8096"
                  className="w-full h-[600px]"
                  title="Manu Media Server"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {activeSection === "tools" && (
          <section>
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-2">Network Tools</h2>
              <p className="text-zinc-500 text-lg">Test your connection and diagnose network performance</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mb-6">
              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Speed Test</h3>
                    <p className="text-sm text-zinc-500">Test your internet connection speed</p>
                  </div>
                </div>
                <div className="mb-6">
                  {speedTestResult && (
                    <div className="mb-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                      <p className="text-white font-medium">{speedTestResult}</p>
                    </div>
                  )}
                  <Button
                    onClick={runSpeedTest}
                    disabled={isTestingSpeed}
                    className="w-full gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600"
                  >
                    <Gauge className="w-4 h-4" />
                    {isTestingSpeed ? "Testing..." : "Run Speed Test"}
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Your IP Address</h3>
                    <p className="text-sm text-zinc-500">Your public IP address</p>
                  </div>
                </div>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
                  <p className="text-4xl font-bold text-white text-center">{ipAddress}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Ping Test</h3>
                    <p className="text-sm text-zinc-500">Test network latency</p>
                  </div>
                </div>
                <div className="mb-6">
                  {pingResult && (
                    <div className="mb-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                      <p className="text-white font-medium">{pingResult}</p>
                    </div>
                  )}
                  <Button
                    onClick={runPingTest}
                    disabled={isTestingPing}
                    className="w-full gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600"
                  >
                    <Activity className="w-4 h-4" />
                    {isTestingPing ? "Testing..." : "Run Ping Test"}
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">DNS Lookup</h3>
                    <p className="text-sm text-zinc-500">Query DNS records</p>
                  </div>
                </div>
                <div className="mb-6">
                  {dnsResult && (
                    <div className="mb-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                      <p className="text-white font-medium text-sm break-all">{dnsResult}</p>
                    </div>
                  )}
                  <Button
                    onClick={runDnsLookup}
                    disabled={isTestingDns}
                    className="w-full gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600"
                  >
                    <Network className="w-4 h-4" />
                    {isTestingDns ? "Looking up..." : "Run DNS Lookup"}
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Network Monitor</h3>
                    <p className="text-sm text-zinc-500">Real-time connection status</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <span className="text-zinc-400">Connection Status</span>
                    <span className="text-emerald-400 font-semibold">Online</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <span className="text-zinc-400">Network Type</span>
                    <span className="text-white font-semibold">Fiber Optic</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <span className="text-zinc-400">Signal Strength</span>
                    <span className="text-white font-semibold">Excellent</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Bandwidth Test</h3>
                    <p className="text-sm text-zinc-500">Monitor bandwidth usage</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400 text-sm">Download</span>
                      <span className="text-white font-semibold">0 MB/s</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-0" />
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400 text-sm">Upload</span>
                      <span className="text-white font-semibold">0 MB/s</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 w-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
