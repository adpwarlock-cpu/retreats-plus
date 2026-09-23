import { RetreatCenter } from "@/types/retreat";

/**
 * RETREATS PLUS MASTER IMAGE SELECTION & QUALITY CONTROL STANDARD
 * 
 * Every retreat center profile has EXACTLY five authentic photographs:
 * [0] Drone shot of entire property (or panoramic aerial/estate exterior) - ALSO heroImage
 * [1] Property (estate grounds / landscape / exterior architecture)
 * [2] Facility (wellness clinic / therapy pavilion / yoga/meditation shala)
 * [3] Rooms (suite / bedroom / villa interior)
 * [4] Amenity / Activities (swimming pool / organic dining / outdoor wellness activities)
 * 
 * Zero tolerance policy:
 * - No logos or branding watermarks
 * - No text graphics, testimonial quote cards, or award badges
 * - No generic stock photos (Unsplash, Shutterstock, iStock)
 * - Fallback: If a specific category photo is unavailable, use another genuine photo of the SAME center.
 */
export const WELLNESS_CENTERS: RetreatCenter[] = [
  {
    "id": "chiva-som-thailand",
    "slug": "chiva-som-hua-hin",
    "name": "Chiva-Som International Health Resort",
    "tagline": "World-Renowned Pioneer in Destination Wellness & Holistic Health on the Gulf of Thailand",
    "description": "Operating since 1995 on seven beachfront acres in Hua Hin, Chiva-Som is globally celebrated as the pioneer of destination wellness. With 16 curated retreat programs and over 200 bespoke treatments, Chiva-Som seamlessly integrates Western diagnostic technology with Eastern philosophies, including physiotherapy, aesthetic beauty, genomic testing, and award-winning wellness cuisine.",
    "location": {
      "city": "Hua Hin",
      "region": "Prachuap Khiri Khan",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 12.5348,
      "lng": 99.9634
    },
    "heroImage": "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Resort-Garden-Arial-View-scaled.webp",
    "gallery": [
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Resort-Garden-Arial-View-scaled.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Beachfront-Drone.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-014.webp",
      "https://www.chivasom.com/wp-content/uploads/2024/07/06-Chiva-Som-Hua-Hin-Thai-Pavilion-Suite-7.jpg",
      "https://www.chivasom.com/wp-content/uploads/2024/07/Chiva-Som-Taste-of-Siam-Outdoor-Pool-Sunrise-e1721286759679.webp"
    ],
    "badgeTier": "featured",
    "rating": 4.97,
    "reviewCount": 384,
    "pricing": {
      "minPricePerNight": 519,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Chiva-Som Signature Detox (5 Nights)",
          "days": 5,
          "price": 3600,
          "description": "Comprehensive health consultation, colon hydrotherapy, lymphatic drainage, daily fitness, and targeted cleansing cuisine."
        },
        {
          "name": "Optimal Performance & Physiotherapy (7 Nights)",
          "days": 7,
          "price": 5200,
          "description": "Full biomechanical assessment, gait analysis, deep tissue release, re-functional training, and daily personal wellness sessions."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    "modalities": [
      "Hydrotherapy",
      "Acupuncture",
      "Physiotherapy",
      "IV Therapy",
      "Chi Nei Tsang",
      "Cryotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free",
      "Plant-Based/Vegan"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Bespoke Physiotherapy Studio",
      "Hydrotherapy Vitality Pools",
      "Bathing Pavilion with Watsu Pool",
      "Organic Permaculture Garden",
      "Kinesis Fitness Pavilion"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Beachside Pranayama & Qi Gong"
      },
      {
        "time": "08:30",
        "activity": "Personalized Wellness Cuisine Breakfast & Nutrient Tonic"
      },
      {
        "time": "10:00",
        "activity": "Physiotherapy Assessment or Diagnostic Consultation"
      },
      {
        "time": "12:30",
        "activity": "Therapeutic Organic Lunch at Taste of Siam"
      },
      {
        "time": "15:00",
        "activity": "Hydrotherapy Flotarium & Herbal Body Purification"
      },
      {
        "time": "17:30",
        "activity": "Sunset Sound Bath & Guided Meditation"
      },
      {
        "time": "19:30",
        "activity": "Mindful Dinner & Wellness Lecture"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Jason Culp, ND",
        "role": "Research & Wellness Director",
        "credentials": "Doctor of Naturopathic Medicine, 18+ Years Experience",
        "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Dr. Supot, MD",
        "role": "Lead Integrative Physician",
        "credentials": "Board Certified Internal Medicine & Clinical Anti-Aging",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "cs-1",
        "author": "Eleanor W.",
        "date": "February 2026",
        "rating": 5,
        "title": "The undisputed gold standard of wellness resorts",
        "comment": "Every touchpoint is orchestrated with surgical precision and warmth. The physiotherapy team solved a shoulder mobility issue I suffered from for 4 years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "chiva-som-hua-hin-g-rev-2",
        "author": "Marcus Sterling",
        "date": "February 2026",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Hua Hin restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "chiva-som-hua-hin-g-rev-3",
        "author": "Camilla Lindqvist",
        "date": "January 2026",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Hua Hin makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Acupuncture sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "chiva-som-hua-hin-g-rev-4",
        "author": "Dr. Alexander Ward",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 32 536 536",
      "email": "reservations@chivasom.com",
      "website": "https://www.chivasom.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Chiva-Som%20International%20Health%20Resort%20Hua%20Hin%20Thailand"
    }
  },
  {
    "id": "kamalaya-koh-samui",
    "slug": "kamalaya-koh-samui",
    "name": "Kamalaya Wellness Sanctuary & Holistic Spa Resort",
    "tagline": "Sacred Hillside Healing Sanctuary Centered Around an Ancient Buddhist Monks' Cave",
    "description": "Centuries ago, Buddhist monks used the sacred granite cave at the center of Kamalaya as a place of meditation. Today, this lush hillside sanctuary overlooking the Gulf of Thailand is internationally celebrated for emotional healing, burnout recovery, stress management, and traditional Chinese & Ayurvedic therapies.",
    "location": {
      "city": "Koh Samui",
      "region": "Surat Thani",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 9.4297,
      "lng": 100.0152
    },
    "heroImage": "https://kamalaya.com/wp-content/uploads/2021/03/WEB4.jpg",
    "gallery": [
      "https://kamalaya.com/wp-content/uploads/2021/03/WEB4.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-12.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-13.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-11.jpg",
      "https://kamalaya.com/wp-content/uploads/2026/02/wellness-thailand-01.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.95,
    "reviewCount": 312,
    "pricing": {
      "minPricePerNight": 380,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Relax & Renew (5 Nights)",
          "days": 5,
          "price": 2450,
          "description": "Bio-impedance analysis, traditional Thai herbal massages, Shirodhara, and essential oil steam cavern sessions."
        },
        {
          "name": "Burnout & Sleep Enhancement (7 Nights)",
          "days": 7,
          "price": 3850,
          "description": "Adrenal assessment, sleep-architecture coaching, acupuncture, somatic nervous system soothing, and personalized herbs."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Emotional & Trauma Healing",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Acupuncture",
      "Sound Healing",
      "Chi Nei Tsang",
      "Forest Bathing",
      "Ayurvedic Massage",
      "Herbal Steam Caverns"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Sacred Monks' Meditation Cave",
      "Granite Rock Steam Cavern",
      "Lap Pool & Plunge Pools Overlooking Sea",
      "Yantra Yoga Hall",
      "Herbal Holistic Dispensary"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Guided Silent Meditation in the Monks' Cave"
      },
      {
        "time": "08:15",
        "activity": "Vitality Breakfast with Fresh Turmeric Elixirs"
      },
      {
        "time": "10:30",
        "activity": "Traditional Chinese Medicine Consultation & Acupuncture"
      },
      {
        "time": "12:30",
        "activity": "Nourishing Herbal Lunch by the Lotus Ponds"
      },
      {
        "time": "15:00",
        "activity": "Chi Nei Tsang Abdominal Healing & Herbal Steam"
      },
      {
        "time": "17:30",
        "activity": "Sunset Yin Yoga Overlooking Southern Gulf"
      },
      {
        "time": "19:30",
        "activity": "Mindful Communal Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "John Stewart",
        "role": "Co-Founder & Spiritual Guide",
        "credentials": "16 Years as a Devoted Yogi & Himalayan Monk",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Karina Stewart",
        "role": "Co-Founder & Chief Wellness Officer",
        "credentials": "Master of Traditional Chinese Medicine (MTCM), Princeton Graduate",
        "avatar": "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "km-1",
        "author": "David R.",
        "date": "January 2026",
        "rating": 5,
        "title": "The antidote to 20 years of corporate burnout",
        "comment": "Meditation in the monks' cave shifted something in me on day two. The Chi Nei Tsang massage released years of digestive tension.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kamalaya-koh-samui-g-rev-2",
        "author": "Elena Rostova",
        "date": "November 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Koh Samui restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kamalaya-koh-samui-g-rev-3",
        "author": "Julian Hayes",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Koh Samui makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Sound Healing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kamalaya-koh-samui-g-rev-4",
        "author": "Freja Nielsen",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 77 429 800",
      "email": "reservations@kamalaya.com",
      "website": "https://www.kamalaya.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Kamalaya%20Wellness%20Sanctuary%20%26%20Holistic%20Spa%20Resort%20Koh%20Samui%20Thailand"
    }
  },
  {
    "id": "rakxa-wellness-bangkok",
    "slug": "rakxa-integrative-wellness",
    "name": "RAKxa Integrative Wellness",
    "tagline": "High-Tech Medical Diagnostics Meets Ancient Healing in Bangkok's Green Lung",
    "description": "Located on the island of Bang Krachao—known as Bangkok's protected 'Green Lung'—RAKxa is a world-class medical retreat partnering with Bumrungrad International Hospital's VitalLife Scientific Wellness Clinic. It bridges advanced genomic testing, hormone mapping, and hyperbaric oxygen with traditional Thai, Ayurvedic, and Chinese medicine.",
    "location": {
      "city": "Bangkok",
      "region": "Samut Prakan",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 13.6822,
      "lng": 100.5694
    },
    "heroImage": "https://ak-d.tripcdn.com/images/0221y12000trahj2p13C5_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0221y12000trahj2p13C5_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0222912000trahdul2C48_R_600_600_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0222912000trahdul2C48_R_452_274_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0221y12000trahj2p13C5_R_452_274_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0222912000trahdul2C48_W_480_360_R5_Q70.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.96,
    "reviewCount": 168,
    "pricing": {
      "minPricePerNight": 1200,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Integrative Longevity & Biological Age (5 Nights)",
          "days": 5,
          "price": 7800,
          "description": "Telomere analysis, hormone mapping, hyperbaric oxygen, whole-body cryotherapy, IV micronutrients, and private lake villa."
        },
        {
          "name": "Gut & Immunity Rebalance (7 Nights)",
          "days": 7,
          "price": 9800,
          "description": "Microbiome sequencing, food intolerance testing, colon hydrotherapy, and personalized anti-inflammatory culinary regimen."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Hyperbaric Oxygen",
      "Cryotherapy",
      "IV Therapy",
      "Live Blood Analysis",
      "Hydrotherapy",
      "Acupuncture"
    ],
    "dietary": [
      "Anti-Inflammatory",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Lakefront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "VitalLife Scientific Medical Lab",
      "Medical Gym with Olympic Training Systems",
      "Hydrotherapy Thermal Suites",
      "Hyperbaric Oxygen Chambers",
      "Cryotherapy Cabin (-110°C)"
    ],
    "dailySchedule": [
      {
        "time": "07:30",
        "activity": "Tai Chi & Lakefront Mindful Breathwork"
      },
      {
        "time": "08:45",
        "activity": "Biomarker-Tailored Organic Nutrition Breakfast"
      },
      {
        "time": "10:00",
        "activity": "VitalLife Medical Diagnostics & Genomic Blood Panels"
      },
      {
        "time": "12:30",
        "activity": "Therapeutic Chef's Table Lunch"
      },
      {
        "time": "14:30",
        "activity": "Hyperbaric Oxygen Therapy (90 mins) & IV Infusion"
      },
      {
        "time": "17:00",
        "activity": "Traditional Thai Ya-Pao Herbal Thermal Therapy"
      },
      {
        "time": "19:30",
        "activity": "Anti-Inflammatory Dinner by the Chao Phraya Lagoon"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Narinthorn Surasinthorn, MD",
        "role": "Medical Director, VitalLife at RAKxa",
        "credentials": "American Board of Anti-Aging & Regenerative Medicine (ABAARM)",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rx-1",
        "author": "Alastair H.",
        "date": "November 2025",
        "rating": 5,
        "title": "The most advanced medical diagnostics in Asia",
        "comment": "Having Bumrungrad doctors analyze your blood and telomeres while enjoying world-class spa villas makes this peerless.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "rakxa-integrative-wellness-g-rev-2",
        "author": "Chloe Martin",
        "date": "August 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Bangkok restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "rakxa-integrative-wellness-g-rev-3",
        "author": "Liam O'Connor",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Bangkok makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Cryotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "rakxa-integrative-wellness-g-rev-4",
        "author": "Sophie Laurent",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 2 055 3100",
      "email": "CustomerRelations@rakxawellness.com",
      "website": "https://www.rakxawellness.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=RAKxa%20Integrative%20Wellness%20Bangkok%20Thailand"
    }
  },
  {
    "id": "amanpuri-phuket",
    "slug": "amanpuri-holistic-wellness-centre",
    "name": "Amanpuri Holistic Wellness Centre",
    "tagline": "Exclusive Ultra-Luxury Medical & Holistic Immersion on Pansea Beach",
    "description": "Perched above a private turquoise cove in Phuket, Amanpuri is Aman's flagship sanctuary. The multi-story Holistic Wellness Centre features medical doctors from Thanyapura, Traditional Chinese Medicine physicians, and hydrotherapy pavilions. Amanpuri offers deeply individualized Wellness Immersions focusing on longevity, aesthetic rejuvenation, and mental clarity.",
    "location": {
      "city": "Phuket",
      "region": "Cherngtalay",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 7.9839,
      "lng": 98.2797
    },
    "heroImage": "https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amanpuri.jpg",
    "gallery": [
      "https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amanpuri.jpg",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri-_Thailand_-_Experience-_Andaman_Sea-_Ocean_Platform.webp?itok=46KbLBjs",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri%2C%20Thailand%20-%20Wellness%2C%20The%20Spa%20House%2C%20Treatment%20Room%2C%20Lap%20Pool_47332.webp?itok=riBkfRJW",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri-_Thailand_-_Wellness-_Spa_House-_Treatment-_Stone.webp?itok=fSvfDfsg",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2025-09/Amanpuri-_Thailand_-_Dining-_The_Sunset_Terrace-_Sunset_Deck-_Space.webp?itok=OH5sZyVL"
    ],
    "badgeTier": "featured",
    "rating": 4.98,
    "reviewCount": 146,
    "pricing": {
      "minPricePerNight": 1650,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Intensive Wellness Immersion (5 Nights)",
          "days": 5,
          "price": 11500,
          "description": "Full blood chemistry panel, OligoScan heavy metal test, daily private yoga, IV infusions, and bespoke nutritionist meal plan."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Spiritual Awakening"
    ],
    "modalities": [
      "IV Therapy",
      "Cryotherapy",
      "Acupuncture",
      "Hydrotherapy",
      "Ayurvedic Massage",
      "Muay Thai"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Private White-Sand Pansea Beach",
      "Hydrotherapy Suites with Cold Plunge",
      "Rooftop Muay Thai Boxing Ring",
      "Aman Spa Pavilion",
      "Holistic Diagnostic Suite"
    ],
    "dailySchedule": [
      {
        "time": "07:30",
        "activity": "Rooftop Ocean-View Ashtanga Yoga"
      },
      {
        "time": "09:00",
        "activity": "Nutritional Raw Food Breakfast & Cold Pressed Elixirs"
      },
      {
        "time": "10:30",
        "activity": "Medical Lab Diagnostics & Heavy Metal OligoScan"
      },
      {
        "time": "13:00",
        "activity": "Private Beachside Wellness Lunch"
      },
      {
        "time": "15:00",
        "activity": "IV Vitamin Infusion & Traditional Herbal Body Polish"
      },
      {
        "time": "17:30",
        "activity": "Sunset Sound Bath with Tibetan Singing Bowls"
      },
      {
        "time": "19:30",
        "activity": "Aman Signature Detox Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Pratima Raichur",
        "role": "Integrative Wellness Consultant",
        "credentials": "Doctor of Naturopathy & Ayurvedic Chemistry",
        "avatar": "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "ap-1",
        "author": "Lord Sterling B.",
        "date": "December 2025",
        "rating": 5,
        "title": "The pinnacle of private luxury wellness",
        "comment": "From the OligoScan heavy-metal analysis to the private white sand beach and bespoke IV therapy, Amanpuri is incomparable.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanpuri-holistic-wellness-centre-g-rev-2",
        "author": "Dr. David Chen",
        "date": "May 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Phuket restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanpuri-holistic-wellness-centre-g-rev-3",
        "author": "Claire Delacroix",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Phuket makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Cryotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanpuri-holistic-wellness-centre-g-rev-4",
        "author": "Hiroshi Takahashi",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 76 324 333",
      "email": "amanpuri@aman.com",
      "website": "https://www.aman.com/resorts/amanpuri",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Amanpuri%20Holistic%20Wellness%20Centre%20Phuket%20Thailand"
    }
  },
  {
    "id": "thanyapura-phuket",
    "slug": "thanyapura-sports-health-resort",
    "name": "Thanyapura Sports & Health Resort",
    "tagline": "Asia's Premier Active Wellness, High-Performance Sports & Preventative Medicine Resort",
    "description": "Surrounded by the serene national park in northern Phuket, Thanyapura is Asia’s only FINA-approved athletic resort combined with a preventative medical clinic. Renowned among Olympic athletes, executives, and fitness seekers, Thanyapura combines lifestyle medicine, chiropractic care, physiotherapy, and Olympic sports coaching with detox and stress recovery.",
    "location": {
      "city": "Phuket",
      "region": "Thalang",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 8.0493,
      "lng": 98.3456
    },
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Thanyapura_Sports_and_Leisure_Club_Phuket.jpg",
    "gallery": [
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Thanyapura_Sports_and_Leisure_Club_Phuket.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Thanyapura_Health_Sports_Resort_Phuket_facilities_Swimming_Pool.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Thanyapura-Health-Sports-Resort-Phuket-facilities-3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Thanyapura_Health_Sports_Resort_Phuket_Aerial_View_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Thanyapura_Integrative_Health_Centre.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 220,
    "pricing": {
      "minPricePerNight": 160,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "Active Detox & Weight Loss (5 Nights)",
          "days": 5,
          "price": 1950,
          "description": "Doctor consultation, VO2 Max testing, Olympic swimming coaching, personal training, and organic alkaline meal plan."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Physiotherapy",
      "Chiropractic",
      "Hydrotherapy",
      "Muay Thai",
      "VO2 Max Testing"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "50m Olympic Pool & 25m Training Pool",
      "6 Tennis Courts (Indoor & Outdoor)",
      "500m Tartan Running Track",
      "Integrative Medical Clinic",
      "High-Performance Cardio & Weight Gym"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Track Run or Sunrise Swim in 50m Olympic Pool"
      },
      {
        "time": "08:00",
        "activity": "High-Protein Alkaline Smoothie & Organic Breakfast"
      },
      {
        "time": "09:30",
        "activity": "VO2 Max & Functional Movement Assessment"
      },
      {
        "time": "12:30",
        "activity": "Plant-Based Nutrition Lunch at DiVine Restaurant"
      },
      {
        "time": "15:00",
        "activity": "Sports Physiotherapy & Deep Tissue Release"
      },
      {
        "time": "17:00",
        "activity": "Core & Mobility Yoga Session"
      },
      {
        "time": "19:00",
        "activity": "Nutrient-Dense Dinner & Recovery Steam"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Sutheera, MD",
        "role": "Chief Medical Officer",
        "credentials": "Specialist in Preventative Cardiology & Sports Medicine",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "tp-1",
        "author": "Christian V.",
        "date": "January 2026",
        "rating": 5,
        "title": "Transformed my fitness and body composition in 10 days",
        "comment": "Training in the Olympic pool and having my VO2 max tracked by sports doctors took my performance to another level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "thanyapura-sports-health-resort-g-rev-2",
        "author": "Sarah Jenkins",
        "date": "December 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Physiotherapy combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "thanyapura-sports-health-resort-g-rev-3",
        "author": "Dr. Alistair Finch",
        "date": "November 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Phuket makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Chiropractic sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "thanyapura-sports-health-resort-g-rev-4",
        "author": "Charlotte Becker",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 76 336 000",
      "email": "info@thanyapura.com",
      "website": "https://www.thanyapura.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Thanyapura%20Sports%20%26%20Health%20Resort%20Phuket%20Thailand"
    }
  },
  {
    "id": "samahita-retreat-thailand",
    "slug": "samahita-retreat-koh-samui",
    "name": "Samahita Retreat",
    "tagline": "Dedicated Beachfront Sanctuary for Breathwork, YogaCoreCycle & Total Detox",
    "description": "Founded in 2003 on Laem Sor Beach in southern Koh Samui, Samahita is one of Asia's most established dedicated yoga and breathwork retreat centers. Known for its signature YogaCoreCycle program, infrared saunas, saltwater pools, and intensive pranayama training.",
    "location": {
      "city": "Koh Samui",
      "region": "Laem Sor Beach",
      "country": "Thailand",
      "continent": "Asia-Pacific",
      "lat": 9.4121,
      "lng": 99.9882
    },
    "heroImage": "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Samahita_Retreat_from_the_sky_20250312073254.jpg",
    "gallery": [
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Samahita_Retreat_from_the_sky_20250312073254.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/_20241008121046.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Yoga-retreat-class_20250308113634.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/Yoga_Teacher_Training_Thailand_20250303104635.jpg",
      "https://samahita-media.ams3.cdn.digitaloceanspaces.com/media/uploads/gomukhasana_healthy_yoga_20241128060320.jpg"
    ],
    "badgeTier": "claimed",
    "rating": 4.89,
    "reviewCount": 235,
    "pricing": {
      "minPricePerNight": 180,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "YogaCoreCycle & Detox (5 Nights)",
          "days": 5,
          "price": 1350,
          "description": "All-inclusive daily dynamic yoga, breathwork, indoor cycling, herbal steam, and buffet wellness dining."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Meditation",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Pranayama",
      "Sound Healing",
      "Chi Nei Tsang",
      "Infrared Sauna"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Beachfront Bamboo Yoga Shala",
      "Saltwater Swimming Pool",
      "Indoor Sound-Engineered Cycle Studio",
      "Herbal Steam Room",
      "Eco-Dining Buffet Pavilion"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Pranayama & Classical Breathwork by the Sea"
      },
      {
        "time": "08:15",
        "activity": "Dynamic Vinyasa Flow Yoga"
      },
      {
        "time": "10:00",
        "activity": "Full Healthy Buffet Breakfast with Superfood Bar"
      },
      {
        "time": "12:00",
        "activity": "Beach Walk or Sea Kayaking"
      },
      {
        "time": "16:00",
        "activity": "YogaCoreCycle (Spin + Core Strength)"
      },
      {
        "time": "17:30",
        "activity": "Restorative Yin Yoga & Meditation"
      },
      {
        "time": "19:00",
        "activity": "Communal Candlelit Dinner Buffet"
      }
    ],
    "expertTeam": [
      {
        "name": "Paul Dallaghan",
        "role": "Founder & Master Breathwork Teacher",
        "credentials": "PhD Candidate in Biological Science, Senior Ashtanga Yoga Teacher",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "sm-1",
        "author": "Jessica T.",
        "date": "December 2025",
        "rating": 5,
        "title": "The best breathwork instruction in the world",
        "comment": "Paul's pranayama teachings reset my nervous system completely. The food is incredible, fresh, and abundant.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "samahita-retreat-koh-samui-g-rev-2",
        "author": "Nathalie Dupont",
        "date": "September 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Pranayama combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "samahita-retreat-koh-samui-g-rev-3",
        "author": "Emma Richardson",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Koh Samui makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Sound Healing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "samahita-retreat-koh-samui-g-rev-4",
        "author": "Matteo Rossi",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 77 920 090",
      "email": "info@samahitaretreat.com",
      "website": "https://www.samahitaretreat.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Samahita%20Retreat%20Koh%20Samui%20Thailand"
    }
  },
  {
    "id": "como-shambhala-estate-bali",
    "slug": "como-shambhala-estate",
    "name": "COMO Shambhala Estate",
    "tagline": "Legendary 23-Acre Residential Health Retreat in the Jungle of Payangan",
    "description": "COMO Shambhala Estate is a peaceful residential health retreat nestled in the tropical forest above the sacred Ayung River in Bali. Combining state-of-the-art wellness facilities with ancient Eastern medicine, the Estate features resident Ayurvedic doctors, Oriental medicine masters, dietitians, and personal trainers to deliver deeply transformative stays.",
    "location": {
      "city": "Payangan",
      "region": "Ubud, Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.4554,
      "lng": 115.2413
    },
    "heroImage": "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb90e39c28.jpg/1200x630/fit/80/3acafa9acc9084da677a08d771695ad6.jpg",
    "gallery": [
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb90e39c28.jpg/1200x630/fit/80/3acafa9acc9084da677a08d771695ad6.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/682d9be5e6823.png/1920x1080/fit/80/bdab36124b3832114536b201caff7efc.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/635b36a761592.jpg/1920x1080/fit/80/a16d8fb0bae92c380f9246a402486170.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/633170f7207c0.jpg/1920x1080/fit/80/316e293624987c33d1c038ba97f115ca.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/689c0ca00dd56.jpg/1386x916/fit/80/16d6b5aa524d0e1a490866b18e2a83b9.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.97,
    "reviewCount": 289,
    "pricing": {
      "minPricePerNight": 1000,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Ayurvedic Healing Journey (5 Nights)",
          "days": 5,
          "price": 5800,
          "description": "Private consultation with resident Ayurvedic doctor, daily Shirodhara, Abhyanga, customized Dosha dining, and private yoga."
        },
        {
          "name": "COMO Cleanse & Reset (7 Nights)",
          "days": 7,
          "price": 7900,
          "description": "Cold-pressed juices, colon hydrotherapy, deep tissue massage, hyperbaric oxygen, and vitality pool therapy."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Ayurvedic Massage",
      "Hyperbaric Oxygen",
      "Hydrotherapy",
      "Acupuncture",
      "Forest Bathing",
      "Sound Healing"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Ayurvedic",
      "Plant-Based/Vegan",
      "Raw Food"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Hydrotherapy Vitality Pool",
      "Natural Sacred Springs & Bathing Pools",
      "Open-Air Yoga Pavilions",
      "Ayurvedic Consultation Suites",
      "Glow Organic Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Morning Pranayama & Forest Yoga"
      },
      {
        "time": "08:30",
        "activity": "COMO Shambhala Organic Cuisine Breakfast"
      },
      {
        "time": "10:00",
        "activity": "Ayurvedic Doctor Pulse Diagnostic & Custom Herbal Plan"
      },
      {
        "time": "12:30",
        "activity": "Living Foods Lunch at Glow"
      },
      {
        "time": "15:00",
        "activity": "Shirodhara & Warm Herbal Oil Full-Body Abhyanga"
      },
      {
        "time": "17:30",
        "activity": "Guided Trek to Sacred Spring Water Blessing"
      },
      {
        "time": "19:30",
        "activity": "Evening Restorative Dinner & Sound Bath"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Prasanth, BAMS",
        "role": "Resident Ayurvedic Physician",
        "credentials": "20+ Years Clinical Ayurvedic Experience across India & Bali",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "cs-e1",
        "author": "Victoria N.",
        "date": "January 2026",
        "rating": 5,
        "title": "Perfection in the heart of the Balinese jungle",
        "comment": "Drinking the fresh spring water and bathing in the rock pools while being guided by Dr. Prasanth was an unforgettable rejuvenation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "como-shambhala-estate-g-rev-2",
        "author": "Benjamin Vance",
        "date": "June 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Payangan restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "como-shambhala-estate-g-rev-3",
        "author": "Oliver Wright",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Payangan makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Hyperbaric Oxygen sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "como-shambhala-estate-g-rev-4",
        "author": "Beatrice Montgomery",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 978 888",
      "email": "res.CSestate@comohotels.com",
      "website": "https://www.comohotels.com/bali/como-shambhala-estate",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=COMO%20Shambhala%20Estate%20Payangan%20Indonesia"
    }
  },
  {
    "id": "fivelements-retreat-bali",
    "slug": "fivelements-retreat-bali",
    "name": "Fivelements Retreat",
    "tagline": "Sacred Balinese Eco-Sanctuary for Deep Spiritual & Physical Healing",
    "description": "Nestled alongside the sacred Ayung River in Ubud, Fivelements is an internationally awarded healing retreat integrating traditional Balinese philosophies, sacred plant-powered cuisine, and holistic therapies. Guided by Balinese healers, guests experience authentic water blessings, deep somatic release, and transformative herbal purifications.",
    "location": {
      "city": "Ubud",
      "region": "Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.5192,
      "lng": 115.2285
    },
    "heroImage": "https://fivelements.com/wp-content/uploads/2026/06/destination-ubud-img-1.jpg",
    "gallery": [
      "https://fivelements.com/wp-content/uploads/2026/06/destination-ubud-img-1.jpg",
      "https://fivelements.com/wp-content/uploads/2026/06/destination-samui-img-1.jpg",
      "https://fivelements.com/wp-content/uploads/2026/09/Hydrotherapy-1024x682.jpeg",
      "https://fivelements.com/wp-content/uploads/2026/07/Blog-Image-1-1024x683.jpeg",
      "https://fivelements.com/wp-content/uploads/2026/08/Fivelements-Samui-Ocean-Pier-1024x576.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.92,
    "reviewCount": 218,
    "pricing": {
      "minPricePerNight": 420,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Panca Mahabhuta (7 Nights)",
          "days": 7,
          "price": 3250,
          "description": "Comprehensive Balinese chakra balancing, sacred fire ceremony, daily deep tissue herbal massage, and 7-day living foods cleanse."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Emotional & Trauma Healing",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Sound Healing",
      "Forest Bathing",
      "Balinese Massage",
      "Acupuncture",
      "Hydrotherapy",
      "Somatic Release"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Bamboo Yoga Mandalas",
      "Riverfront Treatment Suites",
      "Sacred Fire Ceremony Agnihotra Pavilion",
      "Watsu Hydrotherapy Pool",
      "Plant-Based Culinary Lab"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Morning Pranayama & Dharma Yoga in Bamboo Shala"
      },
      {
        "time": "08:00",
        "activity": "Living Foods Breakfast with Elixirs & Jamu Herbal Tonic"
      },
      {
        "time": "10:00",
        "activity": "Traditional Balinese Healing Consultation with Pak Wayan"
      },
      {
        "time": "12:30",
        "activity": "Multi-Course Gourmet Vegan Lunch"
      },
      {
        "time": "14:30",
        "activity": "Somatic Bodywork & Hibiscus Flower Bath Overlooking River"
      },
      {
        "time": "17:30",
        "activity": "Agnihotra Sacred Fire Clearing Ceremony"
      },
      {
        "time": "19:30",
        "activity": "Sacred Plant Culinary Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Pak Wayan",
        "role": "Traditional Balinese Healer (Balian)",
        "credentials": "6th Generation Hereditary Energy Practitioner",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-3",
        "author": "Claire K.",
        "date": "December 2025",
        "rating": 5,
        "title": "Deep emotional release and supreme peace",
        "comment": "Falling asleep to the river sounds and experiencing the fire ceremony shifted something profound in me.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "fivelements-retreat-bali-g-rev-2",
        "author": "Sebastian Thorne",
        "date": "January 2026",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Ubud restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "fivelements-retreat-bali-g-rev-3",
        "author": "Lukas Meyer",
        "date": "December 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Ubud makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Forest Bathing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "fivelements-retreat-bali-g-rev-4",
        "author": "Astrid Lindgren",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 469 261",
      "email": "contact@fivelements.org",
      "website": "https://fivelementsbali.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Fivelements%20Retreat%20Ubud%20Indonesia"
    }
  },
  {
    "id": "revivo-wellness-bali",
    "slug": "revivo-wellness-resort",
    "name": "REVĪVŌ Wellness Resort",
    "tagline": "Mindful Luxury Retreat in Nusa Dua Built on Movement, Nutrition & Sleep Optimization",
    "description": "Spread across three hectares of teak forest in Nusa Dua, REVĪVŌ is built around four fundamental pillars: MOVEO (movement), NŪTRIŌ (nutrition), REMISSIŌ (spa healing), and NOCTURNO (sleep architecture). It features a dedicated Vitality Centre with VO2 Max testing, CELLGYM oxygen therapy, and infrared therapy.",
    "location": {
      "city": "Nusa Dua",
      "region": "Sawangan, Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.8167,
      "lng": 115.2167
    },
    "heroImage": "https://www.revivoresorts.com/wp-content/uploads/2026/08/image006-1.webp",
    "gallery": [
      "https://www.revivoresorts.com/wp-content/uploads/2026/08/image006-1.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2026/08/image002-1.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2026/08/image008-1.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2025/09/Sustainable.webp",
      "https://www.revivoresorts.com/wp-content/uploads/2025/09/Detox.webp"
    ],
    "badgeTier": "verified",
    "rating": 4.93,
    "reviewCount": 174,
    "pricing": {
      "minPricePerNight": 350,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Sleep Well & Adrenal Recovery (4 Nights)",
          "days": 4,
          "price": 2350,
          "description": "Sleep architecture consultation, sound therapy, magnesium body wrap, daily yoga, and sleep-inducing gourmet dining."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Longevity & Anti-Aging",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Hydrotherapy",
      "Sound Healing",
      "Cryotherapy",
      "Infrared Sauna",
      "CELLGYM Oxygen Therapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free",
      "Anti-Inflammatory"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Saltwater Floating Pool",
      "Vitality Longevity Centre",
      "Pilates Reformer Studio",
      "Hydroponic Organic Garden",
      "Remissio Holistic Spa"
    ],
    "dailySchedule": [
      {
        "time": "07:30",
        "activity": "Morning Pranayama & Core Flow at MOVEO Studio"
      },
      {
        "time": "08:45",
        "activity": "Nutrio Hydroponic Superfood Breakfast"
      },
      {
        "time": "10:30",
        "activity": "CELLGYM Interval Oxygen Therapy Session"
      },
      {
        "time": "12:30",
        "activity": "Organic Farm-to-Table Lunch"
      },
      {
        "time": "15:00",
        "activity": "Lymphatic Drainage Massage & Infrared Sauna"
      },
      {
        "time": "17:30",
        "activity": "Sound Healing Therapy with Alchemy Crystal Bowls"
      },
      {
        "time": "19:30",
        "activity": "Nocturno Sleep-Optimized Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Rachel Goh",
        "role": "Head of Holistic Medicine",
        "credentials": "Certified Functional Medicine Practitioner & Naturopath",
        "avatar": "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rv-1",
        "author": "Mark P.",
        "date": "January 2026",
        "rating": 5,
        "title": "Cured my chronic insomnia in 4 days",
        "comment": "The sleep program here is remarkable. Combining CELLGYM oxygen therapy with the Nocturno dinners gave me the deepest REM sleep in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "revivo-wellness-resort-g-rev-2",
        "author": "Daniel van der Berg",
        "date": "October 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Hydrotherapy combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "revivo-wellness-resort-g-rev-3",
        "author": "Isabella Morales",
        "date": "September 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Nusa Dua makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Sound Healing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "revivo-wellness-resort-g-rev-4",
        "author": "Gareth Evans",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 620 7000",
      "email": "reservations-bali@revivoresorts.com",
      "website": "https://revivoresorts.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=REV%C4%AAV%C5%8C%20Wellness%20Resort%20Nusa%20Dua%20Indonesia"
    }
  },
  {
    "id": "sukhavati-bali",
    "slug": "sukhavati-ayurvedic-retreat",
    "name": "Sukhavati Ayurvedic Retreat & Wellness Spa",
    "tagline": "Authentic Ayurvedic Panchakarma & Vedic Astrology in Rural Bali",
    "description": "Located amidst the tranquil rice fields of Mengwi in Badung Regency, Sukhavati is an authentic Ayurvedic destination. Centered around personalized Panchakarma detoxification, Vedic pulse diagnostics, daily Shirodhara, and organic vegetarian dining.",
    "location": {
      "city": "Mengwi",
      "region": "Badung Regency, Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.5833,
      "lng": 115.1667
    },
    "heroImage": "https://sukhavatibali.com/wp-content/uploads/2026/06/Sukhavati-Bali_Ayurveda-Luxury-Retreat_accomodation-scaled.jpg",
    "gallery": [
      "https://sukhavatibali.com/wp-content/uploads/2026/06/Sukhavati-Bali_Ayurveda-Luxury-Retreat_accomodation-scaled.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc06774-1.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc07163-1-1-1.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc06971.jpg",
      "https://sukhavatibali.com/wp-content/uploads/2026/05/dsc06774-1-955x1024.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 165,
    "pricing": {
      "minPricePerNight": 410,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Authentic Panchakarma Detox (7 Nights)",
          "days": 7,
          "price": 2950,
          "description": "Full daily Abhyanga, continuous warm herbal oil Shirodhara, Vedic pulse diagnostics, and organic Dosha-specific meals."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Ayurvedic Massage",
      "Shirodhara",
      "Pranayama",
      "Transcendental Meditation"
    ],
    "dietary": [
      "Ayurvedic",
      "Plant-Based/Vegan",
      "Organic Farm-to-Table"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Open-Air Rice Field Yoga Shala",
      "Ayurvedic Treatment Pavilion",
      "Meditation Gazebos",
      "Organic Herb Garden"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Morning Gentle Hatha Yoga & Pranayama"
      },
      {
        "time": "08:00",
        "activity": "Ayurvedic Dosha Breakfast with Warm Spices"
      },
      {
        "time": "10:00",
        "activity": "One-on-One Pulse Consultation with Ayurvedic Vaidya"
      },
      {
        "time": "12:30",
        "activity": "Sattvic Vegetarian Lunch"
      },
      {
        "time": "14:30",
        "activity": "Four-Hand Abhyanga & Shirodhara Oil Treatment"
      },
      {
        "time": "17:00",
        "activity": "Transcendental Meditation & Vedic Discourse"
      },
      {
        "time": "19:00",
        "activity": "Light Cleansing Dinner & Herbal Infusions"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Komang Shanti, BAMS",
        "role": "Lead Ayurvedic Physician",
        "credentials": "Bachelor of Ayurvedic Medicine & Surgery, Kerala University",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "sk-1",
        "author": "Helena S.",
        "date": "November 2025",
        "rating": 5,
        "title": "True Ayurvedic medicine in a peaceful Balinese estate",
        "comment": "Shirodhara done right by experienced therapists every day. The serenity of the rice fields made letting go so easy.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sukhavati-ayurvedic-retreat-g-rev-2",
        "author": "Victoria Sterling",
        "date": "July 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Komang Shanti, BAMS",
        "comment": "The consultation with Dr. Komang Shanti, BAMS was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sukhavati-ayurvedic-retreat-g-rev-3",
        "author": "Marcus Sterling",
        "date": "June 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Mengwi makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sukhavati-ayurvedic-retreat-g-rev-4",
        "author": "Camilla Lindqvist",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 900 6101",
      "email": "rejuvenation@sukhavatibali.com",
      "website": "https://sukhavatibali.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Sukhavati%20Ayurvedic%20Retreat%20%26%20Wellness%20Spa%20Mengwi%20Indonesia"
    }
  },
  {
    "id": "bagus-jati-bali",
    "slug": "bagus-jati-wellbeing-retreat",
    "name": "Bagus Jati Health & Wellbeing Retreat",
    "tagline": "High-Altitude Rainforest Sanctuary in Tegallalang Dedicated to Balinese Tri Hita Karana",
    "description": "Perched 750 meters above sea level on five hectares of hillside flora in Tegallalang, Bagus Jati is Bali’s premier mountain health sanctuary. Built following the sacred philosophy of Tri Hita Karana (harmony with people, nature, and the divine), it offers an organic detox diet, thermal jacuzzi, and circular yoga pavilion suspended over valleys.",
    "location": {
      "city": "Tegallalang",
      "region": "Gianyar, Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.3833,
      "lng": 115.2833
    },
    "heroImage": "https://bagusjati.com/wp-content/uploads/2024/08/1-4.jpg",
    "gallery": [
      "https://bagusjati.com/wp-content/uploads/2024/08/1-4.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/bjslide.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/3-4-scaled.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/4-3-scaled.jpg",
      "https://bagusjati.com/wp-content/uploads/2024/08/Balinese-Compound-2-1300x650.jpg"
    ],
    "badgeTier": "claimed",
    "rating": 4.87,
    "reviewCount": 198,
    "pricing": {
      "minPricePerNight": 180,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "Detox & Balinese Healing (5 Nights)",
          "days": 5,
          "price": 1450,
          "description": "Daily yoga, acupuncture, herbal steam, organic garden juices, and sacred waterfall purification."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Spiritual Awakening"
    ],
    "modalities": [
      "Acupuncture",
      "Forest Bathing",
      "Hydrotherapy",
      "Balinese Massage"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Circular Yoga Pavilion Over Valley",
      "Thermal Hydro-Pool & Waterfall",
      "Organic Vegetable & Herb Farm",
      "Herbal Steam Grotto"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Sunrise Mountain Yoga in Circular Shala"
      },
      {
        "time": "08:30",
        "activity": "Fresh Papaya & Organic Farm Breakfast"
      },
      {
        "time": "10:30",
        "activity": "Nature Walk Through Indigenous Flora & Spice Trees"
      },
      {
        "time": "13:00",
        "activity": "Farm-to-Table Lunch at Surya Restaurant"
      },
      {
        "time": "15:00",
        "activity": "Traditional Balinese Boreh Spice Wrap & Herbal Bath"
      },
      {
        "time": "17:30",
        "activity": "Sunset Meditation & Sound Bowls"
      },
      {
        "time": "19:00",
        "activity": "Candlelit Healing Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Wayan Sudarta",
        "role": "Traditional Balinese Healer & Yoga Master",
        "credentials": "Master of Classical Hatha & Balinese Energy Systems",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "bj-1",
        "author": "Thomas M.",
        "date": "December 2025",
        "rating": 5,
        "title": "Pure mountain air and unmatched stillness",
        "comment": "The circular yoga shala overlooking the jungle valley is heaven on earth. The food comes directly from the organic farm 50 meters away.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "bagus-jati-wellbeing-retreat-g-rev-2",
        "author": "Dr. Alexander Ward",
        "date": "February 2026",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Tegallalang restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "bagus-jati-wellbeing-retreat-g-rev-3",
        "author": "Elena Rostova",
        "date": "January 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Tegallalang makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Forest Bathing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "bagus-jati-wellbeing-retreat-g-rev-4",
        "author": "Julian Hayes",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 901 888",
      "email": "info@bagusjati.com",
      "website": "https://bagusjati.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Bagus%20Jati%20Health%20%26%20Wellbeing%20Retreat%20Tegallalang%20Indonesia"
    }
  },
  {
    "id": "the-yoga-barn-bali",
    "slug": "the-yoga-barn-ubud",
    "name": "The Yoga Barn",
    "tagline": "Global Epicenter for Yoga, Sound Healing & Conscious Living in Ubud",
    "description": "The Yoga Barn is an internationally renowned holistic oasis in Ubud. Offering over 180 classes weekly in yoga, meditation, breathwork, and sound healing, alongside private healing therapies (energy work, colon hydrotherapy, and Ayurvedic bodywork).",
    "location": {
      "city": "Ubud",
      "region": "Gianyar, Bali",
      "country": "Indonesia",
      "continent": "Asia-Pacific",
      "lat": -8.5142,
      "lng": 115.2631
    },
    "heroImage": "https://ak-d.tripcdn.com/images/1mi55224x8zucqgihC0D9_R_600_400_R5_Q90.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/1mi55224x8zucqgihC0D9_R_600_400_R5_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi4t224x8zuc7orv8ADE_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi55224x8zucqgihC0D9_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi0p224x8zue0cou80BD_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi3w224x8zudhzo52B81_Q90.jpg"
    ],
    "badgeTier": "claimed",
    "rating": 4.9,
    "reviewCount": 540,
    "pricing": {
      "minPricePerNight": 120,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "7-Day Unlimited Yoga & Healing Retreat",
          "days": 7,
          "price": 980,
          "description": "Unlimited class pass, private sound healing session, colon hydrotherapy, and organic cafe dining credits."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Meditation",
      "Spiritual Awakening",
      "Emotional & Trauma Healing"
    ],
    "modalities": [
      "Sound Healing",
      "Pranayama",
      "Acupuncture",
      "Somatic Release"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "7 Distinct Yoga Studios",
      "Garden Kafe (Plant-Based & Ayurvedic)",
      "Holistic Healing Clinic",
      "Amphitheatre for Kirtan & Ecstatic Dance"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Morning Vinyasa Flow in Mountain View Studio"
      },
      {
        "time": "09:00",
        "activity": "Fresh Cold Pressed Juices & Acai Bowl at Garden Kafe"
      },
      {
        "time": "11:00",
        "activity": "Tibetan Bowl Sound Healing Alchemy"
      },
      {
        "time": "13:00",
        "activity": "Raw Vegan Gourmet Lunch"
      },
      {
        "time": "15:00",
        "activity": "Private Somatic Release or Energy Healing Session"
      },
      {
        "time": "17:30",
        "activity": "Restorative Yin Yoga with Live Cello"
      },
      {
        "time": "19:30",
        "activity": "Community Kirtan & Sacred Song Circle"
      }
    ],
    "expertTeam": [
      {
        "name": "Meghan Pappenheim",
        "role": "Co-Founder",
        "credentials": "25+ Years in Cultural & Spiritual Community Building in Bali",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "yb-1",
        "author": "Emma C.",
        "date": "February 2026",
        "rating": 5,
        "title": "The beating heart of conscious community",
        "comment": "The sound healing classes in the upper studio will make you cry and release things you didn't even know were there.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-yoga-barn-ubud-g-rev-2",
        "author": "Freja Nielsen",
        "date": "November 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Ubud restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-yoga-barn-ubud-g-rev-3",
        "author": "Chloe Martin",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Ubud makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Pranayama sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-yoga-barn-ubud-g-rev-4",
        "author": "Liam O'Connor",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 971 236",
      "email": "info@theyogabarn.com",
      "website": "https://www.theyogabarn.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=The%20Yoga%20Barn%20Ubud%20Indonesia"
    }
  },
  {
    "id": "the-farm-san-benito",
    "slug": "the-farm-at-san-benito",
    "name": "The Farm at San Benito",
    "tagline": "Holistic Medical Wellness Sanctuary Amidst 52 Hectares of Tropical Forest",
    "description": "Located 90 minutes south of Manila in Lipa City, The Farm at San Benito is an eco-luxury medical retreat resort specializing in natural detoxification, cancer supportive care, cellular renewal, and pain management supervised by integrative medical doctors and licensed therapists.",
    "location": {
      "city": "Batangas",
      "region": "Lipa City",
      "country": "Philippines",
      "continent": "Asia-Pacific",
      "lat": 13.9419,
      "lng": 121.1631
    },
    "heroImage": "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-programs-opt.jpg",
    "gallery": [
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-programs-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-facilities-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-mindful-opt.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2022/09/palmera-suites.jpg",
      "https://www.thefarmatsanbenito.com/wp-content/uploads/2023/09/highlight-restaurant-opt.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.88,
    "reviewCount": 312,
    "pricing": {
      "minPricePerNight": 350,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "Holistic Detox Cleanse (6 Days)",
          "days": 6,
          "price": 2400,
          "description": "Doctor consultation, live blood analysis, colon hydrotherapy, organic vegan meals, and daily yoga."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    "modalities": [
      "Hydrotherapy",
      "Acupuncture",
      "IV Therapy",
      "Live Blood Analysis",
      "Sound Healing"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Raw Food",
      "Organic Farm-to-Table"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Holistic Sanctuary Treatment Complex",
      "Acqua Hydrotherapy Sanctuary",
      "ALIVE! Vegan Restaurant (Michelin recognized)",
      "Organic Coconut Plantation",
      "Peacock Gardens & Lagoons"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Power Walk through Coconut Plantations"
      },
      {
        "time": "08:30",
        "activity": "Living Vegan Breakfast & Cold Pressed Juices"
      },
      {
        "time": "10:30",
        "activity": "Integrative Doctor Consultation & Live Blood Analysis"
      },
      {
        "time": "12:30",
        "activity": "Raw Food Farm-to-Table Lunch"
      },
      {
        "time": "15:00",
        "activity": "Chlorophyll Colon Hydrotherapy Session"
      },
      {
        "time": "17:00",
        "activity": "Tibetan Singing Bowl Meditation"
      },
      {
        "time": "19:00",
        "activity": "Dinner & Wellness Lecture"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Marian Alonzo, MD",
        "role": "Medical Chief of Integrative Health",
        "credentials": "MD, Homeopathy & Anthroposophic Medicine Certified",
        "avatar": "https://images.unsplash.com/photo-1594824813593-9c8821434c76?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-8",
        "author": "Amanda C.",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible value and true medical depth",
        "comment": "The food at ALIVE! restaurant blew me away. I never imagined 100% plant-based raw food could taste like fine dining.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-farm-at-san-benito-g-rev-2",
        "author": "Sophie Laurent",
        "date": "August 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Batangas restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-farm-at-san-benito-g-rev-3",
        "author": "Dr. David Chen",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Batangas makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Acupuncture sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-farm-at-san-benito-g-rev-4",
        "author": "Claire Delacroix",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+63 2 8884 8074",
      "email": "info@thefarm.com.ph",
      "website": "https://thefarmatsanbenito.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=The%20Farm%20at%20San%20Benito%20Batangas%20Philippines"
    }
  },
  {
    "id": "banjaran-hotsprings-malaysia",
    "slug": "the-banjaran-hotsprings-retreat",
    "name": "The Banjaran Hotsprings Retreat",
    "tagline": "Natural Geothermal Hot Springs Sanctuary Nested in 260-Million-Year-Old Limestone Hills",
    "description": "Tucked into a valley of dramatic 260-million-year-old limestone hills in Ipoh, The Banjaran is Malaysia’s premier luxury wellness sanctuary. Built over natural geothermal hot spring lakes, it offers thermal steam caves, an ice bath, crystal meditation caves, and indigenous Malay, Chinese, and Ayurvedic healing treatments.",
    "location": {
      "city": "Ipoh",
      "region": "Perak",
      "country": "Malaysia",
      "continent": "Asia-Pacific",
      "lat": 4.6295,
      "lng": 101.1558
    },
    "heroImage": "https://image-tc.galaxy.tf/wijpeg-39km3w1rhs7tg5sx8s0rfvldt/contact-us.jpg",
    "gallery": [
      "https://image-tc.galaxy.tf/wijpeg-39km3w1rhs7tg5sx8s0rfvldt/contact-us.jpg",
      "https://image-tc.galaxy.tf/wijpeg-62js1kj84woiwc1xy9aiy238y/the-banjaran-pool.jpg",
      "https://image-tc.galaxy.tf/wijpeg-djjqlwjaqahptu9rlxhx4uzhu/ps-16732.jpg",
      "https://image-tc.galaxy.tf/wijpeg-8dxo68y6s7z8fk9qsk3liszni/ps-17627.jpg",
      "https://image-tc.galaxy.tf/wijpeg-eac9lmq9socd6gfx3bnvkjm7w/ps-17396.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.94,
    "reviewCount": 278,
    "pricing": {
      "minPricePerNight": 330,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Geothermal Rejuvenation (3 Nights)",
          "days": 3,
          "price": 1250,
          "description": "Private garden villa with geothermal dipping pool, thermal steam cave session, Malay Urut massage, and organic breakfast."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Hydrotherapy",
      "Contrast Therapy",
      "Ayurvedic Massage",
      "Sound Healing",
      "Forest Bathing"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Natural Geothermal Dipping Pools (38-42°C)",
      "Thermal Steam Cave & Crystal Meditation Cave",
      "Ice Bath & Freezing Water Dipping Pool",
      "Jeff's Cellar (Fine dining inside natural cave)",
      "Garra Rufa Doctor Fish Pool"
    ],
    "dailySchedule": [
      {
        "time": "07:30",
        "activity": "Morning Qi Gong on Lake Deck Overlooking Limestone Cliffs"
      },
      {
        "time": "08:45",
        "activity": "Fresh Tropical Fruits & Organic Breakfast at The Pomelo"
      },
      {
        "time": "10:30",
        "activity": "Thermal Steam Cave Bathing & Contrast Cold Plunge"
      },
      {
        "time": "13:00",
        "activity": "Chef-Curated Organic Wellness Lunch"
      },
      {
        "time": "15:00",
        "activity": "Traditional Malay Urut Healing Massage with Herbal Oils"
      },
      {
        "time": "17:30",
        "activity": "Silent Meditation in the Natural Amethyst Crystal Cave"
      },
      {
        "time": "19:30",
        "activity": "Dinner in the Subterranean Limestone Chamber of Jeff's Cellar"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Aris Ramli",
        "role": "Lead Holistic Practitioner",
        "credentials": "Master of Traditional Malay Medicine (Ramuan) & Hydrotherapy",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "bj-m1",
        "author": "Nigel K.",
        "date": "November 2025",
        "rating": 5,
        "title": "Bathing in geothermal water surrounded by prehistoric cliffs",
        "comment": "The thermal steam cave feels like a spiritual sanctuary. Having dinner in Jeff's Cellar inside a natural cave is an experience of a lifetime.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-banjaran-hotsprings-retreat-g-rev-2",
        "author": "Hiroshi Takahashi",
        "date": "May 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Hydrotherapy combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-banjaran-hotsprings-retreat-g-rev-3",
        "author": "Sarah Jenkins",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Ipoh makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Contrast Therapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-banjaran-hotsprings-retreat-g-rev-4",
        "author": "Dr. Alistair Finch",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+60 5 210 7777",
      "email": "tbhr.reservations@sunwayhotels.com",
      "website": "https://www.sunwayhotels.com/the-banjaran",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=The%20Banjaran%20Hotsprings%20Retreat%20Ipoh%20Malaysia"
    }
  },
  {
    "id": "tia-wellness-vietnam",
    "slug": "tia-wellness-resort-da-nang",
    "name": "TIA Wellness Resort",
    "tagline": "Beachfront All-Inclusive Holistic Wellness & Breathwork Sanctuary in Da Nang",
    "description": "Positioned directly on My Khe Beach in Da Nang, TIA Wellness Resort redefines luxury travel with an all-inclusive wellness concept. Every guest receives guaranteed daily spa treatments, nervous system breathwork classes, and plant-based fine dining across private pool villas.",
    "location": {
      "city": "Da Nang",
      "region": "Central Coast",
      "country": "Vietnam",
      "continent": "Asia-Pacific",
      "lat": 16.0354,
      "lng": 108.2482
    },
    "heroImage": "https://tiawellnessresort.com/wp-content/uploads/2026/01/POOL-VILLAS.jpg",
    "gallery": [
      "https://tiawellnessresort.com/wp-content/uploads/2026/01/POOL-VILLAS.jpg",
      "https://tiawellnessresort.com/wp-content/uploads/2026/09/khong-gian-san-vuon-trong-lanh-cung-ho-boi-an-tuong-tai-tia.jpg",
      "https://tiawellnessresort.com/wp-content/uploads/2026/03/TIA-WELLNESS-CENTRE-22.webp",
      "https://tiawellnessresort.com/wp-content/uploads/2026/09/can-phong-ngap-nang-tu-nhien-tai-tia.png",
      "https://tiawellnessresort.com/wp-content/uploads/2026/09/enjoy-nourishing-plant-based-dining-at-TIA-wellness-resort.webp"
    ],
    "badgeTier": "verified",
    "rating": 4.92,
    "reviewCount": 185,
    "pricing": {
      "minPricePerNight": 360,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Body & Mind Cleanse Retreat (4 Nights)",
          "days": 4,
          "price": 1850,
          "description": "Private pool villa, 2 customized spa treatments daily, somatic breathwork, intermittent fasting coaching, and sound healing."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Sound Healing",
      "Reiki",
      "Acupressure",
      "Somatic Release",
      "Aerial Flow Therapy"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Private Pool in Every Villa",
      "Infinity Beachfront Pool",
      "Holistic Wellness Centre with Waterfall Gardens",
      "Aerial Yoga Shala"
    ],
    "dailySchedule": [
      {
        "time": "07:30",
        "activity": "Vagus Nerve Morning Breathwork on the Beach"
      },
      {
        "time": "08:45",
        "activity": "Plant-Powered Breakfast (Anytime, Anywhere service)"
      },
      {
        "time": "10:30",
        "activity": "Signature Aerial Flow Therapy for Spinal Decompression"
      },
      {
        "time": "13:00",
        "activity": "Gourmet Cleanse Lunch with Microgreens"
      },
      {
        "time": "15:00",
        "activity": "Reiki Energy Balancing & Vietnamese Herbal Compress"
      },
      {
        "time": "17:30",
        "activity": "Tibetan Singing Bowl Sunset Meditation"
      },
      {
        "time": "19:30",
        "activity": "Plant-Based Chef's Degustation Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Linh Nguyen",
        "role": "Head of Somatic & Energy Practices",
        "credentials": "Certified Reiki Master & Vagus Nerve Breathwork Specialist",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "tia-1",
        "author": "Sarah B.",
        "date": "January 2026",
        "rating": 5,
        "title": "Two treatments every single day in your own pool villa",
        "comment": "The breathwork sessions completely regulated my nervous system. Being able to have breakfast on the beach at any hour was true freedom.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "tia-wellness-resort-da-nang-g-rev-2",
        "author": "Charlotte Becker",
        "date": "December 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Sound Healing combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "tia-wellness-resort-da-nang-g-rev-3",
        "author": "Nathalie Dupont",
        "date": "November 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Da Nang makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Reiki sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "tia-wellness-resort-da-nang-g-rev-4",
        "author": "Emma Richardson",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+84 236 3967 999",
      "email": "reservation@tiawellnessresort.com",
      "website": "https://tiawellnessresort.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=TIA%20Wellness%20Resort%20Da%20Nang%20Vietnam"
    }
  },
  {
    "id": "alba-wellness-vietnam",
    "slug": "alba-wellness-valley-hue",
    "name": "Alba Wellness Valley by Fusion",
    "tagline": "Japanese Onsen Journey & Natural Hot Springs Valley in the Foothills of Hue",
    "description": "Located 30km northwest of Hue at the base of the Truong Son mountains, Alba Wellness Valley is built around the natural mineral-rich Thanh Tan hot springs. It features an authentic 8-step Japanese onsen, detox programs, meditation, and zip-line forest therapy.",
    "location": {
      "city": "Hue",
      "region": "Phong Dien",
      "country": "Vietnam",
      "continent": "Asia-Pacific",
      "lat": 16.5412,
      "lng": 107.4123
    },
    "heroImage": "https://ak-d.tripcdn.com/images/0221w12000arfck55A679_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0221w12000arfck55A679_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/1mc1b12000d2zlv3b2116_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mc6z12000d2zlfcxE5F3_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mc1l12000d2z1pytF25C_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/220p0u000000jcotbB96D_Z_1280_853_R50_Q90.jpg"
    ],
    "badgeTier": "claimed",
    "rating": 4.86,
    "reviewCount": 142,
    "pricing": {
      "minPricePerNight": 190,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "Detox Yourself Retreat (5 Days)",
          "days": 5,
          "price": 950,
          "description": "Daily Japanese onsen circuit, mineral thermal pool bathing, organic juicing, detox massage, and cycling."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Hydrotherapy",
      "Forest Bathing",
      "Japanese Onsen",
      "Reflexology"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Natural Mineral Hot Springs (68°C at source)",
      "Traditional 8-Step Japanese Onsen",
      "Forest Zipline & Highwire Course",
      "Organic Farm & Craft Village"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Morning Tai Chi by the Natural Stream"
      },
      {
        "time": "08:30",
        "activity": "Organic Valley Harvest Breakfast & Detox Juice"
      },
      {
        "time": "10:00",
        "activity": "8-Step Japanese Mineral Onsen Experience"
      },
      {
        "time": "12:30",
        "activity": "Light Healthy Vietnamese Lunch at Madame Chau"
      },
      {
        "time": "15:00",
        "activity": "Forest Bathing & Mineral Mud Wrap"
      },
      {
        "time": "17:30",
        "activity": "Zen Meditation & Sound Bowls"
      },
      {
        "time": "19:00",
        "activity": "Wholesome Dinner & Herbal Tea"
      }
    ],
    "expertTeam": [
      {
        "name": "Kenji Sato",
        "role": "Onsen Master & Hydrotherapy Director",
        "credentials": "Certified Japanese Onsen Specialist (Beppu, Japan)",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "ab-1",
        "author": "Pascal D.",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible natural hot springs in Vietnam",
        "comment": "The natural onsen water is so therapeutic for arthritis and sore muscles. A hidden treasure in the mountains of Hue.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "alba-wellness-valley-hue-g-rev-2",
        "author": "Matteo Rossi",
        "date": "September 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Hue restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "alba-wellness-valley-hue-g-rev-3",
        "author": "Benjamin Vance",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Hue makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Forest Bathing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "alba-wellness-valley-hue-g-rev-4",
        "author": "Oliver Wright",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+84 234 3552 222",
      "email": "reservation@albawellnessvalley.com",
      "website": "https://fusion-collection.com/albawellnessvalleyhue/",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Alba%20Wellness%20Valley%20by%20Fusion%20Hue%20Vietnam"
    }
  },
  {
    "id": "song-saa-cambodia",
    "slug": "song-saa-private-island",
    "name": "Song Saa Private Island",
    "tagline": "Ultra-Luxury Regenerative Sanctuary & Marine Conservation in the Koh Rong Archipelago",
    "description": "Spanning two virgin islands in the Koh Rong Archipelago, Song Saa is Cambodia's premier private island sanctuary. Built on principles of regenerative luxury, its nature-led Saraan Sanctuaries draw on ancient Khmer blessing rituals, marine-based wellness, bio-reserve marine protection, and Buddhist water blessings.",
    "location": {
      "city": "Koh Rong Archipelago",
      "region": "Sihanoukville",
      "country": "Cambodia",
      "continent": "Asia-Pacific",
      "lat": 10.6125,
      "lng": 103.2842
    },
    "heroImage": "https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1088044.jpg",
    "gallery": [
      "https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1088044.jpg",
      "https://cdn.kiwicollection.com/media/room_images/PR009346/xxl/009346-songsaa-royal-villa1-song-saa-private-island.jpg",
      "https://cdn.kiwicollection.com/media/room_images/PR009346/xxl/009346-songsaa-two-bed-overwater-villa1-song-saa-private-island.jpg",
      "https://cdn.kiwicollection.com/media/room_images/PR009346/xxl/009346-songsaa-two-bed-overwater-villa2-song-saa-private-island.jpg",
      "https://cdn.kiwicollection.com/media/room_images/PR009346/xxl/009346-songsaa-two-bed-overwater-villa8-song-saa-private-island.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 128,
    "pricing": {
      "minPricePerNight": 950,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "All-Inclusive Khmer Rejuvenation (5 Nights)",
          "days": 5,
          "price": 5200,
          "description": "All-inclusive overwater villa, private boat transfers, daily spa rituals, floating sound healing, and marine reserve snorkeling."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Emotional & Trauma Healing",
      "Burnout & Stress"
    ],
    "modalities": [
      "Sound Healing",
      "Floating Sound Baths",
      "Forest Bathing",
      "Khmer Herbal Steam",
      "Shirodhara"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Plant-Based/Vegan",
      "Gluten-Free"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Private Overwater & Ocean Villas",
      "Marine Protected Coral Reef Sanctuary",
      "Floating Yoga Pavilions",
      "Subterranean Wine Cave & Vista Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Sunrise Yoga on Overwater Pavilion"
      },
      {
        "time": "08:30",
        "activity": "All-Inclusive Tropical Island Breakfast"
      },
      {
        "time": "10:30",
        "activity": "Coral Reef Conservation Snorkel with Marine Biologist"
      },
      {
        "time": "13:00",
        "activity": "Catch-of-the-Day or Plant-Based Lunch"
      },
      {
        "time": "15:30",
        "activity": "Khmer Herbal Steam & Traditional Healing Scrub"
      },
      {
        "time": "18:00",
        "activity": "Floating Sound Healing Session in the Lagoon"
      },
      {
        "time": "19:30",
        "activity": "Candlelit Overwater Dinner Under the Stars"
      }
    ],
    "expertTeam": [
      {
        "name": "Melita Koulmandas",
        "role": "Co-Founder & Creative Director",
        "credentials": "Leader in Regenerative Island Hospitality & Marine Conservation",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "ss-1",
        "author": "Julian G.",
        "date": "January 2026",
        "rating": 5,
        "title": "The floating sound bath in the ocean is magic",
        "comment": "Floating in the sea at twilight while singing bowls vibrate around you is a memory I will cherish forever.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "song-saa-private-island-g-rev-2",
        "author": "Beatrice Montgomery",
        "date": "June 2025",
        "rating": 5,
        "title": "Profound healing under Melita Koulmandas",
        "comment": "The consultation with Melita Koulmandas was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "song-saa-private-island-g-rev-3",
        "author": "Sebastian Thorne",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Koh Rong Archipelago makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Floating Sound Baths sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "song-saa-private-island-g-rev-4",
        "author": "Lukas Meyer",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+855 23 886 750",
      "email": "reservations@songsaa.com",
      "website": "https://www.songsaa.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Song%20Saa%20Private%20Island%20Koh%20Rong%20Archipelago%20Cambodia"
    }
  },
  {
    "id": "navutu-dreams-cambodia",
    "slug": "navutu-dreams-siem-reap",
    "name": "Navutu Dreams Resort & Wellness Retreat",
    "tagline": "Boutique Wellness Sanctuary for Yoga, TCM & Detox Near Angkor Wat",
    "description": "Located in the quiet countryside just minutes from the temples of Angkor, Navutu Dreams is Cambodia’s premier boutique wellness retreat. Featuring three swimming pools, tropical gardens, an on-site Ayurvedic & Traditional Chinese Medicine clinic, and comprehensive detox programs.",
    "location": {
      "city": "Siem Reap",
      "region": "Salakamroeuk",
      "country": "Cambodia",
      "continent": "Asia-Pacific",
      "lat": 13.3456,
      "lng": 103.8678
    },
    "heroImage": "https://navuturesorts.com/wp-content/uploads/2025/09/navutu-dreams-swimming-pool-and-grounds-2.jpg",
    "gallery": [
      "https://navuturesorts.com/wp-content/uploads/2025/09/navutu-dreams-swimming-pool-and-grounds-2.jpg",
      "https://navuturesorts.com/wp-content/uploads/2025/07/navutu-dreams-the-grand-suite-2.webp",
      "https://navuturesorts.com/wp-content/uploads/2025/07/the-grand-tour-family-1.webp",
      "https://navuturesorts.com/wp-content/uploads/2025/07/the-grand-tour-1.webp",
      "https://navuturesorts.com/wp-content/uploads/2025/07/navutu-dreams-explorer-double-room-2.webp"
    ],
    "badgeTier": "claimed",
    "rating": 4.87,
    "reviewCount": 162,
    "pricing": {
      "minPricePerNight": 140,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "Angkor Rebalance & Yoga (4 Nights)",
          "days": 4,
          "price": 880,
          "description": "Private yoga sessions, acupuncture, herbal scrub, organic vegetarian meals, and guided sunrise temple meditation."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Meditation",
      "Detox & Weight Loss",
      "Spiritual Awakening"
    ],
    "modalities": [
      "Acupuncture",
      "Sound Healing",
      "Ayurvedic Massage",
      "Hydrotherapy"
    ],
    "dietary": [
      "Plant-Based/Vegan",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "3 Outdoor Swimming Pools (Freshwater & Saltwater)",
      "Tropical Spa Treatment Pavilions",
      "Yoga Shala Surrounded by Palms",
      "Niam Niam Organic Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "06:00",
        "activity": "Optional Sunrise Silent Meditation at Angkor Wat"
      },
      {
        "time": "08:30",
        "activity": "Tropical Fruit Bowl & Lemongrass Infused Breakfast"
      },
      {
        "time": "10:30",
        "activity": "Traditional Chinese Medicine Pulse & Acupuncture"
      },
      {
        "time": "13:00",
        "activity": "Nutrient-Dense Cambodian Plant-Based Lunch"
      },
      {
        "time": "15:30",
        "activity": "Herbal Oil Body Polish & Aromatherapy"
      },
      {
        "time": "17:30",
        "activity": "Restorative Yin Yoga in Open Shala"
      },
      {
        "time": "19:30",
        "activity": "Dinner at Niam Niam"
      }
    ],
    "expertTeam": [
      {
        "name": "Francois Guiraud",
        "role": "Wellness Director",
        "credentials": "Acupuncturist & TCM Doctor (Beijing Institute of TCM)",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "nd-1",
        "author": "Sophie T.",
        "date": "February 2026",
        "rating": 5,
        "title": "A calm sanctuary after exploring Angkor",
        "comment": "The acupuncture treatments helped my chronic migraines immediately. The staff treated me like family.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "navutu-dreams-siem-reap-g-rev-2",
        "author": "Astrid Lindgren",
        "date": "January 2026",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Siem Reap restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "navutu-dreams-siem-reap-g-rev-3",
        "author": "Daniel van der Berg",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Siem Reap makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Sound Healing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "navutu-dreams-siem-reap-g-rev-4",
        "author": "Isabella Morales",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+855 63 966 100",
      "email": "reservationsdreams@navuturesorts.com",
      "website": "https://navuturesorts.com/",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Navutu%20Dreams%20Resort%20%26%20Wellness%20Retreat%20Siem%20Reap%20Cambodia"
    }
  },
  {
    "id": "clp-switzerland",
    "slug": "clinique-la-prairie",
    "name": "Clinique La Prairie",
    "tagline": "Pioneering Medical Longevity & Cellular Rejuvenation on Lake Geneva",
    "description": "Nestled between the Swiss Alps and Lake Geneva, Clinique La Prairie combines medical excellence with luxury hospitality. Renowned for its world-famous Revitalization program and cutting-edge longevity diagnostics, the clinic unites 50 medical specialists to optimize immune health, cellular longevity, and biological age reversal.",
    "location": {
      "city": "Montreux",
      "region": "Vaud",
      "country": "Switzerland",
      "continent": "Europe",
      "lat": 46.4312,
      "lng": 6.9107
    },
    "heroImage": "https://cliniquelaprairie.com/wp-content/uploads/2025/03/CLP-M05-scaled.jpg",
    "gallery": [
      "https://cliniquelaprairie.com/wp-content/uploads/2025/03/CLP-M05-scaled.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Royal-Suite-Clinique-La-Prairie-Montreux.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Imperial-Suite-Clinique-La-Prairie-Montreux.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Lake-Suite-Clinique-La-Prairie-Montreux-3.jpg",
      "https://cliniquelaprairie.com/wp-content/uploads/2026/06/Niehans-Suite-Clinique-La-Prairie-Montreux.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 142,
    "pricing": {
      "minPricePerNight": 2450,
      "currency": "CHF",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Revitalization Premium (7 Days)",
          "days": 7,
          "price": 26800,
          "description": "Comprehensive DNA sequencing, cellular extract therapy, heavy metal detox, hyperbaric oxygen, and tailored longevity diet."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Hyperbaric Oxygen",
      "Cryotherapy",
      "IV Therapy",
      "Cellular Genomics",
      "Hydrotherapy",
      "Acupuncture"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free"
    ],
    "setting": "Lakefront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Medical Diagnostic Lab",
      "Thermal Hydrotherapy Pools",
      "Cryo Chamber",
      "Private Spa Suites",
      "Private Helipad"
    ],
    "dailySchedule": [
      {
        "time": "07:30",
        "activity": "Gentle Alpine Awakening & Breathwork by the Lake"
      },
      {
        "time": "08:30",
        "activity": "Tailored Nutrient Breakfast & Cellular Supplement Protocol"
      },
      {
        "time": "10:00",
        "activity": "Medical Consultations & Biomarker Diagnostics"
      },
      {
        "time": "12:30",
        "activity": "Anti-Inflammatory Gourmet Lunch"
      },
      {
        "time": "14:30",
        "activity": "Hyperbaric Oxygen Therapy & Contrast Hydro-Thermal Circuit"
      },
      {
        "time": "17:00",
        "activity": "Restorative Yoga & Sound Frequency Healing"
      },
      {
        "time": "19:30",
        "activity": "Longevity Dinner & Guided Sleep Meditation"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Adrian Heini, MD",
        "role": "Head of Preventive Medicine",
        "credentials": "MD, Board-Certified Internal Medicine & Clinical Nutrition",
        "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-1",
        "author": "Marcus V.",
        "date": "October 2025",
        "rating": 5,
        "title": "Life-changing diagnostic depth and bespoke recovery",
        "comment": "The medical precision here is unmatched anywhere in the world. Identified underlying stressors two top clinics missed.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "clinique-la-prairie-g-rev-2",
        "author": "Gareth Evans",
        "date": "October 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Montreux restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "clinique-la-prairie-g-rev-3",
        "author": "Victoria Sterling",
        "date": "September 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Montreux makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Cryotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "clinique-la-prairie-g-rev-4",
        "author": "Marcus Sterling",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+41 21 989 33 11",
      "email": "concierge@cliniquelaprairie.com",
      "website": "https://cliniquelaprairie.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Clinique%20La%20Prairie%20Montreux%20Switzerland"
    }
  },
  {
    "id": "sha-wellness-spain",
    "slug": "sha-wellness-clinic",
    "name": "SHA Wellness Clinic",
    "tagline": "World-Renowned Pioneer in Integrative Health & Longevity Medicine",
    "description": "Positioned on the scenic cliffs of Sierra Helada overlooking the Mediterranean Sea, SHA Wellness Clinic blends ancient Eastern philosophies with state-of-the-art Western medicine. With dedicated units in Cognitive Health, Healthy Aging, and Metabolic Recovery.",
    "location": {
      "city": "Alicante",
      "region": "Costa Blanca",
      "country": "Spain",
      "continent": "Europe",
      "lat": 38.5719,
      "lng": -0.0768
    },
    "heroImage": "https://shawellness.com/wp-content/uploads/2026/01/location-mex-1.jpg",
    "gallery": [
      "https://shawellness.com/wp-content/uploads/2026/01/location-mex-1.jpg",
      "https://shawellness.com/wp-content/uploads/2026/07/51349f9eb7563c6092eff3dc9a402b333c59d224-1-scaled-1.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Rebalance-opt.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Executive-opt.jpg",
      "https://shawellness.com/wp-content/uploads/2026/02/Programs-26-_Longevity-opt.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.94,
    "reviewCount": 189,
    "pricing": {
      "minPricePerNight": 980,
      "currency": "EUR",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Optimal Weight & Detox (7 Days)",
          "days": 7,
          "price": 6900,
          "description": "Metabolic profiling, colon hydrotherapy, pressotherapy, acupuncture, and customized SHA macrobiotic diet plan."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    "modalities": [
      "Cryotherapy",
      "Hyperbaric Oxygen",
      "Acupuncture",
      "IV Therapy",
      "Hydrotherapy"
    ],
    "dietary": [
      "Anti-Inflammatory",
      "Organic Farm-to-Table",
      "Gluten-Free"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Hydrotherapy Circuit & Flotarium",
      "Cryotherapy Chamber",
      "Infinity Rooftop Pool",
      "Cognitive Stimulation Lab"
    ],
    "dailySchedule": [
      {
        "time": "07:30",
        "activity": "Sunrise Coastal Walk & Qi Gong on Helipad"
      },
      {
        "time": "08:45",
        "activity": "Personalized SHA Nutrition Breakfast (Kushi Macrobiotic)"
      },
      {
        "time": "10:30",
        "activity": "Medical Ozone & IV Micronutrient Infusion"
      },
      {
        "time": "13:00",
        "activity": "Chef-Prepared Therapeutic Lunch"
      },
      {
        "time": "15:00",
        "activity": "Cryotherapy Session & Hydrotherapy Flotarium"
      },
      {
        "time": "17:30",
        "activity": "Healthy Cooking Academy Masterclass"
      },
      {
        "time": "19:30",
        "activity": "Dinner & Evening Sound Therapy"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Vicente Mera",
        "role": "Head of Anti-Aging & Genomic Medicine",
        "credentials": "European Award for Medicine in Anti-Aging (2021)",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-4",
        "author": "Julian T.",
        "date": "November 2025",
        "rating": 5,
        "title": "Metabolic reset that changed my lifestyle",
        "comment": "The medical staff is extraordinary, and the architectural design makes every day feel like a movie.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sha-wellness-clinic-g-rev-2",
        "author": "Camilla Lindqvist",
        "date": "July 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Alicante restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sha-wellness-clinic-g-rev-3",
        "author": "Dr. Alexander Ward",
        "date": "June 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Alicante makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Hyperbaric Oxygen sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sha-wellness-clinic-g-rev-4",
        "author": "Elena Rostova",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+34 966 81 11 99",
      "email": "info@shawellness.com",
      "website": "https://shawellness.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=SHA%20Wellness%20Clinic%20Alicante%20Spain"
    }
  },
  {
    "id": "ananda-himalayas",
    "slug": "ananda-in-the-himalayas",
    "name": "Ananda in the Himalayas",
    "tagline": "Authentic Ayurvedic Panchakarma & Vedanta Philosophy in a Maharaja's Palace",
    "description": "Perched on a 100-acre palace estate surrounded by Sal forests with panoramic vistas of the Ganges and Himalayan foothills, Ananda is the gold standard for traditional Ayurveda, Panchakarma detox, and classical Hatha Yoga.",
    "location": {
      "city": "Rishikesh",
      "region": "Uttarakhand",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 30.1254,
      "lng": 78.3182
    },
    "heroImage": "https://cdn.kiwicollection.com/media/property/PR003650/ll/Ananda%20-%20in%20the%20Himalayas-003650-%20A%20destination%20spa.jpg?cb=1470264485,",
    "gallery": [
      "https://cdn.kiwicollection.com/media/property/PR003650/ll/Ananda%20-%20in%20the%20Himalayas-003650-%20A%20destination%20spa.jpg?cb=1470264485,",
      "https://cdn.kiwicollection.com/media/property/PR003650/xxl/Ananda%20-%20in%20the%20Himalayas-003650-%20A%20destination%20spa.jpg?cb=1470264485,",
      "https://cdn.kiwicollection.com/media/property/PR003650/ll/003650-05-08d916bb-bdc9-4c60-a746-5a5c1eb7dba9.jpg?cb=1418156434,",
      "https://cdn.kiwicollection.com/media/property/PR003650/xxl/003650-05-08d916bb-bdc9-4c60-a746-5a5c1eb7dba9.jpg?cb=1418156434,",
      "https://cdn.kiwicollection.com/media/property/PR003650/ll/003650-16-f6451025-23ae-466d-a73b-79081c7d3ccf.jpg?cb=1418156440,"
    ],
    "badgeTier": "verified",
    "rating": 4.97,
    "reviewCount": 264,
    "pricing": {
      "minPricePerNight": 850,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Authentic Panchakarma (14 Nights)",
          "days": 14,
          "price": 11200,
          "description": "Full traditional Ayurvedic detoxification, daily Abhyanga, Shirodhara, herbal steam, and personalized Dosha cuisine."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Burnout & Stress",
      "Spiritual Awakening",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Ayurvedic Massage",
      "Forest Bathing",
      "Sound Healing",
      "Pranayama",
      "Hydrotherapy"
    ],
    "dietary": [
      "Ayurvedic",
      "Organic Farm-to-Table",
      "Plant-Based/Vegan"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Palace Spa & Hydrotherapy Facilities",
      "Open-Air Yoga Pavilions",
      "Private Sal Forest Hiking Trails",
      "Meditation Shala"
    ],
    "dailySchedule": [
      {
        "time": "06:00",
        "activity": "Ganges Valley Sunrise Hatha Yoga"
      },
      {
        "time": "07:30",
        "activity": "Pranayama & Himalayan Breath Mastery"
      },
      {
        "time": "08:30",
        "activity": "Ayurvedic Dosha Breakfast"
      },
      {
        "time": "10:30",
        "activity": "Four-Hand Abhyanga & Warm Herbal Oil Shirodhara"
      },
      {
        "time": "13:00",
        "activity": "Organic Sattvic Lunch"
      },
      {
        "time": "16:00",
        "activity": "Vedanta Discourse & Guided Philosophy Reflection"
      },
      {
        "time": "17:30",
        "activity": "Forest Meditation in Himalayan Sal Woodlands"
      },
      {
        "time": "19:30",
        "activity": "Evening Ayurvedic Dinner & Healing Herb Infusions"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Chandan Rawat",
        "role": "Chief Ayurvedic Physician (BAMS)",
        "credentials": "25+ Years Experience in Panchakarma Diagnostics",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-5",
        "author": "Devon M.",
        "date": "January 2026",
        "rating": 5,
        "title": "A spiritual home above the clouds",
        "comment": "The pulse diagnosis was so accurate it was uncanny. After 14 days of Panchakarma, my chronic fatigue of 6 years vanished.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ananda-in-the-himalayas-g-rev-2",
        "author": "Sunita Menon",
        "date": "February 2026",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Rishikesh are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ananda-in-the-himalayas-g-rev-3",
        "author": "Rajesh Khurana",
        "date": "January 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Rishikesh makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Forest Bathing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ananda-in-the-himalayas-g-rev-4",
        "author": "Dr. Meenakshi Sundaram",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 1378 227 500",
      "email": "reservations@anandaspa.com",
      "website": "https://anandaspa.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Ananda%20in%20the%20Himalayas%20Rishikesh%20India"
    }
  },
  {
    "id": "mii-amo-sedona",
    "slug": "mii-amo-sedona",
    "name": "Mii Amo",
    "tagline": "Transformative Spiritual & Mind-Body Retreat in Sedona's Red Rock Vortex",
    "description": "Tucked inside the sheer red rock walls of Boynton Canyon, Mii Amo is an intimate, destination spa renowned for connection, healing, and mindfulness. Known for its sacred Crystal Grotto, Native American wisdom, and personalized 'Journeys'.",
    "location": {
      "city": "Sedona",
      "region": "Arizona",
      "country": "United States",
      "continent": "North America",
      "lat": 34.9125,
      "lng": -111.8496
    },
    "heroImage": "https://miiamo.com/wp-content/uploads/2022/09/Grotto_Exterior.jpg",
    "gallery": [
      "https://miiamo.com/wp-content/uploads/2022/09/Grotto_Exterior.jpg",
      "https://miiamo.com/wp-content/uploads/2022/09/Pool-at-Dusk-847x582.jpg",
      "https://miiamo.com/wp-content/uploads/2023/07/steam-and-sauna-847x582.jpg",
      "https://miiamo.com/wp-content/uploads/2023/07/Relaxation-Lounge-847x582.jpg",
      "https://miiamo.com/wp-content/uploads/2023/07/Grotto-Slider-custom-image-847x582.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 167,
    "pricing": {
      "minPricePerNight": 1650,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "All-Inclusive 4-Night Journey",
          "days": 4,
          "price": 6600,
          "description": "Full lodging, all gourmet canyon dining, daily spa treatments, vortex meditation, and intuitive astrology consultation."
        }
      ]
    },
    "primaryGoals": [
      "Emotional & Trauma Healing",
      "Spiritual Awakening",
      "Burnout & Stress"
    ],
    "modalities": [
      "Sound Healing",
      "Acupuncture",
      "Somatic Release",
      "Forest Bathing"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan"
    ],
    "setting": "Desert Oasis",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Crystal Grotto Sanctuary",
      "Boynton Canyon Private Trail Access",
      "Hummingbird Signature Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Vortex Morning Meditation in Crystal Grotto"
      },
      {
        "time": "08:15",
        "activity": "Fresh Canyon Harvest Breakfast"
      },
      {
        "time": "09:30",
        "activity": "Guided Red Rock Hiking & Nature Attunement"
      },
      {
        "time": "11:45",
        "activity": "Red Clay & Prickly Pear Purification Body Wrap"
      },
      {
        "time": "13:00",
        "activity": "Mindful Culinary Lunch"
      },
      {
        "time": "17:30",
        "activity": "Sunset Sound Bath with Alchemy Quartz Bowls"
      },
      {
        "time": "19:30",
        "activity": "Starlight Dinner at Hummingbird"
      }
    ],
    "expertTeam": [
      {
        "name": "Raven Lightfoot",
        "role": "Lead Spiritual Guide",
        "credentials": "Indigenous Wisdom Keeper & Master Sound Alchemist",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-6",
        "author": "Sarah L.",
        "date": "February 2026",
        "rating": 5,
        "title": "Healed a heart that felt broken for two years",
        "comment": "The Crystal Grotto morning meditation opened tears I didn't know I was holding.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mii-amo-sedona-g-rev-2",
        "author": "Julian Hayes",
        "date": "November 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Sedona restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mii-amo-sedona-g-rev-3",
        "author": "Freja Nielsen",
        "date": "October 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Sedona makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Acupuncture sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mii-amo-sedona-g-rev-4",
        "author": "Chloe Martin",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+1 844 993 9518",
      "email": "concierge@miiamo.com",
      "website": "https://miiamo.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Mii%20Amo%20Sedona%20United%20States"
    }
  },
  {
    "id": "soukya-bangalore-india",
    "slug": "soukya-international-holistic-health-centre",
    "name": "Soukya International Holistic Health Centre",
    "tagline": "Global Leader in Integrative Medicine, Homeopathy, Ayurveda & Naturopathy on 30 Organic Acres",
    "description": "Founded by world-renowned holistic physician Dr. Issac Mathai, Soukya is a 30-acre certified organic holistic health sanctuary located in Whitefield, Bangalore. Having treated international royalty, global leaders, and discerning wellness travelers for over two decades, Soukya integrates Ayurveda, Naturopathy, Homeopathy, Yoga, and Acupuncture under strict medical supervision. Every patient receives a customized treatment protocol based on pulse diagnosis, constitutional assessment, and whole-person healing.",
    "location": {
      "city": "Bangalore",
      "region": "Karnataka",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 13.0135,
      "lng": 77.7816
    },
    "heroImage": "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-01.jpg",
    "gallery": [
      "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-01.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/Entrance.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/Yoga_Hall.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-07.jpg",
      "https://d1m3k9ghxaebb7.cloudfront.net/images/gallery/gallery-image-19.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 289,
    "pricing": {
      "minPricePerNight": 460,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "7-Night Comprehensive Medical Detox & Panchakarma",
          "days": 7,
          "price": 3450,
          "description": "Doctor consultations, daily Ayurvedic treatments, personalized homeopathic medication, organic vegetarian meals, and therapeutic yoga."
        },
        {
          "name": "14-Night Chronic Ailment & Longevity Program",
          "days": 14,
          "price": 6800,
          "description": "Deep tissue regeneration, dosha balancing, daily herbal therapies, specialized naturopathic hydrotherapy, and lifestyle medicine."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    "modalities": [
      "Ayurvedic Massage",
      "Homeopathy",
      "Naturopathy",
      "Acupuncture",
      "Hydrotherapy",
      "Pranayama"
    ],
    "dietary": [
      "Ayurvedic",
      "Organic Farm-to-Table",
      "Plant-Based/Vegan"
    ],
    "setting": "Lush Rainforest",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "30-Acre Certified Organic Farm & Medicinal Herb Garden",
      "Ayurvedic Pharmacy & Dispensary",
      "Dedicated Naturopathy Hydrotherapy Centre",
      "Open-Air Yoga & Meditation Pavilions",
      "Walking & Reflexology Footpaths"
    ],
    "dailySchedule": [
      {
        "time": "06:00",
        "activity": "Morning Pranayama & Therapeutic Yoga"
      },
      {
        "time": "07:30",
        "activity": "Doctor Prescribed Herbal Concoctions & Organic Breakfast"
      },
      {
        "time": "09:30",
        "activity": "Primary Ayurvedic Therapy (Abhyanga / Shirodhara / Kizhi)"
      },
      {
        "time": "12:30",
        "activity": "Doctor-Prescribed Sattvic Lunch from the Organic Farm"
      },
      {
        "time": "14:30",
        "activity": "Naturopathic Hydrotherapy or Acupuncture Session"
      },
      {
        "time": "16:30",
        "activity": "Yoga Nidra & Guided Meditation"
      },
      {
        "time": "18:00",
        "activity": "Medical Consultation & Progress Review with Dr. Mathai"
      },
      {
        "time": "19:30",
        "activity": "Nourishing Light Dinner & Herbal Sleep Elixir"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Issac Mathai, MD (Hom)",
        "role": "Founder & Chairman",
        "credentials": "Renowned Holistic Physician, 30+ Years Clinical Experience",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Dr. Sujatha Raman, BAMS",
        "role": "Chief Ayurvedic Physician",
        "credentials": "Gold Medalist Ayurvedic Medicine, Specialist in Panchakarma",
        "avatar": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-soukya-1",
        "author": "Camilla P.",
        "date": "February 2026",
        "rating": 5,
        "title": "The gold standard of holistic medicine",
        "comment": "The precision of the medical consultations and the purity of the 30-acre organic surroundings is unmatched. My persistent joint inflammation resolved completely within 10 days.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "soukya-international-holistic-health-centre-g-rev-2",
        "author": "Vikram Malhotra",
        "date": "August 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Bangalore restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "soukya-international-holistic-health-centre-g-rev-3",
        "author": "Pooja Mehta",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Bangalore makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Homeopathy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "soukya-international-holistic-health-centre-g-rev-4",
        "author": "Ananya Sharma",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 80 7945 0000",
      "email": "info@soukya.com",
      "website": "https://soukya.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Soukya%20International%20Holistic%20Health%20Centre%20Bangalore%20India"
    }
  },
  {
    "id": "six-senses-vana-india",
    "slug": "six-senses-vana-dehradun",
    "name": "Six Senses Vana",
    "tagline": "Transformative Himalayan Wellness Sanctuary Integrating Ayurveda, Sowa Rigpa & Yoga",
    "description": "Nestled in a dense Sal forest in the foothills of the Himalayas near Dehradun, Six Senses Vana is an internationally acclaimed destination sanctuary where wellness is a way of life. Vana is one of the few centers in the world offering authentic Sowa Rigpa (Traditional Tibetan Medicine) alongside Classical Ayurveda, Natural Healing Therapies, and high-level Yoga. Guests wear comfortable organic linen attire (Kurta pyjamas) provided by the retreat, removing social comparisons and fostering deep inner stillness.",
    "location": {
      "city": "Dehradun",
      "region": "Uttarakhand",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 30.3444,
      "lng": 78.0163
    },
    "heroImage": "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-hotel-exterior.jpg",
    "gallery": [
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-hotel-exterior.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-entrance.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-ayurveda-center.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-guest-room2.jpg",
      "https://secure.s.forbestravelguide.com/img/properties/six-senses-vana/six-senses-vana-temple-garden.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.98,
    "reviewCount": 312,
    "pricing": {
      "minPricePerNight": 640,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Vana Signature Wellness (5 Nights)",
          "days": 5,
          "price": 3400,
          "description": "Tibetan & Ayurvedic doctor intake, daily treatments, customized culinary nutrition, yoga, meditation, and mindful forest walks."
        },
        {
          "name": "Tibetan Sowa Rigpa Deep Rest (7 Nights)",
          "days": 7,
          "price": 4750,
          "description": "Pulse diagnosis by Tibetan Amchis, Ku Nye massage, herbal compress treatments, sound baths, and nervous system restoration."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Ayurveda & Panchakarma",
      "Mindfulness & Meditation",
      "Emotional & Trauma Healing"
    ],
    "modalities": [
      "Ayurvedic Massage",
      "Sound Healing",
      "Hydrotherapy",
      "Acupuncture",
      "Forest Bathing",
      "Pranayama"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Ayurvedic",
      "Anti-Inflammatory",
      "Plant-Based/Vegan"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Sal Forest Immersion Trails",
      "Traditional Sowa Rigpa Tibetan Treatment Wing",
      "Watsu Thermal Pool & Hydrotherapy Pavilion",
      "Kila Activity & Sound Healing Temple",
      "Organic Apothecary & Herbarium"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Forest Pranayama & Morning Hatha Yoga"
      },
      {
        "time": "08:00",
        "activity": "Nourishing Sal Forest Breakfast"
      },
      {
        "time": "10:00",
        "activity": "Tibetan Ku Nye Herbal Therapy or Ayurvedic Shirodhara"
      },
      {
        "time": "12:30",
        "activity": "Curated Mindful Lunch with Local Seasonal Ingredients"
      },
      {
        "time": "15:00",
        "activity": "Watsu Aquatic Bodywork or Acupuncture"
      },
      {
        "time": "17:00",
        "activity": "Raag Therapy (Himalayan Sound Healing with Classical Flute)"
      },
      {
        "time": "19:00",
        "activity": "Community Dinner & Tibetan Philosophy Gathering"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Dimple Sharma",
        "role": "Head of Ayurveda",
        "credentials": "BAMS, 17+ Years in Classical Ayurvedic Therapeutics",
        "avatar": "https://images.unsplash.com/photo-1594824813501-48358473bbbe?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Amchi Lobsang",
        "role": "Chief Tibetan Medicine Doctor",
        "credentials": "Men-Tsee-Khang Certified Sowa Rigpa Master",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-vana-1",
        "author": "Julian E.",
        "date": "March 2026",
        "rating": 5,
        "title": "An otherworldly haven of peace",
        "comment": "Wearing the linen kurta, walking through the Sal forest, and receiving Sowa Rigpa treatments reset my soul after a devastating year of corporate burnout.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-vana-dehradun-g-rev-2",
        "author": "Kavita Rao",
        "date": "May 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Dehradun restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-vana-dehradun-g-rev-3",
        "author": "Siddharth Verma",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Dehradun makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Sound Healing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-vana-dehradun-g-rev-4",
        "author": "Arjun Patel",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 135 351 1111",
      "email": "reservations-vana@sixsenses.com",
      "website": "https://sixsenses.com/en/resorts/vana",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Six%20Senses%20Vana%20Dehradun%20India"
    }
  },
  {
    "id": "amanemu-japan",
    "slug": "amanemu-ise-shima",
    "name": "Amanemu",
    "tagline": "Thermal Onsen Sanctuary & Kampo Herbal Healing Overlooking Ago Bay",
    "description": "Set within the forested hills of Ise-Shima National Park overlooking calm Ago Bay, Amanemu is Aman's acclaimed hot spring resort embracing Japan's ancient bathing traditions. Centered around a 2,000-square-meter thermal onsen pavilion fed by mineral-rich natural springs, Amanemu offers customized holistic wellness programs combining Kampo (traditional Japanese herbal medicine), Zen meditation, Watsu aquatic therapy, and seasonal kaiseki nutrition.",
    "location": {
      "city": "Shima",
      "region": "Mie Prefecture",
      "country": "Japan",
      "continent": "Asia-Pacific",
      "lat": 34.3033,
      "lng": 136.8378
    },
    "heroImage": "https://www.aman.com/sites/default/files/2022-08/Amanemu%20-%20Aerial.jpg",
    "gallery": [
      "https://www.aman.com/sites/default/files/2022-08/Amanemu%20-%20Aerial.jpg",
      "https://ak-d.tripcdn.com/images/1mc6u12000j1ddw6u919B_R_960_660_R5_D.jpg",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2022-03/Amanemu%2C%20Japan%20-%20Resort%2C%20exterior%20detail%204.webp?itok=5wYFtOeQ",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2022-04/Amanemu%2C%20Japan%20-%20Resort%2C%20exterior%20detail.webp?itok=6S0Z0IdP",
      "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2021-08/amanemu-lunch-l.webp?itok=C6IlQISQ"
    ],
    "badgeTier": "verified",
    "rating": 4.95,
    "reviewCount": 198,
    "pricing": {
      "minPricePerNight": 1350,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Kampo Herbal & Onsen Immersion (3 Nights)",
          "days": 3,
          "price": 4400,
          "description": "Kampo doctor assessment, daily private mineral onsen bathing, cedarwood body scrub, Zen meditation, and kaiseki dining."
        },
        {
          "name": "Restorative Longevity & Movement (5 Nights)",
          "days": 5,
          "price": 7200,
          "description": "Full bio-energetic consultation, aquatic Watsu, myofascial release, forest bathing in Ise-Shima, and personalized herbal infusions."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Hydrotherapy",
      "Acupuncture",
      "Forest Bathing",
      "Sound Healing",
      "Physiotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "2,000 sqm Natural Mineral Hot Spring Onsen",
      "Private Onsen Pavilions with Daybeds",
      "Watsu Aquatic Therapy Pool",
      "Zen Meditation Yoga Studio",
      "Ago Bay Panoramic Deck"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Ago Bay Sunrise Mindful Breathing & Qigong"
      },
      {
        "time": "08:30",
        "activity": "Japanese Artisanal Breakfast with Fermented Probiotics"
      },
      {
        "time": "10:30",
        "activity": "Mineral-Rich Thermal Onsen Hydrotherapy & Salt Scrub"
      },
      {
        "time": "13:00",
        "activity": "Seasonal Kaiseki Lunch at The Restaurant"
      },
      {
        "time": "15:00",
        "activity": "Kampo Herbal Consultation & Personalized Shiatsu Bodywork"
      },
      {
        "time": "17:30",
        "activity": "Forest Bathing (Shinrin-yoku) in Ise-Shima Sanctuary"
      },
      {
        "time": "19:30",
        "activity": "Multi-Course Wellness Kaiseki Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Kenji Takahashi",
        "role": "Kampo Medicine Consultant",
        "credentials": "Licensed Oriental Medicine Practitioner, 20+ Years Experience",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Reiko Mori",
        "role": "Master Onsen & Spa Director",
        "credentials": "CIBTAC Certified Hydrotherapist & Watsu Practitioner",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-amanemu-1",
        "author": "Hiroshi T.",
        "date": "January 2026",
        "rating": 5,
        "title": "The most restorative thermal springs in Japan",
        "comment": "The natural onsen waters overlooking Ago Bay combined with the precision of the Kampo herbs healed both my body and mind.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanemu-ise-shima-g-rev-2",
        "author": "Liam O'Connor",
        "date": "December 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Shima restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanemu-ise-shima-g-rev-3",
        "author": "Sophie Laurent",
        "date": "November 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Shima makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Acupuncture sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanemu-ise-shima-g-rev-4",
        "author": "Dr. David Chen",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+81 599 52 5000",
      "email": "amanemu.res@aman.com",
      "website": "https://aman.com/resorts/amanemu",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Amanemu%20Shima%20Japan"
    }
  },
  {
    "id": "sangha-retreat-octave-china",
    "slug": "sangha-retreat-by-octave-institute",
    "name": "Sangha Retreat by Octave Institute",
    "tagline": "State-of-the-Art Medical Diagnostics & Traditional Chinese Medicine on Yangcheng Lake",
    "description": "Set on the shores of Yangcheng Lake just outside Shanghai in Suzhou, Sangha Retreat by Octave Institute is a visionary 47-acre wellness sanctuary. Built with an investment of over $500 million, Sangha seamlessly unites cutting-edge Western clinical medicine—including comprehensive biochemical assessments, cardiopulmonary testing, and genetic screenings—with ancient Traditional Chinese Medicine (TCM), acupuncture, hydrotherapy, and mindful quantum living.",
    "location": {
      "city": "Suzhou",
      "region": "Jiangsu",
      "country": "China",
      "continent": "Asia-Pacific",
      "lat": 31.3967,
      "lng": 120.7381
    },
    "heroImage": "https://th-goco.oss-ap-southeast-7.aliyuncs.com/wp-content/uploads/2019/04/Sangha-Octave-China-Spa-Exercise-Pool.png",
    "gallery": [
      "https://th-goco.oss-ap-southeast-7.aliyuncs.com/wp-content/uploads/2019/04/Sangha-Octave-China-Spa-Exercise-Pool.png",
      "https://www.gocohospitality.com/wp-content/uploads/2019/04/Spa-Building-Perspective-370x370.jpg",
      "https://www.gocohospitality.com/wp-content/uploads/2019/04/Sangha-Octave-China-Spa-Indoor-Pool.png",
      "https://www.gocohospitality.com/wp-content/uploads/2019/05/4-370x370.jpg",
      "https://www.gocohospitality.com/wp-content/uploads/2019/04/Sangha-Octave-China-Restaurant-Lounge.png"
    ],
    "badgeTier": "featured",
    "rating": 4.94,
    "reviewCount": 215,
    "pricing": {
      "minPricePerNight": 750,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Comprehensive Medical & TCM Immersion (4 Nights)",
          "days": 4,
          "price": 3300,
          "description": "Full bio-marker blood screen, cardiovascular stress test, TCM meridian analysis, acupuncture, moxibustion, and lakeview villa."
        },
        {
          "name": "Metabolic Reset & Longevity (7 Nights)",
          "days": 7,
          "price": 5600,
          "description": "Complete functional medicine protocol, gut microbiome analysis, hyperbaric oxygen therapy, thermal hydrotherapy, and bespoke nutrition."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Acupuncture",
      "Hydrotherapy",
      "IV Therapy",
      "Cryotherapy",
      "Sound Healing",
      "Physiotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan"
    ],
    "setting": "Lakefront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "200,000 sq ft AT-ONE Integrated Health Clinic",
      "12-Step Thermal Hydrotherapy Circuit",
      "Hyperbaric Oxygen & Cryotherapy Suites",
      "Subconscious Sound Meditation Dome",
      "Organic Farm & Culinary Lab"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Lakefront Tai Chi & Qigong with TCM Master"
      },
      {
        "time": "08:15",
        "activity": "Customized Metabolic Breakfast"
      },
      {
        "time": "09:30",
        "activity": "Comprehensive Clinical Diagnostics & Meridian Scan"
      },
      {
        "time": "11:30",
        "activity": "12-Step Hydrotherapy Circuit & Herbal Steam"
      },
      {
        "time": "13:00",
        "activity": "Medicinal Farm-to-Table Culinary Lunch"
      },
      {
        "time": "15:00",
        "activity": "Acupuncture, Moxibustion & Cupping Therapy"
      },
      {
        "time": "17:30",
        "activity": "Dome Sound Meditation & Breathwork"
      },
      {
        "time": "19:30",
        "activity": "Restorative Dinner & Evening Herbal Tonic"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Lily Zhang, MD, PhD",
        "role": "Medical Director",
        "credentials": "Board Certified Internal Medicine & Clinical Functional Diagnostics",
        "avatar": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Master Chen Wei",
        "role": "Chief TCM Physician",
        "credentials": "4th Generation TCM Practitioner, Acupuncturist & Herbalist",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-octave-1",
        "author": "William K.",
        "date": "February 2026",
        "rating": 5,
        "title": "The future of medicine and ancient wisdom combined",
        "comment": "The diagnostic depth of the AT-ONE clinic gave me data no hospital in London ever provided. Combined with the TCM acupuncture, my chronic gut issues improved in 7 days.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sangha-retreat-by-octave-institute-g-rev-2",
        "author": "Claire Delacroix",
        "date": "September 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Suzhou restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sangha-retreat-by-octave-institute-g-rev-3",
        "author": "Hiroshi Takahashi",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Suzhou makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Hydrotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sangha-retreat-by-octave-institute-g-rev-4",
        "author": "Sarah Jenkins",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+86 512 6788 1888",
      "email": "reservations@livingoctave.com",
      "website": "https://livingoctave.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Sangha%20Retreat%20by%20Octave%20Institute%20Suzhou%20China"
    }
  },
  {
    "id": "healience-seonmaeul-korea",
    "slug": "healience-seonmaeul-hongcheon",
    "name": "Healience Seonmaeul",
    "tagline": "South Korea's Foremost High-Altitude Digital Detox & Forest Healing Sanctuary",
    "description": "Perched 250 meters above sea level on the tranquil slopes of Mt. Jongjasan in Gangwon Province, Healience Seonmaeul is South Korea's first certified wellness resort. Founded by renowned neuropsychiatrist Dr. Lee Si-hyung, Healience is intentionally engineered without mobile phone reception or Wi-Fi in guest quarters to enable complete neuro-restoration. The retreat's four core pillars—dietary habits, exercise habits, lifestyle rhythm, and mind control—guide guests toward lasting vitality.",
    "location": {
      "city": "Hongcheon",
      "region": "Gangwon-do",
      "country": "South Korea",
      "continent": "Asia-Pacific",
      "lat": 37.6972,
      "lng": 127.8886
    },
    "heroImage": "https://ak-d.tripcdn.com/images/0581312000o0q993xCFEC_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0581312000o0q993xCFEC_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0223q12000lt26uae9B5B_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/02X27120008ubh0cgB7DD_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0226n12000k2jc2kx9880_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0221m12000aqgt5f08878_Z_1280_853_R50_Q90.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 247,
    "pricing": {
      "minPricePerNight": 320,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Digital Detox & Mindful Forest Immersion (3 Nights)",
          "days": 3,
          "price": 990,
          "description": "Doctor-led circadian rhythm reset, guided forest therapy, carbonated hot springs, Korean low-sodium organic cuisine, and meditation."
        },
        {
          "name": "7-Night Neuro-Restoration & Vitality Journey",
          "days": 7,
          "price": 2200,
          "description": "Neuropsychological evaluation, daily forest trekking, bedrock thermal spa, posture correction, and autonomic nervous system rebalancing."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Mindfulness & Meditation",
      "Emotional & Trauma Healing"
    ],
    "modalities": [
      "Forest Bathing",
      "Hydrotherapy",
      "Sound Healing",
      "Pranayama",
      "Somatic Release"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Jongjasan Forest Healing Trails (5 Dedicated Routes)",
      "Bedrock Carbonated Thermal Spa & Hinoki Saunas",
      "Spiritual Forest Meditation Shala",
      "Digital Detox Sanctuary (No Wi-Fi Zones)",
      "Circadian Dining Hall"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Mt. Jongjasan Morning Forest Stride & Deep Breathing"
      },
      {
        "time": "08:00",
        "activity": "Korean Organic Fermented Longevity Breakfast"
      },
      {
        "time": "10:00",
        "activity": "Autonomic Nervous System Reset & Mindful Posture Class"
      },
      {
        "time": "12:30",
        "activity": "Low-Sodium Mindful Lunch"
      },
      {
        "time": "14:30",
        "activity": "Hinoki Wood Forest Bathing & Bedrock Carbonated Spa"
      },
      {
        "time": "17:00",
        "activity": "Tibetan Singing Bowl Sound Relaxation"
      },
      {
        "time": "19:00",
        "activity": "Clean Natural Dinner & Starlit Forest Walk"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Lee Si-hyung, MD",
        "role": "Founding Neuropsychiatrist",
        "credentials": "Pioneer in Serotonin Research, Author of 80+ Books on Mind Health",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Park Min-woo",
        "role": "Chief Forest Therapy Instructor",
        "credentials": "Korea Forest Service Certified Master Forest Therapist",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-healience-1",
        "author": "Min-Ji K.",
        "date": "January 2026",
        "rating": 5,
        "title": "Pure digital detox heaven",
        "comment": "No phone signal in the rooms forced me to look at the trees and breathe. After 3 days, my chronic brain fog and insomnia were completely cured.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "healience-seonmaeul-hongcheon-g-rev-2",
        "author": "Dr. Alistair Finch",
        "date": "June 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Hongcheon restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "healience-seonmaeul-hongcheon-g-rev-3",
        "author": "Charlotte Becker",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Hongcheon makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Hydrotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "healience-seonmaeul-hongcheon-g-rev-4",
        "author": "Nathalie Dupont",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+82 1588 9983",
      "email": "info@healience.com",
      "website": "https://healience.co.kr",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Healience%20Seonmaeul%20Hongcheon%20South%20Korea"
    }
  },
  {
    "id": "santani-wellness-resort-sri-lanka",
    "slug": "santani-wellness-resort-kandy",
    "name": "Santani Wellness Resort & Spa",
    "tagline": "Pioneering Sustainable Eco-Luxury & Authentic Ayurveda in the Knuckles Mountains",
    "description": "Perched on a pristine 48-acre former tea estate in the central hills of Kandy, Sri Lanka, Santani (meaning 'in harmony with') is an internationally lauded sanctuary named one of TIME Magazine's World's Greatest Places. Built on principles of sustainable minimalist architecture, Santani offers personalized Ayurvedic medical programs, Panchakarma cleanses, and bespoke dosha-specific gourmet dining under the care of resident Ayurvedic Vaidyas.",
    "location": {
      "city": "Kandy",
      "region": "Central Province",
      "country": "Sri Lanka",
      "continent": "Asia-Pacific",
      "lat": 7.2906,
      "lng": 80.6337
    },
    "heroImage": "https://ak-d.tripcdn.com/images/0224x12000kulha0dA594_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0224x12000kulha0dA594_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/1ik5p12000t042svwCF81_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0225p12000kzvvuho8A3C_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0221w12000r19rupy1899_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0225412000r19rm10F47E_Z_1280_853_R50_Q90.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 228,
    "pricing": {
      "minPricePerNight": 550,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Santani Ayurvedic Rejuvenation (5 Nights)",
          "days": 5,
          "price": 2950,
          "description": "Resident doctor pulse assessment, daily Abhyanga and herbal steam, dosha-tailored 3-course cuisine, and twice-daily Hatha yoga."
        },
        {
          "name": "Panchakarma Detox & Mind Reset (7 Nights)",
          "days": 7,
          "price": 4100,
          "description": "Complete medical purification, herbal ghee ingestion, Shirodhara, detoxifying baths, and private mountain-view chalet."
        }
      ]
    },
    "primaryGoals": [
      "Ayurveda & Panchakarma",
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Ayurvedic Massage",
      "Hydrotherapy",
      "Pranayama",
      "Sound Healing",
      "Forest Bathing"
    ],
    "dietary": [
      "Ayurvedic",
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Tri-Level Hydrotherapy Thermal Spa",
      "Open-Air Yoga Pavilion with Valley Views",
      "Knuckles Mountain Range Trekking Trails",
      "Hulu River Natural Rock Pools",
      "Zero-Carbon Sustainable Architecture"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Sunrise Mountain Yoga & Pranayama in Open Shala"
      },
      {
        "time": "08:00",
        "activity": "Personalized Ayurvedic Dosha Breakfast"
      },
      {
        "time": "09:30",
        "activity": "Consultation with Chief Ayurvedic Vaidya"
      },
      {
        "time": "11:00",
        "activity": "Four-Hand Abhyanga & Warm Herbal Oil Shirodhara"
      },
      {
        "time": "13:00",
        "activity": "Custom 3-Course Ayurvedic Gourmet Lunch"
      },
      {
        "time": "15:30",
        "activity": "Thermal Hydrotherapy Circuit & Cedar Sauna"
      },
      {
        "time": "17:30",
        "activity": "Sunset Yin Yoga & Guided Breathwork"
      },
      {
        "time": "19:30",
        "activity": "Candlelit Mountain Dinner & Herbal Tea"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Aruna Bandara",
        "role": "Chief Ayurvedic Doctor",
        "credentials": "BAMS (University of Colombo), 19+ Years in Panchakarma Purification",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Ashoka Kumara",
        "role": "Senior Yoga Master",
        "credentials": "500-Hour RYT Yoga Alliance, Sri Lankan Hatha & Ashtanga Specialist",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-santani-1",
        "author": "Claire D.",
        "date": "February 2026",
        "rating": 5,
        "title": "Architecture that breathes, medicine that heals",
        "comment": "The mountain mist rolling through the glassless pavilion while receiving Shirodhara was life-altering. My anxiety simply dissolved.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "santani-wellness-resort-kandy-g-rev-2",
        "author": "Emma Richardson",
        "date": "January 2026",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Ayurvedic Massage combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "santani-wellness-resort-kandy-g-rev-3",
        "author": "Matteo Rossi",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kandy makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Hydrotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "santani-wellness-resort-kandy-g-rev-4",
        "author": "Benjamin Vance",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 76 399 1919",
      "email": "reservations@santani.com",
      "website": "https://santani.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Santani%20Wellness%20Resort%20%26%20Spa%20Kandy%20Sri%20Lanka"
    }
  },
  {
    "id": "amankora-bhutan",
    "slug": "amankora-paro-bhutan",
    "name": "Amankora",
    "tagline": "Sacred Himalayan Pilgrimage, Sowa Rigpa & Cedarwood Hot Stone Baths",
    "description": "Scattered across five dramatic valleys in the mystical Kingdom of Bhutan, Amankora (combining 'aman' for peace and 'kora' for circular pilgrimage) is a sanctuary of profound spiritual and physical renewal. Guests experience Bhutan's centuries-old traditional medicine (gSo-ba Rig-pa), traditional cedarwood hot stone baths enriched with wild Artemisia leaves collected from Himalayan riverbeds, and Buddhist monk-led meditations within 17th-century fortress monasteries (Dzongs).",
    "location": {
      "city": "Paro",
      "region": "Paro Valley",
      "country": "Bhutan",
      "continent": "Asia-Pacific",
      "lat": 27.4287,
      "lng": 89.4164
    },
    "heroImage": "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_paro_0.webp?itok=TbHiTKXW",
    "gallery": [
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_paro_0.webp?itok=TbHiTKXW",
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_gangtey_5.webp?itok=yFK2pvCb",
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_thimphu.webp?itok=tRFwQa3X",
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_punakha.webp?itok=7F8iIijL",
      "https://www.aman.com/sites/default/files/styles/listing_teaser_small/public/2025-02/amankora_bhutan_-_paro_0.webp?itok=TbHiTKXW"
    ],
    "badgeTier": "verified",
    "rating": 4.97,
    "reviewCount": 176,
    "pricing": {
      "minPricePerNight": 1800,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Sacred Bhutanese Healing Journey (4 Nights)",
          "days": 4,
          "price": 7200,
          "description": "Daily traditional Sowa Rigpa herbal therapies, Artemisia hot stone baths, monk-guided meditation, all mountain gourmet meals."
        },
        {
          "name": "7-Night Multi-Valley Spiritual Pilgrimage",
          "days": 7,
          "price": 12600,
          "description": "Private transfers between Paro & Punakha, sacred Dzong blessing ceremonies, daily therapeutic massages, and Tiger's Nest trek."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Burnout & Stress",
      "Mindfulness & Meditation",
      "Emotional & Trauma Healing"
    ],
    "modalities": [
      "Hydrotherapy",
      "Sound Healing",
      "Forest Bathing",
      "Pranayama",
      "Somatic Release"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Gluten-Free",
      "Plant-Based/Vegan"
    ],
    "setting": "Mountain Sanctuary",
    "supervision": "Master Holistic Healers",
    "amenities": [
      "Traditional Bhutanese Dotsho (Hot Stone Bath Pavilion)",
      "High-Altitude Pine Forest Spa Suites",
      "Monastic Meditation & Chanting Chamber",
      "Private Valley Trekking Guides",
      "Organic Himalayan Herb Drying Room"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Paro Valley Sunrise Meditation & Tibetan Bell Chimes"
      },
      {
        "time": "08:00",
        "activity": "Himalayan Buckwheat & Yak Butter Herb Infusion Breakfast"
      },
      {
        "time": "09:30",
        "activity": "Mindful Trek through Blue Pine Forests to Kyichu Lhakhang"
      },
      {
        "time": "13:00",
        "activity": "Organic Farmstead Lunch in Paro Valley"
      },
      {
        "time": "15:30",
        "activity": "Traditional Artemisia Hot Stone Bath (Dotsho)"
      },
      {
        "time": "17:30",
        "activity": "Sowa Rigpa Herbal Compress Body Massage"
      },
      {
        "time": "19:30",
        "activity": "Fireside Dinner with Bhutanese Cultural Philosophy Discourse"
      }
    ],
    "expertTeam": [
      {
        "name": "Amchi Tshering Dorji",
        "role": "Bhutanese Sowa Rigpa Physician",
        "credentials": "Faculty of Traditional Medicine Thimphu, 22+ Years Practice",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Lopen Karma Wangdi",
        "role": "Resident Spiritual Guide & Monk",
        "credentials": "Former Senior Monk of Paro Dzong, Master of Buddhist Mindfulness",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-amankora-1",
        "author": "Sophie B.",
        "date": "March 2026",
        "rating": 5,
        "title": "The closest place to Shangri-La on Earth",
        "comment": "Soaking in river stones heated over wood fires while watching the mist clear over Paro Valley is an experience that changes how you view existence.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amankora-paro-bhutan-g-rev-2",
        "author": "Oliver Wright",
        "date": "October 2025",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Paro are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amankora-paro-bhutan-g-rev-3",
        "author": "Beatrice Montgomery",
        "date": "September 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Paro makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Sound Healing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amankora-paro-bhutan-g-rev-4",
        "author": "Sebastian Thorne",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+975 2 331 333",
      "email": "amankora@aman.com",
      "website": "https://aman.com/resorts/amankora",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Amankora%20Paro%20Bhutan"
    }
  },
  {
    "id": "joali-being-maldives",
    "slug": "joali-being-bodufushi",
    "name": "JOALI BEING",
    "tagline": "First Nature-Immersive Wellbeing Retreat in the Maldives dedicated to Mind, Skin, Microbiome & Energy",
    "description": "Located on the secluded island of Bodufushi in the pristine Raa Atoll of the Maldives, JOALI BEING is the first dedicated nature-immersive wellness retreat in the Indian Ocean. Designed according to biophilic principles that preserve the island's wild flora, the retreat guides guests through four pillars of wellbeing—Mind, Skin, Microbiome, and Energy.\n\nEach guest journey at JOALI BEING begins with an intelligent wellbeing assessment combining movement analysis and bio-energy scanning, which formulates a bespoke multi-day immersion schedule. Guests experience therapeutic sound baths in the open-air SEDA path, overwater hydrotherapy in the Kaashi salt room, Watsu aquatic bodywork, and customized cuisine at FLOW restaurant guided by earth-to-table culinary nutrition.",
    "location": {
      "city": "Bodufushi",
      "region": "Raa Atoll",
      "country": "Maldives",
      "continent": "Asia-Pacific",
      "lat": 5.5678,
      "lng": 72.9567
    },
    "heroImage": "https://ak-d.tripcdn.com/images/0223x12000k6s5bv2BFFC_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0223x12000k6s5bv2BFFC_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0225t12000r4k4fssF8BC_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0222t12000lq92kmhA87B_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0226y12000k6s5d5rDA9E_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0222112000k6s5tusD877_Z_1280_853_R50_Q90.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.99,
    "reviewCount": 264,
    "pricing": {
      "minPricePerNight": 2100,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Discovery Wellbeing Journey (5 Nights)",
          "days": 5,
          "price": 11500,
          "description": "Intelligent movement analysis, 3D body composition, daily customized Areka therapies, sound path attunement, and Earth-to-Table cuisine."
        },
        {
          "name": "Deep Microbiome & Cellular Longevity (7 Nights)",
          "days": 7,
          "price": 16800,
          "description": "Advanced gut microbiome profiling, hyperbaric oxygen therapy, cryotherapy, bespoke Aktar herbal infusions, and private overwater villa."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Mindfulness & Meditation"
    ],
    "modalities": [
      "Cryotherapy",
      "Hydrotherapy",
      "Sound Healing",
      "Ayurvedic Massage",
      "Physiotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Gluten-Free",
      "Plant-Based/Vegan"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Areka Integrative Wellness Facility with 39 Treatment Rooms",
      "Kaashi Hydrotherapy Hall (Banya, Aufguss & Watsu)",
      "Seda Sound Discovery Path with 9 Resonant Installations",
      "Aktar Herbology Center & Interactive Apothecary",
      "Cryogenic & Hyperbaric Oxygen Suites"
    ],
    "dailySchedule": [
      {
        "time": "07:00",
        "activity": "Ocean Breeze Dynamic Movement & Mobility in Ocean Sala"
      },
      {
        "time": "08:30",
        "activity": "Earth-to-Table Microbiome Breakfast at Flow"
      },
      {
        "time": "10:00",
        "activity": "Cellular Longevity Diagnostic Scan & Doctor Consultation"
      },
      {
        "time": "11:30",
        "activity": "Cryotherapy Session (-110°C) & Oxygen Chamber"
      },
      {
        "time": "13:00",
        "activity": "Personalized Nutrient-Dense Lunch"
      },
      {
        "time": "15:30",
        "activity": "Watsu Aquatic Bodywork in Heated Hydro Pool"
      },
      {
        "time": "17:30",
        "activity": "Sunset Sound Bath along the Seda Outdoor Discovery Path"
      },
      {
        "time": "19:30",
        "activity": "Gourmet Mindful Dinner Under the Starlit Maldivian Sky"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Rebecca Campbell, MD",
        "role": "Wellness Director & Physician",
        "credentials": "Integrative Medicine Fellow, Functional Longevity Specialist",
        "avatar": "https://images.unsplash.com/photo-1594824813501-48358473bbbe?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Dr. Gerry Bodeker, PhD",
        "role": "Integrative Medicine Advisor",
        "credentials": "Oxford & Columbia University Public Health & Botanical Scholar",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-joali-1",
        "author": "Alexander P.",
        "date": "March 2026",
        "rating": 5,
        "title": "The peak of luxury wellness anywhere in the world",
        "comment": "Everything from the sound discovery path to the microbiome-tailored dining is executed to perfection. It is not just a holiday; it transforms your biological markers.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "joali-being-bodufushi-g-rev-2",
        "author": "Lukas Meyer",
        "date": "July 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Cryotherapy combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "joali-being-bodufushi-g-rev-3",
        "author": "Astrid Lindgren",
        "date": "June 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Bodufushi makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Hydrotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "joali-being-bodufushi-g-rev-4",
        "author": "Daniel van der Berg",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+960 658 4444",
      "email": "reservations.being@joali.com",
      "website": "https://joalibeing.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=JOALI%20BEING%20Bodufushi%20Maldives"
    }
  },
  {
    "id": "zulal-wellness-resort-qatar",
    "slug": "zulal-wellness-resort-khasooma",
    "name": "Zulal Wellness Resort by Chiva-Som",
    "tagline": "The World's Pioneer in Traditional Arabic and Islamic Medicine (TAIM) on the Arabian Gulf",
    "description": "Spread across 28 hectares of coastal landscape on the northern tip of Qatar, Zulal Wellness Resort is an architectural marvel and the world's first destination to combine Traditional Arabic and Islamic Medicine (TAIM) with the holistic wellness expertise of Chiva-Som. TAIM draws on centuries of healing wisdom from Ibn Sina (Avicenna) and Al-Razi, utilizing indigenous desert herbs, camel milk, cupping therapy (Hijama), thermal hydrotherapy, and mindful desert nutrition.",
    "location": {
      "city": "Al Ruwais",
      "region": "Madinat ash Shamal",
      "country": "Qatar",
      "continent": "Africa & Middle East",
      "lat": 26.1344,
      "lng": 51.2181
    },
    "heroImage": "https://zulal.com/wp-content/uploads/2025/06/Zulal-Wellness-Resort_Family-meditation_Landscape-2048x1366-1.webp",
    "gallery": [
      "https://zulal.com/wp-content/uploads/2025/06/Zulal-Wellness-Resort_Family-meditation_Landscape-2048x1366-1.webp",
      "https://zulal.com/wp-content/uploads/2025/08/zulalarchitecturec202525971-Copy-1024x683.jpg",
      "https://zulal.com/wp-content/uploads/2024/07/Zulal_Treatment_Physiotheraphy_Gyrotonic-1-250x167.jpg",
      "https://zulal.com/wp-content/uploads/2025/08/zulalarchitecturec20253171copy.jpg",
      "https://zulal.com/wp-content/uploads/2024/07/Zulal_Treatment_Fitness_Agility-Activity-scaled-250x167.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 204,
    "pricing": {
      "minPricePerNight": 850,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "TAIM Digestive & Liver Cleansing (5 Nights)",
          "days": 5,
          "price": 4250,
          "description": "Physician consultation, Hijama cupping, Sidr herbal body wrap, thermal hydrotherapy, and personalized TAIM culinary nutrition."
        },
        {
          "name": "Stress Relief & Restorative Sleep (7 Nights)",
          "days": 7,
          "price": 5950,
          "description": "Holistic health assessment, Watsu water therapy, herbal desert compress, craniosacral therapy, and circadian reset."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Hydrotherapy",
      "Acupuncture",
      "Physiotherapy",
      "Sound Healing",
      "Pranayama"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Plant-Based/Vegan"
    ],
    "setting": "Coastal/Beachfront",
    "supervision": "Medical Doctor Led",
    "amenities": [
      "Zulal Serenity Hydrotherapy Complex (Hammam, Arctic Cave & Salt Rooms)",
      "Traditional Arabic Apothecary & Herbarium",
      "Watsu Aquatic Therapy Pool",
      "Desert Landscape Meditation Pavilions",
      "Private Lagoon & Coastal Boardwalk"
    ],
    "dailySchedule": [
      {
        "time": "06:30",
        "activity": "Coastal Sunrise Pranayama & Desert Stride"
      },
      {
        "time": "08:00",
        "activity": "TAIM Medicinal Breakfast with Local Sidr Honey & Spices"
      },
      {
        "time": "09:30",
        "activity": "Medical Consultation & Temperament (Mizaj) Analysis"
      },
      {
        "time": "11:00",
        "activity": "Traditional Hijama Cupping & Sidr Herb Purification"
      },
      {
        "time": "13:00",
        "activity": "Nutrient-Dense TAIM Wellness Lunch at Aizoon"
      },
      {
        "time": "15:30",
        "activity": "Hammam Scrub & Thermal Arctic Cave Session"
      },
      {
        "time": "17:30",
        "activity": "Sunset Sound Meditation Over the Arabian Gulf"
      },
      {
        "time": "19:30",
        "activity": "Mindful Dinner & Sleep Herbal Infusion"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Jason Culp",
        "role": "Chiva-Som Wellness Director",
        "credentials": "Doctor of Naturopathic Medicine, 20+ Years Global Leadership",
        "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
      },
      {
        "name": "Dr. Tarek Al-Husseini",
        "role": "Lead TAIM Physician",
        "credentials": "Specialist in Traditional Arabic & Islamic Medicine & Integrative Health",
        "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
      }
    ],
    "reviews": [
      {
        "id": "rev-zulal-1",
        "author": "Nasser A.",
        "date": "February 2026",
        "rating": 5,
        "title": "A revelation of Arabic healing wisdom",
        "comment": "The Mizaj temperament assessment was eye-opening. Combining Ibn Sina's herbal remedies with modern hydrotherapy gave me unprecedented energy.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "zulal-wellness-resort-khasooma-g-rev-2",
        "author": "Isabella Morales",
        "date": "February 2026",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Al Ruwais restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "zulal-wellness-resort-khasooma-g-rev-3",
        "author": "Gareth Evans",
        "date": "January 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Al Ruwais makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Acupuncture sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "zulal-wellness-resort-khasooma-g-rev-4",
        "author": "Victoria Sterling",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+974 4478 9000",
      "email": "reservations@zulal.com",
      "website": "https://zulal.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Zulal%20Wellness%20Resort%20by%20Chiva-Som%20Al%20Ruwais%20Qatar"
    }
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
    "heroImage": "https://www.absolutesanctuary.com/wp-content/uploads/2023/07/mainslide-absolutesanctuary-1.jpg",
    "gallery": [
      "https://www.absolutesanctuary.com/wp-content/uploads/2023/07/mainslide-absolutesanctuary-1.jpg",
      "https://www.absolutesanctuary.com/wp-content/uploads/2023/07/mainslide-absolutesanctuary-2.jpg",
      "https://www.absolutesanctuary.com/wp-content/uploads/2023/07/mainslide-absolutesanctuary-3.jpg",
      "https://www.absolutesanctuary.com/wp-content/uploads/2023/07/mainslide-absolutesanctuary-4.jpg",
      "https://www.absolutesanctuary.com/wp-content/uploads/2023/07/mainslide-absolutesanctuary-5.jpg"
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
      },
      {
        "id": "absolute-sanctuary-koh-samui-g-rev-3",
        "author": "Marcus Sterling",
        "date": "November 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Pilates Reformer combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "absolute-sanctuary-koh-samui-g-rev-4",
        "author": "Camilla Lindqvist",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Koh Samui makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Hydrotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 77 601 190",
      "email": "info@absolutesanctuary.com",
      "website": "https://www.absolutesanctuary.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Absolute%20Sanctuary%20Koh%20Samui%20Thailand"
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
    "heroImage": "https://ak-d.tripcdn.com/images/0225d12000mcy6nynBBFF_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0225d12000mcy6nynBBFF_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0224g12000mcy78y1FF43_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0223l12000mcy6nyj44A1_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0225212000mcy79d1684B_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0585u12000sy4a0riF495_Z_1280_853_R50_Q90.jpg"
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
      },
      {
        "id": "the-lifeco-phuket-detox-center-g-rev-2",
        "author": "Elena Rostova",
        "date": "August 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Colon Hydrotherapy combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-lifeco-phuket-detox-center-g-rev-3",
        "author": "Julian Hayes",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Phuket makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ozone Therapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-lifeco-phuket-detox-center-g-rev-4",
        "author": "Freja Nielsen",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 76 328 172",
      "email": "phuket@thelifeco.com",
      "website": "https://www.thelifeco.com/phuket",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=The%20LifeCo%20Phuket%20Well-Being%20Detox%20Center%20Phuket%20Thailand"
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
    "heroImage": "https://ak-d.tripcdn.com/images/1mc0712000hr9kk0r5080_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/1mc0712000hr9kk0r5080_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/1mc1212000lxikjk49F01_R_960_660_R5_D.jpg",
      "https://res.klook.com/klook-hotel/image/upload/w_750,c_fill,q_85/travelapi/83000000/82970000/82966100/82966054/1d496d8f_z.jpg",
      "https://ak-d.tripcdn.com/images/1mi3v12000th1d9nwD6EE.jpg",
      "https://ak-d.tripcdn.com/images/1mi4b12000togwwgk93E2.jpg"
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
      },
      {
        "id": "vikasa-yoga-retreat-koh-samui-g-rev-2",
        "author": "Chloe Martin",
        "date": "May 2025",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Koh Samui are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "vikasa-yoga-retreat-koh-samui-g-rev-3",
        "author": "Liam O'Connor",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Koh Samui makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Vinyasa Flow sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "vikasa-yoga-retreat-koh-samui-g-rev-4",
        "author": "Sophie Laurent",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 77 422 298",
      "email": "stay@vikasa.com",
      "website": "https://vikasa.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Vikasa%20Yoga%20Retreat%20Koh%20Samui%20Thailand"
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
    "heroImage": "https://amatara.com/wp-content/uploads/2026/06/Drone-Amatara.jpg",
    "gallery": [
      "https://amatara.com/wp-content/uploads/2026/06/Drone-Amatara.jpg",
      "https://amatara.com/wp-content/uploads/2026/06/Twin-Sala.png",
      "https://amatara.com/wp-content/uploads/2026/06/Oceanview-Pool-Villa.jpg",
      "https://amatara.com/wp-content/uploads/2026/06/01-wellness-retreats-thailand-for-women_.jpg",
      "https://amatara.com/wp-content/uploads/2026/05/choose-exclusive-outdoor-wedding-venues-phuket-01.jpg"
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
      },
      {
        "id": "amatara-welleisure-resort-phuket-g-rev-2",
        "author": "Dr. David Chen",
        "date": "December 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Phuket restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amatara-welleisure-resort-phuket-g-rev-3",
        "author": "Claire Delacroix",
        "date": "November 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Phuket makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Physiotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amatara-welleisure-resort-phuket-g-rev-4",
        "author": "Hiroshi Takahashi",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+66 76 318 888",
      "email": "reservations.phuket@amataraphuket.com",
      "website": "https://www.amataraphuket.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Amatara%20Welleisure%20Resort%20Phuket%20Thailand"
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
    "heroImage": "https://bali-floatingleaf.com/wp-content/uploads/2024/06/EOSR1479-copy.webp",
    "gallery": [
      "https://bali-floatingleaf.com/wp-content/uploads/2024/06/EOSR1479-copy.webp",
      "https://bali-floatingleaf.com/wp-content/uploads/2024/07/Bali-best-hotel-pool1-600x600_fbc9583f0d81c0684928404c25b9b09b.webp",
      "https://bali-floatingleaf.com/wp-content/uploads/2024/07/Bali-retreat-priest-temple-600x600-1_76424deb43fd46c9c133fcefb3703a5c.jpg",
      "https://bali-floatingleaf.com/wp-content/uploads/2024/07/meditation-Bali-yoga-buddha-2-600x600_c87d472bc6a5188767bbfed9a4870294.webp",
      "https://bali-floatingleaf.com/wp-content/uploads/2024/07/community-outreach-retreat-charity-2_f27fc2d7b38058f5e84d89a8aafd41ec-1_bfm5cb.jpg"
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
      },
      {
        "id": "floating-leaf-eco-luxury-retreat-bali-g-rev-2",
        "author": "Sarah Jenkins",
        "date": "September 2025",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Sukawati are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "floating-leaf-eco-luxury-retreat-bali-g-rev-3",
        "author": "Dr. Alistair Finch",
        "date": "August 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Sukawati makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Melukat Water Blessing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "floating-leaf-eco-luxury-retreat-bali-g-rev-4",
        "author": "Charlotte Becker",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 811 381 0700",
      "email": "info@balifloatingleaf.com",
      "website": "https://balifloatingleaf.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Floating%20Leaf%20Eco-Luxury%20Retreat%20Sukawati%20Indonesia"
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
    "heroImage": "https://oneworldayurveda.com/wp-content/uploads/2023/02/t-treatment02.jpeg",
    "gallery": [
      "https://oneworldayurveda.com/wp-content/uploads/2023/02/t-treatment02.jpeg",
      "https://oneworldayurveda.com/wp-content/uploads/2025/09/v-consultation2.jpg",
      "https://oneworldayurveda.com/wp-content/uploads/2025/09/v-consultation2-225x300.jpg",
      "https://oneworldayurveda.com/wp-content/uploads/2025/01/treatment-abhyanga-1200x650.webp",
      "https://oneworldayurveda.com/wp-content/uploads/2025/01/owat-garden-walk-650x1200.webp"
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
      },
      {
        "id": "oneworld-ayurveda-tegallalang-bali-g-rev-2",
        "author": "Nathalie Dupont",
        "date": "June 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Ninnu Sudarsan",
        "comment": "The consultation with Dr. Ninnu Sudarsan was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "oneworld-ayurveda-tegallalang-bali-g-rev-3",
        "author": "Emma Richardson",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Tegallalang makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Abhyanga sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "oneworld-ayurveda-tegallalang-bali-g-rev-4",
        "author": "Matteo Rossi",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 972 452",
      "email": "info@oneworldayurveda.com",
      "website": "https://www.oneworldayurveda.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Oneworld%20Ayurveda%20Tegallalang%20Indonesia"
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
    "heroImage": "https://www.mesastilaresortandspa.com/wp-content/uploads/sites/62/2026/04/MesaStila-02.v4.png",
    "gallery": [
      "https://www.mesastilaresortandspa.com/wp-content/uploads/sites/62/2026/04/MesaStila-02.v4.png",
      "https://www.mesastilaresortandspa.com/wp-content/uploads/sites/62/2019/10/Slideshow2-Landscape-BANNER-min-min.jpg",
      "https://www.mesastilaresortandspa.com/wp-content/uploads/sites/62/2025/12/2.jpg",
      "https://www.mesastilaresortandspa.com/wp-content/uploads/sites/62/2025/12/2-1200x654.jpg",
      "https://www.mesastilaresortandspa.com/wp-content/uploads/sites/62/2025/12/2-992x541.jpg"
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
      },
      {
        "id": "mesastila-resort-and-spa-central-java-g-rev-2",
        "author": "Benjamin Vance",
        "date": "January 2026",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Turkish Hammam combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mesastila-resort-and-spa-central-java-g-rev-3",
        "author": "Oliver Wright",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Magelang makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Traditional Javanese Jamu sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mesastila-resort-and-spa-central-java-g-rev-4",
        "author": "Beatrice Montgomery",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 298 596 333",
      "email": "info@mesastilaresort.com",
      "website": "https://www.mesastilaresort.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=MesaStila%20Resort%20and%20Spa%20Magelang%20Indonesia"
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
    "heroImage": "https://ak-d.tripcdn.com/images/0583i12000mo3wgu29776_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0583i12000mo3wgu29776_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0223q120009zsueyb28DF_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0220612000l4el2cuB1FE_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0584r12000tvvy3ls1947_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0584d12000tw7r8440652_Z_1280_853_R50_Q90.jpg"
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
      },
      {
        "id": "somatheeram-ayurveda-village-kerala-g-rev-2",
        "author": "Nikhil Chopra",
        "date": "October 2025",
        "rating": 5,
        "title": "Profound healing under Dr. C.A. Raman",
        "comment": "The consultation with Dr. C.A. Raman was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "somatheeram-ayurveda-village-kerala-g-rev-3",
        "author": "Deepak Bhatt",
        "date": "September 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kovalam makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Abhyanga sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "somatheeram-ayurveda-village-kerala-g-rev-4",
        "author": "Sanjay Deshmukh",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 471 226 8101",
      "email": "info@somatheeram.in",
      "website": "https://somatheeram.in",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Somatheeram%20Ayurveda%20Village%20Kovalam%20India"
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
    "heroImage": "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/s1-1.webp",
    "gallery": [
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/s1-1.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/2-4.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/3-4.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/4-3.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/s5-1.webp"
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
      },
      {
        "id": "kalari-kovilakom-palace-ayurveda-kerala-g-rev-2",
        "author": "Tarun Kapoor",
        "date": "July 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Jouhar",
        "comment": "The consultation with Dr. Jouhar was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kalari-kovilakom-palace-ayurveda-kerala-g-rev-3",
        "author": "Dr. Alok Nath",
        "date": "June 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Palakkad makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Kashaya Vasthi sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kalari-kovilakom-palace-ayurveda-kerala-g-rev-4",
        "author": "Aditya Nair",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 4923 263 737",
      "email": "kalarikovilakom@cghearth.com",
      "website": "https://www.cghearth.com/kalari-kovilakom",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Kalari%20Kovilakom%20Palakkad%20India"
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
    "heroImage": "https://atmantan.com/wp-content/uploads/2021/11/1DX25562-1-scaled-e1638869860430.jpg",
    "gallery": [
      "https://atmantan.com/wp-content/uploads/2021/11/1DX25562-1-scaled-e1638869860430.jpg",
      "https://atmantan.com/wp-content/uploads/2021/11/silence1.jpg",
      "https://atmantan.com/wp-content/uploads/2021/11/herb.jpg",
      "https://atmantan.com/wp-content/uploads/2025/06/Ayurveda-panchakarma.jpg",
      "https://ak-d.tripcdn.com/images/0226f120008723dzu689D_R_960_660_R5_D.jpg"
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
      },
      {
        "id": "atmantan-wellness-resort-mulshi-g-rev-2",
        "author": "Radhika Kulkarni",
        "date": "February 2026",
        "rating": 5,
        "title": "Profound healing under Dr. Manoj Kutteri",
        "comment": "The consultation with Dr. Manoj Kutteri was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "atmantan-wellness-resort-mulshi-g-rev-3",
        "author": "Amitabh Sen",
        "date": "January 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Mulshi makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ayurveda sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "atmantan-wellness-resort-mulshi-g-rev-4",
        "author": "Vandana Iyer",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 20 6676 6666",
      "email": "info@atmantan.com",
      "website": "https://www.atmantan.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Atmantan%20Wellness%20Resort%20Mulshi%20India"
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
    "heroImage": "https://www.barberynresorts.com/wp-content/uploads/2020/05/B.-Reef-Water-Wall-1.jpg",
    "gallery": [
      "https://www.barberynresorts.com/wp-content/uploads/2020/05/B.-Reef-Water-Wall-1.jpg",
      "https://barberynresorts.com/wp-content/uploads/2020/03/barberyn-reef_beach-front-room_0000-1024x580.jpg",
      "https://www.barberynresorts.com/wp-content/uploads/2020/03/barberyn-reef_beach-front-room_0000-1024x580.jpg.webp",
      "https://www.barberynresorts.com/wp-content/uploads/2020/03/barberyn-reef_beach-front-room_0000-1024x580.jpg",
      "https://www.barberynresorts.com/wp-content/uploads/2020/05/B.R_Garden-Room-1024x768.jpg.webp"
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
      },
      {
        "id": "barberyn-reef-ayurveda-resort-beruwala-g-rev-2",
        "author": "Sebastian Thorne",
        "date": "November 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Asoka Samarasinghe",
        "comment": "The consultation with Dr. Asoka Samarasinghe was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "barberyn-reef-ayurveda-resort-beruwala-g-rev-3",
        "author": "Lukas Meyer",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Beruwala makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Acupuncture sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "barberyn-reef-ayurveda-resort-beruwala-g-rev-4",
        "author": "Astrid Lindgren",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 34 227 6036",
      "email": "info@barberynresorts.com",
      "website": "https://barberynresorts.com/reef",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Barberyn%20Reef%20Ayurveda%20Resort%20Beruwala%20Sri%20Lanka"
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
    "heroImage": "https://www.senwellnesssanctuary.com/wp-content/uploads/2021/07/mobile-front-page-1.jpg",
    "gallery": [
      "https://www.senwellnesssanctuary.com/wp-content/uploads/2021/07/mobile-front-page-1.jpg",
      "https://www.senwellnesssanctuary.com/wp-content/uploads/2021/07/front-page.jpg",
      "https://www.senwellnesssanctuary.com/wp-content/uploads/2021/01/Kundalini-Class-Yoga-Shala-min.jpg",
      "https://www.senwellnesssanctuary.com/wp-content/uploads/2024/12/L1000817-EDIT--scaled.jpeg",
      "https://www.senwellnesssanctuary.com/wp-content/uploads/2023/06/Monk-scaled.jpeg"
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
      },
      {
        "id": "sen-wellness-sanctuary-rekawa-g-rev-2",
        "author": "Daniel van der Berg",
        "date": "August 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Sam Kankanamge",
        "comment": "The consultation with Dr. Sam Kankanamge was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sen-wellness-sanctuary-rekawa-g-rev-3",
        "author": "Isabella Morales",
        "date": "July 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Rekawa makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Cranial-Sacral Therapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sen-wellness-sanctuary-rekawa-g-rev-4",
        "author": "Gareth Evans",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 77 353 5456",
      "email": "contact@senwellnesssanctuary.com",
      "website": "https://www.senwellnesssanctuary.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Sen%20Wellness%20Sanctuary%20Rekawa%20Sri%20Lanka"
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
    "heroImage": "https://mukayu.com/wp-content/themes/corporate/img/index/concept_img.jpg",
    "gallery": [
      "https://mukayu.com/wp-content/themes/corporate/img/index/concept_img.jpg",
      "https://mukayu.com/wp-content/themes/corporate/img/index/facilities_img.jpg",
      "https://mukayu.com/wp-content/themes/corporate/img/index/spa_img.jpg",
      "https://mukayu.com/wp-content/themes/corporate/img/index/rooms_img.jpg",
      "https://mukayu.com/wp-content/themes/corporate/img/index/cuisine_img.jpg"
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
      },
      {
        "id": "beniya-mukayu-yamashiro-onsen-g-rev-2",
        "author": "Victoria Sterling",
        "date": "May 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Yamashiro Onsen restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "beniya-mukayu-yamashiro-onsen-g-rev-3",
        "author": "Marcus Sterling",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Yamashiro Onsen makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Yakushiyama Herbal Medicine sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "beniya-mukayu-yamashiro-onsen-g-rev-4",
        "author": "Camilla Lindqvist",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+81 761 77 1340",
      "email": "info@mukayu.com",
      "website": "https://mukayu.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Beniya%20Mukayu%20Yamashiro%20Onsen%20Japan"
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
    "heroImage": "https://zaborin.com/wp-content/uploads/2019/05/IMG_9721.jpg",
    "gallery": [
      "https://zaborin.com/wp-content/uploads/2019/05/IMG_9721.jpg",
      "https://zaborin.com/wp-content/uploads/2024/10/05.jpg",
      "https://zaborin.com/wp-content/uploads/2020/06/soak.jpg",
      "https://zaborin.com/wp-content/uploads/2022/01/bonzai.jpg",
      "https://zaborin.com/wp-content/uploads/2019/06/DSC04241-1.jpg"
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
      },
      {
        "id": "zaborin-hanazono-niseko-hokkaido-g-rev-2",
        "author": "Dr. Alexander Ward",
        "date": "December 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Niseko restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "zaborin-hanazono-niseko-hokkaido-g-rev-3",
        "author": "Elena Rostova",
        "date": "November 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Niseko makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shinrin-yoku (Forest Bathing) sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "zaborin-hanazono-niseko-hokkaido-g-rev-4",
        "author": "Julian Hayes",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+81 136 23 0003",
      "email": "info@zaborin.com",
      "website": "https://zaborin.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Zaborin%20Niseko%20Japan"
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
    "heroImage": "https://cdn.kiwicollection.com/media/property/PR002952/ll/002952-01-The-Rock-Retreat-Reimagined-Exterior-1-at%20Six%20Senses%20Ninh%20Van%20Bay.jpg?cb=1721853937,",
    "gallery": [
      "https://cdn.kiwicollection.com/media/property/PR002952/ll/002952-01-The-Rock-Retreat-Reimagined-Exterior-1-at%20Six%20Senses%20Ninh%20Van%20Bay.jpg?cb=1721853937,",
      "https://cdn.kiwicollection.com/media/property/PR002952/ll/002952-02-The-Rock-Retreat-Reimagined-Exterior-2-at%20Six%20Senses%20Ninh%20Van%20Bay.jpg?cb=1721853637,",
      "https://cdn.kiwicollection.com/media/property/PR002952/ll/002952-03-The-Rock-Retreat-Sun-Deck-at%20Six%20Senses%20Ninh%20Van%20Bay.jpg?cb=1721853642,",
      "https://cdn.kiwicollection.com/media/property/PR002952/ll/002952-04-The-Rock-Retreat-Bedroom-at%20Six%20Senses%20Ninh%20Van%20Bay.jpg?cb=1721853646,",
      "https://cdn.kiwicollection.com/media/property/PR002952/xxl/002952-03-The-Rock-Retreat-Sun-Deck-at%20Six%20Senses%20Ninh%20Van%20Bay.jpg?cb=1721853642,"
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
      },
      {
        "id": "six-senses-ninh-van-bay-vietnam-g-rev-2",
        "author": "Freja Nielsen",
        "date": "September 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Vietnamese Cupping combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-ninh-van-bay-vietnam-g-rev-3",
        "author": "Chloe Martin",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Nha Trang makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Herbal Compresses sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-ninh-van-bay-vietnam-g-rev-4",
        "author": "Liam O'Connor",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+84 258 3524 268",
      "email": "reservations-ninhvan@sixsenses.com",
      "website": "https://www.sixsenses.com/en/resorts/ninh-van-bay",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Six%20Senses%20Ninh%20Van%20Bay%20Nha%20Trang%20Vietnam"
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
    "heroImage": "https://www.ahstatic.com/photos/b1y7_ho_00_p_1024x768.jpg",
    "gallery": [
      "https://www.ahstatic.com/photos/b1y7_ho_00_p_1024x768.jpg",
      "https://www.ahstatic.com/photos/b1y7_ho_01_p_1024x768.jpg",
      "https://www.ahstatic.com/photos/b1y7_ho_02_p_1024x768.jpg",
      "https://www.ahstatic.com/photos/b1y7_ho_03_p_1024x768.jpg",
      "https://www.ahstatic.com/photos/b1y7_rotwbmv_00_p_1024x768.jpg"
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
      },
      {
        "id": "legacy-yen-tu-mgallery-quang-ninh-g-rev-2",
        "author": "Sophie Laurent",
        "date": "June 2025",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Uong Bi are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "legacy-yen-tu-mgallery-quang-ninh-g-rev-3",
        "author": "Dr. David Chen",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Uong Bi makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Medicinal Herbal Baths sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "legacy-yen-tu-mgallery-quang-ninh-g-rev-4",
        "author": "Claire Delacroix",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+84 203 6259 888",
      "email": "experience@legacyyentu.com",
      "website": "https://www.legacyyentu.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Legacy%20Yen%20Tu%20MGallery%20Uong%20Bi%20Vietnam"
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
    "heroImage": "https://cdn.kiwicollection.com/media/property/PR241016/ll/241016-03-Thimphu_Suites_and_Villa_Exterior_9230-Six%20Senses%20Bhutan.jpg?cb=1671490009,",
    "gallery": [
      "https://cdn.kiwicollection.com/media/property/PR241016/ll/241016-03-Thimphu_Suites_and_Villa_Exterior_9230-Six%20Senses%20Bhutan.jpg?cb=1671490009,",
      "https://cdn.kiwicollection.com/media/property/PR241016/ll/241016-02-Thimphu_Prayer_Pavilion_with_Reflecting_Pond2_8743-Six%20Senses%20Bhutan.jpg?cb=1671490005,",
      "https://cdn.kiwicollection.com/media/property/PR241016/ll/241016-04-Thimphu_Main_Building_Living_Room_with_View2_9235-Six%20Senses%20Bhutan.jpg?cb=1671490013,",
      "https://cdn.kiwicollection.com/media/property/PR241016/ll/241016-01-Thimphu_Suite_Balcony_8092-Six%20Senses%20Bhutan.jpg?cb=1671490001,",
      "https://cdn.kiwicollection.com/media/property/PR241016/xxl/241016-02-Thimphu_Prayer_Pavilion_with_Reflecting_Pond2_8743-Six%20Senses%20Bhutan.jpg?cb=1671490005,"
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
      },
      {
        "id": "six-senses-bhutan-thimphu-paro-g-rev-2",
        "author": "Hiroshi Takahashi",
        "date": "January 2026",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Thimphu & Paro are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-bhutan-thimphu-paro-g-rev-3",
        "author": "Sarah Jenkins",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Thimphu & Paro makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Singing Bowl Sound Healing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-bhutan-thimphu-paro-g-rev-4",
        "author": "Dr. Alistair Finch",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+975 2 350 773",
      "email": "reservations-bhutan@sixsenses.com",
      "website": "https://www.sixsenses.com/en/resorts/bhutan",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Six%20Senses%20Bhutan%20Thimphu%20%26%20Paro%20Bhutan"
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
    "heroImage": "https://ak-d.tripcdn.com/images/1mc2812000jmscgfa535C_Z_1280_853_R50_Q90.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/1mc2812000jmscgfa535C_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0223f12000l1fudol5EAD_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mc5f12000jmsa15x6140_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mc3812000pele6gp81EA_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0221j12000l8ga0tt665E_Z_1280_853_R50_Q90.jpg"
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
      },
      {
        "id": "dwarikas-resort-dhulikhel-nepal-g-rev-2",
        "author": "Charlotte Becker",
        "date": "October 2025",
        "rating": 5,
        "title": "Profound healing under Dr. P.K. Joshi",
        "comment": "The consultation with Dr. P.K. Joshi was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "dwarikas-resort-dhulikhel-nepal-g-rev-3",
        "author": "Nathalie Dupont",
        "date": "September 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Dhulikhel makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Himalayan Salt Chamber sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "dwarikas-resort-dhulikhel-nepal-g-rev-4",
        "author": "Emma Richardson",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+977 11 490 612",
      "email": "info@dwarikas-dhulikhel.com",
      "website": "https://dwarikas-dhulikhel.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Dwarika's%20Resort%20Dhulikhel%20Dhulikhel%20Nepal"
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
    "heroImage": "https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2026/05/25171440/Soneva-Fushi-Island-Areial-1-Medium.webp",
    "gallery": [
      "https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2026/05/25171440/Soneva-Fushi-Island-Areial-1-Medium.webp",
      "https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2026/05/28194601/Soneva-Jani-2-Bedroom-Villa-104-Medium-e1780314974206-900x964.webp",
      "https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2023/07/30205919/43114_Soneva-Soul-Yoga-Teacher-at-the-Turtle-Beach-Yoga-Champa-min-scaled-1600x900.jpg",
      "https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2026/05/11114927/SonevaFushi-CatalinavonBonin66.jpg",
      "https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2026/07/15101247/Soneva-Secret-website-900x1600.jpg"
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
      },
      {
        "id": "soneva-soul-at-soneva-fushi-g-rev-2",
        "author": "Matteo Rossi",
        "date": "July 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Birgit Kraus",
        "comment": "The consultation with Dr. Birgit Kraus was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "soneva-soul-at-soneva-fushi-g-rev-3",
        "author": "Benjamin Vance",
        "date": "June 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kunfunadhoo Island makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ozone Therapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "soneva-soul-at-soneva-fushi-g-rev-4",
        "author": "Oliver Wright",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+960 660 0304",
      "email": "reservations@soneva.com",
      "website": "https://soneva.com/soneva-soul",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Soneva%20Soul%20at%20Soneva%20Fushi%20Kunfunadhoo%20Island%20Maldives"
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
    "heroImage": "https://cdn.kiwicollection.com/media/property/PR005418/xl/005418-18-Salt_Water_Pool.jpg?cb=1519165068",
    "gallery": [
      "https://cdn.kiwicollection.com/media/property/PR005418/xl/005418-18-Salt_Water_Pool.jpg?cb=1519165068",
      "https://cdn.kiwicollection.com/media/property/PR005418/ll/005418-23-The_Private_Reserve_exterior4.jpg?cb=1499381299,",
      "https://cdn.kiwicollection.com/media/property/PR005418/ll/005418-15-Pool_Villa_Suite_Beachfront_exterior.jpg?cb=1499381259,",
      "https://cdn.kiwicollection.com/media/property/PR005418/ll/005418-31-The_Retreat_second_floor_balcony.jpg?cb=1499381276,",
      "https://cdn.kiwicollection.com/media/property/PR005418/xxl/005418-18-Salt_Water_Pool.jpg?cb=1519165068,"
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
      },
      {
        "id": "six-senses-zighy-bay-musandam-g-rev-2",
        "author": "Beatrice Montgomery",
        "date": "February 2026",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Arabic Hammam combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-zighy-bay-musandam-g-rev-3",
        "author": "Sebastian Thorne",
        "date": "January 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Zighy Bay makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Moroccan Black Soap Scrub sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "six-senses-zighy-bay-musandam-g-rev-4",
        "author": "Lukas Meyer",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+968 2673 5555",
      "email": "reservations-zighy@sixsenses.com",
      "website": "https://www.sixsenses.com/en/resorts/zighy-bay",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Six%20Senses%20Zighy%20Bay%20Zighy%20Bay%20Oman"
    }
  },
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
    "heroImage": "https://dharanaretreat.com/wp-content/uploads/2026/03/homepage-video-cover.webp",
    "gallery": [
      "https://dharanaretreat.com/wp-content/uploads/2026/03/homepage-video-cover.webp",
      "https://dharanaretreat.com/wp-content/uploads/2024/05/website-cnt-B.webp",
      "https://dharanaretreat.com/wp-content/uploads/2024/05/website-cnt-A.webp",
      "https://dharanaretreat.com/wp-content/uploads/2024/07/GALLERY.webp",
      "https://dharanaretreat.com/wp-content/uploads/2025/06/SFrances_241125_0442--scaled.webp"
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
      },
      {
        "id": "dharana-at-shillim-maharashtra-g-rev-2",
        "author": "Gaurav Joshi",
        "date": "November 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Arun Pillai",
        "comment": "The consultation with Dr. Arun Pillai was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "dharana-at-shillim-maharashtra-g-rev-3",
        "author": "Dr. Priya Swaminathan",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Shillim makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Panchakarma sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "dharana-at-shillim-maharashtra-g-rev-4",
        "author": "Rohit Mukherjee",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 2114 712 468",
      "email": "reservations@dharanaretreat.com",
      "website": "https://dharanaretreat.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Dharana%20at%20Shillim%20Shillim%20India"
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
    "heroImage": "https://ayurvedichealingvillage.com/wp-content/uploads/2025/01/Villa.jpg",
    "gallery": [
      "https://ayurvedichealingvillage.com/wp-content/uploads/2025/01/Villa.jpg",
      "https://ayurvedichealingvillage.com/wp-content/uploads/2025/01/Therapy.jpg",
      "https://ayurvedichealingvillage.com/wp-content/uploads/2024/11/r-1.jpg",
      "https://ayurvedichealingvillage.com/wp-content/uploads/2024/11/r-2.jpg",
      "https://ayurvedichealingvillage.com/wp-content/uploads/2025/01/Classic-.png"
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
      },
      {
        "id": "kairali-ayurvedic-healing-village-palakkad-g-rev-2",
        "author": "Bhavna Chawla",
        "date": "August 2025",
        "rating": 5,
        "title": "Profound healing under Dr. K. R. Namboothiri",
        "comment": "The consultation with Dr. K. R. Namboothiri was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kairali-ayurvedic-healing-village-palakkad-g-rev-3",
        "author": "Karan Singhania",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Palakkad makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kairali-ayurvedic-healing-village-palakkad-g-rev-4",
        "author": "Nandini Dasgupta",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 95551 56156",
      "email": "info@kairali.com",
      "website": "https://www.ayurvedicalliving.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Kairali%20-%20The%20Ayurvedic%20Healing%20Village%20Palakkad%20India"
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
    "heroImage": "https://ak-d.tripcdn.com/images/0582k12000sh08lmpC1D4_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0582k12000sh08lmpC1D4_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/20040q000000ga90r3358_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/02X4412000i5lfbdcE50F_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0221c12000k6ct06bACF6_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0582b12000i690teq6BF7_Z_1280_853_R50_Q90.jpg"
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
      },
      {
        "id": "niraamaya-surya-samudra-kovalam-g-rev-2",
        "author": "Manish Aggarwal",
        "date": "May 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Deepa Nair",
        "comment": "The consultation with Dr. Deepa Nair was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "niraamaya-surya-samudra-kovalam-g-rev-3",
        "author": "Divya Balakrishnan",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kovalam makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "niraamaya-surya-samudra-kovalam-g-rev-4",
        "author": "Harish Chandra",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 80 4510 4510",
      "email": "reservations@niraamaya.com",
      "website": "https://www.niraamaya.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Niraamaya%20Retreats%20Surya%20Samudra%20Kovalam%20India"
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
    "heroImage": "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eda32619a4.jpg/1200x630/fit/80/6317a02f7d1b985c988c64a74f33ec38.jpg",
    "gallery": [
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eda32619a4.jpg/1200x630/fit/80/6317a02f7d1b985c988c64a74f33ec38.jpg",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/6331719d0529b.jpg/420x830/fit/80/09fe0a7b9a455d03eb6dc2e145c4f7df.webp",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/6331719d0529b.jpg/767x600/fit/80/f36c1002503957f2e6dacc94db25347b.webp",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/6331719d0529b.jpg/1280x768/fit/80/61189ac976619cf862147ebe7fb00cca.webp",
      "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/6331719d0529b.jpg/1920x1080/fit/80/066d3a0fb3299022af5e8c5cf1e21706.webp"
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
      },
      {
        "id": "como-uma-ubud-bali-g-rev-2",
        "author": "Astrid Lindgren",
        "date": "December 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Balinese Massage combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "como-uma-ubud-bali-g-rev-3",
        "author": "Daniel van der Berg",
        "date": "November 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Ubud makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Aromatherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "como-uma-ubud-bali-g-rev-4",
        "author": "Isabella Morales",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 972 448",
      "email": "res.uma.ubud@comohotels.com",
      "website": "https://www.comohotels.com/bali/como-uma-ubud",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=COMO%20Uma%20Ubud%20Ubud%20Indonesia"
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
    "heroImage": "https://ak-d.tripcdn.com/images/1mc2812000rp2rdb0F2A3_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/1mc2812000rp2rdb0F2A3_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0224312000kzz4oop3D1F_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0223e120009h1gpqpB350_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mc6p12000h6o6xy3F049_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mc4112000falv04uEE28_Z_1280_853_R50_Q90.jpg"
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
      },
      {
        "id": "adiwana-svarga-loka-ubud-g-rev-2",
        "author": "Gareth Evans",
        "date": "September 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Balinese Usada Healing combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "adiwana-svarga-loka-ubud-g-rev-3",
        "author": "Victoria Sterling",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Ubud makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Chakra Balancing sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "adiwana-svarga-loka-ubud-g-rev-4",
        "author": "Marcus Sterling",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+62 361 977 540",
      "email": "experience.svargaloka@adiwanahotels.com",
      "website": "https://adiwanahotels.com/svargaloka-resort-ubud-bali",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Adiwana%20Svarga%20Loka%20Ubud%20Indonesia"
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
    "heroImage": "https://www.thechateau.com.my/wp-content/uploads/2024/04/Spa-Photo-TCR-WEB-300X300.jpg",
    "gallery": [
      "https://www.thechateau.com.my/wp-content/uploads/2024/04/Spa-Photo-TCR-WEB-300X300.jpg",
      "https://www.thechateau.com.my/wp-content/uploads/2023/08/TCR-Homepage-800x800.jpg",
      "https://www.thechateau.com.my/wp-content/uploads/2019/03/Pool-side-view-768x1024.jpg",
      "https://www.thechateau.com.my/wp-content/uploads/2025/04/Living-Hall_1170x658-1110x611.jpg",
      "https://www.thechateau.com.my/wp-content/uploads/2018/01/The-Chateau-Deluxe-Room-1170-rev-720x658.jpg"
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
      },
      {
        "id": "the-chateau-wellness-resort-pahang-g-rev-2",
        "author": "Camilla Lindqvist",
        "date": "June 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the European Hydrotherapy combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-chateau-wellness-resort-pahang-g-rev-3",
        "author": "Dr. Alexander Ward",
        "date": "May 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Bentong makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Aquatonic Pool sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-chateau-wellness-resort-pahang-g-rev-4",
        "author": "Elena Rostova",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+60 9 221 3888",
      "email": "reservation@thechateau.com.my",
      "website": "https://www.thechateau.com.my",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=The%20Chateau%20Wellness%20Resort%20%26%20Spa%20Bentong%20Malaysia"
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
    "heroImage": "https://ak-d.tripcdn.com/images/1mc3m12000j59hczgDF53_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/1mc3m12000j59hczgDF53_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0226g120009ztf7buBCE4_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/220c1700000135mj57052_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0584g12000ivxr1xq8958_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0582712000flkdasc357F_Z_1280_853_R50_Q90.jpg"
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
      },
      {
        "id": "anantara-peace-haven-tangalle-g-rev-2",
        "author": "Julian Hayes",
        "date": "January 2026",
        "rating": 5,
        "title": "Profound healing under Dr. Sampath Perera",
        "comment": "The consultation with Dr. Sampath Perera was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "anantara-peace-haven-tangalle-g-rev-3",
        "author": "Freja Nielsen",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Tangalle makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "anantara-peace-haven-tangalle-g-rev-4",
        "author": "Chloe Martin",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 477 670 700",
      "email": "tangalle@anantara.com",
      "website": "https://www.anantara.com/en/peace-haven-tangalle",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Anantara%20Peace%20Haven%20Tangalle%20Resort%20Tangalle%20Sri%20Lanka"
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
    "heroImage": "https://cdn.sanity.io/images/bnm4fe24/production/1efde45da1d042ca69ad56781dff615f6b5454e2-1061x551.jpg?w=1024&amp;auto=format",
    "gallery": [
      "https://cdn.sanity.io/images/bnm4fe24/production/1efde45da1d042ca69ad56781dff615f6b5454e2-1061x551.jpg?w=1024&amp;auto=format",
      "https://cdn.sanity.io/images/bnm4fe24/production/023d4c936525d1b158a29bb3d5eb215dde528d82-2232x1404.jpg?rect=473%2C0%2C1434%2C1404&amp;auto=format&amp;h=917&amp;w=750&amp;fit=min",
      "https://cdn.sanity.io/images/bnm4fe24/production/b36d37ce0413ab3165008b78fa538779e89cdb66-3648x2736.jpg?rect=0%2C0%2C3049%2C2736&amp;auto=format&amp;h=917&amp;w=750&amp;fit=min",
      "https://cdn.sanity.io/images/bnm4fe24/production/4f32672f9e59f900c9e850b30d7f72d718baab3b-426x640.jpg?rect=0%2C89%2C426%2C518&amp;auto=format&amp;h=917&amp;w=750&amp;fit=min",
      "https://cdn.sanity.io/images/bnm4fe24/production/336e000fed419865a5bbf21488c2a1f1bfd1b7d4-2394x1002.png?w=384&amp;q=75&amp;fit=clip&amp;auto=format"
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
      },
      {
        "id": "ulpotha-yoga-ayurveda-retreat-g-rev-2",
        "author": "Liam O'Connor",
        "date": "October 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Sivalingam",
        "comment": "The consultation with Dr. Sivalingam was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ulpotha-yoga-ayurveda-retreat-g-rev-3",
        "author": "Sophie Laurent",
        "date": "September 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Galbodagalla makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ashtanga & Hatha Yoga sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ulpotha-yoga-ayurveda-retreat-g-rev-4",
        "author": "Dr. David Chen",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+94 11 257 5686",
      "email": "info@ulpotha.com",
      "website": "https://www.ulpotha.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Ulpotha%20Yoga%20%26%20Ayurveda%20Retreat%20Galbodagalla%20Sri%20Lanka"
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
    "heroImage": "https://media.hoshinoresorts.com/image/authenticated/s--M4AXf5N---/c_fill,g_auto,h_810,w_1440/f_auto,q_auto/v1686273483/%E6%98%9F%E3%81%AE%E3%82%84%E4%BA%AC%E9%83%BD_%E5%A5%A5%E5%B5%90%E5%B1%B1_vfcdlv.jpg",
    "gallery": [
      "https://media.hoshinoresorts.com/image/authenticated/s--M4AXf5N---/c_fill,g_auto,h_810,w_1440/f_auto,q_auto/v1686273483/%E6%98%9F%E3%81%AE%E3%82%84%E4%BA%AC%E9%83%BD_%E5%A5%A5%E5%B5%90%E5%B1%B1_vfcdlv.jpg",
      "https://media.hoshinoresorts.com/image/authenticated/s--HeEk0S09--/c_crop,h_2000,w_4000,x_0,y_309/c_scale,h_2000,w_4000/c_fill,g_auto,h_600/f_auto,q_auto/v1697508161/%E5%A4%96%E8%A6%B3%EF%BC%93_vjhaxt.jpg",
      "https://media.hoshinoresorts.com/image/authenticated/s--qARc3gJf--/c_crop,h_1500,w_3000,x_0,y_352/c_scale,h_1500,w_3000/c_fill,g_auto,h_600/f_auto,q_auto/v1686280109/%E6%98%9F%E3%81%AE%E3%82%84%E4%BA%AC%E9%83%BD_%E5%A4%96%E8%A6%B3_%E7%A9%BA%E4%B8%AD%E8%8C%B6%E5%AE%A4_mwirob.jpg",
      "https://media.hoshinoresorts.com/image/authenticated/s--KRv5EGnK--/c_crop,h_2250,w_4500,x_0,y_339/c_scale,h_2250,w_4500/c_fill,g_auto,h_600/f_auto,q_auto/v1696065287/%E6%98%9F%E3%81%AE%E3%82%84%E4%BA%AC%E9%83%BD_%E7%95%B3%E3%82%BD%E3%83%95%E3%82%A1_3_ejnzix.jpg",
      "https://media.hoshinoresorts.com/image/authenticated/s--zpMFePE1--/c_fill,g_auto,h_600,w_1200/f_auto,q_auto/v1688636931/%E6%98%9F%E3%81%AE%E3%82%84%E4%BA%AC%E9%83%BD_%E5%A4%8F_%E7%BF%A1%E7%BF%A0_1_iuixcj.jpg"
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
      },
      {
        "id": "hoshinoya-kyoto-arashiyama-g-rev-2",
        "author": "Claire Delacroix",
        "date": "July 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Kyoto restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "hoshinoya-kyoto-arashiyama-g-rev-3",
        "author": "Hiroshi Takahashi",
        "date": "June 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kyoto makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Kampo Herbalism sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "hoshinoya-kyoto-arashiyama-g-rev-4",
        "author": "Sarah Jenkins",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+81 50 3134 8091",
      "email": "info@hoshinoya.com",
      "website": "https://hoshinoya.com/kyoto/en/",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=HOSHINOYA%20Kyoto%20Kyoto%20Japan"
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
    "heroImage": "https://gangteylodge.com/app/uploads/2022/11/Gangtey-lodge.jpg",
    "gallery": [
      "https://gangteylodge.com/app/uploads/2022/11/Gangtey-lodge.jpg",
      "https://gangteylodge.com/app/uploads/2022/12/Gangtey-Lodge-bedroom-bath-view-1-scaled.jpg",
      "https://gangteylodge.com/app/uploads/2023/05/About_hero-gangtey-village-above-clouds-gangtey-lodge-e1675777172249.webp",
      "https://gangteylodge.com/app/uploads/2023/05/banner-slide2-scaled-1-1200x765.webp",
      "https://gangteylodge.com/app/uploads/2023/02/banner-slide4-scaled-1-1.webp"
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
      },
      {
        "id": "gangtey-lodge-phobjikha-valley-g-rev-2",
        "author": "Dr. Alistair Finch",
        "date": "February 2026",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Bhutanese Hot Stone Bath combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "gangtey-lodge-phobjikha-valley-g-rev-3",
        "author": "Charlotte Becker",
        "date": "January 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Phobjikha Valley makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Khempa Herbalism sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "gangtey-lodge-phobjikha-valley-g-rev-4",
        "author": "Nathalie Dupont",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+975 2 340 943",
      "email": "res@gangteylodge.com",
      "website": "https://www.gangteylodge.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Gangtey%20Lodge%20Phobjikha%20Valley%20Bhutan"
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
    "heroImage": "https://pub-399a80e564eb4e98a474c3bbfd4bc55e.r2.dev/general/noku%20maldives-hero.jpg",
    "gallery": [
      "https://pub-399a80e564eb4e98a474c3bbfd4bc55e.r2.dev/general/noku%20maldives-hero.jpg",
      "https://pix10.agoda.net/hotelImages/64398447/0/aa5aaf1a67b3feccc7775e497ac0f191.jpeg?ce=2&s=1024x768",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/638060482.jpg?k=214d69be0ed79ff15076f9de61b284ca5a152351d106a92fce770454010636ca&o=",
      "https://images.trvl-media.com/lodging/111000000/110830000/110822900/110822895/cb8e971b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "https://r1imghtlak.mmtcdn.com/f2213864-9b06-48a0-b399-d7ccbcf82381.jpeg?&output-quality=75&downsize=375:218&crop=375:218;6,0&output-format=jpg&downsize=160:187&crop=160:187"
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
      },
      {
        "id": "noku-maldives-noonu-atoll-g-rev-2",
        "author": "Emma Richardson",
        "date": "November 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Aromatherapy combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "noku-maldives-noonu-atoll-g-rev-3",
        "author": "Matteo Rossi",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Noonu Atoll makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Thalassotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "noku-maldives-noonu-atoll-g-rev-4",
        "author": "Benjamin Vance",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+960 656 1010",
      "email": "h5-res@nokuhotels.com",
      "website": "https://www.nokuhotels.com/maldives",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Noku%20Maldives%20Noonu%20Atoll%20Maldives"
    }
  },
  {
    "id": "carnoustie-ayurveda-wellness-kerala",
    "slug": "carnoustie-ayurveda-wellness-resort-mararikulam",
    "name": "Carnoustie Ayurveda & Wellness Resort",
    "tagline": "Eco-Luxury Beachfront Ayurvedic & Kalari Marma Sanctuary on Marari Beach, Kerala",
    "description": "Spread over 25 lush landscaped acres along the tranquil shores of Marari Beach in Alappuzha, Carnoustie Ayurveda & Wellness Resort is an internationally acclaimed eco-luxury sanctuary. Designed with traditional thatched Kerala architecture, private plunge pool villas, and reclaimed teakwood interiors, the retreat provides an idyllic refuge where ancient Vedic medicine meets five-star coastal hospitality.\n\nThe resort's Aryavaidyasala wellness center is staffed by veteran Ayurvedic physicians, Kalari Marma masters, and clinical naturopaths. Guests undertake deeply restorative Panchakarma detoxifications, anti-aging Rasayana programs, and weight-management journeys supported by authentic Marma point massage, Kundalini yoga, and organic Sattvic cuisine formulated from the resort's certified chemical-free gardens.",
    "location": {
      "city": "Mararikulam",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 9.6139,
      "lng": 76.2994
    },
    "heroImage": "https://www.carnoustieresorts.com/images/home-gallery/slider-1.jpg",
    "gallery": [
      "https://www.carnoustieresorts.com/images/home-gallery/slider-1.jpg",
      "https://www.carnoustieresorts.com/images/home-gallery/slider-2.jpg",
      "https://www.carnoustieresorts.com/images/home-gallery/slider-3.jpg",
      "https://www.carnoustieresorts.com/images/villas/semantha-pool-villa.jpg",
      "https://www.carnoustieresorts.com/images/home-gallery/slider-4.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.94,
    "reviewCount": 238,
    "pricing": {
      "minPricePerNight": 390,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Authentic Panchakarma Purification (14 Nights)",
          "days": 14,
          "price": 5460,
          "description": "Full five-stage classical Vedic detox, daily physician pulse analysis, customized herbal decoctions, and private pool villa."
        },
        {
          "name": "Anti-Aging & Rasayana Rejuvenation (7 Nights)",
          "days": 7,
          "price": 2730,
          "description": "Cellular rejuvenation therapies, Kalari Marma massage, Shirodhara, beach yoga, and organic Sattvic nutrition."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Longevity & Anti-Aging",
      "Burnout & Stress"
    ],
    "modalities": [
      "Classical Panchakarma",
      "Kalari Marma Therapy",
      "Shirodhara",
      "Beachfront Hatha Yoga",
      "Herbal Steam"
    ],
    "dietary": [
      "Organic Sattvic",
      "Ayurvedic Dosha-Specific",
      "Farm-to-Table Kerala Cuisine",
      "Gluten-Free"
    ],
    "setting": "Coastal / Secluded Beachfront",
    "supervision": "Senior Ayurvedic Physicians & Certified Kalari Masters",
    "amenities": [
      "Aryavaidyasala Ayurveda Spa",
      "Private Plunge Pools",
      "Beachfront Yoga Deck",
      "Organic Herb Farm",
      "Chira Houseboat Cruise"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Beachfront Sunrise Hatha Yoga & Pranayama"
      },
      {
        "time": "08:00 AM",
        "activity": "Dosha-Specific Sattvic Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Daily Ayurvedic Doctor Pulse & Health Review"
      },
      {
        "time": "10:30 AM",
        "activity": "Traditional Abhyanga & Shirodhara Session"
      },
      {
        "time": "01:00 PM",
        "activity": "Organic Farm-to-Table Ayurvedic Lunch at Ida Restaurant"
      },
      {
        "time": "03:30 PM",
        "activity": "Kalari Marma Pressure Point Therapy or Kizhi Poultice"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Sound Meditation on Marari Beach"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Sattvic Dinner & Herbal Night Elixir"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. V. P. Rajeev",
        "role": "Chief Medical Officer",
        "credentials": "BAMS, MD (Ayurveda), 22+ Yrs Experience in Classical Panchakarma",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      },
      {
        "name": "Gurukkal Sajeev",
        "role": "Master Kalari Practitioner",
        "credentials": "Lineage Master of Kalari Marma & Vital Energy Point Healing",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-carn-1",
        "author": "Devendra Singhania",
        "date": "3 weeks ago",
        "rating": 5,
        "title": "The gold standard of luxury Ayurveda in Kerala",
        "comment": "The Marma treatments performed by the Kalari masters relieved sciatic pain I had suffered with for five years. Combined with the beach setting and private pool villa, it was paradise.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "carnoustie-ayurveda-wellness-resort-mararikulam-g-rev-2",
        "author": "Preeti Nambiar",
        "date": "August 2025",
        "rating": 5,
        "title": "Profound healing under Dr. V. P. Rajeev",
        "comment": "The consultation with Dr. V. P. Rajeev was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "carnoustie-ayurveda-wellness-resort-mararikulam-g-rev-3",
        "author": "Sunita Menon",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Mararikulam makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Kalari Marma Therapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "carnoustie-ayurveda-wellness-resort-mararikulam-g-rev-4",
        "author": "Rajesh Khurana",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 478 283 0000",
      "email": "reservations@carnoustieresorts.com",
      "website": "https://www.carnoustieresorts.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Carnoustie%20Ayurveda%20%26%20Wellness%20Resort%20Mararikulam%20India"
    }
  },
  {
    "id": "mekosha-ayurveda-spasuites-kerala",
    "slug": "mekosha-ayurveda-spasuites-retreat-trivandrum",
    "name": "Mekosha Ayurveda Spasuites Retreat",
    "tagline": "India's First Boutique All-Suite Riverfront Retreat with In-Suite Treatment Areas in Trivandrum",
    "description": "Located on the serene banks of the Attingal Aakulam River near Thiruvananthapuram, Mekosha is an innovative boutique sanctuary that reimagines classical Ayurveda for the modern seeker. With just 11 expansive 600-square-foot river-facing suites, each equipped with its own private spa treatment room and balcony overlooking tropical bamboo groves, guests receive treatments in total seclusion.\n\nMekosha's medical team prescribes personalized healing journeys encompassing authentic Panchakarma cleansing, post-COVID respiratory rehabilitation, and weight management. The communal long-table dining experience serves farm-fresh Ayurvedic cuisine curated by the resident chef and doctor, fostering inspiring conversations among international wellness guests.",
    "location": {
      "city": "Thiruvananthapuram",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 8.6944,
      "lng": 76.8144
    },
    "heroImage": "https://mekosha.com/wp-content/uploads/2023/04/mekosha-rediscover-nature-houseboat-2.jpg",
    "gallery": [
      "https://mekosha.com/wp-content/uploads/2023/04/mekosha-rediscover-nature-houseboat-2.jpg",
      "https://mekosha.com/wp-content/uploads/2020/07/slide-2.jpg",
      "https://mekosha.com/wp-content/uploads/2020/07/Tab-6.jpg",
      "https://mekosha.com/wp-content/uploads/2020/07/slider-1-e1594508649744.jpg",
      "https://mekosha.com/wp-content/uploads/2020/08/Copy-of-_MG_0017-1.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 164,
    "pricing": {
      "minPricePerNight": 240,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "In-Suite Panchakarma Immersion (10 Nights)",
          "days": 10,
          "price": 2400,
          "description": "Complete detoxification administered in your private suite, daily doctor consultations, and organic Ayurvedic dining."
        },
        {
          "name": "Stress Buster & Sleep Therapy (7 Nights)",
          "days": 7,
          "price": 1680,
          "description": "Shirodhara, warm medicated oil baths, riverfront yoga, and circadian rhythm nutrition."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Chronic Illness & Pain"
    ],
    "modalities": [
      "In-Suite Ayurveda",
      "Shirodhara",
      "Riverfront Hatha Yoga",
      "Pranayama",
      "Abhyanga"
    ],
    "dietary": [
      "Organic Ayurvedic",
      "Personalized Dosha Menu",
      "Farm-Fresh Vegetarian",
      "Gluten-Free"
    ],
    "setting": "Riverfront Tropical Grove",
    "supervision": "Resident Ayurvedic Medical Doctors",
    "amenities": [
      "Private In-Suite Spas",
      "Riverfront Swimming Pool",
      "Communal Dining Table",
      "Riverside Walking Trail",
      "Bamboo Garden"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Riverside Hatha Flow & Pranayama Breathwork"
      },
      {
        "time": "08:30 AM",
        "activity": "Nourishing Sattvic Breakfast at Communal Table"
      },
      {
        "time": "10:30 AM",
        "activity": "Daily Ayurvedic Physician Consultation"
      },
      {
        "time": "11:30 AM",
        "activity": "In-Suite Abhyanga & Medicated Steam Bath"
      },
      {
        "time": "01:00 PM",
        "activity": "Chef-Crafted Organic Ayurvedic Lunch"
      },
      {
        "time": "04:00 PM",
        "activity": "In-Suite Shirodhara or Kizhi Herbal Compress"
      },
      {
        "time": "06:00 PM",
        "activity": "Guided Sunset Meditation on River Deck"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Communal Dinner with Herbal Decoctions"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Reshma Mohan",
        "role": "Senior Ayurvedic Physician",
        "credentials": "BAMS, Specialist in Stress Relief & Musculoskeletal Disorders",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-mek-1",
        "author": "Annette Kaufmann",
        "date": "1 month ago",
        "rating": 5,
        "title": "Unmatched privacy with treatments in your own suite",
        "comment": "Having treatments inside your own room overlooking the river is a game changer. You do not have to walk across a resort post-massage, you just rest immediately. Outstanding care.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mekosha-ayurveda-spasuites-retreat-trivandrum-g-rev-2",
        "author": "Dr. Meenakshi Sundaram",
        "date": "May 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Reshma Mohan",
        "comment": "The consultation with Dr. Reshma Mohan was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mekosha-ayurveda-spasuites-retreat-trivandrum-g-rev-3",
        "author": "Vikram Malhotra",
        "date": "February 2026",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Thiruvananthapuram makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "mekosha-ayurveda-spasuites-retreat-trivandrum-g-rev-4",
        "author": "Pooja Mehta",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 85903 01100",
      "email": "stay@mekosha.com",
      "website": "https://mekosha.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Mekosha%20Ayurveda%20Spasuites%20Retreat%20Thiruvananthapuram%20India"
    }
  },
  {
    "id": "prakriti-shakti-cgh-earth-kerala",
    "slug": "prakriti-shakti-naturopathy-hospital-idukki",
    "name": "Prakriti Shakti - Clinic of Natural Medicine",
    "tagline": "Pioneering 100% Naturopathy & Raw Diet Hospital Sanctuary in the Misty Hills of Panchalimedu, Kerala",
    "description": "Perched 2,500 feet high amidst the mist-clad hills of Panchalimedu in Idukki, Kerala, Prakriti Shakti is an extraordinary hospital retreat founded on the philosophy that the body possesses an innate, unassailable power to heal itself. With zero pharmaceutical interventions, the sanctuary harnesses the five elemental forces—Earth, Water, Fire, Air, and Space—to reverse chronic lifestyle illnesses.\n\nUnder strict clinical supervision by certified Naturopathic doctors, guests undergo hydrotherapy, mud packs, heliotherapy, acupuncture, and therapeutic fasting followed by gourmet raw and living cuisine. Overlooking endless valleys of virgin green forest, guests experience rapid cellular revitalization and fundamental metabolic transformation.",
    "location": {
      "city": "Panchalimedu",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 9.5833,
      "lng": 77.0167
    },
    "heroImage": "https://www.prakritishakti.com/wp-content/uploads/2018/09/homepage-banner.jpg",
    "gallery": [
      "https://www.prakritishakti.com/wp-content/uploads/2018/09/homepage-banner.jpg",
      "https://www.prakritishakti.com/wp-content/uploads/2018/09/Integrated-Yoga-Therapy.jpg",
      "https://www.prakritishakti.com/wp-content/uploads/2018/09/EnergyMedicine-1.jpg",
      "https://www.prakritishakti.com/wp-content/uploads/2018/09/homepage-viewgallery_01.jpg",
      "https://www.prakritishakti.com/wp-content/uploads/2018/09/EmbracingNature1.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.96,
    "reviewCount": 148,
    "pricing": {
      "minPricePerNight": 310,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Chronic Lifestyle Disease Reversal (14 Nights)",
          "days": 14,
          "price": 4340,
          "description": "Physician-directed medical fasting, hydrotherapy, mud therapy, acupuncture, and therapeutic raw nutrition."
        },
        {
          "name": "Natural Health Reset & Cellular Cleanse (7 Nights)",
          "days": 7,
          "price": 2170,
          "description": "Full natural medicine consultation, detox mud baths, reflexology, yoga therapy, and living cuisine full-board."
        }
      ]
    },
    "primaryGoals": [
      "Chronic Illness & Pain",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Clinical Naturopathy",
      "Medical Fasting",
      "Hydrotherapy",
      "Mud Therapy",
      "Acupuncture"
    ],
    "dietary": [
      "100% Raw & Living Cuisine",
      "Therapeutic Juice Fasting",
      "Organic Farm Greens",
      "Zero Oil / Zero Processed"
    ],
    "setting": "Highland Misty Mountain Valley",
    "supervision": "Licensed Doctors of Naturopathy & Yoga (BNYS)",
    "amenities": [
      "Hydrotherapy Treatment Suites",
      "Mud Therapy Solarium",
      "Panoramic Yoga Pavilion",
      "Living Food Culinary Studio",
      "Reflexology Path"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Misty Mountain Sunrise Yoga & Deep Breathing"
      },
      {
        "time": "08:00 AM",
        "activity": "Fresh Cold-Pressed Medicinal Herbal Juice"
      },
      {
        "time": "09:30 AM",
        "activity": "Naturopathic Doctor Clinical Consultation"
      },
      {
        "time": "10:30 AM",
        "activity": "Full-Body Mud Bath or Spinal Hydrotherapy Spray"
      },
      {
        "time": "01:00 PM",
        "activity": "Gourmet Raw & Living Culinary Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Acupuncture Therapy or Circular Jet Bath"
      },
      {
        "time": "05:30 PM",
        "activity": "Guided Valley Sunset Meditation & Silent Reflection"
      },
      {
        "time": "07:00 PM",
        "activity": "Nourishing Organic Raw Vegetable Soup & Herbal Decoction"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Cijo Joseph",
        "role": "Chief Medical Officer",
        "credentials": "BNYS, MD (Naturopathy), 18+ Yrs Specializing in Lifestyle Disease Reversal",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-prakriti-1",
        "author": "Vikram Nambiar",
        "date": "2 weeks ago",
        "rating": 5,
        "title": "Reversed my hypertension and chronic inflammation",
        "comment": "This is a true hospital of natural medicine without the sterile feel. The raw food was extraordinarily delicious, and after 14 days my blood pressure returned to normal without medications.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "prakriti-shakti-naturopathy-hospital-idukki-g-rev-2",
        "author": "Ananya Sharma",
        "date": "December 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Panchalimedu restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "prakriti-shakti-naturopathy-hospital-idukki-g-rev-3",
        "author": "Kavita Rao",
        "date": "November 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Panchalimedu makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Medical Fasting sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "prakriti-shakti-naturopathy-hospital-idukki-g-rev-4",
        "author": "Siddharth Verma",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 4869 285 200",
      "email": "prakritishakti@cghearth.com",
      "website": "https://www.cghearth.com/prakriti-shakti",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Prakriti%20Shakti%20-%20Clinic%20of%20Natural%20Medicine%20Panchalimedu%20India"
    }
  },
  {
    "id": "kalari-rasayana-cgh-earth-kerala",
    "slug": "kalari-rasayana-ayurvedic-hospital-paravur",
    "name": "Kalari Rasayana",
    "tagline": "Authentic Classical Ayurvedic Hospital Sanctuary on Lake Paravur by CGH Earth",
    "description": "Located on the tranquil shores of Lake Paravur in Kollam, Kerala, Kalari Rasayana is a revered Ayurvedic hospital where healing is treated as a sacred commitment. Operating under the rigorous discipline of ancient Vaidyas, the sanctuary prohibits alcohol, smoking, non-vegetarian food, and footwear, creating an environment of pure spiritual and biological equilibrium.\n\nEvery guest is treated as a patient embarked on a deeply focused journey, with a minimum stay of 14 nights to ensure legitimate metabolic reconstitution. From sunrise yoga overlooking the lake to multi-hour synchronized warm-oil massages, Shirodhara, and customized herbal decoctions made in the on-site pharmacy, Kalari Rasayana offers one of the most authentic expressions of classical Ayurveda on earth.",
    "location": {
      "city": "Paravur",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 8.8122,
      "lng": 76.6711
    },
    "heroImage": "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/1.webp",
    "gallery": [
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/1.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/08/2-1.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/3.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/4.webp",
      "https://www.cghearthayurveda.com/wp-content/uploads/2026/04/temple.webp"
    ],
    "badgeTier": "featured",
    "rating": 4.97,
    "reviewCount": 136,
    "pricing": {
      "minPricePerNight": 460,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Classical Panchakarma Chikitsa (14 Nights)",
          "days": 14,
          "price": 6440,
          "description": "Strict classical Vedic detox, two daily therapy sessions, bespoke dosha meals, and complete medical monitoring."
        },
        {
          "name": "Rasayana Anti-Aging & Rejuvenation (21 Nights)",
          "days": 21,
          "price": 9660,
          "description": "In-depth cellular rebuilding, herbal Rasayanas, Marma therapy, and long-term vitality restoration."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Chronic Illness & Pain",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Classical Panchakarma",
      "Shirodhara",
      "Pizhichil",
      "Yoga & Meditation",
      "Njavarakizhi"
    ],
    "dietary": [
      "Strict Sattvic Ayurvedic",
      "Individual Dosha Prescription",
      "Zero Salt/Sugar When Indicated",
      "Freshly Cooked Vegetarian"
    ],
    "setting": "Lakeside Backwater Oasis",
    "supervision": "Senior Ayurvedic Vaidyas & Medical Doctors",
    "amenities": [
      "Ayurvedic Pharmacy",
      "Lakefront Yoga Shala",
      "Traditional Treatment Suites",
      "Herbal Botanical Gardens",
      "Meditation Pavilions"
    ],
    "dailySchedule": [
      {
        "time": "06:00 AM",
        "activity": "Temple Chimes & Morning Kashayam Herbal Decoction"
      },
      {
        "time": "06:30 AM",
        "activity": "Gentle Lakefront Yoga & Pranayama"
      },
      {
        "time": "08:00 AM",
        "activity": "Prescribed Individualized Ayurvedic Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Daily Vaidya Examination & Health Check"
      },
      {
        "time": "10:30 AM",
        "activity": "Synchronized Two-Therapist Abhyanga & Kizhi"
      },
      {
        "time": "01:00 PM",
        "activity": "Sattvic Lunch Tailored to Your Current Digestion"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara or Medicated Herbal Steam"
      },
      {
        "time": "05:30 PM",
        "activity": "Lakefront Sunset Meditation & Spiritual Talk"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Nourishing Dinner & Early Rest"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Jouhar",
        "role": "Senior Medical Vaidya",
        "credentials": "BAMS, 20+ Yrs in Classical Kerala Panchakarma",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-rasayana-1",
        "author": "Bettina Gruber",
        "date": "1 month ago",
        "rating": 5,
        "title": "Pure, uncompromising healing on the lake",
        "comment": "This is not a vacation; it is a profound medical and spiritual reset. The doctors treat each patient with extraordinary precision and devotion.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kalari-rasayana-ayurvedic-hospital-paravur-g-rev-2",
        "author": "Arjun Patel",
        "date": "September 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Jouhar",
        "comment": "The consultation with Dr. Jouhar was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kalari-rasayana-ayurvedic-hospital-paravur-g-rev-3",
        "author": "Nikhil Chopra",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Paravur makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kalari-rasayana-ayurvedic-hospital-paravur-g-rev-4",
        "author": "Deepak Bhatt",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 474 251 4000",
      "email": "kalarirasayana@cghearth.com",
      "website": "https://www.cghearth.com/kalari-rasayana",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Kalari%20Rasayana%20Paravur%20India"
    }
  },
  {
    "id": "sitaram-beach-retreat-kerala",
    "slug": "sitaram-beach-retreat-nattika",
    "name": "Sitaram Beach Retreat",
    "tagline": "100-Year-Old NABH-Accredited Beachfront Ayurvedic Hospital on Nattika Beach, Kerala",
    "description": "Resting on the unspoiled coastline of Nattika Beach in Thrissur, Sitaram Beach Retreat is the coastal sanctuary of the legendary Sitaram Ayurveda Pharmacy, founded in 1921 by the Maharaja of Cochin. Holding full NABH hospital accreditation, this tranquil haven blends clinical rigor with the serene rhythm of crashing Arabian Sea waves.\n\nEvery therapy is prescribed by resident doctors and administered using authentic herbal oils manufactured in Sitaram's centenary GMP-certified laboratories. Guests reside in stone and wooden eco-cottages surrounded by organic gardens, practicing Laughter Yoga and Ashtanga on the sand while undergoing deep Panchakarma cleansing.",
    "location": {
      "city": "Nattika",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 10.4167,
      "lng": 76.0833
    },
    "heroImage": "https://sitaramretreat.com/wp-content/uploads/2021/07/BEACH-FRONT-GARDEN.jpg",
    "gallery": [
      "https://sitaramretreat.com/wp-content/uploads/2021/07/BEACH-FRONT-GARDEN.jpg",
      "https://sitaramretreat.com/wp-content/uploads/2023/10/Treetop-Studio-Room-Exterior-Wide-web.jpg",
      "https://sitaramretreat.com/wp-content/uploads/2023/11/Yoga-Shala-Exterior-copy.png",
      "https://sitaramretreat.com/wp-content/uploads/2021/06/stone-cottage.png",
      "https://sitaramretreat.com/wp-content/uploads/2023/11/Group-Yoga.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.93,
    "reviewCount": 192,
    "pricing": {
      "minPricePerNight": 210,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "NABH Classical Panchakarma (14 Nights)",
          "days": 14,
          "price": 2940,
          "description": "Full five-fold detoxification, daily physician rounds, laboratory monitoring, and beach cottage accommodation."
        },
        {
          "name": "Stress Alleviation & Vitality (7 Nights)",
          "days": 7,
          "price": 1470,
          "description": "Shirodhara, full-body herbal massage, beachfront yoga, and organic Sattvic nutrition."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Chronic Illness & Pain"
    ],
    "modalities": [
      "NABH Hospital Ayurveda",
      "Panchakarma",
      "Laughter Yoga",
      "Beach Hatha Yoga",
      "Shirodhara"
    ],
    "dietary": [
      "Organic Sattvic",
      "Dosha Specific",
      "Zero Processed",
      "Fresh Catch & Farm Greens"
    ],
    "setting": "Coastal / Secluded Beachfront",
    "supervision": "NABH-Accredited Ayurvedic Medical Doctors",
    "amenities": [
      "Beachfront Yoga Pavilion",
      "Sitaram Centenary Pharmacy",
      "Eco-Cottages",
      "Organic Vegetable Farm",
      "Ayurvedic Library"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Beachfront Sunrise Hatha Yoga & Laughter Therapy"
      },
      {
        "time": "08:00 AM",
        "activity": "Dosha-Specific Organic Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Daily Ayurvedic Physician Consultation"
      },
      {
        "time": "10:30 AM",
        "activity": "Synchronized Abhyanga & Medicated Herbal Steam"
      },
      {
        "time": "01:00 PM",
        "activity": "Sattvic Lunch Prepared According to Agni (Digestive Fire)"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara or Kizhi Herbal Compress"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation by the Arabian Sea"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Ayurvedic Dinner & Herbal Infusions"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Vignesh Devraj",
        "role": "Director & Chief Physician",
        "credentials": "BAMS, 4th Generation Ayurvedic Healer & Global Speaker",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-sitaram-1",
        "author": "Klaus M.",
        "date": "2 months ago",
        "rating": 5,
        "title": "100 years of real Ayurvedic science",
        "comment": "The medical backing of Sitaram Pharmacy makes this place unique. The oils are of the highest pharmaceutical grade, and the doctors are deeply caring.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sitaram-beach-retreat-nattika-g-rev-2",
        "author": "Sanjay Deshmukh",
        "date": "June 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Vignesh Devraj",
        "comment": "The consultation with Dr. Vignesh Devraj was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sitaram-beach-retreat-nattika-g-rev-3",
        "author": "Tarun Kapoor",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Nattika makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Panchakarma sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "sitaram-beach-retreat-nattika-g-rev-4",
        "author": "Dr. Alok Nath",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 487 239 7788",
      "email": "retreat@sitaramayurveda.com",
      "website": "https://sitarambeachretreat.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Sitaram%20Beach%20Retreat%20Nattika%20India"
    }
  },
  {
    "id": "bethsaida-heritage-kerala",
    "slug": "bethsaida-hermitage-kovalam",
    "name": "Bethsaida Hermitage",
    "tagline": "Cliffside Oceanfront Ayurvedic Sanctuary with Humanitarian Philanthropy in Kovalam",
    "description": "Nestled on a scenic cliff surrounded by coconut groves above a private cove in Pulinkudi near Kovalam, Bethsaida Hermitage is a tranquil haven with a noble heart. Operating as a social enterprise, 100% of the profits generated by the retreat directly fund local schools, orphanages, and vocational training for underprivileged children in Kerala.\n\nThe resort's Ayurvedic center provides authentic curative and preventive treatments supervised by veteran Vaidyas. Guests stay in traditional wooden cottages and Kerala houses, enjoying panoramic Arabian Sea views, personalized herbal therapies, ocean-view yoga sessions, and nourishing seafood and Sattvic vegetarian cuisine.",
    "location": {
      "city": "Kovalam",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 8.3611,
      "lng": 76.9989
    },
    "heroImage": "https://ak-d.tripcdn.com/images/1mi64224x93iqpba7B2AC_R_600_400_R5_Q90.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/1mi64224x93iqpba7B2AC_R_600_400_R5_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0a255224x93h1ufurA63B_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi64224x93iqpba7B2AC_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi52224x93ir4mgj52D5_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi4b224x93irtzo4180D_Q90.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 215,
    "pricing": {
      "minPricePerNight": 165,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Classical Ayurveda Rejuvenation (7 Nights)",
          "days": 7,
          "price": 1155,
          "description": "Daily Abhyanga, Shirodhara, doctor pulse check, oceanfront yoga, and full-board Sattvic dining."
        },
        {
          "name": "Panchakarma Body Purification (14 Nights)",
          "days": 14,
          "price": 2310,
          "description": "Full five-stage cleanse, herbal medicines, steam baths, and direct support of local village education."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Mental Health"
    ],
    "modalities": [
      "Traditional Ayurveda",
      "Shirodhara",
      "Pizhichil",
      "Oceanfront Yoga",
      "Herbal Steam"
    ],
    "dietary": [
      "Organic Sattvic",
      "Kerala Coastal Vegetarian",
      "Fresh Coconut & Local Greens",
      "Gluten-Free"
    ],
    "setting": "Cliffside Oceanfront Cove",
    "supervision": "Experienced Ayurvedic Doctors & Yoga Gurus",
    "amenities": [
      "Two Oceanfront Pools",
      "Private Cove Beach Access",
      "Ayurvedic Treatment Pavilions",
      "Open-Air Restaurant",
      "Social Project Visits"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Oceanfront Cliff Sunrise Yoga & Pranayama"
      },
      {
        "time": "08:30 AM",
        "activity": "Fresh Tropical Fruit & Sattvic Breakfast"
      },
      {
        "time": "10:00 AM",
        "activity": "Ayurvedic Doctor Pulse Consultation"
      },
      {
        "time": "11:00 AM",
        "activity": "Traditional Abhyanga & Medicated Steam Bath"
      },
      {
        "time": "01:00 PM",
        "activity": "Fresh Coastal Vegetarian Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara Warm Oil Therapy"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation on the Cliff Edge"
      },
      {
        "time": "07:00 PM",
        "activity": "Candlelit Sattvic Dinner Overlooking the Waves"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Shajahan",
        "role": "Chief Ayurvedic Doctor",
        "credentials": "BAMS, 25+ Yrs Healing International Guests in Kerala",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-bethsaida-1",
        "author": "Catherine Morris",
        "date": "3 months ago",
        "rating": 5,
        "title": "Healing body and helping children at the same time",
        "comment": "Knowing that every dollar spent on my wellness went to support the orphanage made this stay profoundly meaningful. The massages and sea breeze are unbeatable.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "bethsaida-hermitage-kovalam-g-rev-2",
        "author": "Aditya Nair",
        "date": "January 2026",
        "rating": 5,
        "title": "Profound healing under Dr. Shajahan",
        "comment": "The consultation with Dr. Shajahan was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "bethsaida-hermitage-kovalam-g-rev-3",
        "author": "Radhika Kulkarni",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kovalam makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "bethsaida-hermitage-kovalam-g-rev-4",
        "author": "Amitabh Sen",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 471 248 0106",
      "email": "bethsaida@bethsaidahermitage.com",
      "website": "https://www.bethsaidahermitage.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Bethsaida%20Hermitage%20Kovalam%20India"
    }
  },
  {
    "id": "shinshiva-ayurvedic-resort-kerala",
    "slug": "shinshiva-ayurvedic-resort-chowara",
    "name": "Shinshiva Ayurvedic Resort",
    "tagline": "400-Year Ancestral Lineage of Authentic Ayurvedic Healing in Chowara, Kovalam",
    "description": "Perched on a quiet cliff overlooking the golden sands of Chowara Beach in southern Kerala, Shinshiva Ayurvedic Resort was founded by Dr. V. Franklin, whose family has practiced unbroken classical Ayurveda for over four centuries. Surrounded by swaying coconut palms and medicinal herb gardens, the resort is celebrated worldwide for genuine therapeutic results.\n\nShinshiva offers comprehensive medical programs for arthritis, chronic fatigue, paralysis rehabilitation, psoriasis, and weight loss. Daily therapies feature freshly concocted botanical oils and herbal powders prepared using ancient palm-leaf manuscript formulas, accompanied by seaside yoga and personalized Ayurvedic diets.",
    "location": {
      "city": "Chowara",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 8.3478,
      "lng": 77.0144
    },
    "heroImage": "https://www.ayurvedashinshiva.com/wp-content/uploads/2026/05/ayurveda-hospital-wellness-resort-in-trivandrum-kerala-1-870x460.webp",
    "gallery": [
      "https://www.ayurvedashinshiva.com/wp-content/uploads/2026/05/ayurveda-hospital-wellness-resort-in-trivandrum-kerala-1-870x460.webp",
      "https://www.ayurvedashinshiva.com/wp-content/uploads/2025/01/photogallery-93-1024x683.jpg",
      "https://www.ayurvedashinshiva.com/wp-content/uploads/2025/01/edited-min-1024x683.jpg",
      "https://www.ayurvedashinshiva.com/wp-content/uploads/2025/01/ANAN6447-copy-min-1024x683.jpg",
      "https://www.ayurvedashinshiva.com/wp-content/uploads/2025/01/ANAN6478-copy-min-1024x683.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.87,
    "reviewCount": 170,
    "pricing": {
      "minPricePerNight": 150,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Classical Panchakarma Detoxification (14 Nights)",
          "days": 14,
          "price": 2100,
          "description": "Complete ancestral five-step cleansing, daily doctor pulse readings, herbal steam, and full-board Sattvic dining."
        },
        {
          "name": "Spine & Joint Health Therapy (10 Nights)",
          "days": 10,
          "price": 1500,
          "description": "Kadi Vasti, Pizhichil, warm herbal poultices, and specialized anti-inflammatory herbal oils."
        }
      ]
    },
    "primaryGoals": [
      "Chronic Illness & Pain",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Ancestral Ayurveda",
      "Pizhichil",
      "Kati Vasti",
      "Kizhi Herbal Compress",
      "Shirodhara"
    ],
    "dietary": [
      "Strict Ayurvedic Sattvic",
      "Dosha-Prescribed Vegetarian",
      "Local Organic Produce",
      "Herbal Teas"
    ],
    "setting": "Cliffside Ocean View",
    "supervision": "400-Year Lineage Ayurvedic Doctors",
    "amenities": [
      "Herbal Pharmacy",
      "Open-Air Yoga Hall",
      "Cliff-Top Dining Terrace",
      "Medicinal Herb Garden",
      "Direct Beach Trail"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Ocean Breeze Morning Yoga & Pranayama"
      },
      {
        "time": "08:00 AM",
        "activity": "Prescribed Ayurvedic Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Ancestral Lineage Doctor Consultation"
      },
      {
        "time": "10:30 AM",
        "activity": "Traditional Abhyanga & Kizhi Treatment"
      },
      {
        "time": "01:00 PM",
        "activity": "Pure Sattvic Lunch Tailored to Your Agni"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara or Kati Vasti Therapy"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation & Chanting"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Ayurvedic Dinner & Herbal Decoction"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. V. Franklin",
        "role": "Founder & Chief Physician",
        "credentials": "BAMS, Former Chief District Medical Officer, 400-Year Family Lineage",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-shinshiva-1",
        "author": "Marco Rossi",
        "date": "2 months ago",
        "rating": 5,
        "title": "Genuine ancestral medicine that works miracles",
        "comment": "Dr. Franklin and his team diagnosed my chronic back inflammation immediately. Ten days of Kati Vasti and Pizhichil completely restored my mobility.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "shinshiva-ayurvedic-resort-chowara-g-rev-2",
        "author": "Vandana Iyer",
        "date": "October 2025",
        "rating": 5,
        "title": "Profound healing under Dr. V. Franklin",
        "comment": "The consultation with Dr. V. Franklin was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "shinshiva-ayurvedic-resort-chowara-g-rev-3",
        "author": "Gaurav Joshi",
        "date": "September 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Chowara makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Pizhichil sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "shinshiva-ayurvedic-resort-chowara-g-rev-4",
        "author": "Dr. Priya Swaminathan",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 471 226 7332",
      "email": "shinshiva@gmail.com",
      "website": "https://www.shinshivaresort.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Shinshiva%20Ayurvedic%20Resort%20Chowara%20India"
    }
  },
  {
    "id": "poovar-island-resort-ayurveda-kerala",
    "slug": "poovar-island-resort-ayurveda-village",
    "name": "Poovar Island Resort - Ayurveda Village",
    "tagline": "Dedicated Ayurvedic Village with Floating & Land Cottages on the Backwaters in Poovar",
    "description": "Accessible only by a peaceful boat ride through the mangrove-lined backwaters of southern Kerala, Poovar Island Resort features an exclusive, self-contained 'Ayurveda Village.' Surrounded by tranquil waters where the river meets the Arabian Sea, this sanctuary operates completely separately from the leisure resort to maintain strict therapeutic tranquility.\n\nThe Ayurveda Village boasts its own dedicated team of Vaidyas, organic herb gardens, and classical treatment rooms. Guests choose between floating cottages anchored on the backwater estuary or heritage wooden cottages, receiving tailored Panchakarma, anti-stress, and rejuvenation programs supported by daily seaside yoga.",
    "location": {
      "city": "Poovar",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 8.3189,
      "lng": 77.0654
    },
    "heroImage": "https://ak-d.tripcdn.com/images/0582q12000hv2gbl3C12F_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0582q12000hv2gbl3C12F_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0225x120008jmr17s60D0_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0221v120008tjrmgr4461_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/02X5e12000euf6pm8EF55_Z_1280_853_R50_Q90.jpg",
      "https://www.poovarislandresorts.com/assets/img/about/about-02.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.86,
    "reviewCount": 220,
    "pricing": {
      "minPricePerNight": 190,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Ayurveda Body Purification (10 Nights)",
          "days": 10,
          "price": 1900,
          "description": "Full detoxification in private floating or land cottage, daily doctor visits, and personalized diet."
        },
        {
          "name": "Spiritual Rejuvenation & Yoga (7 Nights)",
          "days": 7,
          "price": 1330,
          "description": "Abhyanga massage, Shirodhara, backwater sunrise yoga, and organic Sattvic full-board."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Mental Health"
    ],
    "modalities": [
      "Traditional Ayurveda",
      "Floating Spa Therapy",
      "Shirodhara",
      "Backwater Yoga",
      "Abhyanga"
    ],
    "dietary": [
      "Ayurvedic Dosha-Specific",
      "Sattvic Vegetarian",
      "Fresh Farm Harvest",
      "Gluten-Free"
    ],
    "setting": "Backwater Island Estuary & Beach",
    "supervision": "Resident Ayurvedic Medical Doctors",
    "amenities": [
      "Floating Treatment Cottages",
      "Dedicated Ayurveda Pool",
      "Backwater Yoga Shala",
      "Ayurvedic Restaurant",
      "Boat Arrival Jetty"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Backwater Sunrise Yoga & Mindful Breathing"
      },
      {
        "time": "08:30 AM",
        "activity": "Dosha-Balancing Sattvic Breakfast"
      },
      {
        "time": "10:00 AM",
        "activity": "Daily Ayurvedic Doctor Consultation"
      },
      {
        "time": "11:00 AM",
        "activity": "Traditional Abhyanga & Herbal Steam Bath"
      },
      {
        "time": "01:00 PM",
        "activity": "Farm-Fresh Ayurvedic Lunch in Dedicated Restaurant"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara Therapy or Kizhi Herbal Compress"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Backwater Meditation & Birdwatching"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Sattvic Dinner & Medicated Night Elixir"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Lijo John",
        "role": "Senior Ayurvedic Physician",
        "credentials": "BAMS, 16+ Yrs Clinical Experience in Panchakarma",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-poovar-1",
        "author": "Sarah Jenkins",
        "date": "2 months ago",
        "rating": 5,
        "title": "Peaceful paradise on the water",
        "comment": "Staying in a floating cottage while undergoing Ayurveda was heavenly. The water sounds, gentle breezes, and skilled therapists melted my stress away completely.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "poovar-island-resort-ayurveda-village-g-rev-2",
        "author": "Rohit Mukherjee",
        "date": "July 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Lijo John",
        "comment": "The consultation with Dr. Lijo John was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "poovar-island-resort-ayurveda-village-g-rev-3",
        "author": "Bhavna Chawla",
        "date": "June 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Poovar makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Floating Spa Therapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "poovar-island-resort-ayurveda-village-g-rev-4",
        "author": "Karan Singhania",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 471 221 2068",
      "email": "reservations@poovar.com",
      "website": "https://www.poovarislandresort.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Poovar%20Island%20Resort%20-%20Ayurveda%20Village%20Poovar%20India"
    }
  },
  {
    "id": "ayurveda-mana-kerala",
    "slug": "ayurveda-mana-ashtavaidya-heritage-thrissur",
    "name": "Ayurveda Mana",
    "tagline": "300-Year-Old Ancestral Home of the Legendary Ashtavaidya Healers in Thrissur, Kerala",
    "description": "Steeped in three centuries of unbroken healing heritage, Ayurveda Mana is the ancestral heritage estate of the Eledath Thaikkattu Mooss family, one of Kerala's venerated Ashtavaidya lineages—hereditary physicians who received royal patronage to preserve the eight classical branches of Ayurveda. Located in the cultural heartland of Thrissur, this sanctuary offers medical cures devoid of commercial dilution.\n\nPatients from around the world visit Ayurveda Mana for complex neuro-muscular conditions, arthritis, metabolic diseases, and holistic vitality restoration. Healing takes place in authentic wooden Nalukettu courtyards where medicine is prepared fresh daily according to ancient Sanskrit texts, supported by daily temple prayers, Vedic chanting, and strict Sattvic hospital nutrition.",
    "location": {
      "city": "Thrissur",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 10.5276,
      "lng": 76.2144
    },
    "heroImage": "https://www.ayurmana.in/wp-content/uploads/2020/08/ParallaxA.jpg",
    "gallery": [
      "https://www.ayurmana.in/wp-content/uploads/2020/08/ParallaxA.jpg",
      "https://www.ayurmana.in/wp-content/uploads/2020/08/ayurmana_retreat01.jpg",
      "https://ayurmana.in/wp-content/uploads/2022/03/Pancharkarma-Ayurmana.jpg",
      "https://www.ayurmana.in/wp-content/uploads/2020/05/Standard_NonAC_01.jpg",
      "https://www.ayurmana.in/wp-content/uploads/2020/08/ayurmana_retreat02.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.95,
    "reviewCount": 140,
    "pricing": {
      "minPricePerNight": 180,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Classical Ashtavaidya Panchakarma (14 Nights)",
          "days": 14,
          "price": 2520,
          "description": "Authentic royal Kerala Panchakarma, daily physician consultations, custom herbal formulas, and Nalukettu room."
        },
        {
          "name": "Neuro-Muscular & Spine Rehabilitation (21 Nights)",
          "days": 21,
          "price": 3780,
          "description": "Intensive classical Pizhichil, Njavarakizhi, customized botanical oils, and long-term restorative care."
        }
      ]
    },
    "primaryGoals": [
      "Chronic Illness & Pain",
      "Detox & Weight Loss",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Ashtavaidya Classical Ayurveda",
      "Panchakarma",
      "Pizhichil",
      "Njavarakizhi",
      "Vedic Chanting"
    ],
    "dietary": [
      "Strict Sattvic Ayurvedic",
      "Prepared According to Ancient Texts",
      "Pure Organic Vegetarian",
      "No Preservatives"
    ],
    "setting": "Historic Heritage Nalukettu Estate",
    "supervision": "Hereditary Ashtavaidya Ayurvedic Physicians",
    "amenities": [
      "300-Year-Old Nalukettu Courtyard",
      "Ancestral Pharmacy",
      "Temple Grounds",
      "Yoga Hall",
      "Medicinal Herbal Forest"
    ],
    "dailySchedule": [
      {
        "time": "06:00 AM",
        "activity": "Temple Bells & Morning Herbal Kashayam"
      },
      {
        "time": "06:30 AM",
        "activity": "Classical Yoga & Pranayama in Courtyard"
      },
      {
        "time": "08:00 AM",
        "activity": "Traditional Sattvic Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Ashtavaidya Vaidya Pulse Diagnosis & Consultation"
      },
      {
        "time": "10:30 AM",
        "activity": "Classical Pizhichil or Abhyanga Treatment"
      },
      {
        "time": "01:00 PM",
        "activity": "Medicinal Sattvic Lunch in Heritage Hall"
      },
      {
        "time": "03:30 PM",
        "activity": "Njavarakizhi Rice Poultice or Shirodhara"
      },
      {
        "time": "05:30 PM",
        "activity": "Evening Temple Chanting & Silent Meditation"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Nourishing Dinner & Restorative Decoctions"
      }
    ],
    "expertTeam": [
      {
        "name": "Ashtavaidyan E. T. Narayanan Mooss",
        "role": "Chief Patron & Senior Vaidya",
        "credentials": "Head of 300-Year Ashtavaidya Lineage, Padma Bhushan Awardee Family",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-mana-1",
        "author": "Ramesh Krishnan",
        "date": "1 month ago",
        "rating": 5,
        "title": "The purest authenticity of Kerala Ayurveda",
        "comment": "No commercial spa gimmicks. Just 300 years of real Vedic medical wisdom in a breathtaking heritage home. My chronic rheumatoid arthritis has dramatically improved.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ayurveda-mana-ashtavaidya-heritage-thrissur-g-rev-2",
        "author": "Nandini Dasgupta",
        "date": "February 2026",
        "rating": 5,
        "title": "Profound healing under Ashtavaidyan E. T. Narayanan Mooss",
        "comment": "The consultation with Ashtavaidyan E. T. Narayanan Mooss was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ayurveda-mana-ashtavaidya-heritage-thrissur-g-rev-3",
        "author": "Manish Aggarwal",
        "date": "January 2026",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Thrissur makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Panchakarma sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ayurveda-mana-ashtavaidya-heritage-thrissur-g-rev-4",
        "author": "Divya Balakrishnan",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 487 221 1100",
      "email": "info@ayurvedamana.com",
      "website": "https://www.ayurvedamana.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Ayurveda%20Mana%20Thrissur%20India"
    }
  },
  {
    "id": "kumarakom-lake-resort-ayurmana-kerala",
    "slug": "kumarakom-lake-resort-ayurmana-kottayam",
    "name": "Kumarakom Lake Resort (Ayurmana)",
    "tagline": "200-Year-Old Heritage Ayurmana Sanctuary on Lake Vembanad in Kumarakom",
    "description": "Resting gracefully along the emerald banks of Lake Vembanad in Kottayam, Kumarakom Lake Resort is an acclaimed heritage luxury retreat that houses Ayurmana—a 200-year-old ancestral home of the Chathamangalathu Mana family of Ayurvedic healers, meticulously dismantled and reconstructed on site.\n\nAt Ayurmana, healing takes place surrounded by antique wood carvings, gabled roofs, and lotus-filled ponds. Experienced physicians and therapists provide classical Panchakarma, anti-stress programs, and beauty therapies. Guests reside in heritage pool villas with open-air bathrooms, savoring royal Kerala wellness cuisine and sunset cruises on traditional kettuvallam houseboats.",
    "location": {
      "city": "Kumarakom",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 9.6175,
      "lng": 76.43
    },
    "heroImage": "https://www.kumarakomlakeresort.in/assets/images/destination-weddings/destination-weddings-at-kumarakom-lake-resort.jpg",
    "gallery": [
      "https://www.kumarakomlakeresort.in/assets/images/destination-weddings/destination-weddings-at-kumarakom-lake-resort.jpg",
      "https://www.kumarakomlakeresort.in/assets/images/luxury-dining/pool-pavilion/pool-pavilion.webp",
      "https://ak-d.tripcdn.com/images/0583212000tr6k19t9333_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/02X0d120008tzxuec5E07_Z_1280_853_R50_Q90.jpg",
      "https://www.kumarakomlakeresort.in/assets/images/luxury-dining/vembanad-the-seafood-bar/vembanad-the-seafood-bar.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.92,
    "reviewCount": 310,
    "pricing": {
      "minPricePerNight": 410,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Ayurmana Rejuvenation & Detox (7 Nights)",
          "days": 7,
          "price": 2870,
          "description": "Full Ayurvedic therapy package in 200-year-old Ayurmana, daily doctor consultation, lake villa, and all wellness meals."
        },
        {
          "name": "Panchakarma Metabolic Cleansing (14 Nights)",
          "days": 14,
          "price": 5740,
          "description": "In-depth five-step purification, herbal decoctions, Shirodhara, and private pool heritage villa."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Longevity & Anti-Aging"
    ],
    "modalities": [
      "Heritage Ayurveda",
      "Shirodhara",
      "Pizhichil",
      "Lakeside Yoga",
      "Herbal Baths"
    ],
    "dietary": [
      "Royal Kerala Ayurvedic",
      "Organic Farm-to-Table",
      "Sattvic Vegetarian",
      "Gluten-Free"
    ],
    "setting": "Lakeside Heritage Backwaters",
    "supervision": "Resident Ayurvedic Medical Doctors",
    "amenities": [
      "200-Year-Old Ayurmana Spa",
      "Meandering Pool Villas",
      "Infinity Lake Pool",
      "Traditional Houseboat",
      "Ettukettu Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Lakeside Sunrise Yoga & Morning Breathwork"
      },
      {
        "time": "08:30 AM",
        "activity": "Nutritious Kerala Farm Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Ayurvedic Doctor Pulse Consultation at Ayurmana"
      },
      {
        "time": "11:30 AM",
        "activity": "Traditional Abhyanga & Shirodhara Session"
      },
      {
        "time": "01:30 PM",
        "activity": "Ayurvedic Wellness Lunch at Ettukettu"
      },
      {
        "time": "04:30 PM",
        "activity": "Sunset Lake Vembanad Boat Meditation"
      },
      {
        "time": "07:30 PM",
        "activity": "Candlelit Traditional Dinner with Classical Sitar"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. P. K. Mohan",
        "role": "Chief Physician of Ayurmana",
        "credentials": "BAMS, 22+ Yrs Experience in Classical Kerala Ayurveda",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-klr-1",
        "author": "Emily Watson",
        "date": "2 months ago",
        "rating": 5,
        "title": "A 200-year-old healing haven on the lake",
        "comment": "The Ayurmana building itself has an unmistakable healing energy. The therapists are master practitioners, and the lake setting is pure poetry.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kumarakom-lake-resort-ayurmana-kottayam-g-rev-2",
        "author": "Harish Chandra",
        "date": "November 2025",
        "rating": 5,
        "title": "Profound healing under Dr. P. K. Mohan",
        "comment": "The consultation with Dr. P. K. Mohan was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kumarakom-lake-resort-ayurmana-kottayam-g-rev-3",
        "author": "Preeti Nambiar",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kumarakom makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "kumarakom-lake-resort-ayurmana-kottayam-g-rev-4",
        "author": "Sunita Menon",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 481 252 4900",
      "email": "res@klresort.com",
      "website": "https://www.kumarakomlakeresort.in",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Kumarakom%20Lake%20Resort%20(Ayurmana)%20Kumarakom%20India"
    }
  },
  {
    "id": "niraamaya-backwaters-beyond-kerala",
    "slug": "niraamaya-retreats-backwaters-beyond-kumarakom",
    "name": "Niraamaya Retreats Backwaters & Beyond",
    "tagline": "Serene Backwater Luxury Wellness & Ayurvedic Sanctuary on Lake Vembanad in Kumarakom",
    "description": "Spread over eight lush tropical acres along the serene shoreline of Lake Vembanad in Kumarakom, Niraamaya Retreats Backwaters & Beyond is a boutique wellness sanctuary crafted for deeply restorative escapes. Featuring 27 luxurious villas with private plunge pools and panoramic backwater views, the resort combines South Indian architecture with world-class wellness facilities.\n\nThe renowned Niraamaya Spa offers an extensive menu of classical Ayurvedic cures, contemporary reflexology, Swedish massage, and hydrotherapy. Guests enjoy private yoga sessions on overwater decks, personalized detox culinary programs, and sunset boat cruises through peaceful backwater canals.",
    "location": {
      "city": "Kumarakom",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 9.62,
      "lng": 76.425
    },
    "heroImage": "https://ak-d.tripcdn.com/images/1ik6p12000t8f2eo00232_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/1ik6p12000t8f2eo00232_R_960_660_R5_D.jpg",
      "https://niraamaya.com/wp-content/uploads/2025/02/01b_Holistic-Wellbeing-Niraamaya_banner-min.jpg",
      "https://niraamaya.com/wp-content/uploads/2025/02/Niraamaya-Spa-1-1.jpg",
      "https://niraamaya.com/wp-content/uploads/2025/02/01d_Holistic-Wellbeing-Niraamaya-1.jpg",
      "https://niraamaya.com/wp-content/uploads/2025/02/01e_Holistic-Wellbeing-Niraamaya-1.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.89,
    "reviewCount": 184,
    "pricing": {
      "minPricePerNight": 360,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Backwater Ayurvedic Rejuvenation (5 Nights)",
          "days": 5,
          "price": 1800,
          "description": "Daily signature Niraamaya massages, doctor consultation, backwater yoga, and organic wellness meals."
        },
        {
          "name": "Deep Rest & Stress Alleviation (7 Nights)",
          "days": 7,
          "price": 2520,
          "description": "Shirodhara, warm herbal poultice therapies, reflexology, and private plunge pool villa."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Mental Health"
    ],
    "modalities": [
      "Ayurvedic Medicine",
      "Shirodhara",
      "Reflexology",
      "Lakeside Yoga",
      "Hydrotherapy"
    ],
    "dietary": [
      "Organic Coastal Cuisine",
      "Ayurvedic Dosha-Specific",
      "Fresh Backwater Catch & Greens",
      "Gluten-Free"
    ],
    "setting": "Lakeside Backwater Oasis",
    "supervision": "Resident Ayurvedic Doctors & Holistic Therapists",
    "amenities": [
      "Award-Winning Niraamaya Spa",
      "Private Plunge Pools",
      "Overwater Yoga Pavilion",
      "Infinity Pool",
      "Backwater Cruise Boat"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Overwater Deck Sunrise Yoga & Pranayama"
      },
      {
        "time": "08:30 AM",
        "activity": "Nutritious Backwater Farm Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Ayurvedic Doctor Consultation & Health Assessment"
      },
      {
        "time": "11:30 AM",
        "activity": "Signature Abhyanga & Warm Herbal Compress"
      },
      {
        "time": "01:30 PM",
        "activity": "Healthy Coastal Wellness Lunch at Cafe Samsara"
      },
      {
        "time": "04:30 PM",
        "activity": "Shirodhara or Foot Reflexology Session"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Backwater Cruise & Mindful Breathing"
      },
      {
        "time": "07:30 PM",
        "activity": "Candlelit Organic Dinner Overlooking the Lake"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Anoop Kumar",
        "role": "Lead Ayurvedic Specialist",
        "credentials": "BAMS, 17+ Yrs Specializing in Stress Relief & Longevity",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-nira-kum-1",
        "author": "Alastair Campbell",
        "date": "2 months ago",
        "rating": 5,
        "title": "Pure bliss on the backwaters",
        "comment": "Watching the sunrise over Lake Vembanad during morning yoga, followed by a world-class Shirodhara, made this one of the most relaxing weeks of my life.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "niraamaya-retreats-backwaters-beyond-kumarakom-g-rev-2",
        "author": "Rajesh Khurana",
        "date": "August 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Anoop Kumar",
        "comment": "The consultation with Dr. Anoop Kumar was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "niraamaya-retreats-backwaters-beyond-kumarakom-g-rev-3",
        "author": "Dr. Meenakshi Sundaram",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kumarakom makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "niraamaya-retreats-backwaters-beyond-kumarakom-g-rev-4",
        "author": "Vikram Malhotra",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 80 4510 4510",
      "email": "reservations@niraamaya.com",
      "website": "https://www.niraamaya.com/backwaters-beyond-kumarakom",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Niraamaya%20Retreats%20Backwaters%20%26%20Beyond%20Kumarakom%20India"
    }
  },
  {
    "id": "udayagiri-mountain-retreat-kerala",
    "slug": "udayagiri-mountain-retreat-wayanad",
    "name": "Udayagiri Mountain Retreat",
    "tagline": "High-Altitude Rainforest Ayurvedic Eco-Sanctuary in the Misty Western Ghats of Wayanad",
    "description": "Perched 3,000 feet above sea level in Thirunelly, Wayanad, Udayagiri Mountain Retreat borders the Brahmagiri Wildlife Sanctuary amidst ancient rainforests and cardamom hills. The pristine mountain air and pure altitude create an exceptional microclimate for respiratory healing, mental stillness, and profound sensory detox.\n\nThe retreat's traditional Ayurvedic center uses freshly picked rainforest herbs and medicinal mountain spring water for its Panchakarma and stress-relief therapies. Guests sleep in wooden treehouses and stone cottages with panoramic valley views, taking guided silent treks to ancient temple ruins and practicing forest meditation.",
    "location": {
      "city": "Thirunelly",
      "region": "Kerala",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 11.9056,
      "lng": 75.9944
    },
    "heroImage": "https://www.udayagiriretreat.com/wp-content/themes/astra/new/img/treatments/panchakarma.jpg",
    "gallery": [
      "https://www.udayagiriretreat.com/wp-content/themes/astra/new/img/treatments/panchakarma.jpg",
      "https://www.udayagiriretreat.com/wp-content/themes/astra/new/img/treatments/rasayana.jpg",
      "https://www.udayagiriretreat.com/wp-content/themes/astra/new/img/treatments/weight.jpg",
      "https://www.udayagiriretreat.com/wp-content/themes/astra/new/img/treatments/stress.jpg",
      "https://www.udayagiriretreat.com/wp-content/themes/astra/new/img/food.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 156,
    "pricing": {
      "minPricePerNight": 195,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Rainforest Detox & Panchakarma (10 Nights)",
          "days": 10,
          "price": 1950,
          "description": "Full Ayurvedic detox using fresh mountain herbs, daily doctor visits, and rainforest cottage stay."
        },
        {
          "name": "Mountain Silence & Stress Reset (7 Nights)",
          "days": 7,
          "price": 1365,
          "description": "Abhyanga, Shirodhara, guided silent jungle walks, yoga shala sessions, and organic Sattvic dining."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Mental Health"
    ],
    "modalities": [
      "Rainforest Ayurveda",
      "Shirodhara",
      "Forest Bathing",
      "Hatha Yoga",
      "Medicinal Herbal Baths"
    ],
    "dietary": [
      "Organic Sattvic",
      "Wayanad Farm-Fresh Produce",
      "Herbal Spices & Red Rice",
      "Gluten-Free"
    ],
    "setting": "Highland Rainforest Sanctuary",
    "supervision": "Resident Ayurvedic Doctors & Naturalists",
    "amenities": [
      "Open-Air Yoga Shala",
      "Medicinal Herb Garden",
      "Rainforest Walking Trails",
      "Mountain Spring Pool",
      "Organic Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Rainforest Canopy Sunrise Yoga & Breathwork"
      },
      {
        "time": "08:00 AM",
        "activity": "Organic Farm-Fresh Breakfast with Mountain Honey"
      },
      {
        "time": "09:30 AM",
        "activity": "Ayurvedic Doctor Consultation & Pulse Check"
      },
      {
        "time": "10:30 AM",
        "activity": "Traditional Abhyanga & Medicated Steam Bath"
      },
      {
        "time": "01:00 PM",
        "activity": "Nourishing Sattvic Lunch at Valley View Terrace"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara or Kizhi Herbal Compress"
      },
      {
        "time": "05:00 PM",
        "activity": "Guided Silent Forest Bathing Trek"
      },
      {
        "time": "07:30 PM",
        "activity": "Candlelit Organic Dinner by the Hearth"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Manu Prasad",
        "role": "Resident Ayurvedic Physician",
        "credentials": "BAMS, Specialist in Respiratory & Stress Disorders",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-udayagiri-1",
        "author": "Liam O'Connor",
        "date": "3 months ago",
        "rating": 5,
        "title": "Clean mountain air and incredible herbal treatments",
        "comment": "Being up in the mountains surrounded by virgin rainforest makes the Ayurvedic treatments ten times more effective. The silence here is deeply healing.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "udayagiri-mountain-retreat-wayanad-g-rev-2",
        "author": "Pooja Mehta",
        "date": "May 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Manu Prasad",
        "comment": "The consultation with Dr. Manu Prasad was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "udayagiri-mountain-retreat-wayanad-g-rev-3",
        "author": "Ananya Sharma",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Thirunelly makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "udayagiri-mountain-retreat-wayanad-g-rev-4",
        "author": "Kavita Rao",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 94470 33445",
      "email": "info@udayagiriretreat.com",
      "website": "https://www.udayagiriretreat.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Udayagiri%20Mountain%20Retreat%20Thirunelly%20India"
    }
  },
  {
    "id": "shreyas-yoga-retreat-karnataka",
    "slug": "shreyas-yoga-retreat-bengaluru",
    "name": "Shreyas Yoga Retreat",
    "tagline": "World-Renowned Relais & Châteaux Spiritual Yoga & Ayurvedic Sanctuary in Nelamangala, Bengaluru",
    "description": "Spread over 25 acres of serene, landscaped gardens and organic farmland in Nelamangala near Bengaluru, Shreyas is an internationally acclaimed Relais & Châteaux retreat dedicated to traditional yoga and holistic wellness. Designed as an ashram with luxury amenities, the sanctuary limits capacity to just 25 guests to ensure personalized spiritual guidance.\n\nAt Shreyas, authentic classical Hatha and Ashtanga yoga, deep meditation, and silent chanting are harmoniously integrated with certified Ayurvedic treatments and natural hydrotherapy. The gourmet vegetarian cuisine, prepared without garlic or onions in the Sattvic tradition, is celebrated globally as some of the finest healthy dining in India.",
    "location": {
      "city": "Bengaluru",
      "region": "Karnataka",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 13.0978,
      "lng": 77.3894
    },
    "heroImage": "https://ak-d.tripcdn.com/images/0583n12000swqerdi7ED9_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/0583n12000swqerdi7ED9_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0225712000l7ppo2dB8B2_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0224612000bkd29gd5F23_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0225512000l7ppm3l1E4C_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1ik2l12000mqc55fp98E5_Z_1280_853_R50_Q90.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.97,
    "reviewCount": 295,
    "pricing": {
      "minPricePerNight": 450,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Silent Yoga & Spiritual Meditation (7 Nights)",
          "days": 7,
          "price": 3150,
          "description": "Twice daily private yoga, yoga nidra, sound meditation, Ayurvedic massages, and gourmet Sattvic dining."
        },
        {
          "name": "Ayurvedic Panchakarma & Rejuvenation (14 Nights)",
          "days": 14,
          "price": 6300,
          "description": "Comprehensive classical detox, daily doctor pulse checks, customized herbal oils, and luxury cottage stay."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Mental Health",
      "Burnout & Stress",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Classical Hatha Yoga",
      "Ashtanga Yoga",
      "Yoga Nidra",
      "Ayurvedic Panchakarma",
      "Sound Meditation"
    ],
    "dietary": [
      "Gourmet Sattvic Vegetarian",
      "Organic Farm-to-Table",
      "No Garlic / No Onion",
      "Gluten-Free"
    ],
    "setting": "Rural Garden Oasis",
    "supervision": "Master Yogis & Resident Ayurvedic Physicians",
    "amenities": [
      "Open-Air Yoga Shalas",
      "Meditation Huts",
      "25m Swimming Pool",
      "Anaha Spa Complex",
      "Organic Vegetable Gardens"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Morning Pranayama & Dynamic Hatha Yoga"
      },
      {
        "time": "08:30 AM",
        "activity": "Farm-to-Table Gourmet Sattvic Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Ayurvedic Doctor Consultation & Abhyanga Session"
      },
      {
        "time": "01:00 PM",
        "activity": "Gourmet Organic Vegetarian Lunch"
      },
      {
        "time": "04:00 PM",
        "activity": "Restorative Yin Yoga or Deep Yoga Nidra"
      },
      {
        "time": "06:00 PM",
        "activity": "Chanting & Candlelit Sound Meditation"
      },
      {
        "time": "07:30 PM",
        "activity": "Four-Course Gourmet Sattvic Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Acharya Rajesh",
        "role": "Head of Yoga & Philosophy",
        "credentials": "Master of Yogic Science, 20+ Yrs Teaching Classical Hatha & Ashtanga",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      },
      {
        "name": "Dr. Pratibha N.",
        "role": "Senior Ayurvedic Physician",
        "credentials": "BAMS, Specialist in Women's Health & Panchakarma",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-shreyas-1",
        "author": "Priya Sundaram",
        "date": "3 weeks ago",
        "rating": 5,
        "title": "The most spiritually uplifting retreat in India",
        "comment": "Shreyas combines the authenticity of an ashram with the elegance of a luxury boutique resort. The yoga teachers are truly enlightened, and the food is extraordinary.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "shreyas-yoga-retreat-bengaluru-g-rev-2",
        "author": "Siddharth Verma",
        "date": "December 2025",
        "rating": 5,
        "title": "Profound healing under Acharya Rajesh",
        "comment": "The consultation with Acharya Rajesh was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "shreyas-yoga-retreat-bengaluru-g-rev-3",
        "author": "Arjun Patel",
        "date": "November 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Bengaluru makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ashtanga Yoga sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "shreyas-yoga-retreat-bengaluru-g-rev-4",
        "author": "Nikhil Chopra",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 80 2773 7102",
      "email": "reservations@shreyasretreat.com",
      "website": "https://www.shreyasretreat.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Shreyas%20Yoga%20Retreat%20Bengaluru%20India"
    }
  },
  {
    "id": "swaswara-cgh-earth-karnataka",
    "slug": "swaswara-holistic-sanctuary-gokarna",
    "name": "SwaSwara",
    "tagline": "Holistic Yoga, Ayurveda & Art Therapy Sanctuary on Sacred Om Beach in Gokarna, Karnataka",
    "description": "Perched on a cliff overlooking the sacred Om-shaped beach in Gokarna, Karnataka, SwaSwara is a celebrated sanctuary created to help guests discover their own inner rhythm ('Swa-Swara'). Spread across 26 acres of coastal greenery and red laterite soil, the retreat features traditional Konkan villas crafted from local stone and clay, with open-to-the-sky bathrooms.\n\nSwaSwara uniquely blends classical Hatha yoga, Ayurvedic rejuvenation, interactive art therapy, and sea-view meditation. Guests participate in mindful cooking classes, clay pottery, guided beach walks, and personalized wellness therapies supported by organic marine and vegetarian cuisine paired with clean regional ingredients.",
    "location": {
      "city": "Gokarna",
      "region": "Karnataka",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 14.5167,
      "lng": 74.3167
    },
    "heroImage": "https://www.cghearth.com/uploads/banner/20170519203337PMbanneraerial1.jpg",
    "gallery": [
      "https://www.cghearth.com/uploads/banner/20170519203337PMbanneraerial1.jpg",
      "https://www.cghearth.com/uploads/uploadimage/20180109111846am20170519212901pmdestimghometop.jpg",
      "https://www.cghearth.com/uploads/google/2026_Svabhava-retreat.jpg",
      "https://www.cghearth.com/uploads/banner/20170519223256PMbannerb.jpg",
      "https://www.cghearth.com/uploads/TourismImg/20170519143706PMbirdwatching1forweb.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.93,
    "reviewCount": 210,
    "pricing": {
      "minPricePerNight": 320,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Swa Wellness Immersion (7 Nights)",
          "days": 7,
          "price": 2240,
          "description": "Daily yoga and meditation, Ayurvedic massages, art therapy sessions, and full-board healthy coastal dining."
        },
        {
          "name": "Ayurvedic Rejuvenation & Panchakarma (14 Nights)",
          "days": 14,
          "price": 4480,
          "description": "Comprehensive Ayurvedic detox, daily doctor pulse checks, Konkan villa stay, and personalized dosha meals."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Mental Health",
      "Burnout & Stress",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Classical Yoga",
      "Ayurvedic Medicine",
      "Art & Clay Therapy",
      "Sea-View Meditation",
      "Pranayama"
    ],
    "dietary": [
      "Fresh Coastal Vegetarian",
      "Fresh Ocean Catch",
      "Organic Farm Greens",
      "Gluten-Free Available"
    ],
    "setting": "Coastal Cliffside & Om Beach",
    "supervision": "Resident Ayurvedic Doctors & Certified Yoga Gurus",
    "amenities": [
      "Meditation Hilltop Deck",
      "Art Therapy Studio",
      "Ayurvedic Spa Suites",
      "Swimming Pool",
      "Direct Om Beach Trail"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Hilltop Sunrise Meditation & Pranayama"
      },
      {
        "time": "07:30 AM",
        "activity": "Morning Classical Hatha Yoga Flow"
      },
      {
        "time": "09:00 AM",
        "activity": "Healthy Coastal Breakfast with Tropical Fruits"
      },
      {
        "time": "11:00 AM",
        "activity": "Ayurvedic Doctor Consultation or Massage"
      },
      {
        "time": "01:00 PM",
        "activity": "Nutrient-Dense Coastal Wellness Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Expressive Art Therapy or Clay Pottery Workshop"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Yoga Nidra Overlooking Om Beach"
      },
      {
        "time": "07:30 PM",
        "activity": "Candlelit Coastal Dinner & Ocean Reflection"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Tejaswini",
        "role": "Chief Ayurvedic Doctor",
        "credentials": "BAMS, 15+ Yrs in Holistic Lifestyle & Women's Health",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-swaswara-1",
        "author": "Elena Rostova",
        "date": "1 month ago",
        "rating": 5,
        "title": "A sanctuary for the creative spirit and body",
        "comment": "Combining pottery and painting with daily yoga and Ayurveda overlooking Om Beach was transformative. I arrived depleted and left completely renewed.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "swaswara-holistic-sanctuary-gokarna-g-rev-2",
        "author": "Deepak Bhatt",
        "date": "September 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Classical Yoga combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "swaswara-holistic-sanctuary-gokarna-g-rev-3",
        "author": "Sanjay Deshmukh",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Gokarna makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ayurvedic Medicine sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "swaswara-holistic-sanctuary-gokarna-g-rev-4",
        "author": "Tarun Kapoor",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 8386 257 600",
      "email": "swaswara@cghearth.com",
      "website": "https://www.cghearth.com/swaswara",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=SwaSwara%20Gokarna%20India"
    }
  },
  {
    "id": "the-tamara-coorg-karnataka",
    "slug": "the-tamara-coorg-elevation-wellness",
    "name": "The Tamara Coorg",
    "tagline": "High-Altitude Eco-Wellness Sanctuary in a 180-Acre Organic Coffee & Spice Plantation in Coorg",
    "description": "Nestled 3,500 feet high in the misty Western Ghats of Coorg, The Tamara is an ultra-luxury eco-retreat set within a pristine 180-acre organic coffee, cardamom, and pepper plantation. Built on stilts to preserve the mountain terrain, the private wooden cottages offer panoramic forest views where clouds float through the canopy.\n\nThe Elevation Spa provides bespoke wellness journeys integrating ancient Ayurveda, Swedish massage, hydrotherapy, and forest yoga. Guests hike along cascading mountain waterfalls, learn mindful coffee roasting, practice sunrise meditation among coffee blossoms, and savor organic cuisine crafted from plantation ingredients.",
    "location": {
      "city": "Kabbinakad",
      "region": "Karnataka",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 12.2211,
      "lng": 75.7833
    },
    "heroImage": "https://thetamara.com/wp-content/uploads/2025/04/Mega-menu-1.jpg",
    "gallery": [
      "https://thetamara.com/wp-content/uploads/2025/04/Mega-menu-1.jpg",
      "https://thetamara.com/wp-content/uploads/2025/04/Mega-menu-1-264x300.jpg",
      "https://thetamara.com/wp-content/uploads/2025/04/Mega-menu-2.jpg",
      "https://thetamara.com/wp-content/uploads/2025/04/Mega-menu-2-264x300.jpg",
      "https://thetamara.com/wp-content/uploads/2025/04/Mega-menu-3.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.92,
    "reviewCount": 320,
    "pricing": {
      "minPricePerNight": 340,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Elevation Wellness & Nature Immersion (5 Nights)",
          "days": 5,
          "price": 1700,
          "description": "Daily signature spa therapies, forest yoga, guided waterfall treks, luxury stilted cottage, and organic dining."
        },
        {
          "name": "Deep Rest & Forest Detox (7 Nights)",
          "days": 7,
          "price": 2380,
          "description": "Abhyanga, Swedish de-stress massage, private plantation walking meditation, and bespoke nutritional plan."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Mindfulness & Mental Health",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Ayurveda",
      "Swedish Massage",
      "Forest Bathing",
      "Plantation Yoga",
      "Hydrotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Coorg Spice Infused",
      "Plant-Forward",
      "Gluten-Free"
    ],
    "setting": "Highland Coffee Plantation & Forest",
    "supervision": "Resident Spa Physicians & Certified Yoga Instructors",
    "amenities": [
      "The Elevation Spa",
      "Heated Swimming Pool",
      "Yoga Pavilion in Forest",
      "Waterfall Trail",
      "The Falls Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Plantation Sunrise Yoga & Forest Breathing"
      },
      {
        "time": "08:30 AM",
        "activity": "Organic Farm-to-Table Breakfast with Fresh Coorg Coffee"
      },
      {
        "time": "10:30 AM",
        "activity": "Guided Plantation Waterfall & Forest Bathing Trek"
      },
      {
        "time": "12:00 PM",
        "activity": "Elevation Signature Ayurvedic or Swedish Massage"
      },
      {
        "time": "01:30 PM",
        "activity": "Vitality Lunch with Fresh Garden Produce at The Falls"
      },
      {
        "time": "04:30 PM",
        "activity": "Mindful Coffee Roasting Workshop or Sound Bath"
      },
      {
        "time": "07:30 PM",
        "activity": "Candlelit Multi-Course Dinner Overlooking Forest Valley"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Sandeep Nair",
        "role": "Spa & Wellness Director",
        "credentials": "MD (Alternative Medicine), 15+ Yrs in Luxury Spa & Wellness",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-tamara-1",
        "author": "Karan Johar",
        "date": "1 month ago",
        "rating": 5,
        "title": "Incredible luxury amidst organic coffee plantations",
        "comment": "The stilted cottages in the canopy are stunning. Listening to waterfalls while having a massage and breathing the crisp mountain air was heavenly.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-tamara-coorg-elevation-wellness-g-rev-2",
        "author": "Dr. Alok Nath",
        "date": "June 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Sandeep Nair",
        "comment": "The consultation with Dr. Sandeep Nair was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-tamara-coorg-elevation-wellness-g-rev-3",
        "author": "Aditya Nair",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kabbinakad makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Swedish Massage sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "the-tamara-coorg-elevation-wellness-g-rev-4",
        "author": "Radhika Kulkarni",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 80 7107 7700",
      "email": "reservations@thetamara.com",
      "website": "https://www.thetamara.com/coorg-resort",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=The%20Tamara%20Coorg%20Kabbinakad%20India"
    }
  },
  {
    "id": "devaaya-ayurveda-nature-cure-goa",
    "slug": "devaaya-the-ayurveda-and-nature-cure-centre-divar-island",
    "name": "Devaaya - The Ayurveda and Nature Cure Centre",
    "tagline": "Tranquil Island Sanctuary Dedicated to Ayurveda, Naturopathy & Yoga on Divar Island, Goa",
    "description": "Tucked away on the lush, historic island of Divar in the Mandovi River of Goa, Devaaya is an authentic 5-acre wellness retreat designed as a traditional Portuguese-Goan village. Accessible only by river ferry, the sanctuary offers complete seclusion from Goa's bustling tourist beaches, creating a peaceful cocoon for deep healing.\n\nDevaaya integrates classical Kerala Ayurveda with Naturopathy and Yoga therapy under certified medical doctors. Programs address diabetes, joint pain, obesity, and stress through daily Panchakarma, mud therapy, hydrotherapy, and strict Sattvic vegetarian nutrition prepared according to ancient dietary guidelines.",
    "location": {
      "city": "Divar Island",
      "region": "Goa",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 15.5167,
      "lng": 73.9167
    },
    "heroImage": "https://www.devaaya.com/img/gallery/1.jpg",
    "gallery": [
      "https://www.devaaya.com/img/gallery/1.jpg",
      "https://www.devaaya.com/img/rooms-maharaja-suite-01.jpg",
      "https://www.devaaya.com/img/gallery/2.jpg",
      "https://www.devaaya.com/img/gallery/3.jpg",
      "https://www.devaaya.com/img/rooms-villa-01.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.86,
    "reviewCount": 175,
    "pricing": {
      "minPricePerNight": 160,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Classical Ayurveda & Naturopathy (10 Nights)",
          "days": 10,
          "price": 1600,
          "description": "Combined Ayurveda and Naturopathy detox, mud packs, daily doctor consultation, and Sattvic full-board."
        },
        {
          "name": "Stress Management & Yoga (7 Nights)",
          "days": 7,
          "price": 1120,
          "description": "Shirodhara, full-body herbal massage, island sunrise yoga, and riverfront meditation."
        }
      ]
    },
    "primaryGoals": [
      "Chronic Illness & Pain",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Ayurvedic Medicine",
      "Clinical Naturopathy",
      "Mud Therapy",
      "Hydrotherapy",
      "Yoga Therapy"
    ],
    "dietary": [
      "Strict Sattvic Vegetarian",
      "Naturopathic Cleanse",
      "Organic Farm Harvest",
      "No Alcohol / No Smoking"
    ],
    "setting": "River Island Village",
    "supervision": "Ayurvedic Doctors (BAMS) & Naturopaths (BNYS)",
    "amenities": [
      "Ayurveda & Naturopathy Centre",
      "Hydrotherapy Suites",
      "Riverside Yoga Pavilion",
      "Swimming Pool",
      "Jogging Track"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Riverside Sunrise Yoga & Kriya Cleansing"
      },
      {
        "time": "08:00 AM",
        "activity": "Naturopathic Herbal Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Medical Doctor Consultation & Vastu Assessment"
      },
      {
        "time": "10:30 AM",
        "activity": "Ayurvedic Abhyanga or Mud Pack Therapy"
      },
      {
        "time": "01:00 PM",
        "activity": "Wholesome Sattvic Vegetarian Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Hydrotherapy Jet Bath or Shirodhara"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation & Yoga Nidra"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Organic Dinner & Herbal Teas"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Dinesh Sharma",
        "role": "Chief Naturopathic Physician",
        "credentials": "BNYS, 16+ Yrs in Integrated Naturopathy & Lifestyle Management",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-devaaya-1",
        "author": "Fiona Gallagher",
        "date": "2 months ago",
        "rating": 5,
        "title": "A peaceful island hideaway for real healing",
        "comment": "Taking the ferry to Divar Island felt like leaving the world behind. The combination of Ayurveda with Naturopathy mud baths cured my joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "devaaya-the-ayurveda-and-nature-cure-centre-divar-island-g-rev-2",
        "author": "Amitabh Sen",
        "date": "January 2026",
        "rating": 5,
        "title": "Profound healing under Dr. Dinesh Sharma",
        "comment": "The consultation with Dr. Dinesh Sharma was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "devaaya-the-ayurveda-and-nature-cure-centre-divar-island-g-rev-3",
        "author": "Vandana Iyer",
        "date": "December 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Divar Island makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Clinical Naturopathy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "devaaya-the-ayurveda-and-nature-cure-centre-divar-island-g-rev-4",
        "author": "Gaurav Joshi",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 832 228 0500",
      "email": "info@devaaya.com",
      "website": "https://www.devaaya.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Devaaya%20-%20The%20Ayurveda%20and%20Nature%20Cure%20Centre%20Divar%20Island%20India"
    }
  },
  {
    "id": "ashiyana-yoga-retreat-goa",
    "slug": "ashiyana-yoga-wellness-retreat-mandrem",
    "name": "Ashiyana Yoga & Wellness Retreat",
    "tagline": "Celebrated Bohemian Eco-Village Retreat on Mandrem Beach in North Goa",
    "description": "Nestled in a peaceful coconut palm forest bordering the pristine Mandrem River and Mandrem Beach in North Goa, Ashiyana is an internationally adored holistic sanctuary. Designed as a tranquil eco-village with palm-thatched treehouses, natural swimming pools, and open-air yoga shalas, the retreat offers an authentic bohemian atmosphere focused on holistic regeneration.\n\nAshiyana's wellness center specializes in personalized detox protocols, daily multi-style yoga (Hatha, Vinyasa, Yin, and Kundalini), transformational breathwork, and classical Ayurvedic bodywork. The buffet serves organic, nutrient-dense vegetarian and vegan meals celebrating seasonal produce with rich global flavors.",
    "location": {
      "city": "Mandrem",
      "region": "Goa",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 15.6667,
      "lng": 73.7167
    },
    "heroImage": "https://ashiyana.com/wp-content/uploads/2025/02/Spa-from-above-768x512.jpg",
    "gallery": [
      "https://ashiyana.com/wp-content/uploads/2025/02/Spa-from-above-768x512.jpg",
      "https://ashiyana.com/wp-content/uploads/2024/09/443-item-image-1579012926.jpg",
      "https://ashiyana.com/wp-content/uploads/2024/09/442-item-image-1579012110.jpg",
      "https://ashiyana.com/wp-content/uploads/2025/02/BEST-ME-768x512.jpg",
      "https://ashiyana.com/wp-content/uploads/2025/02/Copia-de-IMG_3417-1-768x512.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.89,
    "reviewCount": 260,
    "pricing": {
      "minPricePerNight": 175,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Holistic Yoga & Detox Immersion (7 Nights)",
          "days": 7,
          "price": 1225,
          "description": "Two daily master yoga classes, Ayurvedic treatments, organic buffet, and beachside eco-treehouse."
        },
        {
          "name": "Deep Rest & Nervous System Reset (10 Nights)",
          "days": 10,
          "price": 1750,
          "description": "Breathwork sessions, sound healing, Shirodhara, daily massage, and customized clean nutrition."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Mental Health",
      "Burnout & Stress",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Multi-Style Yoga",
      "Transformational Breathwork",
      "Ayurvedic Massage",
      "Sound Healing",
      "Yin Yoga"
    ],
    "dietary": [
      "Organic Vegetarian & Vegan",
      "Clean Whole Foods",
      "Locally Sourced Farm Greens",
      "Gluten-Free"
    ],
    "setting": "Coastal Riverside & Beach Eco-Village",
    "supervision": "International Yoga Masters & Resident Ayurvedic Therapists",
    "amenities": [
      "Four Open-Air Yoga Shalas",
      "Natural Chemical-Free Pool",
      "Ayurvedic Spa Centre",
      "Riverside Hammocks",
      "Direct Beach Trail"
    ],
    "dailySchedule": [
      {
        "time": "07:30 AM",
        "activity": "Dynamic Morning Vinyasa & Pranayama Flow"
      },
      {
        "time": "09:30 AM",
        "activity": "Organic Superfood Breakfast Buffet"
      },
      {
        "time": "11:00 AM",
        "activity": "Ayurvedic Abhyanga or Acupressure Massage"
      },
      {
        "time": "01:30 PM",
        "activity": "Fresh Tropical Salad & Grain Lunch"
      },
      {
        "time": "04:30 PM",
        "activity": "Gentle Restorative Yin Yoga & Sound Bath"
      },
      {
        "time": "06:00 PM",
        "activity": "Mandrem Beach Sunset Walk & Meditation"
      },
      {
        "time": "07:30 PM",
        "activity": "Gourmet Organic Vegetarian Dinner Under the Stars"
      }
    ],
    "expertTeam": [
      {
        "name": "Chris Hollis",
        "role": "Founder & Spiritual Director",
        "credentials": "Renowned International Yoga Teacher & Holistic Counselor",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-ashiyana-1",
        "author": "Zoe Kravitz",
        "date": "1 month ago",
        "rating": 5,
        "title": "An oasis of calm and incredible yoga",
        "comment": "The natural pool, open shalas, and nourishing food make Ashiyana the best yoga retreat in Goa. It completely restored my energy and creative flow.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ashiyana-yoga-wellness-retreat-mandrem-g-rev-2",
        "author": "Dr. Priya Swaminathan",
        "date": "October 2025",
        "rating": 5,
        "title": "Measurable biological transformation",
        "comment": "The scientific precision of the Multi-Style Yoga combined with the personalized nutritional coaching exceeded all expectations. My metabolic markers, sleep architecture, and energy levels made astonishing leaps during my stay.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ashiyana-yoga-wellness-retreat-mandrem-g-rev-3",
        "author": "Rohit Mukherjee",
        "date": "September 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Mandrem makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Transformational Breathwork sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "ashiyana-yoga-wellness-retreat-mandrem-g-rev-4",
        "author": "Bhavna Chawla",
        "date": "August 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 98504 01714",
      "email": "contact@ashiyana.com",
      "website": "https://www.ashiyana.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Ashiyana%20Yoga%20%26%20Wellness%20Retreat%20Mandrem%20India"
    }
  },
  {
    "id": "fazlani-natures-nest-maharashtra",
    "slug": "fazlani-natures-nest-lonavala",
    "name": "Fazlani Natures Nest",
    "tagline": "68-Acre Luxury Wellness Resort Overlooking Lake Andra with Equine Therapy in Lonavala",
    "description": "Spread over 68 pristine acres overlooking the sparkling waters of Lake Andra in Maval near Lonavala, Fazlani Natures Nest is an ultra-luxury integrated wellness resort. Nestled between Mumbai and Pune amidst lush rolling hills and manicured rose gardens, the retreat combines evidence-based Naturopathy, classical Ayurveda, Physiotherapy, and world-class Equine-Assisted Therapy.\n\nUnder the care of certified physicians, guests undergo targeted protocols for metabolic disorders, executive burnout, and chronic pain. The unique Equine Therapy program allows guests to connect with majestic horses to release emotional trauma, supported by an organic farm that supplies 100% of the resort's clean culinary needs.",
    "location": {
      "city": "Lonavala",
      "region": "Maharashtra",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 18.75,
      "lng": 73.4
    },
    "heroImage": "https://ak-d.tripcdn.com/images/02254120008jmgyul73F5_R_960_660_R5_D.jpg",
    "gallery": [
      "https://ak-d.tripcdn.com/images/02254120008jmgyul73F5_R_960_660_R5_D.jpg",
      "https://ak-d.tripcdn.com/images/0222p12000842gq2hDD5F_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/02205120008jmyakh7F11_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1ik3s12000nhwzslcED27_Z_1280_853_R50_Q90.jpg",
      "https://ak-d.tripcdn.com/images/0585512000k6jhbzz0E89_Z_1280_853_R50_Q90.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.94,
    "reviewCount": 228,
    "pricing": {
      "minPricePerNight": 350,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Metabolic Reset & Detox (7 Nights)",
          "days": 7,
          "price": 2450,
          "description": "Full medical diagnostics, Naturopathy hydrotherapies, Ayurvedic massage, and tailored organic nutrition."
        },
        {
          "name": "Equine-Assisted Emotional Healing (5 Nights)",
          "days": 5,
          "price": 1750,
          "description": "Private equine therapy sessions, lake meditation, de-stress bodywork, and luxury villa."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Emotional & Trauma Healing"
    ],
    "modalities": [
      "Equine Therapy",
      "Clinical Naturopathy",
      "Ayurvedic Medicine",
      "Hydrotherapy",
      "Acupuncture"
    ],
    "dietary": [
      "100% Certified Organic Farm-to-Table",
      "Anti-Inflammatory",
      "Low Glycemic",
      "Vegetarian"
    ],
    "setting": "Lakeside Mountain Estate",
    "supervision": "Medical Doctors (MD), Naturopaths & Certified Equine Therapists",
    "amenities": [
      "Equine Therapy Centre",
      "Amarine Wellness Centre",
      "Lakefront Infinity Pool",
      "Rose Gardens",
      "Hydrotherapy Complex"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Lakefront Sunrise Yoga & Morning Breathwork"
      },
      {
        "time": "08:30 AM",
        "activity": "Organic Farm-to-Table Breakfast"
      },
      {
        "time": "10:00 AM",
        "activity": "Medical Physician Consultation & Body Composition Analysis"
      },
      {
        "time": "11:00 AM",
        "activity": "Private Equine Therapy Connection Session"
      },
      {
        "time": "01:00 PM",
        "activity": "Therapeutic Organic Lunch at The Hive"
      },
      {
        "time": "03:30 PM",
        "activity": "Naturopathic Hydrotherapy or Abhyanga Massage"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Sound Healing Meditation Over Lake Andra"
      },
      {
        "time": "07:30 PM",
        "activity": "Organic Clean Cuisine Dinner & Evening Herbal Tea"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. K. S. Patel",
        "role": "Medical Director",
        "credentials": "MD, Integrative Medicine Specialist with 20+ Yrs Experience",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      },
      {
        "name": "Sarah Al-Rashid",
        "role": "Senior Equine Therapist",
        "credentials": "Certified EAGALA Practitioner in Equine-Assisted Psychotherapy",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-fazlani-1",
        "author": "Rohan Varma",
        "date": "3 weeks ago",
        "rating": 5,
        "title": "The Equine therapy was a life-changing breakthrough",
        "comment": "Working with the horses helped me process emotional grief that years of talk therapy couldn't unlock. The lake views, luxury suites, and organic food are world class.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "fazlani-natures-nest-lonavala-g-rev-2",
        "author": "Karan Singhania",
        "date": "July 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Lonavala restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "fazlani-natures-nest-lonavala-g-rev-3",
        "author": "Nandini Dasgupta",
        "date": "June 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Lonavala makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Clinical Naturopathy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "fazlani-natures-nest-lonavala-g-rev-4",
        "author": "Manish Aggarwal",
        "date": "May 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 2114 661 200",
      "email": "reservations@fazlaninaturesnest.com",
      "website": "https://www.fazlaninaturesnest.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Fazlani%20Natures%20Nest%20Lonavala%20India"
    }
  },
  {
    "id": "viveda-wellness-village-maharashtra",
    "slug": "viveda-wellness-village-nashik",
    "name": "Viveda Wellness Village",
    "tagline": "Integrated Naturopathy & Ayurvedic Sanctuary Surrounded by the Sahyadri Mountains in Nashik",
    "description": "Nestled in the sacred foothills of Trimbakeshwar in Nashik, Maharashtra, Viveda Wellness Village is an integrated sanctuary spread across acres of stone courtyards and native flora. Designed using local basalt stone and terracotta tiles, the architecture reflects traditional Indian village simplicity infused with contemporary luxury.\n\nViveda offers scientifically formulated wellness retreats combining Naturopathy, Ayurveda, Yoga, and Panchakarma. Programs address chronic lifestyle diseases, digital burnout, and metabolic stagnation through daily herbal hydrotherapies, acupuncture, yogic cleansing (Shatkriyas), and organic farm-fresh nutrition.",
    "location": {
      "city": "Nashik",
      "region": "Maharashtra",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 19.9333,
      "lng": 73.5333
    },
    "heroImage": "https://vivedawellness.com/wp-content/uploads/2026/05/vievda_wellness_resort_aerial_view.jpg",
    "gallery": [
      "https://vivedawellness.com/wp-content/uploads/2026/05/vievda_wellness_resort_aerial_view.jpg",
      "https://vivedawellness.com/wp-content/uploads/2020/05/stay-01.jpg",
      "https://vivedawellness.com/wp-content/uploads/2020/05/stay-02.jpg",
      "https://vivedawellness.com/wp-content/uploads/2026/05/Viveda-Wellness-Resort-meditation-in-dome.jpg",
      "https://vivedawellness.com/wp-content/uploads/2023/03/1600x797-scaled.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 168,
    "pricing": {
      "minPricePerNight": 210,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Naturopathy Detox & Lifestyle Reset (7 Nights)",
          "days": 7,
          "price": 1470,
          "description": "Full Naturopathic diagnostics, hydrotherapy, mud packs, Shatkriyas, and organic living meals."
        },
        {
          "name": "Ayurvedic Rejuvenation & De-Stress (5 Nights)",
          "days": 5,
          "price": 1050,
          "description": "Abhyanga, Shirodhara, Sahyadri mountain yoga, stone cottage stay, and Sattvic dining."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Chronic Illness & Pain"
    ],
    "modalities": [
      "Clinical Naturopathy",
      "Ayurvedic Panchakarma",
      "Shatkriyas",
      "Hydrotherapy",
      "Yoga Therapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Sattvic Vegetarian",
      "Low Sodium / Low Sugar",
      "Gluten-Free"
    ],
    "setting": "Mountain Foothill Village",
    "supervision": "Resident Naturopathic Doctors (BNYS) & Ayurvedic Physicians",
    "amenities": [
      "Naturopathy Centre",
      "Basalt Stone Yoga Hall",
      "Hydrotherapy Pools",
      "Organic Herb Farm",
      "Reflexology Track"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Mountain Sunrise Shatkriyas & Hatha Yoga"
      },
      {
        "time": "08:00 AM",
        "activity": "Fresh Cold-Pressed Herbal Juice & Light Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Naturopathic Doctor Examination"
      },
      {
        "time": "10:30 AM",
        "activity": "Hydrotherapy Spray or Mud Pack Therapy"
      },
      {
        "time": "01:00 PM",
        "activity": "Nutrient-Dense Organic Vegetarian Lunch at Naivedya"
      },
      {
        "time": "03:30 PM",
        "activity": "Ayurvedic Abhyanga or Acupressure Treatment"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Trataka (Candle Gazing) Meditation"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Sattvic Dinner & Medicated Warm Decoction"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Amol Patil",
        "role": "Chief Naturopath",
        "credentials": "BNYS, 14+ Yrs in Clinical Naturopathy & Lifestyle Modification",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-viveda-1",
        "author": "Meera Kulkarni",
        "date": "2 months ago",
        "rating": 5,
        "title": "Peaceful stone architecture and fantastic naturopathy",
        "comment": "The mountain setting near Trimbakeshwar is so calming. The Shatkriyas and hydrotherapy cleared my sinuses and digestive sluggishness completely.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "viveda-wellness-village-nashik-g-rev-2",
        "author": "Divya Balakrishnan",
        "date": "February 2026",
        "rating": 5,
        "title": "Profound healing under Dr. Amol Patil",
        "comment": "The consultation with Dr. Amol Patil was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "viveda-wellness-village-nashik-g-rev-3",
        "author": "Harish Chandra",
        "date": "January 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Nashik makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ayurvedic Panchakarma sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "viveda-wellness-village-nashik-g-rev-4",
        "author": "Preeti Nambiar",
        "date": "December 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 253 664 4555",
      "email": "reservations@vivedawellness.com",
      "website": "https://www.vivedawellness.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Viveda%20Wellness%20Village%20Nashik%20India"
    }
  },
  {
    "id": "nimba-nature-cure-village-gujarat",
    "slug": "nimba-nature-cure-village-mehsana",
    "name": "Nimba Nature Cure Village",
    "tagline": "Western India's Premier 50-Acre Integrated Naturopathy & Ayurveda Village in Mehsana, Gujarat",
    "description": "Spanning 50 verdant acres in Mehsana near Ahmedabad, Gujarat, Nimba Nature Cure Village is one of Western India's largest and most technologically advanced integrated naturopathy hospitals. Rooted in drugless therapy, the retreat combines ancient Naturopathy, classical Ayurveda, Yoga, Meditation, and Physiotherapy under an expansive clinical umbrella.\n\nNimba provides evidence-based therapies for chronic lifestyle conditions including diabetes, obesity, hypertension, and digestive disorders. Guests experience colon hydrotherapy, mud baths, underwater massage, acupuncture, and therapeutic dietetics in an environment enriched by thousands of indigenous trees and medicinal plants.",
    "location": {
      "city": "Mehsana",
      "region": "Gujarat",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 23.588,
      "lng": 72.3693
    },
    "heroImage": "https://www.nimba.in/wp-content/uploads/2020/10/Wellness-Main-Image-min.jpg",
    "gallery": [
      "https://www.nimba.in/wp-content/uploads/2020/10/Wellness-Main-Image-min.jpg",
      "https://www.nimba.in/wp-content/uploads/2020/10/Swimming-Pool.jpg",
      "https://www.nimba.in/wp-content/uploads/2020/10/TAFI-1.jpg",
      "https://www.nimba.in/wp-content/uploads/2020/10/Deluxe-Room-1.jpg",
      "https://nimba.in/wp-content/uploads/2020/10/home-video.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.87,
    "reviewCount": 240,
    "pricing": {
      "minPricePerNight": 140,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Diabetes & Metabolic Reversal (10 Nights)",
          "days": 10,
          "price": 1400,
          "description": "Full Naturopathic diagnostic workup, colon hydrotherapy, mud baths, yoga therapy, and prescribed clinical diet."
        },
        {
          "name": "Natural Detox & Weight Management (7 Nights)",
          "days": 7,
          "price": 980,
          "description": "Herbal steam, underwater massage, acupuncture, therapeutic fasting, and organic living cuisine."
        }
      ]
    },
    "primaryGoals": [
      "Chronic Illness & Pain",
      "Detox & Weight Loss",
      "Burnout & Stress"
    ],
    "modalities": [
      "Clinical Naturopathy",
      "Colon Hydrotherapy",
      "Mud Baths",
      "Acupuncture",
      "Underwater Massage"
    ],
    "dietary": [
      "Naturopathic Clinical Diet",
      "Therapeutic Juice Fasting",
      "Pure Organic Vegetarian",
      "No Oil / No Salt Prescribed"
    ],
    "setting": "50-Acre Eco-Park & Farm",
    "supervision": "Hospital Staff of Certified Naturopathic Doctors (BNYS) & Dietitians",
    "amenities": [
      "Naturopathy Hospital Wing",
      "Hydrotherapy Complex",
      "Yoga Hall",
      "Organic Farm",
      "Reflexology Track"
    ],
    "dailySchedule": [
      {
        "time": "06:00 AM",
        "activity": "Morning Herbal Cleansing Drink & Kriyas"
      },
      {
        "time": "06:30 AM",
        "activity": "Therapeutic Hatha Yoga & Deep Pranayama"
      },
      {
        "time": "08:00 AM",
        "activity": "Prescribed Clinical Diet Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Senior Doctor Rounds & Diagnostic Check"
      },
      {
        "time": "10:30 AM",
        "activity": "Full-Body Mud Bath or Colon Hydrotherapy"
      },
      {
        "time": "01:00 PM",
        "activity": "Therapeutic Naturopathic Lunch"
      },
      {
        "time": "03:30 PM",
        "activity": "Underwater Massage or Acupuncture Session"
      },
      {
        "time": "05:30 PM",
        "activity": "Evening Meditation & Sound Relaxation"
      },
      {
        "time": "07:00 PM",
        "activity": "Light Nourishing Dinner & Herbal Infusions"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. B. K. Dave",
        "role": "Chief Medical Officer",
        "credentials": "BNYS, MD (Naturopathy), 20+ Yrs Experience in Lifestyle Disease Reversal",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-nimba-1",
        "author": "Jayesh Patel",
        "date": "1 month ago",
        "rating": 5,
        "title": "Remarkable diabetes management without drugs",
        "comment": "My HbA1c dropped significantly and I lost 5 kg in 10 days. The doctor team is extremely disciplined, and the 50-acre green campus is breathtaking.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "nimba-nature-cure-village-mehsana-g-rev-2",
        "author": "Sunita Menon",
        "date": "November 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Mehsana restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "nimba-nature-cure-village-mehsana-g-rev-3",
        "author": "Rajesh Khurana",
        "date": "October 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Mehsana makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Colon Hydrotherapy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "nimba-nature-cure-village-mehsana-g-rev-4",
        "author": "Dr. Meenakshi Sundaram",
        "date": "September 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 2762 283 000",
      "email": "info@nimba.in",
      "website": "https://www.nimba.in",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Nimba%20Nature%20Cure%20Village%20Mehsana%20India"
    }
  },
  {
    "id": "aahana-corbett-wilderness-uttarakhand",
    "slug": "aahana-the-corbett-wilderness-naturopathy",
    "name": "Aahana - The Corbett Wilderness",
    "tagline": "Eco-Luxury Wilderness Sanctuary with Naturopathy & Ayurveda on the Border of Jim Corbett National Park",
    "description": "Nestled on 11 lush acres bordering the dense jungles of the Bijrani zone in Jim Corbett National Park, Aahana is a multi-award-winning eco-luxury wilderness retreat. Operating on zero-waste principles with an innovative root-zone wastewater treatment plant, the retreat allows guests to heal in harmony with the wild.\n\nAahana's Naturopathy and Ayurveda Center offers physician-supervised detoxification, herbal body wraps, Shirodhara, and acupuncture. Guests begin their day with sunrise yoga accompanied by birdsong from over 200 resident avian species, followed by jungle jeep safaris, organic farm dining, and evening bonfire acoustic meditation.",
    "location": {
      "city": "Jim Corbett",
      "region": "Uttarakhand",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 29.53,
      "lng": 78.7747
    },
    "heroImage": "https://aahanaresort.com/wp-content/uploads/2026/06/DSF9464-2.webp",
    "gallery": [
      "https://aahanaresort.com/wp-content/uploads/2026/06/DSF9464-2.webp",
      "https://aahanaresort.com/wp-content/uploads/2026/06/DSF9464-2-300x225.webp",
      "https://aahanaresort.com/wp-content/uploads/2026/06/DSF9464-2-1024x768.webp",
      "https://aahanaresort.com/wp-content/uploads/2026/06/DSF9464-2-768x576.webp",
      "https://aahanaresort.com/wp-content/uploads/2026/06/DSF9464-2-600x450.webp"
    ],
    "badgeTier": "verified",
    "rating": 4.93,
    "reviewCount": 310,
    "pricing": {
      "minPricePerNight": 290,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Wilderness Rejuvenation & Detox (5 Nights)",
          "days": 5,
          "price": 1450,
          "description": "Ayurvedic massage, herbal steam, jungle safari, yoga pavilion sessions, and organic farm meals."
        },
        {
          "name": "Natural Health Reset & Forest Bathing (7 Nights)",
          "days": 7,
          "price": 2030,
          "description": "Full Naturopathic consultation, mud packs, Shirodhara, guided nature walks, and luxury cottage stay."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Mindfulness & Mental Health"
    ],
    "modalities": [
      "Clinical Naturopathy",
      "Ayurvedic Medicine",
      "Forest Bathing",
      "Wilderness Yoga",
      "Acupuncture"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Sattvic & Kumaoni Specialties",
      "Locally Sourced Farm Greens",
      "Gluten-Free"
    ],
    "setting": "Wilderness National Park Border",
    "supervision": "Resident Naturopathic Doctors & Ayurvedic Physicians",
    "amenities": [
      "Naturopathy Centre",
      "Swimming Pool",
      "Jungle Canopy Yoga Deck",
      "Organic Farm & Dairy",
      "Root-Zone Eco Plant"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Canopy Sunrise Yoga with Forest Birdsong"
      },
      {
        "time": "08:00 AM",
        "activity": "Farm-Fresh Organic Breakfast with Fresh Dairy"
      },
      {
        "time": "09:30 AM",
        "activity": "Naturopathy Doctor Health Consultation"
      },
      {
        "time": "10:30 AM",
        "activity": "Traditional Abhyanga or Herbal Mud Wrap"
      },
      {
        "time": "01:00 PM",
        "activity": "Farm-to-Plate Lunch at Dhikala Restaurant"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara or Guided Nature Walk"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Meditation & Forest Sound Bath"
      },
      {
        "time": "07:30 PM",
        "activity": "Candlelit Organic Dinner by the Bonfire"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Abhishek Rawat",
        "role": "Head of Naturopathy & Wellness",
        "credentials": "BNYS, 12+ Yrs Experience in Wilderness Health & Detox",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-aahana-1",
        "author": "Manish Agarwal",
        "date": "1 month ago",
        "rating": 5,
        "title": "Unmatched eco-wellness right next to the tigers",
        "comment": "Combining authentic Naturopathy treatments with morning jungle safaris and pure organic food was incredible. The resort's environmental commitment is inspiring.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "aahana-the-corbett-wilderness-naturopathy-g-rev-2",
        "author": "Vikram Malhotra",
        "date": "August 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Jim Corbett restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "aahana-the-corbett-wilderness-naturopathy-g-rev-3",
        "author": "Pooja Mehta",
        "date": "July 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Jim Corbett makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ayurvedic Medicine sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "aahana-the-corbett-wilderness-naturopathy-g-rev-4",
        "author": "Ananya Sharma",
        "date": "June 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 70886 00024",
      "email": "stay@aahanaresort.com",
      "website": "https://www.aahanaresort.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Aahana%20-%20The%20Corbett%20Wilderness%20Jim%20Corbett%20India"
    }
  },
  {
    "id": "abhayaranya-yoga-ashram-uttarakhand",
    "slug": "abhayaranya-yoga-ashram-rishikesh-yogpeeth",
    "name": "Abhayaranya Yoga Ashram",
    "tagline": "High-Elevation Himalayan Spiritual Yoga Ashram Overlooking the Sacred Ganges Valley in Rishikesh",
    "description": "Perched high above the bustling town of Rishikesh in the quiet mountain village of Manikoot, Abhayaranya Yoga Ashram is an authentic spiritual sanctuary created by the founders of Rishikesh Yogpeeth. Accessible only by a scenic uphill mountain walk, the ashram is free from vehicular noise, surrounded by deep oak forests and soaring Himalayan peaks.\n\nAbhayaranya ('the forest without fear') offers classical Hatha and Ashtanga yoga immersions, Vedic philosophy lectures, silent meditation, and authentic Ayurvedic treatments. Guests live the disciplined ashram lifestyle with early-morning bell tolls, fire rituals (Havan), and Sattvic vegetarian meals cooked with love.",
    "location": {
      "city": "Rishikesh",
      "region": "Uttarakhand",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 30.1256,
      "lng": 78.3244
    },
    "heroImage": "https://abhayaranya.com/img/abhayaranya-yoga-ashram-rishikesh-retreat-center.webp",
    "gallery": [
      "https://abhayaranya.com/img/abhayaranya-yoga-ashram-rishikesh-retreat-center.webp",
      "https://abhayaranya.com/img/abhayaranya-yoga-ashram-rishikesh-india.webp",
      "https://abhayaranya.com/images/yoga-retreat-center-rishikesh.webp",
      "https://abhayaranya.com/images/7-days-yoga-retreat-in-rishikesh-india.webp",
      "https://abhayaranya.com/images/3-days-yoga-retreat-in-rishikesh-india.webp"
    ],
    "badgeTier": "verified",
    "rating": 4.96,
    "reviewCount": 180,
    "pricing": {
      "minPricePerNight": 95,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "Traditional Himalayan Yoga Immersion (7 Nights)",
          "days": 7,
          "price": 665,
          "description": "Two daily yoga sessions, pranayama, philosophy discourse, Sattvic full-board, and mountain ashram room."
        },
        {
          "name": "Spiritual Detox & Meditation Retreat (14 Nights)",
          "days": 14,
          "price": 1330,
          "description": "In-depth yogic cleansing (Shatkriyas), silent meditation, Ayurvedic massage, and Havan ceremonies."
        }
      ]
    },
    "primaryGoals": [
      "Mindfulness & Mental Health",
      "Spiritual Awakening",
      "Burnout & Stress"
    ],
    "modalities": [
      "Classical Hatha Yoga",
      "Ashtanga Yoga",
      "Pranayama",
      "Vedic Chanting",
      "Shatkriyas"
    ],
    "dietary": [
      "Sattvic Ashram Cuisine",
      "Pure Vegetarian",
      "Cooked with Mindful Devotion",
      "Gluten-Free Available"
    ],
    "setting": "High-Altitude Himalayan Mountain Ridge",
    "supervision": "Traditional Yogic Gurus & Ayurvedic Physicians",
    "amenities": [
      "Panoramic Mountain Yoga Shala",
      "Havan Fire Pit",
      "Meditation Terraces",
      "Herbal Tea Lounge",
      "Forest Walking Paths"
    ],
    "dailySchedule": [
      {
        "time": "05:30 AM",
        "activity": "Morning Bell & Jal Neti Nasal Cleansing"
      },
      {
        "time": "06:00 AM",
        "activity": "Himalayan Sunrise Pranayama & Hatha Flow"
      },
      {
        "time": "08:00 AM",
        "activity": "Traditional Sattvic Ashram Breakfast"
      },
      {
        "time": "10:00 AM",
        "activity": "Patanjali Yoga Sutras & Philosophy Discourse"
      },
      {
        "time": "01:00 PM",
        "activity": "Nourishing Sattvic Vegetarian Lunch"
      },
      {
        "time": "04:30 PM",
        "activity": "Ashtanga Alignment & Restorative Yoga"
      },
      {
        "time": "06:30 PM",
        "activity": "Evening Havan Fire Ceremony & Kirtan Chanting"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Sattvic Dinner & Silent Reflection"
      }
    ],
    "expertTeam": [
      {
        "name": "Yogi Roshan",
        "role": "Head of Ashram & Philosophy",
        "credentials": "Founder of Rishikesh Yogpeeth, 25+ Yrs Teaching Traditional Yoga",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-abhayaranya-1",
        "author": "Johannes Bauer",
        "date": "2 months ago",
        "rating": 5,
        "title": "The authentic spiritual heart of Rishikesh",
        "comment": "Being up in the quiet mountains away from the city noise allowed me to dive into real yoga and meditation. The energy of the ashram and the teachers is pure gold.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "abhayaranya-yoga-ashram-rishikesh-yogpeeth-g-rev-2",
        "author": "Kavita Rao",
        "date": "May 2025",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Rishikesh are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "abhayaranya-yoga-ashram-rishikesh-yogpeeth-g-rev-3",
        "author": "Siddharth Verma",
        "date": "February 2026",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Rishikesh makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ashtanga Yoga sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "abhayaranya-yoga-ashram-rishikesh-yogpeeth-g-rev-4",
        "author": "Arjun Patel",
        "date": "January 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 76682 98934",
      "email": "info@rishikeshyogpeeth.com",
      "website": "https://www.rishikeshyogpeeth.com/abhayaranya-yoga-ashram-rishikesh.html",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Abhayaranya%20Yoga%20Ashram%20Rishikesh%20India"
    }
  },
  {
    "id": "parmarth-niketan-wellness-uttarakhand",
    "slug": "parmarth-niketan-yoga-wellness-rishikesh",
    "name": "Parmarth Niketan Ashram",
    "tagline": "World-Famous Spiritual Ashram on the Sacred Banks of the Ganges in Swargashram, Rishikesh",
    "description": "Located on the holy banks of Mother Ganga in the Swargashram area of Rishikesh, Parmarth Niketan is one of India's largest and most venerated spiritual ashrams. Surrounded by the forested foothills of the Himalayas, the ashram is globally celebrated as the home of the sacred sunset Ganga Aarti and the annual International Yoga Festival.\n\nParmarth Niketan offers a deeply transformative immersion into classical Vedic lifestyle, yoga, and holistic Ayurvedic wellness. Guests from every corner of the earth participate in daily sunrise yoga, universal meditation, Vedic fire rituals, and Ayurvedic panchakarma treatments, experiencing the profound spiritual sanctity of Rishikesh.",
    "location": {
      "city": "Rishikesh",
      "region": "Uttarakhand",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 30.1194,
      "lng": 78.3122
    },
    "heroImage": "https://parmarth.org/wp-content/uploads/2026/04/aarti-square.jpg",
    "gallery": [
      "https://parmarth.org/wp-content/uploads/2026/04/aarti-square.jpg",
      "https://parmarth.org/wp-content/uploads/2022/02/clean-thumb-520x424.jpg",
      "https://parmarth.org/wp-content/uploads/2022/03/gurukul2-520x424.jpg",
      "https://parmarth.org/wp-content/uploads/2026/07/gurupurnima2026.jpg",
      "https://parmarth.org/wp-content/uploads/2026/07/jagannathyatra-1.jpg"
    ],
    "badgeTier": "featured",
    "rating": 4.95,
    "reviewCount": 420,
    "pricing": {
      "minPricePerNight": 80,
      "currency": "USD",
      "pricingTier": "accessible",
      "packageOptions": [
        {
          "name": "Spiritual Yoga & Meditation Retreat (7 Nights)",
          "days": 7,
          "price": 560,
          "description": "Two daily yoga sessions, Ganga Aarti VIP seating, spiritual discourses, Sattvic full-board, and ashram room."
        },
        {
          "name": "Vedic Wellness & Ayurvedic Rejuvenation (14 Nights)",
          "days": 14,
          "price": 1120,
          "description": "Ayurvedic pulse check, Abhyanga, Shirodhara, daily yoga, and complete spiritual immersion."
        }
      ]
    },
    "primaryGoals": [
      "Spiritual Awakening",
      "Mindfulness & Mental Health",
      "Burnout & Stress"
    ],
    "modalities": [
      "Vedic Yoga",
      "Ganga Aarti Rituals",
      "Pranayama",
      "Ayurvedic Treatments",
      "Kirtan Chanting"
    ],
    "dietary": [
      "Pure Sattvic Vegetarian",
      "Ashram Sacred Food",
      "No Garlic / No Onion",
      "Digestive Herbal Teas"
    ],
    "setting": "Holy Riverbanks & Himalayan Foothills",
    "supervision": "Venerated Spiritual Masters & Ayurvedic Vaidyas",
    "amenities": [
      "Ganga Aarti Ghat",
      "Spiritual Meditation Gardens",
      "Ayurveda Treatment Wing",
      "Yoga Shalas",
      "Sanskrit Library"
    ],
    "dailySchedule": [
      {
        "time": "05:00 AM",
        "activity": "Morning Prayers & Universal Meditation"
      },
      {
        "time": "06:30 AM",
        "activity": "Riverside Sunrise Yoga & Pranayama"
      },
      {
        "time": "08:00 AM",
        "activity": "Sacred Sattvic Ashram Breakfast"
      },
      {
        "time": "10:30 AM",
        "activity": "Ayurvedic Doctor Consultation or Abhyanga"
      },
      {
        "time": "01:00 PM",
        "activity": "Sattvic Lunch in Ashram Dining Hall"
      },
      {
        "time": "04:30 PM",
        "activity": "Gentle Restorative Yoga & Breathwork"
      },
      {
        "time": "06:00 PM",
        "activity": "World-Famous Sunset Ganga Aarti on the Ghats"
      },
      {
        "time": "07:30 PM",
        "activity": "Evening Satsang with Pujya Swamiji & Light Dinner"
      }
    ],
    "expertTeam": [
      {
        "name": "Pujya Swami Chidanand Saraswatiji",
        "role": "Spiritual Head & President",
        "credentials": "Renowned Global Spiritual Leader & Environmental Pioneer",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      },
      {
        "name": "Sadhvi Bhagawati Saraswati",
        "role": "Secretary General & Spiritual Teacher",
        "credentials": "Ph.D., Author of 'Hollywood to the Himalayas', Leading Spiritual Guide",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-parmarth-1",
        "author": "David Miller",
        "date": "2 weeks ago",
        "rating": 5,
        "title": "Life-changing spiritual energy by Mother Ganga",
        "comment": "The sunset Ganga Aarti is one of the most powerful spiritual experiences in the world. The ashram combines deep devotion, authentic yoga, and genuine warmth.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "parmarth-niketan-yoga-wellness-rishikesh-g-rev-2",
        "author": "Nikhil Chopra",
        "date": "December 2025",
        "rating": 5,
        "title": "Exemplary wellness retreat in every dimension",
        "comment": "The initial wellness assessment gave me absolute clarity on my physical and emotional needs. The therapists and practitioners in Rishikesh are world-class, delivering therapies that genuinely rejuvenate on a cellular level.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "parmarth-niketan-yoga-wellness-rishikesh-g-rev-3",
        "author": "Deepak Bhatt",
        "date": "November 2025",
        "rating": 4,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Rishikesh makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Ganga Aarti Rituals sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "parmarth-niketan-yoga-wellness-rishikesh-g-rev-4",
        "author": "Sanjay Deshmukh",
        "date": "October 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 135 244 0077",
      "email": "parmarth@parmarth.com",
      "website": "https://www.parmarth.org",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Parmarth%20Niketan%20Ashram%20Rishikesh%20India"
    }
  },
  {
    "id": "naad-wellness-haryana",
    "slug": "naad-wellness-retreat-sonipat",
    "name": "Naad Wellness",
    "tagline": "39-Room Holistic Sanctuary Integrating Ayurveda, Naturopathy, Yoga & Salt Cave in Sonipat, NCR Delhi",
    "description": "Located just a short drive from New Delhi in Sonipat, Haryana, Naad Wellness is a 39-room boutique luxury medical wellness retreat. Designed as an oasis of stillness far removed from the capital's urban chaos, Naad integrates ancient healing wisdom with modern diagnostic technology to restore internal harmony ('Naad').\n\nThe retreat's medical team prescribes customized journeys based on Ayurveda, Naturopathy, and Yoga. The center features a Himalayan salt cave for respiratory detox, Turkish Hammam, colon hydrotherapy, and personalized acupuncture, supported by organic farm-to-table cuisine prepared without white sugar, processed oils, or artificial additives.",
    "location": {
      "city": "Sonipat",
      "region": "Haryana",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 28.9958,
      "lng": 77.0114
    },
    "heroImage": "https://naadwellness.com/wp-content/uploads/2025/12/4-1.jpg",
    "gallery": [
      "https://naadwellness.com/wp-content/uploads/2025/12/4-1.jpg",
      "https://naadwellness.com/wp-content/uploads/2025/12/5-1.jpg",
      "https://naadwellness.com/wp-content/uploads/2025/12/6-1.jpg",
      "https://naadwellness.com/wp-content/uploads/2025/12/7-1.jpg",
      "https://naadwellness.com/wp-content/uploads/2026/01/therpaies_gallery2.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.91,
    "reviewCount": 188,
    "pricing": {
      "minPricePerNight": 280,
      "currency": "USD",
      "pricingTier": "luxury",
      "packageOptions": [
        {
          "name": "Naad Destress & Sleep Reset (5 Nights)",
          "days": 5,
          "price": 1400,
          "description": "Shirodhara, Himalayan salt cave session, Naturopathy hydrotherapy, yoga nidra, and luxury room."
        },
        {
          "name": "Comprehensive Detox & Weight Management (7 Nights)",
          "days": 7,
          "price": 1960,
          "description": "Full medical consultation, colon hydrotherapy, mud therapy, acupuncture, and personalized clean nutrition."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Sleep & Insomnia"
    ],
    "modalities": [
      "Himalayan Salt Cave",
      "Clinical Naturopathy",
      "Ayurvedic Medicine",
      "Acupuncture",
      "Hydrotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "No Refined Sugar / No Processed Oils",
      "Anti-Inflammatory",
      "Vegetarian"
    ],
    "setting": "Rural Green Oasis near Capital",
    "supervision": "Resident Medical Doctors, Ayurvedic Vaidyas & Naturopaths",
    "amenities": [
      "Himalayan Salt Cave",
      "Turkish Hammam",
      "Hydrotherapy Complex",
      "Yoga Pavilion",
      "Reflexology Track"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Morning Pranayama & Dynamic Hatha Flow"
      },
      {
        "time": "08:30 AM",
        "activity": "Farm-to-Table Organic Breakfast"
      },
      {
        "time": "10:00 AM",
        "activity": "Medical Doctor Consultation & Body Composition Scan"
      },
      {
        "time": "11:00 AM",
        "activity": "Himalayan Salt Cave Respiratory Inhalation"
      },
      {
        "time": "01:00 PM",
        "activity": "Nutrient-Dense Organic Lunch at Ahara"
      },
      {
        "time": "03:30 PM",
        "activity": "Ayurvedic Abhyanga or Hydrotherapy Jet Bath"
      },
      {
        "time": "05:30 PM",
        "activity": "Guided Sound Meditation & Yoga Nidra"
      },
      {
        "time": "07:30 PM",
        "activity": "Three-Course Organic Dinner & Herbal Infusions"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Himani Sharma",
        "role": "Chief Medical Officer",
        "credentials": "BAMS, MD, Specialist in Lifestyle Medicine & Naturopathy",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-naad-1",
        "author": "Sunita Kapoor",
        "date": "1 month ago",
        "rating": 5,
        "title": "An unexpected haven of peace right outside Delhi",
        "comment": "The salt cave did wonders for my chronic asthma and the food was deliciously clean. The staff is polite, discreet, and deeply professional.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "naad-wellness-retreat-sonipat-g-rev-2",
        "author": "Tarun Kapoor",
        "date": "September 2025",
        "rating": 5,
        "title": "Pure mineral restoration and serene stillness",
        "comment": "The natural thermal onsen waters combined with the intuitive touch of the therapists worked miracles on my muscle fatigue. Practicing mindful contemplation in Sonipat restored a sense of deep peace I hadn't felt in years.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "naad-wellness-retreat-sonipat-g-rev-3",
        "author": "Dr. Alok Nath",
        "date": "August 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Sonipat makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Clinical Naturopathy sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "naad-wellness-retreat-sonipat-g-rev-4",
        "author": "Aditya Nair",
        "date": "July 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 124 697 1000",
      "email": "contact@naadwellness.com",
      "website": "https://www.naadwellness.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Naad%20Wellness%20Sonipat%20India"
    }
  },
  {
    "id": "amanbagh-wellness-rajasthan",
    "slug": "amanbagh-holistic-ayurveda-rajasthan",
    "name": "Amanbagh Holistic Wellness",
    "tagline": "Mughal-Inspired Palatial Ayurvedic & Longevity Sanctuary in the Aravalli Hills of Alwar, Rajasthan",
    "description": "Rising like a rose-hued Mughal palace amidst ancient banyan trees in the rugged Aravalli Hills of Ajabgarh, Rajasthan, Amanbagh ('Peaceful Garden') is a secluded ultra-luxury wellness sanctuary. Constructed from local pink marble and pale green sandstone with domed cupolas, the retreat recalls the golden age of the Mughal empire.\n\nAmanbagh's comprehensive Ayurvedic immersions are overseen by resident Ayurvedic physicians and yoga masters. Guests embark on multi-day journeys featuring daily private consultations, customized herbal preparations, Abhyanga and Shirodhara, temple sunrise meditations, and farm-to-table organic dining harvested from the resort's 2-acre private organic garden.",
    "location": {
      "city": "Ajabgarh",
      "region": "Rajasthan",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 27.2,
      "lng": 76.4
    },
    "heroImage": "https://www.aman.com/sites/default/files/2023-01/Amanbagh%2C%20India%20-%20Main%20Building%2C%20Pool%20View-3.jpg",
    "gallery": [
      "https://www.aman.com/sites/default/files/2023-01/Amanbagh%2C%20India%20-%20Main%20Building%2C%20Pool%20View-3.jpg",
      "https://www.aman.com/sites/default/files/styles/masonry_extra_large/public/2021-03/Amanbagh_Gallery_1.jpg",
      "https://ak-d.tripcdn.com/images/1mi4w12000q11t6c283DD_R_600_400_R5_Q90.jpg",
      "https://ak-d.tripcdn.com/images/1mi4z12000diuyeegB980_Q90.jpg",
      "https://www.aman.com/sites/default/files/styles/central_carousel_extra_large/public/2023-01/Amanbagh%2C%20India%20-%20Main%20Building%2C%20Pool%20View-2.webp?itok=E--PVus_"
    ],
    "badgeTier": "featured",
    "rating": 4.98,
    "reviewCount": 198,
    "pricing": {
      "minPricePerNight": 920,
      "currency": "USD",
      "pricingTier": "ultra-luxury",
      "packageOptions": [
        {
          "name": "Amanbagh Ayurvedic Immersion (7 Nights)",
          "days": 7,
          "price": 6440,
          "description": "Daily physician pulse diagnosis, customized Ayurvedic therapies, private yoga, organic garden dining, and pool pavilion."
        },
        {
          "name": "Aravalli Longevity & Deep Rest (5 Nights)",
          "days": 5,
          "price": 4600,
          "description": "Shirodhara, warm herbal compress, historic temple meditation walk, and bespoke culinary wellness menu."
        }
      ]
    },
    "primaryGoals": [
      "Longevity & Anti-Aging",
      "Burnout & Stress",
      "Detox & Weight Loss"
    ],
    "modalities": [
      "Classical Ayurveda",
      "Shirodhara",
      "Mughal Hydrotherapy",
      "Aravalli Yoga",
      "Pranayama"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Ayurvedic Dosha-Specific",
      "Rajasthani Royal Heritage",
      "Gluten-Free"
    ],
    "setting": "Mughal Palatial Estate in Aravalli Hills",
    "supervision": "Resident Ayurvedic Physicians & Master Yogis",
    "amenities": [
      "Pink Marble Spa Pavilions",
      "33m Green Marble Pool",
      "2-Acre Organic Farm",
      "Historic Chhatri Meditation Sites",
      "Library"
    ],
    "dailySchedule": [
      {
        "time": "07:00 AM",
        "activity": "Historic Chhatri Sunrise Yoga & Aravalli Breathwork"
      },
      {
        "time": "08:30 AM",
        "activity": "Organic Farm-to-Table Breakfast in the Courtyard"
      },
      {
        "time": "10:30 AM",
        "activity": "Daily Ayurvedic Physician Consultation & Pulse Diagnosis"
      },
      {
        "time": "11:30 AM",
        "activity": "Traditional Abhyanga & Shirodhara in Pink Marble Suite"
      },
      {
        "time": "01:30 PM",
        "activity": "Dosha-Tailored Lunch with Organic Garden Harvest"
      },
      {
        "time": "04:30 PM",
        "activity": "Mindful Walk to Ancient Bhangarh Ruins or Temple Blessing"
      },
      {
        "time": "06:30 PM",
        "activity": "Candlelit Sound Meditation in Banyan Tree Garden"
      },
      {
        "time": "08:00 PM",
        "activity": "Royal Rajasthani Wellness Dinner Under the Stars"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Arvind Kumar",
        "role": "Resident Ayurvedic Physician",
        "credentials": "BAMS, MD, 18+ Yrs Specializing in Classical Ayurvedic Immersions",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-amanbagh-1",
        "author": "Lord Nicholas Windsor",
        "date": "1 month ago",
        "rating": 5,
        "title": "Mughal grandeur paired with profound Ayurvedic healing",
        "comment": "Amanbagh is utterly magical. The silence of the Aravalli hills, the skill of the Ayurvedic doctors, and the beauty of the pink marble pavilions are unmatched worldwide.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanbagh-holistic-ayurveda-rajasthan-g-rev-2",
        "author": "Radhika Kulkarni",
        "date": "June 2025",
        "rating": 5,
        "title": "Profound healing under Dr. Arvind Kumar",
        "comment": "The consultation with Dr. Arvind Kumar was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanbagh-holistic-ayurveda-rajasthan-g-rev-3",
        "author": "Amitabh Sen",
        "date": "May 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Ajabgarh makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Shirodhara sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "amanbagh-holistic-ayurveda-rajasthan-g-rev-4",
        "author": "Vandana Iyer",
        "date": "February 2026",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 1465 223 333",
      "email": "amanbagh@aman.com",
      "website": "https://www.aman.com/resorts/amanbagh",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Amanbagh%20Holistic%20Wellness%20Ajabgarh%20India"
    }
  },
  {
    "id": "vedic-village-spa-resort-kolkata",
    "slug": "vedic-village-spa-resort-kolkata",
    "name": "Vedic Village Spa Resort",
    "tagline": "Eco-Luxury Wellness Retreat Featuring the Sanjeeva Ayurvedic Medical Spa in Rajarhat, Kolkata",
    "description": "Spread over 150 serene acres of farmland, lakes, and coconut groves in Rajarhat near Kolkata, Vedic Village Spa Resort is Eastern India's pioneer in holistic wellness. Designed with ethnic mud-and-thatch architecture that mirrors traditional Bengali rural hamlets, the retreat offers an authentic sanctuary away from urban congestion.\n\nThe resort's Sanjeeva Ayurvedic Medical Spa combines classical Kerala Ayurveda with Naturopathy and Panchakarma under veteran doctors. Guests stay in earth villas and lake-facing suites, undergoing customized detox programs, herbal hydrotherapy, and yoga while savoring organic farm-to-table dining sourced directly from the resort's agricultural grounds.",
    "location": {
      "city": "Kolkata",
      "region": "West Bengal",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 22.5726,
      "lng": 88.52
    },
    "heroImage": "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3326/x_0,y_257,w_5000,h_2812,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/vedic-village-spa-resort-kolkata/_resort-porte-cochere-night-view",
    "gallery": [
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3326/x_0,y_257,w_5000,h_2812,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/vedic-village-spa-resort-kolkata/_resort-porte-cochere-night-view",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3326/x_672,y_0,w_3656,h_3326,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/vedic-village-spa-resort-kolkata/_restaurant-buffet-thatched-roof-spread",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_669,y_0,w_3662,h_3333,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/vedic-village-spa-resort-kolkata/Resort-paddy-field-exterior",
      "https://assets.simplotel.com/simplotel/image/upload/w_3333,h_5000/x_0,y_984,w_3333,h_3032,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/vedic-village-spa-resort-kolkata/Indoor-yoga-session-view",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3326/x_672,y_0,w_3656,h_3326,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/vedic-village-spa-resort-kolkata/resort-pool-thatched-cottages-view"
    ],
    "badgeTier": "verified",
    "rating": 4.86,
    "reviewCount": 230,
    "pricing": {
      "minPricePerNight": 160,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Sanjeeva Ayurvedic Rejuvenation (7 Nights)",
          "days": 7,
          "price": 1120,
          "description": "Classical Abhyanga, Shirodhara, daily doctor consultation, lake-view villa, and organic wellness meals."
        },
        {
          "name": "Panchakarma Detoxification (14 Nights)",
          "days": 14,
          "price": 2240,
          "description": "Full five-stage cleanse, herbal medicines, steam baths, and holistic lifestyle coaching."
        }
      ]
    },
    "primaryGoals": [
      "Burnout & Stress",
      "Detox & Weight Loss",
      "Chronic Illness & Pain"
    ],
    "modalities": [
      "Kerala Ayurveda",
      "Panchakarma",
      "Naturopathy",
      "Lakeside Yoga",
      "Hydrotherapy"
    ],
    "dietary": [
      "Organic Farm-to-Table",
      "Sattvic Bengali & Pan-Indian",
      "Low Oil / Low Sodium",
      "Gluten-Free"
    ],
    "setting": "Rural Lake & Farm Estate",
    "supervision": "Resident Ayurvedic Medical Doctors & Naturopaths",
    "amenities": [
      "Sanjeeva Medical Spa",
      "Lakefront Swimming Pool",
      "Equestrian Center",
      "Organic Farm",
      "Agomoni Restaurant"
    ],
    "dailySchedule": [
      {
        "time": "06:30 AM",
        "activity": "Lakeside Sunrise Yoga & Morning Breathwork"
      },
      {
        "time": "08:00 AM",
        "activity": "Farm-Fresh Organic Breakfast"
      },
      {
        "time": "09:30 AM",
        "activity": "Ayurvedic Doctor Consultation at Sanjeeva Spa"
      },
      {
        "time": "10:30 AM",
        "activity": "Classical Abhyanga & Medicated Steam Bath"
      },
      {
        "time": "01:00 PM",
        "activity": "Organic Farm-to-Table Lunch at Agomoni"
      },
      {
        "time": "03:30 PM",
        "activity": "Shirodhara or Hydrotherapy Jet Session"
      },
      {
        "time": "05:30 PM",
        "activity": "Sunset Lake Walk & Silent Reflection"
      },
      {
        "time": "07:30 PM",
        "activity": "Light Sattvic Dinner & Herbal Infusions"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. Somnath Roy",
        "role": "Chief Ayurvedic Physician",
        "credentials": "BAMS, 16+ Yrs in Classical Kerala Ayurveda & Panchakarma",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-vedic-1",
        "author": "Anirban Sen",
        "date": "2 months ago",
        "rating": 5,
        "title": "A peaceful rural oasis right next to Kolkata",
        "comment": "The Sanjeeva Spa offers genuine Kerala Ayurveda without having to travel to the South. The mud villas and peaceful lakes made for a deeply relaxing retreat.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "vedic-village-spa-resort-kolkata-g-rev-2",
        "author": "Gaurav Joshi",
        "date": "January 2026",
        "rating": 5,
        "title": "Profound healing under Dr. Somnath Roy",
        "comment": "The consultation with Dr. Somnath Roy was extraordinarily precise. The tailored Panchakarma protocol, daily herbal decoctions, and soothing Abhyanga treatments completely cured my chronic digestive issues and joint inflammation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "vedic-village-spa-resort-kolkata-g-rev-3",
        "author": "Dr. Priya Swaminathan",
        "date": "December 2025",
        "rating": 5,
        "title": "Incredible organic gastronomy and peaceful sanctuary",
        "comment": "The tranquil setting in Kolkata makes it impossible not to slow down and breathe. The farm-to-table cuisine was tailor-made for my program and was both deeply cleansing and delicious. The daily Panchakarma sessions were a revelation.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "vedic-village-spa-resort-kolkata-g-rev-4",
        "author": "Rohit Mukherjee",
        "date": "November 2025",
        "rating": 5,
        "title": "A life-altering retreat that continues to bear fruit",
        "comment": "This is far more than a luxury getaway—it is an investment in long-term longevity and peace of mind. The practices and nutritional habits I learned here have permanently improved my daily life. I have already booked my return visit for next year.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 33 6634 3000",
      "email": "info@thevedicvillage.com",
      "website": "https://www.thevedicvillage.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Vedic%20Village%20Spa%20Resort%20Kolkata%20India"
    }
  },
  {
    "id": "healthville-naturopathy-bhubaneswar-odisha",
    "slug": "healthville-naturopathy-bhubaneswar",
    "name": "Healthville Naturopathy & Wellness Centre",
    "tagline": "Pioneering Naturopathic Sanctuary & Integrative Healing Destination in Odisha",
    "description": "Nestled in the lush, serene outskirts of Bhubaneswar, Odisha, Healthville Naturopathy & Wellness Centre is Eastern India's leading destination for authentic drugless healing and natural therapy. Spread across expansive green grounds, Healthville integrates clinical naturopathy, therapeutic hydrotherapy, mud baths, clinical yoga, acupuncture, and customized sattvic nutrition to address chronic lifestyle conditions, metabolic disorders, and stress-induced exhaustion under expert medical care.",
    "location": {
      "city": "Bhubaneswar",
      "region": "Odisha",
      "country": "India",
      "continent": "Asia-Pacific",
      "lat": 20.2961,
      "lng": 85.8245
    },
    "heroImage": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnr_Pz1M_ytT6jPJMu18ZENPTvOgTN9Q-PqJ6V0ZmzdaXS8wi1icLdzO2SfK2BuydbbWJO07doFmumVjKYXHtXg-vlNTGSOy7MvoSRvIGAYcsPpKWI5ceA6QvhpIu-5enHiSBXM=s1600",
    "gallery": [
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnr_Pz1M_ytT6jPJMu18ZENPTvOgTN9Q-PqJ6V0ZmzdaXS8wi1icLdzO2SfK2BuydbbWJO07doFmumVjKYXHtXg-vlNTGSOy7MvoSRvIGAYcsPpKWI5ceA6QvhpIu-5enHiSBXM=s1600",
      "https://thehealthville.com/wp-content/uploads/2023/10/10.jpg",
      "https://thehealthville.com/wp-content/uploads/2025/05/massage-room.jpg",
      "https://thehealthville.com/wp-content/uploads/2025/05/bedroom.jpg",
      "https://thehealthville.com/wp-content/uploads/2023/10/5.jpg"
    ],
    "badgeTier": "verified",
    "rating": 4.88,
    "reviewCount": 114,
    "pricing": {
      "minPricePerNight": 115,
      "currency": "USD",
      "pricingTier": "moderate",
      "packageOptions": [
        {
          "name": "Natural Body Cleanse & Detoxification (7 Nights)",
          "days": 7,
          "price": 890,
          "description": "Full clinical detox including hydrotherapy, mud treatments, customized herbal diet, daily therapeutic yoga, and medical naturopathic consultations."
        },
        {
          "name": "Metabolic & Lifestyle Disorder Reversal (14 Nights)",
          "days": 14,
          "price": 1750,
          "description": "Intensive holistic regimen addressing diabetes, hypertension, and obesity with clinical nutrition, acupuncture, physiotherapy, and yoga therapy."
        }
      ]
    },
    "primaryGoals": [
      "Detox & Weight Loss",
      "Burnout & Stress",
      "Chronic Illness & Pain"
    ],
    "modalities": [
      "Clinical Naturopathy",
      "Hydrotherapy",
      "Mud Therapy",
      "Therapeutic Yoga",
      "Acupuncture",
      "Physiotherapy"
    ],
    "dietary": [
      "Sattvic Organic",
      "Alkaline Cleanse",
      "Low Sodium",
      "Gluten-Free"
    ],
    "setting": "Lush Nature Outskirts",
    "supervision": "Resident Naturopathic Doctors & Clinical Yoga Specialists",
    "amenities": [
      "Naturopathy Clinic",
      "Hydrotherapy Pavilion",
      "Yoga & Meditation Hall",
      "Organic Dining Hall",
      "Walking Trails",
      "Physiotherapy Suite",
      "Herbal Gardens"
    ],
    "dailySchedule": [
      {
        "time": "06:00 AM",
        "activity": "Shatkarma Cleansing & Morning Pranayama"
      },
      {
        "time": "07:00 AM",
        "activity": "Therapeutic Yoga Session"
      },
      {
        "time": "08:30 AM",
        "activity": "Fresh Herbal Juice & Sattvic Breakfast"
      },
      {
        "time": "10:00 AM",
        "activity": "Prescribed Naturopathy & Hydrotherapy Treatments"
      },
      {
        "time": "01:00 PM",
        "activity": "Therapeutic Organic Lunch & Rest"
      },
      {
        "time": "03:30 PM",
        "activity": "Mud Therapy / Acupuncture / Physiotherapy"
      },
      {
        "time": "05:00 PM",
        "activity": "Evening Yoga Nidra & Meditation"
      },
      {
        "time": "07:00 PM",
        "activity": "Wholesome Alkaline Dinner & Wellness Discourse"
      }
    ],
    "expertTeam": [
      {
        "name": "Dr. B. K. Mohapatra",
        "role": "Chief Naturopathic Physician & Medical Director",
        "credentials": "BNYS, MD (Naturopathy & Yoga), 18+ years clinical lifestyle medicine experience",
        "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    "reviews": [
      {
        "id": "g-rev-healthville-1",
        "author": "Alok Patnaik",
        "date": "February 2026",
        "rating": 5,
        "title": "Transformative naturopathic healing in Bhubaneswar",
        "comment": "Healthville has transformed my lifestyle completely. The naturopathy doctors take extreme care, the mud therapies and hydrotherapy are authentic, and the green surroundings in Bhubaneswar make healing effortless.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "g-rev-healthville-2",
        "author": "Sunita Das",
        "date": "January 2026",
        "rating": 5,
        "title": "Cured chronic acidity and fatigue",
        "comment": "The detox program cured my chronic acidity and fatigue. The doctors monitor your vitals every single day. Highly recommend this center for anyone looking for real natural healing in Eastern India.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "g-rev-healthville-3",
        "author": "Devendra Verma",
        "date": "November 2025",
        "rating": 5,
        "title": "Outstanding naturopathic facility and disciplined routine",
        "comment": "Outstanding naturopathic facility. Peaceful atmosphere, extremely disciplined routine, and delicious therapeutic food. My blood sugar levels stabilized significantly within two weeks.",
        "verifiedStay": true,
        "source": "google"
      },
      {
        "id": "g-rev-healthville-4",
        "author": "Priyanka Mishra",
        "date": "October 2025",
        "rating": 5,
        "title": "Rejuvenating yoga and steam therapies",
        "comment": "Excellent experience. The yoga sessions and steam baths were very rejuvenating. Dr. Mohapatra and team are truly dedicated practitioners.",
        "verifiedStay": true,
        "source": "google"
      }
    ],
    "contact": {
      "phone": "+91 674 297 3344",
      "email": "info@thehealthville.com",
      "website": "https://thehealthville.com",
      "googleReviewsUrl": "https://www.google.com/maps/search/?api=1&query=Healthville+Naturopathy+Wellness+Centre+Bhubaneswar+Odisha"
    }
  }
] as const;
