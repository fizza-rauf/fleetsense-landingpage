"use client";

import { ClipboardCheck, ShieldAlert, Wrench, FileText, Gauge, UserCheck } from "lucide-react";

export default function Features() {
  const featureList = [
    {
      icon: ClipboardCheck,
      title: "Digital Walkaround Inspection Forms",
      description: "Replace paper forms with fast, mobile-friendly checklists tailored for commercial drivers before every trip.",
      isHighlighted: false,
    },
    {
      icon: ShieldAlert,
      title: "Expiry & Compliance Alerts",
      description: "Automated tracking for MOT deadlines, vehicle servicing, tachograph calibrations, and driver license validity.",
      isHighlighted: true, // Soft Sage Pill Style like right chat bubble in reference
    },
    {
      icon: UserCheck,
      title: "Driver Support Assistant",
      description: "Step-by-step guidance for drivers to document vehicle issues accurately and follow safety reporting protocols.",
      isHighlighted: false,
    },
    {
      icon: Wrench,
      title: "Defect Workflow & Workshop Logging",
      description: "Direct defect escalation to workshop managers to shorten vehicle downtime and prevent road non-compliance.",
      isHighlighted: false,
    },
    {
      icon: FileText,
      title: "Audit-Ready Digital Records",
      description: "Store full historical walkaround inspections and defect resolutions safely for regulatory fleet audits.",
      isHighlighted: true,
    },
    {
      icon: Gauge,
      title: "Fleet Operations Management",
      description: "Real-time visibility into missed checks, active driver logs, and overall fleet operational readiness.",
      isHighlighted: false,
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#61938b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-white text-xs font-medium tracking-wide mb-4 backdrop-blur-md border border-white/30">
            Fleet Operations System
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Complete Toolkit for Commercial Fleets
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl transition-all shadow-lg ${
                  feature.isHighlighted
                    ? "bg-[#8baaa1] text-white border border-[#7a9990]" // Sage bubble style
                    : "bg-[#f4f7f5] text-[#2a3a37] border border-white/80" // Off-white card style
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${
                    feature.isHighlighted
                      ? "bg-[#203330] text-emerald-100"
                      : "bg-[#e8ece9] text-[#203330]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    feature.isHighlighted ? "text-white" : "text-[#1c2927]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    feature.isHighlighted ? "text-emerald-50" : "text-[#526863]"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}