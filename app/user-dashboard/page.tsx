"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Star, MessageCircle, Search, Filter, Heart, ShoppingCart, Eye, ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Chatbot } from "@/components/chatbot"
import { LanguageProvider, useLanguage } from "@/components/language-context"
import { CulturalImage } from "@/components/cultural-images"
import weaversData from "@/data/weavers-dataset.json"

// Helper function to calculate rating based on experience
const calculateRating = (experience: number) => {
  if (experience >= 25) return 4.9
  if (experience >= 20) return 4.8
  if (experience >= 15) return 4.7
  if (experience >= 10) return 4.6
  if (experience >= 5) return 4.5
  return 4.3
}

// Helper function to calculate price range based on experience and specialties
const calculatePriceRange = (experience: number, specialties: string[]) => {
  const basePrice = experience * 1000
  const hasZari = specialties.some((s) => s.includes("Zari"))
  const hasSilk = specialties.some((s) => s.includes("Silk") || s.includes("Kanjivaram") || s.includes("Banarasi"))

  let multiplier = 1
  if (hasZari) multiplier += 0.5
  if (hasSilk) multiplier += 0.3

  const minPrice = Math.max(2000, Math.floor(basePrice * multiplier))
  const maxPrice = Math.floor(minPrice * 2.5)

  return `₹${minPrice.toLocaleString()}-₹${maxPrice.toLocaleString()}`
}

// Helper function to generate reviews count
const generateReviewsCount = (experience: number) => {
  return Math.floor(experience * 8 + Math.random() * 50)
}

