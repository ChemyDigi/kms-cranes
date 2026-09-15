"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileCheck
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#08090b] text-zinc-300 border-t border-[#1c1e24] relative overflow-hidden">
      {/* Top Caution Stripe Bar */}
      <div className="w-full h-1 caution-stripes-slim"></div>

      {/* Main Footer Container */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        {/* Upper Brand & Accreditation Row (Matching reference image #4) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-12 border-b border-[#21232c] gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFCC00] flex items-center justify-center font-display font-black text-2xl text-black">
                KMS
              </div>
              <div className="font-display font-black text-3xl text-white tracking-wider">
                CRANES
              </div>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-zinc-700"></div>
            <p className="text-xs font-telemetry text-zinc-400 max-w-sm uppercase leading-relaxed">
              Professionals in heavy machinery &amp; crane hiring across Sri Lanka. RT Cranes, Crawlers, Forklifts, Boom Trucks &amp; Low Beds.
            </p>
          </div>

          {/* Industrial Certifications & Compliance Badges (Directly matching reference image #4) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-[#111218] border border-zinc-800 p-3.5 px-5">
            <div className="flex items-center gap-2 text-zinc-300">
              <ShieldCheck className="w-5 h-5 text-[#FFCC00]" />
              <div className="text-[11px] font-telemetry leading-tight">
                <span className="font-bold text-white block">ISO 9001:2015</span>
                <span className="text-zinc-500">QUALITY CERTIFIED</span>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block"></div>

            <div className="flex items-center gap-2 text-zinc-300">
              <Award className="w-5 h-5 text-[#FFCC00]" />
              <div className="text-[11px] font-telemetry leading-tight">
                <span className="font-bold text-white block">OSHA STANDARDS</span>
                <span className="text-zinc-500">RIGGING COMPLIANCE</span>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block"></div>

            <div className="flex items-center gap-2 text-zinc-300">
              <FileCheck className="w-5 h-5 text-[#FFCC00]" />
              <div className="text-[11px] font-telemetry leading-tight">
                <span className="font-bold text-white block">SLSI REGISTRATION</span>
                <span className="text-zinc-500">ANNUAL LOAD TESTED</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Multi-Column Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-[#21232c] text-sm">
          {/* Col 1: Contact Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-black text-xl text-white uppercase tracking-wider">
              CONTACT DISPATCH
            </h4>
            <div className="space-y-3 font-telemetry text-xs">
              <a
                href="tel:+94112915566"
                className="flex items-start gap-2.5 text-zinc-400 hover:text-[#FFCC00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">+94 11 291 5566</div>
                  <div className="text-[10px] text-zinc-500">Colombo Depot Direct</div>
                </div>
              </a>

              <a
                href="tel:+94777321890"
                className="flex items-start gap-2.5 text-zinc-400 hover:text-[#FFCC00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">+94 77 732 1890</div>
                  <div className="text-[10px] text-zinc-500">24/7 Islandwide Emergency Dispatch</div>
                </div>
              </a>

              <a
                href="mailto:info@kmscranes.lk"
                className="flex items-start gap-2.5 text-zinc-400 hover:text-[#FFCC00] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">info@kmscranes.lk</div>
                  <div className="text-[10px] text-zinc-500">Quotations &amp; Tenders</div>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Main Offices & Yards in Sri Lanka (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-black text-xl text-white uppercase tracking-wider">
              SRI LANKA DEPOTS &amp; YARDS
            </h4>
            <div className="space-y-4 font-telemetry text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase">MAIN HEAVY YARD &amp; HQ</div>
                  <div className="text-zinc-400 mt-0.5">
                    No. 142/B, Kandy Road, Peliyagoda / Kelaniya, Sri Lanka
                  </div>
                  <div className="text-[10px] text-zinc-500">Quick access to Colombo Port &amp; Central Expressway</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase">SOUTHERN DEPOT</div>
                  <div className="text-zinc-400 mt-0.5">
                    Industrial Zone, Mirijjawila, Hambantota, Sri Lanka
                  </div>
                  <div className="text-[10px] text-zinc-500">Servicing Port, Airport &amp; Southern Infrastructure</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Fleet Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-black text-xl text-white uppercase tracking-wider">
              FLEET &amp; MACHINERY
            </h4>
            <ul className="space-y-2 text-xs font-telemetry text-zinc-400">
              <li>
                <Link href="/services" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&gt;</span> Rough Terrain (RT) Cranes (25T - 130T)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&gt;</span> Crawler Heavy Lift Cranes (50T - 300T)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&gt;</span> Hydraulic Boom Trucks &amp; Hiabs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&gt;</span> Heavy Duty Container Forklifts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&gt;</span> Multi-Axle Low Bed Transport
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigation & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-black text-xl text-white uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-telemetry text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#FFCC00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFCC00] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFCC00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#FFCC00] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFCC00] transition-colors">
                  Contact &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Jump to Top (Reference image #4) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-telemetry text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} KMS Cranes (Pvt) Ltd. Registered In Sri Lanka (PV 00289192). All Rights Reserved.
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#FFCC00] transition-colors group cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#FFCC00]" />
            <span className="uppercase tracking-widest font-bold">JUMP TO TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
