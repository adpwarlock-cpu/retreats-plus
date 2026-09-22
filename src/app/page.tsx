"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { WELLNESS_CENTERS } from "@/data/centers";
import {
  Search,
  Sparkles,
  ShieldCheck,
  Award,
  Scale,
  HeartHandshake,
  Compass,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Leaf,
  HeartPulse,
  Sun,
  Activity,
  CheckCircle2,
  MapPin,
  Building2,
  BookOpen,
  FileText,
  Clock,
  ExternalLink,
} from "lucide-react";

const wellnessCities = [
  {
    city: "Ubud",
    country: "Bali, Indonesia",
    tag: "Spiritual Heart & Ayurvedic Healing",
    retreatCount: "6 Sanctuaries",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    query: "Ubud",
    highlights: "COMO Shambhala, Fivelements, Svarga Loka",
  },
  {
    city: "Koh Samui",
    country: "Thailand",
    tag: "Tropical Detox & Pilates Reformer",
    retreatCount: "5 Sanctuaries",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    query: "Koh+Samui",
    highlights: "Kamalaya, Absolute Sanctuary, Samahita",
  },
  {
    city: "Hua Hin",
    country: "Thailand",
    tag: "Global Pioneer in Destination Wellness",
    retreatCount: "World Flagship",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    query: "Hua+Hin",
    highlights: "Chiva-Som International Health Resort",
  },
  {
    city: "Phuket",
    country: "Thailand",
    tag: "Integrated Medical Wellness & Sports",
    retreatCount: "4 Sanctuaries",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    query: "Phuket",
    highlights: "Amanpuri, Thanyapura, The LifeCo",
  },
  {
    city: "Kerala & Western Ghats",
    country: "India",
    tag: "5,000-Year Cradle of Classical Ayurveda",
    retreatCount: "18 Sanctuaries",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    query: "Kerala",
    highlights: "Carnoustie, Kalari Rasayana, Sitaram, Mekosha",
  },
  {
    city: "Himalayas & Rishikesh",
    country: "India",
    tag: "Sacred Mountain Healing & Meditation",
    retreatCount: "6 Sanctuaries",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    query: "Himalayas",
    highlights: "Ananda, Vana, Abhayaranya, Parmarth Niketan",
  },
  {
    city: "Kandy & Tangalle",
    country: "Sri Lanka",
    tag: "Mountain Mists & Coastal Ayurvedic Wisdom",
    retreatCount: "4 Sanctuaries",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    query: "Sri+Lanka",
    highlights: "Santani, Ulpotha, Barberyn Reef",
  },
  {
    city: "Kyoto & Ishikawa",
    country: "Japan",
    tag: "Zen Monastic Stillness & Thermal Onsens",
    retreatCount: "3 Sanctuaries",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    query: "Japan",
    highlights: "HOSHINOYA Kyoto, Beniya Mukayu, Amanemu",
  },
  {
    city: "Da Nang & Hue",
    country: "Vietnam",
    tag: "Coastal Breathwork & Mineral Springs",
    retreatCount: "3 Sanctuaries",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    query: "Vietnam",
    highlights: "TIA Wellness Resort, Alba Wellness Valley",
  },
  {
    city: "Noonu Atoll & Bodufushi",
    country: "Maldives",
    tag: "Ocean Thalassotherapy & Sound Discovery",
    retreatCount: "3 Sanctuaries",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    query: "Maldives",
    highlights: "JOALI BEING, Soneva Soul, Noku Maldives",
  },
  {
    city: "Paro & Phobjikha",
    country: "Bhutan",
    tag: "High-Altitude Longevity & Hot Stone Baths",
    retreatCount: "3 Sanctuaries",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80",
    query: "Bhutan",
    highlights: "Amankora, Six Senses Bhutan, Gangtey Lodge",
  },
  {
    city: "Montreux & Lake Geneva",
    country: "Switzerland",
    tag: "Pioneering Cellular Rejuvenation & Epigenetics",
    retreatCount: "World Flagship",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    query: "Switzerland",
    highlights: "Clinique La Prairie Longevity Hub",
  },
];

