"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#4e7d75] py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-[#0a0f0d] text-slate-300 rounded-2xl border border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl text-xs sm:text-sm font-medium">
          
          {/* Copyright Text */}
          <div className="text-slate-300 tracking-wide text-center sm:text-left">
            <Image src="/fleet sense logo.svg" alt="FleetSense Logo" width={20} height={20} className="inline-block mr-2 mb-1" /> 
            2026 FleetSense. All Rights Reserved.
          </div>

          {/* Legal / Policy Links */}
          <div className="flex items-center gap-6 text-slate-300">
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-150"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}