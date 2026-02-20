"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, BookOpen, Award, Upload, ExternalLink, Play } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { CulturalImage } from "@/components/cultural-images"

export function WeaverDashboard() {
  const [budgetInputs, setBudgetInputs] = useState({
    machines: "",
    materials: "",
    labor: "",
  })
  const [budgetEstimate, setBudgetEstimate] = useState("")
  const { t } = useLanguage()

  const handleBudgetCalculation = () => {
    const total =
      Number.parseInt(budgetInputs.machines || "0") * 5000 +
      Number.parseInt(budgetInputs.materials || "0") * 200 +
      Number.parseInt(budgetInputs.labor || "0") * 300
    setBudgetEstimate(`₹${total.toLocaleString()}`)
  }

  const govSchemes = [
    {
      title: t("handloomScheme"),
      description: t("handloomDesc"),
      link: "#",
      amount: "₹2,00,000",
    },
    {
      title: t("developmentScheme"),
      description: t("developmentDesc"),
      link: "#",
      amount: "₹1,50,000",
    },
    {
      title: t("yarnScheme"),
      description: t("yarnDesc"),
      link: "#",
      amount: "₹50,000",
    },
  ]

  const resources = [
    {
      title: t("traditionalTechniques"),
      type: t("course"),
      duration: "4 weeks",
      link: "#",
    },
    {
      title: t("digitalMarketing"),
      type: t("pdfGuide"),
      size: "2.5 MB",
      link: "#",
    },
    {
      title: t("loomMaintenance"),
      type: t("video"),
      duration: "45 min",
      link: "#",
    },
  ]

  return (
    <div className="h-full overflow-auto relative">
      {/* Enhanced Background with Cultural Imagery */}
      <div className="absolute inset-0">
        <CulturalImage
          src="/placeholder.svg?height=1080&width=1920&text=Traditional+Looms+in+Action+Workshop"
          alt="Traditional weaving workshop"
          className="w-full h-full"
          showFrame={false}
          enableParallax={true}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-800/70 to-emerald-800/70 fabric-texture" />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      <div className="relative z-10 p-6 space-y-8">
        {/* Enhanced Header with Cultural Elements */}
        <div className="text-center mb-8 card-3d bg-white/90 backdrop-blur-sm rounded-2xl p-6 mandala-pattern glow-effect">
          <h1 className="text-4xl font-bold text-indigo-700 font-kadwa mb-2">{t("welcomeWeaver")}</h1>
          <p className="text-lg text-emerald-600 font-tiro">{t("empowerCraft")}</p>

          {/* Cultural Imagery Strip */}
          <div className="flex justify-center gap-4 mt-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-12 parallax-hover">
                <CulturalImage
                  src={`/placeholder.svg?height=80&width=100&text=Craft+${i}`}
                  alt={`Traditional craft ${i}`}
                  className="w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Cards with 3D Effects */}
        {/* AI Budget Planner */}
        <div className="card-3d bg-white/95 backdrop-blur-sm border-2 border-indigo-200 rounded-2xl overflow-hidden mandala-pattern glow-effect hover-lift">
          {/* Add cultural header image */}
          <div className="h-32 relative overflow-hidden">
            <CulturalImage
              src="/placeholder.svg?height=200&width=800&text=AI+Budget+Planning+Tools"
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
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="machines">{t("machinesRequired")}</Label>
                  <Input
                    id="machines"
                    type="number"
                    placeholder={t("numberOfLooms")}
                    value={budgetInputs.machines}
                    onChange={(e) => setBudgetInputs({ ...budgetInputs, machines: e.target.value })}
                    className="border-2 border-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="materials">{t("materialQuantity")}</Label>
                  <Input
                    id="materials"
                    type="number"
                    placeholder={t("yarnQuantity")}
                    value={budgetInputs.materials}
                    onChange={(e) => setBudgetInputs({ ...budgetInputs, materials: e.target.value })}
                    className="border-2 border-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="labor">{t("laborDays")}</Label>
                  <Input
                    id="labor"
                    type="number"
                    placeholder={t("workingDays")}
                    value={budgetInputs.labor}
                    onChange={(e) => setBudgetInputs({ ...budgetInputs, labor: e.target.value })}
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
                    <span className="text-emerald-700 font-bold text-lg">
                      {t("estimatedBudget")}: {budgetEstimate}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </div>
        </div>

        {/* Government Schemes with enhanced visuals */}
        <div className="card-3d bg-white/95 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl overflow-hidden mandala-pattern glow-effect hover-lift">
          <div className="h-32 relative overflow-hidden">
            <CulturalImage
              src="/placeholder.svg?height=200&width=800&text=Government+Support+Schemes"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  </div>

                  <div className="p-4 fabric-texture">
                    <h3 className="text-lg text-indigo-700 font-kadwa font-bold mb-2">{scheme.title}</h3>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 mb-3">
                      {scheme.amount}
                    </Badge>
                    <p className="text-sm text-gray-600 mb-4">{scheme.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 card-3d"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("learnMore")}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-saffron-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-saffron-700 font-kadwa">
              <BookOpen className="w-6 h-6" />
              {t("learningResources")}
            </CardTitle>
            <CardDescription>{t("accessCourses")}</CardDescription>
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
                      {resource.type === t("video") ? (
                        <Play className="w-6 h-6 text-saffron-600" />
                      ) : resource.type === t("pdfGuide") ? (
                        <BookOpen className="w-6 h-6 text-saffron-600" />
                      ) : (
                        <Award className="w-6 h-6 text-saffron-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-700">{resource.title}</h4>
                      <p className="text-sm text-gray-600">
                        {resource.type} • {resource.duration || resource.size}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-saffron-300 text-saffron-700 hover:bg-saffron-50"
                  >
                    {t("access")}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Profile Manager */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-purple-700 font-kadwa">
              <Upload className="w-6 h-6" />
              {t("profileManager")}
            </CardTitle>
            <CardDescription>{t("uploadManage")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center hover:border-purple-500 transition-colors cursor-pointer"
                >
                  <Upload className="w-8 h-8 text-purple-400" />
                </div>
              ))}
            </div>
            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              {t("uploadWork")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
