import type { Metadata } from "next";
import Chatbot from "@/components/landing/chatbot";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "FleetSense - Fleet Compliance & Management Platform",
description:
    "Streamline commercial transport compliance, digital walkaround checks, and defect tracking",
icons: {
    icon: "/fleet sense logo.svg",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Floating AI Assistant Widget */}
        <Chatbot />
      </body>
    </html>
  );
}