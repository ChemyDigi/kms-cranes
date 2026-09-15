import React from "react";
import ContactHero from "@/components/Contact/ContactHero";
import DirectDispatchInfo from "@/components/Contact/DirectDispatchInfo";
import RfqForm from "@/components/Contact/RfqForm";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      <ContactHero />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-8">
            <DirectDispatchInfo />
          </div>
          <div className="lg:col-span-7">
            <RfqForm />
          </div>
        </div>
      </div>
    </div>
  );
}
