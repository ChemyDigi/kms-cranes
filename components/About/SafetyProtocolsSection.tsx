import React from "react";
import { CheckCircle2 } from "lucide-react";

const SAFETY_PILLARS = [
  {
    standard: "NDT BOOM INSPECTION",
    frequency: "Annual Mandatory",
    details: "Magnetic particle and ultrasonic non-destructive testing on all boom weld seams, telescoping cylinders, and hook assemblies.",
  },
  {
    standard: "SLI COMPUTERIZED CALIBRATION",
    frequency: "Quarterly Audit",
    details: "Safe Load Indicators (SLI) calibrated against certified test weights to ensure automated cut-offs function with millimeter precision.",
  },
  {
    standard: "WIRE ROPE & TACKLE AUDIT",
    frequency: "Monthly Inspection",
    details: "Continuous micrometer inspection of wire ropes, sheaves, and certified rigging shackles to retire tackle prior to fatigue thresholds.",
  },
  {
    standard: "GROUND BEARING FEASIBILITY",
    frequency: "Pre-Lift Requirement",
    details: "Engineered calculation of ground pressure to deploy appropriate hardwood timber mats and steel outrigger spreader plates.",
  },
];

export default function SafetyProtocolsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-zinc-50/70">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-wider font-bold text-zinc-500 block">
          Zero Tolerance for Compromise
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
          Quality &amp; Safety Assurance Protocols
        </h2>
        <p className="max-w-2xl text-zinc-600 text-sm font-sans mt-2">
          Every piece of heavy machinery in our yard is subjected to continuous preventive inspection and third-party validation before stepping onto your site.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SAFETY_PILLARS.map((pil, idx) => (
          <div
            key={idx}
            className="bg-white p-6 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-3">
                <span className="font-display font-black text-2xl text-zinc-950 uppercase">
                  {pil.standard}
                </span>
                <span className="bg-zinc-100 text-black text-[11px] font-bold px-2.5 py-1 uppercase">
                  {pil.frequency}
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-700 font-sans leading-relaxed">
                {pil.details}
              </p>
            </div>

            <div className="mt-6 pt-3 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>COMPLIANT UNDER ISO 9001:2015 DIRECTIVES</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
