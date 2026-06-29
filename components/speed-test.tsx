"use client"

import { useState } from "react"
import { Gauge, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SpeedTest() {
  const [showTest, setShowTest] = useState(false)

  return (
    <section id="speedtest" className="py-24 px-6 bg-red-600">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-4 uppercase">SK Network Transparent Speeds</h2>
        <p className="text-red-100 mb-12">
          We don&apos;t hide behind &quot;up to&quot; speeds. Test your live connection to our node right now.
        </p>
        <div className="bg-black rounded-[3rem] p-6 shadow-2xl">
          {!showTest ? (
            <div className="h-[500px] rounded-3xl flex flex-col items-center justify-center bg-zinc-900/50">
              <Gauge className="w-24 h-24 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Test Your Speed?</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                Click below to launch the speed test. This will measure your download, upload, and ping to our servers.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => setShowTest(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                >
                  <Gauge className="w-5 h-5 mr-2" />
                  Start Speed Test
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://openspeedtest.com/speedtest", "_blank")}
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </div>
          ) : (
            <iframe
              src="https://openspeedtest.com/speedtest"
              className="w-full h-[500px] rounded-3xl"
              style={{ border: "none" }}
              title="Speed Test"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          )}
        </div>
      </div>
    </section>
  )
}
