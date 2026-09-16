import React from "react";
import Image from "next/image";

export default function JourneySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Story Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider font-bold text-[#FFCC00] block">
            Our Journey
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 uppercase tracking-tight">
            15+ Years of Powering Sri Lanka&apos;s Growth
          </h2>
          <p className="text-zinc-700 text-base font-sans leading-relaxed">
            When Sri Lanka embarked on unprecedented infrastructure expansion, from the Southern and Central Expressways to the Colombo Port expansion, wind power initiatives, and industrial manufacturing zones, the need for reliable, modern heavy lifting equipment became critical.
          </p>
          <p className="text-zinc-600 text-base font-sans leading-relaxed">
            KMS Cranes was built to bridge this gap: investing continuously in high-tonnage Rough Terrain (RT) cranes, heavy lattice crawlers, versatile boom trucks, and multi-axle low bed trailers. We do not just rent machines; we engineer safe lifting solutions that keep your projects ahead of schedule and within budget.
          </p>

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-zinc-50 p-4">
              <div className="font-display font-black text-3xl text-black">15+</div>
              <div className="text-xs text-zinc-500 mt-0.5 font-bold">YEARS ACTIVE</div>
            </div>
            <div className="bg-zinc-50 p-4">
              <div className="font-display font-black text-3xl text-black">35+</div>
              <div className="text-xs text-zinc-500 mt-0.5 font-bold">ACTIVE FLEET</div>
            </div>
            <div className="bg-zinc-50 p-4">
              <div className="font-display font-black text-3xl text-black">1,400+</div>
              <div className="text-xs text-zinc-500 mt-0.5 font-bold">SUCCESSFUL LIFTS</div>
            </div>
          </div>
        </div>

        {/* Right Image Feature (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[400px] w-full overflow-hidden bg-zinc-900 shadow-sm">
            <Image
              src="/images/hero-crane.jpg"
              alt="KMS Cranes lifting operation on Sri Lanka infrastructure project"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 shadow-xs">
              <div className="text-xs text-black font-bold uppercase">
                Kelaniya Headquarters Depot
              </div>
              <div className="text-xs text-zinc-600 font-sans mt-1">
                Fully equipped maintenance workshop with hydraulic test rigs and load test beds.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
