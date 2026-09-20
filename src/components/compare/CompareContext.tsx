"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { RetreatCenter } from "@/types/retreat";

interface CompareContextType {
  selectedCenters: RetreatCenter[];
  addToCompare: (center: RetreatCenter) => boolean;
  removeFromCompare: (centerId: string) => void;
  isInCompare: (centerId: string) => boolean;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedCenters, setSelectedCenters] = useState<RetreatCenter[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("retreats_plus_compare");
      if (saved) {
        setSelectedCenters(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("retreats_plus_compare", JSON.stringify(selectedCenters));
    } catch (e) {
      // ignore
    }
  }, [selectedCenters]);

  const addToCompare = (center: RetreatCenter): boolean => {
    if (selectedCenters.some((c) => c.id === center.id)) {
      return true;
    }
    if (selectedCenters.length >= 3) {
      alert("You can compare up to 3 centers at a time.");
      return false;
    }
    setSelectedCenters([...selectedCenters, center]);
    return true;
  };

  const removeFromCompare = (centerId: string) => {
    setSelectedCenters(selectedCenters.filter((c) => c.id !== centerId));
  };

  const isInCompare = (centerId: string) => {
    return selectedCenters.some((c) => c.id === centerId);
  };

  const clearCompare = () => {
    setSelectedCenters([]);
  };

  return (
    <CompareContext.Provider
      value={{
        selectedCenters,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
