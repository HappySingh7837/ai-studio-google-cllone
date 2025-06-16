"use client"

import { useState } from "react"
import { Layout } from "./components/layout"
import { Homepage } from "./components/homepage"
import { Dashboard } from "./components/dashboard"
import { ChatInterface } from "./components/chat-interface"

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "dashboard" | "chat">("home")

  const handleGetStarted = () => {
    setCurrentPage("dashboard")
  }

  const handleNewChat = () => {
    setCurrentPage("chat")
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage onGetStarted={handleGetStarted} />
      case "dashboard":
        return <Dashboard onNewChat={handleNewChat} />
      case "chat":
        return <ChatInterface />
      default:
        return <Homepage onGetStarted={handleGetStarted} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "home" ? (
        <div>
          {/* Simple header for homepage */}
          <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">AI Studio</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage("dashboard")}
                    className=" bg-white text-black font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleGetStarted}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </header>
          <Homepage onGetStarted={handleGetStarted} />
        </div>
      ) : (
        <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
          {renderCurrentPage()}
        </Layout>
      )}
    </div>
  )
}
