"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Send,
  Paperclip,
  Mic,
  MoreVertical,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Settings,
  Sparkles,
} from "lucide-react";

export function ChatInterface() {
    type Message = {
        id: number;
        type: "assistant" | "user";
        content: string;
        timestamp: Date;
      };
      
      const [messages, setMessages] = useState<Message[]>([
        {
          id: 1,
          type: "assistant",
          content: "Hello! I'm your AI assistant. How can I help you today?",
          timestamp: new Date(),
        },
      ]);
      
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: "assistant" as const,
//       content: "Hello! I'm your AI assistant. How can I help you today?",
//       timestamp: new Date(),
//     },
//   ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "assistant" as const,
        content:
          "I understand your question. This is a simulated response from the AI assistant. In a real implementation, this would be connected to Google's Gemini API to provide actual AI responses.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 w-[1200px]">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">New Chat</h1>
              <p className="text-sm text-gray-500">Powered by Gemini Pro</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-white">
            <Button
              variant="ghost"
              size="sm"
              className="bg-white hover:bg-gray-100 h-8 w-8 rounded flex items-center justify-center p-0"
            >
              <Settings className="h-6 w-6 text-black" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="bg-white hover:bg-gray-100 h-8 w-8 rounded flex items-center justify-center p-0"
            >
              <MoreVertical className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="w-full space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                // message.type === "user" ? "justify-end" :
                "justify-start"
              }`}
            >
              <div
                className={`w-full ${
                  // message.type === "user" ? "order-2" :
                  "order-1"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    // message.type === "user" ? "bg-blue-600 text-white" :
                    "bg-white border border-gray-200 text-gray-900"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                  {message.type === "assistant" && (
                    <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white hover:bg-gray-100 h-6 w-6 p-0 flex items-center justify-center rounded"
                    >
                      <Copy className="h-3 w-3 text-black" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white hover:bg-gray-100 h-6 w-6 p-0 flex items-center justify-center rounded"
                    >
                      <ThumbsUp className="h-3 w-3 text-black" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white hover:bg-gray-100 h-6 w-6 p-0 flex items-center justify-center rounded"
                    >
                      <ThumbsDown className="h-3 w-3 text-black" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white hover:bg-gray-100 h-6 w-6 p-0 flex items-center justify-center rounded"
                    >
                      <RefreshCw className="h-3 w-3 text-black" />
                    </Button>
                  </div>
                  
                  )}
                </div>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  //   message.type === "user"
                  //     ? "bg-gray-300 order-1 ml-3"
                  //     :
                  "bg-gradient-to-r from-blue-500 to-purple-600 order-2 mr-3"
                }`}
              >
                {/* {message.type === "user" ? (
                  <span className="text-sm font-medium text-gray-600">U</span>
                ) : ( */}
                <Sparkles className="h-4 w-4 text-white" />
                {/* )} */}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="w-full">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
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
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-full mx-auto">
          <div className="flex items-end space-x-3">
            <div className="flex-1">
              <div className="relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Message AI Studio..."
                  className="w-full resize-none border border-gray-300 rounded-2xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent max-h-32 bg-white"
                  rows={1}
                />
                <div className="absolute right-2 bottom-2 flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-white hover:bg-gray-100 h-8 w-8 rounded flex items-center justify-center p-0"
                  >
                    <Paperclip className="h-4 w-4 text-black" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-white hover:bg-gray-100 h-8 w-8 rounded flex items-center justify-center p-0"
                  >
                    <Mic className="h-4 w-4 text-black" />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-blue-600 hover:bg-blue-700 rounded-full h-10 w-10 p-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span>
              AI Studio may display inaccurate info, including about people, so
              double-check its responses.
            </span>
            <span>{inputValue.length}/2000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
