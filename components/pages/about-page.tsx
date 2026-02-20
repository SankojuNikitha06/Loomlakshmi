"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Award, Globe } from "lucide-react"

export function AboutPage() {
  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-saffron-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-saffron-700 font-kadwa mb-4">About LoomLakshmi</h1>
          <p className="text-xl text-indigo-600 font-tiro max-w-2xl mx-auto">
            Celebrating the rich heritage of Indian handloom while empowering women weavers across the nation
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-saffron-200 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-saffron-700 font-kadwa">
                <Heart className="w-6 h-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600 font-tiro leading-relaxed">
                To bridge the gap between traditional Indian handloom artisans and modern consumers, creating
                sustainable livelihoods for women weavers while preserving our cultural heritage for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-indigo-700 font-kadwa">
                <Users className="w-6 h-6" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-emerald-600 font-tiro leading-relaxed">
                A world where every handloom weaver has access to fair markets, modern tools, and the recognition they
                deserve, while keeping the ancient art of weaving alive and thriving in the digital age.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <Card className="bg-gradient-to-r from-saffron-100 to-indigo-100 border-2 border-emerald-300">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-emerald-700 font-kadwa">Our Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-saffron-600">500+</div>
                <div className="text-sm text-indigo-600 font-tiro">Women Weavers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-indigo-600">15</div>
                <div className="text-sm text-emerald-600 font-tiro">States Covered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-emerald-600">₹2Cr+</div>
                <div className="text-sm text-saffron-600 font-tiro">Revenue Generated</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-indigo-600 font-tiro">Happy Customers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-saffron-200 text-center hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Award className="w-12 h-12 mx-auto text-saffron-600 mb-2" />
              <CardTitle className="text-xl text-saffron-700 font-kadwa">Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600 font-tiro">
                Every saree is handpicked and quality-checked to ensure authentic craftsmanship
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-indigo-200 text-center hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Globe className="w-12 h-12 mx-auto text-indigo-600 mb-2" />
              <CardTitle className="text-xl text-indigo-700 font-kadwa">Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-emerald-600 font-tiro">
                Connecting Indian artisans with customers worldwide through our digital platform
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200 text-center hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Heart className="w-12 h-12 mx-auto text-emerald-600 mb-2" />
              <CardTitle className="text-xl text-emerald-700 font-kadwa">Fair Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-saffron-600 font-tiro">
                Ensuring fair prices and sustainable income for our weaver community
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Cultural Heritage */}
        <Card className="bg-gradient-to-br from-orange-100 to-purple-100 border-4 border-saffron-300">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-saffron-700 font-kadwa mb-4">
              🕉️ Preserving Our Heritage 🕉️
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-indigo-700 font-tiro leading-relaxed max-w-3xl mx-auto">
              For centuries, Indian handloom has been more than just fabric - it's been the thread that weaves together
              our cultural identity, artistic expression, and economic sustenance. At LoomLakshmi, we honor this legacy
              while embracing innovation to ensure these timeless traditions continue to flourish in the modern world.
            </p>
            <div className="text-4xl space-x-4">🪡 🧵 🌸 🕉️ ✨ 🌺 🎨 💫</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
