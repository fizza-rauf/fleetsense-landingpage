"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter Fleet",
      description: "Essential DVSA compliance tools for small operations.",
      priceMonthly: 29,
      priceAnnual: 24,
      features: [
        "Up to 5 Vehicles",
        "Digital Pre-Trip Inspections",
        "Basic Defect Reporting",
        "Email Notifications",
        "Standard Audit Logs",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Pro Fleet",
      description: "Complete walkaround and automated escalation for growing fleets.",
      priceMonthly: 79,
      priceAnnual: 65,
      features: [
        "Up to 25 Vehicles",
        "Instant Defect Photo Uploads",
        "Automated MOT & Service Alerts",
        "Slack & Email Escalations",
        "Exportable DVSA Audit Vault",
        "Mechanic Workshop Portal",
      ],
      popular: true,
      cta: "Get Started Now",
    },
    {
      name: "Enterprise",
      description: "Customized management, dedicated support, and unlimited scale.",
      priceMonthly: 199,
      priceAnnual: 169,
      features: [
        "Unlimited Vehicles",
        "Custom Workflow Automation",
        "API & Webhook Access",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Analytics Reports",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-[#61938b] text-[#0f231f]">
      <Navbar alwaysSolid={true} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-100" /> Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091714] tracking-tight">
            Simple Plans for Fleets of Any Size
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-[#0f231f] leading-relaxed">
            Eliminate compliance paperwork with fixed monthly pricing and no hidden costs.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#203330] p-1.5 rounded-2xl shadow-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                !isAnnual
                  ? "bg-[#61938b] text-white shadow-md"
                  : "text-emerald-200 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isAnnual
                  ? "bg-[#61938b] text-white shadow-md"
                  : "text-emerald-200 hover:text-white"
              }`}
            >
              Annual Billing <span className="text-emerald-300 font-normal">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? "bg-[#f4f7f5] border-2 border-[#203330] shadow-2xl scale-[1.02]"
                  : "bg-[#f4f7f5]/90 border border-white/80 shadow-xl"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#203330] text-emerald-300 px-4 py-1 rounded-full text-xs font-bold shadow-md">
                  Most Popular Choice
                </span>
              )}

              <div>
                {/* <Image src="/fleet sense logo.svg" alt="FleetSense Logo" width={30} height={30} className="mb-6" /> */}
                <h2 className="text-2xl font-bold text-[#091714] mb-2">{plan.name}</h2>
                <p className="text-xs font-medium text-[#1c332e] mb-6 min-h-[36px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-[#091714]">
                    £{isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs font-bold text-[#526863]">/ vehicle / month</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-[#1c332e]">
                      <div className="p-1 rounded-full bg-[#203330] text-emerald-300 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/login"
                className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                  plan.popular
                    ? "bg-[#203330] text-white hover:bg-[#122220]"
                    : "bg-[#8baaa1] text-[#091714] hover:bg-[#7a9990]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}