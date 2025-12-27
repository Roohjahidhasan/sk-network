"use client"

import { useState, useEffect, useRef } from "react"
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
  Clock,
  Star,
  Users,
  Signal,
  ChevronRight,
  Sparkles,
  Zap,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Section = "live" | "movies" | "manu" | "tools"

const tvChannels = [
  { name: "TSports", url: "http://moviemazic.xyz/live-tv/tsports.html", type: "external" },
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
  { title: "Latest Movies", count: "2,500+", category: "Hollywood & Bollywood" },
  { title: "Web Series", count: "850+", category: "Netflix, Prime, Disney+" },
  { title: "TV Shows", count: "1,200+", category: "Popular Series" },
  { title: "Anime Collection", count: "450+", category: "Subbed & Dubbed" },
]

export function BdixPortal() {
  const [activeSection, setActiveSection] = useState<Section>("live")
  const [ipAddress, setIpAddress] = useState("Loading...")
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

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
                  onClick={() => setActiveSection(tab.id as Section)}
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
              {manuMediaContent.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-6 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                      <Film className="w-6 h-6 text-red-500" />
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
              ))}
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
                    <h3 className="text-xl font-bold">Speed Test</h3>
                    <p className="text-sm text-zinc-500">Measure your connection speed</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 bg-black">
                  <iframe src="https://fast.com/" className="w-full h-96" title="Speed Test" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-2xl shadow-red-500/50">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Your IP Address</h3>
                <p className="text-zinc-500 mb-6">Current network identifier</p>
                <div className="bg-zinc-950 border border-zinc-800/50 rounded-2xl px-8 py-5 shadow-inner">
                  <p className="text-4xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                    {ipAddress}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                    <Signal className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-400">Connected</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-zinc-400">Low Latency</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Activity,
                  title: "Ping Test",
                  desc: "Check server response time",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Wifi,
                  title: "DNS Lookup",
                  desc: "Resolve domain names",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Monitor,
                  title: "Bandwidth Monitor",
                  desc: "Track usage in real-time",
                  color: "from-emerald-500 to-emerald-600",
                },
              ].map((tool, index) => {
                const Icon = tool.icon
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-6 border border-zinc-900/50 hover:border-red-500/30 transition-all shadow-xl hover:shadow-2xl hover:shadow-red-500/10"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                    <p className="text-zinc-500 text-sm mb-4">{tool.desc}</p>
                    <Button className="w-full gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/50">
                      Run Test
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </Button>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
