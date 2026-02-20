"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HomePage } from "@/components/pages/home-page"
import { LoginPage } from "@/components/pages/login-page"
import { UserDashboard } from "@/components/pages/user-dashboard"
import { WeaverDashboard } from "@/components/pages/weaver-dashboard"
import { AboutPage } from "@/components/pages/about-page"
import { ContactPage } from "@/components/pages/contact-page"
import { Chatbot } from "@/components/chatbot"
import { LanguageProvider } from "@/components/language-context"

export default function LoomLakshmi() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePageChange = (page: string) => {
    if (page === "user-dashboard") {
      window.location.href = "/user-dashboard"
      return
    }
    if (page === "weaver-dashboard") {
      window.location.href = "/weaver-dashboard"
      return
    }

    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 300)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "login":
        return <LoginPage />
      case "user-dashboard":
        return <UserDashboard />
      case "weaver-dashboard":
        return <WeaverDashboard />
      case "about":
        return <AboutPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-indigo-50 overflow-hidden">
        <Navigation currentPage={currentPage} onPageChange={handlePageChange} />

        <main className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          {renderPage()}
        </main>

        <Chatbot />
      </div>
    </LanguageProvider>
  )
}
