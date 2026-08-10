import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ArrowLeft, Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#61938b] text-[#0f231f]">
      <Navbar alwaysSolid={true} />

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
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#091714]">
              Privacy Policy
            </h1>
          </div>

          <p className="text-xs text-[#526863] font-medium mb-8">
            Last updated: August 2026
          </p>

          <div className="space-y-6 text-[#1c332e] text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">1. Data We Collect</h2>
              <p>
                FleetSense collects vehicle registration numbers, driver inspection logs, defect photos, MOT and service timestamps, and account details required to operate the compliance management platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">2. How We Use Data</h2>
              <p>
                We use collected information solely to provide digital walkaround inspection processing, automated compliance alerts, audit history archiving, and workshop defect escalation workflows.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">3. Data Security & Archiving</h2>
              <p>
                All digital inspection records are stored securely with encrypted access. Historical logs are maintained for DVSA compliance auditing and are not sold or rented to third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#091714] mb-2">4. Your Data Rights</h2>
              <p>
                Fleet managers can request data exports or profile deletions according to applicable data protection regulations by contacting customer support.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}