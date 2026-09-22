"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CurrencyCode =
  | "INR"
  | "USD"
  | "EUR"
  | "GBP"
  | "AUD"
  | "CAD"
  | "SGD"
  | "AED"
  | "JPY"
  | "CHF"
  | "IDR"
  | "THB";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rate: number; // 1 USD = rate units of target currency
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: { code: "INR", symbol: "₹", name: "Indian Rupee", rate: 86.8 },
  USD: { code: "USD", symbol: "$", name: "US Dollar", rate: 1.0 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", rate: 0.78 },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 1.55 },
  CAD: { code: "CAD", symbol: "CA$", name: "Canadian Dollar", rate: 1.38 },
  SGD: { code: "SGD", symbol: "S$", name: "Singapore Dollar", rate: 1.34 },
  AED: { code: "AED", symbol: "AED ", name: "UAE Dirham", rate: 3.67 },
  JPY: { code: "JPY", symbol: "¥", name: "Japanese Yen", rate: 152.0 },
  CHF: { code: "CHF", symbol: "CHF ", name: "Swiss Franc", rate: 0.88 },
  IDR: { code: "IDR", symbol: "Rp ", name: "Indonesian Rupiah", rate: 16250.0 },
  THB: { code: "THB", symbol: "฿", name: "Thai Baht", rate: 35.5 },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (usdAmount: number, options?: { showNightSuffix?: boolean }) => string;
  currencyConfig: CurrencyConfig;
  isMounted: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

function detectViewerCurrency(): CurrencyCode {
  if (typeof window === "undefined") return "USD";
  try {
    // 1. Timezone detection
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Calcutta") || tz.includes("Kolkata")) return "INR";
    if (tz.includes("London")) return "GBP";
    if (tz.includes("Europe/")) return "EUR";
    if (tz.includes("Australia/")) return "AUD";
    if (
      tz.includes("Toronto") ||
      tz.includes("Vancouver") ||
      tz.includes("Edmonton") ||
      tz.includes("Winnipeg") ||
      tz.includes("Halifax")
    ) {
      return "CAD";
    }
    if (tz.includes("Dubai")) return "AED";
    if (tz.includes("Singapore")) return "SGD";
    if (tz.includes("Tokyo")) return "JPY";
    if (tz.includes("Zurich")) return "CHF";
    if (
      tz.includes("Jakarta") ||
      tz.includes("Makassar") ||
      tz.includes("Jayapura") ||
      tz.includes("Pontianak")
    ) {
      return "IDR";
    }
    if (tz.includes("Bangkok")) return "THB";

    // 2. Browser language / locale detection
    const lang = navigator.language || (navigator.languages && navigator.languages[0]) || "";
    if (/^hi|^en-IN/i.test(lang)) return "INR";
    if (/^en-GB/i.test(lang)) return "GBP";
    if (/^en-AU/i.test(lang)) return "AUD";
    if (/^en-CA|^fr-CA/i.test(lang)) return "CAD";
    if (/^ja/i.test(lang)) return "JPY";
    if (/^id/i.test(lang)) return "IDR";
    if (/^th/i.test(lang)) return "THB";
    if (/^ar-AE/i.test(lang)) return "AED";
    if (/^fr|^de|^es|^it|^nl|^pt/i.test(lang)) return "EUR";
  } catch {
    // Fallback to USD
  }
  return "USD";
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("retreats_plus_currency") as CurrencyCode | null;
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
    } else {
      const detected = detectViewerCurrency();
      setCurrencyState(detected);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    if (typeof window !== "undefined") {
      localStorage.setItem("retreats_plus_currency", c);
    }
  };

  const formatPrice = (usdAmount: number, options?: { showNightSuffix?: boolean }): string => {
    if (typeof usdAmount !== "number" || isNaN(usdAmount)) return "$0";
    const config = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = usdAmount * config.rate;

    let rounded: number;
    if (config.code === "IDR") {
      // Round to thousands for clean Indonesian Rupiah
      rounded = Math.round(converted / 1000) * 1000;
    } else if (config.code === "JPY") {
      rounded = Math.round(converted);
    } else if (config.code === "INR") {
      // Round to nearest 50 for clean Indian Rupee rates
      rounded = Math.round(converted / 50) * 50;
    } else {
      rounded = Math.round(converted);
    }

    const formatted = rounded.toLocaleString();
    const result = `${config.symbol}${formatted}`;
    return options?.showNightSuffix ? `${result} / night` : result;
  };

  const currencyConfig = CURRENCIES[currency] || CURRENCIES.USD;

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currencyConfig,
        isMounted,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
