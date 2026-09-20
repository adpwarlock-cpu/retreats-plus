"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
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
  ChevronLeft,
  ChevronRight,
  Award,
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

  // Pagination state: 3 advertisers + 7 standard centers per page
  const [currentPage, setCurrentPage] = useState(1);
  const ADVERTISERS_PER_PAGE = 3;
  const STANDARD_PER_PAGE = 7;
  const TOTAL_PER_PAGE = ADVERTISERS_PER_PAGE + STANDARD_PER_PAGE;

  // Reset to page 1 whenever any filter changes
  useEffect(() => {
    setCurrentPage(1);
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

  // Pool of featured centers for advertisers
  const featuredPool = useMemo(() => {
    return filteredCenters.filter((c) => c.badgeTier === "featured");
  }, [filteredCenters]);

  // Determine total pages
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredCenters.length / TOTAL_PER_PAGE));
  }, [filteredCenters.length, TOTAL_PER_PAGE]);

  // 3 Advertisers for current page
  const pageAdvertisers = useMemo(() => {
    if (featuredPool.length === 0) {
      return filteredCenters.slice(0, Math.min(ADVERTISERS_PER_PAGE, filteredCenters.length));
    }
    if (featuredPool.length <= ADVERTISERS_PER_PAGE) {
      return featuredPool;
    }
    const startIndex = ((currentPage - 1) * ADVERTISERS_PER_PAGE) % featuredPool.length;
    const items = [];
    for (let i = 0; i < ADVERTISERS_PER_PAGE; i++) {
      items.push(featuredPool[(startIndex + i) % featuredPool.length]);
    }
    return items;
  }, [featuredPool, filteredCenters, currentPage, ADVERTISERS_PER_PAGE]);

  // Standard centers for current page (excluding current page advertisers)
  const pageStandardCenters = useMemo(() => {
    const advertiserIds = new Set(pageAdvertisers.map((c) => c.id));
    const availableStandard = filteredCenters.filter((c) => !advertiserIds.has(c.id));
    const startIndex = (currentPage - 1) * STANDARD_PER_PAGE;
    return availableStandard.slice(startIndex, startIndex + STANDARD_PER_PAGE);
  }, [filteredCenters, pageAdvertisers, currentPage, STANDARD_PER_PAGE]);

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
    setCurrentPage(1);
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
            Explore Wellness Sanctuaries
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Showing <span className="font-semibold text-stone-900">{filteredCenters.length}</span> verified retreats matching your exact criteria
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

          {/* Results: Horizontal List Layout or Empty State */}
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
                        rank={(currentPage - 1) * ADVERTISERS_PER_PAGE + index + 1}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Section 2: Standard Free / Verified Profiles */}
              {pageStandardCenters.length > 0 && (
                <section className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary-800 shrink-0" />
                      <h2 className="font-serif text-lg font-bold text-stone-900">
                        All Verified Sanctuaries & Directory Profiles
                      </h2>
                      <span className="bg-sand-100 text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {pageStandardCenters.length} Listings on this page
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Free profile listings • Direct contact with zero markup
                    </span>
                  </div>

                  <div className="space-y-4">
                    {pageStandardCenters.map((center) => (
                      <StandardCenterCard key={`std-${center.id}`} center={center} />
                    ))}
                  </div>
                </section>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-stone-500">
                    Showing Page <span className="font-semibold text-stone-900">{currentPage}</span> of{" "}
                    <span className="font-semibold text-stone-900">{totalPages}</span> ({filteredCenters.length} total sanctuaries)
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setCurrentPage((p) => Math.max(1, p - 1));
                        window.scrollTo({ top: 100, behavior: "smooth" });
                      }}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-3.5 py-2 text-xs font-bold rounded-xl border border-stone-200 text-stone-700 bg-white hover:bg-sand-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 100, behavior: "smooth" });
                          }}
                          className={`w-8 h-8 rounded-xl text-xs font-bold transition-all shadow-sm ${
                            currentPage === page
                              ? "bg-primary-900 text-gold border border-gold"
                              : "bg-white text-stone-700 border border-stone-200 hover:bg-sand-50"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setCurrentPage((p) => Math.min(totalPages, p + 1));
                        window.scrollTo({ top: 100, behavior: "smooth" });
                      }}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 px-3.5 py-2 text-xs font-bold rounded-xl border border-stone-200 text-stone-700 bg-white hover:bg-sand-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
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