const contentArticles = [
  {
    title: "The Clinical Distinction: Ayurvedic Panchakarma vs. Modern Medical Fasting",
    category: "Clinical Comparison",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    summary: "A physician-reviewed breakdown contrasting 5-action Vedic purification (Vamana, Virechana, Basti) with European Modern Mayr diagnostic gut cleansing.",
    source: "RETREATS+ Clinical Advisory Board",
    tag: "Evidence-Based",
  },
  {
    title: "Nervous System Recalibration: Overcoming Executive Burnout in Southeast Asia",
    category: "Neuro-Recovery",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    summary: "Why vagus nerve stimulation, digital detox, and circadian light therapies achieve deeper cortisol reset than standard vacations.",
    source: "Integrative Neuroscience Review",
    tag: "Mental Health",
  },
  {
    title: "Cellular Longevity & Epigenetic Clocks: Inside Asia's Most Advanced Medical Retreats",
    category: "Longevity Medicine",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    summary: "How cutting-edge centers in Thailand, Japan, and Switzerland use NAD+ infusions, hyperbaric oxygen (HBOT), and biological age tracking.",
    source: "Global Longevity Institute",
    tag: "Biohacking",
  },
  {
    title: "The Complete Guide to Authentic Ayurvedic Retreats: Kerala vs. Sri Lanka",
    category: "Destination Guide",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    summary: "How to distinguish NABH-accredited medical hospitals from tourist day spas, pack for monsoon treatments, and navigate Sattvic diets.",
    source: "Asian Heritage Medicine Council",
    tag: "Travel Guide",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("all");
  const [selectedContinent, setSelectedContinent] = useState("all");

  const categories = [
    {
      title: "Longevity & Anti-Aging",
      count: "18 Centers",
      icon: HeartPulse,
      slug: "Longevity+%26+Anti-Aging",
      description: "Cellular genomics, hyperbaric oxygen, stem cells, and biological age reversal.",
    },
    {
      title: "Burnout & Nervous System",
      count: "34 Centers",
      icon: Sun,
      slug: "Burnout+%26+Stress",
      description: "Cortisol recalibration, somatic therapies, neuro-feedback, and deep rest.",
    },
    {
      title: "Ayurvedic Panchakarma",
      count: "22 Centers",
      icon: Leaf,
      slug: "Ayurveda+%26+Panchakarma",
      description: "Centuries-old pulse diagnostics, herbal purifications, and dosha balance.",
    },
    {
      title: "Detox & Metabolic Reset",
      count: "29 Centers",
      icon: Flame,
      slug: "Detox+%26+Weight+Loss",
      description: "Modern Mayr cure, colon hydrotherapy, fasting protocols, and liver detox.",
    },
    {
      title: "Spiritual & Mindfulness",
      count: "41 Centers",
      icon: Compass,
      slug: "Spiritual+Awakening",
      description: "Sacred ceremonies, sound alchemy, silent meditation, and emotional release.",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("query", searchQuery.trim());
    if (selectedGoal !== "all") params.set("goal", selectedGoal);
    if (selectedContinent !== "all") params.set("continent", selectedContinent);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-sand-100/70 via-[#FBF9F5] to-[#FBF9F5] border-b border-[#E8DFCE]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#D9CAA9] px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold text-primary-950 uppercase tracking-wider">
                The Independent Global Standard in Wellness
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Find the Retreat Your <br className="hidden sm:inline" />
              <span className="italic font-normal text-primary-800">Body & Mind</span> Truly Need.
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore verified wellness retreats, longevity clinics, and Ayurvedic sanctuaries worldwide. Filter by exact modalities, certified medical supervision, and wellness intentions.
            </p>

            {/* Search Box Card */}
            <div className="mt-8 bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-stone-200/80 max-w-4xl mx-auto">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Search Term */}
                <div className="sm:col-span-4 relative flex items-center px-3 py-2 bg-sand-50 rounded-2xl border border-stone-200/60 focus-within:border-primary-700 transition-colors">
                  <Search className="w-4 h-4 text-stone-400 shrink-0 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Destination, clinic, or modality..."
                    className="w-full bg-transparent text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none"
                  />
                </div>

                {/* Goal Dropdown */}
                <div className="sm:col-span-3 px-3 py-2 bg-sand-50 rounded-2xl border border-stone-200/60">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 mb-0.5">
                    Primary Goal
                  </label>
                  <select
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Any Wellness Goal</option>
                    <option value="Longevity & Anti-Aging">Longevity & Anti-Aging</option>
                    <option value="Burnout & Stress">Burnout & Stress</option>
                    <option value="Detox & Weight Loss">Detox & Weight Loss</option>
                    <option value="Ayurveda & Panchakarma">Ayurveda & Panchakarma</option>
                    <option value="Spiritual Awakening">Spiritual Awakening</option>
                    <option value="Emotional & Trauma Healing">Emotional Healing</option>
                  </select>
                </div>

                {/* Region Dropdown */}
                <div className="sm:col-span-3 px-3 py-2 bg-sand-50 rounded-2xl border border-stone-200/60">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 mb-0.5">
                    Region
                  </label>
                  <select
                    value={selectedContinent}
                    onChange={(e) => setSelectedContinent(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Everywhere (Global)</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia-Pacific">Asia-Pacific</option>
                    <option value="North America">North America</option>
                    <option value="Latin America">Latin America</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Secondary CTA: Quiz Link */}
              <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-600">
                <span>Not sure what you need?</span>
                <Link
                  href="/quiz"
                  className="font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1 underline underline-offset-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Take the 60-Second Retreat Matcher Quiz
                </Link>
              </div>
            </div>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-700" />
                <span>Verified Center Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-primary-700" />
                <span>Side-by-Side Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-primary-700" />
                <span>Direct Inquiries, No Markups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Intentions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-800 block mb-1">
              Curated by Outcome
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Explore by Wellness Intention
            </h2>
          </div>
          <Link
            href="/search"
            className="text-xs font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1.5"
          >
            Browse all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href={`/search?goal=${cat.slug}`}
                className="group bg-white p-5 rounded-2xl border border-stone-200/80 hover:border-primary-700/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sand-100 group-hover:bg-primary-800 text-stone-800 group-hover:text-gold flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-primary-800 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 group-hover:text-primary-800 font-medium">
                  <span>{cat.count}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Explore by City & Destination */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-800">
                Curated Destination Hubs
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Explore Wellness Retreats by City & Destination
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Browse world-renowned wellness havens across Asia and beyond, each offering distinct microclimates, healing traditions, and sanctuary clusters.
            </p>
          </div>
          <Link
            href="/search"
            className="text-xs font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1.5 shrink-0"
          >
            <span>View all destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellnessCities.map((dest) => (
            <Link
              key={dest.city}
              href={`/search?query=${dest.query}`}
              className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Destination Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={dest.image}
                  alt={dest.city}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Retreat Count Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-primary-900 shadow-sm border border-stone-200/60">
                  {dest.retreatCount}
                </div>

                {/* City & Country on Image */}
                <div className="absolute bottom-3 inset-x-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-sand-200 block">
                    {dest.country}
                  </span>
                  <h3 className="font-serif text-xl font-bold tracking-tight">
                    {dest.city}
                  </h3>
                </div>
              </div>

              {/* Destination Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <p className="text-xs font-semibold text-primary-900 leading-snug">
                  {dest.tag}
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="truncate max-w-[180px]">{dest.highlights}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary-800 shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Wellness Guides, Expert Articles & Content Sources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-800">
                Authoritative Knowledge Base
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Wellness Guides, Expert Articles & Content Sources
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Physician-reviewed guides and evidence-based research on Panchakarma, biological age reversal, executive burnout recovery, and holistic medicine.
            </p>
          </div>
          <Link
            href="/search"
            className="text-xs font-bold text-primary-800 hover:text-primary-950 flex items-center gap-1.5 shrink-0"
          >
            <span>Explore all resources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentArticles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-primary-950/80 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-gold/30">
                    {article.category}
                  </div>
                </div>
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-stone-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-medium">{article.tag}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 leading-snug hover:text-primary-800 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="font-medium truncate">{article.source}</span>
                  <span className="text-primary-800 font-bold hover:underline cursor-pointer flex items-center gap-1">
                    Read Guide
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Quiz Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary-950 text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl border border-primary-900">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-800/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary-900/80 text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Retreat Matcher Algorithm
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Let Our 60-Second Quiz Match You with Your Ideal Retreat.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Answer 4 questions regarding your wellness objectives, preferred geography, medical supervision level, and budget. Receive tailored recommendations ranked by compatibility percentage.
            </p>
            <div className="pt-2">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary-950 font-bold px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <span>Start Free Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Why We are Way Better than Standard Directories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-800">
            Uncompromising Transparency
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            How RETREATS+ Sets the Global Benchmark
          </h2>
          <p className="text-stone-600 text-sm">
            We built Retreats Plus because legacy directories are either cluttered with unverified listings or charge inflated middleman booking fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sand-100 text-primary-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Rigorous 4-Step Verification
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Every verified center undergoes credential checks for its medical and holistic staff, facility health inspections, and confirmation of transparent pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sand-100 text-primary-800 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Side-by-Side Comparison
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Compare up to 3 centers side-by-side: evaluate doctor-to-guest ratios, daily schedules, modalities, and real guest reviews without juggling 10 open browser tabs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sand-100 text-primary-800 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Direct Contact & No Markups
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              You communicate directly with the retreat center’s concierge. No hidden commissions, no inflated middleman pricing, and direct booking guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* For Center Owners CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand-100 rounded-3xl p-8 sm:p-12 border border-[#D9CAA9] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-800 block">
              For Retreat Owners & Practitioners
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              List Your Wellness Sanctuary on RETREATS+
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              It is 100% free to list your center. Showcase your modalities, doctor credentials, and retreat calendar to over 250,000 monthly high-intent wellness travelers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/list-a-center"
              className="bg-primary-800 hover:bg-primary-900 text-white font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-sm hover:shadow transition-all"
            >
              List Your Center (Free)
            </Link>
            <Link
              href="/pricing"
              className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-sm transition-all"
            >
              View Advertising Tiers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
