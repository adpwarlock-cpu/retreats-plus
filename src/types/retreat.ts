export type BadgeTier = 'unclaimed' | 'claimed' | 'verified' | 'featured';
export type PricingTier = 'accessible' | 'moderate' | 'luxury' | 'ultra-luxury';

export interface LocationInfo {
  city: string;
  region: string;
  country: string;
  continent: 'North America' | 'Europe' | 'Asia-Pacific' | 'Latin America' | 'Africa & Middle East';
  lat: number;
  lng: number;
}

export interface PricingInfo {
  minPricePerNight: number;
  currency: string;
  pricingTier: PricingTier;
  packageOptions?: {
    name: string;
    days: number;
    price: number;
    description: string;
  }[];
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface ExpertMember {
  name: string;
  role: string;
  credentials: string;
  avatar: string;
}

export interface CenterReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  comment: string;
  verifiedStay: boolean;
  source?: 'google' | 'verified_guest' | 'editorial';
}

export interface RetreatCenter {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: LocationInfo;
  /** Primary display photograph; must always match gallery[0] (drone/aerial or exterior) */
  heroImage: string;
  /**
   * Master Image Standard: Exactly 5 authentic photographs per retreat center profile:
   * [0] Drone shot of entire property (or panoramic aerial/estate exterior) - ALSO heroImage
   * [1] Property (estate grounds / landscape / exterior architecture)
   * [2] Facility (wellness clinic / therapy pavilion / yoga/meditation shala)
   * [3] Rooms (suite / bedroom / villa interior)
   * [4] Amenity / Activities (swimming pool / organic dining / outdoor wellness activities)
   * 
   * Zero tolerance: No logos, no text graphics, no generic stock photos.
   * If a specific category photo is unavailable, use another genuine photo of the SAME center.
   */
  gallery: [string, string, string, string, string] | string[];
  badgeTier: BadgeTier;
  rating: number;
  reviewCount: number;
  pricing: PricingInfo;
  primaryGoals: string[];
  modalities: string[];
  dietary: string[];
  setting: string;
  supervision: string;
  amenities: string[];
  dailySchedule: ScheduleItem[];
  expertTeam: ExpertMember[];
  reviews: CenterReview[];
  contact: {
    phone?: string;
    email?: string;
    website?: string;
    googleReviewsUrl?: string;
  };
}

export interface FilterState {
  query?: string;
  goal?: string;
  continent?: string;
  country?: string;
  setting?: string;
  pricingTier?: string;
  modality?: string;
  dietary?: string;
  supervision?: string;
  verifiedOnly?: boolean;
}
