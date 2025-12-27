import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#030406] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Image src="/images/sk-logo.png" alt="SK NETWORK" width={150} height={60} className="h-12 w-auto mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Providing top-tier fiber optic broadband connectivity to home and corporate users since 2018. Leading the
            way in digital infrastructure.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 transition"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 transition"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 transition"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="#about" className="text-gray-400 text-sm hover:text-red-500 hover:pl-1 transition-all">
              About Company
            </Link>
            <Link href="#packages" className="text-gray-400 text-sm hover:text-red-500 hover:pl-1 transition-all">
              Internet Plans
            </Link>
            <Link
              href="https://sknetwork.ispdigital.cloud/Account/Login"
              className="text-gray-400 text-sm hover:text-red-500 hover:pl-1 transition-all"
            >
              Pay Bill Online
            </Link>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Support</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="#contact" className="text-gray-400 text-sm hover:text-red-500 hover:pl-1 transition-all">
              Help Center
            </Link>
            <Link href="#packages" className="text-gray-400 text-sm hover:text-red-500 hover:pl-1 transition-all">
              Connection Request
            </Link>
            <Link href="#contact" className="text-gray-400 text-sm hover:text-red-500 hover:pl-1 transition-all">
              Report an Issue
            </Link>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">📍</span>
              <span>House: 15/1, Block: C, Tajmohal Road, Mohammadpur, Dhaka-1207</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">📞</span>
              <span className="text-white font-bold">01885093170</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">✉️</span>
              <span>info@sknetwork.net</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p>© 2025 SK NETWORK. All rights reserved.</p>
          <span className="hidden md:inline">|</span>
          <p className="text-gray-600">
            Developed by{" "}
            <Link
              href="https://roohjahidhasan.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Md Jahid Hasan
            </Link>
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-red-500 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-red-500 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
