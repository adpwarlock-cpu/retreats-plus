import { RetreatCenter, FilterState } from "@/types/retreat";

export function filterCenters(centers: RetreatCenter[], filters: FilterState): RetreatCenter[] {
  return centers.filter((center) => {
    // Text search query
    if (filters.query && filters.query.trim() !== "") {
      const q = filters.query.toLowerCase();
      const matchName = center.name.toLowerCase().includes(q);
      const matchCity = center.location.city.toLowerCase().includes(q);
      const matchCountry = center.location.country.toLowerCase().includes(q);
      const matchTagline = center.tagline.toLowerCase().includes(q);
      const matchGoal = center.primaryGoals.some((g) => g.toLowerCase().includes(q));
      const matchModality = center.modalities.some((m) => m.toLowerCase().includes(q));
      if (!matchName && !matchCity && !matchCountry && !matchTagline && !matchGoal && !matchModality) {
        return false;
      }
    }

    // Goal filter
    if (filters.goal && filters.goal !== "all") {
      if (!center.primaryGoals.includes(filters.goal)) {
        return false;
      }
    }

    // Continent filter
    if (filters.continent && filters.continent !== "all") {
      if (center.location.continent !== filters.continent) {
        return false;
      }
    }

    // Country filter
    if (filters.country && filters.country !== "all") {
      if (center.location.country !== filters.country) {
        return false;
      }
    }

    // Setting filter
    if (filters.setting && filters.setting !== "all") {
      if (center.setting !== filters.setting) {
        return false;
      }
    }

    // Pricing tier
    if (filters.pricingTier && filters.pricingTier !== "all") {
      if (center.pricing.pricingTier !== filters.pricingTier) {
        return false;
      }
    }

    // Modality
    if (filters.modality && filters.modality !== "all") {
      if (!center.modalities.includes(filters.modality)) {
        return false;
      }
    }

    // Dietary
    if (filters.dietary && filters.dietary !== "all") {
      if (!center.dietary.includes(filters.dietary)) {
        return false;
      }
    }

    // Supervision
    if (filters.supervision && filters.supervision !== "all") {
      if (center.supervision !== filters.supervision) {
        return false;
      }
    }

    // Verified only
    if (filters.verifiedOnly) {
      if (center.badgeTier !== "verified" && center.badgeTier !== "featured") {
        return false;
      }
    }

    return true;
  });
}

export function sortCenters(centers: RetreatCenter[], sortBy: string): RetreatCenter[] {
  const list = [...centers];
  switch (sortBy) {
    case "rating":
      return list.sort((a, b) => b.rating - a.rating);
    case "price-low":
      return list.sort((a, b) => a.pricing.minPricePerNight - b.pricing.minPricePerNight);
    case "price-high":
      return list.sort((a, b) => b.pricing.minPricePerNight - a.pricing.minPricePerNight);
    case "reviews":
      return list.sort((a, b) => b.reviewCount - a.reviewCount);
    case "featured":
    default:
      // Featured centers first, then by rating
      return list.sort((a, b) => {
        const scoreA = a.badgeTier === "featured" ? 2 : a.badgeTier === "verified" ? 1 : 0;
        const scoreB = b.badgeTier === "featured" ? 2 : b.badgeTier === "verified" ? 1 : 0;
        if (scoreB !== scoreA) return scoreB - scoreA;
        return b.rating - a.rating;
      });
  }
}

export interface QuizAnswers {
  goal: string;
  setting: string;
  supervision: string;
  budget: string;
}

export interface QuizMatchResult {
  center: RetreatCenter;
  score: number; // 0 to 100
  reasons: string[];
}

export function calculateQuizMatches(centers: RetreatCenter[], answers: QuizAnswers): QuizMatchResult[] {
  return centers
    .map((center) => {
      let score = 50; // base score
      const reasons: string[] = [];

      // Goal match (+25%)
      if (center.primaryGoals.includes(answers.goal)) {
        score += 25;
        reasons.push(`Specializes in ${answers.goal}`);
      }

      // Setting match (+15%)
      if (answers.setting === "Any" || center.setting === answers.setting) {
        score += 15;
        reasons.push(`Located in your desired setting (${center.setting})`);
      }

      // Supervision match (+10%)
      if (answers.supervision === "Any" || center.supervision === answers.supervision) {
        score += 10;
        reasons.push(`${center.supervision} care`);
      }

      // Budget match
      if (answers.budget === "Any" || center.pricing.pricingTier === answers.budget) {
        score += 10;
      }

      // Cap at 99% unless absolute perfection
      score = Math.min(score, 99);

      return {
        center,
        score,
        reasons,
      };
    })
    .sort((a, b) => b.score - a.score);
}
