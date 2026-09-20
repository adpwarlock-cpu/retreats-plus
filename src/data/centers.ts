import { RetreatCenter } from "@/types/retreat";

export const WELLNESS_CENTERS: RetreatCenter[] = [
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
      lng: 6.9107
    },
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
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
          description: "Comprehensive DNA sequencing, cellular extract therapy, heavy metal detox, hyperbaric oxygen, and tailored longevity diet."
        },
        {
          name: "Brain & Sleep Reset (5 Days)",
          days: 5,
          price: 18500,
          description: "Polysomnography, neuro-feedback, stress resilience coaching, and cranial therapy."
        }
      ]
    },
    primaryGoals: [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Detox & Weight Loss"
    ],
    modalities: [
      "Hyperbaric Oxygen",
      "Cryotherapy",
      "IV Therapy",
      "Cellular Genomics",
      "Hydrotherapy",
      "Acupuncture"
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free"
    ],
    setting: "Lakefront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Medical Diagnostic Lab",
      "Thermal Hydrotherapy Pools",
      "Cryo Chamber",
      "Private Spa Suites",
      "Private Helipad",
      "Michelin-Caliber Wellness Dining"
    ],
    dailySchedule: [
      { time: "07:30", activity: "Gentle Alpine Awakening & Breathwork by the Lake" },
      { time: "08:30", activity: "Tailored Nutrient Breakfast & Cellular Supplement Protocol" },
      { time: "10:00", activity: "Medical Consultations & Biomarker Diagnostics" },
      { time: "12:30", activity: "Anti-Inflammatory Gourmet Lunch" },
      { time: "14:30", activity: "Hyperbaric Oxygen Therapy & Contrast Hydro-Thermal Circuit" },
      { time: "17:00", activity: "Restorative Yoga & Sound Frequency Healing" },
      { time: "19:30", activity: "Longevity Dinner & Guided Sleep Meditation" }
    ],
    expertTeam: [
      {
        name: "Dr. Adrian Heini, MD",
        role: "Head of Preventive Medicine",
        credentials: "MD, Board-Certified Internal Medicine & Clinical Nutrition",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Dr. Elena Rossi",
        role: "Lead Cellular Biologist",
        credentials: "PhD Epigenetics, University of Zurich",
        avatar: "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Marcus V.",
        date: "October 2025",
        rating: 5,
        title: "Life-changing diagnostic depth and bespoke recovery",
        comment: "The medical precision here is unmatched anywhere in the world. Within 48 hours, they identified underlying metabolic stressors that two top clinics missed. Left feeling rejuvenated at a cellular level.",
        verifiedStay: true
      },
      {
        id: "rev-2",
        author: "Sophie de M.",
        date: "January 2026",
        rating: 5,
        title: "A sanctuary of world-class peace and science",
        comment: "The setting overlooking Lake Geneva is breath-taking, but the cellular revitalization program is what made this the best investment I've ever made in my health.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+41 21 989 33 11",
      email: "concierge@cliniquelaprairie.com",
      website: "https://cliniquelaprairie.com"
    }
  },
  {
    id: "fivelements-bali",
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
      lng: 115.2285
    },
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80"
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
          description: "Comprehensive Balinese chakra balancing, sacred fire ceremony, daily deep tissue herbal massage, and 7-day living foods cleanse."
        },
        {
          name: "Tri Kaya Parisudha Detox (5 Nights)",
          days: 5,
          price: 2450,
          description: "Holistic colon hydrotherapy, organic juices, sound meditation, and private yoga sessions."
        }
      ]
    },
    primaryGoals: [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Emotional & Trauma Healing",
      "Mindfulness & Meditation"
    ],
    modalities: [
      "Sound Healing",
      "Forest Bathing",
      "Balinese Massage",
      "Acupuncture",
      "Hydrotherapy",
      "Somatic Release"
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    setting: "Lush Rainforest",
    supervision: "Master Holistic Healers",
    amenities: [
      "Bamboo Yoga Mandalas",
      "Riverfront Treatment Suites",
      "Sacred Fire Ceremony Agnihotra Pavilion",
      "Watsu Hydrotherapy Pool",
      "Plant-Based Culinary Lab"
    ],
    dailySchedule: [
      { time: "06:30", activity: "Morning Pranayama & Dharma Yoga in Bamboo Shala" },
      { time: "08:00", activity: "Living Foods Breakfast with Elixirs & Jamu Herbal Tonic" },
      { time: "10:00", activity: "Traditional Balinese Healing Consultation with Pak Wayan" },
      { time: "12:30", activity: "Multi-Course Gourmet Vegan Lunch" },
      { time: "14:30", activity: "Somatic Bodywork & Hibiscus Flower Bath Overlooking River" },
      { time: "17:30", activity: "Agnihotra Sacred Fire Clearing Ceremony" },
      { time: "19:30", activity: "Sacred Plant Culinary Dinner" }
    ],
    expertTeam: [
      {
        name: "Pak Wayan",
        role: "Traditional Balinese Healer (Balian)",
        credentials: "6th Generation Hereditary Energy Practitioner",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Ketut Artana",
        role: "Head of Holistic Wellness",
        credentials: "Master of Ayurvedic Science & Yoga Therapy",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-3",
        author: "Claire K.",
        date: "December 2025",
        rating: 5,
        title: "Deep emotional release and supreme peace",
        comment: "The energy of this place is something you cannot articulate in words. Falling asleep to the river sounds and experiencing the fire ceremony shifted something profound in me.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+62 361 469 206",
      email: "contact@fivelements.org",
      website: "https://fivelementsbali.com"
    }
  },
  {
    id: "sha-wellness-spain",
    slug: "sha-wellness-clinic",
    name: "SHA Wellness Clinic",
    tagline: "World-Renowned Pioneer in Integrative Health & Longevity Medicine",
    description: "Positioned on the scenic cliffs of Sierra Helada overlooking the Mediterranean Sea, SHA Wellness Clinic blends ancient Eastern philosophies with state-of-the-art Western medicine. With dedicated units in Cognitive Health, Healthy Aging, and Metabolic Recovery, SHA provides one of the most sophisticated holistic health curricula on earth.",
    location: {
      city: "Alicante",
      region: "Costa Blanca",
      country: "Spain",
      continent: "Europe",
      lat: 38.5719,
      lng: -0.0768
    },
    heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
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
          description: "Metabolic profiling, colon hydrotherapy, pressotherapy, acupuncture, and customized SHA macrobiotic diet plan."
        },
        {
          name: "Rebalance & De-Stress (7 Days)",
          days: 7,
          price: 5800,
          description: "Cognitive assessment, neurofeedback, stress-hormone mapping, and daily mindfulness meditation."
        }
      ]
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    modalities: [
      "Cryotherapy",
      "Hyperbaric Oxygen",
      "Acupuncture",
      "IV Therapy",
      "Hydrotherapy",
      "Ozone Therapy"
    ],
    dietary: [
      "Anti-Inflammatory",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    setting: "Coastal/Beachfront",
    supervision: "Medical Doctor Led",
    amenities: [
      "Hydrotherapy Circuit & Flotarium",
      "Cryotherapy Chamber",
      "Infinity Rooftop Pool",
      "Cognitive Stimulation Lab",
      "Private Heliport"
    ],
    dailySchedule: [
      { time: "07:30", activity: "Sunrise Coastal Walk & Qi Gong on Helipad" },
      { time: "08:45", activity: "Personalized SHA Nutrition Breakfast (Kushi Macrobiotic)" },
      { time: "10:30", activity: "Medical Ozone & IV Micronutrient Infusion" },
      { time: "13:00", activity: "Chef-Prepared Therapeutic Lunch" },
      { time: "15:00", activity: "Cryotherapy Session & Hydrotherapy Flotarium" },
      { time: "17:30", activity: "Healthy Cooking Academy Masterclass" },
      { time: "19:30", activity: "Dinner & Evening Sound Therapy" }
    ],
    expertTeam: [
      {
        name: "Dr. Vicente Mera",
        role: "Head of Anti-Aging & Genomic Medicine",
        credentials: "European Award for Medicine in Anti-Aging (2021)",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-4",
        author: "Julian T.",
        date: "November 2025",
        rating: 5,
        title: "Metabolic reset that changed my lifestyle",
        comment: "Lost 4kg in 7 days without feeling hungry once. The medical staff is extraordinary, and the architectural design makes every day feel like a movie.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+34 966 81 11 99",
      email: "info@shawellness.com",
      website: "https://shawellness.com"
    }
  },
  {
    id: "ananda-himalayas",
    slug: "ananda-in-the-himalayas",
    name: "Ananda in the Himalayas",
    tagline: "Authentic Ayurvedic Panchakarma & Vedanta Philosophy in a Maharaja's Palace",
    description: "Perched on a 100-acre palace estate surrounded by Sal forests with panoramic vistas of the Ganges and Himalayan foothills, Ananda is the gold standard for traditional Ayurveda, Panchakarma detox, and classical Hatha Yoga. Every guest receives custom pulse diagnostics from resident Ayurvedic vaidyas.",
    location: {
      city: "Rishikesh",
      region: "Uttarakhand",
      country: "India",
      continent: "Asia-Pacific",
      lat: 30.1254,
      lng: 78.3182
    },
    heroImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
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
          description: "Full traditional Ayurvedic detoxification, daily Abhyanga, Shirodhara, herbal steam, and personalized Dosha cuisine."
        },
        {
          name: "Stress Management & Yoga (7 Nights)",
          days: 7,
          price: 5600,
          description: "Classical yoga therapy, Vedanta philosophy discourses, and deep nervous system rejuvenation."
        }
      ]
    },
    primaryGoals: [
      "Ayurveda & Panchakarma",
      "Burnout & Stress",
      "Spiritual Awakening",
      "Mindfulness & Meditation"
    ],
    modalities: [
      "Ayurvedic Massage",
      "Forest Bathing",
      "Sound Healing",
      "Pranayama",
      "Hydrotherapy"
    ],
    dietary: [
      "Ayurvedic",
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free"
    ],
    setting: "Mountain Sanctuary",
    supervision: "Master Holistic Healers",
    amenities: [
      "Palace Spa & Hydrotherapy Facilities",
      "Open-Air Yoga Pavilions",
      "Private Sal Forest Hiking Trails",
      "Meditation Shala",
      "Ayurvedic Pharmacy"
    ],
    dailySchedule: [
      { time: "06:00", activity: "Ganges Valley Sunrise Hatha Yoga" },
      { time: "07:30", activity: "Pranayama & Himalayan Breath Mastery" },
      { time: "08:30", activity: "Ayurvedic Dosha Breakfast (Vata/Pitta/Kapha customized)" },
      { time: "10:30", activity: "Four-Hand Abhyanga & Warm Herbal Oil Shirodhara" },
      { time: "13:00", activity: "Organic Sattvic Lunch" },
      { time: "16:00", activity: "Vedanta Discourse & Guided Philosophy Reflection" },
      { time: "17:30", activity: "Forest Meditation in Himalayan Sal Woodlands" },
      { time: "19:30", activity: "Evening Ayurvedic Dinner & Healing Herb Infusions" }
    ],
    expertTeam: [
      {
        name: "Dr. Chandan Rawat",
        role: "Chief Ayurvedic Physician (BAMS)",
        credentials: "25+ Years Experience in Panchakarma Diagnostics",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-5",
        author: "Devon M.",
        date: "January 2026",
        rating: 5,
        title: "A spiritual home above the clouds",
        comment: "The pulse diagnosis was so accurate it was uncanny. After 14 days of Panchakarma, my chronic fatigue of 6 years vanished.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+91 1378 227 500",
      email: "reservations@anandaspa.com",
      website: "https://anandaspa.com"
    }
  },
  {
    id: "mii-amo-sedona",
    slug: "mii-amo-sedona",
    name: "Mii Amo",
    tagline: "Transformative Spiritual & Mind-Body Retreat in Sedona's Red Rock Vortex",
    description: "Tucked inside the sheer red rock walls of Boynton Canyon, Mii Amo is an intimate, destination spa renowned for connection, healing, and mindfulness. Known for its sacred Crystal Grotto, Native American wisdom, and personalized 'Journeys', it offers an unforgettable pause from modern digital chaos.",
    location: {
      city: "Sedona",
      region: "Arizona",
      country: "United States",
      continent: "North America",
      lat: 34.9125,
      lng: -111.8496
    },
    heroImage: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
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
          description: "Full lodging, all gourmet canyon dining, daily spa treatments, vortex meditation, and intuitive astrology consultation."
        },
        {
          name: "All-Inclusive 7-Night Journey",
          days: 7,
          price: 11200,
          description: "Deeper emotional transformation journey, somatic sound ceremonies, red clay body wraps, and guided canyon hikes."
        }
      ]
    },
    primaryGoals: [
      "Emotional & Trauma Healing",
      "Spiritual Awakening",
      "Burnout & Stress",
      "Mindfulness & Meditation"
    ],
    modalities: [
      "Sound Healing",
      "Acupuncture",
      "Somatic Release",
      "Forest Bathing",
      "Chakra Balancing"
    ],
    dietary: [
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan"
    ],
    setting: "Desert Oasis",
    supervision: "Master Holistic Healers",
    amenities: [
      "Crystal Grotto Sanctuary",
      "Boynton Canyon Private Trail Access",
      "Hummingbird Signature Restaurant",
      "Reflexology Path",
      "Outdoor Canyon Pool"
    ],
    dailySchedule: [
      { time: "07:00", activity: "Vortex Morning Meditation in Crystal Grotto" },
      { time: "08:15", activity: "Fresh Canyon Harvest Breakfast" },
      { time: "09:30", activity: "Guided Red Rock Hiking & Nature Attunement" },
      { time: "11:45", activity: "Red Clay & Prickly Pear Purification Body Wrap" },
      { time: "13:00", activity: "Mindful Culinary Lunch" },
      { time: "15:00", activity: "Private Intuitive Consultation or Aura Photography" },
      { time: "17:30", activity: "Sunset Sound Bath with Alchemy Quartz Bowls" },
      { time: "19:30", activity: "Starlight Dinner at Hummingbird" }
    ],
    expertTeam: [
      {
        name: "Raven Lightfoot",
        role: "Lead Spiritual Guide",
        credentials: "Indigenous Wisdom Keeper & Master Sound Alchemist",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-6",
        author: "Sarah L.",
        date: "February 2026",
        rating: 5,
        title: "Healed a heart that felt broken for two years",
        comment: "The Crystal Grotto morning meditation opened tears I didn't know I was holding. The silence and the canyon energy are medicine.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+1 855 200 6003",
      email: "concierge@miiamo.com",
      website: "https://miiamo.com"
    }
  },
  {
    id: "lanserhof-tegernsee",
    slug: "lanserhof-tegernsee",
    name: "Lanserhof Tegernsee",
    tagline: "State-of-the-Art German Medical Diagnostics & Modern Mayr Gut Regeneration",
    description: "Overlooking Lake Tegernsee and the Bavarian Alps, Lanserhof Tegernsee is Europe's foremost health resort for scientific gut detoxification, preventative cardiology, and longevity medicine. Combining Modern Mayr therapy with state-of-the-art MRI diagnostics and sleep medicine, Lanserhof restores gut flora and metabolic equilibrium.",
    location: {
      city: "Waakirchen",
      region: "Bavaria",
      country: "Germany",
      continent: "Europe",
      lat: 47.7667,
      lng: 11.6667
    },
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    badgeTier: "featured",
    rating: 4.95,
    reviewCount: 178,
    pricing: {
      minPricePerNight: 1850,
      currency: "EUR",
      pricingTier: "ultra-luxury",
      packageOptions: [
        {
          name: "Lanserhof Cure Classic (7 Days)",
          days: 7,
          price: 9400,
          description: "Initial medical check-up, full lab diagnostics, daily abdominal medical treatments, urine & detox monitoring, and Mayr gut diet."
        }
      ]
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    modalities: [
      "Cryotherapy",
      "Hyperbaric Oxygen",
      "IV Therapy",
      "Hydrotherapy",
      "Acupuncture"
    ],
    dietary: [
      "Anti-Inflammatory",
      "Gluten-Free",
      "Intermittent Fasting"
    ],
    setting: "Mountain Sanctuary",
    supervision: "Medical Doctor Led",
    amenities: [
      "3-Tesla MRI & Advanced Medical Diagnostic Center",
      "Sleep Laboratory",
      "Heated Saltwater Indoor & Outdoor Pool",
      "High-Tech Cryo Chamber (-110°C)",
      "Bavarian Alpine Walking Grounds"
    ],
    dailySchedule: [
      { time: "07:00", activity: "Epsom Salt & Warm Alkaline Water Cleansing Ritual" },
      { time: "08:15", activity: "Mindful Mayr Chewing Training & Protein Breakfast" },
      { time: "10:00", activity: "Medical Abdominal Examination by Lead Physician" },
      { time: "11:30", activity: "Full Body Cryotherapy (-110°C) for Inflammation Reduction" },
      { time: "13:00", activity: "Alkaline Light Vegetable Broth & Sheep's Milk Curd" },
      { time: "15:00", activity: "Lymphatic Drainage & Hay Flower Liver Compress" },
      { time: "17:30", activity: "Alpine Nordic Walking with Sports Physiologist" },
      { time: "19:00", activity: "Restorative Evening Broth & Sleep Optimization Routine" }
    ],
    expertTeam: [
      {
        name: "Dr. Benedikt Weber, MD",
        role: "Medical Director",
        credentials: "Specialist in Internal Medicine & Modern Mayr Medicine",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-7",
        author: "Henrik S.",
        date: "November 2025",
        rating: 5,
        title: "Medical precision that reset my entire digestive system",
        comment: "The discipline of the Mayr cure combined with the German medical rigor is exceptional. My blood pressure normalized, and I feel 10 years younger.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+49 8022 1880 0",
      email: "tegernsee@lanserhof.com",
      website: "https://lanserhof.com"
    }
  },
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
      lng: 121.1631
    },
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    badgeTier: "claimed",
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
          description: "Doctor consultation, live blood analysis, colon hydrotherapy, organic vegan meals, and daily yoga."
        }
      ]
    },
    primaryGoals: [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    modalities: [
      "Hydrotherapy",
      "Acupuncture",
      "IV Therapy",
      "Live Blood Analysis",
      "Sound Healing"
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table"
    ],
    setting: "Lush Rainforest",
    supervision: "Medical Doctor Led",
    amenities: [
      "Holistic Sanctuary Treatment Complex",
      "Acqua Hydrotherapy Sanctuary",
      "ALIVE! Vegan Restaurant (Michelin recognized)",
      "Organic Coconut Plantation",
      "Peacock Gardens & Lagoons"
    ],
    dailySchedule: [
      { time: "07:00", activity: "Power Walk through Coconut Plantations" },
      { time: "08:30", activity: "Living Vegan Breakfast & Cold Pressed Juices" },
      { time: "10:30", activity: "Integrative Doctor Consultation & Live Blood Analysis" },
      { time: "12:30", activity: "Raw Food Farm-to-Table Lunch" },
      { time: "15:00", activity: "Chlorophyll Colon Hydrotherapy Session" },
      { time: "17:00", activity: "Tibetan Singing Bowl Meditation" },
      { time: "19:00", activity: "Dinner & Wellness Lecture" }
    ],
    expertTeam: [
      {
        name: "Dr. Marian Alonzo, MD",
        role: "Medical Chief of Integrative Health",
        credentials: "MD, Homeopathy & Anthroposophic Medicine Certified",
        avatar: "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-8",
        author: "Amanda C.",
        date: "December 2025",
        rating: 5,
        title: "Incredible value and true medical depth",
        comment: "The food at ALIVE! restaurant blew me away. I never imagined 100% plant-based raw food could taste like fine dining.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+63 2 8884 7000",
      email: "info@thefarm.com.ph",
      website: "https://thefarmatsanbenito.com"
    }
  },
  {
    id: "aro-ha-new-zealand",
    slug: "aro-ha-wellness-retreat",
    name: "Aro Hā Wellness Retreat",
    tagline: "Regenerative Eco-Zen Sanctuary in the Southern Alps of New Zealand",
    description: "Overlooking Lake Wakatipu and the majestic snow-capped peaks of Glenorchy, Aro Hā is a purpose-built, carbon-positive wellness retreat. Fusing subalpine hiking, mindful Vinyasa yoga, functional strength, and vegan permaculture cuisine, Aro Hā offers an invigorating reset for body and soul.",
    location: {
      city: "Glenorchy",
      region: "Otago",
      country: "New Zealand",
      continent: "Asia-Pacific",
      lat: -44.8500,
      lng: 168.4000
    },
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    badgeTier: "verified",
    rating: 4.98,
    reviewCount: 154,
    pricing: {
      minPricePerNight: 950,
      currency: "NZD",
      pricingTier: "luxury",
      packageOptions: [
        {
          name: "6-Day Revitalise & Rejuvenate",
          days: 6,
          price: 6450,
          description: "All-inclusive subalpine guided hiking, daily dynamic yoga, daily massage, functional movement, and organic plant food."
        }
      ]
    },
    primaryGoals: [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation"
    ],
    modalities: [
      "Forest Bathing",
      "Contrast Therapy",
      "Somatic Release",
      "Vinyasa Yoga"
    ],
    dietary: [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    setting: "Mountain Sanctuary",
    supervision: "Master Holistic Healers",
    amenities: [
      "Obsidian Contrast Hydrotherapy Spa",
      "Aro Hā Yoga Shala with 180° Lake Views",
      "Permaculture Greenhouse",
      "Finnish Sauna",
      "Outdoor Cold Plunge Pool"
    ],
    dailySchedule: [
      { time: "06:30", activity: "Tibetan Brass Chime Awakening" },
      { time: "07:00", activity: "Dynamic Vinyasa Yoga overlooking Lake Wakatipu" },
      { time: "08:30", activity: "Permaculture Rainbow Breakfast Bowl" },
      { time: "10:00", activity: "Guided 3-4 Hour Subalpine Wilderness Trek" },
      { time: "14:00", activity: "Nutrient-Dense Lunch & Herbal Elixirs" },
      { time: "15:30", activity: "Daily Restorative Massage & Contrast Spa Circuit" },
      { time: "18:00", activity: "Restorative Yin Yoga & Mindfulness Meditation" },
      { time: "19:30", activity: "Communal Candlelit Vegetarian Feast" }
    ],
    expertTeam: [
      {
        name: "Damian Chaparro",
        role: "Co-Founder & Movement Lead",
        credentials: "20+ Years in Transformational Human Potential Retreats",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        id: "rev-9",
        author: "Liam B.",
        date: "January 2026",
        rating: 5,
        title: "The purest air and most energizing week of my life",
        comment: "Hiking through the Southern Alps and jumping into the cold plunge after sauna with that view is something I will carry with me forever.",
        verifiedStay: true
      }
    ],
    contact: {
      phone: "+64 3 441 3333",
      email: "host@aro-ha.com",
      website: "https://aro-ha.com"
    }
  }
];
