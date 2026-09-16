import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface FleetDetail {
  id: string;
  category: string;
  name: string;
  image: string;
  capacity: string;
  boomLength: string;
  jibLength: string;
  drive: string;
  engine: string;
  outriggerSpread: string;
  description: string;
  features: string[];
}

const FLEET_SERVICES: FleetDetail[] = [
  {
    id: "rt-cranes",
    category: "Rough Terrain Cranes",
    name: "RT Crane Series (25T - 130T)",
    image: "/images/rt-crane.jpg",
    capacity: "25 to 130 Metric Tonnes",
    boomLength: "31.0m to 62.0m Telescopic Full Power",
    jibLength: "8.5m - 16.0m Bi-fold Offset Jib",
    drive: "4 x 4 x 4 (All-Wheel Steer & Drive)",
    engine: "Mitsubishi / Cummins Turbo Diesel (280 HP)",
    outriggerSpread: "6.8m x 7.2m Fully Extended",
    description:
      "Engineered specifically for Sri Lanka's challenging, muddy, unpaved job sites and tight bridge abutments. With 4-wheel crab steering and ultra-heavy deep-tread tires, our RT cranes navigate where truck cranes cannot venture.",
    features: [
      "Computerized Safe Load Indicator (SLI) with automated cut-off",
      "Pick-and-carry capability across rugged construction yards",
      "Compact footprint suited for congested urban and bridge sites",
      "Supplied with certified heavy crane operator & signal lead",
    ],
  },
  {
    id: "crawler-cranes",
    category: "Lattice Boom Crawler Cranes",
    name: "Crawler Heavy Lift Series (50T - 300T)",
    image: "/images/crawler-crane.jpg",
    capacity: "50 to 300 Metric Tonnes",
    boomLength: "42.0m to 96.0m Tubular Lattice Boom",
    jibLength: "12.0m - 36.0m Fixed & Luffing Jib",
    drive: "Heavy Crawler Tracks (Ground Pressure 0.85 kg/cm²)",
    engine: "Liebherr / Caterpillar Heavy Tier-4 (450 HP)",
    outriggerSpread: "Self-stabilizing Crawler Base (Width 7.6m)",
    description:
      "The apex of heavy lift stability. Our lattice crawler cranes are the backbone of Sri Lanka's major harbor, breakwater, and expressway viaduct projects. Exceptional capacity charts and minimal ground preparation requirements.",
    features: [
      "Exceptional stability without needing outrigger deployment",
      "Capable of traveling with full suspended payload",
      "Modular lattice boom configurations for variable heights",
      "Heavy foundation piling, wind turbine & harbor erection",
    ],
  },
  {
    id: "boom-trucks",
    category: "Hydraulic Boom Trucks",
    name: "Boom Truck & Articulated Cranes (5T - 25T)",
    image: "/images/boom-truck.jpg",
    capacity: "5 to 25 Metric Tonnes",
    boomLength: "14.0m to 28.0m Articulated Knuckle Boom",
    jibLength: "Hydraulic Winch Extension",
    drive: "Highway Truck Chassis (6 x 4 / 8 x 4 Prime)",
    engine: "Isuzu / Hino Heavy Commercial Diesel",
    outriggerSpread: "Front & Rear Hydraulic Outriggers (5.4m)",
    description:
      "The ultimate solution for transport and lift combined. Our boom trucks transport machinery directly on their flatbed and offload/erect it at the final destination without requiring a secondary crane rig.",
    features: [
      "Dual capability: road cargo freight transport + hydraulic crane",
      "Rapid islandwide deployment via highway transit speeds",
      "Ideal for transformer shifting, steel fabrication, and street-side utility",
      "Cost-effective single-vehicle solution for regional deliveries",
    ],
  },
  {
    id: "lowbed-trailers",
    category: "Heavy Haulage & Logistics",
    name: "Multi-Axle Low Bed Trailers (Up to 120T)",
    image: "/images/lowbed-trailer.jpg",
    capacity: "Up to 120 Tonne Gross Payload",
    boomLength: "Heavy Steel Drop-Deck (12.5m - 18.0m)",
    jibLength: "Hydraulic Folding Loading Ramps",
    drive: "Multi-Axle Heavy Haul Prime Mover (6x4 / 8x4)",
    engine: "Volvo / Scania Heavy Hauler (540 HP)",
    outriggerSpread: "Heavy-duty outrigger extensions for wide loads",
    description:
      "Moving heavy machinery across Sri Lanka requires heavy equipment haulage expertise. Our low bed trailers transport bulldozers, excavators, piling machines, and factory equipment with pilot escort vehicles.",
    features: [
      "Low loading height for high-clearance bridges and utility wires",
      "Heavy hydraulic ramps for tracked and wheeled machinery loading",
      "Police escorts and RDA route authorization handled end-to-end",
      "Comprehensive goods-in-transit (GIT) insurance coverage",
    ],
  },
];

