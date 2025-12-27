export function SpeedTest() {
  return (
    <section id="speedtest" className="py-24 px-6 bg-red-600">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-4 uppercase">SK Network Transparent Speeds</h2>
        <p className="text-red-100 mb-12">
          We don't hide behind "up to" speeds. Test your live connection to our node right now.
        </p>
        <div className="bg-black rounded-[3rem] p-6 shadow-2xl">
          <iframe
            src="//openspeedtest.com/speedtest"
            className="w-full h-[500px] rounded-3xl"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </section>
  )
}
