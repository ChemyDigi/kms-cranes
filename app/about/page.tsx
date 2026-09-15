import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  HardHat, 
  ArrowRight,
  Scale
} from "lucide-react";
import CeoQuoteBanner from "@/components/CeoQuoteBanner";

const CORE_VALUES = [
  {
    title: "1. UNCOMPROMISING SAFETY",
    desc: "We enforce a zero-incident policy. If ground pressure, wind velocity, or rigging angles exceed safety margins, our operators are empowered to pause work until conditions are verified.",
    icon: ShieldCheck,
  },
  {
    title: "2. TRANSPARENT PRICING",
    desc: "We provide upfront, competitive rates with clear shift hours, transparent mobilization costs, and no deceptive standby penalties. Fair prices for nation-building contractors.",
    icon: Scale,
  },
  {
    title: "3. RAPID DISPATCH",
    desc: "With operational hubs strategically positioned in Kelaniya (Western Province) and Hambantota (Southern Province), we dispatch heavy cranes islandwide within 24 to 48 hours.",
    icon: Clock,
  },
  {
    title: "4. CERTIFIED EXPERTISE",
    desc: "Every crane operator and rigging lead in the KMS team holds recognized national heavy-licensing endorsements, SLSI qualifications, and continuous safety training.",
    icon: HardHat,
  },
];

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
    details: "High-tensile wire ropes, swivel shackles, and polyester web slings logged with batch certifications and discarded at the first sign of wear.",
  },
  {
    standard: "OPERATOR PHYSICAL & SKILL CHECK",
    frequency: "Biannual Review",
    details: "Medical fitness assessments, depth perception testing, and refresher simulation training for complex tandem and blind lifts.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      {/* Header Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full border-b border-zinc-200">
        <div className="text-xs font-telemetry text-zinc-800 uppercase font-bold tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FFCC00]"></span>
          <span>LEGACY &bull; ENGINEERING STANDARDS &bull; SAFETY PROTOCOLS</span>
        </div>
        <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-zinc-950 uppercase tracking-tight">
          ABOUT KMS CRANES
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-700 font-sans max-w-3xl leading-relaxed">
          Founded in Sri Lanka with a vision to elevate national infrastructure standards, KMS Cranes has grown into one of the country&apos;s most dependable heavy machinery and crane hire partners.
        </p>
      </section>

      {/* Origin & Infrastructure Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Story Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-telemetry text-zinc-500 uppercase tracking-widest font-bold">
              [ OUR JOURNEY ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight">
              15+ YEARS OF POWERING SRI LANKA&apos;S GROWTH
            </h2>
            <p className="text-zinc-700 text-base font-sans leading-relaxed">
              When Sri Lanka embarked on unprecedented infrastructure expansion—from the Southern and Central Expressways to the Colombo Port expansion, wind power initiatives, and industrial manufacturing zones—the need for reliable, modern heavy lifting equipment became critical.
            </p>
            <p className="text-zinc-600 text-base font-sans leading-relaxed">
              KMS Cranes was built to bridge this gap: investing continuously in high-tonnage Rough Terrain (RT) cranes, heavy lattice crawlers, versatile boom trucks, and multi-axle low bed trailers. We do not just rent machines; we engineer safe lifting solutions that keep your projects ahead of schedule and within budget.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-zinc-200">
              <div className="bg-zinc-50 border border-zinc-200 p-4">
                <div className="font-display font-black text-3xl text-black">15+</div>
                <div className="text-xs text-zinc-500 font-telemetry mt-0.5 font-bold">YEARS ACTIVE</div>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-4">
                <div className="font-display font-black text-3xl text-black">35+</div>
                <div className="text-xs text-zinc-500 font-telemetry mt-0.5 font-bold">ACTIVE FLEET</div>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-4">
                <div className="font-display font-black text-3xl text-black">1,400+</div>
                <div className="text-xs text-zinc-500 font-telemetry mt-0.5 font-bold">SUCCESSFUL LIFTS</div>
              </div>
            </div>
          </div>

          {/* Right Image Feature (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] w-full border border-zinc-300 crosshair-corner overflow-hidden bg-zinc-900 shadow-xl">
              <Image
                src="/images/hero-crane.jpg"
                alt="KMS Cranes lifting operation on Sri Lanka infrastructure project"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-zinc-300 p-4 shadow">
                <div className="text-xs font-telemetry text-black font-bold uppercase">
                  KELANIYA &bull; HEADQUARTERS DEPOT
                </div>
                <div className="text-xs text-zinc-600 font-sans mt-1">
                  Fully equipped maintenance workshop with hydraulic test rigs and load test beds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote Banner Section (Authentic Yellow) */}
      <CeoQuoteBanner />

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
        <div className="mb-12 border-b border-zinc-200 pb-4">
          <span className="text-xs font-telemetry text-zinc-500 uppercase tracking-widest font-bold">
            FOUNDATIONAL ETHOS
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight mt-1">
            THE KMS CODE OF OPERATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 p-6 flex flex-col justify-between hover:border-black transition-colors group shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 bg-zinc-100 border border-zinc-300 flex items-center justify-center text-black group-hover:bg-[#FFCC00] transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-xl text-zinc-950 uppercase tracking-wide">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 text-[11px] font-telemetry text-zinc-500 font-semibold">
                  STANDARD OPERATING DIRECTIVE
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rigorous Safety & Quality Protocol Matrix */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full bg-zinc-50 border-y border-zinc-200">
        <div className="mb-12">
          <span className="text-xs font-telemetry text-zinc-500 uppercase tracking-widest font-bold">
            ZERO TOLERANCE FOR COMPROMISE
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight mt-1">
            QUALITY &amp; SAFETY ASSURANCE PROTOCOLS
          </h2>
          <p className="max-w-2xl text-zinc-600 text-sm font-sans mt-2">
            Every piece of heavy machinery in our yard is subjected to continuous preventive inspection and third-party validation before stepping onto your site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAFETY_PILLARS.map((pil, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200 p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                  <span className="font-display font-black text-2xl text-zinc-950 uppercase">
                    {pil.standard}
                  </span>
                  <span className="bg-zinc-100 border border-zinc-300 text-black text-[11px] font-telemetry font-bold px-2.5 py-1 uppercase">
                    {pil.frequency}
                  </span>
                </div>
                <p className="mt-4 text-sm text-zinc-700 font-sans leading-relaxed">
                  {pil.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-telemetry text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>COMPLIANT UNDER ISO 9001:2015 DIRECTIVES</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Depot Locations in Sri Lanka */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-telemetry text-zinc-500 uppercase tracking-widest font-bold">
              [ STRATEGIC REACH ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight">
              TWO HUBS COVERING 100% OF SRI LANKA
            </h2>
            <p className="text-zinc-700 text-sm sm:text-base font-sans leading-relaxed">
              We operate two primary heavy equipment yards that allow rapid dispatch across all 9 provinces:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-zinc-50 border border-zinc-200">
                <div className="font-display font-bold text-lg text-zinc-950 uppercase flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>KELANIYA / COLOMBO MAIN YARD</span>
                </div>
                <p className="text-xs text-zinc-600 font-sans mt-1">
                  15 minutes from Colombo Port terminals, Western Container Terminal, and direct on-ramp to Central &amp; Katunayake Expressways.
                </p>
              </div>

              <div className="p-4 bg-zinc-50 border border-zinc-200">
                <div className="font-display font-bold text-lg text-zinc-950 uppercase flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>HAMBANTOTA SOUTHERN DEPOT</span>
                </div>
                <p className="text-xs text-zinc-600 font-sans mt-1">
                  Serving Hambantota International Port, Mirijjawila Export Zone, Mattala, and southern highway link projects.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFCC00] text-black font-display font-bold text-base uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow"
              >
                <span>CONTACT DEPOT SUPERVISOR</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-8 shadow-sm">
            <div className="text-xs font-telemetry text-zinc-600 uppercase tracking-widest pb-4 border-b border-zinc-200 font-bold">
              [ PROVINCIAL DISPATCH RADII &bull; SRI LANKA ]
            </div>

            <div className="mt-6 space-y-4 font-telemetry text-xs">
              <div className="flex items-center justify-between p-3 bg-white border border-zinc-200">
                <span className="text-zinc-950 font-bold">WESTERN &amp; SABARAGAMUWA</span>
                <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">DISPATCH TIME: 2 - 4 HOURS</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white border border-zinc-200">
                <span className="text-zinc-950 font-bold">SOUTHERN PROVINCE</span>
                <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">DISPATCH TIME: 2 - 6 HOURS</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white border border-zinc-200">
                <span className="text-zinc-950 font-bold">CENTRAL &amp; NORTH WESTERN</span>
                <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">DISPATCH TIME: 4 - 8 HOURS</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white border border-zinc-200">
                <span className="text-zinc-950 font-bold">EASTERN &amp; NORTHERN PROVINCES</span>
                <span className="text-black bg-[#FFCC00] px-2 py-0.5 font-bold">DISPATCH TIME: 12 - 24 HOURS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
