"use client"

import { Check } from "lucide-react"
import { useState } from "react"
import { PackageModal } from "./package-modal"

export function Packages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const packages = [
    {
      name: "RADICAL 20M",
      speed: "20M",
      price: "৳500",
      features: ["Up to 20 Mbps Daily Speed", "Uncapped BDIX & Cache", "1 Static IP (Optional)"],
    },
    {
      name: "RADICAL 40M",
      speed: "40M",
      price: "৳800",
      features: ["Up to 40 Mbps Daily Speed", "Uncapped BDIX & Cache", "1 Static IP (Optional)"],
    },
    {
      name: "RADICAL 60M",
      speed: "60M",
      price: "৳1000",
      features: ["Up to 60 Mbps Daily Speed", "Uncapped BDIX & Cache", "1 Static IP (Optional)"],
    },
    {
      name: "RADICAL 30M",
      speed: "30M",
      price: "৳1000",
      features: ["Up to 30 Mbps Daily Speed", "Uncapped BDIX & Cache", "1 Static IP (Optional)"],
    },
    {
      name: "RADICAL 70M",
      speed: "70M",
      price: "৳1200",
      features: ["Up to 70 Mbps Daily Speed", "Uncapped BDIX & Cache", "1 Static IP (Optional)"],
    },
    {
      name: "RADICAL 90M",
      speed: "90M",
      price: "৳1500",
      features: ["Up to 90 Mbps Daily Speed", "Uncapped BDIX & Cache", "1 Static IP (Optional)"],
    },
  ]

  return (
    <>
      <section id="packages" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-extrabold mb-4 uppercase">
              Home <span className="text-red-500">Packages</span>
            </h2>
            <p className="text-gray-400">High-speed plans tailored for every household.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white/[0.03] border border-white/5 p-1 rounded-[2.5rem] hover:border-red-500/50 transition-all duration-300"
            >
              <div className="bg-[#0a0c10] p-10 rounded-[2.4rem] h-full flex flex-col">
                <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">The Starter</h4>
                <h3 className="text-4xl font-black mb-6">
                  RADICAL <span className="text-red-500 text-lg">{pkg.speed}</span>
                </h3>
                <div className="text-5xl font-bold mb-8">
                  {pkg.price}
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-red-600 hover:text-white transition"
                >
                  CONNECT NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PackageModal packageName={selectedPackage} isOpen={!!selectedPackage} onClose={() => setSelectedPackage(null)} />
    </>
  )
}
