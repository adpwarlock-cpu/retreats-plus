import { RetreatCenter } from "@/types/retreat";

export const WELLNESS_CENTERS: RetreatCenter[] = [
  // ==========================================
  // SOUTH EAST ASIA — THAILAND
  // ==========================================
  {
    id: "chiva-som-thailand",
    slug: "chiva-som-hua-hin",
    name: "Chiva-Som International Health Resort",
    tagline: "World-Renowned Pioneer in Destination Wellness & Holistic Health on the Gulf of Thailand",
    description: "Operating since 1995 on seven beachfront acres in Hua Hin, Chiva-Som is globally celebrated as the pioneer of destination wellness. With 16 curated retreat programs and over 200 bespoke treatments, Chiva-Som seamlessly integrates Western diagnostic technology with Eastern philosophies, including physiotherapy, aesthetic beauty, genomic testing, and award-winning wellness cuisine.",
    location: {
      city: "Hua Hin",
      region: "Prachuap Khiri Khan",
      country: "Thailand",
      continent: "Asia-Pacific",
      lat: 12.5348,
      lng: 99.9634,
    },
    heroImage: "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Resort-Garden-Arial-View-scaled.webp",
    gallery: [
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Resort-Garden-Arial-View-scaled.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Beachfront-Drone.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Taste-of-Siam-Beachfront-Terrace.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/Taste-of-Siam_2.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Taste-of-Siam-Outdoor-Pool-Sunrise-e1721286759679.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/06-Chiva-Som-Hua-Hin-Thai-Pavilion-Suite-7.jpg",
    ],
    badgeTier: "featured",
    rating: 4.97,
    reviewCount: 384,
    pricing: {
      minPricePerNight: 519,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Chiva-Som Signature Detox (5 Nights)",
          days: 5,
          price: 3600,
          description: "Comprehensive health consultation, colon hydrotherapy, lymphatic drainage, daily fitness, and targeted cleansing cuisine.",
        },
        {
          name: "Optimal Performance & Physiotherapy (7 Nights)",
          days: 7,
          price: 5200,
          description: "Full biomechanical assessment, gait analysis, deep tissue release, re-functional training, and daily personal wellness sessions.",
        },
      ],
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress",
    ],
    modalities: [
      "Hydrotherapy",
      "Acupuncture",
      "Physiotherapy",
      "IV Therapy",
      "Chi Nei Tsang",
      "Cryotherapy",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free",
      "Plant-Based/Vegan",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Bespoke Physiotherapy Studio",
      "Hydrotherapy Vitality Pools",
      "Bathing Pavilion with Watsu Pool",
      "Organic Permaculture Garden",
      "Kinesis Fitness Pavilion",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Beachside Pranayama & Qi Gong" },
      { time: "08:30", activity: "Personalized Wellness Cuisine Breakfast & Nutrient Tonic" },
      { time: "10:00", activity: "Physiotherapy Assessment or Diagnostic Consultation" },
      { time: "12:30", activity: "Therapeutic Organic Lunch at Taste of Siam" },
      { time: "15:00", activity: "Hydrotherapy Flotarium & Herbal Body Purification" },
      { time: "17:30", activity: "Sunset Sound Bath & Guided Meditation" },
      { time: "19:30", activity: "Mindful Dinner & Wellness Lecture" },
    ],
    expertTeam: [
      {
        name: "Dr. Jason Culp, ND",
        role: "Research & Wellness Director",
        credentials: "Doctor of Naturopathic Medicine, 18+ Years Experience",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Dr. Supot, MD",
        role: "Lead Integrative Physician",
        credentials: "Board Certified Internal Medicine & Clinical Anti-Aging",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "cs-1",
        author: "Eleanor W.",
        date: "February 2026",
        rating: 5,
        title: "The undisputed gold standard of wellness resorts",
        comment: "Every touchpoint is orchestrated with surgical precision and warmth. The physiotherapy team solved a shoulder mobility issue I suffered from for 4 years.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+66 32 536 536",
      email: "reservations@chivasom.com",
      website: "https://www.chivasom.com",
    },
  },

  {
    id: "kamalaya-koh-samui",
    slug: "kamalaya-koh-samui",
    name: "Kamalaya Wellness Sanctuary & Holistic Spa Resort",
    tagline: "Sacred Hillside Healing Sanctuary Centered Around an Ancient Buddhist Monks' Cave",
    description: "Centuries ago, Buddhist monks used the sacred granite cave at the center of Kamalaya as a place of meditation. Today, this lush hillside sanctuary overlooking the Gulf of Thailand is internationally celebrated for emotional healing, burnout recovery, stress management, and traditional Chinese & Ayurvedic therapies.",
    location: {
      city: "Koh Samui",
      region: "Surat Thani",
      country: "Thailand",
      continent: "Asia-Pacific",
      lat: 9.4297,
      lng: 100.0152,
    },
    heroImage: "https://kamalaya.com/wp-content/uploads/2021/03/WEB4.jpg",
    gallery: [
      "https://kamalaya.com/wp-content/uploads/2021/03/WEB4.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-12.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-13.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-11.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-01.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-08.jpg",
    ],
    badgeTier: "featured",
    rating: 4.95,
    reviewCount: 312,
    pricing: {
      minPricePerNight: 380,
      currency: "USD",
      pricingTier: "moderate",
      packageOptions: [
        {
          name: "Relax & Renew (5 Nights)",
          days: 5,
          price: 2450,
          description: "Bio-impedance analysis, traditional Thai herbal massages, Shirodhara, and essential oil steam cavern sessions.",
        },
        {
          name: "Burnout & Sleep Enhancement (7 Nights)",
          days: 7,
          price: 3850,
          description: "Adrenal assessment, sleep-architecture coaching, acupuncture, somatic nervous system soothing, and personalized herbs.",
        },
      ],
    },
    primaryGoals: [
      "Burnout & Stress",
      "Emotional & Trauma Healing",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Acupuncture",
      "Sound Healing",
      "Chi Nei Tsang",
      "Forest Bathing",
      "Ayurvedic Massage",
      "Herbal Steam Caverns",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Master Holistic Healers",
    amenities: [
      "Sacred Monks' Meditation Cave",
      "Granite Rock Steam Cavern",
      "Lap Pool & Plunge Pools Overlooking Sea",
      "Yantra Yoga Hall",
      "Herbal Holistic Dispensary",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Guided Silent Meditation in the Monks' Cave" },
      { time: "08:15", activity: "Vitality Breakfast with Fresh Turmeric Elixirs" },
      { time: "10:30", activity: "Traditional Chinese Medicine Consultation & Acupuncture" },
      { time: "12:30", activity: "Nourishing Herbal Lunch by the Lotus Ponds" },
      { time: "15:00", activity: "Chi Nei Tsang Abdominal Healing & Herbal Steam" },
      { time: "17:30", activity: "Sunset Yin Yoga Overlooking Southern Gulf" },
      { time: "19:30", activity: "Mindful Communal Dinner" },
    ],
    expertTeam: [
      {
        name: "John Stewart",
        role: "Co-Founder & Spiritual Guide",
        credentials: "16 Years as a Devoted Yogi & Himalayan Monk",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Karina Stewart",
        role: "Co-Founder & Chief Wellness Officer",
        credentials: "Master of Traditional Chinese Medicine (MTCM), Princeton Graduate",
        avatar: "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "km-1",
        author: "David R.",
        date: "January 2026",
        rating: 5,
        title: "The antidote to 20 years of corporate burnout",
        comment: "Meditation in the monks' cave shifted something in me on day two. The Chi Nei Tsang massage released years of digestive tension.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+66 77 429 800",
      email: "reservations@kamalaya.com",
      website: "https://www.kamalaya.com",
    },
  },

  {
    id: "rakxa-wellness-bangkok",
    slug: "rakxa-integrative-wellness",
    name: "RAKxa Integrative Wellness",
    tagline: "High-Tech Medical Diagnostics Meets Ancient Healing in Bangkok's Green Lung",
    description: "Located on the island of Bang Krachao—known as Bangkok's protected 'Green Lung'—RAKxa is a world-class medical retreat partnering with Bumrungrad International Hospital's VitalLife Scientific Wellness Clinic. It bridges advanced genomic testing, hormone mapping, and hyperbaric oxygen with traditional Thai, Ayurvedic, and Chinese medicine.",
    location: {
      city: "Bangkok",
      region: "Samut Prakan",
      country: "Thailand",
      continent: "Asia-Pacific",
      lat: 13.6822,
      lng: 100.5694,
    },
    heroImage: "https://rakxawellness.com/wp-content/uploads/2025/11/Hom1.webp",
    gallery: [
      "https://rakxawellness.com/wp-content/uploads/2025/11/Hom1.webp",
      "https://rakxawellness.com/wp-content/uploads/2025/08/WhatsApp-Image-2024-02-12-at-15.25.38-1.webp",
      "https://rakxawellness.com/wp-content/uploads/2025/09/Medical-Wellness-Doctor-Consultation.webp",
      "https://rakxawellness.com/wp-content/uploads/2025/01/Personalised.webp",
      "https://rakxawellness.com/wp-content/uploads/2024/05/Detox.webp",
      "https://rakxawellness.com/wp-content/uploads/2025/09/HYPERBARIC-CHAMBRE_-Copy.webp",
    ],
    badgeTier: "verified",
    rating: 4.96,
    reviewCount: 168,
    pricing: {
      minPricePerNight: 1200,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Integrative Longevity & Biological Age (5 Nights)",
          days: 5,
          price: 7800,
          description: "Telomere analysis, hormone mapping, hyperbaric oxygen, whole-body cryotherapy, IV micronutrients, and private lake villa.",
        },
        {
          name: "Gut & Immunity Rebalance (7 Nights)",
          days: 7,
          price: 9800,
          description: "Microbiome sequencing, food intolerance testing, colon hydrotherapy, and personalized anti-inflammatory culinary regimen.",
        },
      ],
    },
    primaryGoals: [
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
      "Burnout & Stress",
    ],
    modalities: [
      "Hyperbaric Oxygen",
      "Cryotherapy",
      "IV Therapy",
      "Live Blood Analysis",
      "Hydrotherapy",
      "Acupuncture",
    ],
    dietary: [
      "Anti-Inflammatory",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Lakefront",
    supervision: "Medical Doctor Led",
    amenities: [
      "VitalLife Scientific Medical Lab",
      "Medical Gym with Olympic Training Systems",
      "Hydrotherapy Thermal Suites",
      "Hyperbaric Oxygen Chambers",
      "Cryotherapy Cabin (-110°C)",
    ],
    dailySchedule: [
      { time: "07:30", activity: "Tai Chi & Lakefront Mindful Breathwork" },
      { time: "08:45", activity: "Biomarker-Tailored Organic Nutrition Breakfast" },
      { time: "10:00", activity: "VitalLife Medical Diagnostics & Genomic Blood Panels" },
      { time: "12:30", activity: "Therapeutic Chef's Table Lunch" },
      { time: "14:30", activity: "Hyperbaric Oxygen Therapy (90 mins) & IV Infusion" },
      { time: "17:00", activity: "Traditional Thai Ya-Pao Herbal Thermal Therapy" },
      { time: "19:30", activity: "Anti-Inflammatory Dinner by the Chao Phraya Lagoon" },
    ],
    expertTeam: [
      {
        name: "Dr. Narinthorn Surasinthorn, MD",
        role: "Medical Director, VitalLife at RAKxa",
        credentials: "American Board of Anti-Aging & Regenerative Medicine (ABAARM)",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rx-1",
        author: "Alastair H.",
        date: "November 2025",
        rating: 5,
        title: "The most advanced medical diagnostics in Asia",
        comment: "Having Bumrungrad doctors analyze your blood and telomeres while enjoying world-class spa villas makes this peerless.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+66 2 055 3100",
      email: "CustomerRelations@rakxawellness.com",
      website: "https://www.rakxawellness.com",
    },
  },

  {
    id: "amanpuri-phuket",
    slug: "amanpuri-holistic-wellness-centre",
    name: "Amanpuri Holistic Wellness Centre",
    tagline: "Exclusive Ultra-Luxury Medical & Holistic Immersion on Pansea Beach",
    description: "Perched above a private turquoise cove in Phuket, Amanpuri is Aman's flagship sanctuary. The multi-story Holistic Wellness Centre features medical doctors from Thanyapura, Traditional Chinese Medicine physicians, and hydrotherapy pavilions. Amanpuri offers deeply individualized Wellness Immersions focusing on longevity, aesthetic rejuvenation, and mental clarity.",
    location: {
      city: "Phuket",
      region: "Cherngtalay",
      country: "Thailand",
      continent: "Asia-Pacific",
      lat: 7.9839,
      lng: 98.2797,
    },
    heroImage: "https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amanpuri.jpg",
    gallery: [
      "https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amanpuri.jpg",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri%2C%20Thailand%20-%20Wellness%2C%20The%20Spa%20House%2C%20Treatment%20Room%2C%20Lap%20Pool_47332.webp?itok=riBkfRJW",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri-_Thailand_-_Dining-_The_Sunset_Terrace-_Sunset_Deck-_Space.webp?itok=OH5sZyVL",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri-_Thailand_-_Wellness-_Spa_House-_Treatment-_Stone.webp?itok=fSvfDfsg",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri-_Thailand_-_Experience-_Andaman_Sea-_Ocean_Platform.webp?itok=46KbLBjs",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri-_Thailand_-_Dining-_The_Beach_Terrace-_Upper_Deck-_Table_Set_Up-_Andaman_Sea.webp?itok=NX2gtor0",
    ],
    badgeTier: "featured",
    rating: 4.98,
    reviewCount: 146,
    pricing: {
      minPricePerNight: 1650,
      currency: "USD",
      pricingTier: "ultra-luxury",
      packageOptions: [
        {
          name: "Intensive Wellness Immersion (5 Nights)",
          days: 5,
          price: 11500,
          description: "Full blood chemistry panel, OligoScan heavy metal test, daily private yoga, IV infusions, and bespoke nutritionist meal plan.",
        },
      ],
    },
    primaryGoals: [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Spiritual Awakening",
    ],
    modalities: [
      "IV Therapy",
      "Cryotherapy",
      "Acupuncture",
      "Hydrotherapy",
      "Ayurvedic Massage",
      "Muay Thai",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Private White-Sand Pansea Beach",
      "Hydrotherapy Suites with Cold Plunge",
      "Rooftop Muay Thai Boxing Ring",
      "Aman Spa Pavilion",
      "Holistic Diagnostic Suite",
    ],
    dailySchedule: [
      { time: "07:30", activity: "Rooftop Ocean-View Ashtanga Yoga" },
      { time: "09:00", activity: "Nutritional Raw Food Breakfast & Cold Pressed Elixirs" },
      { time: "10:30", activity: "Medical Lab Diagnostics & Heavy Metal OligoScan" },
      { time: "13:00", activity: "Private Beachside Wellness Lunch" },
      { time: "15:00", activity: "IV Vitamin Infusion & Traditional Herbal Body Polish" },
      { time: "17:30", activity: "Sunset Sound Bath with Tibetan Singing Bowls" },
      { time: "19:30", activity: "Aman Signature Detox Dinner" },
    ],
    expertTeam: [
      {
        name: "Dr. Pratima Raichur",
        role: "Integrative Wellness Consultant",
        credentials: "Doctor of Naturopathy & Ayurvedic Chemistry",
        avatar: "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "ap-1",
        author: "Lord Sterling B.",
        date: "December 2025",
        rating: 5,
        title: "The pinnacle of private luxury wellness",
        comment: "From the OligoScan heavy-metal analysis to the private white sand beach and bespoke IV therapy, Amanpuri is incomparable.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+66 76 324 333",
      email: "amanpuri@aman.com",
      website: "https://www.aman.com/resorts/amanpuri",
    },
  },

  {
    id: "thanyapura-phuket",
    slug: "thanyapura-sports-health-resort",
    name: "Thanyapura Sports & Health Resort",
    tagline: "Asia's Premier Active Wellness, High-Performance Sports & Preventative Medicine Resort",
    description: "Surrounded by the serene national park in northern Phuket, Thanyapura is Asia’s only FINA-approved athletic resort combined with a preventative medical clinic. Renowned among Olympic athletes, executives, and fitness seekers, Thanyapura combines lifestyle medicine, chiropractic care, physiotherapy, and Olympic sports coaching with detox and stress recovery.",
    location: {
      city: "Phuket",
      region: "Thalang",
      country: "Thailand",
      continent: "Asia-Pacific",
      lat: 8.0493,
      lng: 98.3456,
    },
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Thanyapura_Sports_and_Leisure_Club_Phuket.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Thanyapura_Sports_and_Leisure_Club_Phuket.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Thanyapura_Health_Sports_Resort_Phuket_facilities_Swimming_Pool.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Thanyapura-Health-Sports-Resort-Phuket-facilities-3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Thanyapura_Health_Sports_Resort_Phuket_Aerial_View_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Sports_Hotel_-_Pool_%281%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Thanyapura-Health-Sports-Resort-Phuket-running-track-2.jpg",
    ],
    badgeTier: "verified",
    rating: 4.88,
    reviewCount: 220,
    pricing: {
      minPricePerNight: 160,
      currency: "USD",
      pricingTier: "accessible",
      packageOptions: [
        {
          name: "Active Detox & Weight Loss (5 Nights)",
          days: 5,
          price: 1950,
          description: "Doctor consultation, VO2 Max testing, Olympic swimming coaching, personal training, and organic alkaline meal plan.",
        },
      ],
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Longevity & Anti-Aging",
    ],
    modalities: [
      "Physiotherapy",
      "Chiropractic",
      "Hydrotherapy",
      "Muay Thai",
      "VO2 Max Testing",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Medical Doctor Led",
    amenities: [
      "50m Olympic Pool & 25m Training Pool",
      "6 Tennis Courts (Indoor & Outdoor)",
      "500m Tartan Running Track",
      "Integrative Medical Clinic",
      "High-Performance Cardio & Weight Gym",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Track Run or Sunrise Swim in 50m Olympic Pool" },
      { time: "08:00", activity: "High-Protein Alkaline Smoothie & Organic Breakfast" },
      { time: "09:30", activity: "VO2 Max & Functional Movement Assessment" },
      { time: "12:30", activity: "Plant-Based Nutrition Lunch at DiVine Restaurant" },
      { time: "15:00", activity: "Sports Physiotherapy & Deep Tissue Release" },
      { time: "17:00", activity: "Core & Mobility Yoga Session" },
      { time: "19:00", activity: "Nutrient-Dense Dinner & Recovery Steam" },
    ],
    expertTeam: [
      {
        name: "Dr. Sutheera, MD",
        role: "Chief Medical Officer",
        credentials: "Specialist in Preventative Cardiology & Sports Medicine",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "tp-1",
        author: "Christian V.",
        date: "January 2026",
        rating: 5,
        title: "Transformed my fitness and body composition in 10 days",
        comment: "Training in the Olympic pool and having my VO2 max tracked by sports doctors took my performance to another level.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+66 76 336 000",
      email: "info@thanyapura.com",
      website: "https://www.thanyapura.com",
    },
  },

  {
    id: "samahita-retreat-thailand",
    slug: "samahita-retreat-koh-samui",
    name: "Samahita Retreat",
    tagline: "Dedicated Beachfront Sanctuary for Breathwork, YogaCoreCycle & Total Detox",
    description: "Founded in 2003 on Laem Sor Beach in southern Koh Samui, Samahita is one of Asia's most established dedicated yoga and breathwork retreat centers. Known for its signature YogaCoreCycle program, infrared saunas, saltwater pools, and intensive pranayama training.",
    location: {
      city: "Koh Samui",
      region: "Laem Sor Beach",
      country: "Thailand",
      continent: "Asia-Pacific",
      lat: 9.4121,
      lng: 99.9882,
    },
    heroImage: "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Samahita_Retreat_from_the_sky_20250312073254.jpg",
    gallery: [
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Samahita_Retreat_from_the_sky_20250312073254.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/_20241008121046.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Yoga-retreat-class_20250308113634.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Yoga_Teacher_Training_Thailand_20250303104635.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/gomukhasana_healthy_yoga_20241128060320.jpg",
    ],
    badgeTier: "claimed",
    rating: 4.89,
    reviewCount: 235,
    pricing: {
      minPricePerNight: 180,
      currency: "USD",
      pricingTier: "accessible",
      packageOptions: [
        {
          name: "YogaCoreCycle & Detox (5 Nights)",
          days: 5,
          price: 1350,
          description: "All-inclusive daily dynamic yoga, breathwork, indoor cycling, herbal steam, and buffet wellness dining.",
        },
      ],
    },
    primaryGoals: [
      "Mindfulness & Meditation",
      "Detox & Weight Loss",
      "Burnout & Stress",
    ],
    modalities: [
      "Pranayama",
      "Sound Healing",
      "Chi Nei Tsang",
      "Infrared Sauna",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Master Holistic Healers",
    amenities: [
      "Beachfront Bamboo Yoga Shala",
      "Saltwater Swimming Pool",
      "Indoor Sound-Engineered Cycle Studio",
      "Herbal Steam Room",
      "Eco-Dining Buffet Pavilion",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Pranayama & Classical Breathwork by the Sea" },
      { time: "08:15", activity: "Dynamic Vinyasa Flow Yoga" },
      { time: "10:00", activity: "Full Healthy Buffet Breakfast with Superfood Bar" },
      { time: "12:00", activity: "Beach Walk or Sea Kayaking" },
      { time: "16:00", activity: "YogaCoreCycle (Spin + Core Strength)" },
      { time: "17:30", activity: "Restorative Yin Yoga & Meditation" },
      { time: "19:00", activity: "Communal Candlelit Dinner Buffet" },
    ],
    expertTeam: [
      {
        name: "Paul Dallaghan",
        role: "Founder & Master Breathwork Teacher",
        credentials: "PhD Candidate in Biological Science, Senior Ashtanga Yoga Teacher",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "sm-1",
        author: "Jessica T.",
        date: "December 2025",
        rating: 5,
        title: "The best breathwork instruction in the world",
        comment: "Paul's pranayama teachings reset my nervous system completely. The food is incredible, fresh, and abundant.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+66 77 920 090",
      email: "info@samahitaretreat.com",
      website: "https://www.samahitaretreat.com",
    },
  },

  // ==========================================
  // SOUTH EAST ASIA — INDONESIA (BALI)
  // ==========================================
  {
    id: "como-shambhala-estate-bali",
    slug: "como-shambhala-estate",
    name: "COMO Shambhala Estate",
    tagline: "Legendary 23-Acre Residential Health Retreat in the Jungle of Payangan",
    description: "COMO Shambhala Estate is a peaceful residential health retreat nestled in the tropical forest above the sacred Ayung River in Bali. Combining state-of-the-art wellness facilities with ancient Eastern medicine, the Estate features resident Ayurvedic doctors, Oriental medicine masters, dietitians, and personal trainers to deliver deeply transformative stays.",
    location: {
      city: "Payangan",
      region: "Ubud, Bali",
      country: "Indonesia",
      continent: "Asia-Pacific",
      lat: -8.4554,
      lng: 115.2413,
    },
    heroImage: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb90e39c28.jpg/1200x630/fit/80/3acafa9acc9084da677a08d771695ad6.jpg",
    gallery: [
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb90e39c28.jpg/1200x630/fit/80/3acafa9acc9084da677a08d771695ad6.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/682d9be5e6823.png/1920x1080/fit/80/bdab36124b3832114536b201caff7efc.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/635b36a761592.jpg/1920x1080/fit/80/a16d8fb0bae92c380f9246a402486170.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/633170f7207c0.jpg/1920x1080/fit/80/316e293624987c33d1c038ba97f115ca.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/689c0ca00dd56.jpg/1386x916/fit/80/16d6b5aa524d0e1a490866b18e2a83b9.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/68f0324839748.jpg/1772x1180/fit/80/bdd8028f83d6f0c33a4119d962b76bbc.jpg",
    ],
    badgeTier: "featured",
    rating: 4.97,
    reviewCount: 289,
    pricing: {
      minPricePerNight: 1000,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Ayurvedic Healing Journey (5 Nights)",
          days: 5,
          price: 5800,
          description: "Private consultation with resident Ayurvedic doctor, daily Shirodhara, Abhyanga, customized Dosha dining, and private yoga.",
        },
        {
          name: "COMO Cleanse & Reset (7 Nights)",
          days: 7,
          price: 7900,
          description: "Cold-pressed juices, colon hydrotherapy, deep tissue massage, hyperbaric oxygen, and vitality pool therapy.",
        },
      ],
    },
    primaryGoals: [
      "Ayurveda & Panchakarma",
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Ayurvedic Massage",
      "Hyperbaric Oxygen",
      "Hydrotherapy",
      "Acupuncture",
      "Forest Bathing",
      "Sound Healing",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Ayurvedic",
      "Plant-Based/Vegan",
      "Raw Food",
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "Hydrotherapy Vitality Pool",
      "Natural Sacred Springs & Bathing Pools",
      "Open-Air Yoga Pavilions",
      "Ayurvedic Consultation Suites",
      "Glow Organic Restaurant",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Morning Pranayama & Forest Yoga" },
      { time: "08:30", activity: "COMO Shambhala Organic Cuisine Breakfast" },
      { time: "10:00", activity: "Ayurvedic Doctor Pulse Diagnostic & Custom Herbal Plan" },
      { time: "12:30", activity: "Living Foods Lunch at Glow" },
      { time: "15:00", activity: "Shirodhara & Warm Herbal Oil Full-Body Abhyanga" },
      { time: "17:30", activity: "Guided Trek to Sacred Spring Water Blessing" },
      { time: "19:30", activity: "Evening Restorative Dinner & Sound Bath" },
    ],
    expertTeam: [
      {
        name: "Dr. Prasanth, BAMS",
        role: "Resident Ayurvedic Physician",
        credentials: "20+ Years Clinical Ayurvedic Experience across India & Bali",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "cs-e1",
        author: "Victoria N.",
        date: "January 2026",
        rating: 5,
        title: "Perfection in the heart of the Balinese jungle",
        comment: "Drinking the fresh spring water and bathing in the rock pools while being guided by Dr. Prasanth was an unforgettable rejuvenation.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+62 361 978 888",
      email: "res.CSestate@comohotels.com",
      website: "https://www.comohotels.com/bali/como-shambhala-estate",
    },
  },

  {
    id: "fivelements-retreat-bali",
    slug: "fivelements-retreat-bali",
    name: "Fivelements Retreat",
    tagline: "Sacred Balinese Eco-Sanctuary for Deep Spiritual & Physical Healing",
    description: "Nestled alongside the sacred Ayung River in Ubud, Fivelements is an internationally awarded healing retreat integrating traditional Balinese philosophies, sacred plant-powered cuisine, and holistic therapies. Guided by Balinese healers, guests experience authentic water blessings, deep somatic release, and transformative herbal purifications.",
    location: {
      city: "Ubud",
      region: "Bali",
      country: "Indonesia",
      continent: "Asia-Pacific",
      lat: -8.5192,
      lng: 115.2285,
    },
    heroImage: "https://fivelementsbali.com/wp-content/uploads/2020/05/LVD-20230608-775-scaled.jpg",
    gallery: [
      "https://fivelementsbali.com/wp-content/uploads/2020/05/LVD-20230608-775-scaled.jpg",
      "https://fivelementsbali.com/wp-content/uploads/2022/01/suite-five-elements.jpg",
      "https://fivelementsbali.com/wp-content/uploads/2022/01/spa-five-elements-bali.jpg",
      "https://fivelementsbali.com/wp-content/uploads/2022/01/yoga-center.jpg",
      "https://fivelementsbali.com/wp-content/uploads/2022/01/two-bedroom-riverfront-suite-with-private-pool-five-elements-1.jpg",
      "https://fivelementsbali.com/wp-content/uploads/2022/01/five-elements-bali.jpg",
    ],
    badgeTier: "featured",
    rating: 4.92,
    reviewCount: 218,
    pricing: {
      minPricePerNight: 420,
      currency: "USD",
      pricingTier: "moderate",
      packageOptions: [
        {
          name: "Panca Mahabhuta (7 Nights)",
          days: 7,
          price: 3250,
          description: "Comprehensive Balinese chakra balancing, sacred fire ceremony, daily deep tissue herbal massage, and 7-day living foods cleanse.",
        },
      ],
    },
    primaryGoals: [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Emotional & Trauma Healing",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Sound Healing",
      "Forest Bathing",
      "Balinese Massage",
      "Acupuncture",
      "Hydrotherapy",
      "Somatic Release",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "Bamboo Yoga Mandalas",
      "Riverfront Treatment Suites",
      "Sacred Fire Ceremony Agnihotra Pavilion",
      "Watsu Hydrotherapy Pool",
      "Plant-Based Culinary Lab",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Morning Pranayama & Dharma Yoga in Bamboo Shala" },
      { time: "08:00", activity: "Living Foods Breakfast with Elixirs & Jamu Herbal Tonic" },
      { time: "10:00", activity: "Traditional Balinese Healing Consultation with Pak Wayan" },
      { time: "12:30", activity: "Multi-Course Gourmet Vegan Lunch" },
      { time: "14:30", activity: "Somatic Bodywork & Hibiscus Flower Bath Overlooking River" },
      { time: "17:30", activity: "Agnihotra Sacred Fire Clearing Ceremony" },
      { time: "19:30", activity: "Sacred Plant Culinary Dinner" },
    ],
    expertTeam: [
      {
        name: "Pak Wayan",
        role: "Traditional Balinese Healer (Balian)",
        credentials: "6th Generation Hereditary Energy Practitioner",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-3",
        author: "Claire K.",
        date: "December 2025",
        rating: 5,
        title: "Deep emotional release and supreme peace",
        comment: "Falling asleep to the river sounds and experiencing the fire ceremony shifted something profound in me.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+62 361 469 261",
      email: "contact@fivelements.org",
      website: "https://fivelementsbali.com",
    },
  },

  {
    id: "revivo-wellness-bali",
    slug: "revivo-wellness-resort",
    name: "REVĪVŌ Wellness Resort",
    tagline: "Mindful Luxury Retreat in Nusa Dua Built on Movement, Nutrition & Sleep Optimization",
    description: "Spread across three hectares of teak forest in Nusa Dua, REVĪVŌ is built around four fundamental pillars: MOVEO (movement), NŪTRIŌ (nutrition), REMISSIŌ (spa healing), and NOCTURNO (sleep architecture). It features a dedicated Vitality Centre with VO2 Max testing, CELLGYM oxygen therapy, and infrared therapy.",
    location: {
      city: "Nusa Dua",
      region: "Sawangan, Bali",
      country: "Indonesia",
      continent: "Asia-Pacific",
      lat: -8.8167,
      lng: 115.2167,
    },
    heroImage: "https://www.revivoresorts.com/wp-content/uploads/2026/08/image006-1.webp",
    gallery: [
      "https://www.revivoresorts.com/wp-content/uploads/2026/08/image006-1.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2026/08/image002-1.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2026/08/image008-1.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2025/09/Remisso-768x432.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2025/09/mv18-768x663.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2025/09/Nutrio-1-768x512.webp",
    ],
    badgeTier: "verified",
    rating: 4.93,
    reviewCount: 174,
    pricing: {
      minPricePerNight: 350,
      currency: "USD",
      pricingTier: "moderate",
      packageOptions: [
        {
          name: "Sleep Well & Adrenal Recovery (4 Nights)",
          days: 4,
          price: 2350,
          description: "Sleep architecture consultation, sound therapy, magnesium body wrap, daily yoga, and sleep-inducing gourmet dining.",
        },
      ],
    },
    primaryGoals: [
      "Burnout & Stress",
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
    ],
    modalities: [
      "Hydrotherapy",
      "Sound Healing",
      "Cryotherapy",
      "Infrared Sauna",
      "CELLGYM Oxygen Therapy",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free",
      "Anti-Inflammatory",
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "Saltwater Floating Pool",
      "Vitality Longevity Centre",
      "Pilates Reformer Studio",
      "Hydroponic Organic Garden",
      "Remissio Holistic Spa",
    ],
    dailySchedule: [
      { time: "07:30", activity: "Morning Pranayama & Core Flow at MOVEO Studio" },
      { time: "08:45", activity: "Nutrio Hydroponic Superfood Breakfast" },
      { time: "10:30", activity: "CELLGYM Interval Oxygen Therapy Session" },
      { time: "12:30", activity: "Organic Farm-to-Table Lunch" },
      { time: "15:00", activity: "Lymphatic Drainage Massage & Infrared Sauna" },
      { time: "17:30", activity: "Sound Healing Therapy with Alchemy Crystal Bowls" },
      { time: "19:30", activity: "Nocturno Sleep-Optimized Dinner" },
    ],
    expertTeam: [
      {
        name: "Dr. Rachel Goh",
        role: "Head of Holistic Medicine",
        credentials: "Certified Functional Medicine Practitioner & Naturopath",
        avatar: "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rv-1",
        author: "Mark P.",
        date: "January 2026",
        rating: 5,
        title: "Cured my chronic insomnia in 4 days",
        comment: "The sleep program here is remarkable. Combining CELLGYM oxygen therapy with the Nocturno dinners gave me the deepest REM sleep in years.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+62 361 620 7000",
      email: "reservations-bali@revivoresorts.com",
      website: "https://revivoresorts.com",
    },
  },

  {
    id: "sukhavati-bali",
    slug: "sukhavati-ayurvedic-retreat",
    name: "Sukhavati Ayurvedic Retreat & Wellness Spa",
    tagline: "Authentic Ayurvedic Panchakarma & Vedic Astrology in Rural Bali",
    description: "Located amidst the tranquil rice fields of Mengwi in Badung Regency, Sukhavati is an authentic Ayurvedic destination. Centered around personalized Panchakarma detoxification, Vedic pulse diagnostics, daily Shirodhara, and organic vegetarian dining.",
    location: {
      city: "Mengwi",
      region: "Badung Regency, Bali",
      country: "Indonesia",
      continent: "Asia-Pacific",
      lat: -8.5833,
      lng: 115.1667,
    },
    heroImage: "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc06774-1.jpg",
    gallery: [
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc06774-1.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc07163-1-1-1.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc06971.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/bp4a7846-hdsdsafdsar1.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc07068.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/06/Sukhavati-Bali_Luxury-Ayurveda-Retreat-Bali_All-Inclusive-retreat.jpg",
    ],
    badgeTier: "verified",
    rating: 4.91,
    reviewCount: 165,
    pricing: {
      minPricePerNight: 410,
      currency: "USD",
      pricingTier: "moderate",
      packageOptions: [
        {
          name: "Authentic Panchakarma Detox (7 Nights)",
          days: 7,
          price: 2950,
          description: "Full daily Abhyanga, continuous warm herbal oil Shirodhara, Vedic pulse diagnostics, and organic Dosha-specific meals.",
        },
      ],
    },
    primaryGoals: [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Burnout & Stress",
    ],
    modalities: [
      "Ayurvedic Massage",
      "Shirodhara",
      "Pranayama",
      "Transcendental Meditation",
    ],
    dietary: [
      "Ayurvedic",
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "Open-Air Rice Field Yoga Shala",
      "Ayurvedic Treatment Pavilion",
      "Meditation Gazebos",
      "Organic Herb Garden",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Morning Gentle Hatha Yoga & Pranayama" },
      { time: "08:00", activity: "Ayurvedic Dosha Breakfast with Warm Spices" },
      { time: "10:00", activity: "One-on-One Pulse Consultation with Ayurvedic Vaidya" },
      { time: "12:30", activity: "Sattvic Vegetarian Lunch" },
      { time: "14:30", activity: "Four-Hand Abhyanga & Shirodhara Oil Treatment" },
      { time: "17:00", activity: "Transcendental Meditation & Vedic Discourse" },
      { time: "19:00", activity: "Light Cleansing Dinner & Herbal Infusions" },
    ],
    expertTeam: [
      {
        name: "Dr. Komang Shanti, BAMS",
        role: "Lead Ayurvedic Physician",
        credentials: "Bachelor of Ayurvedic Medicine & Surgery, Kerala University",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "sk-1",
        author: "Helena S.",
        date: "November 2025",
        rating: 5,
        title: "True Ayurvedic medicine in a peaceful Balinese estate",
        comment: "Shirodhara done right by experienced therapists every day. The serenity of the rice fields made letting go so easy.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+62 361 900 6101",
      email: "rejuvenation@sukhavatibali.com",
      website: "https://sukhavatibali.com",
    },
  },

  {
    id: "bagus-jati-bali",
    slug: "bagus-jati-wellbeing-retreat",
    name: "Bagus Jati Health & Wellbeing Retreat",
    tagline: "High-Altitude Rainforest Sanctuary in Tegallalang Dedicated to Balinese Tri Hita Karana",
    description: "Perched 750 meters above sea level on five hectares of hillside flora in Tegallalang, Bagus Jati is Bali’s premier mountain health sanctuary. Built following the sacred philosophy of Tri Hita Karana (harmony with people, nature, and the divine), it offers an organic detox diet, thermal jacuzzi, and circular yoga pavilion suspended over valleys.",
    location: {
      city: "Tegallalang",
      region: "Gianyar, Bali",
      country: "Indonesia",
      continent: "Asia-Pacific",
      lat: -8.3833,
      lng: 115.2833,
    },
    heroImage: "https://bagusjati.com/wp-content/uploads/2024/08/1-4.jpg",
    gallery: [
      "https://bagusjati.com/wp-content/uploads/2024/08/1-4.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/bjslide.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/3-4-scaled.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/4-3-scaled.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/Balinese-Compound-2-1300x650.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/06/9-6-1300x650.jpg",
    ],
    badgeTier: "claimed",
    rating: 4.87,
    reviewCount: 198,
    pricing: {
      minPricePerNight: 180,
      currency: "USD",
      pricingTier: "accessible",
      packageOptions: [
        {
          name: "Detox & Balinese Healing (5 Nights)",
          days: 5,
          price: 1450,
          description: "Daily yoga, acupuncture, herbal steam, organic garden juices, and sacred waterfall purification.",
        },
      ],
    },
    primaryGoals: [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Spiritual Awakening",
    ],
    modalities: [
      "Acupuncture",
      "Forest Bathing",
      "Hydrotherapy",
      "Balinese Massage",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Master Holistic Healers",
    amenities: [
      "Circular Yoga Pavilion Over Valley",
      "Thermal Hydro-Pool & Waterfall",
      "Organic Vegetable & Herb Farm",
      "Herbal Steam Grotto",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Sunrise Mountain Yoga in Circular Shala" },
      { time: "08:30", activity: "Fresh Papaya & Organic Farm Breakfast" },
      { time: "10:30", activity: "Nature Walk Through Indigenous Flora & Spice Trees" },
      { time: "13:00", activity: "Farm-to-Table Lunch at Surya Restaurant" },
      { time: "15:00", activity: "Traditional Balinese Boreh Spice Wrap & Herbal Bath" },
      { time: "17:30", activity: "Sunset Meditation & Sound Bowls" },
      { time: "19:00", activity: "Candlelit Healing Dinner" },
    ],
    expertTeam: [
      {
        name: "Wayan Sudarta",
        role: "Traditional Balinese Healer & Yoga Master",
        credentials: "Master of Classical Hatha & Balinese Energy Systems",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "bj-1",
        author: "Thomas M.",
        date: "December 2025",
        rating: 5,
        title: "Pure mountain air and unmatched stillness",
        comment: "The circular yoga shala overlooking the jungle valley is heaven on earth. The food comes directly from the organic farm 50 meters away.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+62 361 901 888",
      email: "info@bagusjati.com",
      website: "https://bagusjati.com",
    },
  },

  {
    id: "the-yoga-barn-bali",
    slug: "the-yoga-barn-ubud",
    name: "The Yoga Barn",
    tagline: "Global Epicenter for Yoga, Sound Healing & Conscious Living in Ubud",
    description: "The Yoga Barn is an internationally renowned holistic oasis in Ubud. Offering over 180 classes weekly in yoga, meditation, breathwork, and sound healing, alongside private healing therapies (energy work, colon hydrotherapy, and Ayurvedic bodywork).",
    location: {
      city: "Ubud",
      region: "Gianyar, Bali",
      country: "Indonesia",
      continent: "Asia-Pacific",
      lat: -8.5142,
      lng: 115.2631,
    },
    heroImage: "https://theyogabarn.com/wp-content/uploads/2024/03/Circle-Ediited-manual-compressed-1536x1024.jpg",
    gallery: [
      "https://theyogabarn.com/wp-content/uploads/2024/03/Circle-Ediited-manual-compressed-1536x1024.jpg",
      "https://theyogabarn.com/wp-content/uploads/2025/04/Bali-Spirit-Festival-2023-Wari-Om-3912.jpg",
      "https://theyogabarn.com/wp-content/uploads/2024/03/TheYogaBarn-Reiki-Healing-1-compressed.jpg",
      "https://theyogabarn.com/wp-content/uploads/2024/06/Voice-of-the-Beloved-Poster-2026-Dec_WEB_Landscape.jpg",
      "https://theyogabarn.com/wp-content/uploads/2024/12/Bhakti_Kirtan_WEB_Landscape.jpg",
      "https://theyogabarn.com/wp-content/uploads/2026/09/Cosmic-Consciousness-OCT29_WEB-Landscape.jpg",
    ],
    badgeTier: "claimed",
    rating: 4.9,
    reviewCount: 540,
    pricing: {
      minPricePerNight: 120,
      currency: "USD",
      pricingTier: "accessible",
      packageOptions: [
        {
          name: "7-Day Unlimited Yoga & Healing Retreat",
          days: 7,
          price: 980,
          description: "Unlimited class pass, private sound healing session, colon hydrotherapy, and organic cafe dining credits.",
        },
      ],
    },
    primaryGoals: [
      "Mindfulness & Meditation",
      "Spiritual Awakening",
      "Emotional & Trauma Healing",
    ],
    modalities: [
      "Sound Healing",
      "Pranayama",
      "Acupuncture",
      "Somatic Release",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "7 Distinct Yoga Studios",
      "Garden Kafe (Plant-Based & Ayurvedic)",
      "Holistic Healing Clinic",
      "Amphitheatre for Kirtan & Ecstatic Dance",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Morning Vinyasa Flow in Mountain View Studio" },
      { time: "09:00", activity: "Fresh Cold Pressed Juices & Acai Bowl at Garden Kafe" },
      { time: "11:00", activity: "Tibetan Bowl Sound Healing Alchemy" },
      { time: "13:00", activity: "Raw Vegan Gourmet Lunch" },
      { time: "15:00", activity: "Private Somatic Release or Energy Healing Session" },
      { time: "17:30", activity: "Restorative Yin Yoga with Live Cello" },
      { time: "19:30", activity: "Community Kirtan & Sacred Song Circle" },
    ],
    expertTeam: [
      {
        name: "Meghan Pappenheim",
        role: "Co-Founder",
        credentials: "25+ Years in Cultural & Spiritual Community Building in Bali",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "yb-1",
        author: "Emma C.",
        date: "February 2026",
        rating: 5,
        title: "The beating heart of conscious community",
        comment: "The sound healing classes in the upper studio will make you cry and release things you didn't even know were there.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+62 361 971 236",
      email: "info@theyogabarn.com",
      website: "https://www.theyogabarn.com",
    },
  },

  // ==========================================
  // SOUTH EAST ASIA — PHILIPPINES
  // ==========================================
  {
    id: "the-farm-san-benito",
    slug: "the-farm-at-san-benito",
    name: "The Farm at San Benito",
    tagline: "Holistic Medical Wellness Sanctuary Amidst 52 Hectares of Tropical Forest",
    description: "Located 90 minutes south of Manila in Lipa City, The Farm at San Benito is an eco-luxury medical retreat resort specializing in natural detoxification, cancer supportive care, cellular renewal, and pain management supervised by integrative medical doctors and licensed therapists.",
    location: {
      city: "Batangas",
      region: "Lipa City",
      country: "Philippines",
      continent: "Asia-Pacific",
      lat: 13.9419,
      lng: 121.1631,
    },
    heroImage: "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-programs-opt.jpg",
    gallery: [
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-programs-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-suites-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-restaurant-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-mindful-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-facilities-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2022/09/palmera-suites.jpg",
    ],
    badgeTier: "featured",
    rating: 4.88,
    reviewCount: 312,
    pricing: {
      minPricePerNight: 350,
      currency: "USD",
      pricingTier: "accessible",
      packageOptions: [
        {
          name: "Holistic Detox Cleanse (6 Days)",
          days: 6,
          price: 2400,
          description: "Doctor consultation, live blood analysis, colon hydrotherapy, organic vegan meals, and daily yoga.",
        },
      ],
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress",
    ],
    modalities: [
      "Hydrotherapy",
      "Acupuncture",
      "IV Therapy",
      "Live Blood Analysis",
      "Sound Healing",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table",
    ],
    setting: "Lush Rainforest",
    supervision: "Medical Doctor Led",
    amenities: [
      "Holistic Sanctuary Treatment Complex",
      "Acqua Hydrotherapy Sanctuary",
      "ALIVE! Vegan Restaurant (Michelin recognized)",
      "Organic Coconut Plantation",
      "Peacock Gardens & Lagoons",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Power Walk through Coconut Plantations" },
      { time: "08:30", activity: "Living Vegan Breakfast & Cold Pressed Juices" },
      { time: "10:30", activity: "Integrative Doctor Consultation & Live Blood Analysis" },
      { time: "12:30", activity: "Raw Food Farm-to-Table Lunch" },
      { time: "15:00", activity: "Chlorophyll Colon Hydrotherapy Session" },
      { time: "17:00", activity: "Tibetan Singing Bowl Meditation" },
      { time: "19:00", activity: "Dinner & Wellness Lecture" },
    ],
    expertTeam: [
      {
        name: "Dr. Marian Alonzo, MD",
        role: "Medical Chief of Integrative Health",
        credentials: "MD, Homeopathy & Anthroposophic Medicine Certified",
        avatar: "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-8",
        author: "Amanda C.",
        date: "December 2025",
        rating: 5,
        title: "Incredible value and true medical depth",
        comment: "The food at ALIVE! restaurant blew me away. I never imagined 100% plant-based raw food could taste like fine dining.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+63 2 8884 8074",
      email: "info@thefarm.com.ph",
      website: "https://thefarmatsanbenito.com",
    },
  },

  // ==========================================
  // SOUTH EAST ASIA — MALAYSIA
  // ==========================================
  {
    id: "banjaran-hotsprings-malaysia",
    slug: "the-banjaran-hotsprings-retreat",
    name: "The Banjaran Hotsprings Retreat",
    tagline: "Natural Geothermal Hot Springs Sanctuary Nested in 260-Million-Year-Old Limestone Hills",
    description: "Tucked into a valley of dramatic 260-million-year-old limestone hills in Ipoh, The Banjaran is Malaysia’s premier luxury wellness sanctuary. Built over natural geothermal hot spring lakes, it offers thermal steam caves, an ice bath, crystal meditation caves, and indigenous Malay, Chinese, and Ayurvedic healing treatments.",
    location: {
      city: "Ipoh",
      region: "Perak",
      country: "Malaysia",
      continent: "Asia-Pacific",
      lat: 4.6295,
      lng: 101.1558,
    },
    heroImage: "https://image-tc.galaxy.tf/wijpeg-62js1kj84woiwc1xy9aiy238y/the-banjaran-pool.jpg",
    gallery: [
      "https://image-tc.galaxy.tf/wijpeg-62js1kj84woiwc1xy9aiy238y/the-banjaran-pool.jpg",
      "https://image-tc.galaxy.tf/wijpeg-djjqlwjaqahptu9rlxhx4uzhu/ps-16732.jpg",
      "https://image-tc.galaxy.tf/wijpeg-8dxo68y6s7z8fk9qsk3liszni/ps-17627.jpg",
      "https://image-tc.galaxy.tf/wijpeg-c5hwi0tmict2bnkgm5572d5il/lake-villa-bedroom_standard.jpg?crop=109%2C0%2C1763%2C1322&width=800",
      "https://image-tc.galaxy.tf/wijpeg-85m2bfkzc5cxbrcplg14ohphr/water-villa-private-terrace-lake-view_standard.jpg?crop=112%2C0%2C1777%2C1333&width=800",
      "https://image-tc.galaxy.tf/wijpeg-4uowqhq6oy1gw6e27r0n0lu7y/garden-villa_standard.jpg?crop=108%2C0%2C1765%2C1324&width=800",
    ],
    badgeTier: "verified",
    rating: 4.94,
    reviewCount: 278,
    pricing: {
      minPricePerNight: 330,
      currency: "USD",
      pricingTier: "moderate",
      packageOptions: [
        {
          name: "Geothermal Rejuvenation (3 Nights)",
          days: 3,
          price: 1250,
          description: "Private garden villa with geothermal dipping pool, thermal steam cave session, Malay Urut massage, and organic breakfast.",
        },
      ],
    },
    primaryGoals: [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Hydrotherapy",
      "Contrast Therapy",
      "Ayurvedic Massage",
      "Sound Healing",
      "Forest Bathing",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan",
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "Natural Geothermal Dipping Pools (38-42°C)",
      "Thermal Steam Cave & Crystal Meditation Cave",
      "Ice Bath & Freezing Water Dipping Pool",
      "Jeff's Cellar (Fine dining inside natural cave)",
      "Garra Rufa Doctor Fish Pool",
    ],
    dailySchedule: [
      { time: "07:30", activity: "Morning Qi Gong on Lake Deck Overlooking Limestone Cliffs" },
      { time: "08:45", activity: "Fresh Tropical Fruits & Organic Breakfast at The Pomelo" },
      { time: "10:30", activity: "Thermal Steam Cave Bathing & Contrast Cold Plunge" },
      { time: "13:00", activity: "Chef-Curated Organic Wellness Lunch" },
      { time: "15:00", activity: "Traditional Malay Urut Healing Massage with Herbal Oils" },
      { time: "17:30", activity: "Silent Meditation in the Natural Amethyst Crystal Cave" },
      { time: "19:30", activity: "Dinner in the Subterranean Limestone Chamber of Jeff's Cellar" },
    ],
    expertTeam: [
      {
        name: "Dr. Aris Ramli",
        role: "Lead Holistic Practitioner",
        credentials: "Master of Traditional Malay Medicine (Ramuan) & Hydrotherapy",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "bj-m1",
        author: "Nigel K.",
        date: "November 2025",
        rating: 5,
        title: "Bathing in geothermal water surrounded by prehistoric cliffs",
        comment: "The thermal steam cave feels like a spiritual sanctuary. Having dinner in Jeff's Cellar inside a natural cave is an experience of a lifetime.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+60 5 210 7777",
      email: "tbhr.reservations@sunwayhotels.com",
      website: "https://www.sunwayhotels.com/the-banjaran",
    },
  },

  // ==========================================
  // SOUTH EAST ASIA — VIETNAM
  // ==========================================
  {
    id: "tia-wellness-vietnam",
    slug: "tia-wellness-resort-da-nang",
    name: "TIA Wellness Resort",
    tagline: "Beachfront All-Inclusive Holistic Wellness & Breathwork Sanctuary in Da Nang",
    description: "Positioned directly on My Khe Beach in Da Nang, TIA Wellness Resort redefines luxury travel with an all-inclusive wellness concept. Every guest receives guaranteed daily spa treatments, nervous system breathwork classes, and plant-based fine dining across private pool villas.",
    location: {
      city: "Da Nang",
      region: "Central Coast",
      country: "Vietnam",
      continent: "Asia-Pacific",
      lat: 16.0354,
      lng: 108.2482,
    },
    heroImage: "https://tiawellnessresort.com/wp-content/uploads/2026/02/TIA-Wellness-Resort.webp",
    gallery: [
      "https://tiawellnessresort.com/wp-content/uploads/2026/02/TIA-Wellness-Resort.webp",
      "https://tiawellnessresort.com/wp-content/uploads/2026/03/TIA-BEACH-LIVING-3.webp",
      "https://tiawellnessresort.com/wp-content/uploads/2026/03/TIA-WELLNESS-CENTRE-22.webp",
      "https://tiawellnessresort.com/wp-content/uploads/2026/01/Retreat-Inclusive.jpg",
      "https://tiawellnessresort.com/wp-content/uploads/2026/03/BANNER-YOUTUBE-for-WEBSITE-TIA-1.webp",
      "https://tiawellnessresort.com/wp-content/uploads/2026/07/LOGO-AWARDS-of-TIA-WELLNESS-RESORT-300x119.webp",
    ],
    badgeTier: "verified",
    rating: 4.92,
    reviewCount: 185,
    pricing: {
      minPricePerNight: 360,
      currency: "USD",
      pricingTier: "moderate",
      packageOptions: [
        {
          name: "Body & Mind Cleanse Retreat (4 Nights)",
          days: 4,
          price: 1850,
          description: "Private pool villa, 2 customized spa treatments daily, somatic breathwork, intermittent fasting coaching, and sound healing.",
        },
      ],
    },
    primaryGoals: [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Sound Healing",
      "Reiki",
      "Acupressure",
      "Somatic Release",
      "Aerial Flow Therapy",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Master Holistic Healers",
    amenities: [
      "Private Pool in Every Villa",
      "Infinity Beachfront Pool",
      "Holistic Wellness Centre with Waterfall Gardens",
      "Aerial Yoga Shala",
    ],
    dailySchedule: [
      { time: "07:30", activity: "Vagus Nerve Morning Breathwork on the Beach" },
      { time: "08:45", activity: "Plant-Powered Breakfast (Anytime, Anywhere service)" },
      { time: "10:30", activity: "Signature Aerial Flow Therapy for Spinal Decompression" },
      { time: "13:00", activity: "Gourmet Cleanse Lunch with Microgreens" },
      { time: "15:00", activity: "Reiki Energy Balancing & Vietnamese Herbal Compress" },
      { time: "17:30", activity: "Tibetan Singing Bowl Sunset Meditation" },
      { time: "19:30", activity: "Plant-Based Chef's Degustation Dinner" },
    ],
    expertTeam: [
      {
        name: "Linh Nguyen",
        role: "Head of Somatic & Energy Practices",
        credentials: "Certified Reiki Master & Vagus Nerve Breathwork Specialist",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "tia-1",
        author: "Sarah B.",
        date: "January 2026",
        rating: 5,
        title: "Two treatments every single day in your own pool villa",
        comment: "The breathwork sessions completely regulated my nervous system. Being able to have breakfast on the beach at any hour was true freedom.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+84 236 3967 999",
      email: "reservation@tiawellnessresort.com",
      website: "https://tiawellnessresort.com",
    },
  },

  {
    id: "alba-wellness-vietnam",
    slug: "alba-wellness-valley-hue",
    name: "Alba Wellness Valley by Fusion",
    tagline: "Japanese Onsen Journey & Natural Hot Springs Valley in the Foothills of Hue",
    description: "Located 30km northwest of Hue at the base of the Truong Son mountains, Alba Wellness Valley is built around the natural mineral-rich Thanh Tan hot springs. It features an authentic 8-step Japanese onsen, detox programs, meditation, and zip-line forest therapy.",
    location: {
      city: "Hue",
      region: "Phong Dien",
      country: "Vietnam",
      continent: "Asia-Pacific",
      lat: 16.5412,
      lng: 107.4123,
    },
    heroImage: "https://fusion-collection.com/albawellnessvalleyhue/wp-content/uploads/2025/11/DJI_20240507062002_0088_D-scaled.jpg",
    gallery: [
      "https://fusion-collection.com/albawellnessvalleyhue/wp-content/uploads/2025/11/DJI_20240507062002_0088_D-scaled.jpg",
      "https://fusion-collection.com/albawellnessvalleyhue/wp-content/uploads/2025/09/DJI_20240506073250_0040_D-scaled.jpg",
      "https://fusion-collection.com/albawellnessvalleyhue/wp-content/uploads/2025/07/pexels-vietnam-photographer-27418893-scaled.jpg",
      "https://fusion-collection.com/albawellnessvalleyhue/wp-content/uploads/2025/07/pexels-vietnam-photographer-27418873-scaled.jpg",
      "https://fusion-collection.com/albawellnessvalleyhue/wp-content/uploads/2026/08/summer-campaign-aug-2026.jpg",
      "https://fusion-collection.com/albawellnessvalleyhue/wp-content/uploads/2026/03/Thanh-Tan-Pricelist-Day-pas-scaled.jpg",
    ],
    badgeTier: "claimed",
    rating: 4.86,
    reviewCount: 142,
    pricing: {
      minPricePerNight: 190,
      currency: "USD",
      pricingTier: "accessible",
      packageOptions: [
        {
          name: "Detox Yourself Retreat (5 Days)",
          days: 5,
          price: 950,
          description: "Daily Japanese onsen circuit, mineral thermal pool bathing, organic juicing, detox massage, and cycling.",
        },
      ],
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Hydrotherapy",
      "Forest Bathing",
      "Japanese Onsen",
      "Reflexology",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Master Holistic Healers",
    amenities: [
      "Natural Mineral Hot Springs (68°C at source)",
      "Traditional 8-Step Japanese Onsen",
      "Forest Zipline & Highwire Course",
      "Organic Farm & Craft Village",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Morning Tai Chi by the Natural Stream" },
      { time: "08:30", activity: "Organic Valley Harvest Breakfast & Detox Juice" },
      { time: "10:00", activity: "8-Step Japanese Mineral Onsen Experience" },
      { time: "12:30", activity: "Light Healthy Vietnamese Lunch at Madame Chau" },
      { time: "15:00", activity: "Forest Bathing & Mineral Mud Wrap" },
      { time: "17:30", activity: "Zen Meditation & Sound Bowls" },
      { time: "19:00", activity: "Wholesome Dinner & Herbal Tea" },
    ],
    expertTeam: [
      {
        name: "Kenji Sato",
        role: "Onsen Master & Hydrotherapy Director",
        credentials: "Certified Japanese Onsen Specialist (Beppu, Japan)",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "ab-1",
        author: "Pascal D.",
        date: "December 2025",
        rating: 5,
        title: "Incredible natural hot springs in Vietnam",
        comment: "The natural onsen water is so therapeutic for arthritis and sore muscles. A hidden treasure in the mountains of Hue.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+84 234 3552 222",
      email: "reservation@albawellnessvalley.com",
      website: "https://fusion-collection.com/albawellnessvalleyhue/",
    },
  },

  // ==========================================
  // SOUTH EAST ASIA — CAMBODIA
  // ==========================================
  {
    id: "song-saa-cambodia",
    slug: "song-saa-private-island",
    name: "Song Saa Private Island",
    tagline: "Ultra-Luxury Regenerative Sanctuary & Marine Conservation in the Koh Rong Archipelago",
    description: "Spanning two virgin islands in the Koh Rong Archipelago, Song Saa is Cambodia's premier private island sanctuary. Built on principles of regenerative luxury, its nature-led Saraan Sanctuaries draw on ancient Khmer blessing rituals, marine-based wellness, bio-reserve marine protection, and Buddhist water blessings.",
    location: {
      city: "Koh Rong Archipelago",
      region: "Sihanoukville",
      country: "Cambodia",
      continent: "Asia-Pacific",
      lat: 10.6125,
      lng: 103.2842,
    },
    heroImage: "https://cdn.prod.website-files.com/68109684a0f21d056ef61bba/6826faae1435c4184f79a07d_song_saa_collective-about-story-1.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/68109684a0f21d056ef61bba/6826faae1435c4184f79a07d_song_saa_collective-about-story-1.jpg",
      "https://cdn.prod.website-files.com/68109684a0f21d056ef61bba/6aab734605986420ce7bf49a_video_a.jpg",
      "https://cdn.prod.website-files.com/68109684a0f21d056ef61bba/6aab9e3023a7b38046c42d30_video_b1.jpg",
      "https://cdn.prod.website-files.com/68109684a0f21d056ef61bba/6810c4eb54eebb1d51488a37_song_saa_collective-home-sustainability-1.jpg",
      "https://cdn.prod.website-files.com/68109684a0f21d056ef61bba/681dc70dcd05763e5b71211d_song_saa_collective-properties-landing.jpg",
      "https://cdn.prod.website-files.com/67cfeae2a51c95bd45560738/69aa683abb97c8ed49d76652_SSPI%20All%20Inclusive.png",
    ],
    badgeTier: "featured",
    rating: 4.96,
    reviewCount: 128,
    pricing: {
      minPricePerNight: 950,
      currency: "USD",
      pricingTier: "ultra-luxury",
      packageOptions: [
        {
          name: "All-Inclusive Khmer Rejuvenation (5 Nights)",
          days: 5,
          price: 5200,
          description: "All-inclusive overwater villa, private boat transfers, daily spa rituals, floating sound healing, and marine reserve snorkeling.",
        },
      ],
    },
    primaryGoals: [
      "Spiritual Awakening",
      "Emotional & Trauma Healing",
      "Burnout & Stress",
    ],
    modalities: [
      "Sound Healing",
      "Floating Sound Baths",
      "Forest Bathing",
      "Khmer Herbal Steam",
      "Shirodhara",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Master Holistic Healers",
    amenities: [
      "Private Overwater & Ocean Villas",
      "Marine Protected Coral Reef Sanctuary",
      "Floating Yoga Pavilions",
      "Subterranean Wine Cave & Vista Restaurant",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Sunrise Yoga on Overwater Pavilion" },
      { time: "08:30", activity: "All-Inclusive Tropical Island Breakfast" },
      { time: "10:30", activity: "Coral Reef Conservation Snorkel with Marine Biologist" },
      { time: "13:00", activity: "Catch-of-the-Day or Plant-Based Lunch" },
      { time: "15:30", activity: "Khmer Herbal Steam & Traditional Healing Scrub" },
      { time: "18:00", activity: "Floating Sound Healing Session in the Lagoon" },
      { time: "19:30", activity: "Candlelit Overwater Dinner Under the Stars" },
    ],
    expertTeam: [
      {
        name: "Melita Koulmandas",
        role: "Co-Founder & Creative Director",
        credentials: "Leader in Regenerative Island Hospitality & Marine Conservation",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "ss-1",
        author: "Julian G.",
        date: "January 2026",
        rating: 5,
        title: "The floating sound bath in the ocean is magic",
        comment: "Floating in the sea at twilight while singing bowls vibrate around you is a memory I will cherish forever.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+855 23 886 750",
      email: "reservations@songsaa.com",
      website: "https://www.songsaa.com",
    },
  },

  {
    id: "navutu-dreams-cambodia",
    slug: "navutu-dreams-siem-reap",
    name: "Navutu Dreams Resort & Wellness Retreat",
    tagline: "Boutique Wellness Sanctuary for Yoga, TCM & Detox Near Angkor Wat",
    description: "Located in the quiet countryside just minutes from the temples of Angkor, Navutu Dreams is Cambodia’s premier boutique wellness retreat. Featuring three swimming pools, tropical gardens, an on-site Ayurvedic & Traditional Chinese Medicine clinic, and comprehensive detox programs.",
    location: {
      city: "Siem Reap",
      region: "Salakamroeuk",
      country: "Cambodia",
      continent: "Asia-Pacific",
      lat: 13.3456,
      lng: 103.8678,
    },
    heroImage: "https://navuturesorts.com/wp-content/uploads/2025/09/navutu-dreams-swimming-pool-and-grounds-2.jpg",
    gallery: [
      "https://navuturesorts.com/wp-content/uploads/2025/09/navutu-dreams-swimming-pool-and-grounds-2.jpg",
      "https://navuturesorts.com/wp-content/uploads/2025/07/navutu-dreams-the-grand-suite-2.webp",
      "https://navuturesorts.com/wp-content/uploads/2025/07/the-grand-tour-family-1.webp",
      "https://navuturesorts.com/wp-content/uploads/2025/07/the-grand-tour-1.webp",
      "https://navuturesorts.com/wp-content/uploads/2025/07/navutu-dreams-explorer-double-room-2.webp",
      "https://navuturesorts.com/wp-content/uploads/2025/07/yoga-navutu-dreams-swimming-pool-1-1.webp",
    ],
    badgeTier: "claimed",
    rating: 4.87,
    reviewCount: 162,
    pricing: {
      minPricePerNight: 140,
      currency: "USD",
      pricingTier: "accessible",
      packageOptions: [
        {
          name: "Angkor Rebalance & Yoga (4 Nights)",
          days: 4,
          price: 880,
          description: "Private yoga sessions, acupuncture, herbal scrub, organic vegetarian meals, and guided sunrise temple meditation.",
        },
      ],
    },
    primaryGoals: [
      "Mindfulness & Meditation",
      "Detox & Weight Loss",
      "Spiritual Awakening",
    ],
    modalities: [
      "Acupuncture",
      "Sound Healing",
      "Ayurvedic Massage",
      "Hydrotherapy",
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "3 Outdoor Swimming Pools (Freshwater & Saltwater)",
      "Tropical Spa Treatment Pavilions",
      "Yoga Shala Surrounded by Palms",
      "Niam Niam Organic Restaurant",
    ],
    dailySchedule: [
      { time: "06:00", activity: "Optional Sunrise Silent Meditation at Angkor Wat" },
      { time: "08:30", activity: "Tropical Fruit Bowl & Lemongrass Infused Breakfast" },
      { time: "10:30", activity: "Traditional Chinese Medicine Pulse & Acupuncture" },
      { time: "13:00", activity: "Nutrient-Dense Cambodian Plant-Based Lunch" },
      { time: "15:30", activity: "Herbal Oil Body Polish & Aromatherapy" },
      { time: "17:30", activity: "Restorative Yin Yoga in Open Shala" },
      { time: "19:30", activity: "Dinner at Niam Niam" },
    ],
    expertTeam: [
      {
        name: "Francois Guiraud",
        role: "Wellness Director",
        credentials: "Acupuncturist & TCM Doctor (Beijing Institute of TCM)",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "nd-1",
        author: "Sophie T.",
        date: "February 2026",
        rating: 5,
        title: "A calm sanctuary after exploring Angkor",
        comment: "The acupuncture treatments helped my chronic migraines immediately. The staff treated me like family.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+855 63 966 100",
      email: "reservationsdreams@navuturesorts.com",
      website: "https://navuturesorts.com/",
    },
  },

  // ==========================================
  // GLOBAL BENCHMARKS (EUROPE & NORTH AMERICA)
  // ==========================================
  {
    id: "clp-switzerland",
    slug: "clinique-la-prairie",
    name: "Clinique La Prairie",
    tagline: "Pioneering Medical Longevity & Cellular Rejuvenation on Lake Geneva",
    description: "Nestled between the Swiss Alps and Lake Geneva, Clinique La Prairie combines medical excellence with luxury hospitality. Renowned for its world-famous Revitalization program and cutting-edge longevity diagnostics, the clinic unites 50 medical specialists to optimize immune health, cellular longevity, and biological age reversal.",
    location: {
      city: "Montreux",
      region: "Vaud",
      country: "Switzerland",
      continent: "Europe",
      lat: 46.4312,
      lng: 6.9107,
    },
    heroImage: "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Royal-Suite-Clinique-La-Prairie-Montreux.jpg",
    gallery: [
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Royal-Suite-Clinique-La-Prairie-Montreux.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Imperial-Suite-Clinique-La-Prairie-Montreux.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Lake-Suite-Clinique-La-Prairie-Montreux-3.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Niehans-Suite-Clinique-La-Prairie-Montreux.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Executive-Suite-Clinique-La-Prairie-Montreux.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2023/11/pexels-drone-trotter-6678097-scaled.jpg",
    ],
    badgeTier: "featured",
    rating: 4.96,
    reviewCount: 142,
    pricing: {
      minPricePerNight: 2450,
      currency: "CHF",
      pricingTier: "ultra-luxury",
      packageOptions: [
        {
          name: "Revitalization Premium (7 Days)",
          days: 7,
          price: 26800,
          description: "Comprehensive DNA sequencing, cellular extract therapy, heavy metal detox, hyperbaric oxygen, and tailored longevity diet.",
        },
      ],
    },
    primaryGoals: [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Detox & Weight Loss",
    ],
    modalities: [
      "Hyperbaric Oxygen",
      "Cryotherapy",
      "IV Therapy",
      "Cellular Genomics",
      "Hydrotherapy",
      "Acupuncture",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free",
    ],
    setting: "Lakefront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Medical Diagnostic Lab",
      "Thermal Hydrotherapy Pools",
      "Cryo Chamber",
      "Private Spa Suites",
      "Private Helipad",
    ],
    dailySchedule: [
      { time: "07:30", activity: "Gentle Alpine Awakening & Breathwork by the Lake" },
      { time: "08:30", activity: "Tailored Nutrient Breakfast & Cellular Supplement Protocol" },
      { time: "10:00", activity: "Medical Consultations & Biomarker Diagnostics" },
      { time: "12:30", activity: "Anti-Inflammatory Gourmet Lunch" },
      { time: "14:30", activity: "Hyperbaric Oxygen Therapy & Contrast Hydro-Thermal Circuit" },
      { time: "17:00", activity: "Restorative Yoga & Sound Frequency Healing" },
      { time: "19:30", activity: "Longevity Dinner & Guided Sleep Meditation" },
    ],
    expertTeam: [
      {
        name: "Dr. Adrian Heini, MD",
        role: "Head of Preventive Medicine",
        credentials: "MD, Board-Certified Internal Medicine & Clinical Nutrition",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Marcus V.",
        date: "October 2025",
        rating: 5,
        title: "Life-changing diagnostic depth and bespoke recovery",
        comment: "The medical precision here is unmatched anywhere in the world. Identified underlying stressors two top clinics missed.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+41 21 989 33 11",
      email: "concierge@cliniquelaprairie.com",
      website: "https://cliniquelaprairie.com",
    },
  },

  {
    id: "sha-wellness-spain",
    slug: "sha-wellness-clinic",
    name: "SHA Wellness Clinic",
    tagline: "World-Renowned Pioneer in Integrative Health & Longevity Medicine",
    description: "Positioned on the scenic cliffs of Sierra Helada overlooking the Mediterranean Sea, SHA Wellness Clinic blends ancient Eastern philosophies with state-of-the-art Western medicine. With dedicated units in Cognitive Health, Healthy Aging, and Metabolic Recovery.",
    location: {
      city: "Alicante",
      region: "Costa Blanca",
      country: "Spain",
      continent: "Europe",
      lat: 38.5719,
      lng: -0.0768,
    },
    heroImage: "https://shawellness.com/wp-content/uploads/2026/07/51349f9eb7563c6092eff3dc9a402b333c59d224-1-scaled-1.jpg",
    gallery: [
      "https://shawellness.com/wp-content/uploads/2026/07/51349f9eb7563c6092eff3dc9a402b333c59d224-1-scaled-1.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Rebalance-opt.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Executive-opt.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Longevity-opt.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Intensive-opt.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Detox-opt.jpg",
    ],
    badgeTier: "verified",
    rating: 4.94,
    reviewCount: 189,
    pricing: {
      minPricePerNight: 980,
      currency: "EUR",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Optimal Weight & Detox (7 Days)",
          days: 7,
          price: 6900,
          description: "Metabolic profiling, colon hydrotherapy, pressotherapy, acupuncture, and customized SHA macrobiotic diet plan.",
        },
      ],
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress",
    ],
    modalities: [
      "Cryotherapy",
      "Hyperbaric Oxygen",
      "Acupuncture",
      "IV Therapy",
      "Hydrotherapy",
    ],
    dietary: [
      "Anti-Inflammatory",
      "Organic Farm-to-Table",
      "Gluten-Free",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Hydrotherapy Circuit & Flotarium",
      "Cryotherapy Chamber",
      "Infinity Rooftop Pool",
      "Cognitive Stimulation Lab",
    ],
    dailySchedule: [
      { time: "07:30", activity: "Sunrise Coastal Walk & Qi Gong on Helipad" },
      { time: "08:45", activity: "Personalized SHA Nutrition Breakfast (Kushi Macrobiotic)" },
      { time: "10:30", activity: "Medical Ozone & IV Micronutrient Infusion" },
      { time: "13:00", activity: "Chef-Prepared Therapeutic Lunch" },
      { time: "15:00", activity: "Cryotherapy Session & Hydrotherapy Flotarium" },
      { time: "17:30", activity: "Healthy Cooking Academy Masterclass" },
      { time: "19:30", activity: "Dinner & Evening Sound Therapy" },
    ],
    expertTeam: [
      {
        name: "Dr. Vicente Mera",
        role: "Head of Anti-Aging & Genomic Medicine",
        credentials: "European Award for Medicine in Anti-Aging (2021)",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-4",
        author: "Julian T.",
        date: "November 2025",
        rating: 5,
        title: "Metabolic reset that changed my lifestyle",
        comment: "The medical staff is extraordinary, and the architectural design makes every day feel like a movie.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+34 966 81 11 99",
      email: "info@shawellness.com",
      website: "https://shawellness.com",
    },
  },

  {
    id: "ananda-himalayas",
    slug: "ananda-in-the-himalayas",
    name: "Ananda in the Himalayas",
    tagline: "Authentic Ayurvedic Panchakarma & Vedanta Philosophy in a Maharaja's Palace",
    description: "Perched on a 100-acre palace estate surrounded by Sal forests with panoramic vistas of the Ganges and Himalayan foothills, Ananda is the gold standard for traditional Ayurveda, Panchakarma detox, and classical Hatha Yoga.",
    location: {
      city: "Rishikesh",
      region: "Uttarakhand",
      country: "India",
      continent: "Asia-Pacific",
      lat: 30.1254,
      lng: 78.3182,
    },
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/0/05/Viceregal_Palace%2C_Ananda_-_In_the_Himalayas%2C_Narendra_Nagar%2C_Uttarakhand.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Viceregal_Palace%2C_Ananda_-_In_the_Himalayas%2C_Narendra_Nagar%2C_Uttarakhand.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/27/The_lounge_at_Ananda_-_In_the_Himalayas_spa%2C_Narendra_Nagar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Himalayan_view_from_Ananda_spa%2C_Narendra_Nagar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Waterfalls_and_steps_at_Ananda_spa_gardens.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/A_Bathtub_at_Ananda_spa.jpg",
      "https://scdn.aro.ie/Sites/50/anandaspa/uploads/images/PanelImages/General/Ayurvedic_Rejuvenation_1.jpg",
    ],
    badgeTier: "verified",
    rating: 4.97,
    reviewCount: 264,
    pricing: {
      minPricePerNight: 850,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Authentic Panchakarma (14 Nights)",
          days: 14,
          price: 11200,
          description: "Full traditional Ayurvedic detoxification, daily Abhyanga, Shirodhara, herbal steam, and personalized Dosha cuisine.",
        },
      ],
    },
    primaryGoals: [
      "Ayurveda & Panchakarma",
      "Burnout & Stress",
      "Spiritual Awakening",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Ayurvedic Massage",
      "Forest Bathing",
      "Sound Healing",
      "Pranayama",
      "Hydrotherapy",
    ],
    dietary: [
      "Ayurvedic",
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Master Holistic Healers",
    amenities: [
      "Palace Spa & Hydrotherapy Facilities",
      "Open-Air Yoga Pavilions",
      "Private Sal Forest Hiking Trails",
      "Meditation Shala",
    ],
    dailySchedule: [
      { time: "06:00", activity: "Ganges Valley Sunrise Hatha Yoga" },
      { time: "07:30", activity: "Pranayama & Himalayan Breath Mastery" },
      { time: "08:30", activity: "Ayurvedic Dosha Breakfast" },
      { time: "10:30", activity: "Four-Hand Abhyanga & Warm Herbal Oil Shirodhara" },
      { time: "13:00", activity: "Organic Sattvic Lunch" },
      { time: "16:00", activity: "Vedanta Discourse & Guided Philosophy Reflection" },
      { time: "17:30", activity: "Forest Meditation in Himalayan Sal Woodlands" },
      { time: "19:30", activity: "Evening Ayurvedic Dinner & Healing Herb Infusions" },
    ],
    expertTeam: [
      {
        name: "Dr. Chandan Rawat",
        role: "Chief Ayurvedic Physician (BAMS)",
        credentials: "25+ Years Experience in Panchakarma Diagnostics",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-5",
        author: "Devon M.",
        date: "January 2026",
        rating: 5,
        title: "A spiritual home above the clouds",
        comment: "The pulse diagnosis was so accurate it was uncanny. After 14 days of Panchakarma, my chronic fatigue of 6 years vanished.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+91 1378 227 500",
      email: "reservations@anandaspa.com",
      website: "https://anandaspa.com",
    },
  },

  {
    id: "mii-amo-sedona",
    slug: "mii-amo-sedona",
    name: "Mii Amo",
    tagline: "Transformative Spiritual & Mind-Body Retreat in Sedona's Red Rock Vortex",
    description: "Tucked inside the sheer red rock walls of Boynton Canyon, Mii Amo is an intimate, destination spa renowned for connection, healing, and mindfulness. Known for its sacred Crystal Grotto, Native American wisdom, and personalized 'Journeys'.",
    location: {
      city: "Sedona",
      region: "Arizona",
      country: "United States",
      continent: "North America",
      lat: 34.9125,
      lng: -111.8496,
    },
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/6/69/Mii_amo.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Mii_amo.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Boynton_Canyon_Trail%2C_Sedona%2C_Arizona_-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Boynton_Canyon_Trail%2C_Sedona%2C_Arizona_-_panoramio_%289%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Boynton_Canyon_Trail%2C_Sedona%2C_Arizona_-_panoramio_%2822%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Boynton_Canyon_Trail%2C_Sedona%2C_Arizona_-_panoramio_%2839%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Boynton_Canyon_Trail%2C_Sedona%2C_Arizona_-_panoramio_%2840%29.jpg",
    ],
    badgeTier: "verified",
    rating: 4.91,
    reviewCount: 167,
    pricing: {
      minPricePerNight: 1650,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "All-Inclusive 4-Night Journey",
          days: 4,
          price: 6600,
          description: "Full lodging, all gourmet canyon dining, daily spa treatments, vortex meditation, and intuitive astrology consultation.",
        },
      ],
    },
    primaryGoals: [
      "Emotional & Trauma Healing",
      "Spiritual Awakening",
      "Burnout & Stress",
    ],
    modalities: [
      "Sound Healing",
      "Acupuncture",
      "Somatic Release",
      "Forest Bathing",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan",
    ],
    setting: "Desert Oasis",
    supervision: "Master Holistic Healers",
    amenities: [
      "Crystal Grotto Sanctuary",
      "Boynton Canyon Private Trail Access",
      "Hummingbird Signature Restaurant",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Vortex Morning Meditation in Crystal Grotto" },
      { time: "08:15", activity: "Fresh Canyon Harvest Breakfast" },
      { time: "09:30", activity: "Guided Red Rock Hiking & Nature Attunement" },
      { time: "11:45", activity: "Red Clay & Prickly Pear Purification Body Wrap" },
      { time: "13:00", activity: "Mindful Culinary Lunch" },
      { time: "17:30", activity: "Sunset Sound Bath with Alchemy Quartz Bowls" },
      { time: "19:30", activity: "Starlight Dinner at Hummingbird" },
    ],
    expertTeam: [
      {
        name: "Raven Lightfoot",
        role: "Lead Spiritual Guide",
        credentials: "Indigenous Wisdom Keeper & Master Sound Alchemist",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-6",
        author: "Sarah L.",
        date: "February 2026",
        rating: 5,
        title: "Healed a heart that felt broken for two years",
        comment: "The Crystal Grotto morning meditation opened tears I didn't know I was holding.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+1 844 993 9518",
      email: "concierge@miiamo.com",
      website: "https://miiamo.com",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — INDIA
  // ==========================================
  {
    id: "soukya-bangalore-india",
    slug: "soukya-international-holistic-health-centre",
    name: "Soukya International Holistic Health Centre",
    tagline: "Global Leader in Integrative Medicine, Homeopathy, Ayurveda & Naturopathy on 30 Organic Acres",
    description: "Founded by world-renowned holistic physician Dr. Issac Mathai, Soukya is a 30-acre certified organic holistic health sanctuary located in Whitefield, Bangalore. Having treated international royalty, global leaders, and discerning wellness travelers for over two decades, Soukya integrates Ayurveda, Naturopathy, Homeopathy, Yoga, and Acupuncture under strict medical supervision. Every patient receives a customized treatment protocol based on pulse diagnosis, constitutional assessment, and whole-person healing.",
    location: {
      city: "Bangalore",
      region: "Karnataka",
      country: "India",
      continent: "Asia-Pacific",
      lat: 13.0135,
      lng: 77.7816,
    },
    heroImage: "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-01.jpg",
    gallery: [
      "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-01.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/Entrance.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/home_slide_2.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-07.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/Yoga_Hall.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-19.jpg",
    ],
    badgeTier: "featured",
    rating: 4.96,
    reviewCount: 289,
    pricing: {
      minPricePerNight: 460,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "7-Night Comprehensive Medical Detox & Panchakarma",
          days: 7,
          price: 3450,
          description: "Doctor consultations, daily Ayurvedic treatments, personalized homeopathic medication, organic vegetarian meals, and therapeutic yoga.",
        },
        {
          name: "14-Night Chronic Ailment & Longevity Program",
          days: 14,
          price: 6800,
          description: "Deep tissue regeneration, dosha balancing, daily herbal therapies, specialized naturopathic hydrotherapy, and lifestyle medicine.",
        },
      ],
    },
    primaryGoals: [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress",
    ],
    modalities: [
      "Ayurvedic Massage",
      "Homeopathy",
      "Naturopathy",
      "Acupuncture",
      "Hydrotherapy",
      "Pranayama",
    ],
    dietary: [
      "Ayurvedic",
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
    ],
    setting: "Lush Rainforest",
    supervision: "Medical Doctor Led",
    amenities: [
      "30-Acre Certified Organic Farm & Medicinal Herb Garden",
      "Ayurvedic Pharmacy & Dispensary",
      "Dedicated Naturopathy Hydrotherapy Centre",
      "Open-Air Yoga & Meditation Pavilions",
      "Walking & Reflexology Footpaths",
    ],
    dailySchedule: [
      { time: "06:00", activity: "Morning Pranayama & Therapeutic Yoga" },
      { time: "07:30", activity: "Doctor Prescribed Herbal Concoctions & Organic Breakfast" },
      { time: "09:30", activity: "Primary Ayurvedic Therapy (Abhyanga / Shirodhara / Kizhi)" },
      { time: "12:30", activity: "Doctor-Prescribed Sattvic Lunch from the Organic Farm" },
      { time: "14:30", activity: "Naturopathic Hydrotherapy or Acupuncture Session" },
      { time: "16:30", activity: "Yoga Nidra & Guided Meditation" },
      { time: "18:00", activity: "Medical Consultation & Progress Review with Dr. Mathai" },
      { time: "19:30", activity: "Nourishing Light Dinner & Herbal Sleep Elixir" },
    ],
    expertTeam: [
      {
        name: "Dr. Issac Mathai, MD (Hom)",
        role: "Founder & Chairman",
        credentials: "Renowned Holistic Physician, 30+ Years Clinical Experience",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Dr. Sujatha Raman, BAMS",
        role: "Chief Ayurvedic Physician",
        credentials: "Gold Medalist Ayurvedic Medicine, Specialist in Panchakarma",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-soukya-1",
        author: "Camilla P.",
        date: "February 2026",
        rating: 5,
        title: "The gold standard of holistic medicine",
        comment: "The precision of the medical consultations and the purity of the 30-acre organic surroundings is unmatched. My persistent joint inflammation resolved completely within 10 days.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+91 80 7945 0000",
      email: "info@soukya.com",
      website: "https://soukya.com",
    },
  },

  {
    id: "six-senses-vana-india",
    slug: "six-senses-vana-dehradun",
    name: "Six Senses Vana",
    tagline: "Transformative Himalayan Wellness Sanctuary Integrating Ayurveda, Sowa Rigpa & Yoga",
    description: "Nestled in a dense Sal forest in the foothills of the Himalayas near Dehradun, Six Senses Vana is an internationally acclaimed destination sanctuary where wellness is a way of life. Vana is one of the few centers in the world offering authentic Sowa Rigpa (Traditional Tibetan Medicine) alongside Classical Ayurveda, Natural Healing Therapies, and high-level Yoga. Guests wear comfortable organic linen attire (Kurta pyjamas) provided by the retreat, removing social comparisons and fostering deep inner stillness.",
    location: {
      city: "Dehradun",
      region: "Uttarakhand",
      country: "India",
      continent: "Asia-Pacific",
      lat: 30.3444,
      lng: 78.0163,
    },
    heroImage: "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-hotel-exterior.jpg",
    gallery: [
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-hotel-exterior.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-ayurveda-center.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-temple-garden.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-entrance.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-anayu.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-library-sitting-area.jpg",
    ],
    badgeTier: "featured",
    rating: 4.98,
    reviewCount: 312,
    pricing: {
      minPricePerNight: 640,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Vana Signature Wellness (5 Nights)",
          days: 5,
          price: 3400,
          description: "Tibetan & Ayurvedic doctor intake, daily treatments, customized culinary nutrition, yoga, meditation, and mindful forest walks.",
        },
        {
          name: "Tibetan Sowa Rigpa Deep Rest (7 Nights)",
          days: 7,
          price: 4750,
          description: "Pulse diagnosis by Tibetan Amchis, Ku Nye massage, herbal compress treatments, sound baths, and nervous system restoration.",
        },
      ],
    },
    primaryGoals: [
      "Burnout & Stress",
      "Ayurveda & Panchakarma",
      "Mindfulness & Meditation",
      "Emotional & Trauma Healing",
    ],
    modalities: [
      "Ayurvedic Massage",
      "Sound Healing",
      "Hydrotherapy",
      "Acupuncture",
      "Forest Bathing",
      "Pranayama",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Ayurvedic",
      "Anti-Inflammatory",
      "Plant-Based/Vegan",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Medical Doctor Led",
    amenities: [
      "Sal Forest Immersion Trails",
      "Traditional Sowa Rigpa Tibetan Treatment Wing",
      "Watsu Thermal Pool & Hydrotherapy Pavilion",
      "Kila Activity & Sound Healing Temple",
      "Organic Apothecary & Herbarium",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Forest Pranayama & Morning Hatha Yoga" },
      { time: "08:00", activity: "Nourishing Sal Forest Breakfast" },
      { time: "10:00", activity: "Tibetan Ku Nye Herbal Therapy or Ayurvedic Shirodhara" },
      { time: "12:30", activity: "Curated Mindful Lunch with Local Seasonal Ingredients" },
      { time: "15:00", activity: "Watsu Aquatic Bodywork or Acupuncture" },
      { time: "17:00", activity: "Raag Therapy (Himalayan Sound Healing with Classical Flute)" },
      { time: "19:00", activity: "Community Dinner & Tibetan Philosophy Gathering" },
    ],
    expertTeam: [
      {
        name: "Dr. Dimple Sharma",
        role: "Head of Ayurveda",
        credentials: "BAMS, 17+ Years in Classical Ayurvedic Therapeutics",
        avatar: "https://images.unsplash.com/photo-1594824813501-48358473bbbe?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Amchi Lobsang",
        role: "Chief Tibetan Medicine Doctor",
        credentials: "Men-Tsee-Khang Certified Sowa Rigpa Master",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-vana-1",
        author: "Julian E.",
        date: "March 2026",
        rating: 5,
        title: "An otherworldly haven of peace",
        comment: "Wearing the linen kurta, walking through the Sal forest, and receiving Sowa Rigpa treatments reset my soul after a devastating year of corporate burnout.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+91 135 351 1111",
      email: "reservations-vana@sixsenses.com",
      website: "https://sixsenses.com/en/resorts/vana",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — JAPAN
  // ==========================================
  {
    id: "amanemu-japan",
    slug: "amanemu-ise-shima",
    name: "Amanemu",
    tagline: "Thermal Onsen Sanctuary & Kampo Herbal Healing Overlooking Ago Bay",
    description: "Set within the forested hills of Ise-Shima National Park overlooking calm Ago Bay, Amanemu is Aman's acclaimed hot spring resort embracing Japan's ancient bathing traditions. Centered around a 2,000-square-meter thermal onsen pavilion fed by mineral-rich natural springs, Amanemu offers customized holistic wellness programs combining Kampo (traditional Japanese herbal medicine), Zen meditation, Watsu aquatic therapy, and seasonal kaiseki nutrition.",
    location: {
      city: "Shima",
      region: "Mie Prefecture",
      country: "Japan",
      continent: "Asia-Pacific",
      lat: 34.3033,
      lng: 136.8378,
    },
    heroImage: "https://www.aman.com/sites/default/files/2022-08/Amanemu%20-%20Aerial.jpg",
    gallery: [
      "https://www.aman.com/sites/default/files/2022-08/Amanemu%20-%20Aerial.jpg",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2022-03/Amanemu%2C%20Japan%20-%20Resort%2C%20exterior%20detail%204.webp?itok=5wYFtOeQ",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2022-04/Amanemu%2C%20Japan%20-%20Resort%2C%20exterior%20detail.webp?itok=6S0Z0IdP",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2023-04/Amanemu%2C%20Japan%20-%20Mori_Suite.webp?itok=gHwBrwZ5",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2021-02/Amanemu_Gallery_10.webp?itok=F5Hab-kU",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2021-11/Amanemu%2C%20Japan%20-%20Resort%2C%20main%20property.webp?itok=m1pfgUC1",
    ],
    badgeTier: "verified",
    rating: 4.95,
    reviewCount: 198,
    pricing: {
      minPricePerNight: 1350,
      currency: "USD",
      pricingTier: "ultra-luxury",
      packageOptions: [
        {
          name: "Kampo Herbal & Onsen Immersion (3 Nights)",
          days: 3,
          price: 4400,
          description: "Kampo doctor assessment, daily private mineral onsen bathing, cedarwood body scrub, Zen meditation, and kaiseki dining.",
        },
        {
          name: "Restorative Longevity & Movement (5 Nights)",
          days: 5,
          price: 7200,
          description: "Full bio-energetic consultation, aquatic Watsu, myofascial release, forest bathing in Ise-Shima, and personalized herbal infusions.",
        },
      ],
    },
    primaryGoals: [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Hydrotherapy",
      "Acupuncture",
      "Forest Bathing",
      "Sound Healing",
      "Physiotherapy",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Master Holistic Healers",
    amenities: [
      "2,000 sqm Natural Mineral Hot Spring Onsen",
      "Private Onsen Pavilions with Daybeds",
      "Watsu Aquatic Therapy Pool",
      "Zen Meditation Yoga Studio",
      "Ago Bay Panoramic Deck",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Ago Bay Sunrise Mindful Breathing & Qigong" },
      { time: "08:30", activity: "Japanese Artisanal Breakfast with Fermented Probiotics" },
      { time: "10:30", activity: "Mineral-Rich Thermal Onsen Hydrotherapy & Salt Scrub" },
      { time: "13:00", activity: "Seasonal Kaiseki Lunch at The Restaurant" },
      { time: "15:00", activity: "Kampo Herbal Consultation & Personalized Shiatsu Bodywork" },
      { time: "17:30", activity: "Forest Bathing (Shinrin-yoku) in Ise-Shima Sanctuary" },
      { time: "19:30", activity: "Multi-Course Wellness Kaiseki Dinner" },
    ],
    expertTeam: [
      {
        name: "Dr. Kenji Takahashi",
        role: "Kampo Medicine Consultant",
        credentials: "Licensed Oriental Medicine Practitioner, 20+ Years Experience",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Reiko Mori",
        role: "Master Onsen & Spa Director",
        credentials: "CIBTAC Certified Hydrotherapist & Watsu Practitioner",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-amanemu-1",
        author: "Hiroshi T.",
        date: "January 2026",
        rating: 5,
        title: "The most restorative thermal springs in Japan",
        comment: "The natural onsen waters overlooking Ago Bay combined with the precision of the Kampo herbs healed both my body and mind.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+81 599 52 5000",
      email: "amanemu.res@aman.com",
      website: "https://aman.com/resorts/amanemu",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — CHINA
  // ==========================================
  {
    id: "sangha-retreat-octave-china",
    slug: "sangha-retreat-by-octave-institute",
    name: "Sangha Retreat by Octave Institute",
    tagline: "State-of-the-Art Medical Diagnostics & Traditional Chinese Medicine on Yangcheng Lake",
    description: "Set on the shores of Yangcheng Lake just outside Shanghai in Suzhou, Sangha Retreat by Octave Institute is a visionary 47-acre wellness sanctuary. Built with an investment of over $500 million, Sangha seamlessly unites cutting-edge Western clinical medicine—including comprehensive biochemical assessments, cardiopulmonary testing, and genetic screenings—with ancient Traditional Chinese Medicine (TCM), acupuncture, hydrotherapy, and mindful quantum living.",
    location: {
      city: "Suzhou",
      region: "Jiangsu",
      country: "China",
      continent: "Asia-Pacific",
      lat: 31.3967,
      lng: 120.7381,
    },
    heroImage: "https://octaveinstitute.com/wp-content/uploads/2023/10/Asset-6-oc.jpg",
    gallery: [
      "https://octaveinstitute.com/wp-content/uploads/2023/10/Asset-6-oc.jpg",
      "https://octaveinstitute.com/wp-content/uploads/2023/10/new-era.jpg",
      "https://octaveinstitute.com/wp-content/uploads/2023/11/Stewardship-of-Life-Journey-1.jpg",
      "https://octaveinstitute.com/wp-content/uploads/2023/11/Relational-Centre-1.jpg",
      "https://octaveinstitute.com/wp-content/uploads/2023/10/Organizational-Development-.jpg",
      "https://octaveinstitute.com/wp-content/uploads/2024/03/earth-banner-br-scaled.jpg",
    ],
    badgeTier: "featured",
    rating: 4.94,
    reviewCount: 215,
    pricing: {
      minPricePerNight: 750,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Comprehensive Medical & TCM Immersion (4 Nights)",
          days: 4,
          price: 3300,
          description: "Full bio-marker blood screen, cardiovascular stress test, TCM meridian analysis, acupuncture, moxibustion, and lakeview villa.",
        },
        {
          name: "Metabolic Reset & Longevity (7 Nights)",
          days: 7,
          price: 5600,
          description: "Complete functional medicine protocol, gut microbiome analysis, hyperbaric oxygen therapy, thermal hydrotherapy, and bespoke nutrition.",
        },
      ],
    },
    primaryGoals: [
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
      "Burnout & Stress",
    ],
    modalities: [
      "Acupuncture",
      "Hydrotherapy",
      "IV Therapy",
      "Cryotherapy",
      "Sound Healing",
      "Physiotherapy",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan",
    ],
    setting: "Lakefront",
    supervision: "Medical Doctor Led",
    amenities: [
      "200,000 sq ft AT-ONE Integrated Health Clinic",
      "12-Step Thermal Hydrotherapy Circuit",
      "Hyperbaric Oxygen & Cryotherapy Suites",
      "Subconscious Sound Meditation Dome",
      "Organic Farm & Culinary Lab",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Lakefront Tai Chi & Qigong with TCM Master" },
      { time: "08:15", activity: "Customized Metabolic Breakfast" },
      { time: "09:30", activity: "Comprehensive Clinical Diagnostics & Meridian Scan" },
      { time: "11:30", activity: "12-Step Hydrotherapy Circuit & Herbal Steam" },
      { time: "13:00", activity: "Medicinal Farm-to-Table Culinary Lunch" },
      { time: "15:00", activity: "Acupuncture, Moxibustion & Cupping Therapy" },
      { time: "17:30", activity: "Dome Sound Meditation & Breathwork" },
      { time: "19:30", activity: "Restorative Dinner & Evening Herbal Tonic" },
    ],
    expertTeam: [
      {
        name: "Dr. Lily Zhang, MD, PhD",
        role: "Medical Director",
        credentials: "Board Certified Internal Medicine & Clinical Functional Diagnostics",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Master Chen Wei",
        role: "Chief TCM Physician",
        credentials: "4th Generation TCM Practitioner, Acupuncturist & Herbalist",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-octave-1",
        author: "William K.",
        date: "February 2026",
        rating: 5,
        title: "The future of medicine and ancient wisdom combined",
        comment: "The diagnostic depth of the AT-ONE clinic gave me data no hospital in London ever provided. Combined with the TCM acupuncture, my chronic gut issues improved in 7 days.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+86 512 6788 1888",
      email: "reservations@livingoctave.com",
      website: "https://livingoctave.com",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — SOUTH KOREA
  // ==========================================
  {
    id: "healience-seonmaeul-korea",
    slug: "healience-seonmaeul-hongcheon",
    name: "Healience Seonmaeul",
    tagline: "South Korea's Foremost High-Altitude Digital Detox & Forest Healing Sanctuary",
    description: "Perched 250 meters above sea level on the tranquil slopes of Mt. Jongjasan in Gangwon Province, Healience Seonmaeul is South Korea's first certified wellness resort. Founded by renowned neuropsychiatrist Dr. Lee Si-hyung, Healience is intentionally engineered without mobile phone reception or Wi-Fi in guest quarters to enable complete neuro-restoration. The retreat's four core pillars—dietary habits, exercise habits, lifestyle rhythm, and mind control—guide guests toward lasting vitality.",
    location: {
      city: "Hongcheon",
      region: "Gangwon-do",
      country: "South Korea",
      continent: "Asia-Pacific",
      lat: 37.6972,
      lng: 127.8886,
    },
    heroImage: "https://img.healience.co.kr/upload/event/20260911/4658d38e-b1db-46a5-922f-ec680c2eebfd.jpg",
    gallery: [
      "https://img.healience.co.kr/upload/event/20260911/4658d38e-b1db-46a5-922f-ec680c2eebfd.jpg",
      "https://img.healience.co.kr/upload/event/20260831/16bd5dd1-6328-4630-8a3e-e2768830b420.jpg",
      "https://img.healience.co.kr/upload/event/20260824/d77a8b2f-0636-452e-918c-2c0b2b97ed6c.jpg",
      "https://img.healience.co.kr/upload/event/20260914/6b42da51-9fb8-4fc7-baf2-138ef34170f6.jpg",
      "https://img.healience.co.kr/upload/event/20260904/a7363421-001d-4072-be1b-9baa59fc0a1a.jpg",
      "https://img.healience.co.kr/upload/event/20260623/14e517a6-d464-46dc-bca7-bb286ded5970.jpg",
    ],
    badgeTier: "verified",
    rating: 4.88,
    reviewCount: 247,
    pricing: {
      minPricePerNight: 320,
      currency: "USD",
      pricingTier: "moderate",
      packageOptions: [
        {
          name: "Digital Detox & Mindful Forest Immersion (3 Nights)",
          days: 3,
          price: 990,
          description: "Doctor-led circadian rhythm reset, guided forest therapy, carbonated hot springs, Korean low-sodium organic cuisine, and meditation.",
        },
        {
          name: "7-Night Neuro-Restoration & Vitality Journey",
          days: 7,
          price: 2200,
          description: "Neuropsychological evaluation, daily forest trekking, bedrock thermal spa, posture correction, and autonomic nervous system rebalancing.",
        },
      ],
    },
    primaryGoals: [
      "Burnout & Stress",
      "Mindfulness & Meditation",
      "Emotional & Trauma Healing",
    ],
    modalities: [
      "Forest Bathing",
      "Hydrotherapy",
      "Sound Healing",
      "Pranayama",
      "Somatic Release",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Master Holistic Healers",
    amenities: [
      "Jongjasan Forest Healing Trails (5 Dedicated Routes)",
      "Bedrock Carbonated Thermal Spa & Hinoki Saunas",
      "Spiritual Forest Meditation Shala",
      "Digital Detox Sanctuary (No Wi-Fi Zones)",
      "Circadian Dining Hall",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Mt. Jongjasan Morning Forest Stride & Deep Breathing" },
      { time: "08:00", activity: "Korean Organic Fermented Longevity Breakfast" },
      { time: "10:00", activity: "Autonomic Nervous System Reset & Mindful Posture Class" },
      { time: "12:30", activity: "Low-Sodium Mindful Lunch" },
      { time: "14:30", activity: "Hinoki Wood Forest Bathing & Bedrock Carbonated Spa" },
      { time: "17:00", activity: "Tibetan Singing Bowl Sound Relaxation" },
      { time: "19:00", activity: "Clean Natural Dinner & Starlit Forest Walk" },
    ],
    expertTeam: [
      {
        name: "Dr. Lee Si-hyung, MD",
        role: "Founding Neuropsychiatrist",
        credentials: "Pioneer in Serotonin Research, Author of 80+ Books on Mind Health",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Park Min-woo",
        role: "Chief Forest Therapy Instructor",
        credentials: "Korea Forest Service Certified Master Forest Therapist",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-healience-1",
        author: "Min-Ji K.",
        date: "January 2026",
        rating: 5,
        title: "Pure digital detox heaven",
        comment: "No phone signal in the rooms forced me to look at the trees and breathe. After 3 days, my chronic brain fog and insomnia were completely cured.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+82 1588 9983",
      email: "info@healience.com",
      website: "https://healience.co.kr",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — SRI LANKA
  // ==========================================
  {
    id: "santani-wellness-resort-sri-lanka",
    slug: "santani-wellness-resort-kandy",
    name: "Santani Wellness Resort & Spa",
    tagline: "Pioneering Sustainable Eco-Luxury & Authentic Ayurveda in the Knuckles Mountains",
    description: "Perched on a pristine 48-acre former tea estate in the central hills of Kandy, Sri Lanka, Santani (meaning 'in harmony with') is an internationally lauded sanctuary named one of TIME Magazine's World's Greatest Places. Built on principles of sustainable minimalist architecture, Santani offers personalized Ayurvedic medical programs, Panchakarma cleanses, and bespoke dosha-specific gourmet dining under the care of resident Ayurvedic Vaidyas.",
    location: {
      city: "Kandy",
      region: "Central Province",
      country: "Sri Lanka",
      continent: "Asia-Pacific",
      lat: 7.2906,
      lng: 80.6337,
    },
    heroImage: "https://www.santani.com/santaniwellness-kandy/wp-content/uploads/sites/4/2023/01/d-santani-pavillion.jpg",
    gallery: [
      "https://www.santani.com/santaniwellness-kandy/wp-content/uploads/sites/4/2023/01/d-santani-pavillion.jpg",
      "https://www.santani.com/santaniwellness-kandy/wp-content/uploads/sites/4/2023/01/who-we-are.jpg",
      "https://www.santani.com/santaniwellness-kandy/wp-content/uploads/sites/4/elementor/thumbs/wellness-program-m-rek28lwgqcp2v1wd9wyq71sdlxnc3kx5rmrw5opruo.jpg",
      "https://www.santani.com/santaniwellness-kandy/wp-content/uploads/sites/4/elementor/thumbs/leisure-main-m-qg2dkrequ0kdfrblajyjvkyi0b5s3asn13jsxayd6o.jpg",
      "https://i.ytimg.com/vi/Dys80LT-w9g/hqdefault.jpg",
      "https://www.santani.com/santaniwellness-kandy/wp-content/uploads/sites/4/2023/01/sw-awards-01.png",
    ],
    badgeTier: "featured",
    rating: 4.96,
    reviewCount: 228,
    pricing: {
      minPricePerNight: 550,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "Santani Ayurvedic Rejuvenation (5 Nights)",
          days: 5,
          price: 2950,
          description: "Resident doctor pulse assessment, daily Abhyanga and herbal steam, dosha-tailored 3-course cuisine, and twice-daily Hatha yoga.",
        },
        {
          name: "Panchakarma Detox & Mind Reset (7 Nights)",
          days: 7,
          price: 4100,
          description: "Complete medical purification, herbal ghee ingestion, Shirodhara, detoxifying baths, and private mountain-view chalet.",
        },
      ],
    },
    primaryGoals: [
      "Ayurveda & Panchakarma",
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Ayurvedic Massage",
      "Hydrotherapy",
      "Pranayama",
      "Sound Healing",
      "Forest Bathing",
    ],
    dietary: [
      "Ayurvedic",
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Medical Doctor Led",
    amenities: [
      "Tri-Level Hydrotherapy Thermal Spa",
      "Open-Air Yoga Pavilion with Valley Views",
      "Knuckles Mountain Range Trekking Trails",
      "Hulu River Natural Rock Pools",
      "Zero-Carbon Sustainable Architecture",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Sunrise Mountain Yoga & Pranayama in Open Shala" },
      { time: "08:00", activity: "Personalized Ayurvedic Dosha Breakfast" },
      { time: "09:30", activity: "Consultation with Chief Ayurvedic Vaidya" },
      { time: "11:00", activity: "Four-Hand Abhyanga & Warm Herbal Oil Shirodhara" },
      { time: "13:00", activity: "Custom 3-Course Ayurvedic Gourmet Lunch" },
      { time: "15:30", activity: "Thermal Hydrotherapy Circuit & Cedar Sauna" },
      { time: "17:30", activity: "Sunset Yin Yoga & Guided Breathwork" },
      { time: "19:30", activity: "Candlelit Mountain Dinner & Herbal Tea" },
    ],
    expertTeam: [
      {
        name: "Dr. Aruna Bandara",
        role: "Chief Ayurvedic Doctor",
        credentials: "BAMS (University of Colombo), 19+ Years in Panchakarma Purification",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Ashoka Kumara",
        role: "Senior Yoga Master",
        credentials: "500-Hour RYT Yoga Alliance, Sri Lankan Hatha & Ashtanga Specialist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-santani-1",
        author: "Claire D.",
        date: "February 2026",
        rating: 5,
        title: "Architecture that breathes, medicine that heals",
        comment: "The mountain mist rolling through the glassless pavilion while receiving Shirodhara was life-altering. My anxiety simply dissolved.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+94 76 399 1919",
      email: "reservations@santani.com",
      website: "https://santani.com",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — BHUTAN
  // ==========================================
  {
    id: "amankora-bhutan",
    slug: "amankora-paro-bhutan",
    name: "Amankora",
    tagline: "Sacred Himalayan Pilgrimage, Sowa Rigpa & Cedarwood Hot Stone Baths",
    description: "Scattered across five dramatic valleys in the mystical Kingdom of Bhutan, Amankora (combining 'aman' for peace and 'kora' for circular pilgrimage) is a sanctuary of profound spiritual and physical renewal. Guests experience Bhutan's centuries-old traditional medicine (gSo-ba Rig-pa), traditional cedarwood hot stone baths enriched with wild Artemisia leaves collected from Himalayan riverbeds, and Buddhist monk-led meditations within 17th-century fortress monasteries (Dzongs).",
    location: {
      city: "Paro",
      region: "Paro Valley",
      country: "Bhutan",
      continent: "Asia-Pacific",
      lat: 27.4287,
      lng: 89.4164,
    },
    heroImage: "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_paro_0.webp?itok=TbHiTKXW",
    gallery: [
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_gangtey_5.webp?itok=yFK2pvCb",
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_thimphu.webp?itok=tRFwQa3X",
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_punakha.webp?itok=7F8iIijL",
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_paro_0.webp?itok=TbHiTKXW",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-02/amankora_bhutan_-_gangtey_lodge_outdoor_dining_0.webp?itok=ALpDlQzs",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-02/amankora_bhutan_-_paro_hot_stone_bath.webp?itok=6DPJnbML",
    ],
    badgeTier: "verified",
    rating: 4.97,
    reviewCount: 176,
    pricing: {
      minPricePerNight: 1800,
      currency: "USD",
      pricingTier: "ultra-luxury",
      packageOptions: [
        {
          name: "Sacred Bhutanese Healing Journey (4 Nights)",
          days: 4,
          price: 7200,
          description: "Daily traditional Sowa Rigpa herbal therapies, Artemisia hot stone baths, monk-guided meditation, all mountain gourmet meals.",
        },
        {
          name: "7-Night Multi-Valley Spiritual Pilgrimage",
          days: 7,
          price: 12600,
          description: "Private transfers between Paro & Punakha, sacred Dzong blessing ceremonies, daily therapeutic massages, and Tiger's Nest trek.",
        },
      ],
    },
    primaryGoals: [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Mindfulness & Meditation",
      "Emotional & Trauma Healing",
    ],
    modalities: [
      "Hydrotherapy",
      "Sound Healing",
      "Forest Bathing",
      "Pranayama",
      "Somatic Release",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan",
    ],
    setting: "Mountain Sanctuary",
    supervision: "Master Holistic Healers",
    amenities: [
      "Traditional Bhutanese Dotsho (Hot Stone Bath Pavilion)",
      "High-Altitude Pine Forest Spa Suites",
      "Monastic Meditation & Chanting Chamber",
      "Private Valley Trekking Guides",
      "Organic Himalayan Herb Drying Room",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Paro Valley Sunrise Meditation & Tibetan Bell Chimes" },
      { time: "08:00", activity: "Himalayan Buckwheat & Yak Butter Herb Infusion Breakfast" },
      { time: "09:30", activity: "Mindful Trek through Blue Pine Forests to Kyichu Lhakhang" },
      { time: "13:00", activity: "Organic Farmstead Lunch in Paro Valley" },
      { time: "15:30", activity: "Traditional Artemisia Hot Stone Bath (Dotsho)" },
      { time: "17:30", activity: "Sowa Rigpa Herbal Compress Body Massage" },
      { time: "19:30", activity: "Fireside Dinner with Bhutanese Cultural Philosophy Discourse" },
    ],
    expertTeam: [
      {
        name: "Amchi Tshering Dorji",
        role: "Bhutanese Sowa Rigpa Physician",
        credentials: "Faculty of Traditional Medicine Thimphu, 22+ Years Practice",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Lopen Karma Wangdi",
        role: "Resident Spiritual Guide & Monk",
        credentials: "Former Senior Monk of Paro Dzong, Master of Buddhist Mindfulness",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-amankora-1",
        author: "Sophie B.",
        date: "March 2026",
        rating: 5,
        title: "The closest place to Shangri-La on Earth",
        comment: "Soaking in river stones heated over wood fires while watching the mist clear over Paro Valley is an experience that changes how you view existence.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+975 2 331 333",
      email: "amankora@aman.com",
      website: "https://aman.com/resorts/amankora",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — MALDIVES
  // ==========================================
  {
    id: "joali-being-maldives",
    slug: "joali-being-bodufushi",
    name: "JOALI BEING",
    tagline: "First Nature-Immersive Wellbeing Retreat in the Maldives dedicated to Mind, Skin, Microbiome & Energy",
    description: "Located on the secluded island of Bodufushi in the pristine Raa Atoll of the Maldives, JOALI BEING is the first dedicated nature-immersive wellness retreat in the Indian Ocean. Designed according to biophilic principles that preserve the island's wild flora, the retreat guides guests through four pillars of wellbeing—Mind, Skin, Microbiome, and Energy.\n\nEach guest journey at JOALI BEING begins with an intelligent wellbeing assessment combining movement analysis and bio-energy scanning, which formulates a bespoke multi-day immersion schedule. Guests experience therapeutic sound baths in the open-air SEDA path, overwater hydrotherapy in the Kaashi salt room, Watsu aquatic bodywork, and customized cuisine at FLOW restaurant guided by earth-to-table culinary nutrition.",
    location: {
      city: "Bodufushi",
      region: "Raa Atoll",
      country: "Maldives",
      continent: "Asia-Pacific",
      lat: 5.5678,
      lng: 72.9567,
    },
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    badgeTier: "featured",
    rating: 4.99,
    reviewCount: 264,
    pricing: {
      minPricePerNight: 2100,
      currency: "USD",
      pricingTier: "ultra-luxury",
      packageOptions: [
        {
          name: "Discovery Wellbeing Journey (5 Nights)",
          days: 5,
          price: 11500,
          description: "Intelligent movement analysis, 3D body composition, daily customized Areka therapies, sound path attunement, and Earth-to-Table cuisine.",
        },
        {
          name: "Deep Microbiome & Cellular Longevity (7 Nights)",
          days: 7,
          price: 16800,
          description: "Advanced gut microbiome profiling, hyperbaric oxygen therapy, cryotherapy, bespoke Aktar herbal infusions, and private overwater villa.",
        },
      ],
    },
    primaryGoals: [
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Mindfulness & Meditation",
    ],
    modalities: [
      "Cryotherapy",
      "Hydrotherapy",
      "Sound Healing",
      "Ayurvedic Massage",
      "Physiotherapy",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free",
      "Plant-Based/Vegan",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Areka Integrative Wellness Facility with 39 Treatment Rooms",
      "Kaashi Hydrotherapy Hall (Banya, Aufguss & Watsu)",
      "Seda Sound Discovery Path with 9 Resonant Installations",
      "Aktar Herbology Center & Interactive Apothecary",
      "Cryogenic & Hyperbaric Oxygen Suites",
    ],
    dailySchedule: [
      { time: "07:00", activity: "Ocean Breeze Dynamic Movement & Mobility in Ocean Sala" },
      { time: "08:30", activity: "Earth-to-Table Microbiome Breakfast at Flow" },
      { time: "10:00", activity: "Cellular Longevity Diagnostic Scan & Doctor Consultation" },
      { time: "11:30", activity: "Cryotherapy Session (-110°C) & Oxygen Chamber" },
      { time: "13:00", activity: "Personalized Nutrient-Dense Lunch" },
      { time: "15:30", activity: "Watsu Aquatic Bodywork in Heated Hydro Pool" },
      { time: "17:30", activity: "Sunset Sound Bath along the Seda Outdoor Discovery Path" },
      { time: "19:30", activity: "Gourmet Mindful Dinner Under the Starlit Maldivian Sky" },
    ],
    expertTeam: [
      {
        name: "Dr. Rebecca Campbell, MD",
        role: "Wellness Director & Physician",
        credentials: "Integrative Medicine Fellow, Functional Longevity Specialist",
        avatar: "https://images.unsplash.com/photo-1594824813501-48358473bbbe?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Dr. Gerry Bodeker, PhD",
        role: "Integrative Medicine Advisor",
        credentials: "Oxford & Columbia University Public Health & Botanical Scholar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-joali-1",
        author: "Alexander P.",
        date: "March 2026",
        rating: 5,
        title: "The peak of luxury wellness anywhere in the world",
        comment: "Everything from the sound discovery path to the microbiome-tailored dining is executed to perfection. It is not just a holiday; it transforms your biological markers.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+960 658 4444",
      email: "reservations.being@joali.com",
      website: "https://joalibeing.com",
    },
  },

  // ==========================================
  // PAN-ASIAN DESTINATIONS — WEST ASIA / QATAR
  // ==========================================
  {
    id: "zulal-wellness-resort-qatar",
    slug: "zulal-wellness-resort-khasooma",
    name: "Zulal Wellness Resort by Chiva-Som",
    tagline: "The World's Pioneer in Traditional Arabic and Islamic Medicine (TAIM) on the Arabian Gulf",
    description: "Spread across 28 hectares of coastal landscape on the northern tip of Qatar, Zulal Wellness Resort is an architectural marvel and the world's first destination to combine Traditional Arabic and Islamic Medicine (TAIM) with the holistic wellness expertise of Chiva-Som. TAIM draws on centuries of healing wisdom from Ibn Sina (Avicenna) and Al-Razi, utilizing indigenous desert herbs, camel milk, cupping therapy (Hijama), thermal hydrotherapy, and mindful desert nutrition.",
    location: {
      city: "Al Ruwais",
      region: "Madinat ash Shamal",
      country: "Qatar",
      continent: "Africa & Middle East",
      lat: 26.1344,
      lng: 51.2181,
    },
    heroImage: "https://zulal.com/wp-content/uploads/2026/04/zulal_hero_3840w_q92-scaled.webp",
    gallery: [
      "https://zulal.com/wp-content/uploads/2026/04/zulal_hero_3840w_q92-scaled.webp",
      "https://zulal.com/wp-content/uploads/2026/04/Serenity_House-of-Wisdom_Apothecary-2-scaled.webp",
      "https://zulal.com/wp-content/uploads/2026/07/gcc-wellness-qataf-250x167.jpg",
      "https://zulal.com/wp-content/uploads/2026/08/Discovery_Family-Wellness_Cycling_Lifestyle-1-250x167.jpg",
      "https://zulal.com/wp-content/uploads/2026/08/zulal-wellness-club-fitness-centre-250x167.webp",
      "https://zulal.com/wp-content/uploads/2025/06/Zulal-Wellness-Resort_Group-Activity-5-2048x1365-1-250x167.webp",
    ],
    badgeTier: "featured",
    rating: 4.96,
    reviewCount: 204,
    pricing: {
      minPricePerNight: 850,
      currency: "USD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "TAIM Digestive & Liver Cleansing (5 Nights)",
          days: 5,
          price: 4250,
          description: "Physician consultation, Hijama cupping, Sidr herbal body wrap, thermal hydrotherapy, and personalized TAIM culinary nutrition.",
        },
        {
          name: "Stress Relief & Restorative Sleep (7 Nights)",
          days: 7,
          price: 5950,
          description: "Holistic health assessment, Watsu water therapy, herbal desert compress, craniosacral therapy, and circadian reset.",
        },
      ],
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Longevity & Anti-Aging",
    ],
    modalities: [
      "Hydrotherapy",
      "Acupuncture",
      "Physiotherapy",
      "Sound Healing",
      "Pranayama",
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan",
    ],
    setting: "Coastal/Beachfront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Zulal Serenity Hydrotherapy Complex (Hammam, Arctic Cave & Salt Rooms)",
      "Traditional Arabic Apothecary & Herbarium",
      "Watsu Aquatic Therapy Pool",
      "Desert Landscape Meditation Pavilions",
      "Private Lagoon & Coastal Boardwalk",
    ],
    dailySchedule: [
      { time: "06:30", activity: "Coastal Sunrise Pranayama & Desert Stride" },
      { time: "08:00", activity: "TAIM Medicinal Breakfast with Local Sidr Honey & Spices" },
      { time: "09:30", activity: "Medical Consultation & Temperament (Mizaj) Analysis" },
      { time: "11:00", activity: "Traditional Hijama Cupping & Sidr Herb Purification" },
      { time: "13:00", activity: "Nutrient-Dense TAIM Wellness Lunch at Aizoon" },
      { time: "15:30", activity: "Hammam Scrub & Thermal Arctic Cave Session" },
      { time: "17:30", activity: "Sunset Sound Meditation Over the Arabian Gulf" },
      { time: "19:30", activity: "Mindful Dinner & Sleep Herbal Infusion" },
    ],
    expertTeam: [
      {
        name: "Dr. Jason Culp",
        role: "Chiva-Som Wellness Director",
        credentials: "Doctor of Naturopathic Medicine, 20+ Years Global Leadership",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Dr. Tarek Al-Husseini",
        role: "Lead TAIM Physician",
        credentials: "Specialist in Traditional Arabic & Islamic Medicine & Integrative Health",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      },
    ],
    reviews: [
      {
        id: "rev-zulal-1",
        author: "Nasser A.",
        date: "February 2026",
        rating: 5,
        title: "A revelation of Arabic healing wisdom",
        comment: "The Mizaj temperament assessment was eye-opening. Combining Ibn Sina's herbal remedies with modern hydrotherapy gave me unprecedented energy.",
        verifiedStay: true,
        source: "google" as const,
      },
    ],
    contact: {
      phone: "+974 4478 9000",
      email: "reservations@zulal.com",
      website: "https://zulal.com",
    },
  },
  {
    "id": "absolute-sanctuary-thailand",
    "slug": "absolute-sanctuary-koh-samui",
    "name": "Absolute Sanctuary",
    "tagline": "Asia's Leading Fitness, Pilates Reformer & Detox Wellness Resort on Koh Samui",
    "description": "Perched on a tranquil hillside surrounded by lush coconut groves in northeastern Koh Samui, Absolute Sanctuary is globally renowned for its specialized fitness, Pilates reformer, and holistic detox immersion programs. Inspired by vibrant Moroccan-architecture with terracotta courtyards, the sanctuary offers a comprehensive spectrum of wellness disciplines tailored to physical transformation.\\n\\nGuests engage in customized 5- to 10-day programs combining group reformer Pilates classes, daily colon hydrotherapy, infrared sauna detox sessions, and Thai herbal steam therapies. Nutrition is anchored by the Love Kitchen, serving nutrient-dense vegetarian and raw-food cuisine that restores digestive health and cellular vitality.",
    "location": {
      "city": "Koh Samui",
      "region": "Surat Thani",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 9.5623,
      "lng": 100.0654
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 245,
    "pricing": {
      "minPricePerNight": 280,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Pilates Reformer Bootcamp (7 Nights)",
          "days": 7,
          "price": 2450,
          "description": "Daily private reformer sessions, postural alignment, deep tissue release, and full-board vitality dining."
        },
        {
          "name": "Ultimate Detox & Cleanse (5 Nights)",
          "days": 5,
          "price": 1850,
          "description": "Colon hydrotherapy, herbal detox drinks, infrared sauna, and lymphatic drainage massage."
        }
      ]
    },
    "primaryGoals": [
      "Fitness & Performance",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Pilates Reformer",
      "Hydrotherapy",
      "Yoga & Meditation",
      "Infrared Sauna",
      "Lymphatic Drainage"
    ],
    "dietary": [
      "Organic Vegetarian",
      "Raw Food",
      "Juice Fasting",
      "Gluten-Free"
    ],
    "setting": "Hillside Tropical Haven",
    "supervision": "Certified Fitness & Wellness Specialists",
    "amenities": [
      "Pilates Reformer Studio",
      "Infinity Pool",
      "Infrared Saunas",
      "Steam Rooms",
      "Yoga Shala",
      "Love Kitchen",
      "Hydrotherapy Suite",
      "Spa Sanctuary"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Morning Pranayama & Dynamic Yoga"
      },
      {
        "time": "09:00 AM",
        "activity": "Organic Cold-Pressed Juice & Superfood Breakfast"
      },
      {
        "time": "11:00 AM",
        "activity": "Intensive Reformer Pilates Session"
      },
      {
        "time": "02:00 PM",
        "activity": "Colon Hydrotherapy or Lymphatic Massage"
      },
      {
        "time": "05:00 PM",
        "activity": "Gentle Yin Yoga & Sound Healing"
      },
      {
        "time": "07:00 PM",
        "activity": "Farm-to-Table Clean Cuisine Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Marco Rossi",
        "role": "Master Pilates Instructor",
        "credentials": "PMA Certified, 15+ Yrs Experience",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
      },
      {
        "name": "Dr. Pornchai V.",
        "role": "Lead Holistic Practitioner",
        "credentials": "B.Sc. Naturopathy, Thai Traditional Medicine",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-abs-1",
        "author": "Charlotte Bennett",
        "date": "2 months ago",
        "rating": 5,
        "title": "Life-changing reformer Pilates & detox retreat",
        "comment": "The reformer Pilates instruction here is world-class. Combined with the colon hydrotherapy and clean eating at the Love Kitchen, I lost 4 kilos and gained immense physical core strength.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "g-rev-abs-2",
        "author": "David Miller",
        "date": "4 months ago",
        "rating": 5,
        "title": "Exceptional staff and tranquil hillside setting",
        "comment": "The Moroccan architecture gives a peaceful, serene vibe. The yoga teachers are incredible, and the holistic treatments genuinely relieved my chronic back pain.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 77 601 190",
      "email": "info@absolutesanctuary.com",
      "website": "https://www.absolutesanctuary.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1001"
    }
  },
  {
    "id": "the-lifeco-phuket-thailand",
    "slug": "the-lifeco-phuket-detox-center",
    "name": "The LifeCo Phuket Well-Being Detox Center",
    "tagline": "Premier Scientific Juice Fasting, Master Cleanse & Cellular Detox by Nai Yang Beach",
    "description": "Situated beside a serene freshwater lake just minutes from Nai Yang Beach in northern Phuket, The LifeCo Phuket is a dedicated holistic health and cellular detoxification sanctuary. Renowned globally for its clinically structured fasting protocols and raw-vegan cuisine, The LifeCo addresses chronic inflammation, metabolic burnout, and digestive imbalance.\\n\\nGuests are guided through intensive 7- to 14-day detox journeys under daily nursing and naturopathic supervision, utilizing medical colon hydrotherapy, oxygen therapies, infrared saunas, and salt cave halotherapy. The property provides an intimate, restorative atmosphere that allows the autonomic nervous system to downregulate while the body purges accumulated toxins.",
    "location": {
      "city": "Phuket",
      "region": "Phuket Province",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 8.0845,
      "lng": 98.3056
    },
    "heroImage": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.89,
    "reviewCount": 198,
    "pricing": {
      "minPricePerNight": 295,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Master Detox Protocol (7 Nights)",
          "days": 7,
          "price": 2150,
          "description": "Complete juice fasting cleanse, daily colonics, ozone sauna, liver support elixirs, and blood analysis."
        },
        {
          "name": "Green Salad & Raw Food Cleanse (5 Nights)",
          "days": 5,
          "price": 1650,
          "description": "Gentle detox program with enzyme-rich gourmet raw vegan meals, herbal treatments, and yoga."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Gut Health & Digestion"
    ],
    "modalities": [
      "Colon Hydrotherapy",
      "Ozone Therapy",
      "Juice Fasting",
      "Infrared Sauna",
      "Cryotherapy",
      "Salt Cave Halotherapy"
    ],
    "dietary": [
      "Juice Fasting",
      "Raw Vegan",
      "Master Detox",
      "Alkaline Water"
    ],
    "setting": "Lakeside Tropical Grove",
    "supervision": "On-Site Doctors & Clinical Nurses",
    "amenities": [
      "Lakeside Swimming Pool",
      "Colonic Hydrotherapy Rooms",
      "Ozone Saunas",
      "Infrared Saunas",
      "Salt Cave",
      "Yoga Studio",
      "Raw Food Kitchen"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Alkaline Lemon & Bentonite Shake"
      },
      {
        "time": "08:30 AM",
        "activity": "Gentle Morning Detox Yoga"
      },
      {
        "time": "10:30 AM",
        "activity": "Medical Colonic Hydrotherapy Session"
      },
      {
        "time": "01:00 PM",
        "activity": "Fresh Cold-Pressed Green Juice & Wheatgrass Shot"
      },
      {
        "time": "03:30 PM",
        "activity": "Infrared Sauna & Ozone Steam"
      },
      {
        "time": "06:00 PM",
        "activity": "Evening Sound Meditation & Potassium Broth"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Somchai T.",
        "role": "Medical Director",
        "credentials": "MD, Integrative Detoxification Specialist",
        "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-tlc-1",
        "author": "Sophie Vandenberg",
        "date": "1 month ago",
        "rating": 5,
        "title": "Lost 5kg and cleared brain fog completely",
        "comment": "The Master Detox program is intense but exceptionally well supported by the medical team. The colonics, ozone saunas, and daily juices completely reset my digestion.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 76 328 172",
      "email": "phuket@thelifeco.com",
      "website": "https://www.thelifeco.com/phuket",
      "googleReviewsUrl": "https://maps.google.com/?cid=1002"
    }
  },
  {
    "id": "vikasa-yoga-retreat-thailand",
    "slug": "vikasa-yoga-retreat-koh-samui",
    "name": "Vikasa Yoga Retreat",
    "tagline": "Spectacular Cliffside Yoga Sanctuary & Organic Farm-to-Table Community on Koh Samui",
    "description": "Carved into the dramatic coastal granite cliffs between Chaweng Noi and Lamai on Koh Samui, Vikasa Yoga Retreat is one of Asia's most celebrated yoga and meditation destinations. Founded by Kosta Miachin, the retreat's architecture flows seamlessly with the natural rock formations, offering open-air bamboo shalas that hang directly over the crashing waves of the Gulf of Thailand.\\n\\nGuests experience daily transformative Vinyasa, Hatha, and Yin yoga masterclasses, pranayama workshops, and sunset sound journeys. The culinary centerpiece is Life Cafe, an internationally acclaimed organic restaurant providing nourishing whole-food buffets designed to support high-vibrational spiritual and physical vitality.",
    "location": {
      "city": "Koh Samui",
      "region": "Surat Thani",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 9.4892,
      "lng": 100.0456
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.92,
    "reviewCount": 312,
    "pricing": {
      "minPricePerNight": 195,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Vikasa Yoga Vacation (7 Nights)",
          "days": 7,
          "price": 1550,
          "description": "Unlimited daily yoga classes, cliffside ocean accommodation, and two wholesome organic buffet meals daily."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Fitness & Performance"
    ],
    "modalities": [
      "Hatha Yoga",
      "Vinyasa Flow",
      "Pranayama",
      "Sound Baths",
      "Meditation"
    ],
    "dietary": [
      "Organic Vegetarian",
      "Vegan Options",
      "Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Dramatic Oceanfront Cliffside",
    "supervision": "Senior Yoga Masters & Teachers",
    "amenities": [
      "Open-Air Cliffside Shalas",
      "Infinity Pool",
      "Life Cafe",
      "Private Beach Access",
      "Massage Pavilion",
      "Sunset Decks"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Sunrise Meditation & Dynamic Vinyasa"
      },
      {
        "time": "09:30 AM",
        "activity": "Nourishing Organic Brunch Buffet"
      },
      {
        "time": "01:00 PM",
        "activity": "Free Time, Ocean Swimming or Spa Treatment"
      },
      {
        "time": "05:00 PM",
        "activity": "Restorative Yin Yoga & Pranayama"
      },
      {
        "time": "06:30 PM",
        "activity": "Sunset Sound Bath Experience"
      },
      {
        "time": "07:30 PM",
        "activity": "Community Healthy Dinner at Life Cafe"
      }
    ],
    "expertTeam": [
      {
        "name": "Kosta Miachin",
        "role": "Founder & Master Teacher",
        "credentials": "E-RYT 500, Creator of Vikasa Method",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-vik-1",
        "author": "Emma Watson-Taylor",
        "date": "3 weeks ago",
        "rating": 5,
        "title": "The most magical yoga views on the planet",
        "comment": "Practicing yoga as the sun rises over the Gulf of Thailand from the open-air cliff pavilion is unforgettable. The food at Life Cafe is exceptionally fresh and delicious.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 77 422 298",
      "email": "stay@vikasa.com",
      "website": "https://vikasa.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1003"
    }
  },
  {
    "id": "amatara-welleisure-thailand",
    "slug": "amatara-welleisure-resort-phuket",
    "name": "Amatara Welleisure Resort",
    "tagline": "Comprehensive Coastal Longevity, Thai Hammam & Medical Wellness on Cape Panwa, Phuket",
    "description": "Occupying a tranquil private promontory on Cape Panwa overlooking the turquoise Andaman Sea in southern Phuket, Amatara Welleisure Resort combines idyllic tropical luxury with clinical wellness diagnostics. The resort's world-famous Thai Hammam integrates traditional Turkish and Moroccan bathhouse rituals with authentic Thai herbal therapies.\\n\\nGuests participate in curated multi-day retreats for detox, weight management, anti-aging, and stress relief under the guidance of naturopathic physicians and physiotherapists. Sea-facing pool villas provide secluded tranquility, complemented by individualized nutrition at The Retreat restaurant.",
    "location": {
      "city": "Phuket",
      "region": "Cape Panwa",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 7.8089,
      "lng": 98.4078
    },
    "heroImage": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 280,
    "pricing": {
      "minPricePerNight": 390,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Amatara Detox & Revitalize (5 Nights)",
          "days": 5,
          "price": 2750,
          "description": "Full health consultation, Thai Hammam journey, colonic hydrotherapy, and customized detox menus."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    "modalities": [
      "Thai Hammam",
      "Physiotherapy",
      "Hydrotherapy",
      "Acupuncture",
      "Traditional Thai Medicine"
    ],
    "dietary": [
      "Nutritional Cleanse",
      "Organic Gourmet",
      "Vegan & Raw",
      "Sugar-Free"
    ],
    "setting": "Coastal Oceanfront Promontory",
    "supervision": "Naturopaths & Certified Therapists",
    "amenities": [
      "Thai Hammam Suite",
      "Oceanview Infinity Pool",
      "Physiotherapy Lab",
      "Private Beach",
      "Yoga Sala",
      "The Retreat Dining"
    ],
    "dailySchedule": [
      {
        "time": "08:00 AM",
        "activity": "Oceanview Morning Yoga & Pranayama"
      },
      {
        "time": "09:30 AM",
        "activity": "Gourmet Wellness Breakfast"
      },
      {
        "time": "11:00 AM",
        "activity": "Signature Thai Hammam Experience"
      },
      {
        "time": "02:30 PM",
        "activity": "Hydrotherapy or Deep Tissue Bodywork"
      },
      {
        "time": "05:00 PM",
        "activity": "Sunset Meditation or Sound Healing"
      },
      {
        "time": "07:00 PM",
        "activity": "Three-Course Wholesome Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Ananya P.",
        "role": "Director of Wellness",
        "credentials": "N.D., B.Sc. Clinical Nutrition",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-ama-1",
        "author": "Marcus Lindqvist",
        "date": "2 months ago",
        "rating": 5,
        "title": "The Thai Hammam is pure heaven",
        "comment": "Amatara balances pure five-star luxury with genuine health improvements. The private pool villa had panoramic sea views, and the wellness team took phenomenal care of my rehabilitation.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 76 318 888",
      "email": "reservations.phuket@amataraphuket.com",
      "website": "https://www.amataraphuket.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1004"
    }
  },
  {
    "id": "floating-leaf-bali",
    "slug": "floating-leaf-eco-luxury-retreat-bali",
    "name": "Floating Leaf Eco-Luxury Retreat",
    "tagline": "Award-Winning Traditional Balinese Healing, Permaculture & Oceanfront Yoga in Sukawati",
    "description": "Nestled in an authentic coastal village in Sukawati on Bali's eastern shore, Floating Leaf Eco-Luxury Retreat is consistently recognized as one of the world's finest yoga and wellness sanctuaries. The property seamlessly blends sustainable eco-luxury architecture with sacred Balinese healing traditions, set amidst organic permaculture gardens and swaying coconut palms.\\n\\nGuests immerse in authentic Balinese water purification ceremonies (Melukat) at sacred holy springs, daily yoga in the open-air bamboo Melati Pavilion with vistas of Mount Agung, and organic farm-to-table cuisine prepared from ingredients harvested just steps from the kitchen.",
    "location": {
      "city": "Sukawati",
      "region": "Gianyar, Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.5912,
      "lng": 115.3045
    },
    "heroImage": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.96,
    "reviewCount": 184,
    "pricing": {
      "minPricePerNight": 260,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "The Path to Harmony (7 Nights)",
          "days": 7,
          "price": 2100,
          "description": "Authentic water blessings, daily yoga, traditional Balinese massage, and organic farm-to-table dining."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Emotional & Trauma Healing",
      "Burnout & Stress"
    ],
    "modalities": [
      "Balinese Traditional Healing",
      "Melukat Water Blessing",
      "Hatha Yoga",
      "Sound Healing",
      "Permaculture Nutrition"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Indonesian Vegan",
      "Gluten-Free",
      "Raw Options"
    ],
    "setting": "Coastal Balinese Village & Rice Fields",
    "supervision": "Traditional Balinese Healers & Master Yoga Teachers",
    "amenities": [
      "Melati Yoga Shala",
      "Healing Mineral Pool",
      "Permaculture Farm",
      "Traditional Spa",
      "Boutique Eco Villas",
      "Community Lounge"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Morning Yoga overlooking Mount Agung"
      },
      {
        "time": "09:00 AM",
        "activity": "Organic Farm-Harvested Breakfast"
      },
      {
        "time": "11:00 AM",
        "activity": "Melukat Holy Water Cleansing Ceremony"
      },
      {
        "time": "02:00 PM",
        "activity": "Balinese Boreh Herbal Wrap & Massage"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation & Chanting"
      },
      {
        "time": "07:00 PM",
        "activity": "Traditional Balinese Gourmet Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Pak Ketut",
        "role": "Resident Balinese Healer (Balian)",
        "credentials": "4th Generation Balian Usada",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-flb-1",
        "author": "Jessica Hayes",
        "date": "1 month ago",
        "rating": 5,
        "title": "Deeply emotional and authentic Balinese healing",
        "comment": "The water purification ceremony was one of the most moving experiences of my life. Floating Leaf is not a commercial resort; it is a genuine sanctuary that respects the local culture.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 811 381 0700",
      "email": "info@balifloatingleaf.com",
      "website": "https://balifloatingleaf.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1005"
    }
  },
  {
    "id": "oneworld-ayurveda-bali",
    "slug": "oneworld-ayurveda-tegallalang-bali",
    "name": "Oneworld Ayurveda",
    "tagline": "Authentic Residential Panchakarma & Clinical Vedic Healing in Tegallalang, Bali",
    "description": "Set amidst the tranquil jungles and rice terraces of Tegallalang, just north of Ubud, Oneworld Ayurveda is Bali's dedicated Panchakarma institution. Operating under strict classical Ayurvedic principles led by resident Vaidyas from Kerala, the center focuses exclusively on deep bodily purification, chronic disease management, and mental rejuvenation.\\n\\nGuests undertake comprehensive 7-, 14-, 21-, or 28-day Panchakarma programs encompassing daily pulse diagnosis, individualized herbal decoctions, therapeutic Abhyanga massages, Shirodhara oil streams, and medical purgation (Virechana). The center maintains a contemplative, electronics-free ambiance that encourages profound internal healing.",
    "location": {
      "city": "Tegallalang",
      "region": "Ubud, Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.4456,
      "lng": 115.2891
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.97,
    "reviewCount": 165,
    "pricing": {
      "minPricePerNight": 310,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Authentic Panchakarma (10 Nights)",
          "days": 10,
          "price": 3450,
          "description": "Full medical Panchakarma protocol, daily doctor consultations, two daily treatments, and customized dosha meals."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Panchakarma",
      "Abhyanga",
      "Shirodhara",
      "Virechana",
      "Ayurvedic Pulse Diagnosis",
      "Pranayama"
    ],
    "dietary": [
      "Prescribed Ayurvedic Vegetarian",
      "Dosha Specific",
      "Organic Herbal Teas"
    ],
    "setting": "Highland Jungle & Terraced Valleys",
    "supervision": "Resident Ayurvedic Doctors (BAMS)",
    "amenities": [
      "Ayurvedic Treatment Rooms",
      "Yoga Shala",
      "Herbal Pharmacy",
      "Organic Vegetable Gardens",
      "Swimming Pool",
      "Quiet Meditation Gazebos"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Gentle Morning Yoga & Breathing"
      },
      {
        "time": "08:00 AM",
        "activity": "Doctor Consultation & Herbal Medicine"
      },
      {
        "time": "09:30 AM",
        "activity": "Morning Ayurvedic Treatment (Abhyanga & Swedana)"
      },
      {
        "time": "12:30 PM",
        "activity": "Dosha-Specific Ayurvedic Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Afternoon Treatment (Shirodhara or Herbal Poultice)"
      },
      {
        "time": "07:00 PM",
        "activity": "Nourishing Light Dinner & Silent Reflection"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Ninnu Sudarsan",
        "role": "Chief Ayurvedic Physician",
        "credentials": "BAMS (Kerala), 20+ Yrs Clinical Panchakarma",
        "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-owa-1",
        "author": "Klaus Zimmerman",
        "date": "2 months ago",
        "rating": 5,
        "title": "Medical Panchakarma at its absolute finest",
        "comment": "This is a genuine Ayurvedic hospital in a beautiful Balinese setting. Dr. Ninnu and his team monitor your pulse and tongue daily. My joint pain and chronic fatigue disappeared after 14 days.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 972 452",
      "email": "info@oneworldayurveda.com",
      "website": "https://www.oneworldayurveda.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1006"
    }
  },
  {
    "id": "mesastila-resort-java",
    "slug": "mesastila-resort-and-spa-central-java",
    "name": "MesaStila Resort and Spa",
    "tagline": "Historic 55-Acre Coffee Plantation Retreat & Authentic Turkish Hammam in Central Java",
    "description": "Perched amidst eight majestic volcanic peaks on a 55-acre functioning organic coffee plantation in Magelang, Central Java, MesaStila is an extraordinary heritage wellness sanctuary. Featuring restored 19th-century Javanese royal villas (Kudus houses) with intricate teakwood carvings, the retreat offers a unique synthesis of traditional Javanese Jamu herbal medicine and modern fitness.\\n\\nGuests rejuvenate in Southeast Asia's only authentic Turkish Hammam, enjoy therapeutic baths infused with fresh coffee and volcanic ash, and practice martial art-inspired Pencak Silat movement. The tranquil highland air and views of Mount Merapi create an atmosphere of profound majesty and calm.",
    "location": {
      "city": "Magelang",
      "region": "Central Java",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -7.3489,
      "lng": 110.3123
    },
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.89,
    "reviewCount": 210,
    "pricing": {
      "minPricePerNight": 240,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Javanese Rejuvenation & Hammam (5 Nights)",
          "days": 5,
          "price": 1850,
          "description": "Daily Turkish Hammam rituals, Jamu herbal medicine workshops, yoga, and organic plantation dining."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Longevity & Anti-Aging",
      "Spiritual Awakening"
    ],
    "modalities": [
      "Turkish Hammam",
      "Traditional Javanese Jamu",
      "Coffee Body Scrubs",
      "Yoga",
      "Pencak Silat"
    ],
    "dietary": [
      "Organic Plantation-to-Table",
      "Indonesian Traditional",
      "Vegetarian",
      "Detox Menus"
    ],
    "setting": "55-Acre Highland Coffee Plantation",
    "supervision": "Hammam Masters & Jamu Herbalists",
    "amenities": [
      "Turkish Hammam",
      "Infinity Pool overlooking Volcanoes",
      "Historic Kudus Villas",
      "Yoga Shala",
      "Plantation Trails",
      "The Club House"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Morning Yoga amidst Coffee Blossom Aromas"
      },
      {
        "time": "08:30 AM",
        "activity": "Freshly Roasted Organic Coffee & Healthy Breakfast"
      },
      {
        "time": "11:00 AM",
        "activity": "Authentic Turkish Hammam Steam & Scrub Ritual"
      },
      {
        "time": "02:30 PM",
        "activity": "Plantation Walk & Traditional Jamu Making Workshop"
      },
      {
        "time": "05:00 PM",
        "activity": "Pencak Silat Mind-Body Movement Session"
      },
      {
        "time": "07:00 PM",
        "activity": "Farm-to-Table Javanese Gourmet Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Ibu Siti",
        "role": "Master Jamu Herbalist",
        "credentials": "Expert in Traditional Javanese Herbal Medicine",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-msj-1",
        "author": "Anthony Reynolds",
        "date": "3 months ago",
        "rating": 5,
        "title": "A magical plantation retreat unlike anywhere else",
        "comment": "Staying in antique Javanese wooden villas surrounded by volcanoes is unforgettable. The Turkish Hammam in the middle of Java was surprisingly authentic and deeply cleansing.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 298 596 333",
      "email": "info@mesastilaresort.com",
      "website": "https://www.mesastilaresort.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1007"
    }
  },
  {
    "id": "somatheeram-ayurveda-india",
    "slug": "somatheeram-ayurveda-village-kerala",
    "name": "Somatheeram Ayurveda Village",
    "tagline": "The World's First Ayurvedic Resort & Classified Hospital on Chowara Beach, Kerala",
    "description": "Cascading down verdant cliffs to Chowara Beach near Kovalam, Somatheeram Ayurveda Village is celebrated as the pioneer of Ayurvedic health tourism since 1985. Classified as an authorized Ayurvedic hospital with over 30 certified Vaidyas and 90 therapists, Somatheeram provides uncompromised classical healing in harmony with nature.\\n\\nGuests reside in traditional wooden cottages and heritage rooms made from eco-friendly materials, overlooking the Arabian Sea. Treatments follow classical Sanskrit treatises, featuring bespoke herbal oils manufactured at Somatheeram's own GMP-certified pharmaceutical laboratory, accompanied by daily dosha-balanced Ayurvedic buffet dining.",
    "location": {
      "city": "Kovalam",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 8.3542,
      "lng": 77.0123
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.93,
    "reviewCount": 385,
    "pricing": {
      "minPricePerNight": 210,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Rejuvenation & Body Purification (14 Nights)",
          "days": 14,
          "price": 3200,
          "description": "Full classical Panchakarma, daily doctor checkups, medicated herbal oils, and full-board Ayurvedic meals."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Classical Panchakarma",
      "Abhyanga",
      "Njavarakizhi",
      "Kadhikizhi",
      "Pizhichil",
      "Shirodhara"
    ],
    "dietary": [
      "Individualized Ayurvedic Buffet",
      "Dosha Classified",
      "Vegetarian",
      "Herbal Decoctions"
    ],
    "setting": "Cliffside Malabar Coast Oceanfront",
    "supervision": "30+ Resident Ayurvedic Physicians (BAMS / MD)",
    "amenities": [
      "Ayurvedic Hospital Wing",
      "Oceanfront Yoga Shalas",
      "Herbal Medicine Pharmacy",
      "Chowara Beach Access",
      "Swimming Pool",
      "Herbal Gardens"
    ],
    "dailySchedule": [
      {
        "time": "06:00 AM",
        "activity": "Morning Yoga & Meditation on Ocean Deck"
      },
      {
        "time": "07:30 AM",
        "activity": "Ayurvedic Physician Consultation & Pulse Check"
      },
      {
        "time": "09:00 AM",
        "activity": "Two-Hour Four-Handed Abhyanga & Kizhi Therapy"
      },
      {
        "time": "12:30 PM",
        "activity": "Dosha-Categorized Ayurvedic Vegetarian Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara or Medicated Herbal Steam Bath"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Ayurvedic Dinner & Cultural Music"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. C.A. Raman",
        "role": "Chief Medical Officer",
        "credentials": "BAMS, 30+ Yrs Clinical Experience",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-som-1",
        "author": "Brigitte Hartmann",
        "date": "1 month ago",
        "rating": 5,
        "title": "The birthplace of authentic Ayurveda in Kerala",
        "comment": "I have been coming to Somatheeram for 8 years from Germany. The doctors are genuine medical scholars and the treatments have cured my chronic psoriasis and arthritis.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 471 226 8101",
      "email": "info@somatheeram.in",
      "website": "https://somatheeram.in",
      "googleReviewsUrl": "https://maps.google.com/?cid=1008"
    }
  },
  {
    "id": "kalari-kovilakom-india",
    "slug": "kalari-kovilakom-palace-ayurveda-kerala",
    "name": "Kalari Kovilakom",
    "tagline": "The Palace for Ayurveda: Ultra-Strict, Barefoot 19th-Century Royal Healing Monastery in Palakkad",
    "description": "Constructed in 1890 as the palace of the Vengunad royal dynasty in Kollengode, Kerala, Kalari Kovilakom is a hospital disguised as a palace. Operating with monastic discipline, guests surrender leather goods, mobile phones, and outside attire upon entry, wearing only provided white cotton pyjamas and walking barefoot throughout the pristine palace grounds.\\n\\nTreatments follow undiluted, uncompromising classical Ayurveda under the direction of senior Vaidyas. Guests undergo intensive 14- to 28-day Panchakarma regimens without coffee, alcohol, or external distractions, yielding life-altering physical purifications and mental clarity.",
    "location": {
      "city": "Palakkad",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 10.6123,
      "lng": 76.689
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.98,
    "reviewCount": 142,
    "pricing": {
      "minPricePerNight": 550,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Pure Panchakarma Intensive (14 Nights)",
          "days": 14,
          "price": 7800,
          "description": "Strict classical palace Panchakarma, individualized Vaidya supervision, daily treatments, and customized Ayurvedic dining."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Classical Strict Panchakarma",
      "Kashaya Vasthi",
      "Snehadhara",
      "Sirovasthi",
      "Kalaripayattu Movement",
      "Yoga Nidra"
    ],
    "dietary": [
      "Prescriptive Ayurvedic Healing Diet",
      "Zero Salt/Sugar on Detox Days",
      "Organic Vegetarian"
    ],
    "setting": "Historic 19th-Century Royal Palace",
    "supervision": "Senior Ayurvedic Vaidyas & Monastic Healers",
    "amenities": [
      "Palace Courtyards",
      "Vedic Treatment Wings",
      "Yoga Mandapam",
      "Herbarium",
      "Classical Library",
      "Organic Herb Gardens"
    ],
    "dailySchedule": [
      {
        "time": "05:30 AM",
        "activity": "Traditional Chantings & Yoga Nidra"
      },
      {
        "time": "07:00 AM",
        "activity": "Morning Herbal Kashayam & Vaidya Assessment"
      },
      {
        "time": "08:30 AM",
        "activity": "Morning Intensive Therapy (Pizhichil or Abhyanga)"
      },
      {
        "time": "12:00 PM",
        "activity": "Prescribed Individualized Ayurvedic Lunch"
      },
      {
        "time": "03:00 PM",
        "activity": "Afternoon Shirodhara or Sirovasthi Treatment"
      },
      {
        "time": "06:30 PM",
        "activity": "Evening Satsang & Vegetarian Supper"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Jouhar",
        "role": "Senior Medical Superintendent",
        "credentials": "BAMS, Master of Ayurvedic Surgery",
        "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-kal-1",
        "author": "Jean-Pierre Laurent",
        "date": "2 months ago",
        "rating": 5,
        "title": "A palace of complete rebirth",
        "comment": "Kalari Kovilakom is not a spa resort; it is a sacred healing sanctuary. Giving up my phone and shoes and following the strict Ayurvedic regimen reset my health after years of executive exhaustion.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 4923 263 737",
      "email": "kalarikovilakom@cghearth.com",
      "website": "https://www.cghearth.com/kalari-kovilakom",
      "googleReviewsUrl": "https://maps.google.com/?cid=1009"
    }
  },
  {
    "id": "atmantan-wellness-india",
    "slug": "atmantan-wellness-resort-mulshi",
    "name": "Atmantan Wellness Resort",
    "tagline": "42-Acre Crystalline Hill Sanctuary Overlooking Lake Mulshi near Mumbai & Pune",
    "description": "Nestled in the Sahyadri mountains overlooking the tranquil waters of Mulshi Lake near Pune, Atmantan Wellness Resort is India's leading luxury integrated wellness destination. Built upon crystalline volcanic soil believed to emit healing earth frequencies, the resort combines evidence-based Naturopathy, Ayurveda, and Functional Fitness.\\n\\nGuests are supported by medical doctors, physiotherapists, nutritionists, and fitness trainers through specialized retreats for weight loss, disease reversal, diabetes management, and emotional detox. The property features indoor saltwater pools, infrared saunas, cryotherapy, and gourmet farm-to-table cuisine at Vistara.",
    "location": {
      "city": "Mulshi",
      "region": "Maharashtra",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 18.5123,
      "lng": 73.5012
    },
    "heroImage": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 310,
    "pricing": {
      "minPricePerNight": 350,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Atmantan Weight Balance (7 Nights)",
          "days": 7,
          "price": 2950,
          "description": "Metabolic rate testing, daily personal training, colonic cleansing, detox body wraps, and personalized spa dining."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Fitness & Performance",
      "Burnout & Stress"
    ],
    "modalities": [
      "Naturopathy",
      "Ayurveda",
      "Functional Fitness",
      "Cryotherapy",
      "Colon Hydrotherapy",
      "Physiotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Calorie Prescribed",
      "Gluten-Free",
      "Low GI"
    ],
    "setting": "42-Acre Mountain & Lake Sanctuary",
    "supervision": "Integrative Medical Doctors & Naturopaths",
    "amenities": [
      "Indoor Saltwater Pool",
      "Hydrotherapy Centre",
      "Cryo Chamber",
      "High-Tech Gym",
      "Yoga & Meditation Pavilions",
      "Vistara Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Lakeside Mountain Stretch & Yoga"
      },
      {
        "time": "08:30 AM",
        "activity": "Customized Nutrient-Dense Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Functional Fitness or Personal Training"
      },
      {
        "time": "02:00 PM",
        "activity": "Naturopathic Hydrotherapy or Deep Tissue Massage"
      },
      {
        "time": "05:00 PM",
        "activity": "Guided Pranayama & Sound Healing"
      },
      {
        "time": "07:30 PM",
        "activity": "Organic Gourmet Wellness Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Manoj Kutteri",
        "role": "Wellness Director",
        "credentials": "Ph.D., Naturopathic Medicine Specialist",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-atm-1",
        "author": "Rahul Sharma",
        "date": "1 month ago",
        "rating": 5,
        "title": "World-class health retreat right in Maharashtra",
        "comment": "The medical assessment was thorough, and the custom nutrition plan completely reversed my elevated blood sugar. Outstanding scenic views of Mulshi Lake from the room.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 20 6676 6666",
      "email": "info@atmantan.com",
      "website": "https://www.atmantan.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1010"
    }
  },
  {
    "id": "barberyn-reef-sri-lanka",
    "slug": "barberyn-reef-ayurveda-resort-beruwala",
    "name": "Barberyn Reef Ayurveda Resort",
    "tagline": "Pioneer of Oceanfront Classical Ayurveda in Sri Lanka with Dedicated Health Centre since 1984",
    "description": "Located along a golden sandy beach protected by an offshore coral reef in Beruwala on Sri Lanka's southwest coast, Barberyn Reef is the pioneer of authentic Ayurvedic tourism on the island. Founded in 1984, the resort operates a specialized Ayurvedic health center staffed by university-qualified Ayurvedic physicians, acupuncture masters, and trained herbal therapists.\\n\\nGuests follow traditional treatments featuring herbal oils, fresh decoctions prepared daily in the on-site medicine dispensary, and personalized dosha-specific dining. The natural sea-water reef creates a calm lagoon ideal for daily ocean bathing in between healing therapies.",
    "location": {
      "city": "Beruwala",
      "region": "Western Province",
      "country": "Sri Lanka",
      "continent": "Asia-Pacific",
      "lat": 6.4256,
      "lng": 79.9834
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.9,
    "reviewCount": 220,
    "pricing": {
      "minPricePerNight": 185,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Authentic Sri Lankan Ayurveda (10 Nights)",
          "days": 10,
          "price": 1950,
          "description": "All medical consultations, daily warm oil therapies, herbal elixirs, yoga, and customized full-board meals."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Classical Sri Lankan Ayurveda",
      "Acupuncture",
      "Herbal Steam",
      "Shirodhara",
      "Hatha Yoga"
    ],
    "dietary": [
      "Prescribed Ayurvedic Diet",
      "Individualized Dosha Labels",
      "Fresh Tropical Fruit",
      "Herbal Teas"
    ],
    "setting": "Beachfront Reef Lagoon",
    "supervision": "Resident Ayurvedic Doctors (BAMS)",
    "amenities": [
      "Ayurvedic Health Centre",
      "Reef Ocean Swimming",
      "Yoga Shala",
      "Herbal Pharmacy",
      "Library",
      "Seafront Dining Pavilion"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Morning Yoga & Meditation by the Ocean"
      },
      {
        "time": "08:00 AM",
        "activity": "Ayurvedic Doctor Consultation"
      },
      {
        "time": "09:30 AM",
        "activity": "Full Body Synchronized Oil Massage & Herbal Bath"
      },
      {
        "time": "12:30 PM",
        "activity": "Individualized Ayurvedic Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Acupuncture or Herbal Poultice Therapy"
      },
      {
        "time": "07:00 PM",
        "activity": "Healthy Evening Dinner & Botanical Talk"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Asoka Samarasinghe",
        "role": "Chief Physician",
        "credentials": "BAMS (University of Colombo), 25+ Yrs Ayurveda",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-bar-1",
        "author": "Helga Müller",
        "date": "2 months ago",
        "rating": 5,
        "title": "True Ayurvedic authenticity on the ocean",
        "comment": "Barberyn Reef is the real deal. The doctors take your pulse every morning, explain every herb you drink, and the treatments are performed with immense dedication.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 34 227 6036",
      "email": "info@barberynresorts.com",
      "website": "https://barberynresorts.com/reef",
      "googleReviewsUrl": "https://maps.google.com/?cid=1011"
    }
  },
  {
    "id": "sen-wellness-sanctuary-sri-lanka",
    "slug": "sen-wellness-sanctuary-rekawa",
    "name": "Sen Wellness Sanctuary",
    "tagline": "Eco-Conscious Sanctuary Between Lagoon & Ocean in Rekawa Nature Reserve, Sri Lanka",
    "description": "Nestled between the pristine Rekawa turtle lagoon and the Indian Ocean in southern Sri Lanka, Sen Wellness Sanctuary was founded by renowned London osteopath Dr. Sam Kankanamge. Combining ancient Ayurvedic wisdom with contemporary osteopathy and cranial-sacral therapy, Sen Wellness offers an intimate, community-focused sanctuary for profound healing.\\n\\nGuests stay in eco-cabanas and cabana suites built from sustainable local woods, following daily morning Kundalini and Hatha yoga, Ayurvedic pulse assessments, sound healing, and ocean sunset meditations. The sanctuary's zero-waste kitchen serves organic Sri Lankan vegetarian feasts formulated on Ayurvedic principles.",
    "location": {
      "city": "Rekawa",
      "region": "Tangalle, Southern Province",
      "country": "Sri Lanka",
      "continent": "Asia-Pacific",
      "lat": 6.0456,
      "lng": 80.8456
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.95,
    "reviewCount": 168,
    "pricing": {
      "minPricePerNight": 275,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Integrative Osteopathy & Ayurveda (7 Nights)",
          "days": 7,
          "price": 2200,
          "description": "Osteopathic structural alignments, daily Ayurvedic treatments, Kundalini yoga, and full-board organic dining."
        }
      ]
    },
    "primaryGoals": [
      "Emotional & Trauma Healing",
      "Burnout & Stress",
      "Ayurveda & Panchakarma"
    ],
    "modalities": [
      "Osteopathy",
      "Cranial-Sacral Therapy",
      "Classical Ayurveda",
      "Kundalini Yoga",
      "Gong Sound Baths"
    ],
    "dietary": [
      "Organic Sri Lankan Vegetarian",
      "Ayurvedic Cleanse",
      "Gluten-Free",
      "Zero Waste"
    ],
    "setting": "Lagoon & Ocean Nature Reserve",
    "supervision": "Osteopaths & Resident Ayurvedic Doctors",
    "amenities": [
      "Circular Yoga Shala",
      "Lagoon Treatment Huts",
      "Turtle Beach Access",
      "Sound Healing Space",
      "Botanical Gardens"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Morning Kundalini Yoga & Chanting"
      },
      {
        "time": "08:30 AM",
        "activity": "Nourishing Herbal Porridge & Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Osteopathy or Ayurvedic Shirodhara Therapy"
      },
      {
        "time": "01:00 PM",
        "activity": "Ayurvedic Buffet Lunch"
      },
      {
        "time": "04:30 PM",
        "activity": "Sound Healing Gong Bath & Breathwork"
      },
      {
        "time": "06:30 PM",
        "activity": "Sunset Walk to Rekawa Turtle Beach & Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Sam Kankanamge",
        "role": "Founder & Master Osteopath",
        "credentials": "B.Sc. Osteopathy, Cranial-Sacral Master",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-sen-1",
        "author": "Nathalie Dupont",
        "date": "1 month ago",
        "rating": 5,
        "title": "A truly transformative healing experience",
        "comment": "Combining Dr. Sam's osteopathy with traditional Ayurveda in the middle of a nature reserve was deeply restorative. I arrived exhausted and left with boundless clarity and peace.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 77 353 5456",
      "email": "contact@senwellnesssanctuary.com",
      "website": "https://www.senwellnesssanctuary.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1012"
    }
  },
  {
    "id": "beniya-mukayu-japan",
    "slug": "beniya-mukayu-yamashiro-onsen",
    "name": "Beniya Mukayu",
    "tagline": "Relais & Châteaux Zen Onsen Sanctuary & Yakushiyama Herbal Healing in Yamashiro, Ishikawa",
    "description": "Nestled on the sacred hillside of Yakushiyama in the historic hot springs town of Yamashiro near Kanazawa, Beniya Mukayu is a minimalist Relais & Châteaux ryokan designed by architect Kiyoshi Sey Takeyama. The property embodies the Daoist philosophy of 'Mukayu'—a state of non-existence, openness, and pure potentiality.\\n\\nEvery guest room features a private open-air cedar bath (rotenburo) fed by pure natural thermal waters. The sanctuary's Spa Mukayu offers signature Yakushiyama treatments combining hot spring water with medicinal herbs and hot herbal medicine balls, complemented by Michelin-caliber Kaiseki wellness gastronomy.",
    "location": {
      "city": "Yamashiro Onsen",
      "region": "Ishikawa Prefecture",
      "country": "Japan",
      "continent": "Asia-Pacific",
      "lat": 36.3012,
      "lng": 136.3623
    },
    "heroImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 195,
    "pricing": {
      "minPricePerNight": 680,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Yakushiyama Onsen & Kaiseki Retreat (3 Nights)",
          "days": 3,
          "price": 2400,
          "description": "Private open-air thermal bath in suite, daily Yakushiyama herbal treatments, private tea ceremony, and Michelin-grade Kaiseki dinners."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Longevity & Anti-Aging",
      "Spiritual Awakening"
    ],
    "modalities": [
      "Natural Mineral Onsen",
      "Yakushiyama Herbal Medicine",
      "Traditional Tea Ceremony (Chado)",
      "Seitai Postural Alignment",
      "Zen Meditation"
    ],
    "dietary": [
      "Seasonal Kaiseki",
      "Organic Japanese Local Farm",
      "Macrobiotic Options"
    ],
    "setting": "Hillside Forest & Sacred Hot Springs",
    "supervision": "Onsen Masters & Certified Herbal Practitioners",
    "amenities": [
      "Private In-Room Rotenburo Baths",
      "Spa Mukayu",
      "Tea Ceremony Room",
      "Zen Garden",
      "Library overlooking Bamboo Forest"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Morning Onsen Mineral Soak in Private Cedar Bath"
      },
      {
        "time": "08:30 AM",
        "activity": "Traditional Japanese Organic Breakfast"
      },
      {
        "time": "11:00 AM",
        "activity": "Private Tea Ceremony with Hostess Lady Sachiko"
      },
      {
        "time": "03:00 PM",
        "activity": "Signature Yakushiyama Hot Herbal Ball Therapy"
      },
      {
        "time": "05:30 PM",
        "activity": "Quiet Forest Contemplation & Zen Meditation"
      },
      {
        "time": "07:30 PM",
        "activity": "Multi-Course Seasonal Kaiseki Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Kazunari Nakamichi",
        "role": "Owner & Onsen Master",
        "credentials": "Relais & Châteaux Ambassador, Cultural Custodian",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-ben-1",
        "author": "Kenji Takahashi",
        "date": "1 month ago",
        "rating": 5,
        "title": "The ultimate Japanese onsen and healing sanctuary",
        "comment": "The balance of modern architecture and ancient hot spring tradition is unmatched. Soaking in the private wooden bath surrounded by snow and red maples was sublime.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+81 761 77 1340",
      "email": "info@mukayu.com",
      "website": "https://mukayu.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1013"
    }
  },
  {
    "id": "zaborin-ryokan-japan",
    "slug": "zaborin-hanazono-niseko-hokkaido",
    "name": "Zaborin",
    "tagline": "Exquisite Mineral Onsen Ryokan Nestled in the Birch Forests of Hanazono, Niseko, Hokkaido",
    "description": "Hidden deep within a pristine white birch forest in Hanazono, Niseko, Zaborin takes its name from the Zen phrase meaning 'to sit and forget in the forest.' Comprising just 15 freestanding villas, each accommodation is equipped with two private natural volcanic hot spring baths—one indoor cypress bath (hinoki) and one outdoor sculpted volcanic stone bath (rotenburo).\\n\\nZaborin's thermal spring waters rise from a private subterranean aquifer directly beneath the property, high in minerals that soothe joint pain, improve circulation, and hydrate the skin. Guests experience Kita-Kaiseki dining—a northern Japanese culinary tradition celebrating wild Hokkaido game, freshly foraged mountain herbs, and seafood from the Sea of Japan.",
    "location": {
      "city": "Niseko",
      "region": "Hokkaido",
      "country": "Japan",
      "continent": "Asia-Pacific",
      "lat": 42.8612,
      "lng": 140.7123
    },
    "heroImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.97,
    "reviewCount": 154,
    "pricing": {
      "minPricePerNight": 950,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Zaborin Kita-Kaiseki & Onsen Immersion (2 Nights)",
          "days": 2,
          "price": 2200,
          "description": "Dual private onsen baths in villa, multi-course Kita-Kaiseki dining, and private forest snowshoeing or summer trail walks."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Spiritual Awakening",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Natural Volcanic Onsen",
      "Shinrin-yoku (Forest Bathing)",
      "Kita-Kaiseki Nutrition",
      "Private Rotenburo"
    ],
    "dietary": [
      "Kita-Kaiseki Haute Cuisine",
      "Hokkaido Foraged Herbs",
      "Seasonal Seafood",
      "Organic Soba"
    ],
    "setting": "Pristine Hokkaido White Birch Forest",
    "supervision": "Onsen Master & Certified Hospitality Specialists",
    "amenities": [
      "Dual In-Villa Onsen Baths",
      "Tea Ceremony Room",
      "Library",
      "Foot Bath Deck",
      "Birch Forest Trails"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Private Volcanic Stone Bath Soak in Snow Forest"
      },
      {
        "time": "09:00 AM",
        "activity": "Traditional Hokkaido Breakfast"
      },
      {
        "time": "11:00 AM",
        "activity": "Guided Shinrin-yoku Forest Bathing Walk"
      },
      {
        "time": "03:00 PM",
        "activity": "Japanese Tea & Confection in Living Room"
      },
      {
        "time": "05:00 PM",
        "activity": "Indoor Hinoki Cypress Mineral Bath Soak"
      },
      {
        "time": "07:30 PM",
        "activity": "Chef Yoshihiro Seno's Multi-Course Kita-Kaiseki Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Chef Yoshihiro Seno",
        "role": "Master Culinary Creator",
        "credentials": "Pioneer of Kita-Kaiseki Gastronomy",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-zab-1",
        "author": "Emily Chen-Foster",
        "date": "2 months ago",
        "rating": 5,
        "title": "Perfection in every detail",
        "comment": "Watching snowflakes fall into the hot stone onsen on our balcony while surrounded by birch trees was breathtaking. The food and peace here are beyond anything in the luxury world.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+81 136 23 0003",
      "email": "info@zaborin.com",
      "website": "https://zaborin.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1014"
    }
  },
  {
    "id": "six-senses-ninh-van-bay-vietnam",
    "slug": "six-senses-ninh-van-bay-vietnam",
    "name": "Six Senses Ninh Van Bay",
    "tagline": "Eco-Luxury Rock-Pool Sanctuary Accessible Only by Boat with Vietnamese Herbal Healing",
    "description": "Accessible only by private boat across the turquoise waters of Ninh Van Bay near Nha Trang, Six Senses Ninh Van Bay sits nestled against dramatic towering rock formations and pristine rainforest. The resort's wellness philosophy blends Vietnamese traditional healing with Six Senses' cutting-edge sleep and longevity science.\\n\\nGuests reside in handcrafted timber villas perched over the ocean, atop granite boulders, or tucked into the hillside jungle. Wellness programs feature non-invasive bio-impedance health screenings, traditional Vietnamese cupping and herbal compress therapies, aerial yoga in an open-air pavilion, and organic nutrition sourced from the resort's extensive permaculture gardens.",
    "location": {
      "city": "Nha Trang",
      "region": "Khanh Hoa Province",
      "country": "Vietnam",
      "continent": "Asia-Pacific",
      "lat": 12.3567,
      "lng": 109.289
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.95,
    "reviewCount": 290,
    "pricing": {
      "minPricePerNight": 750,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Six Senses Detox & Sleep (5 Nights)",
          "days": 5,
          "price": 4600,
          "description": "Bio-screening assessment, sleep tracking, Vietnamese herbal treatments, aerial yoga, and customized dining."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Longevity & Anti-Aging",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Vietnamese Cupping",
      "Herbal Compresses",
      "Sleep Tracking Science",
      "Aerial Yoga",
      "Bio-Screening Analysis"
    ],
    "dietary": [
      "Organic Garden-to-Plate",
      "Vietnamese Clean Cuisine",
      "Gluten-Free",
      "Plant-Based Options"
    ],
    "setting": "Secluded Ocean Bay & Rock Formations",
    "supervision": "Resident Naturopath & Sleep Doctors",
    "amenities": [
      "Rock Villa Pools",
      "Six Senses Spa",
      "Aerial Yoga Pavilion",
      "Organic Permaculture Farm",
      "Coral Reef Snorkeling",
      "Wine Cave"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Hilltop Aerial Yoga & Breathwork"
      },
      {
        "time": "09:00 AM",
        "activity": "Organic Farm-to-Table Breakfast at Dining by the Bay"
      },
      {
        "time": "11:00 AM",
        "activity": "Bio-Screening Health Consultation"
      },
      {
        "time": "03:00 PM",
        "activity": "Traditional Vietnamese Herbal Compress & Cupping Therapy"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation on the Granite Rocks"
      },
      {
        "time": "07:30 PM",
        "activity": "Chef's Tasting Dinner by the Rocks"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Rachel Green",
        "role": "Resident Naturopath",
        "credentials": "ND, Integrative Medicine & Sleep Specialist",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-ssn-1",
        "author": "James Thornton",
        "date": "3 weeks ago",
        "rating": 5,
        "title": "Pure seclusion, unmatched beauty and restorative sleep",
        "comment": "Arriving by boat sets the tone immediately. The sleep doctor analyzed our biometrics and adjusted our room temperature, lighting, and therapies. I have not slept this deeply in a decade.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+84 258 3524 268",
      "email": "reservations-ninhvan@sixsenses.com",
      "website": "https://www.sixsenses.com/en/resorts/ninh-van-bay",
      "googleReviewsUrl": "https://maps.google.com/?cid=1015"
    }
  },
  {
    "id": "legacy-yen-tu-vietnam",
    "slug": "legacy-yen-tu-mgallery-quang-ninh",
    "name": "Legacy Yen Tu MGallery",
    "tagline": "Sacred Mountain Zen Sanctuary at the Cradle of Truc Lam Buddhism in Yen Tu, Vietnam",
    "description": "Nestled at the base of sacred Yen Tu Mountain in Quang Ninh province—the 13th-century birthplace of Vietnam's Truc Lam Zen Buddhist sect—Legacy Yen Tu was designed by celebrated architect Bill Bensley using traditional handcrafted construction methods. Hand-hewn stone walls, copper latches, and handmade ceramic tiles evoke the spiritual heritage of King Tran Nhan Tong.\\n\\nGuests immerse in the Am Tue Wellness sanctuary, participating in traditional King Tran herbal baths brewed with rare medicinal mountain plants, Zen walking meditations through ancient pine forests, and contemplative mindfulness workshops overlooking the mist-draped sacred peaks.",
    "location": {
      "city": "Uong Bi",
      "region": "Quang Ninh Province",
      "country": "Vietnam",
      "continent": "Asia-Pacific",
      "lat": 21.1567,
      "lng": 106.7234
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 175,
    "pricing": {
      "minPricePerNight": 165,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Truc Lam Zen & Herbal Bath Retreat (3 Nights)",
          "days": 3,
          "price": 650,
          "description": "Daily sacred herbal copper bath, guided mountain walking meditation, Zen tea ceremony, and monastery vegetarian meals."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Emotional & Trauma Healing"
    ],
    "modalities": [
      "Truc Lam Zen Meditation",
      "Medicinal Herbal Baths",
      "Forest Walking Meditation",
      "Sound Alchemy",
      "Tibetan Singing Bowls"
    ],
    "dietary": [
      "Vietnamese Buddhist Vegetarian",
      "Farm-to-Table",
      "Monastery Herbal Teas"
    ],
    "setting": "Sacred Mountain Mist Valley",
    "supervision": "Zen Meditation Masters & Traditional Herbalists",
    "amenities": [
      "Am Tue Wellness Sanctuary",
      "Outdoor Stone Pool",
      "Meditation Halls",
      "Yen Tu Mountain Cable Car",
      "Tea Lounge"
    ],
    "dailySchedule": [
      {
        "time": "06:00 AM",
        "activity": "Morning Zen Meditation & Chanting"
      },
      {
        "time": "07:30 AM",
        "activity": "Traditional Mountain Congee & Herbal Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Pilgrimage Walking Meditation up Yen Tu Mountain"
      },
      {
        "time": "02:30 PM",
        "activity": "Traditional Copper Tub Herbal Bath & Foot Reflexology"
      },
      {
        "time": "05:30 PM",
        "activity": "Zen Tea Ceremony & Philosophy Discussion"
      },
      {
        "time": "07:00 PM",
        "activity": "Mindful Vietnamese Vegetarian Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Thich Minh Duc",
        "role": "Resident Zen Master",
        "credentials": "Senior Monk of Truc Lam Yen Tu Lineage",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-lyt-1",
        "author": "Tran Van Minh",
        "date": "2 months ago",
        "rating": 5,
        "title": "A spiritual masterpiece in the mountains",
        "comment": "Bill Bensley's design makes you feel like you've traveled back to 13th century imperial Vietnam. The herbal copper baths and the silence of the mountains completely relieved my stress.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+84 203 6259 888",
      "email": "experience@legacyyentu.com",
      "website": "https://www.legacyyentu.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1016"
    }
  },
  {
    "id": "six-senses-bhutan",
    "slug": "six-senses-bhutan-thimphu-paro",
    "name": "Six Senses Bhutan",
    "tagline": "Five Intimate Valley Lodges Embodying Gross National Happiness & Himalayan Wellness",
    "description": "Spread across five distinct Himalayan valley lodges in Thimphu, Punakha, Paro, Gangtey, and Bumthang, Six Senses Bhutan provides an extraordinary journey of wellbeing through the Last Shangri-La. Known as 'Palaces in the Sky', each lodge is designed to immerse guests in the Kingdom's untouched natural beauty and spiritual heritage.\\n\\nWellness journeys incorporate traditional Bhutanese Dotsho (hot stone baths heated by river stones and infused with wild mountain herbs), meditation sessions with Buddhist lamas, and holistic treatments based on the principles of Gross National Happiness. The cuisine celebrates organic Himalayan agriculture and seasonal buckwheat and red rice.",
    "location": {
      "city": "Thimphu & Paro",
      "region": "Western Bhutan",
      "country": "Bhutan",
      "continent": "Asia-Pacific",
      "lat": 27.4728,
      "lng": 89.6393
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.98,
    "reviewCount": 135,
    "pricing": {
      "minPricePerNight": 1250,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Gross National Happiness Immersion (7 Nights)",
          "days": 7,
          "price": 9800,
          "description": "Multi-valley circuit lodge stay, private lama blessings, traditional Dotsho stone baths, and organic Himalayan dining."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Emotional & Trauma Healing"
    ],
    "modalities": [
      "Bhutanese Dotsho (Hot Stone Bath)",
      "Singing Bowl Sound Healing",
      "Buddhist Meditation",
      "Himalayan Forest Walking",
      "Aromatherapy"
    ],
    "dietary": [
      "Organic Himalayan Farm-to-Table",
      "Bhutanese Red Rice",
      "Gluten-Free",
      "Plant-Based Options"
    ],
    "setting": "High Altitude Himalayan Valley",
    "supervision": "Resident Wellness Doctors & Buddhist Lamas",
    "amenities": [
      "Valley View Spas",
      "Outdoor Stone Bath Pavilions",
      "Indoor Heated Pools",
      "Meditation Halls",
      "Library"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Morning Cloud Meditation with Resident Lama"
      },
      {
        "time": "08:30 AM",
        "activity": "Organic Farm-to-Table Breakfast overlooking Thimphu Valley"
      },
      {
        "time": "10:30 AM",
        "activity": "Guided Pine Forest Trek to Ancient Monastery"
      },
      {
        "time": "03:30 PM",
        "activity": "Traditional Dotsho River Stone Bath with Artemisia Leaves"
      },
      {
        "time": "06:00 PM",
        "activity": "Singing Bowl Sound Bath Session"
      },
      {
        "time": "07:30 PM",
        "activity": "Bhutanese Gastronomic Dinner by Fireplace"
      }
    ],
    "expertTeam": [
      {
        "name": "Lama Sonam",
        "role": "Resident Spiritual Guide",
        "credentials": "Senior Monk of Drukpa Kagyu Lineage",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-ssb-1",
        "author": "Catherine De Vries",
        "date": "1 month ago",
        "rating": 5,
        "title": "The closest place to heaven on earth",
        "comment": "Each of the five lodges has its own distinct character. The hot stone bath in Gangtey overlooking the valley of the black-necked cranes was transcendent.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+975 2 350 773",
      "email": "reservations-bhutan@sixsenses.com",
      "website": "https://www.sixsenses.com/en/resorts/bhutan",
      "googleReviewsUrl": "https://maps.google.com/?cid=1017"
    }
  },
  {
    "id": "dwarikas-resort-nepal",
    "slug": "dwarikas-resort-dhulikhel-nepal",
    "name": "Dwarika's Resort Dhulikhel",
    "tagline": "Vedic Holistic Lifestyle Sanctuary with Panoramic Himalayan & Everest Vistas in Dhulikhel",
    "description": "Perched high on a ridge overlooking the snow-capped Himalayan range in Dhulikhel just 30 miles from Kathmandu, Dwarika's Resort is a sanctuary inspired by ancient Vedic philosophy and Buddhist wisdom. The resort's design is an ode to traditional Newari terracotta and woodwork craftsmanship, created using sustainable local materials.\\n\\nGuests partake in personalized consultations with Ayurvedic doctors and Tibetan astrologers, exploring sound healing in the Himalayan salt chamber, chakra meditation, and therapeutic yoga. The resort's extensive organic farms supply 100% of the produce served in its six restaurants, ensuring pure, vitality-enhancing culinary nourishment.",
    "location": {
      "city": "Dhulikhel",
      "region": "Kathmandu Valley",
      "country": "Nepal",
      "continent": "Asia-Pacific",
      "lat": 27.6189,
      "lng": 85.5567
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.94,
    "reviewCount": 188,
    "pricing": {
      "minPricePerNight": 420,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Vedic Himalayan Wellness (5 Nights)",
          "days": 5,
          "price": 2450,
          "description": "Ayurvedic doctor consultation, chakra sound healing, salt chamber sessions, and organic farm-to-table dining."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Ayurveda & Panchakarma",
      "Burnout & Stress"
    ],
    "modalities": [
      "Vedic Ayurveda",
      "Himalayan Salt Chamber",
      "Chakra Sound Healing",
      "Tibetan Astrology",
      "Pranayama Yoga"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Vegetarian Ayurvedic",
      "Gluten-Free",
      "Himalayan Mountain Honey"
    ],
    "setting": "Highland Himalayan Ridge",
    "supervision": "Resident Ayurvedic Vaidyas & Yoga Gurus",
    "amenities": [
      "Himalayan Salt Room",
      "Chakra Sound Chambers",
      "Infinity Mountain Pool",
      "Organic Farms",
      "Meditation Mazes"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Sun Salutation Yoga facing Mount Everest Range"
      },
      {
        "time": "08:00 AM",
        "activity": "Farm-Fresh Organic Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Himalayan Salt Chamber Halotherapy"
      },
      {
        "time": "02:00 PM",
        "activity": "Chakra Sound Healing & Crystal Therapy"
      },
      {
        "time": "05:00 PM",
        "activity": "Walking Meditation through Sacred Forest Maze"
      },
      {
        "time": "07:30 PM",
        "activity": "Five-Course Ayurvedic Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. P.K. Joshi",
        "role": "Lead Ayurvedic Physician",
        "credentials": "BAMS (Nepal), 20+ Yrs Himalayan Medicine",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-dwa-1",
        "author": "Alistair Campbell",
        "date": "2 months ago",
        "rating": 5,
        "title": "Watching sunrise over the Himalayas from your bed",
        "comment": "Dwarika's Dhulikhel is extraordinary. The salt room and sound chamber are world-class, and eating vegetables harvested an hour earlier with panoramic Everest views was magical.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+977 11 490 612",
      "email": "info@dwarikas-dhulikhel.com",
      "website": "https://dwarikas-dhulikhel.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1018"
    }
  },
  {
    "id": "soneva-soul-maldives",
    "slug": "soneva-soul-at-soneva-fushi",
    "name": "Soneva Soul at Soneva Fushi",
    "tagline": "Pioneering Integrative Wellness Island with Hyperbaric, Ozone & Cryo in Baa Atoll, Maldives",
    "description": "Located within the pristine UNESCO Biosphere Reserve of Baa Atoll, Soneva Soul is an extraordinary two-level wellness complex elevated among the jungle canopy and over the lagoon at Soneva Fushi. The complex seamlessly unites thousands of years of ancient healing—including Ayurveda, Traditional Chinese Medicine, and herbalism—with modern integrative medicine.\\n\\nGuests have access to advanced therapies including hyperbaric oxygen chambers, clinical ozone therapy, whole-body cryotherapy, NAD+ IV vitamin drips, and platelet-rich plasma (PRP) treatments administered by resident medical doctors. The resort's barefoot luxury ethos ensures guests disconnect from modern stress while revitalizing at the cellular level.",
    "location": {
      "city": "Kunfunadhoo Island",
      "region": "Baa Atoll",
      "country": "Maldives",
      "continent": "Asia-Pacific",
      "lat": 5.1123,
      "lng": 73.0812
    },
    "heroImage": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.98,
    "reviewCount": 224,
    "pricing": {
      "minPricePerNight": 1450,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Soneva Soul Cellular Longevity (7 Nights)",
          "days": 7,
          "price": 11500,
          "description": "Hyperbaric oxygen therapy, NAD+ IV infusions, clinical ozone sessions, Ayurvedic treatments, and plant-based dining."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Hyperbaric Oxygen Therapy",
      "Ozone Therapy",
      "NAD+ IV Infusions",
      "Cryotherapy",
      "Traditional Chinese Medicine",
      "Ayurveda"
    ],
    "dietary": [
      "Organic Garden-to-Table",
      "Plant-Forward Clean Nutrition",
      "Sugar-Free",
      "Gluten-Free"
    ],
    "setting": "Baa Atoll UNESCO Biosphere Private Island",
    "supervision": "Medical Doctors & Integrative Specialists",
    "amenities": [
      "Two-Level Jungle Spa",
      "Hyperbaric Chamber",
      "Cryotherapy Room",
      "Lagoon Treatment Villas",
      "Organic Gardens",
      "Open-Air Cinema"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Lagoon Overwater Yoga & Breathwork"
      },
      {
        "time": "09:00 AM",
        "activity": "Organic Superfood Breakfast at Down to Earth"
      },
      {
        "time": "11:00 AM",
        "activity": "Hyperbaric Oxygen Chamber Therapy Session"
      },
      {
        "time": "02:30 PM",
        "activity": "NAD+ Longevity IV Drip & Ozone Therapy"
      },
      {
        "time": "05:30 PM",
        "activity": "Canopy Meditation & Singing Bowls"
      },
      {
        "time": "07:30 PM",
        "activity": "Chef's Organic Plant-Based Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Birgit Kraus",
        "role": "Medical Director",
        "credentials": "MD, Anti-Aging & Regenerative Medicine Specialist",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-son-1",
        "author": "Alexander Von Berg",
        "date": "1 month ago",
        "rating": 5,
        "title": "The pinnacle of medical wellness in the tropics",
        "comment": "Soneva Soul is groundbreaking. Having access to medical-grade hyperbaric oxygen and NAD+ IVs on a pristine Maldivian island surrounded by dolphins is simply unmatched.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+960 660 0304",
      "email": "reservations@soneva.com",
      "website": "https://soneva.com/soneva-soul",
      "googleReviewsUrl": "https://maps.google.com/?cid=1019"
    }
  },
  {
    "id": "six-senses-zighy-bay-oman",
    "slug": "six-senses-zighy-bay-musandam",
    "name": "Six Senses Zighy Bay",
    "tagline": "Dramatic Mountain-Meets-Fjord Coastal Haven with Authentic Arabic Hammam in Musandam, Oman",
    "description": "Located on the dramatic Musandam Peninsula of Oman where rugged mountain cliffs plunge directly into the turquoise Gulf of Oman, Six Senses Zighy Bay is a secluded haven of barefoot luxury and wellness. Built in the style of an authentic Omani village with stone houses and palm-thatched roofs, the resort offers serene isolation just two hours from Dubai.\\n\\nWellness journeys feature two traditional Arabic hammams, non-invasive bio-screening diagnostics, bespoke yogic sleep programs, and holistic herbal treatments. Guests can arrive in memorable fashion by paragliding from the cliff edge directly onto the private 1.6-kilometer beach.",
    "location": {
      "city": "Zighy Bay",
      "region": "Musandam Peninsula",
      "country": "Oman",
      "continent": "Asia-Pacific",
      "lat": 26.1567,
      "lng": 56.289
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 265,
    "pricing": {
      "minPricePerNight": 980,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Zighy Bay Holistic Reset (5 Nights)",
          "days": 5,
          "price": 5400,
          "description": "Traditional Moroccan & Arabic Hammam, sleep tracking analysis, private yoga, and Omani organic dining."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Longevity & Anti-Aging",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Arabic Hammam",
      "Moroccan Black Soap Scrub",
      "Bio-Screening",
      "Hatha Yoga",
      "Aromatherapy"
    ],
    "dietary": [
      "Middle Eastern Organic",
      "Farm-Fresh Citrus & Dates",
      "Gluten-Free",
      "Plant-Forward"
    ],
    "setting": "Fjord-Like Desert Mountain & Private Beach",
    "supervision": "Resident Naturopath & Certified Hammam Masters",
    "amenities": [
      "Two Arabic Hammams",
      "Saltwater Pool",
      "Private Beach",
      "Paragliding Arrival",
      "Organic Farm",
      "Sense on the Edge Dining"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Beachfront Sunrise Yoga & Pranayama"
      },
      {
        "time": "08:30 AM",
        "activity": "Organic Farm-to-Table Breakfast"
      },
      {
        "time": "11:00 AM",
        "activity": "Authentic Arabic Hammam Warm Marble Scrub Ritual"
      },
      {
        "time": "03:00 PM",
        "activity": "Bio-Screening Health Consultation or Salt Cave Soak"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Dhow Cruise Meditation"
      },
      {
        "time": "07:30 PM",
        "activity": "Cliffside Dining at Sense on the Edge"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Zaid Al-Husseini",
        "role": "Resident Wellness Specialist",
        "credentials": "MD, Holistic Health & Functional Medicine",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-zig-1",
        "author": "Faisal Al-Mansoor",
        "date": "2 months ago",
        "rating": 5,
        "title": "A breathtaking desert oasis of peace",
        "comment": "Paragliding into the resort is an exhilarating start to an incredibly relaxing stay. The Arabic hammam was the best I have ever experienced.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+968 2673 5555",
      "email": "reservations-zighy@sixsenses.com",
      "website": "https://www.sixsenses.com/en/resorts/zighy-bay",
      "googleReviewsUrl": "https://maps.google.com/?cid=1020"
    }
  }
,
  {
    "id": "dharana-at-shillim-india",
    "slug": "dharana-at-shillim-maharashtra",
    "name": "Dharana at Shillim",
    "tagline": "Eco-Wellness Sanctuary & Preventive Medicine Retreat in the Western Ghats UNESCO Reserve",
    "description": "Nestled within a pristine 3,500-acre private estate in the Sahyadri mountain range of Maharashtra, Dharana at Shillim is one of India's premier integrated eco-wellness sanctuaries. Surrounded by virgin forests, dramatic valleys, and organic farmland, the retreat synthesizes ancient Ayurvedic wisdom, traditional Chinese medicine, and state-of-the-art Western diagnostics to deliver life-altering preventive healthcare.\n\nGuests undertake personalized multi-night healing journeys guided by resident Ayurvedic doctors, naturopaths, and clinical nutritionists. From the Shillim Peak sunrise meditation to personalized Panchakarma cleansing, infrared detox therapy, and biodynamic farm-to-table cuisine, every element is designed to restore circadian equilibrium, reduce biological inflammation, and foster profound cellular renewal.",
    "location": {
      "city": "Shillim",
      "region": "Maharashtra",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 18.7214,
      "lng": 73.4568
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.93,
    "reviewCount": 187,
    "pricing": {
      "minPricePerNight": 420,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Dharana Healing & Cellular Rejuvenation (7 Nights)",
          "days": 7,
          "price": 3360,
          "description": "Comprehensive medical diagnostics, daily personalized Ayurvedic therapies, bespoke organic cuisine, and forest bathing."
        },
        {
          "name": "Dharana Weight Management & Metabolic Reset (5 Nights)",
          "days": 5,
          "price": 2450,
          "description": "Metabolic profiling, lymphatic drainage, high-intensity functional training, and detoxifying dosha-tailored nutrition."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Ayurvedic Medicine",
      "Panchakarma",
      "Forest Bathing",
      "Acupuncture",
      "Pranayama"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Ayurvedic Dosha-Specific",
      "Gluten-Free",
      "Vegetarian"
    ],
    "setting": "Mountain Eco-Reserve",
    "supervision": "Ayurvedic Physicians & Naturopathic Doctors",
    "amenities": [
      "17 Treatment Pavilions",
      "Hydrotherapy Complex",
      "Meditation Cave",
      "Organic Farm",
      "Heated Lap Pool",
      "Yoga Shala"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Shillim Peak Sunrise Meditation & Breathwork"
      },
      {
        "time": "08:00 AM",
        "activity": "Dosha-Balancing Organic Breakfast"
      },
      {
        "time": "10:00 AM",
        "activity": "Ayurvedic Physician Consultation & Pulse Diagnosis"
      },
      {
        "time": "11:30 AM",
        "activity": "Abhyanga Synchronized Herbal Oil Massage"
      },
      {
        "time": "01:30 PM",
        "activity": "Farm-to-Table Wellness Lunch at Green Table"
      },
      {
        "time": "04:30 PM",
        "activity": "Guided Western Ghats Forest Bathing Walk"
      },
      {
        "time": "06:30 PM",
        "activity": "Tibetan Singing Bowl Sound Bath"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Ayurvedic Nourishment & Herbal Elixirs"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Arun Pillai",
        "role": "Medical & Wellness Director",
        "credentials": "BAMS, MD (Alternative Medicine), 20+ Yrs Experience",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      },
      {
        "name": "Ananya Deshmukh",
        "role": "Senior Ayurvedic Nutritionist",
        "credentials": "M.Sc. Clinical Nutrition, Certified Ayurvedic Dietitian",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-shillim-1",
        "author": "Vikramaditya Mehta",
        "date": "3 weeks ago",
        "rating": 5,
        "title": "A transformative sanctuary in the Western Ghats",
        "comment": "The medical precision paired with deep Ayurvedic spirituality at Dharana is unmatched. In 7 days my chronic fatigue disappeared, and my digestion completely normalized.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 2114 712 468",
      "email": "reservations@dharanaretreat.com",
      "website": "https://dharanaretreat.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1021"
    }
  },
  {
    "id": "kairali-ayurvedic-healing-village-india",
    "slug": "kairali-ayurvedic-healing-village-palakkad",
    "name": "Kairali - The Ayurvedic Healing Village",
    "tagline": "Authentic 5,000-Year-Old Vedic Panchakarma Hospital Retreat in Palakkad, Kerala",
    "description": "Spread over 60 lush, chemical-free acres in the Palakkad district of Kerala, Kairali is an internationally certified NABH Ayurvedic hospital and retreat village. Built according to ancient Vaastu Shastra architectural principles, each traditional red-brick cottage is aligned with Vedic energy grids, bordered by flowing water streams and medicinal herbal gardens.\n\nPracticing an unbroken lineage of classical Kerala Ayurveda, Kairali offers authentic multi-week Panchakarma cleansing, post-illness rehabilitation, and chronic pain alleviation under the direct supervision of veteran Ayurvedic doctors. Treatments utilize freshly prepared organic herbal decoctions, farm-grown botanical oils, and pure vegetarian Sattvic meals cooked without artificial additives.",
    "location": {
      "city": "Palakkad",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 10.7867,
      "lng": 76.6548
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.89,
    "reviewCount": 312,
    "pricing": {
      "minPricePerNight": 195,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Classical Panchakarma Detoxification (14 Nights)",
          "days": 14,
          "price": 2730,
          "description": "Full five-action Vedic purification: Vamana, Virechana, Basti, Nasya, and Raktamokshana with daily physician consultations."
        },
        {
          "name": "Holistic Stress & Rejuvenation Therapy (7 Nights)",
          "days": 7,
          "price": 1365,
          "description": "Daily Shirodhara, herbal steam baths, full-body Abhyanga, yoga, meditation, and pure Sattvic full-board meals."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Chronic Illness & Pain",
      "Burnout & Stress"
    ],
    "modalities": [
      "Classical Panchakarma",
      "Shirodhara",
      "Kizhi Herbal Poultice",
      "Hatha Yoga",
      "Vedic Astrology"
    ],
    "dietary": [
      "Sattvic Ayurvedic",
      "Pure Organic Vegetarian",
      "No Preservatives",
      "Gluten-Free"
    ],
    "setting": "Lush Tropical River Village",
    "supervision": "NABH-Accredited Ayurvedic Medical Doctors",
    "amenities": [
      "Herbal Garden & Pharmacy",
      "Yoga & Meditation Hall",
      "Vastu Swimming Pool",
      "Ayurvedic Training Centre",
      "Badminton Court"
    ],
    "dailySchedule": [
      {
        "time": "06:00 AM",
        "activity": "Traditional Temple Bell Wakening & Herbal Kashayam"
      },
      {
        "time": "06:30 AM",
        "activity": "Classical Hatha Yoga & Pranayama in Forest Hall"
      },
      {
        "time": "08:00 AM",
        "activity": "Sattvic Organic Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Personal Ayurvedic Doctor Pulse Check"
      },
      {
        "time": "10:30 AM",
        "activity": "Authentic Shirodhara & Abhyanga Session"
      },
      {
        "time": "12:30 PM",
        "activity": "Wholesome Ayurvedic Farm Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Kizhi Herbal Compress or Steam Therapy"
      },
      {
        "time": "05:30 PM",
        "activity": "Evening Meditation & Chanting"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Nourishing Sattvic Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. K. R. Namboothiri",
        "role": "Chief Ayurvedic Physician",
        "credentials": "BAMS, 25+ Yrs Lineage in Classical Kerala Ayurveda",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-kairali-1",
        "author": "Evelyn Weber",
        "date": "1 month ago",
        "rating": 5,
        "title": "True traditional healing at its purest",
        "comment": "This is not a cosmetic spa; it is a genuine Ayurvedic sanctuary. The physicians are extraordinarily knowledgeable, and the peaceful green environment heals the soul.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 95551 56156",
      "email": "info@kairali.com",
      "website": "https://www.ayurvedicalliving.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1022"
    }
  },
  {
    "id": "niraamaya-surya-samudra-india",
    "slug": "niraamaya-surya-samudra-kovalam",
    "name": "Niraamaya Retreats Surya Samudra",
    "tagline": "Cliffside Oceanfront Ayurvedic Wellness Sanctuary on the Arabian Sea in Kovalam",
    "description": "Perched atop a dramatic cliff flanked by secluded beaches in Kovalam, Kerala, Niraamaya Retreats Surya Samudra is a celebrated Relais & Châteaux wellness resort. Set amidst 31 heritage cottages crafted from centuries-old reclaimed Kerala wood and terracotta, the property marries authentic South Indian aesthetic heritage with world-class wellness therapy.\n\nThe resort's Niraamaya Spa is an acclaimed center for traditional Ayurvedic cures, modern European hydrotherapies, and mindful coastal rejuvenation. Guests listen to the sound of crashing waves while undergoing warm herbal oil treatments, oceanfront sunrise yoga, and personalized holistic wellness consultations.",
    "location": {
      "city": "Kovalam",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 8.3582,
      "lng": 76.9944
    },
    "heroImage": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 220,
    "pricing": {
      "minPricePerNight": 350,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Ayurveda Anti-Stress & Rejuvenation (7 Nights)",
          "days": 7,
          "price": 2450,
          "description": "Full daily Ayurvedic therapy sessions, Shirodhara, sea-view yoga, doctor consultations, and wellness full-board."
        },
        {
          "name": "Slimming & Metabolic Immersion (10 Nights)",
          "days": 10,
          "price": 3500,
          "description": "Herbal powder massages (Udvarthanam), medicated steam baths, cleansing diet, and daily seaside fitness."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Ayurveda",
      "Shirodhara",
      "Udvarthanam",
      "Oceanfront Yoga",
      "Hydrotherapy"
    ],
    "dietary": [
      "Organic Coastal Cuisine",
      "Ayurvedic Dosha-Specific",
      "Fresh Catch & Farm Greens",
      "Gluten-Free"
    ],
    "setting": "Cliffside Oceanfront",
    "supervision": "Resident Ayurvedic Doctors & Yoga Masters",
    "amenities": [
      "Cliff-Edge Infinity Pool",
      "Private Beach Access",
      "Award-Winning Niraamaya Spa",
      "Sunset Terrace",
      "Organic Gardens"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Cliff-Edge Sunrise Yoga & Ocean Meditation"
      },
      {
        "time": "08:30 AM",
        "activity": "Nutrient-Rich Coastal Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Ayurvedic Pulse Diagnosis & Consultation"
      },
      {
        "time": "11:30 AM",
        "activity": "Traditional Abhyanga & Shirodhara Oil Pouring"
      },
      {
        "time": "01:30 PM",
        "activity": "Fresh Coastal Wellness Lunch at Cafe Samsara"
      },
      {
        "time": "04:30 PM",
        "activity": "Ocean Breeze Pranayama & Sound Healing"
      },
      {
        "time": "07:00 PM",
        "activity": "Cliffside Candlelight Nourishment with Ayurvedic Herbs"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Deepa Nair",
        "role": "Head of Ayurveda",
        "credentials": "BAMS, Ayurvedic Gynaecology & Lifestyle Specialist",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-niraamaya-1",
        "author": "Sophie Dupont",
        "date": "2 months ago",
        "rating": 5,
        "title": "Perfection overlooking the Arabian Sea",
        "comment": "Watching dolphins from the cliff edge during morning yoga, followed by the best Shirodhara treatment I have ever had. Truly unforgettable.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 80 4510 4510",
      "email": "reservations@niraamaya.com",
      "website": "https://www.niraamaya.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1023"
    }
  },
  {
    "id": "como-uma-ubud-indonesia",
    "slug": "como-uma-ubud-bali",
    "name": "COMO Uma Ubud",
    "tagline": "Hillside Wellness Haven Overlooking the Tjampuhan Valley in Ubud, Bali",
    "description": "Tucked into the lush tropical hillsides of Ubud overlooking the sacred Tjampuhan Valley, COMO Uma Ubud is a boutique luxury sanctuary dedicated to mindful wellness and holistic balance. Featuring 46 contemporary open-air rooms, suites, and pool villas designed by Japanese architect Koichiro Ikebuchi, the resort radiates tranquility and natural elegance.\n\nThe resort's COMO Shambhala Retreat offers evidence-based Asian therapies, reflexology, steam rooms, and open-air yoga pavillions with panoramic views of the Oos River valley. The celebrated cuisine at Uma Cucina and Kemiri highlights organic local produce and COMO Shambhala's pure, nutrient-dense culinary philosophy.",
    "location": {
      "city": "Ubud",
      "region": "Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.5069,
      "lng": 115.2533
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 260,
    "pricing": {
      "minPricePerNight": 380,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "COMO Shambhala Wellness Discovery (5 Nights)",
          "days": 5,
          "price": 2100,
          "description": "Daily signature massages, private yoga sessions, guided Tjampuhan ridge walks, and COMO Shambhala nutrition."
        },
        {
          "name": "Deep Rest & Reset (7 Nights)",
          "days": 7,
          "price": 2940,
          "description": "Aromatherapy immersions, reflexology, meditation, temple blessing ceremony, and tailored wellness menu."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Mindfulness & Mental Health",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Balinese Massage",
      "Aromatherapy",
      "Vinyasa Yoga",
      "Reflexology",
      "Balinese Water Blessing"
    ],
    "dietary": [
      "COMO Shambhala Clean Cuisine",
      "Organic Raw",
      "Plant-Based",
      "Gluten-Free"
    ],
    "setting": "River Valley Jungle Hillside",
    "supervision": "Resident Wellness Practitioners & Certified Yoga Teachers",
    "amenities": [
      "Open-Air Yoga Studio",
      "COMO Shambhala Spa",
      "25m Lap Pool",
      "Reflexology Path",
      "Uma Cucina Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Tjampuhan Ridge Morning Walk & Breathwork"
      },
      {
        "time": "08:30 AM",
        "activity": "COMO Shambhala Organic Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Private Yoga or Pilates Movement Session"
      },
      {
        "time": "01:00 PM",
        "activity": "Vitality Lunch with Raw Organic Salads & Cold-Pressed Juices"
      },
      {
        "time": "03:30 PM",
        "activity": "COMO Shambhala Signature 90-Minute Massage"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Sound Meditation Over Valley"
      },
      {
        "time": "07:30 PM",
        "activity": "Wholesome Balinese Dinner at Kemiri"
      }
    ],
    "expertTeam": [
      {
        "name": "Wayan Sudarma",
        "role": "Lead Holistic Practitioner",
        "credentials": "Certified Balinese Usada Healer & Yoga Master",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-uma-1",
        "author": "Jonathan Brooks",
        "date": "3 months ago",
        "rating": 5,
        "title": "Sublime peace and world-class treatments",
        "comment": "The setting above the river is magical. Every single massage was world-class, and the COMO Shambhala cuisine made me feel vibrant from day one.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 972 448",
      "email": "res.uma.ubud@comohotels.com",
      "website": "https://www.comohotels.com/bali/como-uma-ubud",
      "googleReviewsUrl": "https://maps.google.com/?cid=1024"
    }
  },
  {
    "id": "adiwana-svarga-loka-indonesia",
    "slug": "adiwana-svarga-loka-ubud",
    "name": "Adiwana Svarga Loka",
    "tagline": "Riverside Holistic Healing Resort & Chakra Balancing Sanctuary in Ubud, Bali",
    "description": "Resting gracefully along the sacred Campuhan River bank in Ubud, Adiwana Svarga Loka is a peaceful holistic sanctuary dedicated to emotional balance, physical cleansing, and spiritual renewal. Shaded by ancient banyan trees, the resort is designed as an authentic Balinese healing village where modern wellness seekers reconnect with the earth's natural frequency.\n\nThe resort's AyurSoma Spa offers comprehensive therapies including traditional Balinese Usada herbal medicine, Chakra energy balancing, sound healing, colon cleansing, and customized detox menus. Spiritual healers (Balian) provide private consultations and sacred water blessing ceremonies.",
    "location": {
      "city": "Ubud",
      "region": "Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.5042,
      "lng": 115.2558
    },
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.87,
    "reviewCount": 195,
    "pricing": {
      "minPricePerNight": 210,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Chakra Balancing & Emotional Release (5 Nights)",
          "days": 5,
          "price": 1150,
          "description": "Chakra reading, daily energy therapy, Balinese boreh body wrap, sacred water purification, and vegan full-board."
        },
        {
          "name": "Holistic Detox & Rejuvenation (7 Nights)",
          "days": 7,
          "price": 1610,
          "description": "Herbal lymphatic cleansing, daily yoga shala sessions, organic juice fasting or clean dining, and herbal steam baths."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Mindfulness & Mental Health",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Balinese Usada Healing",
      "Chakra Balancing",
      "Crystal Sound Healing",
      "Kundalini Yoga",
      "Melukat Water Blessing"
    ],
    "dietary": [
      "Balinese Sattvic",
      "Plant-Based & Vegan",
      "Raw Organic",
      "Gluten-Free"
    ],
    "setting": "Riverside Forest Valley",
    "supervision": "Traditional Balinese Healers & Certified Naturopaths",
    "amenities": [
      "AyurSoma Wellness Spa",
      "Riverside Yoga Shala",
      "Natural Rock Swimming Pool",
      "Sacred Spring Pavilion",
      "Banyan Cafe"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Riverside Kundalini Yoga & Chanting"
      },
      {
        "time": "08:30 AM",
        "activity": "Fresh Cold-Pressed Elixir & Tropical Fruit Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Traditional Balinese Healer (Balian) Consultation"
      },
      {
        "time": "11:30 AM",
        "activity": "Chakra Alignment & Tibetan Bowl Sound Therapy"
      },
      {
        "time": "01:00 PM",
        "activity": "Plant-Based Vitality Lunch at Banyan Cafe"
      },
      {
        "time": "03:30 PM",
        "activity": "Balinese Boreh Warming Herbal Wrap & Herbal Bath"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation & River Blessing"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Organic Dinner & Herbal Infusions"
      }
    ],
    "expertTeam": [
      {
        "name": "Jero Mangku Wayan",
        "role": "Spiritual Healer & Priest",
        "credentials": "Lineage Balinese Healer & Priest of Campuhan",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-svarga-1",
        "author": "Camilla Lind",
        "date": "2 months ago",
        "rating": 5,
        "title": "Profound healing by the sacred river",
        "comment": "The Melukat water blessing ceremony cleared emotional heaviness I had carried for years. The river sounds and gentle therapists make this place pure magic.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 977 540",
      "email": "experience.svargaloka@adiwanahotels.com",
      "website": "https://adiwanahotels.com/svargaloka-resort-ubud-bali",
      "googleReviewsUrl": "https://maps.google.com/?cid=1025"
    }
  },
  {
    "id": "the-chateau-wellness-resort-malaysia",
    "slug": "the-chateau-wellness-resort-pahang",
    "name": "The Chateau Wellness Resort & Spa",
    "tagline": "World's First Organic Wellness Resort Modeled After Haut-Koenigsbourg Castle in Pahang",
    "description": "Perched 3,000 feet above sea level amidst the ancient tropical rainforests of Berjaya Hills in Pahang, The Chateau is an organic wellness destination modeled after the 12th-century Haut-Koenigsbourg castle in Alsace, France. Combining European spa heritage with pristine highland air, this sanctuary offers complete relief from urban pollution and chronic stress.\n\nThe resort's La Santé Spa features European hydrotherapy circuits including an herbal steam grotto, Aquatonic pool, salt cave, and Caracalla bath. Programs are supported by clinical medical consultations, bio-impedance body scans, organic phyto-aroma therapies, and fine dining prepared entirely from 100% certified organic produce grown in the resort's own private farms.",
    "location": {
      "city": "Bentong",
      "region": "Pahang",
      "country": "Malaysia",
      "continent": "Asia-Pacific",
      "lat": 3.3986,
      "lng": 101.8392
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.86,
    "reviewCount": 178,
    "pricing": {
      "minPricePerNight": 260,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "European Hydrotherapy & Detox (5 Nights)",
          "days": 5,
          "price": 1550,
          "description": "La Santé Aquatonic pool sessions, seaweed wraps, salt grotto inhalation, and 100% certified organic dining."
        },
        {
          "name": "Couples Wellness & Stress Relief (3 Nights)",
          "days": 3,
          "price": 990,
          "description": "Aromatherapy massages, private Caracalla bath, highland nature treks, and organic vitality breakfasts."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "European Hydrotherapy",
      "Aquatonic Pool",
      "Salt Inhalation Cave",
      "Phyto-Aromatherapy",
      "Bio-Impedance Diagnostics"
    ],
    "dietary": [
      "100% Certified Organic",
      "Farm-to-Table French Cuisine",
      "Anti-Inflammatory",
      "Low Sodium"
    ],
    "setting": "Highland Rainforest Castle",
    "supervision": "Medical Consultants & European Spa Therapists",
    "amenities": [
      "La Santé European Spa",
      "Aquatonic Heated Pool",
      "Salt Grotto Cave",
      "Organic Farm",
      "Equestrian Centre",
      "Japanese Tea House"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Highland Forest Canopy Walk & Fresh Air Breathing"
      },
      {
        "time": "08:30 AM",
        "activity": "100% Certified Organic Vitality Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Bio-Impedance Body Scan & Spa Consultation"
      },
      {
        "time": "11:30 AM",
        "activity": "Aquatonic Pool Therapy & Herbal Grotto Steam"
      },
      {
        "time": "01:00 PM",
        "activity": "Organic French Spa Cuisine Lunch at L'Hirondelle"
      },
      {
        "time": "03:30 PM",
        "activity": "Salt Cave Inhalation & Phyto-Aroma Massage"
      },
      {
        "time": "06:00 PM",
        "activity": "Restorative Yoga in Castle Pavilion"
      },
      {
        "time": "07:30 PM",
        "activity": "Four-Course Organic Spa Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Jean-Marc Blanc",
        "role": "Spa & Medical Director",
        "credentials": "MD (France), Specialist in European Balneology",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-chateau-1",
        "author": "Audrey Chen",
        "date": "1 month ago",
        "rating": 5,
        "title": "Cool mountain air and phenomenal organic food",
        "comment": "Escaping the Kuala Lumpur heat to this castle in the highlands was pure bliss. The Aquatonic pool and salt grotto completely cleared my sinuses and relaxed my muscles.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+60 9 221 3888",
      "email": "reservation@thechateau.com.my",
      "website": "https://www.thechateau.com.my",
      "googleReviewsUrl": "https://maps.google.com/?cid=1026"
    }
  },
  {
    "id": "anantara-peace-haven-tangalle-sri-lanka",
    "slug": "anantara-peace-haven-tangalle",
    "name": "Anantara Peace Haven Tangalle Resort",
    "tagline": "Coastal Cliffside Ayurvedic Sanctuary & Wellness Immersion on Sri Lanka's Southern Coast",
    "description": "Secluded on a rocky outcrop along the dramatic southern coastline of Sri Lanka, Anantara Peace Haven Tangalle is surrounded by a 22-acre coconut plantation and pristine golden beach. Blending coastal luxury with ancient Ayurvedic traditions, this resort offers deeply grounding wellness retreats crafted to reset mind and body.\n\nLed by a resident Ayurvedic doctor, guests experience customized journeys featuring traditional Dosha pulse diagnosis, Shirodhara with freshly pressed herbal oils, beachfront Kundalini yoga, and sleep restoration rituals. The culinary experience is highlighted by organic harvests from the on-site farm and customized wellness menus tailored to individual metabolic constitutions.",
    "location": {
      "city": "Tangalle",
      "region": "Southern Province",
      "country": "Sri Lanka",
      "continent": "Asia-Pacific",
      "lat": 6.0242,
      "lng": 80.7944
    },
    "heroImage": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.92,
    "reviewCount": 285,
    "pricing": {
      "minPricePerNight": 390,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Inner Harmony Ayurvedic Retreat (5 Nights)",
          "days": 5,
          "price": 2350,
          "description": "Doctor consultation, daily Shirodhara and Abhyanga, beach yoga, sleep enhancement therapy, and full wellness board."
        },
        {
          "name": "Deep Rest & Sleep Immersion (7 Nights)",
          "days": 7,
          "price": 3150,
          "description": "Circadian alignment therapy, sound bowl healing, warm herbal compresses, and personalized nutritional plan."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Sleep & Insomnia",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Traditional Ayurveda",
      "Shirodhara",
      "Beachfront Kundalini Yoga",
      "Sound Bowl Therapy",
      "Herbal Poultice"
    ],
    "dietary": [
      "Ayurvedic Dosha-Specific",
      "Farm-to-Table Organic",
      "Fresh Local Seafood",
      "Gluten-Free"
    ],
    "setting": "Coastal Cliffside & Secluded Beach",
    "supervision": "Resident Ayurvedic Doctor & Yoga Master",
    "amenities": [
      "Anantara Spa with Ayurvedic Suites",
      "Cliffside 25m Pool",
      "Organic Garden & Farm",
      "Tennis Court",
      "Beach Pavilion"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Oceanfront Sunrise Yoga & Mindful Breathing"
      },
      {
        "time": "08:30 AM",
        "activity": "Dosha-Specific Organic Breakfast with Herbal Teas"
      },
      {
        "time": "10:30 AM",
        "activity": "Ayurvedic Doctor Consultation & Health Check"
      },
      {
        "time": "11:30 AM",
        "activity": "Traditional Abhyanga & Shirodhara Session"
      },
      {
        "time": "01:30 PM",
        "activity": "Nourishing Garden-to-Plate Lunch at Il Mare"
      },
      {
        "time": "04:30 PM",
        "activity": "Tibetan Sound Healing & Beach Meditation"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Ayurvedic Dinner & Sleep Herbal Elixir"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Sampath Perera",
        "role": "Resident Ayurvedic Doctor",
        "credentials": "BAMS (Colombo), 18+ Yrs Ayurvedic Medicine",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-tangalle-1",
        "author": "Helena Lindqvist",
        "date": "2 months ago",
        "rating": 5,
        "title": "Absolute haven of tranquility by the Indian Ocean",
        "comment": "Dr. Sampath's diagnosis was astonishingly accurate. The combination of ocean breeze, daily Shirodhara, and exquisite organic food gave me the deepest sleep of my life.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 477 670 700",
      "email": "tangalle@anantara.com",
      "website": "https://www.anantara.com/en/peace-haven-tangalle",
      "googleReviewsUrl": "https://maps.google.com/?cid=1027"
    }
  },
  {
    "id": "ulpotha-yoga-ayurveda-sri-lanka",
    "slug": "ulpotha-yoga-ayurveda-retreat",
    "name": "Ulpotha Yoga & Ayurveda Retreat",
    "tagline": "World-Renowned Off-Grid Eco-Village & Authentic Ayurvedic Sanctuary in Rural Sri Lanka",
    "description": "Hidden in the remote jungle foothills of central Sri Lanka beside a lotus-covered lake, Ulpotha is an enchanting off-grid traditional agricultural village and globally celebrated seasonal wellness sanctuary. Operating without electricity to preserve natural bio-rhythms, guests sleep in open-air clay and thatch pavilions cooled by forest breezes and illuminated by lanterns and stars.\n\nOpen only during select months, Ulpotha is revered by serious yogis and wellness connoisseurs worldwide. Highly esteemed international yoga masters lead twice-daily classes in the open-air shala, while veteran Ayurvedic doctors administer authentic classical Panchakarma treatments using hand-crushed herbs and oils harvested from the surrounding sacred forest.",
    "location": {
      "city": "Galbodagalla",
      "region": "North Western Province",
      "country": "Sri Lanka",
      "continent": "Asia-Pacific",
      "lat": 7.7854,
      "lng": 80.3214
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 165,
    "pricing": {
      "minPricePerNight": 230,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Classical Ayurveda & Yoga Immersion (14 Nights)",
          "days": 14,
          "price": 3220,
          "description": "Complete traditional Ayurvedic Panchakarma, twice-daily master yoga classes, all organic village meals, and lake swims."
        },
        {
          "name": "Holistic Eco-Yoga Village Retreat (7 Nights)",
          "days": 7,
          "price": 1610,
          "description": "Two daily yoga sessions with international guest teachers, full-board organic village feast, and forest nature walks."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Mental Health",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Traditional Ayurveda",
      "Ashtanga & Hatha Yoga",
      "Forest Meditation",
      "Panchakarma",
      "Herbal Baths"
    ],
    "dietary": [
      "Pure Organic Vegan",
      "Traditional Sri Lankan Village Food",
      "Wood-Fired Clay Pot Cooking",
      "Gluten-Free"
    ],
    "setting": "Off-Grid Jungle Lake Village",
    "supervision": "Vedic Ayurvedic Physicians & Renowned Global Yoga Teachers",
    "amenities": [
      "Lotus Lake Swimming",
      "Open-Air Yoga Shala",
      "Ayurvedic Treatment Hut",
      "Forest Meditation Rocks",
      "Traditional Hearth Kitchen"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Morning Herbal Infusion & Lake Walk"
      },
      {
        "time": "07:00 AM",
        "activity": "Dynamic 2-Hour Asana & Pranayama Class in Open Shala"
      },
      {
        "time": "09:30 AM",
        "activity": "Traditional Clay-Pot Sri Lankan Breakfast Feast"
      },
      {
        "time": "11:00 AM",
        "activity": "Ayurvedic Doctor Consultation & Tailored Herbal Massage"
      },
      {
        "time": "01:30 PM",
        "activity": "Organic Farm Lunch Cooked Over Coconut Wood Fire"
      },
      {
        "time": "03:00 PM",
        "activity": "Lotus Lake Swimming or Hammock Reading"
      },
      {
        "time": "05:00 PM",
        "activity": "Gentle Restorative Yin Yoga & Chanting"
      },
      {
        "time": "07:30 PM",
        "activity": "Lantern-Lit Village Dinner Under Ancient Trees"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Sivalingam",
        "role": "Resident Ayurvedic Vaidya",
        "credentials": "Doctor of Classical Ayurveda, 30+ Yrs Clinical Experience",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-ulpotha-1",
        "author": "Marcus Thorne",
        "date": "4 months ago",
        "rating": 5,
        "title": "Paradise on Earth – life changing experience",
        "comment": "No electricity, no Wi-Fi, just pure connection to nature, world-class yoga, and authentic Ayurveda. Eating food grown 100 meters away cooked in clay pots was divine.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 11 257 5686",
      "email": "info@ulpotha.com",
      "website": "https://www.ulpotha.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1028"
    }
  },
  {
    "id": "hoshinoya-kyoto-japan",
    "slug": "hoshinoya-kyoto-arashiyama",
    "name": "HOSHINOYA Kyoto",
    "tagline": "Riverside Zen Sanctuary & Mindful Longevity Pavilion in Historic Arashiyama, Kyoto",
    "description": "Accessible only by a serene wooden boat gliding up the emerald Oi River, HOSHINOYA Kyoto is a masterfully restored 17th-century riverside retreat situated in the forested gorge of Arashiyama. Constructed with centuries-old Sukiya-style woodwork and delicate patterned Karakami paper screens, this sanctuary embodies the profound Japanese aesthetic of wabi-sabi and Zen stillness.\n\nWellness at HOSHINOYA Kyoto focuses on mindful restoration and seasonal harmony. Guests participate in private morning Zen meditation with Buddhist monks at a historic Zen temple, practice breathing exercises in the floating river pavilion, experience therapeutic acupuncture and Kampo botanical baths, and savor Michelin-caliber seasonal kaiseki nutrition that aligns the body with natural micro-seasons.",
    "location": {
      "city": "Kyoto",
      "region": "Kansai",
      "country": "Japan",
      "continent": "Asia-Pacific",
      "lat": 35.0116,
      "lng": 135.6777
    },
    "heroImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "featured",
    "rating": 4.95,
    "reviewCount": 340,
    "pricing": {
      "minPricePerNight": 820,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Zen Mind & Temple Meditation Immersion (3 Nights)",
          "days": 3,
          "price": 2650,
          "description": "Private temple meditation with head priest, riverside breathwork, seasonal Kaiseki dining, and private boat transfers."
        },
        {
          "name": "Seasonal Kampo & Deep Rest Journey (5 Nights)",
          "days": 5,
          "price": 4300,
          "description": "Kampo herbal bath rituals, acupuncture therapy, forest contemplation, and bespoke micro-seasonal Japanese wellness dining."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Mental Health",
      "Burnout & Stress",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Zen Meditation",
      "Kampo Herbalism",
      "Japanese Acupuncture",
      "River Breathwork",
      "Tea Ceremony (Chado)"
    ],
    "dietary": [
      "Michelin-Caliber Kaiseki",
      "Shojin Ryori (Buddhist Vegan)",
      "Seasonal Kyoto Vegetables",
      "Gluten-Free Available"
    ],
    "setting": "Historic River Gorge Forest",
    "supervision": "Resident Kampo Specialists & Zen Buddhist Monks",
    "amenities": [
      "Floating River Pavilion",
      "Historic Sukiya Suites",
      "Private Wooden Boat Arrival",
      "Zen Garden",
      "Tea Ceremony Salon"
    ],
    "dailySchedule": [
      {
        "time": "05:30 AM",
        "activity": "Morning Wooden Boat to Historic Temple for Zen Meditation & Chanting"
      },
      {
        "time": "08:00 AM",
        "activity": "Traditional Kyoto Hot-Pot Breakfast with Handcrafted Tofu"
      },
      {
        "time": "10:00 AM",
        "activity": "Mindful Forest Breathing Along the Oi River"
      },
      {
        "time": "11:30 AM",
        "activity": "Kampo Herbal Bath & Meridian Acupuncture Session"
      },
      {
        "time": "01:30 PM",
        "activity": "Delicate Seasonal Lunch in Private Pavilion"
      },
      {
        "time": "03:30 PM",
        "activity": "Traditional Chado Japanese Tea Ceremony"
      },
      {
        "time": "05:30 PM",
        "activity": "Floating Pavilion Sunset Silence & Flute Music"
      },
      {
        "time": "07:30 PM",
        "activity": "Multi-Course Seasonal Wellness Kaiseki Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Rev. Kenjiro Takahashi",
        "role": "Zen Meditation Master",
        "credentials": "Rinzai Zen Buddhist Priest, 20+ Yrs Monastic Practice",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-hoshinoya-1",
        "author": "Charlotte Von Berg",
        "date": "1 month ago",
        "rating": 5,
        "title": "Unrivaled spiritual serenity and perfection",
        "comment": "Gliding on the river boat in the morning mist to meditate with the Buddhist monks was one of the most sublime moments of my life. Every single detail is refined beyond imagination.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+81 50 3134 8091",
      "email": "info@hoshinoya.com",
      "website": "https://hoshinoya.com/kyoto/en/",
      "googleReviewsUrl": "https://maps.google.com/?cid=1029"
    }
  },
  {
    "id": "gangtey-lodge-bhutan",
    "slug": "gangtey-lodge-phobjikha-valley",
    "name": "Gangtey Lodge",
    "tagline": "High-Altitude Himalayan Eco-Sanctuary Overlooking the Sacred Phobjikha Valley",
    "description": "Perched high on a ridge overlooking the breathtaking glacial expanse of the Phobjikha Valley in central Bhutan, Gangtey Lodge is a 12-suite architectural gem designed in harmony with traditional Bhutanese farmhouse aesthetics. The valley is a protected winter sanctuary for the endangered Black-Necked Cranes and is steeped in Buddhist sanctity.\n\nWellness at Gangtey Lodge centers around the healing power of Himalayan nature and ancient Bhutanese medicine (gSo-ba Rig-pa). Guests indulge in traditional Bhutanese hot stone baths infused with wild Artemisia (khempa) herbs heated by river rocks roasted in open wood fires, embark on silent valley walks to 17th-century monasteries, and practice guided mindfulness overlooking mist-shrouded mountain peaks.",
    "location": {
      "city": "Phobjikha Valley",
      "region": "Wangdue Phodrang",
      "country": "Bhutan",
      "continent": "Asia-Pacific",
      "lat": 27.5147,
      "lng": 90.1873
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.97,
    "reviewCount": 142,
    "pricing": {
      "minPricePerNight": 650,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Himalayan Renewal & Hot Stone Immersion (4 Nights)",
          "days": 4,
          "price": 2600,
          "description": "Daily traditional Khempa hot stone baths, guided monastery nature treks, organic Bhutanese wellness dining, and monk blessings."
        },
        {
          "name": "Spiritual Valley Meditation & Gross National Happiness (6 Nights)",
          "days": 6,
          "price": 3900,
          "description": "Daily meditation with resident lama, silent nature walks, Ayurvedic herbal massages, and fireplace culinary experiences."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Mental Health",
      "Burnout & Stress",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Bhutanese Hot Stone Bath",
      "Khempa Herbalism",
      "Buddhist Meditation",
      "Monastery Chanting",
      "Forest Walking"
    ],
    "dietary": [
      "Bhutanese Organic Farm-to-Table",
      "Himalayan Buckwheat & Red Rice",
      "Vegetarian",
      "Gluten-Free"
    ],
    "setting": "Glacial Valley Himalayan Ridge",
    "supervision": "Resident Bhutanese Healers & Buddhist Monks",
    "amenities": [
      "Traditional Stone Bath Pavilions",
      "Fireplace Lounge with Valley Views",
      "Open-Air Meditation Terrace",
      "Library & Tea Salon"
    ],
    "dailySchedule": [
      {
        "time": "06:45 AM",
        "activity": "Himalayan Valley Sunrise Meditation & Breathwork"
      },
      {
        "time": "08:00 AM",
        "activity": "Hearty Farm-Fresh Breakfast by the Fireplace"
      },
      {
        "time": "09:30 AM",
        "activity": "Mindful Valley Nature Walk to Gangtey Monastery"
      },
      {
        "time": "11:30 AM",
        "activity": "Private Buddhist Monk Blessing & Butter Lamp Lighting"
      },
      {
        "time": "01:00 PM",
        "activity": "Organic Valley Lunch with Fresh Himalayan Herbs"
      },
      {
        "time": "03:30 PM",
        "activity": "Traditional Wood-Fired Hot Stone Bath with Wild Khempa"
      },
      {
        "time": "05:30 PM",
        "activity": "Himalayan Herbal Tea & Sunset Contemplation"
      },
      {
        "time": "07:30 PM",
        "activity": "Candlelit Bhutanese Wellness Dinner by the Hearth"
      }
    ],
    "expertTeam": [
      {
        "name": "Lopen Tashi Wangchuk",
        "role": "Resident Buddhist Teacher",
        "credentials": "Former Monk of Gangtey Monastery, Master of Buddhist Philosophy",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-gangtey-1",
        "author": "Alexander Wright",
        "date": "2 months ago",
        "rating": 5,
        "title": "Heaven on earth in the Phobjikha Valley",
        "comment": "Soaking in a traditional hot stone bath while watching mist roll across the valley with black-necked cranes flying overhead was magical. True spiritual peace.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+975 2 340 943",
      "email": "res@gangteylodge.com",
      "website": "https://www.gangteylodge.com",
      "googleReviewsUrl": "https://maps.google.com/?cid=1030"
    }
  },
  {
    "id": "noku-maldives-wellness",
    "slug": "noku-maldives-noonu-atoll",
    "name": "Noku Maldives",
    "tagline": "Barefoot Luxury Lagoon Wellness Sanctuary on Kudafunafaru Island, Noonu Atoll",
    "description": "Nestled on the secluded, pristine island of Kudafunafaru in the tranquil Noonu Atoll, Noku Maldives is an intimate 50-villa sanctuary designed for restorative seclusion. Surrounded by powdery white sands, vibrant coral reefs, and crystal-clear turquoise waters, the resort emphasizes barefoot living and deep sensory unwinding.\n\nThe Noku Spa features secluded treatment pavilions enveloped by lush tropical foliage and open to the ocean breeze. Wellness programs include bespoke aromatherapy massage, sunrise pranayama on overwater pavilions, sound healing, Thalassotherapy ocean immersions, and customized clean nutrition focused on fresh tropical fruits, coconut water, and sustainably harvested seafood.",
    "location": {
      "city": "Noonu Atoll",
      "region": "Noonu Atoll",
      "country": "Maldives",
      "continent": "Asia-Pacific",
      "lat": 5.7533,
      "lng": 73.3244
    },
    "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    "badgeTier": "verified",
    "rating": 4.89,
    "reviewCount": 160,
    "pricing": {
      "minPricePerNight": 580,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Island Reset & Ocean Rejuvenation (5 Nights)",
          "days": 5,
          "price": 2900,
          "description": "Daily signature spa therapies, overwater sunrise yoga, marine sound healing, and healthy lagoon dining."
        },
        {
          "name": "Couples Tropical Serenity Immersion (7 Nights)",
          "days": 7,
          "price": 4060,
          "description": "Private beachside massage rituals, floral bath ceremonies, catamaran sunset sail, and bespoke wellness meals."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Mindfulness & Mental Health",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Aromatherapy",
      "Thalassotherapy",
      "Sound Healing",
      "Overwater Yoga",
      "Marine Phytotherapy"
    ],
    "dietary": [
      "Fresh Tropical Seafood",
      "Clean Plant-Forward",
      "Gluten-Free",
      "Cold-Pressed Juices"
    ],
    "setting": "Private Island Beach & Lagoon",
    "supervision": "Resident Holistic Therapists & Marine Biologists",
    "amenities": [
      "Noku Garden Spa Pavilions",
      "Overwater Yoga Deck",
      "Marine Conservation Center",
      "Infinity Beach Pool",
      "Palms Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Overwater Pavilion Sunrise Pranayama & Gentle Hatha Flow"
      },
      {
        "time": "08:30 AM",
        "activity": "Beachside Tropical Breakfast with Fresh Young Coconuts"
      },
      {
        "time": "10:30 AM",
        "activity": "Thalassotherapy Coral Reef Snorkel Meditation"
      },
      {
        "time": "11:30 AM",
        "activity": "Noku Signature Deep Relaxation Coconut Oil Massage"
      },
      {
        "time": "01:30 PM",
        "activity": "Vitality Lunch with Grilled Seafood & Garden Greens"
      },
      {
        "time": "04:30 PM",
        "activity": "Tibetan Singing Bowl Sound Immersion on the Sand"
      },
      {
        "time": "07:00 PM",
        "activity": "Candlelight Beachfront Clean Cuisine Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Maya Patel",
        "role": "Lead Holistic Therapist",
        "credentials": "CIDESCO Diploma, Specialist in Sound Therapy & Ayurveda",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-noku-1",
        "author": "Daniel K.",
        "date": "2 months ago",
        "rating": 5,
        "title": "Total seclusion and supreme relaxation",
        "comment": "The quietest and most soothing island in the Maldives. The spa pavilions surrounded by jungle and the ocean sounds made all my stress vanish.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+960 656 1010",
      "email": "h5-res@nokuhotels.com",
      "website": "https://www.nokuhotels.com/maldives",
      "googleReviewsUrl": "https://maps.google.com/?cid=1031"
    }
  }
];
