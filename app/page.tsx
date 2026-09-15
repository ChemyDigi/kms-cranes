import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall,
  Shield,
  HardHat
} from "lucide-react";
import FleetCard from "@/components/FleetCard";
import CeoQuoteBanner from "@/components/CeoQuoteBanner";
import QuoteEstimator from "@/components/QuoteEstimator";

const FEATURED_FLEET = [
  {
    id: "rt-cranes",
    number: "01",
    category: "ROUGH TERRAIN",
    title: "Rough Terrain (RT) Cranes",
    tagline: "High-traction 4x4 off-road mobile cranes engineered for muddy, unpaved construction sites and tight clearances across Sri Lanka.",
    capacity: "25T - 130T",
    maxBoom: "31m - 62m Telescopic",
    bestFor: "Bridge foundations, expressways & uneven industrial terrain",
    image: "/images/rt-crane.jpg",
    href: "/services#rt-cranes",
  },
  {
    id: "crawler-cranes",
    number: "02",
    category: "HEAVY LIFTING",
    title: "Lattice Crawler Cranes",
    tagline: "Monolithic stability with continuous crawler tracks and high-tensile steel lattice boom for mega infrastructure and heavy industrial lifting.",
    capacity: "50T - 300T",
    maxBoom: "42m - 96m Lattice Jib",
    bestFor: "Harbor piling, precast girder launches & wind turbines",
    image: "/images/crawler-crane.jpg",
    href: "/services#crawler-cranes",
  },
  {
    id: "boom-trucks",
    number: "03",
    category: "TRANSPORT & ERECT",
    title: "Hydraulic Boom Trucks",
    tagline: "Self-loading transport with rear/front articulated hydraulic crane arms for rapid dispatch, urban lifting, and electrical infrastructure.",
    capacity: "5T - 25T",
    maxBoom: "14m - 28m Articulated",
    bestFor: "Factory machinery shifting, steel transport & transformers",
    image: "/images/boom-truck.jpg",
    href: "/services#boom-trucks",
  },
  {
    id: "lowbed-trailers",
    number: "04",
    category: "HEAVY HAULAGE",
    title: "Multi-Axle Low Bed Trailers",
    tagline: "Heavy haulage prime movers with drop-deck lowbed trailers for moving excavators, piling rigs, and oversized industrial equipment.",
    capacity: "Up to 120T Payload",
    maxBoom: "Islandwide Transit",
    bestFor: "Transporting heavy machinery between job sites across provinces",
    image: "/images/lowbed-trailer.jpg",
    href: "/services#lowbed-trailers",
  },
];

const STATS = [
  { label: "FLEET INVENTORY", value: "35+", note: "Active Modern Machines" },
  { label: "MAX HOIST CAPACITY", value: "300T", note: "Single-Crane Rating" },
  { label: "RIGGING CERTIFICATION", value: "100%", note: "OSHA & SLSI Qualified" },
  { label: "SAFETY RECORD", value: "ZERO", note: "Loss-Time Incidents" },
];

