"use client"

import type React from "react"

import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    // Add your form submission logic here
    alert("Thank you for contacting us! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-black mb-6">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Have questions about our services? Our support team is here to help you get connected.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Office Address</h4>
                <p className="text-sm text-gray-400">
                  House: 15/1, Block: C, Tajmohal Road
                  <br />
                  Mohammadpur, Dhaka-1207
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <p className="text-sm text-gray-400">01885093170</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-sm text-gray-400">info@sknetwork.net</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.904673314758!2d90.36260931445644!3d23.75394899458177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4a40000001%3A0x2e32a4a9b4d1e99f!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
              className="w-full h-64 rounded-2xl border border-white/10"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8">
          <h3 className="text-2xl font-black mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
                placeholder="Md Jahid Hasan"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
                placeholder="support@sknetwork.net"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
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
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition resize-none"
                placeholder="Tell us how we can help..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
