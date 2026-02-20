"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Calculator,
  BookOpen,
  Award,
  Upload,
  ExternalLink,
  Play,
  TrendingUp,
  MessageSquare,
  Star,
  Camera,
  FileText,
  DollarSign,
  ArrowLeft,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Chatbot } from "@/components/chatbot"
import { LanguageProvider, useLanguage } from "@/components/language-context"
import { CulturalImage } from "@/components/cultural-images"

function WeaverDashboardContent() {
  const [budgetInputs, setBudgetInputs] = useState({
    machines: "",
    materials: "",
    labor: "",
    overhead: "",
  })
  const [budgetEstimate, setBudgetEstimate] = useState("")
  const [profileData, setProfileData] = useState({
    bio: "",
    experience: "",
    specialties: [] as string[],
    priceRange: "",
  })
  const { t } = useLanguage()

  const handleBudgetCalculation = () => {
    const total =
      Number.parseInt(budgetInputs.machines || "0") * 5000 +
      Number.parseInt(budgetInputs.materials || "0") * 200 +
      Number.parseInt(budgetInputs.labor || "0") * 300 +
      Number.parseInt(budgetInputs.overhead || "0") * 100
    setBudgetEstimate(`₹${total.toLocaleString()}`)
  }

  const goBackHome = () => {
    window.location.href = "/"
  }

  const govSchemes = [
    {
      title: "Handloom Weavers Comprehensive Welfare Scheme",
      description: "Financial assistance and insurance coverage for handloom weavers",
      link: "#",
      amount: "₹2,00,000",
      deadline: "March 31, 2024",
      status: "Active",
    },
    {
      title: "National Handloom Development Programme",
      description: "Skill development and technology upgradation support",
      link: "#",
      amount: "₹1,50,000",
      deadline: "June 15, 2024",
      status: "Active",
    },
    {
      title: "Yarn Supply Scheme",
      description: "Subsidized yarn supply to handloom weavers",
      link: "#",
      amount: "₹50,000",
      deadline: "Ongoing",
      status: "Active",
    },
    {
      title: "Mudra Loan for Artisans",
      description: "Low-interest loans for equipment and working capital",
      link: "#",
      amount: "₹10,00,000",
      deadline: "December 31, 2024",
      status: "New",
    },
  ]

  const resources = [
    {
      title: "Traditional Weaving Techniques",
      type: "Course",
      duration: "4 weeks",
      level: "Intermediate",
      link: "#",
      progress: 0,
    },
    {
      title: "Digital Marketing for Artisans",
      type: "PDF Guide",
      size: "2.5 MB",
      level: "Beginner",
      link: "#",
      progress: 100,
    },
    {
      title: "Loom Maintenance & Care",
      type: "Video",
      duration: "45 min",
      level: "Beginner",
      link: "#",
      progress: 60,
    },
    {
      title: "Business Management for Weavers",
      type: "Course",
      duration: "6 weeks",
      level: "Advanced",
      link: "#",
      progress: 25,
    },
  ]

  const analytics = {
    profileViews: 1247,
    inquiries: 23,
    orders: 8,
    revenue: "₹45,600",
    rating: 4.7,
    completionRate: 95,
  }

  return (
    <div className="min-h-screen relative">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <CulturalImage
          src="/placeholder.svg?height=1080&width=1920&text=Traditional+Weaving+Workshop+Background"
          alt="Traditional weaving workshop"
          className="w-full h-full"
          showFrame={false}
          enableParallax={true}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-800/70 to-emerald-800/70 fabric-texture" />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      <Navigation currentPage="weaver-dashboard" onPageChange={() => {}} />

      <div className="relative z-10 pt-20 p-6 space-y-8">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Button
            onClick={goBackHome}
            variant="outline"
            className="border-saffron-300 text-saffron-700 hover:bg-saffron-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Enhanced Header */}
        <div className="text-center mb-8 card-3d bg-white/90 backdrop-blur-sm rounded-2xl p-8 mandala-pattern glow-effect">
          <h1 className="text-5xl font-bold text-indigo-700 font-kadwa mb-4">{t("welcomeWeaver")}</h1>
          <p className="text-xl text-emerald-600 font-tiro mb-6">
            Empower your craft with AI tools, government support, and business insights
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-saffron-600">{analytics.profileViews}</div>
              <div className="text-sm text-gray-600">Profile Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{analytics.inquiries}</div>
              <div className="text-sm text-gray-600">New Inquiries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{analytics.orders}</div>
              <div className="text-sm text-gray-600">Active Orders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{analytics.revenue}</div>
              <div className="text-sm text-gray-600">This Month</div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Budget Planner - Enhanced */}
          <div className="card-3d bg-white/95 backdrop-blur-sm border-2 border-indigo-200 rounded-2xl overflow-hidden mandala-pattern glow-effect hover-lift">
            <div className="h-32 relative overflow-hidden">
              <CulturalImage
                src="/placeholder.svg?height=200&width=800&text=AI+Budget+Planning+Dashboard"
                alt="Budget planning tools"
                className="w-full h-full"
                enableParallax={true}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Calculator className="w-8 h-8 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold font-kadwa">{t("budgetPlanner")}</h2>
                </div>
              </div>
            </div>

            <div className="p-6 fabric-texture">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="machines">Machines/Looms</Label>
                    <Input
                      id="machines"
                      type="number"
                      placeholder="Number of looms"
                      value={budgetInputs.machines}
                      onChange={(e) => setBudgetInputs({ ...budgetInputs, machines: e.target.value })}
                      className="border-2 border-indigo-200 focus:border-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="materials">Materials (kg)</Label>
                    <Input
                      id="materials"
                      type="number"
                      placeholder="Yarn quantity"
                      value={budgetInputs.materials}
                      onChange={(e) => setBudgetInputs({ ...budgetInputs, materials: e.target.value })}
                      className="border-2 border-indigo-200 focus:border-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="labor">Labor Days</Label>
                    <Input
                      id="labor"
                      type="number"
                      placeholder="Working days"
                      value={budgetInputs.labor}
                      onChange={(e) => setBudgetInputs({ ...budgetInputs, labor: e.target.value })}
                      className="border-2 border-indigo-200 focus:border-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="overhead">Overhead Costs</Label>
                    <Input
                      id="overhead"
                      type="number"
                      placeholder="Utilities, rent etc."
                      value={budgetInputs.overhead}
                      onChange={(e) => setBudgetInputs({ ...budgetInputs, overhead: e.target.value })}
                      className="border-2 border-indigo-200 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleBudgetCalculation}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {t("estimateBudget")}
                  </Button>

                  {budgetEstimate && (
                    <div className="bg-emerald-100 border-2 border-emerald-300 rounded-lg px-4 py-2">
                      <span className="text-emerald-700 font-bold text-lg">Estimated Budget: {budgetEstimate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Manager - Enhanced */}
          <div className="card-3d bg-white/95 backdrop-blur-sm border-2 border-purple-200 rounded-2xl overflow-hidden mandala-pattern glow-effect hover-lift">
            <div className="h-32 relative overflow-hidden">
              <CulturalImage
                src="/placeholder.svg?height=200&width=800&text=Profile+Management+Dashboard"
                alt="Profile management"
                className="w-full h-full"
                enableParallax={true}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Upload className="w-8 h-8 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold font-kadwa">Profile Manager</h2>
                </div>
              </div>
            </div>

            <div className="p-6 fabric-texture space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell customers about your expertise and experience..."
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    className="border-2 border-purple-200 focus:border-purple-500"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      placeholder="e.g., 15 years"
                      value={profileData.experience}
                      onChange={(e) => setProfileData({ ...profileData, experience: e.target.value })}
                      className="border-2 border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="priceRange">Price Range</Label>
                    <Input
                      id="priceRange"
                      placeholder="e.g., ₹15,000-₹45,000"
                      value={profileData.priceRange}
                      onChange={(e) => setProfileData({ ...profileData, priceRange: e.target.value })}
                      className="border-2 border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center hover:border-purple-500 transition-colors cursor-pointer group"
                    >
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-purple-400 group-hover:text-purple-600 mx-auto mb-2" />
                        <span className="text-xs text-purple-600">Upload Work</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Update Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Government Schemes - Enhanced */}
        <div className="card-3d bg-white/95 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl overflow-hidden mandala-pattern glow-effect hover-lift">
          <div className="h-32 relative overflow-hidden">
            <CulturalImage
              src="/placeholder.svg?height=200&width=800&text=Government+Support+Schemes+Dashboard"
              alt="Government schemes"
              className="w-full h-full"
              enableParallax={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <h2 className="text-2xl font-bold font-kadwa">{t("govSchemes")}</h2>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {govSchemes.map((scheme, index) => (
                <div
                  key={index}
                  className="card-3d border-2 border-emerald-200 hover:border-saffron-400 transition-colors rounded-xl overflow-hidden hover-lift"
                >
                  <div className="h-24 relative">
                    <CulturalImage
                      src={`/placeholder.svg?height=150&width=300&text=Scheme+${index + 1}`}
                      alt={scheme.title}
                      className="w-full h-full"
                      enableParallax={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 right-2">
                      <Badge className={`${scheme.status === "New" ? "bg-red-500" : "bg-green-500"} text-white`}>
                        {scheme.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 fabric-texture">
                    <h3 className="text-lg text-indigo-700 font-kadwa font-bold mb-2">{scheme.title}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                        {scheme.amount}
                      </Badge>
                      <span className="text-xs text-gray-500">Deadline: {scheme.deadline}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{scheme.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 card-3d"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Resources - Enhanced */}
        <div className="card-3d bg-white/90 backdrop-blur-sm border-2 border-saffron-200 rounded-2xl overflow-hidden mandala-pattern glow-effect hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-saffron-700 font-kadwa">
              <BookOpen className="w-6 h-6" />
              {t("startJourney")} - Learning Resources
            </CardTitle>
            <CardDescription>Access courses, guides, and video tutorials to enhance your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-saffron-50 rounded-lg border-2 border-saffron-200 hover:border-saffron-400 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-saffron-200 rounded-lg flex items-center justify-center">
                      {resource.type === "Video" ? (
                        <Play className="w-6 h-6 text-saffron-600" />
                      ) : resource.type === "PDF Guide" ? (
                        <FileText className="w-6 h-6 text-saffron-600" />
                      ) : (
                        <BookOpen className="w-6 h-6 text-saffron-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-indigo-700">{resource.title}</h4>
                      <p className="text-sm text-gray-600">
                        {resource.type} • {resource.duration || resource.size} • {resource.level}
                      </p>
                      {resource.progress > 0 && (
                        <div className="mt-2">
                          <Progress value={resource.progress} className="h-2" />
                          <span className="text-xs text-gray-500">{resource.progress}% complete</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-saffron-300 text-saffron-700 hover:bg-saffron-50"
                  >
                    {resource.progress > 0 ? "Continue" : "Start"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </div>

        {/* Analytics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg text-blue-700">
                <TrendingUp className="w-5 h-5" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Profile Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{analytics.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Order Completion</span>
                  <span className="font-bold text-green-600">{analytics.completionRate}%</span>
                </div>
                <Progress value={analytics.completionRate} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg text-green-700">
                <DollarSign className="w-5 h-5" />
                Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-green-600">{analytics.revenue}</div>
                <div className="text-sm text-gray-600">This month</div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-600">+12% from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg text-purple-700">
                <MessageSquare className="w-5 h-5" />
                Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Messages</span>
                  <span className="font-bold">{analytics.inquiries}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Profile Views</span>
                  <span className="font-bold">{analytics.profileViews}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Chatbot />
    </div>
  )
}

export default function WeaverDashboardPage() {
  return (
    <LanguageProvider>
      <WeaverDashboardContent />
    </LanguageProvider>
  )
}
