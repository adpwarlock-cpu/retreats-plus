"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WELLNESS_CENTERS } from "@/data/centers";
import { calculateQuizMatches, QuizAnswers, QuizMatchResult } from "@/lib/filterUtils";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Star,
  Award,
  ShieldCheck,
  RotateCcw,
  HeartPulse,
  Sun,
  Leaf,
  Flame,
  Compass,
  Heart,
} from "lucide-react";

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    goal: "",
    setting: "",
    supervision: "",
    budget: "",
  });
  const [results, setResults] = useState<QuizMatchResult[] | null>(null);

  const totalSteps = 4;

  const handleSelect = (field: keyof QuizAnswers, value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      const matched = calculateQuizMatches(WELLNESS_CENTERS, updated);
      setResults(matched);
    }
  };

  const handleRestart = () => {
    setAnswers({
      goal: "",
      setting: "",
      supervision: "",
      budget: "",
    });
    setResults(null);
    setCurrentStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 min-h-[75vh]">
      {/* Quiz Progress & Header */}
      {!results ? (
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-sand-100 text-primary-900 text-xs font-bold px-3 py-1 rounded-full border border-sand-200">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Retreat Matcher 60-Second Algorithm
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Find Your Ideal Wellness Sanctuary
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
              Answer 4 simple questions so our clinical and holistic matching engine can pair you with the exact right retreat.
            </p>

            {/* Step progress bar */}
            <div className="max-w-xs mx-auto pt-2">
              <div className="flex justify-between text-[11px] font-bold text-stone-400 mb-1">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-800 transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* STEP 1: GOAL */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-center text-stone-900">
                What is your primary wellness intention?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    title: "Longevity & Anti-Aging",
                    desc: "Cellular genomics, hyperbaric oxygen, biological age reduction",
                    icon: HeartPulse,
                  },
                  {
                    title: "Burnout & Stress",
                    desc: "Nervous system reset, deep rest, cortisol recalibration",
                    icon: Sun,
                  },
                  {
                    title: "Detox & Weight Loss",
                    desc: "Modern Mayr cure, colon hydrotherapy, fasting & metabolic reset",
                    icon: Flame,
                  },
                  {
                    title: "Ayurveda & Panchakarma",
                    desc: "Centuries-old pulse diagnosis, dosha balance, authentic herbal oils",
                    icon: Leaf,
                  },
                  {
                    title: "Spiritual Awakening",
                    desc: "Sacred ceremonies, sound healing alchemy, deep meditation",
                    icon: Compass,
                  },
                  {
                    title: "Emotional & Trauma Healing",
                    desc: "Somatic release, grief processing, restorative canyon journeys",
                    icon: Heart,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      onClick={() => handleSelect("goal", item.title)}
                      className="text-left p-5 rounded-2xl bg-white border border-stone-200 hover:border-primary-800 hover:bg-sand-50 transition-all shadow-sm hover:shadow group flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sand-100 group-hover:bg-primary-800 text-stone-800 group-hover:text-gold flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-primary-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SETTING */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-center text-stone-900">
                Where does your body feel most at peace?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    title: "Lakefront",
                    desc: "Alpine lakes, peaceful waters, tranquil reflection (e.g. Switzerland)",
                  },
                  {
                    title: "Lush Rainforest",
                    desc: "Sacred rivers, jungle canopy, tropical immersion (e.g. Bali, Philippines)",
                  },
                  {
                    title: "Mountain Sanctuary",
                    desc: "High altitude, crisp air, panoramic peaks (e.g. Himalayas, Alps)",
                  },
                  {
                    title: "Coastal/Beachfront",
                    desc: "Ocean breeze, saltwater hydrotherapy, Mediterranean cliff views (e.g. Spain)",
                  },
                  {
                    title: "Desert Oasis",
                    desc: "Vortex energy, silent canyons, sacred red rocks (e.g. Sedona)",
                  },
                  {
                    title: "Any",
                    desc: "Open to any inspiring geography — focus on program quality",
                  },
                ].map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleSelect("setting", item.title)}
                    className="text-left p-5 rounded-2xl bg-white border border-stone-200 hover:border-primary-800 hover:bg-sand-50 transition-all shadow-sm hover:shadow group"
                  >
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-primary-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: SUPERVISION */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-center text-stone-900">
                What level of clinical or practitioner guidance do you require?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    title: "Medical Doctor Led",
                    desc: "Board-certified MDs, advanced diagnostic labs, biomarker tests, IV therapy",
                  },
                  {
                    title: "Master Holistic Healers",
                    desc: "Traditional Ayurvedic doctors (BAMS), Balinese Balians, sound masters",
                  },
                  {
                    title: "Any",
                    desc: "Flexible with either clinical MDs or renowned holistic practitioners",
                  },
                ].map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleSelect("supervision", item.title)}
                    className="text-left p-5 rounded-2xl bg-white border border-stone-200 hover:border-primary-800 hover:bg-sand-50 transition-all shadow-sm hover:shadow group"
                  >
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-primary-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: BUDGET */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-center text-stone-900">
                What is your estimated nightly investment?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    title: "accessible",
                    label: "Accessible Tier",
                    desc: "Under $400 / night (all meals & program included)",
                  },
                  {
                    title: "moderate",
                    label: "Moderate Tier",
                    desc: "$400 - $800 / night (luxury eco-resort & bespoke treatments)",
                  },
                  {
                    title: "luxury",
                    label: "Luxury Tier",
                    desc: "$800 - $1,800 / night (world-class spa & integrated doctors)",
                  },
                  {
                    title: "ultra-luxury",
                    label: "Ultra-Luxury & Medical",
                    desc: "$1,800+ / night (pioneering cellular longevity & private suites)",
                  },
                  {
                    title: "Any",
                    label: "Flexible / Any Budget",
                    desc: "Recommend the best matches regardless of price tier",
                  },
                ].map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleSelect("budget", item.title)}
                    className="text-left p-5 rounded-2xl bg-white border border-stone-200 hover:border-primary-800 hover:bg-sand-50 transition-all shadow-sm hover:shadow group"
                  >
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-primary-900">
                      {item.label}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Back button */}
          {currentStep > 1 && (
            <div className="pt-4 flex justify-start">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to previous step
              </button>
            </div>
          )}
        </div>
      ) : (
        /* RESULTS VIEW */
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-3 pb-6 border-b border-stone-200">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Matching Complete
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Your Personalized Retreat Matches
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
              Based on your intention for <span className="font-bold text-stone-900">{answers.goal}</span>, we matched you with these top-ranked sanctuaries:
            </p>
            <button
              onClick={handleRestart}
              className="text-xs text-primary-800 font-bold hover:underline flex items-center gap-1 mx-auto"
            >
              <RotateCcw className="w-3 h-3" />
              Retake Quiz
            </button>
          </div>

          {/* Top 3 Result Cards */}
          <div className="space-y-6">
            {results.slice(0, 3).map((res, idx) => (
              <div
                key={res.center.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center"
              >
                {/* Center Image */}
                <div className="relative w-full md:w-64 aspect-[16/10] rounded-2xl overflow-hidden shrink-0 bg-stone-100">
                  <Image
                    src={res.center.heroImage}
                    alt={res.center.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                  <div className="absolute top-2 left-2 bg-primary-950/90 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full">
                    #{idx + 1} Best Match
                  </div>
                </div>

                {/* Details & Match score */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-primary-700" />
                      <span>
                        {res.center.location.city}, {res.center.location.country}
                      </span>
                    </div>

                    {/* Score badge */}
                    <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      {res.score}% Match
                    </div>
                  </div>

                  <Link href={`/centers/${res.center.slug}`}>
                    <h3 className="font-serif text-xl font-bold text-stone-900 hover:text-primary-800 transition-colors">
                      {res.center.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {res.center.tagline}
                  </p>

                  {/* Why it matches */}
                  <div className="space-y-1 bg-sand-50 p-3 rounded-xl border border-stone-200/60">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">
                      Why this matches you:
                    </span>
                    <ul className="text-xs text-stone-700 space-y-0.5">
                      {res.reasons.map((r, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-[10px] text-stone-400 block">Starting from</span>
                      <span className="font-serif text-base font-bold text-stone-900">
                        {res.center.pricing.currency} {res.center.pricing.minPricePerNight.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-stone-500 ml-1">/ night</span>
                    </div>

                    <Link
                      href={`/centers/${res.center.slug}`}
                      className="bg-primary-800 hover:bg-primary-900 text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>View Sanctuary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              href="/search"
              className="text-xs font-bold text-stone-600 hover:text-stone-900 underline"
            >
              Or browse all wellness centers in the full directory →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
