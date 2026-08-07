"use client";

import { CheckCircle2, ShieldAlert, Truck, Users } from "lucide-react";

const STATS = [
  { label: "Daily Checks Completed", value: "98.4%", icon: CheckCircle2 },
  { label: "Audit Pass Rate", value: "100%", icon: ShieldAlert },
  { label: "Active Commercial Vehicles", value: "1,200+", icon: Truck },
  { label: "Active Driver Users", value: "3,500+", icon: Users },
];

export default function Metrics() {
  return (
    <section className="py-16 bg-[#527f77] border-y border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center hover:bg-white/15 transition-all"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#1b2f2c] text-emerald-200 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-light">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}