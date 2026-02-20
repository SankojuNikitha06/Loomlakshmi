"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
    { code: "te", name: "తెలుగు", flag: "🇮🇳" },
    { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const menuItems = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "contact", label: t("contact") },
  ]

  // Add this function to handle home navigation
  const handleHomeNavigation = () => {
    window.location.href = "/"
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Make it clickable to go home */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleHomeNavigation}>
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🪡</span>
            </div>
            <span className="text-2xl font-bold text-saffron-700 font-kadwa">LoomLakshmi</span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => (item.id === "home" ? handleHomeNavigation() : onPageChange(item.id))}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-all duration-300 font-tiro
                  ${currentPage === item.id ? "text-saffron-600" : "text-gray-700 hover:text-saffron-600"}
                  group
                `}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`
                  absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-saffron-500 to-indigo-500 
                  transform origin-left transition-transform duration-300
                  ${currentPage === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}
                />

                {/* Glow effect */}
                <span
                  className={`
                  absolute inset-0 bg-saffron-400/20 rounded-lg blur-sm opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 -z-10
                `}
                />
              </button>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-saffron-600 transition-colors duration-300 group"
              >
                <Globe className="w-4 h-4" />
                <span className="font-tiro">
                  {currentLanguage.flag} {currentLanguage.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}
                />

                {/* Glow effect */}
                <span className="absolute inset-0 bg-indigo-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>

              {/* Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-lg border border-white/20 shadow-xl overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsLanguageOpen(false)
                      }}
                      className={`
                        w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 font-tiro
                        ${
                          language === lang.code
                            ? "bg-saffron-100 text-saffron-700"
                            : "text-gray-700 hover:bg-saffron-50 hover:text-saffron-600"
                        }
                      `}
                    >
                      <span className="mr-3">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Button
              onClick={() => onPageChange("login")}
              className="bg-gradient-to-r from-saffron-500 to-indigo-500 hover:from-saffron-600 hover:to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("login")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-saffron-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
