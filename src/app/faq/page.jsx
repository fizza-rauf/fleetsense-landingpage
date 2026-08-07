"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ArrowLeft, ChevronDown, HelpCircle, Mail } from "lucide-react";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: "How does FleetSense help with DVSA compliance?",
      answer:
        "FleetSense digitizes daily pre-trip walkaround inspections, captures photo evidence of defects, and maintains a tamper-proof audit log. All records are instantly searchable and exportable for DVSA inspections.",
    },
    {
      question: "Can drivers use FleetSense on mobile devices?",
      answer:
        "Yes! FleetSense is optimized for mobile phones, tablets, and desktops. Drivers can perform pre-trip inspections, record defect logs, and upload photos directly from their smartphones.",
    },
    {
      question: "What happens when a driver reports a critical vehicle defect?",
      answer:
        "When a defect is reported, FleetSense triggers real-time alerts via email or Slack to your workshop and fleet managers. The vehicle status automatically updates to prevent unauthorized use until repairs are signed off.",
    },
    {
      question: "Is there a limit on how long inspection records are stored?",
      answer:
        "No. All walkaround inspection logs, defect reports, and maintenance histories are stored indefinitely in your cloud vault so you are always prepared for regulatory audits.",
    },
    {
      question: "Can I upgrade or cancel my subscription at any time?",
      answer:
        "Absoloutely. You can add or remove vehicles from your account at any time, and subscriptions can be updated or canceled with zero hidden penalties.",
    },
    {
      question: "How long does it take to set up FleetSense for my fleet?",
      answer:
        "Setup takes less than 15 minutes. Simply upload your vehicle list, invite your drivers via email/SMS, and you can start running digital pre-trip checks immediately.",
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#61938b] text-[#0f231f]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-emerald-100" /> Help Center
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091714] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base font-medium text-[#0f231f] leading-relaxed">
            Everything you need to know about FleetSense compliance tracking, driver logs, and fleet integration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#f4f7f5] rounded-2xl border border-white/80 shadow-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-lg text-[#091714] focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`p-2 rounded-xl bg-[#203330] text-emerald-300 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm font-medium text-[#1c332e] leading-relaxed border-t border-[#8baaa1]/20 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Box */}
        <div className="rounded-3xl bg-[#203330] p-8 sm:p-10 text-center text-white border border-white/20 shadow-xl max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#61938b] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Still have questions?
          </h2>
          <p className="text-emerald-100 text-sm font-normal mb-6">
            Can’t find the answer you’re looking for? Reach out to our fleet support team.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#61938b] hover:bg-[#52827a] text-white font-bold rounded-xl transition-all text-sm shadow-md"
          >
            Contact Support
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}