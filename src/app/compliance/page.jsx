import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ArrowLeft, ShieldCheck, FileCheck, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

export default function CompliancePage() {
  const complianceModules = [
    {
      title: "DVSA Walkaround Verifications",
      description: "Mandatory daily pre-trip checks recorded digitally with timestamp and driver authentication to meet rigorous roadworthiness standards.",
      icon: CheckCircle2,
      status: "100% Audit Ready",
    },
    {
      title: "Defect Rectification Tracking",
      description: "Real-time tracking of reported vehicle defects, workshop repairs, and mechanic sign-offs to ensure zero non-compliant vehicles on the road.",
      icon: AlertTriangle,
      status: "Automated Escalation",
    },
    {
      title: "MOT & Service Schedule Archive",
      description: "Centralized tracking and automated deadline alerts for vehicle MOT renewals, tachograph calibrations, and routine maintenance logs.",
      icon: Clock,
      status: "Active Monitoring",
    },
    {
      title: "Secure Audit Trail Export",
      description: "Generate comprehensive historical inspection logs instantly in standardized formats for transport regulators and fleet auditors.",
      icon: FileCheck,
      status: "Instant Export",
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

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium tracking-wide mb-4 backdrop-blur-md border border-white/30">
            <ShieldCheck className="w-4 h-4 text-emerald-100" /> Regulatory Standards & Security
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091714] tracking-tight">
            Fleet Compliance Management
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-[#0f231f] leading-relaxed">
            Ensure complete transparency, roadworthiness, and strict adherence to commercial transport regulations with FleetSense's digital audit architecture.
          </p>
        </div>

        {/* Compliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceModules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f4f7f5] border border-white/80 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#203330] text-emerald-200 flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#203330] bg-[#8baaa1]/30 px-3.5 py-1.5 rounded-full border border-[#8baaa1]/40">
                      {item.status}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#091714] mb-3">
                    {item.title}
                  </h2>
                  <p className="text-base font-medium text-[#1c332e] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Banner */}
        <div className="rounded-3xl bg-[#8baaa1] p-8 sm:p-12 text-white border border-[#7a9990] shadow-xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready for your next regulatory audit?
          </h2>
          <p className="text-emerald-50 text-base font-normal max-w-2xl mx-auto mb-8">
            Eliminate paper clutter and disorganized folders. Transition your entire commercial fleet to secure, tamper-proof digital archiving today.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#203330] hover:bg-[#152422] text-white font-semibold rounded-2xl transition-all shadow-lg"
          >
            Access Fleet Dashboard
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}