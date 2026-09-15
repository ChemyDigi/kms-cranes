import React from "react";
import ServicesHero from "@/components/Services/ServicesHero";
import HiringModesSection from "@/components/Services/HiringModesSection";
import FleetCatalogSection from "@/components/Services/FleetCatalogSection";
import EngineeringStudiesCallout from "@/components/Services/EngineeringStudiesCallout";

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      <ServicesHero />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HiringModesSection />
        <FleetCatalogSection />
        <EngineeringStudiesCallout />
      </div>
    </div>
  );
}
