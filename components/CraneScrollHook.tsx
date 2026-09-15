"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function CraneScrollHook() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate hook vertical travel from top (80px) down to near viewport bottom (calc(100vh - 180px))
  const hookY = useTransform(smoothProgress, [0, 1], ["80px", "calc(100vh - 180px)"]);
  const cableHeight = useTransform(smoothProgress, [0, 1], ["30px", "calc(100vh - 230px)"]);
  const winchRotation = useTransform(smoothProgress, [0, 1], [0, 1440]);
  
  // Real-time numeric telemetry calculated from progress
  const [telemetry, setTelemetry] = useState({
    depth: 0,
    loadTons: 12.4,
    tension: 38,
  });

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      setTelemetry({
        depth: parseFloat((v * 64.5).toFixed(1)),
        loadTons: parseFloat((15 + v * 85).toFixed(1)),
        tension: Math.min(99, Math.round(35 + v * 60)),
      });
    });
  }, [smoothProgress]);

  return (
    <div
      aria-hidden="true"
      className="fixed right-3 md:right-8 top-0 bottom-0 pointer-events-none z-40 hidden sm:flex flex-col items-center select-none"
      style={{ width: "90px" }}
    >
      {/* Crane Top Jib & Winch Assembly */}
      <div className="relative pt-20 flex flex-col items-center">
        {/* Lattice Boom Support Silhouette */}
        <div className="w-14 h-6 border-b-2 border-l-2 border-r-2 border-zinc-700 bg-white/95 shadow-md relative flex items-center justify-center">
          <div className="absolute -top-3 w-16 h-1 caution-stripes-slim"></div>
          {/* Rotating Motor Pulley */}
          <motion.div
            style={{ rotate: winchRotation }}
            className="w-5 h-5 rounded-full border-2 border-zinc-800 bg-[#FFCC00] flex items-center justify-center shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute w-4 h-0.5 bg-black/60"></div>
            <div className="absolute h-4 w-0.5 bg-black/60"></div>
          </motion.div>
        </div>

        {/* Cable Guide Pulley Wheel */}
        <div className="w-3 h-3 bg-zinc-900 rounded-full border border-black -mt-1 z-10"></div>
      </div>

      {/* Dynamic Braided Steel Wire Rope (Dark Charcoal on Light Theme) */}
      <motion.div
        style={{ height: cableHeight }}
        className="w-[2.5px] bg-gradient-to-b from-zinc-800 via-zinc-600 to-zinc-900 relative shadow-sm"
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:2px_8px]"></div>
      </motion.div>

      {/* Heavy-Duty Forged Crane Hook Block */}
      <motion.div
        style={{ y: hookY }}
        className="absolute top-0 flex flex-col items-center"
      >
        {/* Pulley Sheave Housing */}
        <div className="w-10 h-11 bg-zinc-900 border border-black rounded-t-sm shadow-xl flex flex-col items-center justify-between p-1 relative overflow-hidden">
          {/* Safety Yellow Chevron Header */}
          <div className="w-full h-2 caution-stripes-slim rounded-t-xs"></div>

          {/* Central Sheave Pin */}
          <div className="w-4 h-4 rounded-full border border-[#FFCC00] bg-zinc-800 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
          </div>

          <div className="text-[7px] font-telemetry tracking-tighter text-[#FFCC00] uppercase font-bold">
            KMS-120T
          </div>
        </div>

        {/* Heavy Swivel Forged Hook SVG */}
        <div className="relative -mt-0.5">
          <svg
            width="34"
            height="44"
            viewBox="0 0 34 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]"
          >
            {/* Hook Shank */}
            <rect x="14" y="0" width="6" height="8" rx="1" fill="#FFCC00" stroke="#111" strokeWidth="1" />
            
            {/* Safety Latch Spring */}
            <path
              d="M14 10 L23 20"
              stroke="#EF4444"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Curved Steel Hook Body */}
            <path
              d="M17 6 C17 14 10 14 10 23 C10 33 26 36 26 25 C26 21 21 21 21 24 C21 26 23 27 23 28 C23 31 15 31 15 24 C15 17 21 16 21 8 Z"
              fill="#FFCC00"
              stroke="#0a0b0d"
              strokeWidth="1.5"
            />

            {/* Hook Tip */}
            <circle cx="25" cy="24" r="2" fill="#000" stroke="#FFCC00" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Live Hook Telemetry Tag (Light theme card) */}
        <div className="mt-1 bg-white/95 border-2 border-zinc-800 shadow-xl px-2 py-1.5 rounded-xs flex flex-col items-start min-w-[86px] text-left">
          <div className="flex items-center justify-between w-full border-b border-zinc-200 pb-0.5 mb-1">
            <span className="text-[8px] font-telemetry font-bold text-black uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              HOIST
            </span>
            <span className="text-[8px] font-telemetry text-zinc-500 font-bold">SLI: OK</span>
          </div>

          <div className="text-[12px] font-display font-black text-zinc-950 tracking-wide leading-tight">
            -{telemetry.depth} M
          </div>

          <div className="flex items-center justify-between w-full text-[8px] font-telemetry text-zinc-600 mt-0.5">
            <span>LOAD</span>
            <span className="text-black font-black">{telemetry.loadTons}T</span>
          </div>

          {/* Mini tension gauge bar */}
          <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden mt-1 border border-zinc-300">
            <div
              className="h-full bg-[#FFCC00]"
              style={{ width: `${telemetry.tension}%` }}
            ></div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Ground Reference Line */}
      <div className="absolute bottom-4 flex flex-col items-center">
        <div className="w-8 h-0.5 bg-zinc-400"></div>
        <span className="text-[7px] font-telemetry text-zinc-500 uppercase tracking-widest mt-0.5 font-bold">
          DATUM 0.0M
        </span>
      </div>
    </div>
  );
}
