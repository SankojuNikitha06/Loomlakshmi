"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-saffron-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-saffron-700 font-kadwa mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-600 font-tiro max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team for any questions or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-saffron-200">
            <CardHeader>
              <CardTitle className="text-2xl text-saffron-700 font-kadwa">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2 border-saffron-200 focus:border-saffron-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2 border-saffron-200 focus:border-saffron-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="border-2 border-saffron-200 focus:border-saffron-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 border-saffron-200 focus:border-saffron-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-saffron-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Send className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-indigo-200">
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-700 font-kadwa">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-saffron-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-700">Email</h4>
                    <p className="text-emerald-600">support@loomlakshmi.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-700">Phone</h4>
                    <p className="text-emerald-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-700">Address</h4>
                    <p className="text-emerald-600">
                      123 Heritage Lane
                      <br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700 font-kadwa">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-indigo-700">Monday - Friday</span>
                  <span className="text-emerald-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-indigo-700">Saturday</span>
                  <span className="text-emerald-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-indigo-700">Sunday</span>
                  <span className="text-red-500">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-16 h-16 mx-auto text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-orange-700 font-kadwa mb-2">Need Immediate Help?</h3>
                <p className="text-indigo-600 font-tiro mb-4">
                  Our chatbot is available 24/7 to assist you with quick questions and support.
                </p>
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-emerald-700 font-kadwa">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-700">How do I connect with weavers?</h4>
                <p className="text-sm text-gray-600">
                  Simply browse our weaver directory, use filters to find your preferred style, and click "Connect" to
                  send a collaboration request.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-700">Is there a commission fee?</h4>
                <p className="text-sm text-gray-600">
                  We charge a minimal platform fee to maintain our services and support weaver development programs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-700">How do I become a verified weaver?</h4>
                <p className="text-sm text-gray-600">
                  Complete your profile, upload samples of your work, and our team will verify your credentials within
                  2-3 business days.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-700">What payment methods are accepted?</h4>
                <p className="text-sm text-gray-600">
                  We support UPI, bank transfers, credit/debit cards, and digital wallets for secure transactions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
