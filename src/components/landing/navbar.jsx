"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Features", href: "#features" },
  { label: "Compliance", href: "#compliance" },
  { label: "Pricing", href: "#pricing" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "border-b border-white/20 bg-[#61938b]/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-2 bg-[#1b2f2c] rounded-lg text-white">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0d1f1c]">
            Fleet<span className="text-white">Sense</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#0d1f1c]">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-semibold text-[#0d1f1c] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-bold text-[#0d1f1c] hover:text-white hidden sm:block transition-colors"
          >
            Sign In
          </Link>
          <button className="bg-[#1b2f2c] hover:bg-[#122220] active:scale-95 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-all shadow-sm">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}