export default function FleetCatalogSection() {
  return (
    <section className="my-12 space-y-16">
      <div>
        <span className="text-xs text-[#FFCC00] uppercase tracking-wider font-bold block">
          Detailed Technical Data
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight mt-1">
          Fleet Inventory &amp; Load Charts
        </h2>
      </div>

      {FLEET_SERVICES.map((fleet) => (
        <div
          id={fleet.id}
          key={fleet.id}
          className="bg-zinc-50/70 p-6 sm:p-10 lg:p-12 scroll-mt-28"
        >
          {/* Header Telemetry */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
            <div>
              <div className="text-xs text-[#FFCC00] uppercase font-bold tracking-wider">
                {fleet.category}
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
                {fleet.name}
              </h3>
            </div>
            <Link
              href={`/contact?machine=${fleet.id}`}
              className="px-6 py-3 bg-[#FFCC00] text-black font-display font-black text-base uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-colors flex items-center gap-2 self-start sm:self-auto shadow-xs"
            >
              <span>Book This Spec</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Content & Specs Grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Image Viewport (5 cols) */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full overflow-hidden bg-zinc-900 group">
              <Image
                src={fleet.image}
                alt={fleet.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-3 text-xs text-zinc-900 shadow-xs">
                <span className="text-zinc-500 uppercase text-[11px] block">
                  Rated Capacity
                </span>
                <span className="font-black text-black text-sm">{fleet.capacity}</span>
              </div>
            </div>

            {/* Technical Specifications Table & Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
                {fleet.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="bg-white p-6 shadow-xs">
                <div className="text-xs text-zinc-500 uppercase tracking-wider pb-3 flex justify-between font-bold">
                  <span>Engineering Specs</span>
                  <span className="text-zinc-900">Verified Ratings</span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-xs">
                  <div>
                    <span className="text-zinc-400 uppercase text-[11px] block">
                      Max Capacity
                    </span>
                    <span className="font-bold text-zinc-950 text-sm">
                      {fleet.capacity}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-400 uppercase text-[11px] block">
                      Main Boom Reach
                    </span>
                    <span className="font-bold text-zinc-950 text-sm">
                      {fleet.boomLength}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-400 uppercase text-[11px] block">
                      Jib Extension
                    </span>
                    <span className="font-bold text-zinc-950 text-sm">
                      {fleet.jibLength}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-400 uppercase text-[11px] block">
                      Drive &amp; Steer
                    </span>
                    <span className="font-bold text-zinc-950 text-sm">
                      {fleet.drive}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-400 uppercase text-[11px] block">
                      Powerplant
                    </span>
                    <span className="font-bold text-zinc-950 text-sm">
                      {fleet.engine}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-400 uppercase text-[11px] block">
                      Outrigger Spread
                    </span>
                    <span className="font-bold text-zinc-950 text-sm">
                      {fleet.outriggerSpread}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs text-[#FFCC00] uppercase tracking-wider font-bold block">
                  Operational Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fleet.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs text-zinc-800 bg-white p-3 shadow-xs"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
