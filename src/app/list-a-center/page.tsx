"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Send,
  Award,
} from "lucide-react";

function ListCenterContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "free";

  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [formData, setFormData] = useState({
    centerName: "",
    city: "",
    country: "",
    website: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    setting: "Lush Rainforest",
    supervision: "Medical Doctor Led",
    startingPrice: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {!submitted ? (
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-sand-100 text-primary-900 text-xs font-bold px-3 py-1 rounded-full border border-sand-200">
              <Building2 className="w-3.5 h-3.5 text-primary-700" />
              Center Owner Onboarding
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              List Your Wellness Sanctuary
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto leading-relaxed">
              Join the world's most curated directory of verified retreats, longevity clinics, and Ayurvedic sanctuaries. Standard listings are 100% free.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            {/* Plan Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Selected Partnership Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "free", label: "Free Listing", price: "$0" },
                  { id: "featured", label: "Featured Pro", price: "$199/mo" },
                  { id: "elite", label: "Elite Sponsor", price: "$499/mo" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedPlan === tier.id
                        ? "border-primary-800 bg-primary-50 ring-1 ring-primary-700"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <span className="font-serif text-sm font-bold text-stone-900 block">
                      {tier.label}
                    </span>
                    <span className="text-xs text-primary-800 font-semibold mt-0.5 block">
                      {tier.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sanctuary Details */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                1. Sanctuary Information
              </h3>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Retreat / Sanctuary Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.centerName}
                  onChange={(e) => setFormData({ ...formData, centerName: e.target.value })}
                  placeholder="e.g. Montezuma Holistic Sanctuary"
                  className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    City / Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Puntarenas"
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Costa Rica"
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Official Website URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourretreat.com"
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Estimated Starting Price / Night ($ USD)
                  </label>
                  <input
                    type="number"
                    value={formData.startingPrice}
                    onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                    placeholder="e.g. 450"
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Setting & Scenery
                  </label>
                  <select
                    value={formData.setting}
                    onChange={(e) => setFormData({ ...formData, setting: e.target.value })}
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800 cursor-pointer"
                  >
                    <option value="Lush Rainforest">Lush Rainforest</option>
                    <option value="Lakefront">Lakefront</option>
                    <option value="Coastal/Beachfront">Coastal/Beachfront</option>
                    <option value="Mountain Sanctuary">Mountain Sanctuary</option>
                    <option value="Desert Oasis">Desert Oasis</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Supervision Level
                  </label>
                  <select
                    value={formData.supervision}
                    onChange={(e) => setFormData({ ...formData, supervision: e.target.value })}
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800 cursor-pointer"
                  >
                    <option value="Medical Doctor Led">Medical Doctor Led</option>
                    <option value="Master Holistic Healers">Master Holistic Healers</option>
                    <option value="Self-Guided Wellness">Self-Guided Wellness</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Sanctuary Description & Mission *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your healing philosophy, accommodations, medical diagnostics, and signature modalities..."
                  className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800 resize-none"
                />
              </div>
            </div>

            {/* Operator Contact Details */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                2. Contact Person / Admissions Representative
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Dr. John Smith"
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Admissions Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    placeholder="admissions@yourretreat.com"
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full text-xs p-3 bg-sand-50 border border-stone-200 rounded-xl focus:outline-none focus:border-primary-800"
                  />
                </div>
              </div>
            </div>

            {/* Master Photo Requirement */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  3. Photography Standard (5 Authentic Photos)
                </h3>
                <span className="text-[10px] uppercase tracking-wider font-bold text-primary-800 bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-200">
                  Quality Standard
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                To maintain our editorial standard and provide guests with full transparency, every listing must feature exactly five authentic photographs matching these categories:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="p-3 bg-sand-50 rounded-xl border border-stone-200/80">
                  <span className="font-bold text-stone-900 block mb-0.5">1. Drone / Aerial Property Shot</span>
                  <span className="text-[11px] text-stone-500">Overall aerial or panoramic view of the entire estate</span>
                </div>
                <div className="p-3 bg-sand-50 rounded-xl border border-stone-200/80">
                  <span className="font-bold text-stone-900 block mb-0.5">2. Property Grounds & Exterior</span>
                  <span className="text-[11px] text-stone-500">Estate architecture, landscaping, and outdoor sanctuary</span>
                </div>
                <div className="p-3 bg-sand-50 rounded-xl border border-stone-200/80">
                  <span className="font-bold text-stone-900 block mb-0.5">3. Facility & Clinical Pavilion</span>
                  <span className="text-[11px] text-stone-500">Ayurvedic clinic, treatment suites, or yoga/meditation shala</span>
                </div>
                <div className="p-3 bg-sand-50 rounded-xl border border-stone-200/80">
                  <span className="font-bold text-stone-900 block mb-0.5">4. Rooms & Suites</span>
                  <span className="text-[11px] text-stone-500">Authentic bedroom, suite, or villa interior where guests stay</span>
                </div>
                <div className="p-3 bg-sand-50 rounded-xl border border-stone-200/80 sm:col-span-2">
                  <span className="font-bold text-stone-900 block mb-0.5">5. Amenity or Activities</span>
                  <span className="text-[11px] text-stone-500">Swimming pool, farm-to-table dining, hydrotherapy, or mindful outdoor activities</span>
                </div>
              </div>
              <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-[11px] text-amber-900 leading-relaxed">
                <strong>Strict Quality Control:</strong> No logos, no text graphics, no award badges, and no generic stock photos. Only genuine property photography of your sanctuary is accepted.
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-gold" />
              <span>Submit Listing for Editorial Review</span>
            </button>
          </form>
        </div>
      ) : (
        /* SUCCESS CONFIRMATION */
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-5 max-w-lg mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Submission Received
          </h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            Thank you, <span className="font-bold">{formData.contactName}</span>! Your listing for <span className="font-bold">{formData.centerName}</span> has been submitted to the RETREATS+ editorial and clinical review team.
          </p>
          <div className="p-4 bg-sand-50 rounded-2xl text-left text-xs text-stone-700 space-y-1">
            <div className="font-bold text-stone-900">What happens next:</div>
            <div>1. Our research team verifies your licensing and official website within 48 hours.</div>
            <div>2. You will receive an email at <span className="font-semibold">{formData.contactEmail}</span> with your partner claim link to publish your profile.</div>
          </div>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-primary-800 text-white rounded-full text-xs font-bold"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ListCenterPage() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-16 text-center text-stone-500">Loading submission portal...</div>}>
      <ListCenterContent />
    </Suspense>
  );
}
