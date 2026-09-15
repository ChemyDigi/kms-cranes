import React from "react";
import HomeHero from "@/components/Home/HomeHero";
import HomeFleetSection from "@/components/Home/HomeFleetSection";
import HomeEstimatorSection from "@/components/Home/HomeEstimatorSection";
import CeoQuoteBanner from "@/components/CeoQuoteBanner";
import HomeProjectsSection from "@/components/Home/HomeProjectsSection";
import HomeCtaBanner from "@/components/Home/HomeCtaBanner";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-950">
      <HomeHero />
      <HomeFleetSection />
      <HomeEstimatorSection />
      <CeoQuoteBanner />
      <HomeProjectsSection />
      <HomeCtaBanner />
    </div>
  );
}
