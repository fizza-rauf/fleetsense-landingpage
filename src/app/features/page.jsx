import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import {
  ArrowLeft,
  ClipboardCheck,
  Wrench,
  BarChart3,
  Clock,
  ShieldCheck,
  BellRing,
} from "lucide-react";

export default function FeaturesPage() {
  const featuresList = [
    {
      icon: ClipboardCheck,
      title: "Digital Walkaround Inspections",
      description:
        "Paperless daily pre-trip checks for drivers. Instantly upload inspection logs with timestamps and photo proof to comply with DVSA standards.",
    },
    {
      icon: Wrench,
      title: "Real-Time Defect Reporting",
      description:
        "Drivers can report safety defects immediately from their phone. Issues are routed straight to mechanics and fleet managers for swift resolution.",
    },
    {
      icon: BarChart3,
      title: "Centralized Fleet Analytics",
      description:
        "Get a clear view of fleet health, recurring maintenance costs, and inspection completion rates through high-contrast visual dashboards.",
    },
    {
      icon: BellRing,
      title: "Automated Maintenance Alerts",
      description:
        "Never miss an MOT, service date, or tachograph calibration deadline again with automated notifications sent directly to your inbox or Slack.",
    },
    {
      icon: ShieldCheck,
      title: "Tamper-Proof Audit Vault",
      description:
        "All historical inspection logs are archived securely. Export complete regulatory reports in seconds whenever an auditor calls.",
    },
    {
      icon: Clock,
      title: "Zero-Downtime Workflow",
      description:
        "Fast-track defect rectifications so compliant vehicles spend less time waiting in workshops and more time safely on the road.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#61938b] text-[#0f231f]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 uppercase tracking-wider">
            Capabilities & Tools
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091714] tracking-tight mt-4">
            Built for Modern Transport Operations
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-[#0f231f] leading-relaxed">
            Discover how FleetSense simplifies compliance, keeps drivers safe, and eliminates paper clutter across your entire commercial fleet.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#f4f7f5] rounded-3xl p-8 border border-white/80 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#203330] text-emerald-200 flex items-center justify-center shadow-md mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-[#091714] mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-sm font-medium text-[#1c332e] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-[#203330] p-8 sm:p-12 text-center text-white border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Upgrade Your Fleet Efficiency Today
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base font-normal max-w-xl mx-auto mb-8">
            Experience how easy digital walkaround inspections and defect tracking can be.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#203330] font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-md"
          >
            Get Started Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}