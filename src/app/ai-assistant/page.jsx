"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Bot, Sparkles, Send, User, Loader2 } from "lucide-react";

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your FleetSense AI Assistant. How can I help you with walkaround checks, DVSA compliance, or vehicle defects today?",
    },
  ]);
  const botUrl = process.env.URL_CHATBOT || "http://127.0.0.1:8000";
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${botUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed response from ChatBot");
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "No response received." },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Connection Error: ChatBot failed to respond at the moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#61938b] text-[#0f231f] flex flex-col p-4 sm:p-8">
      <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
        {/* Top Back Navigation */}
        <div className="mb-4 shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-4 shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-emerald-100" /> AI Fleet Assistant
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#091714]">
            FleetSense Support Copilot
          </h1>
        </div>

        {/* Chat Window Container */}
        <div className="flex-1 min-h-0 bg-[#f4f7f5] rounded-3xl border border-white/80 shadow-2xl flex flex-col overflow-hidden">
          {/* Messages Area - Smooth Scrollable Container */}
          <div className="flex-1 p-6 overflow-y-auto scroll-smooth space-y-4 bg-[#e8eee9]/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                    msg.sender === "user"
                      ? "bg-[#61938b] text-white"
                      : "bg-[#203330] text-emerald-300"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-5 h-5" />
                  ) : (
                    <Bot className="w-5 h-5" />
                  )}
                </div>

                <div
                  className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#203330] text-white rounded-tr-none"
                      : "bg-white text-[#091714] border border-[#8baaa1]/30 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-bold text-[#203330] bg-white p-3.5 rounded-2xl border border-[#8baaa1]/30 w-fit">
                <Loader2 className="w-4 h-4 animate-spin text-[#61938b]" />
                FleetSense AI is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 bg-white border-t border-[#8baaa1]/30 flex items-center gap-3 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about DVSA rules, defect reporting, or walkarounds..."
              className="flex-1 px-5 py-3.5 bg-[#f4f7f5] border border-[#8baaa1]/40 rounded-xl text-sm text-[#091714] placeholder-[#8baaa1] focus:outline-none focus:ring-2 focus:ring-[#203330]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3.5 bg-[#203330] hover:bg-[#122220] disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-2 text-sm shrink-0"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}