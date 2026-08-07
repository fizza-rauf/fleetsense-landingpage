"use client";

import { useState } from "react";
import { Check, Shield, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Starter Fleet",
    priceMonthly: "£29",
    priceYearly: "£24",
    description: "Ideal for small transport operators managing up to 10 vehicles.",
    features: [
      "Up to 10 Registered Vehicles",
      "Digital Walkaround Inspection Forms",
      "Basic Defect Reporting Workflow",
      "MOT & Service Expiry Alerts",
      "Standard PDF Audit Reports",
    ],
    buttonText: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Commercial Pro",
    priceMonthly: "£79",
    priceYearly: "£65",
    description: "Built for growing fleets needing automated compliance & driver support.",
    features: [
      "Up to 50 Registered Vehicles",
      "Unlimited Daily Walkaround Checks",
      "Driver AI Inspection Assistant",
      "Automated Compliance Expiry Warnings",
      "Workshop & Defect Resolution Tracking",
      "DVSA Audit-Ready Digital Archiving",
    ],
    buttonText: "Get Started Now",
    highlighted: true,
  },
  {
    name: "Enterprise Fleet",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "Full-scale fleet management solution for large logistics operations.",
    features: [
      "50+ Vehicles & Unlimited Drivers",
      "Dedicated Account & Onboarding Support",
      "Custom Checklist Builder",
      "Full System Integration (APIs)",
      "Priority Workshop Escalations",
      "Custom DVSA Compliance Analytics",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-[#527f77] text-[#0d1f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112220] text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm border border-white/10">
            <Shield className="w-4 h-4 text-emerald-300" /> Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d1f1c]">
            Simple Plans for Every Fleet
          </h2>
          <p className="mt-4 text-[#16332e] text-base sm:text-lg font-medium">
            No hidden setup fees. Choose the right plan to keep your fleet safe and compliant.
          </p>

          {/* Billing Option Toggle Card */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-[#112220]/20 rounded-full border border-white/30 backdrop-blur-md">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                !isYearly
                  ? "bg-[#112220] text-white shadow-md"
                  : "text-[#0d1f1c] hover:text-black font-semibold"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                isYearly
                  ? "bg-[#112220] text-white shadow-md"
                  : "text-[#0d1f1c] hover:text-black font-semibold"
              }`}
            >
              Yearly Billing
              <span className="bg-emerald-300 text-[#0d1f1c] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white text-[#0d1f1c] shadow-2xl scale-105 border-2 border-emerald-400"
                    : "bg-white/90 text-[#0d1f1c] backdrop-blur-md border border-white/40 shadow-lg hover:bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#112220] text-emerald-200 text-xs font-bold px-4 py-1 rounded-full border border-emerald-400 uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300" /> Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-extrabold text-[#0d1f1c]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0d1f1c] tracking-tight">
                      {price}
                    </span>
                    {price !== "Custom" && (
                      <span className="text-slate-600 text-xs font-bold">
                        /month {isYearly && "(billed annually)"}
                      </span>
                    )}
                  </div>

                  <ul className="mt-8 space-y-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-800 mt-0.5 shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-slate-800 font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-8 w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md ${
                    plan.highlighted
                      ? "bg-[#112220] hover:bg-black text-white"
                      : "bg-[#16332e] hover:bg-[#112220] text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}