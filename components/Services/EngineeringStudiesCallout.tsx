import React from "react";
import Link from "next/link";

export default function EngineeringStudiesCallout() {
  return (
    <section className="my-16 p-8 sm:p-12 bg-zinc-950 text-white">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-wider text-[#FFCC00] font-bold">
          Heavy Lift Engineering Services
        </span>
        <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
          Lift Plans, CAD Feasibility &amp; Ground Bearing Calculations
        </h3>
        <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed">
          For critical, dual-crane tandem lifts, high-voltage proximity lifts, or sensitive ground conditions, KMS provides engineered lift studies with CAD drawings, ground bearing calculations, and OSHA safety method statements.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#FFCC00] text-black font-display font-black text-base uppercase tracking-wider hover:bg-white transition-colors"
          >
            Request Engineering Study
          </Link>
          <a
            href="tel:+94112915566"
            className="px-6 py-3 bg-zinc-800 text-white font-display font-bold text-base uppercase tracking-wider hover:bg-zinc-700 transition-colors"
          >
            Call Rigging Team: +94 11 291 5566
          </a>
        </div>
      </div>
    </section>
  );
}
