import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#61938b] text-[#0f231f]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="bg-[#f4f7f5] rounded-3xl p-8 sm:p-12 shadow-xl border border-white/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-[#203330] rounded-xl text-emerald-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#091714]">
              Terms of Use
            </h1>
          </div>

          <p className="text-xs text-[#526863] font-medium mb-8">
            Last updated: August 2026
          </p>

          <div className="space-y-6 text-[#1c332e] text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using FleetSense, you agree to be bound by these Terms of Use and all applicable laws and regulations governing commercial transport operations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">2. Walkaround & Inspection Responsibilities</h2>
              <p>
                FleetSense provides digital tools for daily pre-trip vehicle walkaround inspections and defect reporting. Drivers and fleet managers remain legally responsible for ensuring vehicles comply with DVSA and road safety standards prior to vehicle deployment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">3. User Accounts & Security</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their login credentials. Any unauthorized access or defect report submissions using your account must be reported immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">4. Service Availability</h2>
              <p>
                We strive for continuous service uptime, but we do not guarantee uninterrupted access to digital logs or inspection archiving during scheduled maintenance or system updates.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}