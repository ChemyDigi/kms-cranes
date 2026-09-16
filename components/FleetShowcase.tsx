"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Gauge, Shield, Truck } from "lucide-react";

interface FleetItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  capacity: string;
  boomLength: string;
  drive: string;
  applications: string[];
  image: string;
  bestFor: string;
}

const FLEET_DATA: FleetItem[] = [
  {
    id: "rt-cranes",
    category: "Rough Terrain (RT) Cranes",
    name: "RT Crane Series (25T - 130T)",
    tagline: "Heavy all-wheel drive mobile cranes engineered for unpaved, muddy job sites and restricted clearances across Sri Lanka.",
    capacity: "25T to 130T",
    boomLength: "31m to 62m Telescopic Boom",
    drive: "4x4x4 All-Wheel Crab Steering",
    applications: [
      "Bridge pier construction and highway overpasses",
      "Expressway flyover girder placement",
      "Confined industrial plant expansion",
      "Muddy, unpaved off-road construction yards"
    ],
    image: "/images/rt-crane.jpg",
    bestFor: "Bridge foundations & uneven construction terrain",
  },
  {
    id: "crawler-cranes",
    category: "Lattice Crawler Cranes",
    name: "Lattice Crawler Series (50T - 300T)",
    tagline: "Maximum ground stability with continuous crawler tracks and high-tensile tubular lattice boom for major infrastructure.",
    capacity: "50T to 300T",
    boomLength: "42m to 96m Lattice Jib",
    drive: "Continuous Low-Ground-Pressure Tracks",
    applications: [
      "Harbor breakwaters and deep-water container terminals",
      "Heavy precast concrete girder launches",
      "Wind turbine tower and nacelle assembly",
      "Heavy foundation caisson & sheet piling"
    ],
    image: "/images/crawler-crane.jpg",
    bestFor: "Harbor piling, precast girders & wind power",
  },
  {
    id: "boom-trucks",
    category: "Hydraulic Boom Trucks",
    name: "Articulated Boom Trucks (5T - 25T)",
    tagline: "Self-loading transport prime movers with hydraulic crane arms for rapid urban dispatch and equipment relocation.",
    capacity: "5T to 25T",
    boomLength: "14m to 28m Articulated Arm",
    drive: "High-Speed Highway Transit (6x4 / 8x4)",
    applications: [
      "Substation electrical transformer shifting",
      "Steel beam delivery and immediate site erection",
      "Industrial machinery plant relocation",
      "Rapid urban emergency clearing and utility repairs"
    ],
    image: "/images/boom-truck.jpg",
    bestFor: "Factory machinery shifting & steel transport",
  },
  {
    id: "lowbed-trailers",
    category: "Heavy Haulage Low Beds",
    name: "Multi-Axle Low Bed Trailers (Up to 120T)",
    tagline: "Heavy-duty drop-deck lowbed haulers for relocating excavators, piling rigs, and oversized heavy industrial equipment.",
    capacity: "Up to 120T Payload",
    boomLength: "Multi-Axle Drop Deck Platform",
    drive: "Heavy Haul Prime Movers with Escort Support",
    applications: [
      "Transporting heavy crawler cranes between sites",
      "Islandwide transit of piling machines and drills",
      "Long-distance shipment of oversized industrial vessels",
      "Provincial site-to-site equipment mobilization"
    ],
    image: "/images/lowbed-trailer.jpg",
    bestFor: "Transporting heavy machinery across Sri Lanka",
  },
];

export default function FleetShowcase() {
  const [activeTab, setActiveTab] = useState<string>("rt-cranes");
  const current = FLEET_DATA.find((item) => item.id === activeTab) || FLEET_DATA[0];

  return (
    <div className="w-full">
      {/* Category Filter Pills / Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 mb-8">
        {FLEET_DATA.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-2.5 font-display text-base sm:text-lg uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-black"
              }`}
            >
              {item.category}
            </button>
          );
        })}
      </div>

      {/* Architectural Spotlight Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Large Media Visual Display (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative h-[360px] sm:h-[460px] w-full bg-zinc-100 overflow-hidden group shadow-xs">
            <Image
              src={current.image}
              alt={current.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Top Minimal Category Badge */}
            <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-xs font-bold text-zinc-900 shadow-xs">
              {current.category}
            </div>
          </div>
        </div>

        {/* Detailed Engineering Specifications (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-zinc-50 p-6 sm:p-8 shadow-xs">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FFCC00] mb-2">
              Machine Profile
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight leading-none mb-3">
              {current.name}
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
              {current.tagline}
            </p>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4">
              <div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider">
                  Hoist Capacity
                </div>
                <div className="font-display font-black text-2xl text-zinc-950 mt-0.5">
                  {current.capacity}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider">
                  Boom Reach
                </div>
                <div className="font-display font-black text-2xl text-zinc-950 mt-0.5">
                  {current.boomLength}
                </div>
              </div>
            </div>

            {/* Primary Applications */}
            <div className="mt-6 pt-4">
              <div className="text-xs uppercase tracking-wider text-[#FFCC00] font-bold mb-3">
                Key Applications
              </div>
              <ul className="space-y-2">
                {current.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?machine=${current.id}`}
              className="flex-1 py-3 px-5 bg-[#FFCC00] text-black font-display font-black text-base uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-colors text-center flex items-center justify-center gap-2"
            >
              <span>Hire This Machine</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="py-3 px-5 bg-white text-zinc-900 font-display font-bold text-base uppercase tracking-wider hover:bg-zinc-100 transition-colors shadow-xs"
            >
              All Specs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
