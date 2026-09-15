"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "motion/react";

export default function CraneScrollHook() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Smooth percentage interpolation - 94% ensures the hook touches the ground/bottom
  const cableHeight = useTransform(smoothProgress, [0, 1], ["0%", "94%"]);
  const pulleyRotate = useTransform(smoothProgress, [0, 1], [0, 1080]);

  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed right-3 md:right-6 top-20 bottom-12 pointer-events-none z-30 hidden lg:flex flex-col items-center select-none w-12"
    >
      {/* Top Boom Tip & Pulley Wheel */}
      <div className="relative flex flex-col items-center z-10 shrink-0">
        <div className="w-7 h-3.5 border-b border-l border-r border-zinc-400 bg-zinc-100 flex items-center justify-center shadow-xs">
          <motion.div
            style={{ rotate: pulleyRotate }}
            className="w-3 h-3 rounded-full border border-zinc-800 bg-[#FFCC00] flex items-center justify-center"
          >
            <div className="w-1 h-1 bg-zinc-950 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Vertical Travel Track */}
      <div className="relative flex-1 w-full flex flex-col items-center">
        {/* Background Elevation Depth Scale */}
        <div className="absolute inset-y-0 right-[23px] w-[1px] bg-zinc-200 flex flex-col justify-between py-1">
          <span className="text-[8px] font-telemetry text-zinc-400 -translate-x-full pr-1 select-none">
            0m
          </span>
          <span className="text-[8px] font-telemetry text-zinc-300 -translate-x-full pr-1 select-none">
            25m
          </span>
          <span className="text-[8px] font-telemetry text-zinc-300 -translate-x-full pr-1 select-none">
            50m
          </span>
          <span className="text-[8px] font-telemetry text-zinc-400 -translate-x-full pr-1 select-none">
            75m
          </span>
        </div>

        {/* Braided Steel Wire Cable */}
        <motion.div
          style={{ height: cableHeight }}
          className="w-[1.5px] bg-zinc-700 relative flex flex-col items-center"
        >
          {/* Crane Hook physically anchored to the bottom of the extending cable */}
          <div className="absolute top-full flex flex-col items-center -translate-y-0.5">
            {/* Sheave Block */}
            <div className="w-6 h-6 bg-zinc-950 border border-black flex flex-col items-center justify-between p-0.5 shadow-sm">
              <div className="w-full h-0.5 bg-[#FFCC00]" />
              <div className="w-2 h-2 rounded-full border border-[#FFCC00] bg-zinc-800 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-[#FFCC00]" />
              </div>
            </div>

            {/* Forged Steel Hook */}
            <div className="relative -mt-0.5">
              <svg
                width="22"
                height="30"
                viewBox="0 0 34 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
              >
                <rect x="14" y="0" width="6" height="8" fill="#FFCC00" stroke="#18181b" strokeWidth="1.2" />
                <path d="M14 10 L23 20" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M17 6 C17 14 10 14 10 23 C10 33 26 36 26 25 C26 21 21 21 21 24 C21 26 23 27 23 28 C23 31 15 31 15 24 C15 17 21 16 21 8 Z"
                  fill="#FFCC00"
                  stroke="#18181b"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
