"use client"
import { Button } from "@/components/ui/button"
import { User, Scissors, ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-saffron-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-500 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-kadwa">
              Connecting Heritage with Hearts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-tiro">
              Discover authentic handwoven sarees and empower women artisans across India
            </p>
          </div>

          {/* Contest Cards Style Layout */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* User Login Card */}
            <div className="group relative">
              {/* Card Background with 3D Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />

              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full animate-float" />
                  <div className="absolute top-12 left-8 w-8 h-8 bg-white/20 rounded-full animate-float delay-1000" />
                  <div className="absolute bottom-8 right-12 w-12 h-12 bg-white/25 rounded-full animate-float delay-2000" />

                  {/* Indian Pattern Elements */}
                  <div className="absolute top-8 left-4 text-white/30 text-2xl animate-spin-slow">🌸</div>
                  <div className="absolute bottom-12 left-8 text-white/30 text-xl animate-pulse">🕉️</div>
                </div>

                {/* Card Header */}
                <div className="relative p-8 pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <Sparkles className="w-6 h-6 text-white/60" />
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 font-kadwa">User Portal</h2>
                  <p className="text-white/80 text-sm leading-relaxed font-tiro">
                    Explore weaving profiles, discover authentic saree styles, and connect with master artisans across
                    India.
                  </p>
                </div>

                {/* Card Footer */}
                <div className="relative p-8 pt-4">
                  <Button
                    onClick={() => (window.location.href = "/user-dashboard")}
                    className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm rounded-lg py-3 font-semibold transition-all duration-300 group/btn"
                  >
                    <span className="mr-2">Enter as User</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </div>
            </div>

            {/* Weaver Login Card */}
            <div className="group relative">
              {/* Card Background with 3D Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-600 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500" />

              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white/30 rounded-full animate-float delay-500" />
                  <div className="absolute top-16 right-6 w-6 h-6 bg-white/20 rounded-full animate-float delay-1500" />
                  <div className="absolute bottom-6 left-16 w-14 h-14 bg-white/25 rounded-full animate-float delay-2500" />

                  {/* Loom Pattern Elements */}
                  <div className="absolute top-12 right-8 text-white/30 text-2xl animate-pulse">🪡</div>
                  <div className="absolute bottom-16 right-12 text-white/30 text-xl animate-spin-slow">🧵</div>
                  <div className="absolute top-20 left-12 text-white/30 text-lg animate-float">✨</div>
                </div>

                {/* Card Header */}
                <div className="relative p-8 pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <Sparkles className="w-6 h-6 text-white/60" />
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 font-kadwa">Weaver Portal</h2>
                  <p className="text-white/80 text-sm leading-relaxed font-tiro">
                    Manage your artisan profile, access AI budget planning tools, and explore government support
                    schemes.
                  </p>
                </div>

                {/* Card Footer */}
                <div className="relative p-8 pt-4">
                  <Button
                    onClick={() => (window.location.href = "/weaver-dashboard")}
                    className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm rounded-lg py-3 font-semibold transition-all duration-300 group/btn"
                  >
                    <span className="mr-2">Enter as Weaver</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <span className="text-white/80 font-tiro">🕉️ Celebrating Indian Heritage</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80 font-tiro">Empowering Women Artisans 🪡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
