"use client";

import { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { WELLNESS_CENTERS } from "@/data/centers";
import { filterCenters, sortCenters } from "@/lib/filterUtils";
import AdvertisedCenterCard from "@/components/search/AdvertisedCenterCard";
import StandardCenterCard from "@/components/search/StandardCenterCard";
import { FilterState } from "@/types/retreat";
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  MapPin,
  Check,
  Award,
  Loader2,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial filter state from URL
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [goal, setGoal] = useState(searchParams.get("goal") || "all");
  const [continent, setContinent] = useState(searchParams.get("continent") || "all");
  const [country, setCountry] = useState(searchParams.get("country") || "all");
  const [setting, setSetting] = useState(searchParams.get("setting") || "all");
  const [pricingTier, setPricingTier] = useState(searchParams.get("pricingTier") || "all");
  const [modality, setModality] = useState(searchParams.get("modality") || "all");
  const [dietary, setDietary] = useState(searchParams.get("dietary") || "all");
  const [supervision, setSupervision] = useState(searchParams.get("supervision") || "all");
  const [verifiedOnly, setVerifiedOnly] = useState(searchParams.get("verified") === "true");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Progressive scroll loading state (like recovery.com: profiles continuously load as you scroll down)
  const INITIAL_BATCH = 8;
  const BATCH_SIZE = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Reset visibleCount whenever any filter changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
    setIsLoadingMore(false);
  }, [
    query,
    goal,
    continent,
    country,
    setting,
    pricingTier,
    modality,
    dietary,
    supervision,
    verifiedOnly,
    sortBy,
  ]);

  // Compute filtered & sorted list
  const filteredCenters = useMemo(() => {
    const filters: FilterState = {
      query,
      goal,
      continent,
      country,
      setting,
      pricingTier,
      modality,
      dietary,
      supervision,
      verifiedOnly,
    };
    const results = filterCenters(WELLNESS_CENTERS, filters);
    return sortCenters(results, sortBy);
  }, [
    query,
    goal,
    continent,
    country,
    setting,
    pricingTier,
    modality,
    dietary,
    supervision,
    verifiedOnly,
    sortBy,
  ]);

  // Pool of featured centers for premier advertisers
  const featuredPool = useMemo(() => {
    return filteredCenters.filter((c) => c.badgeTier === "featured");
  }, [filteredCenters]);

  // Exactly 3 Featured Advertisers at the top of the feed
  const ADVERTISERS_COUNT = 3;
  const pageAdvertisers = useMemo(() => {
    if (featuredPool.length === 0) {
      return filteredCenters.slice(0, Math.min(ADVERTISERS_COUNT, filteredCenters.length));
    }
    return featuredPool.slice(0, ADVERTISERS_COUNT);
  }, [featuredPool, filteredCenters]);

  // All standard directory profiles (excluding the 3 featured advertisers)
  const standardCenters = useMemo(() => {
    const advertiserIds = new Set(pageAdvertisers.map((c) => c.id));
    return filteredCenters.filter((c) => !advertiserIds.has(c.id));
  }, [filteredCenters, pageAdvertisers]);

  // Currently visible standard profiles
  const visibleStandardCenters = useMemo(() => {
    return standardCenters.slice(0, visibleCount);
  }, [standardCenters, visibleCount]);

  const hasMore = visibleCount < standardCenters.length;

  // IntersectionObserver for seamless infinite scrolling as user scrolls down
  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !isLoadingMore && hasMore) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + BATCH_SIZE);
            setIsLoadingMore(false);
          }, 300);
        }
      },
      { threshold: 0.1, rootMargin: "300px" }
    );

    const currentSentinel = sentinelRef.current;
    observer.observe(currentSentinel);
    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, [isLoadingMore, hasMore, standardCenters.length]);

  const handleResetFilters = () => {
    setQuery("");
    setGoal("all");
    setContinent("all");
    setCountry("all");
    setSetting("all");
    setPricingTier("all");
    setModality("all");
    setDietary("all");
    setSupervision("all");
    setVerifiedOnly(false);
    setSortBy("featured");
    setVisibleCount(INITIAL_BATCH);
    router.push("/search");
  };

  // Active filter count
  const activeCount = [
    query.trim() !== "",
    goal !== "all",
    continent !== "all",
    country !== "all",
    setting !== "all",
    pricingTier !== "all",
    modality !== "all",
    dietary !== "all",
    supervision !== "all",
    verifiedOnly,
  ].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">
            Explore Wellness Retreats
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Showing <span className="font-semibold text-stone-900">{Math.min(filteredCenters.length, pageAdvertisers.length + visibleStandardCenters.length)}</span> of{" "}
            <span className="font-semibold text-stone-900">{filteredCenters.length}</span> verified retreats matching your exact criteria
          </p>
        </div>

        {/* Sort & Mobile Filter Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-800 shadow-sm"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {activeCount > 0 && `(${activeCount})`}
          </button>

          <div className="flex items-center gap-2 text-xs text-stone-600">
            <span className="font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured & Recommended</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside
          className={`md:col-span-1 space-y-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm ${
            mobileFiltersOpen ? "block fixed inset-4 z-50 overflow-y-auto" : "hidden md:block"
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-primary-800" />
              <h2 className="font-serif text-lg font-bold text-stone-900">Filters</h2>
              {activeCount > 0 && (
                <span className="bg-primary-100 text-primary-800 text-[11px] font-bold px-2 py-0.5 rounded-full">
                  {activeCount}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {activeCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-stone-400 hover:text-stone-700 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
              {mobileFiltersOpen && (
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 rounded-lg text-stone-500 hover:bg-stone-100 md:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Search keyword input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Keyword or Location
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="E.g. Switzerland, Bali, Hyperbaric..."
                className="w-full pl-8 pr-3 py-2 text-xs bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-700"
              />
            </div>
          </div>

          {/* Verified Only Toggle */}
          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer select-none bg-sand-50 p-2.5 rounded-xl border border-stone-200">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="w-4 h-4 accent-primary-800 rounded cursor-pointer"
              />
              <div className="text-xs">
                <span className="font-bold text-stone-900 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-700" />
                  Verified Audit Only
                </span>
                <span className="text-[10px] text-stone-500 block">
                  Staff credentials & facility verified
                </span>
              </div>
            </label>
          </div>

          {/* Primary Goal */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Primary Wellness Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full text-xs bg-sand-50 border border-stone-200 rounded-xl p-2.5 focus:outline-none cursor-pointer"
            >
              <option value="all">All Goals</option>
              <option value="Longevity & Anti-Aging">Longevity & Anti-Aging</option>
              <option value="Burnout & Stress">Burnout & Stress</option>
              <option value="Detox & Weight Loss">Detox & Weight Loss</option>
              <option value="Ayurveda & Panchakarma">Ayurveda & Panchakarma</option>
              <option value="Spiritual Awakening">Spiritual Awakening</option>
              <option value="Emotional & Trauma Healing">Emotional Healing</option>
              <option value="Mindfulness & Meditation">Mindfulness & Meditation</option>
            </select>
          </div>

          {/* Region / Continent */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Region
            </label>
            <select
              value={continent}
              onChange={(e) => setContinent(e.target.value)}
              className="w-full text-xs bg-sand-50 border border-stone-200 rounded-xl p-2.5 focus:outline-none cursor-pointer"
            >
              <option value="all">All Regions</option>
              <option value="Asia-Pacific">Asia-Pacific (East, South & SE Asia)</option>
              <option value="Africa & Middle East">Middle East & Africa</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="Latin America">Latin America</option>
            </select>
          </div>

          {/* Country */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Country / Destination
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full text-xs bg-sand-50 border border-stone-200 rounded-xl p-2.5 focus:outline-none cursor-pointer"
            >
              <option value="all">All Countries</option>
              <option value="Thailand">Thailand (Hua Hin, Koh Samui, Phuket, Bangkok)</option>
              <option value="Indonesia">Indonesia (Bali, Ubud, Nusa Dua, Mengwi)</option>
              <option value="India">India (Bangalore, Dehradun, Himalayas)</option>
              <option value="Japan">Japan (Mie, Ise-Shima)</option>
              <option value="China">China (Suzhou, Yangcheng Lake)</option>
              <option value="South Korea">South Korea (Hongcheon)</option>
              <option value="Sri Lanka">Sri Lanka (Kandy, Knuckles)</option>
              <option value="Bhutan">Bhutan (Paro, Punakha)</option>
              <option value="Maldives">Maldives (Raa Atoll)</option>
              <option value="Qatar">Qatar (Al Ruwais, Arabian Gulf)</option>
              <option value="Philippines">Philippines (Batangas, Lipa)</option>
              <option value="Malaysia">Malaysia (Ipoh, Perak)</option>
              <option value="Vietnam">Vietnam (Da Nang, Hue)</option>
              <option value="Cambodia">Cambodia (Koh Rong, Siem Reap)</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Spain">Spain</option>
              <option value="United States">United States</option>
            </select>
          </div>

          {/* Setting */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Setting & Scenery
            </label>
            <select
              value={setting}
              onChange={(e) => setSetting(e.target.value)}
              className="w-full text-xs bg-sand-50 border border-stone-200 rounded-xl p-2.5 focus:outline-none cursor-pointer"
            >
              <option value="all">All Settings</option>
              <option value="Lakefront">Lakefront</option>
              <option value="Lush Rainforest">Lush Rainforest</option>
              <option value="Coastal/Beachfront">Coastal / Beachfront</option>
              <option value="Mountain Sanctuary">Mountain Sanctuary</option>
              <option value="Desert Oasis">Desert Oasis</option>
            </select>
          </div>

          {/* Medical Supervision */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Supervision Level
            </label>
            <select
              value={supervision}
              onChange={(e) => setSupervision(e.target.value)}
              className="w-full text-xs bg-sand-50 border border-stone-200 rounded-xl p-2.5 focus:outline-none cursor-pointer"
            >
              <option value="all">Any Supervision</option>
              <option value="Medical Doctor Led">Medical Doctor Led</option>
              <option value="Master Holistic Healers">Master Holistic Healers</option>
            </select>
          </div>

          {/* Modalities */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Signature Modality
            </label>
            <select
              value={modality}
              onChange={(e) => setModality(e.target.value)}
              className="w-full text-xs bg-sand-50 border border-stone-200 rounded-xl p-2.5 focus:outline-none cursor-pointer"
            >
              <option value="all">All Modalities</option>
              <option value="Hyperbaric Oxygen">Hyperbaric Oxygen</option>
              <option value="Cryotherapy">Cryotherapy</option>
              <option value="IV Therapy">IV Therapy</option>
              <option value="Sound Healing">Sound Healing</option>
              <option value="Forest Bathing">Forest Bathing</option>
              <option value="Acupuncture">Acupuncture</option>
              <option value="Hydrotherapy">Hydrotherapy</option>
              <option value="Somatic Release">Somatic Release</option>
              <option value="Ayurvedic Massage">Ayurvedic Massage</option>
            </select>
          </div>

          {/* Pricing Tier */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Budget Tier
            </label>
            <select
              value={pricingTier}
              onChange={(e) => setPricingTier(e.target.value)}
              className="w-full text-xs bg-sand-50 border border-stone-200 rounded-xl p-2.5 focus:outline-none cursor-pointer"
            >
              <option value="all">All Budgets</option>
              <option value="accessible">Accessible (&lt; $400 / night)</option>
              <option value="moderate">Moderate ($400 - $800 / night)</option>
              <option value="luxury">Luxury ($800 - $1,800 / night)</option>
              <option value="ultra-luxury">Ultra-Luxury ($1,800+ / night)</option>
            </select>
          </div>

          {/* Apply on Mobile */}
          {mobileFiltersOpen && (
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3 bg-primary-800 text-white rounded-xl text-xs font-bold shadow-md"
            >
              Apply Filters ({filteredCenters.length} Results)
            </button>
          )}
        </aside>

        {/* Results Grid */}
        <div className="md:col-span-3 space-y-6">
          {/* Active Filter Pills */}
          {activeCount > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-400 font-medium">Active:</span>
              {query && (
                <span className="bg-sand-200 text-stone-800 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Keyword: "{query}"
                  <button onClick={() => setQuery("")} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {goal !== "all" && (
                <span className="bg-sand-200 text-stone-800 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Goal: {goal}
                  <button onClick={() => setGoal("all")} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {continent !== "all" && (
                <span className="bg-sand-200 text-stone-800 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Region: {continent}
                  <button onClick={() => setContinent("all")} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {setting !== "all" && (
                <span className="bg-sand-200 text-stone-800 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Setting: {setting}
                  <button onClick={() => setSetting("all")} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {modality !== "all" && (
                <span className="bg-sand-200 text-stone-800 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Modality: {modality}
                  <button onClick={() => setModality("all")} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {verifiedOnly && (
                <span className="bg-sand-200 text-stone-800 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Verified Audit Only
                  <button onClick={() => setVerifiedOnly(false)} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Results: Continuous Feed Layout (recovery.com style) */}
          {filteredCenters.length > 0 ? (
            <div className="space-y-8">
              {/* Section 1: 3 Featured Advertisers */}
              {pageAdvertisers.length > 0 && (
                <section className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-amber-200/80">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500 shrink-0" />
                      <h2 className="font-serif text-lg font-bold text-stone-900">
                        Featured Sponsors & Premier Partners
                      </h2>
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300/60">
                        {pageAdvertisers.length} Advertisers
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Sponsored placements audited for medical credentials
                    </span>
                  </div>

                  <div className="space-y-4">
                    {pageAdvertisers.map((center, index) => (
                      <AdvertisedCenterCard
                        key={`adv-${center.id}`}
                        center={center}
                        rank={index + 1}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Section 2: Standard Free / Verified Profiles Continuous Feed */}
              {visibleStandardCenters.length > 0 && (
                <section className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary-800 shrink-0" />
                      <h2 className="font-serif text-lg font-bold text-stone-900">
                        All Verified Sanctuaries & Directory Profiles
                      </h2>
                      <span className="bg-sand-100 text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {visibleStandardCenters.length} of {standardCenters.length} Loaded
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Free profile listings • Direct contact with zero markup
                    </span>
                  </div>

                  <div className="space-y-4">
                    {visibleStandardCenters.map((center) => (
                      <StandardCenterCard key={`std-${center.id}`} center={center} />
                    ))}
                  </div>
                </section>
              )}

              {/* Infinite Scroll Sentinel & Load More Trigger */}
              {hasMore && (
                <div ref={sentinelRef} className="py-8 flex flex-col items-center justify-center gap-3">
                  {isLoadingMore ? (
                    <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-semibold text-stone-700 animate-pulse">
                      <Loader2 className="w-4 h-4 text-primary-800 animate-spin" />
                      Loading more verified sanctuaries...
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsLoadingMore(true);
                        setTimeout(() => {
                          setVisibleCount((prev) => prev + BATCH_SIZE);
                          setIsLoadingMore(false);
                        }, 200);
                      }}
                      className="px-6 py-2.5 rounded-full bg-white hover:bg-sand-50 border border-stone-200 text-xs font-bold text-stone-700 shadow-sm transition-all hover:scale-[1.01] cursor-pointer"
                    >
                      Load More Sanctuaries ({standardCenters.length - visibleCount} remaining)
                    </button>
                  )}
                </div>
              )}

              {/* End of results indicator */}
              {!hasMore && standardCenters.length > 0 && (
                <div className="py-8 text-center space-y-3 border-t border-stone-200">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand-100 text-stone-700 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    You've viewed all {filteredCenters.length} verified sanctuaries
                  </div>
                  <div>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-900 hover:text-primary-700 underline underline-offset-4 cursor-pointer"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                      Back to top
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-sand-100 text-stone-500 mx-auto flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                No Sanctuaries Found
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                We couldn't find any wellness centers matching your exact filter combination. Try adjusting or resetting your filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-primary-800 hover:bg-primary-900 text-white rounded-full text-xs font-bold shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-stone-500">Loading wellness directory...</div>}>
      <SearchContent />
    </Suspense>
  );
}
