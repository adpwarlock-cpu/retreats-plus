"use client";

import Link from "next/link";
import Image from "next/image";
import { useCompare } from "@/components/compare/CompareContext";
import { useCurrency } from "@/context/CurrencyContext";
import { WELLNESS_CENTERS } from "@/data/centers";
import {
  Scale,
  X,
  Plus,
  Star,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";

export default function ComparePage() {
  const { selectedCenters, removeFromCompare, clearCompare, addToCompare } = useCompare();
  const { formatPrice } = useCurrency();

  // Pick centers that aren't yet in comparison to offer as quick adds
  const availableToAdd = WELLNESS_CENTERS.filter(
    (c) => !selectedCenters.some((sc) => sc.id === c.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="flex items-center gap-2 text-primary-800 text-xs font-bold uppercase tracking-wider mb-1">
            <Scale className="w-4 h-4" />
            <span>Side-by-Side Evaluation</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">
            Compare Wellness Sanctuaries
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Evaluate medical oversight, signature modalities, pricing, and amenities side-by-side.
          </p>
        </div>

        {selectedCenters.length > 0 && (
          <button
            onClick={clearCompare}
            className="text-xs font-semibold text-stone-500 hover:text-stone-900 underline self-start sm:self-auto"
          >
            Clear All Selections
          </button>
        )}
      </div>

      {selectedCenters.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-4 max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-full bg-sand-100 text-primary-800 mx-auto flex items-center justify-center">
            <Scale className="w-7 h-7" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            No Sanctuaries in Comparison
          </h2>
          <p className="text-xs text-stone-500 leading-relaxed">
            Select up to 3 wellness centers from the directory to compare their medical programs, daily schedules, and pricing side-by-side.
          </p>
          <div className="pt-2">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-900 text-white rounded-full text-xs font-bold shadow-md transition-all"
            >
              <span>Explore Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        /* Comparison Table */
        <div className="overflow-x-auto pb-6">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="w-1/4 p-4 text-left font-serif text-lg font-bold text-stone-900 bg-sand-50/50 rounded-tl-2xl">
                  Sanctuary Overview
                </th>
                {selectedCenters.map((center) => (
                  <th
                    key={center.id}
                    className="w-1/4 p-4 text-left align-top bg-white border-l border-stone-200"
                  >
                    <div className="space-y-3 relative">
                      <button
                        onClick={() => removeFromCompare(center.id)}
                        className="absolute -top-2 -right-2 p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full text-xs shadow-sm"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100">
                        <Image
                          src={center.heroImage}
                          alt={center.name}
                          fill
                          className="object-cover"
                          sizes="250px"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-stone-500 mb-1">
                          <MapPin className="w-3 h-3 text-primary-700" />
                          <span>
                            {center.location.city}, {center.location.country}
                          </span>
                        </div>
                        <Link href={`/centers/${center.slug}`}>
                          <h3 className="font-serif text-base font-bold text-stone-900 hover:text-primary-800 transition-colors">
                            {center.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-1 text-xs text-stone-800 font-bold mt-1">
                          <Star className="w-3 h-3 fill-gold text-gold" />
                          <span>{center.rating}</span>
                          <span className="text-stone-400 font-normal">
                            ({center.reviewCount})
                          </span>
                        </div>
                      </div>
                    </div>
                  </th>
                ))}

                {/* Placeholder Slot if < 3 */}
                {selectedCenters.length < 3 && (
                  <th className="w-1/4 p-4 align-middle text-center bg-sand-50/40 border-l border-stone-200 border-dashed rounded-tr-2xl">
                    <div className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-full bg-white border border-stone-300 text-stone-400 mx-auto flex items-center justify-center">
                        <Plus className="w-5 h-5" />
                      </div>
                      <p className="text-xs text-stone-500 font-medium">
                        Add another sanctuary to compare
                      </p>
                      {availableToAdd.length > 0 && (
                        <div className="pt-2">
                          <select
                            onChange={(e) => {
                              const found = WELLNESS_CENTERS.find((c) => c.id === e.target.value);
                              if (found) addToCompare(found);
                            }}
                            defaultValue=""
                            className="text-xs p-2 bg-white border border-stone-300 rounded-xl focus:outline-none cursor-pointer max-w-[200px]"
                          >
                            <option value="" disabled>
                              + Select a Center
                            </option>
                            {availableToAdd.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.name} ({c.location.country})
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </th>
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-stone-200 text-xs">
              {/* Row: Starting Price */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Starting Price
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200">
                    <span className="font-serif text-base font-bold text-stone-900 block">
                      {formatPrice(center.pricing.minPricePerNight)}
                    </span>
                    <span className="text-[10px] text-stone-500">per night (all-inclusive)</span>
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Setting */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Setting & Environment
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200 font-medium text-stone-800">
                    {center.setting}
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Supervision */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Medical Supervision
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200 font-medium text-stone-800">
                    {center.supervision}
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Primary Goals */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Core Specializations
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200 space-y-1">
                    {center.primaryGoals.map((g) => (
                      <span
                        key={g}
                        className="inline-block bg-sand-100 text-stone-800 text-[10px] font-semibold px-2 py-0.5 rounded mr-1 mb-1"
                      >
                        {g}
                      </span>
                    ))}
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Modalities */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Signature Modalities
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200 text-stone-700 leading-relaxed">
                    {center.modalities.join(" • ")}
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Dietary */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Nutrition Philosophy
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200 text-stone-700">
                    {center.dietary.join(", ")}
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Amenities */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Key Facilities
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200 text-stone-700 leading-relaxed">
                    {center.amenities.join(" • ")}
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Verification Audit */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50">
                  Verification Status
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Audited & Verified
                    </span>
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200" />
                )}
              </tr>

              {/* Row: Action CTA */}
              <tr>
                <td className="p-4 font-bold text-stone-700 bg-sand-50/50 rounded-bl-2xl">
                  Take Next Step
                </td>
                {selectedCenters.map((center) => (
                  <td key={center.id} className="p-4 bg-white border-l border-stone-200">
                    <Link
                      href={`/centers/${center.slug}`}
                      className="block w-full py-2.5 bg-primary-800 hover:bg-primary-900 text-white font-bold text-center rounded-xl shadow-sm transition-all"
                    >
                      View Profile
                    </Link>
                  </td>
                ))}
                {selectedCenters.length < 3 && (
                  <td className="p-4 bg-sand-50/20 border-l border-stone-200 rounded-br-2xl" />
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
