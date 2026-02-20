"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, MessageCircle, Search, Filter, X } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { CulturalImage } from "@/components/cultural-images"
import weaversData from "@/data/weavers-dataset.json"

export function UserDashboard() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    pattern: "allPatterns",
    material: "allMaterials",
    region: "allRegions",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Get unique values for filters
  const uniquePatterns = useMemo(() => {
    const patterns = new Set<string>()
    weaversData.forEach((weaver) => {
      weaver.patterns_available.forEach((pattern) => patterns.add(pattern))
    })
    return Array.from(patterns).sort()
  }, [])

  const uniqueMaterials = useMemo(() => {
    const materials = new Set<string>()
    weaversData.forEach((weaver) => {
      weaver.saree_types.forEach((material) => materials.add(material))
    })
    return Array.from(materials).sort()
  }, [])

  const uniqueRegions = useMemo(() => {
    const regions = new Set<string>()
    weaversData.forEach((weaver) => {
      regions.add(weaver.region)
    })
    return Array.from(regions).sort()
  }, [])

  // Filter and search weavers
  const filteredWeavers = useMemo(() => {
    return weaversData.filter((weaver) => {
      const matchesSearch =
        searchTerm === "" ||
        weaver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        weaver.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        weaver.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())) ||
        weaver.bio.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesPattern = filters.pattern === "allPatterns" || weaver.patterns_available.includes(filters.pattern)

      const matchesMaterial = filters.material === "allMaterials" || weaver.saree_types.includes(filters.material)

      const matchesRegion = filters.region === "allRegions" || weaver.region === filters.region

      return matchesSearch && matchesPattern && matchesMaterial && matchesRegion
    })
  }, [searchTerm, filters])

  // Pagination
  const totalPages = Math.ceil(filteredWeavers.length / itemsPerPage)
  const paginatedWeavers = filteredWeavers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Calculate rating and price based on experience
  const calculateRating = (experience: number) => {
    return Math.min(4.9, 4.3 + (experience / 30) * 0.6)
  }

  const calculatePrice = (weaver: any) => {
    const basePrice = 2000
    const experienceMultiplier = 1 + weaver.experience_years / 30
    const specialtyMultiplier = weaver.specialties.some((s: string) => s.includes("Zari") || s.includes("Silk"))
      ? 1.5
      : 1
    return Math.round(basePrice * experienceMultiplier * specialtyMultiplier)
  }

  const clearFilters = () => {
    setFilters({ pattern: "allPatterns", material: "allMaterials", region: "allRegions" })
    setSearchTerm("")
    setCurrentPage(1)
  }

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-saffron-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-saffron-700 font-kadwa mb-2">{t("welcomeUser")}</h1>
        <p className="text-lg text-indigo-600 font-tiro">{t("discoverWeavers")}</p>
      </div>

      {/* Search Bar */}
      <Card className="mb-6 bg-white/80 backdrop-blur-sm border-2 border-saffron-200">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder={t("searchWeavers")}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 border-2 border-saffron-200 focus:border-saffron-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="mb-8 bg-white/80 backdrop-blur-sm border-2 border-saffron-200">
        <CardHeader>
          <CardTitle className="text-2xl text-saffron-700 font-kadwa flex items-center gap-2">
            <Filter className="w-6 h-6" />
            {t("filterBy")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-700">{t("pattern")}</label>
              <Select
                value={filters.pattern}
                onValueChange={(value) => {
                  setFilters({ ...filters, pattern: value })
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                  <SelectValue placeholder={t("allPatterns")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allPatterns">{t("allPatterns")}</SelectItem>
                  {uniquePatterns.map((pattern) => (
                    <SelectItem key={pattern} value={pattern}>
                      {pattern}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-700">{t("material")}</label>
              <Select
                value={filters.material}
                onValueChange={(value) => {
                  setFilters({ ...filters, material: value })
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                  <SelectValue placeholder={t("allMaterials")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allMaterials">{t("allMaterials")}</SelectItem>
                  {uniqueMaterials.map((material) => (
                    <SelectItem key={material} value={material}>
                      {material}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-700">{t("region")}</label>
              <Select
                value={filters.region}
                onValueChange={(value) => {
                  setFilters({ ...filters, region: value })
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="border-2 border-saffron-200 focus:border-saffron-500">
                  <SelectValue placeholder={t("allRegions")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allRegions">{t("allRegions")}</SelectItem>
                  {uniqueRegions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={clearFilters}
                variant="outline"
                className="w-full border-2 border-saffron-300 text-saffron-700 hover:bg-saffron-50"
              >
                <X className="w-4 h-4 mr-2" />
                {t("clearFilters")}
              </Button>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-indigo-600">
            {filteredWeavers.length} {t("weaversFound")}
          </div>
        </CardContent>
      </Card>

      {/* Weavers Grid */}
      {paginatedWeavers.length === 0 ? (
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200">
          <CardContent className="p-12 text-center">
            <div className="text-gray-500 text-lg">{t("noResults")}</div>
            <p className="text-gray-400 mt-2">{t("clearFilters")}</p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {paginatedWeavers.map((weaver, index) => {
              const rating = calculateRating(weaver.experience_years)
              const price = calculatePrice(weaver)
              const reviewCount = Math.floor(weaver.experience_years * 3 + Math.random() * 20)

              return (
                <div
                  key={weaver.id}
                  className="card-3d bg-white/95 backdrop-blur-sm border-2 border-emerald-200 hover:border-saffron-400 transition-all duration-300 hover:shadow-xl hover-lift transform animate-slide-in mandala-pattern glow-effect rounded-2xl overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Cultural Pattern Header */}
                  <div className="h-2 bg-gradient-to-r from-saffron-500 via-indigo-500 to-emerald-500" />

                  <div className="p-4">
                    {/* Enhanced Profile Section */}
                    <div className="text-center mb-4">
                      <div className="relative mx-auto mb-3 w-20 h-20">
                        <CulturalImage
                          src={weaver.profile_image}
                          alt={weaver.name}
                          className="w-full h-full rounded-full object-cover"
                          enableParallax={true}
                        />
                        <div className="absolute inset-0 bg-saffron-400/20 rounded-full blur-lg animate-pulse" />
                      </div>

                      <h3 className="text-lg text-indigo-700 font-kadwa font-bold">{weaver.name}</h3>

                      <div className="flex items-center justify-center gap-1 text-emerald-600 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span className="font-tiro text-sm">{weaver.region}</span>
                      </div>

                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                        <span className="text-xs text-gray-500">
                          ({reviewCount} {t("reviews")})
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-2 mt-2">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 text-xs">
                          {t("verified")}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${weaver.contact_enabled ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
                        >
                          {weaver.contact_enabled ? t("available") : t("busy")}
                        </Badge>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="text-center mb-3">
                      <span className="text-sm text-indigo-600 font-medium">
                        {weaver.experience_years} {t("yearsExperience")}
                      </span>
                    </div>

                    {/* Enhanced Specialties */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-indigo-700 mb-2 font-kadwa">{t("specialties")}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {weaver.specialties.slice(0, 2).map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="bg-saffron-100 text-saffron-700 border border-saffron-300 hover-lift text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-indigo-700 mb-2 font-kadwa">{t("languages")}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {weaver.languages.map((language) => (
                          <Badge key={language} variant="outline" className="text-xs border-indigo-200 text-indigo-600">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-4 text-center">
                      <span className="text-sm font-medium text-emerald-600">
                        {t("priceRange")}: ₹{(price * 0.8).toLocaleString()} - ₹{(price * 1.2).toLocaleString()}
                      </span>
                    </div>

                    {/* Enhanced Gallery with 3D Effects */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-indigo-700 mb-2 font-kadwa">{t("recentWork")}:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {weaver.gallery_images.slice(0, 3).map((image, idx) => (
                          <div key={idx} className="parallax-hover">
                            <CulturalImage
                              src={image}
                              alt={`${t("recentWork")} ${idx + 1}`}
                              className="w-full h-16 rounded-lg object-cover"
                              enableParallax={true}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Connect Button */}
                    <Button
                      className={`w-full font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group card-3d ${
                        weaver.contact_enabled
                          ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                          : "bg-gray-400 cursor-not-allowed text-white"
                      }`}
                      disabled={!weaver.contact_enabled}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <MessageCircle className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10 font-kadwa text-sm">
                        {weaver.contact_enabled ? t("connect") : t("busy")}
                      </span>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                variant="outline"
                className="border-2 border-saffron-300 text-saffron-700 hover:bg-saffron-50"
              >
                {t("previous")}
              </Button>

              <span className="text-indigo-600 font-medium">
                {t("page")} {currentPage} {t("of")} {totalPages}
              </span>

              <Button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                variant="outline"
                className="border-2 border-saffron-300 text-saffron-700 hover:bg-saffron-50"
              >
                {t("next")}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
