import React from "react";
import FleetShowcase from "@/components/FleetShowcase";

export default function HomeFleetSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <span className="text-xs uppercase text-zinc-500 font-bold tracking-wider block mb-1">
          Our Machine Inventory
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
          Certified Cranes &amp; Transport Equipment
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base font-sans max-w-2xl mt-2">
          Every machine is rigorously maintained, load-tested, and operated by seasoned certified riggers to ensure precision execution across challenging terrains.
        </p>
      </div>

      {/* Interactive Showcase Component */}
      <FleetShowcase />
    </section>
  );
}
