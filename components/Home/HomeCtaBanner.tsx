import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function HomeCtaBanner() {
  return (
    <section className="w-full bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase text-[#FFCC00] font-bold tracking-wider">
          Islandwide Crane Mobilization
        </span>
        <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
          Need a Crane on Your Job Site Tomorrow?
        </h3>
        <p className="text-zinc-600 text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
          Our Kelaniya and Hambantota depots maintain round-the-clock dispatch readiness. Call our direct line for instant equipment availability and transparent rates.
        </p>

        <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
          <a
            href="tel:+94112915566"
            className="px-7 py-4 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-colors flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call Dispatch: +94 11 291 5566</span>
          </a>
          <Link
            href="/contact"
            className="px-7 py-4 bg-white text-zinc-950 font-display font-bold text-lg uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-xs"
          >
            Submit Written RFQ
          </Link>
        </div>
      </div>
    </section>
  );
}
