import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ArrowLeft, Truck, Wrench, ShieldCheck, FileCheck } from "lucide-react";

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Commercial Vehicle Inspections",
      desc: "Comprehensive daily walkaround checklists customized for HGV, LGV, and passenger transport vehicles.",
      icon: Truck,
    },
    {
      title: "Automated Defect Management",
      desc: "Real-time defect escalation directly to mechanics and workshop managers with photo attachments.",
      icon: Wrench,
    },
    {
      title: "DVSA Audit & Archiving",
      desc: "Secure, time-stamped digital record keeping ensuring 100% compliance during transport audits.",
      icon: ShieldCheck,
    },
    {
      title: "License & Expiry Tracking",
      desc: "Automated reminders for MOTs, tachographs, driver license checks, and scheduled maintenance.",
      icon: FileCheck,
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

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091714] tracking-tight">
            Our Fleet Services
          </h1>
          <p className="mt-4 text-lg font-medium text-[#0f231f]">
            Explore our end-to-end fleet compliance and vehicle management tools designed for modern transport operators.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f4f7f5] border border-white/80 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#203330] text-emerald-200 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#091714] mb-3">
                  {service.title}
                </h2>
                <p className="text-base font-medium text-[#1c332e] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

      </main>

      <Footer />
    </div>
  );
}