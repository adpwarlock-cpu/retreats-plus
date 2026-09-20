"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WELLNESS_CENTERS } from "@/data/centers";
import CenterCard from "@/components/search/CenterCard";
import {
  Search,
  Sparkles,
  ShieldCheck,
  Award,
  Scale,
  HeartHandshake,
  Compass,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Leaf,
  HeartPulse,
  Sun,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("all");
  const [selectedContinent, setSelectedContinent] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("query", searchQuery.trim());
    if (selectedGoal !== "all") params.set("goal", selectedGoal);
    if (selectedContinent !== "all") params.set("continent", selectedContinent);
    router.push(`/search?${params.toString()}`);
  };

  const featuredCenters = WELLNESS_CENTERS.filter(
    (c) => c.badgeTier === "featured" || c.badgeTier === "verified"
  ).slice(0, 6);

  const categories = [
    {
      title: "Longevity & Anti-Aging",
      count: "18 Centers",
      icon: HeartPulse,
      slug: "Longevity+%26+Anti-Aging",
      description: "Cellular genomics, hyperbaric oxygen, stem cells, and biological age reversal.",
    },
    {
      title: "Burnout & Nervous System",
      count: "34 Centers",
      icon: Sun,
      slug: "Burnout+%26+Stress",
      description: "Cortisol recalibration, somatic therapies, neuro-feedback, and deep rest.",
    },
    {
      title: "Ayurvedic Panchakarma",
      count: "22 Centers",
      icon: Leaf,
      slug: "Ayurveda+%26+Panchakarma",
      description: "Centuries-old pulse diagnostics, herbal purifications, and dosha balance.",
    },
    {
      title: "Detox & Metabolic Reset",
      count: "29 Centers",
      icon: Flame,
      slug: "Detox+%26+Weight+Loss",
      description: "Modern Mayr cure, colon hydrotherapy, fasting protocols, and liver detox.",
    },
    {
      title: "Spiritual & Mindfulness",
      count: "41 Centers",
      icon: Compass,
      slug: "Spiritual+Awakening",
      description: "Sacred ceremonies, sound alchemy, silent meditation, and emotional release.",
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-sand-100/70 via-[#FBF9F5] to-[#FBF9F5] border-b border-[#E8DFCE]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#D9CAA9] px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold text-primary-950 uppercase tracking-wider">
                The Independent Global Standard in Wellness
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Find the Sanctuary Your <br className="hidden sm:inline" />
              <span className="italic font-normal text-primary-800">Body & Mind</span> Truly Need.
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore verified wellness retreats, longevity clinics, and Ayurvedic sanctuaries worldwide. Filter by exact modalities, certified medical supervision, and wellness intentions.
            </p>

            {/* Search Box Card */}
            <div className="mt-8 bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-stone-200/80 max-w-4xl mx-auto">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Search Term */}
                <div className="sm:col-span-4 relative flex items-center px-3 py-2 bg-sand-50 rounded-2xl border border-stone-200/60 focus-within:border-primary-700 transition-colors">
                  <Search className="w-4 h-4 text-stone-400 shrink-0 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Destination, clinic, or modality..."
                    className="w-full bg-transparent text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none"
                  />
                </div>

                {/* Goal Dropdown */}
                <div className="sm:col-span-3 px-3 py-2 bg-sand-50 rounded-2xl border border-stone-200/60">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 mb-0.5">
                    Primary Goal
                  </label>
                  <select
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Any Wellness Goal</option>
                    <option value="Longevity & Anti-Aging">Longevity & Anti-Aging</option>
                    <option value="Burnout & Stress">Burnout & Stress</option>
                    <option value="Detox & Weight Loss">Detox & Weight Loss</option>
                    <option value="Ayurveda & Panchakarma">Ayurveda & Panchakarma</option>
                    <option value="Spiritual Awakening">Spiritual Awakening</option>
                    <option value="Emotional & Trauma Healing">Emotional Healing</option>
                  </select>
                </div>

                {/* Region Dropdown */}
                <div className="sm:col-span-3 px-3 py-2 bg-sand-50 rounded-2xl border border-stone-200/60">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 mb-0.5">
                    Region
                  </label>
                  <select
                    value={selectedContinent}
                    onChange={(e) => setSelectedContinent(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Everywhere (Global)</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia-Pacific">Asia-Pacific</option>
                    <option value="North America">North America</option>
                    <option value="Latin America">Latin America</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Secondary CTA: Quiz Link */}
              <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-600">
                <span>Not sure what you need?</span>
                <Link
                  href="/quiz"
                  className="font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1 underline underline-offset-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Take the 60-Second Retreat Matcher Quiz
                </Link>
              </div>
            </div>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-700" />
                <span>Verified Center Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-primary-700" />
                <span>Side-by-Side Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-primary-700" />
                <span>Direct Inquiries, No Markups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Intentions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-800 block mb-1">
              Curated by Outcome
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Explore by Wellness Intention
            </h2>
          </div>
          <Link
            href="/search"
            className="text-xs font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1.5"
          >
            Browse all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href={`/search?goal=${cat.slug}`}
                className="group bg-white p-5 rounded-2xl border border-stone-200/80 hover:border-primary-700/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sand-100 group-hover:bg-primary-800 text-stone-800 group-hover:text-gold flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-primary-800 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 group-hover:text-primary-800 font-medium">
                  <span>{cat.count}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Sanctuaries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-800">
                Hand-Selected Excellence
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Featured Wellness Sanctuaries
            </h2>
          </div>
          <Link
            href="/search"
            className="text-xs font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1.5"
          >
            View all 100+ retreats
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCenters.map((center) => (
            <CenterCard key={center.id} center={center} />
          ))}
        </div>
      </section>

      {/* Interactive Quiz Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary-950 text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl border border-primary-900">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-800/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary-900/80 text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Retreat Matcher Algorithm
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Let Our 60-Second Quiz Match You with Your Ideal Retreat.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Answer 4 questions regarding your wellness objectives, preferred geography, medical supervision level, and budget. Receive tailored recommendations ranked by compatibility percentage.
            </p>
            <div className="pt-2">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary-950 font-bold px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <span>Start Free Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Why We are Way Better than Standard Directories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-800">
            Uncompromising Transparency
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            How RETREATS+ Sets the Global Benchmark
          </h2>
          <p className="text-stone-600 text-sm">
            We built Retreats Plus because legacy directories are either cluttered with unverified listings or charge inflated middleman booking fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sand-100 text-primary-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Rigorous 4-Step Verification
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Every verified center undergoes credential checks for its medical and holistic staff, facility health inspections, and confirmation of transparent pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sand-100 text-primary-800 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Side-by-Side Comparison
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Compare up to 3 centers side-by-side: evaluate doctor-to-guest ratios, daily schedules, modalities, and real guest reviews without juggling 10 open browser tabs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sand-100 text-primary-800 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Direct Contact & No Markups
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              You communicate directly with the retreat center’s concierge. No hidden commissions, no inflated middleman pricing, and direct booking guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* For Center Owners CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand-100 rounded-3xl p-8 sm:p-12 border border-[#D9CAA9] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-800 block">
              For Retreat Owners & Practitioners
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              List Your Wellness Sanctuary on RETREATS+
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              It is 100% free to list your center. Showcase your modalities, doctor credentials, and retreat calendar to over 250,000 monthly high-intent wellness travelers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/list-a-center"
              className="bg-primary-800 hover:bg-primary-900 text-white font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-sm hover:shadow transition-all"
            >
              List Your Center (Free)
            </Link>
            <Link
              href="/pricing"
              className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-sm transition-all"
            >
              View Advertising Tiers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
