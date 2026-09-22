"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RetreatCenter } from "@/types/retreat";
import { useCompare } from "@/components/compare/CompareContext";
import { Star, MapPin, CheckCircle2, Award, Scale, ArrowRight, ShieldCheck } from "lucide-react";

interface CenterCardProps {
  center: RetreatCenter;
}

export default function CenterCard({ center }: CenterCardProps) {
  const router = useRouter();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const inCompare = isInCompare(center.id);

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCompare) {
      removeFromCompare(center.id);
    } else {
      addToCompare(center);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }
    router.push(`/centers/${center.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        <Image
          src={center.heroImage}
          alt={center.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            {center.badgeTier === "featured" && (
              <span className="bg-primary-950/90 backdrop-blur-md text-gold text-[11px] font-bold px-2.5 py-1 rounded-full border border-gold/40 flex items-center gap-1 shadow-sm">
                <Award className="w-3.5 h-3.5 text-gold" />
                Featured Partner
              </span>
            )}
            {center.badgeTier === "verified" && (
              <span className="bg-white/95 backdrop-blur-md text-primary-900 text-[11px] font-bold px-2.5 py-1 rounded-full border border-primary-800/30 flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-700" />
                Verified Audit
              </span>
            )}
            {center.badgeTier === "claimed" && (
              <span className="bg-white/90 backdrop-blur-md text-stone-700 text-[11px] font-medium px-2 py-0.5 rounded-full border border-stone-200 flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-stone-500" />
                Claimed
              </span>
            )}
          </div>

          {/* Setting Pill */}
          <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
            {center.setting}
          </span>
        </div>

        {/* Compare Button on Card */}
        <button
          onClick={handleToggleCompare}
          className={`absolute bottom-3 right-3 z-10 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-md ${
            inCompare
              ? "bg-primary-900 text-gold border border-gold"
              : "bg-white/90 backdrop-blur-md text-stone-800 hover:bg-white"
          }`}
          title="Compare up to 3 centers side-by-side"
        >
          <Scale className="w-3.5 h-3.5" />
          {inCompare ? "Comparing" : "Compare"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location & Rating */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary-700 shrink-0" />
              <span className="font-medium truncate">
                {center.location.city}, {center.location.country}
              </span>
            </div>
            <div className="flex items-center gap-1 text-stone-800 font-semibold shrink-0">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span>{center.rating}</span>
              <span className="text-stone-400 font-normal">({center.reviewCount})</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <Link href={`/centers/${center.slug}`}>
              <h3 className="font-serif text-lg font-bold text-stone-900 hover:text-primary-800 transition-colors line-clamp-1">
                {center.name}
              </h3>
            </Link>
            <p className="text-stone-600 text-xs line-clamp-2 mt-1 leading-relaxed">
              {center.tagline}
            </p>
          </div>

          {/* Primary Goals Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {center.primaryGoals.slice(0, 2).map((goal) => (
              <span
                key={goal}
                className="bg-sand-100 text-stone-800 text-[10px] font-semibold px-2 py-0.5 rounded-md"
              >
                {goal}
              </span>
            ))}
            {center.primaryGoals.length > 2 && (
              <span className="text-[10px] text-stone-400 font-medium self-center">
                +{center.primaryGoals.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Footer Actions */}
        <div className="pt-3 border-t border-stone-100 flex items-end justify-between">
          <div>
            <span className="text-[11px] text-stone-400 block font-normal">From</span>
            <span className="font-serif text-base font-bold text-stone-900">
              {center.pricing.currency} {center.pricing.minPricePerNight.toLocaleString()}
            </span>
            <span className="text-[11px] text-stone-500 ml-1">/ night</span>
          </div>

          <Link
            href={`/centers/${center.slug}`}
            className="text-xs font-semibold text-primary-800 group-hover:text-primary-950 flex items-center gap-1 hover:gap-1.5 transition-all"
          >
            Explore
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
