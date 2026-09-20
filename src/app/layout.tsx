import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CompareProvider } from "@/components/compare/CompareContext";
import CompareFloatingBar from "@/components/compare/CompareFloatingBar";

export const metadata: Metadata = {
  title: "RETREATS+ | Premier Wellness & Longevity Directory",
  description: "Find the world's finest wellness retreats, longevity clinics, Ayurvedic sanctuaries, and burnout recovery resorts. Transparent reviews, verified standards, and custom matching.",
  keywords: ["wellness retreats", "longevity clinic", "burnout recovery", "ayurveda panchakarma", "detox retreat", "luxury wellness resort"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1D231F] antialiased">
        <CompareProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CompareFloatingBar />
        </CompareProvider>
      </body>
    </html>
  );
}
