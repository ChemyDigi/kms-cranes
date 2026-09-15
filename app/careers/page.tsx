import React from "react";
import CareersHero from "@/components/Careers/CareersHero";
import CrewBenefitsSection from "@/components/Careers/CrewBenefitsSection";
import JobVacanciesSection from "@/components/Careers/JobVacanciesSection";

export default function CareersPage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      <CareersHero />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CrewBenefitsSection />
        <JobVacanciesSection />
      </div>
    </div>
  );
}
