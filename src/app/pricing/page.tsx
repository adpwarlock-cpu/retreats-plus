import Link from "next/link";
import { Check, Sparkles, Award, ShieldCheck, ArrowRight, TrendingUp, Users, Eye } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-sand-100 text-primary-900 text-xs font-bold px-3 py-1 rounded-full border border-sand-200">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          Retreat Operator & Clinic Partnerships
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Transparent Partnership & Advertising Tiers
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          It is always 100% free to list your wellness sanctuary on RETREATS+. Amplify your reach to over 250,000 monthly discerning wellness seekers with our performance-driven sponsorship tiers.
        </p>
      </div>

      {/* Audience Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
          <Users className="w-6 h-6 text-primary-800 mx-auto" />
          <span className="font-serif text-3xl font-bold text-stone-900 block">250,000+</span>
          <span className="text-xs text-stone-500 font-medium">Monthly High-Net-Worth Visitors</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
          <TrendingUp className="w-6 h-6 text-emerald-700 mx-auto" />
          <span className="font-serif text-3xl font-bold text-stone-900 block">$4,200</span>
          <span className="text-xs text-stone-500 font-medium">Average Retreat Booking Value</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
          <Eye className="w-6 h-6 text-gold-dark mx-auto" />
          <span className="font-serif text-3xl font-bold text-stone-900 block">4.8x</span>
          <span className="text-xs text-stone-500 font-medium">Higher Inquiries for Featured Tiers</span>
        </div>
      </div>

      {/* Pricing Tiers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Tier 1: Free Listing */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
              Standard Listing
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Free Sanctuary
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Essential directory presence for licensed wellness retreats, eco-lodges, and yoga centers.
            </p>
            <div className="pt-2">
              <span className="font-serif text-4xl font-bold text-stone-900">$0</span>
              <span className="text-xs text-stone-500 ml-1">/ forever</span>
            </div>

            <ul className="space-y-3 pt-4 border-t border-stone-100 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Standard directory profile</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Up to 5 photo gallery uploads</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>List primary wellness goals & modalities</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Standard inquiry contact forwarding</span>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <span className="w-4 h-4 text-center">—</span>
                <span>No top-of-category ranking</span>
              </li>
            </ul>
          </div>

          <Link
            href="/list-a-center"
            className="w-full py-3 bg-sand-100 hover:bg-sand-200 text-stone-800 rounded-2xl font-bold text-xs text-center transition-all"
          >
            List for Free
          </Link>
        </div>

        {/* Tier 2: Featured Pro (Highlighted) */}
        <div className="bg-primary-950 text-white rounded-3xl p-8 border-2 border-gold shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-gold text-primary-950 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
            Most Popular
          </div>

          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-gold tracking-wider">
              Accelerated Growth
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Featured Partner
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Pinned placement at the top of category searches, direct website & phone click-throughs, and verified audit badges.
            </p>
            <div className="pt-2">
              <span className="font-serif text-4xl font-bold text-white">$199</span>
              <span className="text-xs text-stone-400 ml-1">/ month</span>
            </div>

            <ul className="space-y-3 pt-4 border-t border-primary-900 text-xs text-stone-200">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span className="font-semibold">Top placement in city, country & goal searches</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span className="font-semibold">"Featured Partner" golden verified badge</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Unlimited HD photo gallery + 4K video tour embed</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Direct phone number & website click-through</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Monthly analytics report (impressions, leads)</span>
              </li>
            </ul>
          </div>

          <Link
            href="/list-a-center?plan=featured"
            className="w-full py-3.5 bg-gold hover:bg-gold-dark text-primary-950 rounded-2xl font-bold text-xs text-center shadow-lg transition-all"
          >
            Upgrade to Featured Pro
          </Link>
        </div>

        {/* Tier 3: Elite Sponsor */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-primary-800 tracking-wider">
              Enterprise / Luxury
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Elite Sponsor
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Complete dominant visibility across RETREATS+, homepage spotlight, dedicated editorial article, and concierge lead qualification.
            </p>
            <div className="pt-2">
              <span className="font-serif text-4xl font-bold text-stone-900">$499</span>
              <span className="text-xs text-stone-500 ml-1">/ month</span>
            </div>

            <ul className="space-y-3 pt-4 border-t border-stone-100 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Homepage Hero Carousel Feature</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Dedicated editorial feature in our monthly magazine</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>VIP Concierge screening of all incoming guest leads</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated account manager & quarterly strategy calls</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Priority inclusion in Retreat Matcher Quiz recommendations</span>
              </li>
            </ul>
          </div>

          <Link
            href="/list-a-center?plan=elite"
            className="w-full py-3 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold text-xs text-center shadow-sm transition-all"
          >
            Contact Elite Partnerships
          </Link>
        </div>
      </div>
    </div>
  );
}
