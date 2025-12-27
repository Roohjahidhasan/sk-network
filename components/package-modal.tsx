"use client"

import type React from "react"

import { X } from "lucide-react"
import { useState } from "react"

interface PackageModalProps {
  packageName: string | null
  isOpen: boolean
  onClose: () => void
}

export function PackageModal({ packageName, isOpen, onClose }: PackageModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", { ...formData, package: packageName })
    // Add your form submission logic here
    alert("Thank you! Our team will contact you shortly.")
    onClose()
    setFormData({ name: "", phone: "", address: "", message: "" })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0a0c10] border border-white/10 rounded-3xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition">
          <X size={24} />
        </button>

        <h3 className="text-2xl font-black mb-2">Get Connected</h3>
        <p className="text-gray-400 text-sm mb-6">
          You selected: <span className="text-red-500 font-bold">{packageName}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Full Address *</label>
            <textarea
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition resize-none"
              placeholder="House, Road, Area"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Additional Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition resize-none"
              placeholder="Any special requests?"
              rows={2}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}
