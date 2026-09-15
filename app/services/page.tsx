import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Check
} from "lucide-react";

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
    category: "ROUGH TERRAIN CRANES",
    name: "RT Crane Series (25T - 130T)",
    image: "/images/rt-crane.jpg",
    capacity: "25 to 130 Metric Tonnes",
    boomLength: "31.0m to 62.0m Telescopic Full Power",
    jibLength: "8.5m - 16.0m Bi-fold Offset Jib",
    drive: "4 x 4 x 4 (All-Wheel Steer & Drive)",
    engine: "Mitsubishi / Cummins Turbo Diesel (280 HP)",
    outriggerSpread: "6.8m x 7.2m Fully Extended",
    description: "Engineered specifically for Sri Lanka's challenging, muddy, unpaved job sites and tight bridge abutments. With 4-wheel crab steering and ultra-heavy deep-tread tires, our RT cranes navigate where truck cranes cannot venture.",
    features: [
      "Computerized Safe Load Indicator (SLI) with automated cut-off",
      "Pick-and-carry capability across rugged construction yards",
      "Compact footprint suited for congested urban and bridge sites",
      "Supplied with certified heavy crane operator & signal lead",
    ],
  },
  {
    id: "crawler-cranes",
    category: "LATTICE BOOM CRAWLER CRANES",
    name: "Crawler Heavy Lift Series (50T - 300T)",
    image: "/images/crawler-crane.jpg",
    capacity: "50 to 300 Metric Tonnes",
    boomLength: "42.0m to 96.0m Tubular Lattice Boom",
    jibLength: "12.0m - 36.0m Fixed & Luffing Jib",
    drive: "Heavy Crawler Tracks (Ground Pressure 0.85 kg/cm²)",
    engine: "Liebherr / Caterpillar Heavy Tier-4 (450 HP)",
    outriggerSpread: "Self-stabilizing Crawler Base (Width 7.6m)",
    description: "The apex of heavy lift stability. Our lattice crawler cranes are the backbone of Sri Lanka's major harbor, breakwater, and expressway viaduct projects. Exceptional capacity charts and minimal ground preparation requirements.",
    features: [
      "Exceptional stability without needing outrigger deployment",
      "Capable of traveling with full suspended payload",
      "Modular lattice boom configurations for variable heights",
      "Full 3D CAD lift simulation and site ground bearing check included",
    ],
  },
  {
    id: "boom-trucks",
    category: "HYDRAULIC BOOM TRUCKS",
    name: "Articulated Boom Trucks (5T - 25T)",
    image: "/images/boom-truck.jpg",
    capacity: "5 to 25 Metric Tonnes",
    boomLength: "14.0m to 28.0m Articulated Knuckle / Telescopic",
    jibLength: "Hydraulic Fly Jib Available",
    drive: "6 x 4 / 8 x 4 Prime Chassis",
    engine: "Isuzu / Hino Heavy Duty Diesel (320 HP)",
    outriggerSpread: "4-Point Hydraulic Outriggers",
    description: "The ultimate dual-purpose workhorse. Combine heavy flatbed cargo hauling with independent hydraulic loading and unloading. Ideal for electrical transformers, steel structures, precast curbs, and urban maintenance.",
    features: [
      "Eliminates the cost of separate transport and mobile crane hire",
      "Rapid city-to-city highway transit without road permit delays",
      "Radio remote control option for single-operator precision placement",
      "Generous flatbed deck space for equipment cargo",
    ],
  },
  {
    id: "lowbed-trailers",
    category: "HEAVY HAULAGE & LOGISTICS",
    name: "Multi-Axle Low Bed Trailers (Up to 120T)",
    image: "/images/lowbed-trailer.jpg",
    capacity: "Up to 120 Tonne Gross Payload",
    boomLength: "Heavy Steel Drop-Deck (12.5m - 18.0m)",
    jibLength: "Hydraulic Folding Loading Ramps",
    drive: "Multi-Axle Heavy Haul Prime Mover (6x4 / 8x4)",
    engine: "Volvo / Scania Heavy Hauler (540 HP)",
    outriggerSpread: "Heavy-duty outrigger extensions for wide loads",
    description: "Moving heavy machinery across Sri Lanka requires heavy equipment haulage expertise. Our low bed trailers transport bulldozers, excavators, piling machines, and factory equipment with pilot escort vehicles.",
    features: [
      "Low loading height for high-clearance bridges and utility wires",
      "Heavy hydraulic ramps for tracked and wheeled machinery loading",
      "Police escorts and RDA route authorization handled end-to-end",
      "Comprehensive goods-in-transit (GIT) insurance coverage",
    ],
  },
];

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

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col py-12 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto bg-white text-zinc-900">
      {/* Header Banner */}
      <div className="border-b border-zinc-200 pb-10">
        <div className="text-xs font-telemetry text-zinc-800 uppercase font-bold tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FFCC00]"></span>
          <span>COMPREHENSIVE FLEET DIRECTORY &bull; SPECIFICATIONS</span>
        </div>
        <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-zinc-950 uppercase tracking-tight">
          HEAVY MACHINERY &amp; CRANE SERVICES
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-700 font-sans max-w-3xl leading-relaxed">
          KMS Cranes maintains one of Sri Lanka&apos;s most versatile heavy lifting inventories. Every machine is maintained to strict international standards with verified load charts and calibrated safety instrumentation.
        </p>
      </div>

      {/* Hiring Modes Comparison (Wet vs. Dry) */}
      <section className="my-16">
        <div className="mb-8">
          <span className="text-xs font-telemetry text-zinc-500 uppercase tracking-widest block font-semibold">
            FLEXIBLE CONTRACT STRUCTURES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
            HOW WE HIRE: WET HIRE VS. DRY HIRE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HIRING_MODES.map((mode, idx) => (
            <div
              key={idx}
              className={`p-8 border flex flex-col justify-between ${
                mode.highlight
                  ? "bg-zinc-50 border-black border-l-8 border-l-[#FFCC00] shadow-md"
                  : "bg-white border-zinc-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-950 uppercase">
                    {mode.title}
                  </h3>
                  {mode.highlight && (
                    <span className="bg-[#FFCC00] text-black text-[10px] font-telemetry font-bold px-2.5 py-1 uppercase">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <p className="text-xs font-telemetry text-zinc-600 mt-1 mb-6">
                  {mode.subtitle}
                </p>

                <ul className="space-y-3">
                  {mode.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-zinc-700 font-sans">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200">
                <Link
                  href="/contact"
                  className={`w-full py-3.5 px-6 font-display font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    mode.highlight
                      ? "bg-[#FFCC00] text-black hover:bg-black hover:text-white"
                      : "bg-zinc-900 text-white hover:bg-black"
                  }`}
                >
                  <span>INQUIRE ABOUT {mode.title.split(" ")[0]} HIRE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Fleet Catalog with Technical Spec Charts */}
      <section className="my-12 space-y-16">
        <div className="border-b border-zinc-200 pb-4">
          <span className="text-xs font-telemetry text-zinc-800 uppercase tracking-widest font-bold">
            DETAILED TECHNICAL DATA
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight mt-1">
            FLEET INVENTORY &amp; LOAD CHARTS
          </h2>
        </div>

        {FLEET_SERVICES.map((fleet, idx) => (
          <div
            id={fleet.id}
            key={fleet.id}
            className="bg-white border border-zinc-300 hover:border-black transition-colors p-6 sm:p-8 lg:p-10 scroll-mt-28 shadow-sm"
          >
            {/* Header Telemetry */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4">
              <div>
                <div className="text-xs font-telemetry text-zinc-600 uppercase font-bold tracking-wider">
                  MACHINE CLASS 0{idx + 1} &bull; {fleet.category}
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
                  {fleet.name}
                </h3>
              </div>
              <Link
                href={`/contact?machine=${fleet.id}`}
                className="px-6 py-3 bg-[#FFCC00] text-black font-display font-black text-base uppercase tracking-wider hover:bg-black hover:text-white transition-colors flex items-center gap-2 self-start sm:self-auto shadow-sm"
              >
                <span>BOOK THIS SPEC</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Content & Specs Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Image Viewport (5 cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 w-full border border-zinc-300 overflow-hidden bg-zinc-900 group">
                <Image
                  src={fleet.image}
                  alt={fleet.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-zinc-300 p-3 text-xs font-telemetry text-zinc-900 shadow">
                  <span>RATED CAPACITY: </span>
                  <span className="font-black text-black">{fleet.capacity}</span>
                </div>
              </div>

              {/* Technical Specifications Table & Highlights (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
                  {fleet.description}
                </p>

                {/* Technical Specifications Matrix */}
                <div className="bg-zinc-50 border border-zinc-200 p-5">
                  <div className="text-xs font-telemetry text-zinc-600 uppercase tracking-widest pb-3 border-b border-zinc-200 flex justify-between font-bold">
                    <span>ENGINEERING TELEMETRY</span>
                    <span className="text-black">VERIFIED SPECS</span>
                  </div>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs font-telemetry">
                    <div className="py-1 border-b border-zinc-200">
                      <span className="text-zinc-500 block">MAX CAPACITY:</span>
                      <span className="font-bold text-zinc-950 text-sm">{fleet.capacity}</span>
                    </div>
                    <div className="py-1 border-b border-zinc-200">
                      <span className="text-zinc-500 block">MAIN BOOM REACH:</span>
                      <span className="font-bold text-zinc-950 text-sm">{fleet.boomLength}</span>
                    </div>
                    <div className="py-1 border-b border-zinc-200">
                      <span className="text-zinc-500 block">JIB EXTENSION:</span>
                      <span className="font-bold text-zinc-950 text-sm">{fleet.jibLength}</span>
                    </div>
                    <div className="py-1 border-b border-zinc-200">
                      <span className="text-zinc-500 block">DRIVE &amp; STEER:</span>
                      <span className="font-bold text-zinc-950 text-sm">{fleet.drive}</span>
                    </div>
                    <div className="py-1 border-b border-zinc-200">
                      <span className="text-zinc-500 block">POWERPLANT:</span>
                      <span className="font-bold text-zinc-950 text-sm">{fleet.engine}</span>
                    </div>
                    <div className="py-1 border-b border-zinc-200">
                      <span className="text-zinc-500 block">OUTRIGGER SPREAD:</span>
                      <span className="font-bold text-zinc-950 text-sm">{fleet.outriggerSpread}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <span className="text-xs font-telemetry text-zinc-700 uppercase tracking-wider font-bold block">
                    OPERATIONAL HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {fleet.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs font-sans text-zinc-800 bg-zinc-50 p-2.5 border border-zinc-200"
                      >
                        <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Engineering Consultation Callout */}
      <section className="my-16 bg-zinc-100 border border-zinc-300 p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-[#FFCC00] text-black font-telemetry font-bold text-xs px-3 py-1 uppercase">
            SPECIALIZED RIGGING &amp; LIFT PLANNING
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
            NEED A CERTIFIED LIFTING PLAN &amp; SITE INSPECTION?
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base font-sans leading-relaxed">
            For critical, dual-crane tandem lifts, high-voltage proximity lifts, or sensitive ground conditions, KMS provides engineered lift studies with CAD drawings, ground bearing calculations, and OSHA safety method statements.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow"
            >
              REQUEST SITE VISIT &amp; LIFT STUDY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
