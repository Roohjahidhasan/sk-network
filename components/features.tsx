import { Wifi, Zap, Shield, Headset, Globe, Server, Tv, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Wifi,
      title: "Fiber Optic Network",
      description: "100% fiber optic GPON infrastructure delivering consistent speeds with no bandwidth throttling.",
    },
    {
      icon: Zap,
      title: "Ultra-Fast Speeds",
      description: "Up to 1Gbps download speeds perfect for 4K streaming, gaming, and large file transfers.",
    },
    {
      icon: Globe,
      title: "BDIX Connectivity",
      description: "Direct peering with BDIX servers for local content, FTP access, and super-fast local downloads.",
    },
    {
      icon: Server,
      title: "Manu Media Server",
      description: "Access 2,500+ movies and series instantly through our high-speed local media cache server.",
    },
    {
      icon: Shield,
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability with redundant connections and automatic failover systems.",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description: "Local technical support team available round the clock to resolve any connectivity issues.",
    },
    {
      icon: Tv,
      title: "IPTV & Streaming",
      description: "Optimized for streaming services like Netflix, YouTube, and local IPTV channels without buffering.",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Professional installation within 24-48 hours of order confirmation with no hidden charges.",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Why Choose <span className="text-primary">SK NETWORK</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Premium broadband internet service with cutting-edge technology and exceptional customer support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-card border border-border p-6 rounded-2xl hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
