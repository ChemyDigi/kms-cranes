import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function DepotLocationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-wider font-bold text-zinc-500 block">
            Strategic Reach
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 uppercase tracking-tight">
            Two Hubs Covering 100% of Sri Lanka
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base font-sans leading-relaxed">
            We operate two primary heavy equipment yards that allow rapid dispatch across all 9 provinces:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-zinc-50 shadow-xs">
              <div className="font-display font-bold text-lg text-zinc-950 uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-black" />
                <span>Kelaniya / Colombo Main Yard</span>
              </div>
              <p className="text-xs text-zinc-600 font-sans mt-1">
                15 minutes from Colombo Port terminals, Western Container Terminal, and direct on-ramp to Central &amp; Katunayake Expressways.
              </p>
            </div>

            <div className="p-4 bg-zinc-50 shadow-xs">
              <div className="font-display font-bold text-lg text-zinc-950 uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-black" />
                <span>Hambantota Southern Depot</span>
              </div>
              <p className="text-xs text-zinc-600 font-sans mt-1">
                Serving Hambantota International Port, Mirijjawila Export Zone, Mattala, and southern highway link projects.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFCC00] text-black font-display font-bold text-base uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow-xs"
            >
              <span>Contact Depot Supervisor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 bg-zinc-50 p-6 sm:p-8 shadow-xs">
          <div className="text-xs text-zinc-600 uppercase tracking-wider pb-4 font-bold">
            Provincial Dispatch Radii &bull; Sri Lanka
          </div>

          <div className="mt-4 space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 bg-white shadow-xs">
              <span className="text-zinc-950 font-bold">Western &amp; Sabaragamuwa</span>
              <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">Dispatch Time: 2 - 4 Hours</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white shadow-xs">
              <span className="text-zinc-950 font-bold">Southern Province</span>
              <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">Dispatch Time: 2 - 6 Hours</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white shadow-xs">
              <span className="text-zinc-950 font-bold">Central &amp; North Western</span>
              <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">Dispatch Time: 4 - 8 Hours</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white shadow-xs">
              <span className="text-zinc-950 font-bold">Northern &amp; Eastern Provinces</span>
              <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">Dispatch Time: 12 - 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
