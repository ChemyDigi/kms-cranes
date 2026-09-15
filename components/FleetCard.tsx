import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

interface FleetCardProps {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  capacity: string;
  maxBoom: string;
  bestFor: string;
  image: string;
  href: string;
}

export default function FleetCard({
  number,
  category,
  title,
  tagline,
  capacity,
  maxBoom,
  bestFor,
  image,
  href,
}: FleetCardProps) {
  return (
    <div className="group relative bg-white border border-zinc-200 hover:border-[#FFCC00] transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl">
      {/* Top Telemetry Header Strip */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-zinc-100 border-b border-zinc-200 text-xs font-telemetry">
        <div className="flex items-center gap-2">
          <span className="font-black text-black text-sm">{number}</span>
          <span className="text-zinc-400">//</span>
          <span className="text-zinc-700 font-bold uppercase tracking-wider">{category}</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-600 font-mono text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          <span>AVAILABLE FOR HIRE</span>
        </div>
      </div>

      {/* Image Viewport with Hover Zoom & Vertical Badge */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-900">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

        {/* Vertical Category Tag (Inspired directly by Liebherr reference image #1) */}
        <div className="absolute left-4 bottom-4 top-4 pointer-events-none flex items-end">
          <div className="writing-vertical-lr rotate-180 text-[11px] font-display font-black tracking-widest text-white uppercase bg-black/80 px-1 py-3 border-r-2 border-[#FFCC00]">
            {category}
          </div>
        </div>

        {/* Floating Quick Metric Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
          <div className="bg-black/90 border border-[#FFCC00] px-2.5 py-1 text-xs font-telemetry font-bold text-white shadow-lg">
            CAPACITY: <span className="text-[#FFCC00]">{capacity}</span>
          </div>
          <div className="bg-black/90 border border-zinc-600 px-2.5 py-1 text-[11px] font-telemetry text-zinc-200">
            BOOM: {maxBoom}
          </div>
        </div>
      </div>

      {/* Card Content & Telemetry */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-950 uppercase tracking-tight group-hover:text-black transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 font-sans leading-relaxed">
            {tagline}
          </p>

          {/* Key capability bullet */}
          <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center gap-2 text-xs font-telemetry text-zinc-700 bg-zinc-50 p-2 border border-zinc-200">
            <Shield className="w-3.5 h-3.5 text-black shrink-0" />
            <span className="truncate font-semibold">BEST: {bestFor}</span>
          </div>
        </div>

        {/* Action Button (Liebherr Style: Yellow bar with black text & arrow) */}
        <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
          <Link
            href={href}
            className="w-full inline-flex items-center justify-between px-5 py-3 bg-[#FFCC00] text-black font-display font-black text-base uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200 shadow-sm"
          >
            <span>EXPLORE SPECS &amp; HIRE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
