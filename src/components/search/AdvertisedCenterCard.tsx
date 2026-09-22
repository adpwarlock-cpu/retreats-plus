"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RetreatCenter } from "@/types/retreat";
import { useCompare } from "@/components/compare/CompareContext";
import {
  Star,
  MapPin,
  Scale,
  ArrowRight,
  ShieldCheck,
  Phone,
  Stethoscope,
  Sparkles,
  Quote,
  CheckCircle2,
  Calendar,
} from "lucide-react";

interface AdvertisedCenterCardProps {
  center: RetreatCenter;
  rank?: number;
}

export default function AdvertisedCenterCard({ center, rank }: AdvertisedCenterCardProps) {
  const router = useRouter();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const inCompare = isInCompare(center.id);
  const [activeImage, setActiveImage] = useState(center.heroImage);

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

  // Thumbnail list from hero + gallery
  const thumbnails = [center.heroImage, ...(center.gallery || [])].slice(0, 4);

  return (
    <article
      onClick={handleCardClick}
      className="relative bg-gradient-to-r from-amber-50/40 via-white to-sand-50/25 rounded-2xl border-2 border-amber-300/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Sponsored Header Banner */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-gradient-to-r from-amber-100/95 via-amber-50 to-sand-100/90 border-b border-amber-200/80 text-[11px] font-bold text-amber-950">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500 shrink-0" />
          <span className="uppercase tracking-wider">Sponsored • Featured Partner</span>
          {rank && (
            <span className="hidden sm:inline-block bg-amber-200/80 text-amber-900 text-[10px] px-1.5 py-0.2 rounded font-semibold ml-1">
              Top Pick #{rank}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-[10px] text-amber-900/80 font-medium">
          <span className="hidden sm:flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-primary-700" />
            Verified Medical Credentials
          </span>
          <span className="text-amber-800 font-semibold">Priority Booking</span>
        </div>
      </div>

      {/* Main Card Content: Horizontal List Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column: Media & Thumbnails */}
        <div className="w-full md:w-80 lg:w-96 shrink-0 p-3 sm:p-4 flex flex-col justify-between">
          <div className="relative aspect-[16/10] md:aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
            <Image
              src={activeImage}
              alt={center.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 384px"
            />

            {/* Badges Overlay */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
              <span className="bg-primary-950/90 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-1 rounded-full border border-gold/40 flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3 h-3 text-gold" />
                Verified Audit
              </span>

              <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                {center.setting}
              </span>
            </div>

            {/* Compare Quick Toggle */}
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

          {/* Mini Gallery Strip */}
          {thumbnails.length > 1 && (
            <div className="grid grid-cols-4 gap-1.5 mt-2">
              {thumbnails.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-video rounded-md overflow-hidden border transition-all ${
                    activeImage === img
                      ? "border-amber-500 ring-2 ring-amber-400/50"
                      : "border-stone-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${center.name} preview ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
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
              <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-bold text-stone-900 text-xs">{center.rating}</span>
                <span className="text-[11px] text-stone-500">({center.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div>
              <Link href={`/centers/${center.slug}`}>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 hover:text-primary-800 transition-colors">
                  {center.name}
                </h3>
              </Link>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2">
                {center.tagline}
              </p>
            </div>

            {/* Medical Oversight & Key Highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 bg-primary-50 text-primary-900 text-[11px] font-bold px-2.5 py-1 rounded-md border border-primary-800/20">
                <Stethoscope className="w-3 h-3 text-primary-700" />
                {center.supervision}
              </span>

              {center.expertTeam && center.expertTeam.length > 0 && (
                <span className="inline-flex items-center gap-1 text-[11px] text-stone-600 bg-sand-100 px-2.5 py-1 rounded-md">
                  <span className="font-semibold text-stone-900">Lead:</span>
                  {center.expertTeam[0].name}
                </span>
              )}
            </div>

            {/* Modalities & Primary Goals */}
            <div className="space-y-1.5 pt-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mr-1">
                  Focus:
                </span>
                {center.primaryGoals.map((goal) => (
                  <span
                    key={goal}
                    className="bg-amber-100/70 text-amber-950 text-[10px] font-semibold px-2 py-0.5 rounded"
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
                    className="bg-sand-100 text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded"
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

            {/* Testimonial Quote Snippet */}
            {center.reviews && center.reviews.length > 0 && (
              <div className="bg-amber-50/50 border-l-2 border-amber-400 px-3 py-1.5 rounded-r-lg text-[11px] italic text-stone-700 flex items-start gap-2 mt-2">
                <Quote className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">"{center.reviews[0].comment}"</span>
                <span className="text-stone-400 not-italic shrink-0">— {center.reviews[0].author}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Pricing & Conversion CTAs */}
        <div className="w-full md:w-60 lg:w-64 p-4 sm:p-5 flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-amber-200/70 bg-amber-50/20 shrink-0 space-y-4">
          {/* Price Block */}
          <div className="w-full md:text-right">
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
              All-Inclusive From
            </span>
            <div className="flex items-baseline md:justify-end gap-1 mt-0.5">
              <span className="font-serif text-2xl font-bold text-stone-900">
                {center.pricing.currency} {center.pricing.minPricePerNight.toLocaleString()}
              </span>
              <span className="text-xs text-stone-500">/ night</span>
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
              Direct Center Rate • Zero Markup
            </span>
          </div>

          {/* Action CTAs */}
          <div className="w-full space-y-2">
            {/* Click to Call */}
            {center.contact?.phone && (
              <a
                href={`tel:${center.contact.phone}`}
                className="w-full py-2.5 px-3 bg-primary-800 hover:bg-primary-900 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 group-hover:shadow"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call: {center.contact.phone}</span>
              </a>
            )}

            {/* View Profile */}
            <Link
              href={`/centers/${center.slug}`}
              className="w-full py-2.5 px-3 bg-white hover:bg-sand-100 text-stone-900 rounded-xl text-xs font-bold transition-all border border-amber-300 flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>View Full Profile</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
            </Link>
          </div>

          {/* Free Inquiry Guarantee */}
          <div className="w-full pt-1 text-[10px] text-stone-500 text-center md:text-right flex items-center justify-center md:justify-end gap-1">
            <CheckCircle2 className="w-3 h-3 text-primary-700" />
            <span>Official Direct Partner</span>
          </div>
        </div>
      </div>
    </article>
  );
}
