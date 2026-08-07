"use client";

import { ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#48736c] border-y border-white/20 relative overflow-hidden text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1b2f2c] text-emerald-200 mb-6">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <h3 className="text-xs font-semibold text-emerald-100 uppercase tracking-widest mb-3">
          Why Fleet Managers Choose FleetSense
        </h3>

        <blockquote className="text-2xl sm:text-3xl font-light text-white leading-snug">
          "Modern transport management requires instant visibility. FleetSense bridges the gap between drivers on the road and compliance officers in the office with simple walkaround checks."
        </blockquote>

        <p className="mt-6 text-sm text-white/80 font-medium">
          Built for Road Transport Operations & DVSA Standards
        </p>
      </div>
    </section>
  );
}