function UserDashboardContent() {
  const [filters, setFilters] = useState({
    pattern: "",
    material: "",
    color: "",
    region: "",
    priceRange: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const { t } = useLanguage()

  // Extract unique values for filters from the dataset
  const patterns = useMemo(() => {
    const allPatterns = weaversData.flatMap((weaver) => weaver.patterns_available)
    return [...new Set(allPatterns)].sort()
  }, [])

  const materials = useMemo(() => {
    const allMaterials = weaversData.flatMap((weaver) => weaver.saree_types)
    return [...new Set(allMaterials)].sort()
  }, [])

  const regions = useMemo(() => {
    const allRegions = weaversData.map((weaver) => weaver.region)
    return [...new Set(allRegions)].sort()
  }, [])

  const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "Maroon", "Golden", "Silver"]
  const priceRanges = ["₹2,000-₹10,000", "₹10,000-₹25,000", "₹25,000-₹50,000", "₹50,000+"]

  // Enhanced weaver data with calculated fields
  const enhancedWeavers = useMemo(() => {
    return weaversData.map((weaver) => ({
      ...weaver,
      rating: calculateRating(weaver.experience_years),
      reviews: generateReviewsCount(weaver.experience_years),
      priceRange: calculatePriceRange(weaver.experience_years, weaver.specialties),
      available: weaver.contact_enabled,
      verified: true, // All weavers in dataset are verified
    }))
  }, [])

  // Filter weavers based on search and filters
  const filteredWeavers = useMemo(() => {
    return enhancedWeavers.filter((weaver) => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase()
        const matchesSearch =
          weaver.name.toLowerCase().includes(searchLower) ||
          weaver.region.toLowerCase().includes(searchLower) ||
          weaver.specialties.some((s) => s.toLowerCase().includes(searchLower)) ||
          weaver.bio.toLowerCase().includes(searchLower)

        if (!matchesSearch) return false
      }

      // Pattern filter
      if (filters.pattern && !weaver.patterns_available.includes(filters.pattern)) {
        return false
      }

      // Material filter
      if (filters.material && !weaver.saree_types.includes(filters.material)) {
        return false
      }

      // Region filter
      if (filters.region && !weaver.region.includes(filters.region)) {
        return false
      }

      // Price range filter (simplified)
      if (filters.priceRange) {
        // This is a basic implementation - you could make it more sophisticated
        const hasHighEndSpecialties = weaver.specialties.some(
          (s) => s.includes("Zari") || s.includes("Kanjivaram") || s.includes("Banarasi"),
        )

        if (filters.priceRange === "₹50,000+" && !hasHighEndSpecialties) {
          return false
        }
      }

      return true
    })
  }, [enhancedWeavers, searchQuery, filters])

  // Pagination
  const totalPages = Math.ceil(filteredWeavers.length / itemsPerPage)
  const paginatedWeavers = filteredWeavers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const clearFilters = () => {
    setFilters({
      pattern: "",
      material: "",
      color: "",
      region: "",
      priceRange: "",
    })
    setSearchQuery("")
    setCurrentPage(1)
  }

  const goBackHome = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-indigo-50">
      <Navigation currentPage="user-dashboard" onPageChange={() => {}} />

      <div className="pt-20 p-6">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Button
            onClick={goBackHome}
            variant="outline"
            className="border-saffron-300 text-saffron-700 hover:bg-saffron-50 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Enhanced Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-saffron-700 font-kadwa mb-4">{t("welcomeUser")}</h1>
          <p className="text-xl text-indigo-600 font-tiro max-w-3xl mx-auto">
            Discover and connect with talented women weavers across India. Find authentic handwoven sarees that tell
            stories of tradition and craftsmanship.
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-2 border-saffron-200">
          <CardContent className="p-4">
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search weavers by name, region, or specialty..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="pl-10 border-2 border-saffron-200 focus:border-saffron-500"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                className="border-saffron-300 text-saffron-700 hover:bg-saffron-50"
              >
                {viewMode === "grid" ? "List View" : "Grid View"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Filters */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-2 border-saffron-200">
          <CardHeader>
            <CardTitle className="text-2xl text-saffron-700 font-kadwa flex items-center gap-2">
              <Filter className="w-6 h-6" />
              {t("filterBy")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-indigo-700">Pattern</label>
                <Select
                  value={filters.pattern}
                  onValueChange={(value) => {
                    setFilters({ ...filters, pattern: value })
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                    <SelectValue placeholder="Select pattern" />
                  </SelectTrigger>
                  <SelectContent>
                    {patterns.map((pattern) => (
                      <SelectItem key={pattern} value={pattern}>
                        {pattern}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-indigo-700">Material</label>
                <Select
                  value={filters.material}
                  onValueChange={(value) => {
                    setFilters({ ...filters, material: value })
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((material) => (
                      <SelectItem key={material} value={material}>
                        {material}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-indigo-700">Color</label>
                <Select
                  value={filters.color}
                  onValueChange={(value) => {
                    setFilters({ ...filters, color: value })
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    {colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-indigo-700">Region</label>
                <Select
                  value={filters.region}
                  onValueChange={(value) => {
                    setFilters({ ...filters, region: value })
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-indigo-700">Price Range</label>
                <Select
                  value={filters.priceRange}
                  onValueChange={(value) => {
                    setFilters({ ...filters, priceRange: value })
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                    <SelectValue placeholder="Select price" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={clearFilters}
              variant="outline"
              className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-lg text-indigo-600 font-tiro">
            Found <span className="font-bold text-saffron-600">{filteredWeavers.length}</span> talented weavers
          </p>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-saffron-100 text-saffron-700">
              {filteredWeavers.filter((w) => w.available).length} Available Now
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
              {filteredWeavers.filter((w) => w.verified).length} Verified
            </Badge>
          </div>
        </div>

        {/* Enhanced Weavers Grid */}
        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
          {paginatedWeavers.map((weaver, index) => (
            <div
              key={weaver.id}
              className="card-3d bg-white/95 backdrop-blur-sm border-2 border-emerald-200 hover:border-saffron-400 transition-all duration-300 hover:shadow-xl hover-lift transform animate-slide-in mandala-pattern glow-effect rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Status Bar */}
              <div className="flex justify-between items-center p-4 pb-0">
                <div className="flex gap-2">
                  {weaver.verified && (
                    <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-300">✓ Verified</Badge>
                  )}
                  <Badge className={`${weaver.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {weaver.available ? "Available" : "Busy"}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 pt-2">
                {/* Enhanced Profile Section */}
                <div className="flex gap-6 mb-6">
                  <div className="relative">
                    <CulturalImage
                      src={weaver.profile_image}
                      alt={weaver.name}
                      className="w-24 h-24 rounded-full object-cover"
                      enableParallax={true}
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl text-indigo-700 font-kadwa font-bold mb-1">{weaver.name}</h3>

                    <div className="flex items-center gap-1 text-emerald-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-tiro text-sm">{weaver.region}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{weaver.rating}</span>
                        <span className="text-xs text-gray-500">({weaver.reviews} reviews)</span>
                      </div>
                      <span className="text-sm text-gray-600">{weaver.experience_years} years exp</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{weaver.bio}</p>

                    <div className="text-lg font-bold text-saffron-600">{weaver.priceRange}</div>
                  </div>
                </div>

                {/* Enhanced Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-indigo-700 mb-3 font-kadwa">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {weaver.specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="secondary"
                        className="bg-saffron-100 text-saffron-700 border border-saffron-300 hover-lift"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Enhanced Gallery */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-indigo-700 mb-3 font-kadwa">Recent Work:</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {weaver.gallery_images.slice(0, 3).map((image, idx) => (
                      <div key={idx} className="parallax-hover relative group">
                        <CulturalImage
                          src={image}
                          alt={`Work ${idx + 1}`}
                          className="w-full h-20 rounded-lg object-cover"
                          enableParallax={true}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-indigo-700 mb-2 font-kadwa">Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {weaver.languages.map((language) => (
                      <Badge key={language} variant="outline" className="border-indigo-300 text-indigo-600">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group card-3d"
                    disabled={!weaver.contact_enabled}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <MessageCircle className="w-4 h-4 mr-2 relative z-10" />
                    <span className="relative z-10 font-kadwa">
                      {weaver.contact_enabled ? t("connect") : "Contact Disabled"}
                    </span>
                  </Button>

                  <Button variant="outline" className="border-saffron-300 text-saffron-700 hover:bg-saffron-50 px-4">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i
                if (pageNum > totalPages) return null

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => setCurrentPage(pageNum)}
                    className={
                      currentPage === pageNum
                        ? "bg-saffron-600 hover:bg-saffron-700"
                        : "border-saffron-300 text-saffron-700 hover:bg-saffron-50"
                    }
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
            >
              Next
            </Button>
          </div>
        )}

        {/* No Results Message */}
        {filteredWeavers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🧵</div>
            <h3 className="text-2xl font-bold text-saffron-700 mb-2">No weavers found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button onClick={clearFilters} className="bg-saffron-600 hover:bg-saffron-700">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      <Chatbot />
    </div>
  )
}

export default function UserDashboardPage() {
  return (
    <LanguageProvider>
      <UserDashboardContent />
    </LanguageProvider>
  )
}
