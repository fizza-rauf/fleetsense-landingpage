"use client";

import Link from "next/link";
import { Truck, ArrowRight, CheckCircle2, AlertCircle, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-sage-hero pt-16 pb-16 md:pt-24 md:pb-24 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-12">
          
          {/* Badge (Matching Glass Pill Style) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium tracking-wide mb-6 backdrop-blur-md border border-white/30">
            <Truck className="w-4 h-4 text-emerald-100" /> Commercial Fleet Compliance Platform
          </div>

          {/* Main Headline in Crisp Pure White */}
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
            Digital Walkaround Checks & <br className="hidden sm:inline" />
            <span className="font-semibold text-white">Fleet Compliance Management</span>
          </h1>

          {/* Subtitle in Soft White/Light Mint */}
          <p className="mt-6 text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Streamline daily vehicle inspections, automate defect reporting, and maintain full DVSA audit readiness across your commercial fleet.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#203330] hover:bg-[#152422] text-white font-medium rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Start Fleet Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-medium rounded-2xl transition-all text-center backdrop-blur-md"
            >
              View Solutions
            </Link>
          </div>
        </div>

        {/* Floating Card - Pure Light Off-White Surface Like Image */}
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-[#f4f7f5]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl border border-white/80 text-[#2a3a37]">
          <div className="flex items-center justify-between pb-4 border-b border-[#d8e0dc] mb-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-[#3d524e] uppercase tracking-wider">Live Fleet Status</span>
            </div>
            <div className="text-xs font-medium text-[#203330] bg-[#8baaa1]/20 px-3.5 py-1 rounded-full border border-[#8baaa1]/30">
              Active Fleet: 48 Vehicles Registered
            </div>
          </div>

          {/* Chat / Status Bubbles matching image contrast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            
            {/* Left-style Light Gray Bubble */}
            <div className="p-5 rounded-2xl bg-[#e8ece9] text-[#2a3a37] border border-[#dadfda]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-[#526863] uppercase">Pre-Trip Inspections</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-semibold text-[#1c2927]">42 / 45 Done</div>
              <p className="text-xs text-[#526863] mt-1">93% Daily Checks Complete</p>
            </div>

            {/* Right-style Soft Sage Bubble with Pure White Text */}
            <div className="p-5 rounded-2xl bg-[#8baaa1] text-white border border-[#7a9990] shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-emerald-50 uppercase">Defect Escalations</span>
                <AlertCircle className="w-4 h-4 text-amber-200" />
              </div>
              <div className="text-2xl font-bold text-white">2 Alerts</div>
              <p className="text-xs text-emerald-50 mt-1">1 Minor defect reported</p>
            </div>

            {/* Left-style Light Gray Bubble */}
            <div className="p-5 rounded-2xl bg-[#e8ece9] text-[#2a3a37] border border-[#dadfda]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-[#526863] uppercase">Compliance Archiving</span>
                <FileText className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-semibold text-[#1c2927]">100% Audit Ready</div>
              <p className="text-xs text-[#526863] mt-1">Digital logs saved securely</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}