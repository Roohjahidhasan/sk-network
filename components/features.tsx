import { Gamepad2, Tv, Headset, Cpu } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Gamepad2,
      title: "Gaming Optimized",
      description: "Direct peering with Steam, Valorant, and PUBG servers for <20ms pings.",
    },
    {
      icon: Tv,
      title: "Manu Media Server",
      description:
        "Access our high-speed local media cache server featuring thousands of movies, TV series, and entertainment content available instantly.",
    },
    {
      icon: Headset,
      title: "Instant Support",
      description: "Our on-site engineering team is available 24/7 to solve connection issues.",
    },
    {
      icon: Cpu,
      title: "GPON Tech",
      description: "Gigabit Passive Optical Network ensures you get the exact speed you pay for.",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Built for the <span className="text-red-500">Digital Future</span>
          </h2>
          <p className="text-gray-400">
            We don't just sell internet; we provide a high-capacity backbone for your digital lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white/[0.03] border border-white/5 p-10 rounded-3xl text-center hover:border-red-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-red-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
