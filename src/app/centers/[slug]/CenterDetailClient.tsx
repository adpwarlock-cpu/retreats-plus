"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RetreatCenter } from "@/types/retreat";
import { useCompare } from "@/components/compare/CompareContext";
import CenterCard from "@/components/search/CenterCard";
import {
  MapPin,
  Star,
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  Clock,
  UserCheck,
  Scale,
  Sparkles,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Send,
  X,
  Heart,
  Share2,
} from "lucide-react";

interface CenterDetailClientProps {
  center: RetreatCenter;
  similarCenters?: RetreatCenter[];
}

export default function CenterDetailClient({ center, similarCenters = [] }: CenterDetailClientProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const inCompare = isInCompare(center.id);

  const [selectedImage, setSelectedImage] = useState(center.heroImage);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(
    center.pricing.packageOptions?.[0] || null
  );

  // Inquiry Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dates: "",
    guests: "1",
    primaryGoal: center.primaryGoals[0] || "",
    notes: "",
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-24">
      {/* Breadcrumb & Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link href="/search" className="hover:text-stone-900">
              Sanctuaries
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-medium truncate max-w-[200px]">
              {center.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (inCompare) removeFromCompare(center.id);
                else addToCompare(center);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                inCompare
                  ? "bg-primary-900 text-gold border-gold"
                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              {inCompare ? "In Comparison" : "Add to Compare"}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header & Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Title Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {center.badgeTier === "featured" && (
              <span className="bg-primary-950 text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/40 flex items-center gap-1 shadow-sm">
                <Award className="w-3.5 h-3.5 text-gold" />
                Featured Partner Sanctuary
              </span>
            )}
            {center.badgeTier === "verified" && (
              <span className="bg-primary-50 text-primary-900 text-xs font-bold px-3 py-1 rounded-full border border-primary-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-700" />
                Verified Clinical & Facility Audit
              </span>
            )}
            <span className="bg-sand-100 text-stone-800 text-xs font-medium px-3 py-1 rounded-full">
              {center.setting}
            </span>
            <span className="bg-sand-100 text-stone-800 text-xs font-medium px-3 py-1 rounded-full">
              {center.supervision}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            {center.name}
          </h1>

          <p className="text-stone-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            {center.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-600 pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary-700" />
              <span>
                {center.location.city}, {center.location.region}, {center.location.country}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span>{center.rating}</span>
              <span className="text-stone-400 font-normal">
                ({center.reviewCount} verified guest reviews)
              </span>
            </div>
          </div>

          {/* Recovery.com-Style Primary Action Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {center.contact.phone && (
              <a
                href={`tel:${center.contact.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-800 hover:bg-primary-900 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Sanctuary: {center.contact.phone}</span>
              </a>
            )}

            <button
              onClick={() => setInquiryModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-dark text-primary-950 rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Inquire / Send Message</span>
            </button>

            {center.contact.website && (
              <a
                href={center.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-sand-50 text-stone-800 border border-stone-300 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4 text-stone-500" />
                <span>Visit Official Website</span>
              </a>
            )}

            <button
              onClick={() => {
                if (inCompare) removeFromCompare(center.id);
                else addToCompare(center);
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                inCompare
                  ? "bg-primary-900 text-gold border-gold"
                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{inCompare ? "In Comparison" : "Add to Compare"}</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-md bg-stone-100 border border-stone-200/60">
            <Image
              src={selectedImage}
              alt={center.name}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-3 content-start">
            {center.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all ${
                  selectedImage === img
                    ? "border-primary-800 ring-2 ring-primary-700/30 shadow-md scale-[1.02]"
                    : "border-transparent opacity-80 hover:opacity-100 hover:scale-[1.01]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${center.name} ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 25vw, 16vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Booking Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Deep Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* About */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                About the Sanctuary
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {center.description}
              </p>
            </div>

            {/* Verified Audit Scorecard */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary-800" />
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  RETREATS+ Verified Standard Audit
                </h3>
              </div>
              <p className="text-xs text-stone-500">
                Independent evaluation conducted on facility standards, medical licenses, and guest outcomes.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-3 bg-sand-50 rounded-2xl border border-stone-200/60 text-center">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block">
                    Medical Oversight
                  </span>
                  <span className="text-xs font-bold text-stone-900 mt-1 block">
                    {center.supervision}
                  </span>
                </div>
                <div className="p-3 bg-sand-50 rounded-2xl border border-stone-200/60 text-center">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block">
                    Pricing Transparency
                  </span>
                  <span className="text-xs font-bold text-emerald-700 mt-1 block">
                    100% Guaranteed
                  </span>
                </div>
                <div className="p-3 bg-sand-50 rounded-2xl border border-stone-200/60 text-center">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block">
                    Facility Safety
                  </span>
                  <span className="text-xs font-bold text-emerald-700 mt-1 block">
                    ISO & Health Inspected
                  </span>
                </div>
                <div className="p-3 bg-sand-50 rounded-2xl border border-stone-200/60 text-center">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block">
                    Guest Satisfaction
                  </span>
                  <span className="text-xs font-bold text-stone-900 mt-1 block">
                    {center.rating} / 5.0 Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Signature Modalities & Therapies */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Signature Modalities & Therapies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {center.modalities.map((modality) => (
                  <div
                    key={modality}
                    className="p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex items-center gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-xs font-bold text-stone-800">{modality}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Daily Itinerary */}
            {center.dailySchedule && center.dailySchedule.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Sample Daily Schedule
                </h2>
                <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
                  {center.dailySchedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 pb-4 border-b border-stone-100 last:border-0 last:pb-0"
                    >
                      <div className="w-16 shrink-0 font-mono text-xs font-bold text-primary-800 flex items-center gap-1.5 pt-0.5">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {item.time}
                      </div>
                      <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {item.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nutrition & Dietary Philosophy */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Nutrition & Dietary Focus
              </h2>
              <div className="flex flex-wrap gap-2">
                {center.dietary.map((diet) => (
                  <span
                    key={diet}
                    className="bg-sand-100 text-stone-800 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-sand-200"
                  >
                    {diet}
                  </span>
                ))}
              </div>
            </div>

            {/* Expert Medical & Healing Team */}
            {center.expertTeam && center.expertTeam.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Lead Physicians & Practitioners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {center.expertTeam.map((expert, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm flex items-center gap-4"
                    >
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-stone-100 shrink-0">
                        <Image
                          src={expert.avatar}
                          alt={expert.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-stone-900">
                          {expert.name}
                        </h4>
                        <p className="text-[11px] text-primary-800 font-semibold mt-0.5">
                          {expert.role}
                        </p>
                        <p className="text-[10px] text-stone-500 mt-1 leading-snug">
                          {expert.credentials}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Google Reviews */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center font-bold text-sm text-blue-600">
                      G
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-stone-900">
                      Verified Google Reviews ({center.reviewCount || center.reviews.length})
                    </h2>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Authentic guest feedback verified from Google Business profiles and clinical audits.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-stone-900 bg-sand-100 px-3.5 py-1.5 rounded-full">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span>{center.rating} / 5.0</span>
                  </div>
                  {center.contact.googleReviewsUrl && (
                    <a
                      href={center.contact.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary-800 hover:text-primary-950 flex items-center gap-1 underline underline-offset-2"
                    >
                      <span>Read on Google</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {center.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-800 to-primary-950 text-white font-bold text-xs flex items-center justify-center">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-stone-900">
                              {rev.author}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-medium border border-blue-100">
                              <span className="font-bold">G</span> Verified Google Review
                            </span>
                          </div>
                          <span className="text-[10px] text-stone-400">{rev.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    {rev.title && (
                      <h4 className="font-serif text-sm font-bold text-stone-900">
                        "{rev.title}"
                      </h4>
                    )}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {rev.comment}
                    </p>
                    {rev.verifiedStay && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Confirmed Clinical / Guest Stay
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Booking & Inquiry Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xl space-y-6">
              {/* Pricing Header */}
              <div className="pb-4 border-b border-stone-100">
                <span className="text-xs text-stone-400 block font-normal">Starting from</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-3xl font-bold text-stone-900">
                    {center.pricing.currency} {center.pricing.minPricePerNight.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500">/ night</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                  ✓ Direct center rates (no agency booking fees)
                </span>
              </div>

              {/* Package Selector (if available) */}
              {center.pricing.packageOptions && center.pricing.packageOptions.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
                    Curated Packages
                  </label>
                  <div className="space-y-2">
                    {center.pricing.packageOptions.map((pkg, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                          selectedPackage?.name === pkg.name
                            ? "border-primary-800 bg-primary-50/50 ring-1 ring-primary-700"
                            : "border-stone-200 hover:border-stone-300"
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900">
                          <span>{pkg.name}</span>
                          <span>
                            {center.pricing.currency} {pkg.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-500 mt-1 line-clamp-2">
                          {pkg.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="w-full py-3.5 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>Check Rates & Availability</span>
                </button>

                {center.contact.website && (
                  <a
                    href={center.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white hover:bg-sand-50 text-stone-800 border border-stone-200 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                    <span>Visit Official Website</span>
                  </a>
                )}

                {center.contact.phone && (
                  <a
                    href={`tel:${center.contact.phone}`}
                    className="w-full py-3 bg-sand-100 hover:bg-sand-200 text-stone-800 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-500" />
                    <span>Call Concierge: {center.contact.phone}</span>
                  </a>
                )}

                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="w-full py-2.5 text-primary-800 hover:text-primary-950 font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message to Medical Team</span>
                </button>
              </div>

              {/* Direct Guarantee info */}
              <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-500 space-y-2">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                  <span>
                    Your inquiry is sent directly to the medical concierge team at {center.name}.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                  <span>Zero booking commission or markups added.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Wellness Retreats & Nearby Sanctuaries */}
      {similarCenters && similarCenters.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-800 block mb-1">
                Explore Alternative Options
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Similar Wellness Retreats & Nearby Sanctuaries
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Explore other top-rated retreats in {center.location.country} and nearby regions offering comparable modalities and programs.
              </p>
            </div>
            <Link
              href={`/search?country=${encodeURIComponent(center.location.country)}`}
              className="text-xs font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1.5 shrink-0"
            >
              <span>More in {center.location.country}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarCenters.map((simCenter) => (
              <CenterCard key={simCenter.id} center={simCenter} />
            ))}
          </div>
        </section>
      )}

      {/* Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => {
                setInquiryModalOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-primary-800 tracking-wider">
                    Direct Sanctuary Inquiry
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    Connect with {center.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Check specific calendar dates, request custom dietary arrangements, or arrange medical airport transfers.
                  </p>
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Phone (with country code)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Estimated Dates
                      </label>
                      <input
                        type="text"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder="e.g. Nov 15 - Nov 22"
                        className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800 cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests (Couple / Friends)</option>
                        <option value="3+">3+ Private Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Primary Health Goal or Special Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell the concierge about any medical background, detox preferences, or questions..."
                      className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-gold" />
                    <span>Send Direct Inquiry to Concierge</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Inquiry Sent Successfully
                </h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-bold">{formData.fullName}</span>. Your inquiry has been forwarded directly to the admissions team at {center.name}. A representative will contact you at {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="px-6 py-2.5 bg-primary-800 text-white rounded-full text-xs font-bold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
