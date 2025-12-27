import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-widest border border-red-500/20 uppercase">
            Next-Gen Connectivity
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] mb-6">
            Fastest <br />
            <span className="bg-gradient-to-r from-white via-white to-red-500 bg-clip-text text-transparent">
              Fiber Network
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Say goodbye to buffering. SK NETWORK delivers ultra-low latency fiber optics designed for pro gamers, 4K
            streamers, and high-performance businesses in Dhaka.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="#packages"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-red-600/20 transition text-center"
            >
              Get Started
            </Link>
            <Link
              href="tel:01885093170"
              className="border border-white/20 hover:bg-white/5 px-10 py-4 rounded-full font-bold transition text-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-full bg-gradient-to-br from-red-500/20 to-transparent blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <div className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 animate-bounce">
              <p className="text-xs font-bold text-red-500 uppercase">99.9% Uptime</p>
              <p className="text-2xl font-black">Stable Link</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
