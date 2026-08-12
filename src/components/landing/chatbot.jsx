"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am FleetSense Assistant. How can I help you with walkaround checks or fleet compliance today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
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
      // FastAPI Backend Endpoint (matches main.py: @app.post("/api/chat"))
      const response = await fetch("http://127.0.0.1:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to AI backend");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || data.reply || "I received your message!" },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I'm having trouble connecting to the backend right now. Please ensure your FastAPI server is running.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#203330] hover:bg-[#122220] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/30"
        >
          <Bot className="w-6 h-6 text-emerald-300" />
          <span className="font-bold text-sm tracking-wide">AI Assistant</span>
        </button>
      )}

      {/* Chatbox Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-[#f4f7f5] rounded-3xl shadow-2xl border border-white/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Chat Header */}
          <div className="bg-[#203330] p-4 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#61938b] flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">FleetSense AI Assistant</h3>
                <p className="text-[10px] text-emerald-200 font-medium">Online • Powered by OpenRouter</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#e8eee9]/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    msg.sender === "user"
                      ? "bg-[#61938b] text-white"
                      : "bg-[#203330] text-emerald-300"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`max-w-[78%] p-3.5 rounded-2xl text-xs font-medium leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#203330] text-white rounded-tr-none"
                      : "bg-white text-[#091714] border border-[#8baaa1]/30 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-bold text-[#203330] bg-white p-3 rounded-2xl border border-[#8baaa1]/30 w-fit">
                <Loader2 className="w-4 h-4 animate-spin text-[#61938b]" />
                FleetSense AI is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#8baaa1]/30 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about vehicle compliance..."
              className="flex-1 px-4 py-2.5 bg-[#f4f7f5] border border-[#8baaa1]/40 rounded-xl text-xs text-[#091714] placeholder-[#8baaa1] focus:outline-none focus:ring-2 focus:ring-[#203330] font-medium"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-[#203330] hover:bg-[#122220] disabled:opacity-50 text-white rounded-xl transition-all shadow-md shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}