"use client"

import { useState, useEffect, useRef } from "react"
import { Wrench, Maximize2, X, Radio, Server, Film, Gauge, Globe, Activity, Monitor, Wifi } from "lucide-react"

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
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />

      <div className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-red-100 to-red-400 bg-clip-text text-transparent">
                BDIX Portal
              </h1>
              <p className="text-zinc-400 mt-1">Access streaming content and network tools</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-zinc-300">Online</span>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setActiveSection("live")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeSection === "live"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700/50"
              }`}
            >
              <Radio className="w-4 h-4" />
              Live TV
            </button>
            <button
              onClick={() => setActiveSection("movies")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeSection === "movies"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700/50"
              }`}
            >
              <Server className="w-4 h-4" />
              FTP Servers
            </button>
            <button
              onClick={() => setActiveSection("manu")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeSection === "manu"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700/50"
              }`}
            >
              <Film className="w-4 h-4" />
              Manu Media Server
            </button>
            <button
              onClick={() => setActiveSection("tools")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeSection === "tools"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700/50"
              }`}
            >
              <Wrench className="w-4 h-4" />
              Network Tools
            </button>
          </div>
        </div>
      </div>

      {fullscreenUrl && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            onClick={() => setFullscreenUrl(null)}
            className="fixed top-6 right-6 z-60 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Live TV Channels</h2>
              <p className="text-zinc-400">Watch live sports and entertainment</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tvChannels.map((channel, index) => (
                <div
                  key={index}
                  className="group relative aspect-video bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all"
                >
                  <iframe src={channel.url} className="w-full h-full" title={channel.name} allowFullScreen />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="font-semibold mb-2">{channel.name}</p>
                    <button
                      onClick={() => setFullscreenUrl(channel.url)}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Fullscreen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "movies" && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">FTP & Media Servers</h2>
              <p className="text-zinc-400">Browse movies, series, and entertainment content</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {movieServers.map((server, index) => (
                <div
                  key={index}
                  className="group relative aspect-video bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all"
                >
                  <iframe src={server.url} className="w-full h-full" title={server.name} allowFullScreen />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="font-semibold mb-2">{server.name}</p>
                    <button
                      onClick={() => setFullscreenUrl(server.url)}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Fullscreen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "manu" && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Manu Media Server</h2>
              <p className="text-zinc-400">Instant access to thousands of movies, series, and entertainment</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mb-8">
              {manuMediaContent.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-red-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.category}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Film className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                      {item.count}
                    </p>
                    <p className="text-zinc-500 text-sm mt-1">Available titles</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Access Manu Media Server</h3>
                  <p className="text-sm text-zinc-400">Browse our extensive media library</p>
                </div>
              </div>
              <iframe
                src="http://192.168.1.100:8096"
                className="w-full h-[600px] rounded-xl border border-zinc-800/50 bg-black"
                title="Manu Media Server"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {activeSection === "tools" && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Network Tools</h2>
              <p className="text-zinc-400">Test your connection and diagnose network issues</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mb-6">
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-red-500/50 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Speed Test</h3>
                    <p className="text-sm text-zinc-400">Measure your connection speed</p>
                  </div>
                </div>
                <iframe
                  src="https://fast.com/"
                  className="w-full h-96 rounded-xl border border-zinc-800/50 bg-black"
                  title="Speed Test"
                />
              </div>

              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-red-500/50 transition-all shadow-xl flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Your IP Address</h3>
                <p className="text-zinc-400 mb-6">Current network identifier</p>
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl px-8 py-4">
                  <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    {ipAddress}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 hover:border-red-500/50 transition-all shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Ping Test</h3>
                <p className="text-zinc-400 text-sm mb-4">Check server response time</p>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                  Run Test
                </button>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 hover:border-red-500/50 transition-all shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">DNS Lookup</h3>
                <p className="text-zinc-400 text-sm mb-4">Resolve domain names</p>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                  Check DNS
                </button>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 hover:border-red-500/50 transition-all shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Bandwidth Monitor</h3>
                <p className="text-zinc-400 text-sm mb-4">Track usage in real-time</p>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                  Monitor
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
