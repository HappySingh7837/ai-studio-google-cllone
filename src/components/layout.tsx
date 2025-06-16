"use client";

import type React from "react";

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  MessageSquare,
  Settings,
  HelpCircle,
  User,
  Plus,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";
import { Button } from "../components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: "home" | "dashboard" | "chat";
  onPageChange: (page: "home" | "dashboard" | "chat") => void;
}

export function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Home", icon: Home, page: "home" as const },
    { name: "My Projects", icon: MessageSquare, page: "dashboard" as const },
    { name: "New Chat", icon: Plus, page: "chat" as const },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              AI Studio
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => (
             <button
             key={item.name}
             onClick={() => {
               onPageChange(item.page);
               setSidebarOpen(false);
             }}
             className={`w-full flex items-center px-3 py-2 text-sm font-medium  focus:outline-none focus:ring-0  rounded-lg ${
               currentPage === item.page
                 ? "bg-blue-600 text-white rounded-lg"
                 : "bg-white text-blue-600 rounded-lg"
             }`}
           >
             <item.icon className="mr-3 h-5 w-5" />
             {item.name}
           </button>
           
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-1">
              <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-white text-gray-600   transition-colors duration-200">
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </button>
              <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-white text-gray-600   transition-colors duration-200">
                <HelpCircle className="mr-3 h-5 w-5" />
                Help
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl0 flex flex-col h-screen">
        {/* Top navigation */}
        <div className="h-16 sticky top-0 z-40 bg-white border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              <div className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 ">
              <Button>
              <Bell className="h-15 w-15 text-blue-500  rounded" />

              </Button>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 border ">{children}</main>
      </div>
    </div>
  );
}
