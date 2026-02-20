"use client"

import { useState } from "react"
import { Home, LogIn, User, Scissors, Info, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const menuItems = [
    { id: "home", icon: Home, label: t("home") },
    { id: "login", icon: LogIn, label: t("login") },
    { id: "user-dashboard", icon: User, label: t("userDashboard") },
    { id: "weaver-dashboard", icon: Scissors, label: t("weaverDashboard") },
    { id: "about", icon: Info, label: t("about") },
    { id: "contact", icon: Mail, label: t("contact") },
  ]

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "bn", name: "বাংলা" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "kn", name: "ಕನ್ನಡ" },
  ]

  const handleItemClick = (id: string) => {
    onPageChange(id)
    setIsMobileOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-white/80 backdrop-blur-sm"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X /> : <Menu />}
      </Button>

      {/* Sidebar */}
      <div
        className={`
        fixed md:relative z-40 h-full w-80 bg-gradient-to-b from-saffron-50 to-indigo-100 
        border-r-4 border-emerald-600 shadow-2xl transform transition-transform duration-300
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Header */}
        <div className="p-6 border-b-2 border-emerald-600/20">
          <h1 className="text-3xl font-bold text-saffron-700 font-kadwa">🪡 LoomLakshmi</h1>
          <p className="text-sm text-indigo-600 mt-1 font-tiro">{t("tagline")}</p>
        </div>

        {/* Language Selector */}
        <div className="p-4 border-b border-emerald-600/20">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 rounded-lg border-2 border-saffron-200 bg-white/80 text-indigo-700 font-medium"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`
                  w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                  font-medium text-left group relative overflow-hidden
                  ${
                    isActive
                      ? "bg-saffron-500 text-white shadow-lg transform scale-105"
                      : "text-indigo-700 hover:bg-white/60 hover:shadow-md hover:scale-102"
                  }
                `}
              >
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-xl transform scale-0 group-active:scale-100 transition-transform duration-200" />

                <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-saffron-600"}`} />
                <span className="font-tiro">{item.label}</span>

                {/* Glow Effect */}
                {isActive && <div className="absolute inset-0 bg-saffron-400/30 rounded-xl blur-sm -z-10" />}
              </button>
            )
          })}
        </nav>

        {/* Decorative Pattern */}
        <div className="p-4 border-t border-emerald-600/20">
          <div className="text-center text-saffron-600 text-2xl">🕉️ ॐ 🕉️</div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />
      )}
    </>
  )
}
