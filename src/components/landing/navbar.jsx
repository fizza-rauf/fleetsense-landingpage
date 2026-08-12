"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Features", href: "/features" },
  { label: "Compliance", href: "/compliance" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar({alwaysSolid = false}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);s
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 const isActive = alwaysSolid || isScrolled;
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isActive
          ? "border-b border-white/20 bg-[#446761]/80 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-2 rounded-lg text-white">
            {/* <ShieldCheck className="h-5 w-5 text-emerald-300" /> */}
           <div className="flex">
              <Image src="/Group 180.svg" alt="FleetSense Logo" width={80} height={85} />
              <sup className="text-[10px] ml-0.5 pt-9">&trade;</sup>
           </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#099f6b]">
            Fleet<span className="text-white">Sense</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#152824]">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-semibold text-[#065b3d] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-bold text-[#099f6b] hover:text-white hidden sm:block transition-colors"
          >
            Sign In
          </Link>
          <button className="bg-[#1b2f2c] hover:bg-[#172624] active:scale-95 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-all shadow-sm">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}