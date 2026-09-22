"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCurrency, CURRENCIES, CurrencyCode } from "@/context/CurrencyContext";
import { Globe, ChevronDown, Check } from "lucide-react";

interface CurrencySelectorProps {
  variant?: "desktop" | "mobile";
}

export default function CurrencySelector({ variant = "desktop" }: CurrencySelectorProps) {
  const { currency, setCurrency, isMounted } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentConfig = CURRENCIES[currency] || CURRENCIES.USD;

  if (variant === "mobile") {
    return (
      <div className="pt-2 border-t border-stone-200">
        <label className="block text-[11px] font-semibold tracking-wider uppercase text-stone-500 mb-2">
          Display Currency
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {Object.values(CURRENCIES).map((c) => {
            const isSelected = c.code === currency;
            return (
              <button
                key={c.code}
                onClick={() => setCurrency(c.code)}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-primary-900 text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-50"
                }`}
              >
                <span>{c.code} ({c.symbol.trim()})</span>
                {isSelected && <Check className="w-3 h-3 text-gold" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 bg-white/80 hover:bg-white border border-stone-200/90 hover:border-stone-300 px-2.5 py-1.5 rounded-full shadow-2xs transition-all"
        title="Change currency"
      >
        <Globe className="w-3.5 h-3.5 text-primary-800" />
        <span>
          {isMounted ? `${currentConfig.code} (${currentConfig.symbol.trim()})` : "USD ($)"}
        </span>
        <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-56 rounded-2xl bg-white shadow-xl border border-stone-200/90 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 max-h-80 overflow-y-auto">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-stone-400 border-b border-stone-100">
            Select Currency
          </div>
          {Object.values(CURRENCIES).map((c) => {
            const isSelected = c.code === currency;
            return (
              <button
                key={c.code}
                onClick={() => {
                  setCurrency(c.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 flex items-center justify-between text-xs transition-colors ${
                  isSelected
                    ? "bg-sand-100 font-bold text-primary-950"
                    : "text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 font-mono font-bold text-primary-800">{c.symbol.trim()}</span>
                  <span>{c.code} - {c.name}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-gold" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
