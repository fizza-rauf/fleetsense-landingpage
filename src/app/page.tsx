import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import MetricsBanner from "@/components/landing/metricsbanner";
import Features from "@/components/landing/features";
import WhyChooseUs from "@/components/landing/whychooseus";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Pricing from "@/components/landing/pricing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MetricsBanner />
        <Features />
        <WhyChooseUs />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}