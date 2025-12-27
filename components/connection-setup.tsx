"use client"

import { useState, useTransition } from "react"
import { Check, MapPin, Clock, Zap, Shield, Headphones, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ConnectionSetup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    package: "",
  })

  const handleNextStep = () => {
    startTransition(() => {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    })
  }

  const handlePrevStep = () => {
    startTransition(() => {
      setCurrentStep((prev) => Math.max(prev - 1, 1))
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const steps = [
    { number: 1, title: "Coverage Check", description: "Verify availability" },
    { number: 2, title: "Choose Package", description: "Select your plan" },
    { number: 3, title: "Personal Details", description: "Your information" },
    { number: 4, title: "Schedule Install", description: "Pick a time" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
            Get Connected in Minutes
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying ultra-fast fiber optic internet. Setup is quick and easy.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-16 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    currentStep >= step.number
                      ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50"
                      : "bg-zinc-900 text-gray-500 border border-zinc-800"
                  }`}
                >
                  {currentStep > step.number ? <Check className="w-6 h-6" /> : step.number}
                </div>
                <div className="mt-3 text-center">
                  <p className={`text-sm font-semibold ${currentStep >= step.number ? "text-white" : "text-gray-600"}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-4 transition-all ${
                    currentStep > step.number ? "bg-gradient-to-r from-red-500 to-red-600" : "bg-zinc-800"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Setup Form */}
        <Card className="max-w-4xl mx-auto bg-zinc-950/50 border-zinc-800 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              {currentStep === 1 && "Check Coverage in Your Area"}
              {currentStep === 2 && "Select Your Internet Package"}
              {currentStep === 3 && "Enter Your Details"}
              {currentStep === 4 && "Schedule Installation"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Enter your location to verify if our fiber optic network covers your area"}
              {currentStep === 2 && "Choose the perfect plan for your internet needs"}
              {currentStep === 3 && "We'll use this information to set up your account"}
              {currentStep === 4 && "Pick a convenient time for our technicians to install your connection"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Coverage Check */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="area">Area/Neighborhood</Label>
                  <Input
                    id="area"
                    placeholder="e.g., Mohammadpur, Dhanmondi, Gulshan"
                    value={formData.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    className="bg-zinc-900/50 border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Input
                    id="address"
                    placeholder="House/Building number, Road, Block"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="bg-zinc-900/50 border-zinc-800"
                  />
                </div>

                {formData.area && (
                  <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-500">Great News!</p>
                        <p className="text-sm text-gray-400">Fiber optic internet is available in your area</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Package Selection */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Basic",
                      speed: "50 Mbps",
                      price: "৳800",
                      features: ["Unlimited Data", "BDIX Access", "24/7 Support"],
                    },
                    {
                      name: "Premium",
                      speed: "100 Mbps",
                      price: "৳1200",
                      features: ["Unlimited Data", "BDIX Access", "Manu Media Access", "Priority Support"],
                      popular: true,
                    },
                    {
                      name: "Ultra",
                      speed: "200 Mbps",
                      price: "৳2000",
                      features: [
                        "Unlimited Data",
                        "BDIX Access",
                        "Manu Media Premium",
                        "Dedicated Support",
                        "Static IP",
                      ],
                    },
                  ].map((pkg) => (
                    <Card
                      key={pkg.name}
                      className={`cursor-pointer transition-all ${
                        formData.package === pkg.name
                          ? "bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500"
                          : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                      } ${pkg.popular ? "ring-2 ring-red-500/50" : ""}`}
                      onClick={() => handleInputChange("package", pkg.name)}
                    >
                      <CardHeader>
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            MOST POPULAR
                          </div>
                        )}
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription>
                          <span className="text-3xl font-bold text-white">{pkg.speed}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-red-500">{pkg.price}</span>
                          <span className="text-gray-400">/month</span>
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                              <Check className="w-4 h-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Md Jahid Hasan"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-zinc-900/50 border-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="01885093170"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-zinc-900/50 border-zinc-800"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="support@sknetwork.net"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-zinc-900/50 border-zinc-800"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Schedule Installation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      className="bg-zinc-900/50 border-zinc-800"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <select className="w-full px-3 py-2 bg-zinc-900/50 border border-zinc-800 rounded-md text-white">
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 3 PM)</option>
                      <option>Evening (3 PM - 6 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Installation Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Package:</span>
                      <span className="font-semibold">{formData.package || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Area:</span>
                      <span className="font-semibold">{formData.area || "Not specified"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Installation Fee:</span>
                      <span className="font-semibold text-green-500">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Router Provided:</span>
                      <span className="font-semibold text-green-500">Included</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-400">
                    <strong>Note:</strong> Our technician will contact you 1 day before installation to confirm the
                    schedule.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-zinc-800">
              <Button
                variant="outline"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className="border-zinc-800 hover:bg-zinc-900 bg-transparent"
              >
                Previous
              </Button>
              {currentStep < 4 ? (
                <Button
                  onClick={handleNextStep}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Next Step
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  Complete Setup
                  <Check className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SK NETWORK?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Instant Activation", desc: "Get online within 24-48 hours of installation" },
            { icon: Shield, title: "99.9% Uptime", desc: "Enterprise-grade reliability for your connection" },
            { icon: Headphones, title: "24/7 Support", desc: "Expert technical support whenever you need it" },
            { icon: Clock, title: "Flexible Plans", desc: "Upgrade or downgrade anytime without penalties" },
            { icon: MapPin, title: "Wide Coverage", desc: "Available across major areas of Dhaka" },
            { icon: Phone, title: "Easy Setup", desc: "Professional installation at no extra cost" },
          ].map((benefit, i) => (
            <Card key={i} className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all">
              <CardContent className="p-6">
                <benefit.icon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Setup?</h3>
            <p className="text-gray-400 mb-6">Our team is ready to assist you with any questions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                <Phone className="mr-2 w-4 h-4" />
                Call: 01885093170
              </Button>
              <Button variant="outline" className="border-zinc-800 hover:bg-zinc-900 bg-transparent">
                <Mail className="mr-2 w-4 h-4" />
                Email Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
