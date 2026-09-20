import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { WELLNESS_CENTERS } from "@/data/centers";
import CenterDetailClient from "./CenterDetailClient";

export function generateStaticParams() {
  return WELLNESS_CENTERS.map((center) => ({
    slug: center.slug,
  }));
}

export default async function CenterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const center = WELLNESS_CENTERS.find((c) => c.slug === slug);

  if (!center) {
    notFound();
  }

  // Find similar or nearby centers based on country, region, setting, and shared goals
  const otherCenters = WELLNESS_CENTERS.filter((c) => c.id !== center.id);
  const scoredCenters = otherCenters.map((c) => {
    let score = 0;
    if (c.location.country === center.location.country) score += 6;
    if (c.location.continent === center.location.continent) score += 2;
    if (c.setting === center.setting) score += 2;
    const sharedGoals = c.primaryGoals.filter((g) => center.primaryGoals.includes(g));
    score += sharedGoals.length * 2;
    return { center: c, score };
  });

  scoredCenters.sort((a, b) => b.score - a.score);
  const similarCenters = scoredCenters.slice(0, 3).map((item) => item.center);

  return <CenterDetailClient center={center} similarCenters={similarCenters} />;
}
