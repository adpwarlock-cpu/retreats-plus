"use client";

import Link from "next/link";
import { useState } from "react";
import { Compass, Sparkles, Scale, PlusCircle, Menu, X, ShieldCheck } from "lucide-react";
import CurrencySelector from "@/components/common/CurrencySelector";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8DFCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary-800 text-gold flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-primary-950 block leading-tight">
                RETREATS<span className="text-gold font-sans font-light ml-1">+</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-semibold block">
                Wellness & Longevity
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <Link
              href="/search"
              className="hover:text-primary-800 transition-colors flex items-center gap-1.5"
            >
              Explore Centers
            </Link>
            <Link
              href="/quiz"
              className="text-primary-800 hover:text-primary-900 font-semibold transition-colors flex items-center gap-1.5 bg-primary-50 px-3 py-1.5 rounded-full border border-primary-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Retreat Matcher Quiz
            </Link>
            <Link
              href="/compare"
              className="hover:text-primary-800 transition-colors flex items-center gap-1.5"
            >
              <Scale className="w-4 h-4 text-stone-400" />
              Compare
            </Link>
            <Link
              href="/pricing"
              className="hover:text-primary-800 transition-colors"
            >
              Advertising
            </Link>
          </nav>

          {/* Right Action: Currency, List Center & Get Started */}
          <div className="hidden md:flex items-center gap-3.5">
            <CurrencySelector variant="desktop" />
            <Link
              href="/list-a-center"
              className="text-xs font-semibold text-primary-900 hover:text-primary-950 border border-primary-800/30 px-3.5 py-2 rounded-full hover:bg-primary-50 transition-all flex items-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5 text-primary-700" />
              List Center (Free)
            </Link>
            <Link
              href="/quiz"
              className="text-xs font-semibold bg-primary-800 hover:bg-primary-900 text-white px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
            >
              Find My Retreat
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#E8DFCE] px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/search"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-primary-800"
          >
            Explore Centers
          </Link>
          <Link
            href="/quiz"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2 text-base font-semibold text-primary-800"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            Retreat Matcher Quiz
          </Link>
          <Link
            href="/compare"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2 text-base font-medium text-stone-800"
          >
            <Scale className="w-4 h-4 text-stone-500" />
            Compare Centers
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-stone-800"
          >
            Advertising & Sponsorship
          </Link>
          <CurrencySelector variant="mobile" />
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2">
            <Link
              href="/list-a-center"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-primary-800 text-primary-900 text-sm font-semibold"
            >
              List a Wellness Center (Free)
            </Link>
            <Link
              href="/quiz"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-primary-800 text-white text-sm font-semibold shadow-sm"
            >
              Find My Ideal Retreat
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
