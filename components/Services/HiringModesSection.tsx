import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const HIRING_MODES = [
  {
    title: "WET HIRE (ALL-INCLUSIVE)",
    subtitle: "Recommended for 95% of Construction & Industrial Lifts",
    points: [
      "Fully certified & licensed heavy crane operator",
      "Dedicated professional rigging signalman / banksman",
      "All machinery diesel fuel & hydraulic fluids included",
      "On-site insurance & public liability protection",
      "24/7 maintenance replacement guarantee",
    ],
    highlight: true,
  },
  {
    title: "DRY HIRE (EQUIPMENT ONLY)",
    subtitle: "For Long-Term Contracts with Certified In-House Crews",
    points: [
      "Machine mobilization to project site",
      "Pre-hire third-party inspection certificate",
      "Client provides verified licensed crane operator",
      "Scheduled preventative maintenance by KMS engineers",
      "Reduced monthly base rental rate",
    ],
    highlight: false,
  },
];

export default function HiringModesSection() {
  return (
    <section className="my-12">
      <div className="mb-6">
        <span className="text-xs text-zinc-500 uppercase tracking-wider block font-semibold">
          Flexible Contract Structures
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
          How We Hire: Wet Hire vs. Dry Hire
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {HIRING_MODES.map((mode, idx) => (
          <div
            key={idx}
            className={`p-8 flex flex-col justify-between ${
              mode.highlight ? "bg-zinc-100/80 shadow-xs" : "bg-zinc-50"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-950 uppercase">
                  {mode.title}
                </h3>
                {mode.highlight && (
                  <span className="bg-[#FFCC00] text-black text-xs font-bold px-2.5 py-1 uppercase">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-600 mt-1 mb-6">
                {mode.subtitle}
              </p>

              <ul className="space-y-3">
                {mode.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-sm text-zinc-700 font-sans"
                  >
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6">
              <Link
                href="/contact"
                className={`w-full py-3.5 px-6 font-display font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                  mode.highlight
                    ? "bg-[#FFCC00] text-black hover:bg-black hover:text-white"
                    : "bg-zinc-900 text-white hover:bg-black"
                }`}
              >
                <span>Inquire About {mode.title.split(" ")[0]} Hire</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
