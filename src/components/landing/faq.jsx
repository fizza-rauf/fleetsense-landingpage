"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "How do drivers complete walkaround checks?",
    answer:
      "Drivers simply open the mobile-friendly web app on their phone or tablet, complete the step-by-step pre-trip vehicle checklist, attach photos if any defects are found, and submit it instantly.",
  },
  {
    question: "Are compliance alerts automated?",
    answer:
      "Yes. FleetSense sends automated notifications for upcoming MOTs, vehicle servicing, tachograph calibrations, driver license checks, and missed daily inspections.",
  },
  {
    question: "Can drivers ask the local AI assistant for help during inspections?",
    answer:
      "Absolutely. Drivers can interact with the on-board assistant to quickly look up vehicle check requirements, defect classifications, or standard operating procedures directly on the road.",
  },
  {
    question: "How are vehicle defects reported and managed?",
    answer:
      "When a driver flags a defect during a walkaround check, it is immediately routed to the fleet dashboard. Managers can assign the issue to workshop staff, track repair status, and archive the resolution for audits.",
  },
  {
    question: "Are inspection records audit-ready for DVSA compliance?",
    answer:
      "Yes. All submitted walkaround checks, defect histories, and repair logs are stored digitally with time-stamps, ensuring complete audit readiness at any time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#4e7d75] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-100 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-emerald-200" /> Support & Clarifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base font-light">
            Everything you need to know about fleet walkaround checks, compliance tracking, and driver support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-200 hover:bg-white/15"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#1b2f2c] text-emerald-200 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-white/85 text-sm sm:text-base font-light leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}