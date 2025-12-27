"use client"

import { useState, useEffect } from "react"
import { Tv, Film, Wrench, Home, Info, Mail, Briefcase, FileText, Palette } from "lucide-react"

type Section = "home" | "live" | "movies" | "tools" | "about" | "contact" | "portfolio" | "services" | "blog"

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

export function BdixPortal() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [ipAddress, setIpAddress] = useState("Loading...")
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress("Failed to load IP"))
  }, [])

  const handleTestServers = () => {
    alert("Testing all servers...")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-red-600 p-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setActiveSection("home")} className="hover:text-yellow-400">
              <Home className="inline w-4 h-4 mr-1" /> Home
            </button>
            <button onClick={() => setActiveSection("about")} className="hover:text-yellow-400">
              <Info className="inline w-4 h-4 mr-1" /> About
            </button>
            <button onClick={() => setActiveSection("contact")} className="hover:text-yellow-400">
              <Mail className="inline w-4 h-4 mr-1" /> Contact
            </button>
            <button onClick={() => setActiveSection("portfolio")} className="hover:text-yellow-400">
              <Palette className="inline w-4 h-4 mr-1" /> Portfolio
            </button>
            <button onClick={() => setActiveSection("services")} className="hover:text-yellow-400">
              <Briefcase className="inline w-4 h-4 mr-1" /> Services
            </button>
            <button onClick={() => setActiveSection("blog")} className="hover:text-yellow-400">
              <FileText className="inline w-4 h-4 mr-1" /> Blog
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setActiveSection("live")} className="hover:text-yellow-400">
              <Tv className="inline w-4 h-4 mr-1" /> Live TV
            </button>
            <button onClick={() => setActiveSection("movies")} className="hover:text-yellow-400">
              <Film className="inline w-4 h-4 mr-1" /> Movies
            </button>
            <button onClick={() => setActiveSection("tools")} className="hover:text-yellow-400">
              <Wrench className="inline w-4 h-4 mr-1" /> Tools
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Modal */}
      {fullscreenUrl && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            onClick={() => setFullscreenUrl(null)}
            className="fixed top-4 right-4 z-60 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-600"
          >
            Exit Fullscreen
          </button>
          <iframe src={fullscreenUrl} className="w-full h-full" title="Fullscreen Content" allowFullScreen />
        </div>
      )}

      {/* Main Content */}
      <main className="p-6">
        {/* Home Section */}
        {activeSection === "home" && (
          <section className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold mb-4">BDIX Server Menu</h1>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-wrap gap-4 mb-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="server-type" value="ftp" />
                  Test only FTP Servers
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="server-type" value="tv" />
                  Test only TV Servers
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="server-type" value="all" defaultChecked />
                  Test All Servers
                </label>
              </div>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="fast-mode" />
                  Fast Mode
                </label>
              </div>
              <button
                onClick={handleTestServers}
                className="w-40 h-40 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold flex items-center justify-center transition-all"
              >
                Test Servers
              </button>
              <p className="text-center mt-4 max-w-2xl text-gray-300">
                BDIX stands for "Bangladesh Internet Exchange". It provides Internet Service Providers (ISPs) with
                Broadband ISP services, offering FTP (File Transfer Protocol) Server access for high-speed data
                transfer.
              </p>
            </div>
          </section>
        )}

        {/* Live TV Section */}
        {activeSection === "live" && (
          <section>
            <h1 className="text-3xl font-bold mb-6">Live TV</h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tvChannels.map((channel, index) => (
                <div key={index} className="aspect-video bg-gray-900 rounded-2xl shadow-lg overflow-hidden relative">
                  <iframe
                    src={channel.url}
                    className="w-full h-full"
                    title={channel.name}
                    allowFullScreen
                    onClick={() => setFullscreenUrl(channel.url)}
                  />
                  <p className="absolute bottom-2 left-0 right-0 text-center bg-black/70 py-1">{channel.name}</p>
                  <button
                    onClick={() => setFullscreenUrl(channel.url)}
                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700"
                  >
                    Fullscreen
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Movies Section */}
        {activeSection === "movies" && (
          <section>
            <h1 className="text-3xl font-bold mb-6">FTP / Movie Servers</h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {movieServers.map((server, index) => (
                <div key={index} className="aspect-video bg-gray-900 rounded-2xl shadow-lg overflow-hidden relative">
                  <iframe src={server.url} className="w-full h-full" title={server.name} allowFullScreen />
                  <p className="absolute bottom-2 left-0 right-0 text-center bg-black/70 py-1">{server.name}</p>
                  <button
                    onClick={() => setFullscreenUrl(server.url)}
                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700"
                  >
                    Fullscreen
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tools Section */}
        {activeSection === "tools" && (
          <section className="flex flex-col items-center space-y-8">
            <h1 className="text-3xl font-bold mb-6">Internet Tools</h1>

            <div className="w-full max-w-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-center">Speed Test</h2>
              <iframe
                src="https://fast.com/"
                className="w-full h-96 rounded-xl border border-gray-700"
                title="Speed Test"
              />
            </div>

            <div className="w-full max-w-md bg-gray-800/50 p-6 rounded-xl shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-2">Your IP Address</h2>
              <p className="text-yellow-400 font-bold text-xl">{ipAddress}</p>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About SK NETWORK</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              This portal provides access to various BDIX TV and movie servers, internet tools, and featured content. SK
              NETWORK is dedicated to enhancing your streaming experience with high-speed connections and reliable
              service.
            </p>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300">Reach us at: support@sknetwork.com</p>
          </section>
        )}

        {/* Portfolio Section */}
        {activeSection === "portfolio" && (
          <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
            <p className="text-lg text-gray-300">Check out our past projects and services.</p>
          </section>
        )}

        {/* Services Section */}
        {activeSection === "services" && (
          <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Services</h1>
            <p className="text-lg text-gray-300">Offering streaming solutions and internet tools for BDIX users.</p>
          </section>
        )}

        {/* Blog Section */}
        {activeSection === "blog" && (
          <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-gray-300">Stay updated with the latest news and tips.</p>
          </section>
        )}
      </main>
    </div>
  )
}
