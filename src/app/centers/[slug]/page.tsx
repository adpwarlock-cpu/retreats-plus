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

  return <CenterDetailClient center={center} />;
}
