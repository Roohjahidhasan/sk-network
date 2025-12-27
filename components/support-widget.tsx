"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Phone, X, Send, Mail, Clock, MapPin, GripVertical, Minimize2 } from "lucide-react"
import Image from "next/image"

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeTab, setActiveTab] = useState<"chat" | "contact">("chat")
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<Array<{ type: "user" | "bot"; text: string }>>([
    {
      type: "bot",
      text: "Welcome to SK NETWORK support! How can we help you today?",
    },
  ])

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const widgetRef = useRef<HTMLDivElement>(null)

  const whatsappNumber = "8801885093170"
  const phoneNumber = "01885093170"
  const email = "support@sknetwork.net"
  const address = "Dhaka, Bangladesh"

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello, I need support with SK NETWORK services`, "_blank")
  }

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleEmail = () => {
    window.location.href = `mailto:${email}`
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { type: "user", text: message }])
      setMessage("")

      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Thank you for your message! Our support team will respond shortly. For immediate assistance, please call us or use WhatsApp.",
          },
        ])
      }, 1000)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest("[data-drag-handle]")) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragStart])

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Open support"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div
          ref={widgetRef}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            cursor: isDragging ? "grabbing" : "default",
          }}
          className={`fixed bottom-6 right-6 z-50 w-96 bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
            isMinimized ? "h-auto" : "h-[600px]"
          }`}
          onMouseDown={handleMouseDown}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 flex items-center justify-between">
            <div data-drag-handle className="cursor-grab active:cursor-grabbing mr-2">
              <GripVertical className="w-5 h-5 text-white/60" />
            </div>
            <div className="flex items-center gap-3 flex-1">
              <div className="relative">
                <Image src="/images/sk-logo.png" alt="SK NETWORK" width={40} height={40} className="rounded-full" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">SK NETWORK Support</h3>
                <p className="text-xs text-white/80">Online - We're here to help 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition mr-1"
              aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
            >
              <Minimize2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setIsOpen(false)
                setIsMinimized(false)
              }}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition"
              aria-label="Close support"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Tabs */}
              <div className="flex border-b border-white/10">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`flex-1 py-3 text-sm font-semibold transition ${
                    activeTab === "chat" ? "bg-white/5 text-red-500 border-b-2 border-red-500" : "text-gray-400"
                  }`}
                >
                  Live Chat
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex-1 py-3 text-sm font-semibold transition ${
                    activeTab === "contact" ? "bg-white/5 text-red-500 border-b-2 border-red-500" : "text-gray-400"
                  }`}
                >
                  Contact Info
                </button>
              </div>

              {/* Content */}
              {activeTab === "chat" ? (
                <>
                  {/* Chat messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            msg.type === "user"
                              ? "bg-red-600 text-white rounded-br-none"
                              : "bg-white/10 text-white rounded-bl-none"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-4 bg-white/5 border-t border-white/10">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-red-500 transition"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-xl transition"
                        aria-label="Send message"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <div className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-red-500">🎬</span>
                      Manu Media Server Premium
                    </h4>
                    <p className="text-sm text-gray-300 mb-3">
                      Upgrade to access 2,500+ movies and series in HD quality with no buffering!
                    </p>
                    <button className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-semibold py-2 rounded-lg transition text-sm">
                      Upgrade Now - Only ৳200/month
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-3 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </button>

                  <button
                    onClick={handleCall}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-3 shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call: {phoneNumber}</span>
                  </button>

                  <button
                    onClick={handleEmail}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-3 shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </button>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-semibold text-gray-400 mb-1">PHONE</h5>
                        <p className="text-sm text-white font-medium">{phoneNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-semibold text-gray-400 mb-1">WHATSAPP</h5>
                        <p className="text-sm text-white font-medium">{phoneNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-semibold text-gray-400 mb-1">EMAIL</h5>
                        <p className="text-sm text-white font-medium">{email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-500 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-semibold text-gray-400 mb-1">LOCATION</h5>
                        <p className="text-sm text-white font-medium">{address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-semibold text-gray-400 mb-1">SUPPORT HOURS</h5>
                        <p className="text-sm text-white font-medium">24/7 Available</p>
                        <p className="text-xs text-gray-400 mt-1">Response within 5 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  )
}
