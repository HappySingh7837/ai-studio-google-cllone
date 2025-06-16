"use client";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  MessageSquare,
  Code,
  ImageIcon,
  FileText,
  ArrowRight,
  Sparkles,
  Brain,
  Rocket,
} from "lucide-react";

interface HomepageProps {
  onGetStarted: () => void;
}

export function Homepage({ onGetStarted }: HomepageProps) {
  const features = [
    {
      icon: MessageSquare,
      title: "Chat with AI",
      description: "Have natural conversations with advanced AI models",
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Generate, debug, and optimize code in multiple languages",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Create articles, stories, and marketing content",
    },
    {
      icon: ImageIcon,
      title: "Image Analysis",
      description: "Analyze and describe images with AI vision",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Get help with complex reasoning and analysis",
    },
    {
      icon: Rocket,
      title: "Fast & Reliable",
      description: "Lightning-fast responses with high availability",
    },
  ];

  const models = [
    {
      name: "Gemini Pro",
      description: "Most capable model for complex tasks",
      badge: "Recommended",
    },
    {
      name: "Gemini Flash",
      description: "Faster responses for everyday tasks",
      badge: "Fast",
    },
    {
      name: "Gemini Vision",
      description: "Specialized for image understanding",
      badge: "Vision",
    },
  ];

  return (
    <div className="max-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Powered by Google AI</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Build with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                AI Studio
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The fastest way to start building with Google's most capable AI
              models. Create, experiment, and deploy AI-powered applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={onGetStarted}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-gray-300 hover:bg-gray-50"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to build with AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple chatbots to complex AI applications, AI Studio provides
            the tools and models you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Models Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose the right model for your needs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each model is optimized for different use cases and performance
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {model.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {model.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <Button
                    variant="outline"
                    className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={onGetStarted}
                  >
                    Try {model.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start building?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers already building with AI Studio.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            onClick={onGetStarted}
          >
            Start Building Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
