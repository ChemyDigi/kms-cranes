import React from "react";
import AboutHero from "@/components/About/AboutHero";
import JourneySection from "@/components/About/JourneySection";
import CoreValuesSection from "@/components/About/CoreValuesSection";
import SafetyProtocolsSection from "@/components/About/SafetyProtocolsSection";
import CeoQuoteBanner from "@/components/CeoQuoteBanner";
import DepotLocationsSection from "@/components/About/DepotLocationsSection";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      <AboutHero />
      <JourneySection />
      <CoreValuesSection />
      <SafetyProtocolsSection />
      <CeoQuoteBanner />
      <DepotLocationsSection />
    </div>
  );
}
