import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const STAT_HIGHLIGHTS = [
  { value: "300T", label: "Max Hoist Capacity", detail: "Single Crane Rating" },
  { value: "35+", label: "Heavy Fleet Machines", detail: "Modern RT & Crawlers" },
  { value: "24/7", label: "Dispatch Readiness", detail: "Kelaniya & Hambantota" },
  { value: "100%", label: "Certified Riggers", detail: "SLSI & OSHA Compliant" },
];

export default function HomeHero() {
  return (
    <section
      className="relative w-full bg-zinc-950 text-white overflow-hidden bg-cover bg-center -mt-18 sm:-mt-20 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "url('/images/hero-crane.jpg')",
      }}
    >
      {/* Dark Black Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.40) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(9, 9, 11, 0.90) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.40) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Hero Main Content */}
        <div className="max-w-3xl space-y-6 my-auto pt-4 sm:pt-8">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.92]">
            Heavy Rigging for Sri Lanka&apos;s Major Lifts.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-2xl leading-relaxed">
            Professionals in the field of heavy machinery &amp; crane hiring. We hire all types of RT cranes, forklifts, boom trucks, low beds for reasonable prices across Sri Lanka.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-4 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-lg"
            >
              <span>Request Instant Quote</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link
              href="/services"
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-display font-bold text-base uppercase tracking-wider backdrop-blur-xs transition-colors flex items-center gap-2"
            >
              <span>Explore Fleet &amp; Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hero Stat Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 mt-auto pb-2">
          {STAT_HIGHLIGHTS.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xs p-5 shadow-xs">
              <div className="font-display font-black text-3xl sm:text-4xl text-white">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#FFCC00] uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-xs font-sans text-zinc-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
