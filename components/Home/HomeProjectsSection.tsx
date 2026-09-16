import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const MAJOR_PROJECTS = [
  {
    name: "Colombo Port Expansion (WCT & ECT)",
    scope: "Heavy Gantry & Precast Girder Placement",
    tonnage: "150T - 300T Crawlers",
  },
  {
    name: "Central Expressway (CEP) Section II",
    scope: "Bridge Deck Span Lifting & Viaduct Beams",
    tonnage: "80T - 130T RT Cranes",
  },
  {
    name: "Mannar Wind Power Project",
    scope: "Nacelle & High-Altitude Rotor Erection",
    tonnage: "250T - 300T High-Reach",
  },
  {
    name: "Kelani River New Bridge Project",
    scope: "Steel Arch & Anchor Girder Positioning",
    tonnage: "100T - 160T Heavy Lifts",
  },
];

export default function HomeProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Context (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs uppercase text-[#FFCC00] font-bold tracking-wider block mb-1">
              Track Record
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
              Trusted Across Sri Lanka&apos;s Landmark Infrastructure
            </h2>
          </div>
          <p className="text-zinc-600 text-base font-sans leading-relaxed">
            From marine breakwaters to elevated expressway spans, contractors trust KMS Cranes for verified lift plans, computerized safety limiters, and dependable machine uptime.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0" />
              <span>Engineered 3D lift studies &amp; ground pressure calculations</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0" />
              <span>Experienced banksmen and certified rigging supervisors</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0" />
              <span>Full comprehensive equipment and third-party liability cover</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-zinc-950 hover:underline"
            >
              <span>Read About Our Safety Standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Projects List (7 cols) */}
        <div className="lg:col-span-7 bg-zinc-50 p-6 sm:p-8 shadow-xs">
          <div className="text-xs text-[#FFCC00] uppercase tracking-wider font-bold pb-4">
            Selected Major Lifts Completed
          </div>

          <div className="space-y-4">
            {MAJOR_PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs"
              >
                <div>
                  <div className="font-display font-bold text-lg text-zinc-950 uppercase">
                    {project.name}
                  </div>
                  <div className="text-xs text-zinc-600 font-sans mt-0.5">
                    {project.scope}
                  </div>
                </div>
                <span className="text-xs text-zinc-700 bg-zinc-100 px-2.5 py-1 font-medium self-start sm:self-auto">
                  {project.tonnage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
