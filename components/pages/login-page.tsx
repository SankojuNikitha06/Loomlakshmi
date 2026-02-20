"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Scissors, Mail, Phone, Lock, Key } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const { t } = useLanguage()

  return (
    <div className="h-full flex items-center justify-center p-8 bg-gradient-to-br from-saffron-50 via-indigo-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-spin-slow">🕉️</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce">🌸</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🪡</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-float">✨</div>
      </div>

      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-saffron-200 rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-saffron-500 to-indigo-500 p-1">
          <div className="bg-white rounded-t-xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-3xl font-bold text-saffron-700 font-kadwa">🪡 LoomLakshmi</CardTitle>
              <CardDescription className="text-indigo-600 font-tiro">{t("tagline")}</CardDescription>
            </CardHeader>
          </div>
        </div>

        <CardContent className="p-6">
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-saffron-100">
              <TabsTrigger
                value="user"
                className="flex items-center gap-2 data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
              >
                <User className="w-4 h-4" />
                User
              </TabsTrigger>
              <TabsTrigger
                value="weaver"
                className="flex items-center gap-2 data-[state=active]:bg-indigo-500 data-[state=active]:text-white"
              >
                <Scissors className="w-4 h-4" />
                Weaver
              </TabsTrigger>
            </TabsList>

            <TabsContent value="user" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-saffron-700 font-kadwa">Saree Enthusiast Portal</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user-email" className="text-indigo-700 font-medium">
                    Email or Phone
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-saffron-500" />
                    <Input
                      id="user-email"
                      placeholder="Enter your email or phone"
                      className="pl-10 border-2 border-saffron-200 focus:border-saffron-500 rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-password" className="text-indigo-700 font-medium">
                    Password or OTP
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-saffron-500" />
                    <Input
                      id="user-password"
                      type="password"
                      placeholder="Enter password or OTP"
                      className="pl-10 border-2 border-saffron-200 focus:border-saffron-500 rounded-lg"
                    />
                  </div>
                </div>

                <Button className="w-full bg-saffron-500 hover:bg-saffron-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-saffron-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{isLogin ? "Login as User" : "Sign Up as User"}</span>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="weaver" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-indigo-700 font-kadwa">Master Weaver Portal</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="weaver-email" className="text-indigo-700 font-medium">
                    Email or Phone
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-indigo-500" />
                    <Input
                      id="weaver-email"
                      placeholder="Enter your email or phone"
                      className="pl-10 border-2 border-indigo-200 focus:border-indigo-500 rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weaver-password" className="text-indigo-700 font-medium">
                    Password or OTP
                  </Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-3 w-4 h-4 text-indigo-500" />
                    <Input
                      id="weaver-password"
                      type="password"
                      placeholder="Enter password or OTP"
                      className="pl-10 border-2 border-indigo-200 focus:border-indigo-500 rounded-lg"
                    />
                  </div>
                </div>

                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{isLogin ? "Login as Weaver" : "Sign Up as Weaver"}</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600 hover:text-emerald-700 font-medium underline"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </button>
          </div>
        </CardContent>

        {/* Decorative Border */}
        <div className="h-2 bg-gradient-to-r from-saffron-500 via-indigo-500 to-emerald-500" />
      </Card>
    </div>
  )
}
