import { MapPin, CheckCircle2 } from "lucide-react"

export function Coverage() {
  const areas = [
    "Mirpur",
    "Uttara",
    "Mohammadpur",
    "Dhanmondi",
    "Gulshan",
    "Banani",
    "Bashundhara",
    "Badda",
    "Rampura",
    "Malibagh",
    "Khilgaon",
    "Mogbazar",
  ]

  return (
    <section id="coverage" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <MapPin className="w-4 h-4" />
              Service Coverage
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
              Available Across <span className="text-primary">Dhaka City</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              SK NETWORK provides high-speed fiber optic internet to residential and commercial areas across Dhaka.
              Check if your area is covered and get connected today.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Don't see your area?{" "}
              <a href="#contact" className="text-primary font-bold hover:underline">
                Contact us
              </a>{" "}
              to check availability
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977878893!2d90.33728793931424!3d23.780753030972743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