const PROJECTS_SERVED = [
  { name: "Colombo Port Expansion (WCT & ECT)", role: "Heavy Gantry & Precast Girders" },
  { name: "Central Expressway (CEP) Section II", role: "Bridge Deck Span Lifting" },
  { name: "Mannar Wind Power Project", role: "Nacelle & Rotor Assembly" },
  { name: "Kelani River New Bridge Project", role: "Steel Arch Erection" },
  { name: "Southern Logistics Corridor", role: "Transformer & Plant Relocation" },
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      {/* 1. HERO SECTION (Liebherr Clean Light Style) */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-14 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
        {/* Top Eyebrow Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-zinc-800 uppercase font-bold">
            <span className="w-2 h-2 bg-[#FFCC00]"></span>
            <span>SRI LANKA&apos;S HEAVY RIGGING &amp; CRANE HIRE SPECIALISTS</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-telemetry text-zinc-600">
            <span>DEPOTS: KELANIYA // HAMBANTOTA</span>
            <span className="text-zinc-300">|</span>
            <span className="text-emerald-600 font-bold">● FLEET READY</span>
          </div>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
          {/* Left Text Block (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-block bg-zinc-100 border border-zinc-300 px-3 py-1 text-xs font-telemetry text-zinc-800 uppercase tracking-widest font-semibold">
              OFFICIAL FLEET DIRECTORY &bull; REASONABLE RATES
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-950 uppercase tracking-tight leading-[0.92]">
              HEAVY LIFTING <br />
              <span className="bg-[#FFCC00] px-2 text-black">ENGINEERED</span> FOR <br />
              SRI LANKA.
            </h1>

            {/* Exact Tagline Provided by User */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-700 font-sans max-w-2xl leading-relaxed border-l-4 border-[#FFCC00] pl-4">
              Professionals in the field of heavy machinery &amp; crane hiring. We hire all types of RT cranes, forklifts, boom trucks, low beds for reasonable prices across Sri Lanka.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#FFCC00] text-black font-display font-black text-xl uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-lg flex items-center gap-3 active:scale-95"
              >
                <span>REQUEST INSTANT HIRE QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="px-6 py-4 bg-white border-2 border-zinc-300 text-zinc-900 font-display font-bold text-lg uppercase tracking-wider hover:border-black hover:bg-zinc-50 transition-colors flex items-center gap-2"
              >
                <span>EXPLORE FLEET &amp; LOAD CHARTS</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[460px] w-full border border-zinc-300 crosshair-corner overflow-hidden bg-zinc-900 shadow-xl group">
              <Image
                src="/images/hero-crane.jpg"
                alt="Heavy mobile crane operating at Colombo Port project Sri Lanka"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Top Right Caution Tag */}
              <div className="absolute top-4 right-4 bg-black/85 border border-[#FFCC00] px-3 py-1 text-xs font-telemetry font-bold text-[#FFCC00] uppercase">
                COLOMBO HARBOR &bull; 150T RIG
              </div>

              {/* Bottom Telemetry Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-zinc-300 p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs font-telemetry text-zinc-600 mb-1">
                  <span>DISPATCH COORDINATES</span>
                  <span className="text-black font-bold">LAT 6.9271° N</span>
                </div>
                <div className="font-display font-black text-lg text-zinc-950 uppercase truncate">
                  Western Container Terminal Girder Lift
                </div>
                <div className="text-[11px] font-telemetry text-zinc-600 mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>RT-1100 // 100T BOOM AT 45M HEIGHT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Telemetry Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-200">
          {STATS.map((s, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200 p-4 hover:border-zinc-400 transition-colors"
            >
              <div className="text-[10px] font-telemetry text-zinc-500 uppercase tracking-widest font-semibold">
                {s.label}
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-black mt-0.5">
                {s.value}
              </div>
              <div className="text-xs text-zinc-600 font-sans mt-0.5">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 2D SCROLL HOOK TELEMETRY CALLOUT BAR */}
      <section className="w-full bg-zinc-100 border-y border-zinc-200 py-3.5 px-6 lg:px-12">
        <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-telemetry text-zinc-700">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#FFCC00] text-black font-bold uppercase text-[10px]">
              2D CRANE SCROLL RIG ACTIVE
            </span>
            <span>Observe the vertical crane hoist &amp; hook lowering down the screen as you scroll.</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-600">
            <span>SLI COMPUTERIZED LIMITER</span>
            <span className="text-zinc-300">//</span>
            <span className="text-black font-bold">100% RIGGING SAFETY GUARANTEE</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED FLEET SHOWCASE (Directly Inspired by Liebherr Reference) */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-200 gap-6">
          <div>
            <div className="text-xs font-telemetry text-zinc-600 uppercase font-bold tracking-widest mb-1">
              [ SECTION 02 // FLEET SPECIFICATIONS ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-zinc-950 uppercase tracking-tight">
              HEAVY CRANE &amp; MACHINERY FLEET
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 font-sans leading-relaxed">
            Our cranes and machinery are renowned across Sri Lanka for structural reliability, precision hydraulics, and certified safety compliance for demanding infrastructure projects.
          </p>
        </div>

        {/* 4-Card Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_FLEET.map((fleet) => (
            <FleetCard key={fleet.id} {...fleet} />
          ))}
        </div>

        {/* Bottom Fleet Link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="px-8 py-3.5 bg-zinc-100 border border-zinc-300 hover:border-black text-zinc-900 font-display font-bold text-base uppercase tracking-wider hover:bg-black hover:text-white transition-colors flex items-center gap-2"
          >
            <span>VIEW COMPLETE MACHINERY INVENTORY &amp; LOAD SPECS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. INTERACTIVE CRANE HIRE CALCULATOR (QuoteEstimator) */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
        <QuoteEstimator />
      </section>

      {/* 5. LEADERSHIP QUOTE BANNER (Street Crane Style - Reference Image #3) */}
      <CeoQuoteBanner />

      {/* 6. MAJOR PROJECTS SERVED & CLIENT TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-telemetry text-zinc-500 uppercase tracking-widest font-bold">
              [ PROVEN TRACK RECORD ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight">
              TRUSTED ON SRI LANKA&apos;S DEFINING INFRASTRUCTURE
            </h2>
            <p className="text-zinc-600 text-base font-sans leading-relaxed">
              When structural integrity and schedule adherence are non-negotiable, Sri Lanka&apos;s leading engineering contractors choose KMS Cranes. We deliver verified lifting plans, engineered rigging safety, and seasoned operators.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-800 font-telemetry">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>24/7 Mechanical On-Site Support &amp; Fueling</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-800 font-telemetry">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Certified Signalmen &amp; OSHA Rigging Supervisors</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-800 font-telemetry">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Full Comprehensive Insurance &amp; SLSI Load Tested</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-telemetry font-bold text-black hover:underline uppercase tracking-wider"
              >
                <span>Read About Our Engineering Standards</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Project List (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <div className="text-xs font-telemetry text-zinc-600 uppercase tracking-widest pb-4 border-b border-zinc-200 flex justify-between font-bold">
              <span>MAJOR LIFTS COMPLETED</span>
              <span className="text-black">PROVINCIAL RECORD</span>
            </div>

            <div className="divide-y divide-zinc-200">
              {PROJECTS_SERVED.map((p, idx) => (
                <div
                  key={idx}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-white px-2 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-telemetry text-zinc-400 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-display font-bold text-lg text-zinc-900 group-hover:text-black transition-colors uppercase">
                      {p.name}
                    </span>
                  </div>
                  <span className="text-xs font-telemetry text-zinc-600 bg-white px-2.5 py-1 border border-zinc-200 font-medium">
                    {p.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM RAPID DISPATCH BANNER */}
      <section className="w-full bg-zinc-100 border-t border-zinc-200 py-12 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-block bg-[#FFCC00] text-black text-xs font-telemetry font-bold px-3 py-1 uppercase">
            RAPID MOBILIZATION ISLANDWIDE
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
            NEED A CRANE ON YOUR JOB SITE TOMORROW?
          </h3>
          <p className="text-zinc-600 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Our Kelaniya and Hambantota depots maintain round-the-clock dispatch readiness. Call our direct line for immediate machine availability and transparent pricing.
          </p>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+94112915566"
              className="px-8 py-4 bg-[#FFCC00] text-black font-display font-black text-xl uppercase tracking-wider hover:bg-black hover:text-white transition-colors flex items-center gap-3 shadow-md"
            >
              <PhoneCall className="w-5 h-5" />
              <span>CALL DISPATCH: +94 11 291 5566</span>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white border-2 border-zinc-400 hover:border-black text-zinc-900 font-display font-bold text-xl uppercase tracking-wider transition-colors"
            >
              SUBMIT WRITTEN RFQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
