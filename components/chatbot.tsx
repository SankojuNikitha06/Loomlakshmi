"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user" as const,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage, language),
        sender: "bot" as const,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (message: string, lang: string) => {
    const responses = {
      en: {
        greeting: "Hello! I'm here to help you with LoomLakshmi. What would you like to know?",
        weaver: "I can help you connect with talented weavers. Would you like to browse by region or specialty?",
        saree:
          "We have beautiful handwoven sarees in various patterns like Banarasi, Kanjivaram, and Bandhani. What style interests you?",
        price:
          "Our sarees range from ₹2,000 to ₹50,000 depending on the complexity and materials. Would you like specific pricing?",
        help: "I can assist you with:\n• Finding weavers\n• Saree information\n• Pricing details\n• Platform navigation\n\nWhat would you like to explore?",
        default:
          "I understand you're interested in our platform. Feel free to ask about weavers, sarees, or how to get started!",
      },
      hi: {
        greeting: "नमस्ते! मैं लूमलक्ष्मी के साथ आपकी मदद के लिए यहाँ हूँ। आप क्या जानना चाहते हैं?",
        weaver: "मैं आपको प्रतिभाशाली बुनकरों से जुड़ने में मदद कर सकता हूँ। क्या आप क्षेत्र या विशेषता के अनुसार देखना चाहते हैं?",
        saree: "हमारे पास बनारसी, कांजीवरम और बंधनी जैसे विभिन्न पैटर्न में सुंदर हस्तनिर्मित साड़ियाँ हैं। कौन सी शैली आपको पसंद है?",
        price:
          "हमारी साड़ियों की कीमत जटिलता और सामग्री के आधार पर ₹2,000 से ₹50,000 तक है। क्या आपको विशिष्ट मूल्य निर्धारण चाहिए?",
        help: "मैं इनमें आपकी सहायता कर सकता हूँ:\n• बुनकर खोजना\n• साड़ी की जानकारी\n• मूल्य विवरण\n• प्लेटफॉर्म नेवीगेशन\n\nआप क्या देखना चाहते हैं?",
        default: "मैं समझता हूँ कि आप हमारे प्लेटफॉर्म में रुचि रखते हैं। बुनकरों, साड़ियों या शुरुआत करने के बारे में बेझिझक पूछें!",
      },
    }

    const langResponses = responses[lang as keyof typeof responses] || responses.en
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("नमस्ते")) {
      return langResponses.greeting
    } else if (lowerMessage.includes("weaver") || lowerMessage.includes("बुनकर")) {
      return langResponses.weaver
    } else if (lowerMessage.includes("saree") || lowerMessage.includes("साड़ी")) {
      return langResponses.saree
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("कीमत")) {
      return langResponses.price
    } else if (lowerMessage.includes("help") || lowerMessage.includes("मदद")) {
      return langResponses.help
    } else {
      return langResponses.default
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-saffron-500 to-indigo-500 hover:from-saffron-600 hover:to-indigo-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white/95 backdrop-blur-sm border-2 border-saffron-300 shadow-2xl z-50 flex flex-col rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-saffron-500 to-indigo-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold font-kadwa">LoomLakshmi Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 w-8 h-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages Container - WhatsApp Style */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-orange-50/50 to-indigo-50/50"
            style={{ scrollBehavior: "smooth" }}
          >
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${
                    message.sender === "user"
                      ? "bg-saffron-500 text-white rounded-br-md"
                      : "bg-white text-gray-800 rounded-bl-md border border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === "bot" && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-600" />}
                    {message.sender === "user" && <User className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/80" />}
                    <div className="flex-1">
                      <p className="text-sm font-tiro whitespace-pre-line leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md border border-gray-200 p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-indigo-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-saffron-200 bg-white/80 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t("howCanIHelp")}
                className="flex-1 border-2 border-saffron-200 focus:border-saffron-500 rounded-full px-4 py-2 text-sm"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                size="icon"
                className="bg-saffron-500 hover:bg-saffron-600 text-white rounded-full w-10 h-10 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
