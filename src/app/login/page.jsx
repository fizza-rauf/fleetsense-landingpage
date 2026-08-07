"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ShieldCheck, ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic yahan handle karein
    console.log("Logging in with:", formData);
  };

  return (
    <div className="min-h-screen bg-[#61938b] text-[#0f231f] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          {/* Form Container */}
          <div className="bg-[#f4f7f5] rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/80">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex p-3 bg-[#203330] rounded-2xl text-emerald-300 mb-4 shadow-md">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-extrabold text-[#091714] tracking-tight">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm font-medium text-[#1c332e]">
                Sign in to manage your fleet compliance logs
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-[#091714] uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#526863]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="driver@fleetsense.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-[#8baaa1]/50 text-[#091714] placeholder-[#8baaa1] focus:outline-none focus:ring-2 focus:ring-[#203330] font-medium transition-all text-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-bold text-[#091714] uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#526863]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full pl-11 pr-11 py-3 rounded-xl bg-white border border-[#8baaa1]/50 text-[#091714] placeholder-[#8baaa1] focus:outline-none focus:ring-2 focus:ring-[#203330] font-medium transition-all text-sm shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#526863] hover:text-[#091714]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between text-xs font-semibold">
                <label className="flex items-center gap-2 cursor-pointer text-[#1c332e]">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({ ...formData, rememberMe: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-[#8baaa1] text-[#203330] focus:ring-[#203330] accent-[#203330]"
                  />
                  Remember me
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[#203330] hover:underline font-bold"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#203330] hover:bg-[#122220] active:scale-[0.99] text-white font-bold rounded-xl transition-all shadow-md text-sm mt-2"
              >
                Sign In to Dashboard
              </button>

            </form>

            {/* Footer Prompt */}
            <div className="mt-8 pt-6 border-t border-[#8baaa1]/30 text-center text-xs font-semibold text-[#1c332e]">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#091714] font-extrabold hover:underline"
              >
                Request Demo / Register
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}