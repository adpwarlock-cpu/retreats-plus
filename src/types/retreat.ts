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
}

export interface RetreatCenter {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: LocationInfo;
  heroImage: string;
  gallery: string[];
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
