import Link from "next/link";
import { Compass, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-stone-300 border-t border-primary-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-primary-900/60">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-800 text-gold flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                RETREATS<span className="text-gold font-sans font-light ml-1">+</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              The world’s premier independent directory for luxury wellness centers, longevity clinics, Ayurvedic sanctuaries, and burnout recovery retreats.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold font-medium bg-primary-900/50 px-3 py-2 rounded-lg border border-primary-800/40 w-fit">
              <ShieldCheck className="w-4 h-4" />
              100% Independent & Verified Listing Standards
            </div>
          </div>

          {/* Goals / Modalities */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Wellness Goals
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/search?goal=Longevity+%26+Anti-Aging" className="hover:text-white transition-colors">
                  Longevity & Anti-Aging
                </Link>
              </li>
              <li>
                <Link href="/search?goal=Burnout+%26+Stress" className="hover:text-white transition-colors">
                  Burnout & Stress Reset
                </Link>
              </li>
              <li>
                <Link href="/search?goal=Detox+%26+Weight+Loss" className="hover:text-white transition-colors">
                  Detox & Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/search?goal=Ayurveda+%26+Panchakarma" className="hover:text-white transition-colors">
                  Ayurveda & Panchakarma
                </Link>
              </li>
              <li>
                <Link href="/search?goal=Spiritual+Awakening" className="hover:text-white transition-colors">
                  Spiritual Awakening
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/search?continent=Europe" className="hover:text-white transition-colors">
                  Switzerland & Alps
                </Link>
              </li>
              <li>
                <Link href="/search?continent=Asia-Pacific" className="hover:text-white transition-colors">
                  Bali & Indonesia
                </Link>
              </li>
              <li>
                <Link href="/search?country=Spain" className="hover:text-white transition-colors">
                  Spain & Mediterranean
                </Link>
              </li>
              <li>
                <Link href="/search?country=India" className="hover:text-white transition-colors">
                  Himalayas & India
                </Link>
              </li>
              <li>
                <Link href="/search?country=United+States" className="hover:text-white transition-colors">
                  Sedona & North America
                </Link>
              </li>
            </ul>
          </div>

          {/* For Centers & Company */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              For Centers & Partners
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/list-a-center" className="hover:text-white transition-colors flex items-center gap-1">
                  List Your Center (Free)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Advertising & Pro Tiers
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">
                  Retreat Matcher
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Compare Centers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} RETREATS PLUS Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-400 cursor-pointer">Editorial Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
