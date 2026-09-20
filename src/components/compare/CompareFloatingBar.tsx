"use client";

import Link from "next/link";
import { useCompare } from "./CompareContext";
import { Scale, X, ArrowRight } from "lucide-react";

export default function CompareFloatingBar() {
  const { selectedCenters, removeFromCompare, clearCompare } = useCompare();

  if (selectedCenters.length === 0) return null;

  return (
    <div className="fixed bottom-6 inset-x-4 max-w-3xl mx-auto z-40 animate-fade-in-up">
      <div className="bg-primary-950/95 backdrop-blur-md text-white border border-primary-800 shadow-2xl rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left info & chips */}
        <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto">
          <div className="flex items-center gap-2 text-gold font-semibold text-xs whitespace-nowrap">
            <Scale className="w-4 h-4" />
            <span>Comparing ({selectedCenters.length}/3):</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {selectedCenters.map((center) => (
              <span
                key={center.id}
                className="bg-primary-900 border border-primary-800 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap text-stone-200"
              >
                <span className="truncate max-w-[120px]">{center.name}</span>
                <button
                  onClick={() => removeFromCompare(center.id)}
                  className="text-stone-400 hover:text-white"
                  title="Remove"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Right action buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={clearCompare}
            className="text-xs text-stone-400 hover:text-stone-200 underline"
          >
            Clear All
          </button>
          <Link
            href="/compare"
            className="bg-gold hover:bg-gold-dark text-primary-950 font-bold text-xs px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md hover:shadow transition-all whitespace-nowrap"
          >
            Compare Now
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
