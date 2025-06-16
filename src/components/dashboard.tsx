"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Plus,
  MessageSquare,
  Calendar,
  MoreVertical,
  Star,
  Clock,
  Users,
  TrendingUp,
  Filter,
  Grid,
  List,
} from "lucide-react";

interface DashboardProps {
  onNewChat: () => void;
}

export function Dashboard({ onNewChat }: DashboardProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const projects = [
    {
      id: 1,
      title: "Customer Support Bot",
      description: "AI chatbot for handling customer inquiries",
      model: "Gemini Pro",
      lastModified: "2 hours ago",
      status: "Active",
      conversations: 1247,
      starred: true,
    },
    {
      id: 2,
      title: "Content Generator",
      description: "Generate blog posts and marketing content",
      model: "Gemini Flash",
      lastModified: "1 day ago",
      status: "Draft",
      conversations: 89,
      starred: false,
    },
    {
      id: 3,
      title: "Code Assistant",
      description: "Help with coding tasks and debugging",
      model: "Gemini Pro",
      lastModified: "3 days ago",
      status: "Active",
      conversations: 456,
      starred: true,
    },
    {
      id: 4,
      title: "Image Analyzer",
      description: "Analyze and describe uploaded images",
      model: "Gemini Vision",
      lastModified: "1 week ago",
      status: "Paused",
      conversations: 234,
      starred: false,
    },
    {
      id: 5,
      title: "Research Assistant",
      description: "Help with research and data analysis",
      model: "Gemini Pro",
      lastModified: "2 weeks ago",
      status: "Active",
      conversations: 678,
      starred: false,
    },
    {
      id: 6,
      title: "Language Tutor",
      description: "Practice conversations in different languages",
      model: "Gemini Flash",
      lastModified: "3 weeks ago",
      status: "Draft",
      conversations: 123,
      starred: true,
    },
  ];

  const stats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+2 this month",
      icon: MessageSquare,
      color: "text-blue-600",
    },
    {
      title: "Active Conversations",
      value: "2,847",
      change: "+12% from last month",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "API Calls",
      value: "45.2K",
      change: "+8% from last month",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Response Time",
      value: "1.2s",
      change: "-0.3s improvement",
      icon: Clock,
      color: "text-orange-600",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      case "Paused":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
            <p className="text-gray-600 mt-1">
              Manage and monitor your AI applications
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 focus:border-transparent active:border-transparent"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>

            <div className="flex items-center rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-none bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-600 focus:outline-none focus:ring-0 focus:border-transparent active:border-transparent ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white border-none"
                    : ""
                }`}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("list")}
                className={`rounded-none bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-600 focus:outline-none focus:ring-0 focus:border-transparent active:border-transparent ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white border-none"
                    : ""
                }`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            <Button
              onClick={onNewChat}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div
                  className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${
              viewMode === "list" ? "flex items-center" : ""
            }`}
            onClick={onNewChat}
          >
            <CardHeader className={`${viewMode === "list" ? "flex-1" : ""}`}>
              <div className="flex items-start justify-between">
                <div
                  className={`${
                    viewMode === "list"
                      ? "flex items-center space-x-4 flex-1"
                      : ""
                  }`}
                >
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                      {project.title}
                      {project.starred && (
                        <Star className="h-4 w-4 text-yellow-500 ml-2 fill-current" />
                      )}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                  {viewMode === "list" && (
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>{project.model}</span>
                      <span>{project.conversations} conversations</span>
                      <span>{project.lastModified}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                  <Button
  variant="ghost"
  size="sm"
  className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 focus:border-transparent active:border-transparent"
>
  <MoreVertical className="h-4 w-4" />
</Button>

                </div>
              </div>
            </CardHeader>
            {viewMode === "grid" && (
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {project.conversations}
                    </span>
                    <span>{project.model}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.lastModified}
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Empty State for New Users */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No projects yet
          </h3>
          <p className="text-gray-600 mb-6">
            Get started by creating your first AI project
          </p>
          <Button onClick={onNewChat} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Project
          </Button>
        </div>
      )}
    </div>
  );
}
