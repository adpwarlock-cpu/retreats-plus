"use client";

import Link from "next/link";
import Image from "next/image";
import { RetreatCenter } from "@/types/retreat";
import { useCompare } from "@/components/compare/CompareContext";
import {
  Star,
  MapPin,
  Scale,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface StandardCenterCardProps {
  center: RetreatCenter;
}

export default function StandardCenterCard({ center }: StandardCenterCardProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const inCompare = isInCompare(center.id);

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inCompare) {
      removeFromCompare(center.id);
    } else {
      addToCompare(center);
    }
  };

  return (
    <article className="bg-white rounded-2xl border border-stone-200/90 hover:border-stone-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
      {/* Left Column: Image */}
      <div className="w-full md:w-72 lg:w-80 shrink-0 p-3 sm:p-4">
        <div className="relative aspect-[16/10] md:aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
          <Image
            src={center.heroImage}
            alt={center.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 320px"
          />

          {/* Badges Overlay */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            {center.badgeTier === "verified" ? (
              <span className="bg-white/95 backdrop-blur-md text-primary-900 text-[10px] font-bold px-2.5 py-1 rounded-full border border-primary-800/30 flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3 h-3 text-primary-700" />
                Verified Audit
              </span>
            ) : center.badgeTier === "claimed" ? (
              <span className="bg-white/90 backdrop-blur-md text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded-full border border-stone-200 flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-stone-500" />
                Claimed Profile
              </span>
            ) : (
              <span className="bg-white/90 backdrop-blur-md text-stone-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-stone-200 flex items-center gap-1 shadow-sm">
                Free Profile
              </span>
            )}

            <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full">
              {center.setting}
            </span>
          </div>

          {/* Compare Button */}
          <button
            onClick={handleToggleCompare}
            className={`absolute bottom-2.5 right-2.5 z-10 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 transition-all shadow-md ${
              inCompare
                ? "bg-primary-900 text-gold border border-gold"
                : "bg-white/95 backdrop-blur-md text-stone-800 hover:bg-white"
            }`}
            title="Compare side-by-side"
          >
            <Scale className="w-3 h-3" />
            {inCompare ? "Comparing" : "Compare"}
          </button>
        </div>
      </div>

      {/* Center Column: Core Information */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          {/* Location & Rating Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-stone-600">
              <MapPin className="w-3.5 h-3.5 text-primary-700 shrink-0" />
              <span className="font-semibold text-stone-900">
                {center.location.city}, {center.location.country}
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-500">{center.location.region}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-stone-800 font-semibold">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span className="text-xs">{center.rating}</span>
              <span className="text-[11px] text-stone-400 font-normal">
                ({center.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <Link href={`/centers/${center.slug}`}>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 hover:text-primary-800 transition-colors">
                {center.name}
              </h3>
            </Link>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2">
              {center.description}
            </p>
          </div>

          {/* Medical Supervision */}
          <div className="pt-0.5">
            <span className="inline-flex items-center gap-1 bg-sand-100 text-stone-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
              <Stethoscope className="w-3 h-3 text-primary-700" />
              {center.supervision}
            </span>
          </div>

          {/* Goals & Modalities */}
          <div className="space-y-1.5 pt-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mr-1">
                Goals:
              </span>
              {center.primaryGoals.map((goal) => (
                <span
                  key={goal}
                  className="bg-sand-100 text-stone-800 text-[10px] font-semibold px-2 py-0.5 rounded"
                >
                  {goal}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mr-1">
                Modalities:
              </span>
              {center.modalities.slice(0, 4).map((mod) => (
                <span
                  key={mod}
                  className="bg-stone-50 text-stone-600 text-[10px] font-medium px-2 py-0.5 rounded border border-stone-200/60"
                >
                  {mod}
                </span>
              ))}
              {center.modalities.length > 4 && (
                <span className="text-[10px] text-stone-400">
                  +{center.modalities.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Pricing & Action Button */}
      <div className="w-full md:w-56 lg:w-60 p-4 sm:p-5 flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-stone-100 bg-sand-50/40 shrink-0 space-y-4">
        {/* Price Block */}
        <div className="w-full md:text-right">
          <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
            From
          </span>
          <div className="flex items-baseline md:justify-end gap-1 mt-0.5">
            <span className="font-serif text-2xl font-bold text-stone-900">
              {center.pricing.currency} {center.pricing.minPricePerNight.toLocaleString()}
            </span>
            <span className="text-xs text-stone-500">/ night</span>
          </div>
          <span className="text-[10px] text-stone-500 block mt-0.5">
            Verified direct pricing
          </span>
        </div>

        {/* Action Button */}
        <div className="w-full space-y-2">
          <Link
            href={`/centers/${center.slug}`}
            className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Free Listing Claim CTA */}
        <div className="w-full pt-1 text-[10px] text-stone-400 text-center md:text-right">
          <Link href="/list-a-center" className="hover:text-primary-800 underline underline-offset-2">
            Claim or manage this center
          </Link>
        </div>
      </div>
    </article>
  );
}
