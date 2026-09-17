"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 text-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Upper Brand & Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFCC00] text-black flex items-center justify-center font-display font-black text-xl">
                KMS
              </div>
              <div className="font-display font-black text-2xl uppercase tracking-wider text-zinc-950">
                CRANES
              </div>
            </div>
            <p className="text-sm text-zinc-600 font-sans max-w-sm leading-relaxed">
              Professionals in the field of heavy machinery and crane hiring. We hire all types of RT cranes, forklifts, boom trucks, and low beds for reasonable prices across Sri Lanka.
            </p>
            <div className="pt-2 text-xs font-telemetry text-zinc-500">
              349 Avissawella Rd, Angoda 10620 &bull; Islandwide Heavy Crane Hire
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-display font-black text-base uppercase tracking-wider text-zinc-950">
              Fleet &amp; Machinery
            </div>
            <ul className="space-y-2 text-sm text-zinc-600 font-sans">
              <li>
                <Link href="/services#rt-cranes" className="hover:text-zinc-950 transition-colors">
                  Rough Terrain (RT) Cranes (25T - 130T)
                </Link>
              </li>
              <li>
                <Link href="/services#crawler-cranes" className="hover:text-zinc-950 transition-colors">
                  Lattice Crawler Cranes (50T - 300T)
                </Link>
              </li>
              <li>
                <Link href="/services#boom-trucks" className="hover:text-zinc-950 transition-colors">
                  Hydraulic Boom Trucks (5T - 25T)
                </Link>
              </li>
              <li>
                <Link href="/services#lowbed-trailers" className="hover:text-zinc-950 transition-colors">
                  Multi-Axle Low Bed Trailers (Up to 120T)
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Dispatch Hotlines */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-display font-black text-base uppercase tracking-wider text-zinc-950">
              Direct Dispatch Lines
            </div>
            <div className="space-y-2 text-sm font-telemetry">
              <a
                href="tel:+94112915566"
                className="flex items-center gap-2 text-zinc-900 hover:text-black font-bold"
              >
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>Headquarters: +94 11 291 5566</span>
              </a>
              <a
                href="tel:+94777321890"
                className="flex items-center gap-2 text-zinc-900 hover:text-black font-bold"
              >
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>24/7 Mobile Dispatch: +94 77 732 1890</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-600 pt-1 text-xs">
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>dispatch@kmscranes.lk</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-telemetry font-bold text-zinc-950 underline uppercase tracking-wider"
              >
                <span>Request Formal Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Legal & Accreditations */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-telemetry text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} KMS Cranes &amp; Equipment (Pvt) Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-600">
            <span>ISO 9001:2015</span>
            <span>&bull;</span>
            <span>OSHA Certified Riggers</span>
            <span>&bull;</span>
            <span>SLSI Load Tested</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
