"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calculator, 
  FileText, 
  PhoneCall, 
  ArrowUp, 
  Crosshair
} from "lucide-react";

export default function TelemetrySidebar() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Quick Actions Dock"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col bg-white border-l border-t border-b border-zinc-300 shadow-xl backdrop-blur-md"
    >
      {/* Top Accent Strip */}
      <div className="w-full h-1 bg-[#FFCC00]"></div>

      <div className="flex flex-col py-1">
        {/* Quick RFQ Quote Icon */}
        <Link
          href="/contact"
          onMouseEnter={() => setActiveTooltip("quote")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="relative w-12 h-12 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-[#FFCC00] transition-colors border-b border-zinc-200 group"
          title="Instant Crane Hire RFQ"
        >
          <Calculator className="w-5 h-5" />
          {activeTooltip === "quote" && (
            <span className="absolute right-14 whitespace-nowrap bg-zinc-900 text-[#FFCC00] border border-black px-2.5 py-1 text-xs font-telemetry uppercase tracking-wider shadow-lg">
              Quick Crane RFQ
            </span>
          )}
        </Link>

        {/* Fleet Spec Sheets */}
        <Link
          href="/services"
          onMouseEnter={() => setActiveTooltip("specs")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="relative w-12 h-12 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-[#FFCC00] transition-colors border-b border-zinc-200 group"
          title="Fleet Specifications & Load Charts"
        >
          <FileText className="w-5 h-5" />
          {activeTooltip === "specs" && (
            <span className="absolute right-14 whitespace-nowrap bg-zinc-900 text-white border border-black px-2.5 py-1 text-xs font-telemetry uppercase tracking-wider shadow-lg">
              Fleet Spec Charts
            </span>
          )}
        </Link>

        {/* 24/7 Dispatch Hotline Direct Dial */}
        <a
          href="tel:+94112915566"
          onMouseEnter={() => setActiveTooltip("phone")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="relative w-12 h-12 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-[#FFCC00] transition-colors border-b border-zinc-200 group"
          title="Direct Dispatch Call"
        >
          <PhoneCall className="w-5 h-5 group-hover:text-black" />
          {activeTooltip === "phone" && (
            <span className="absolute right-14 whitespace-nowrap bg-zinc-900 text-[#FFCC00] border border-black px-2.5 py-1 text-xs font-telemetry uppercase tracking-wider shadow-lg">
              Call Dispatch: +94 11 291 5566
            </span>
          )}
        </a>

        {/* Jump To Top (Elevator Button) */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setActiveTooltip("top")}
            onMouseLeave={() => setActiveTooltip(null)}
            className="relative w-12 h-12 flex flex-col items-center justify-center text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors group cursor-pointer"
            title="Elevate to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[8px] font-telemetry uppercase tracking-tighter font-bold">TOP</span>
            {activeTooltip === "top" && (
              <span className="absolute right-14 whitespace-nowrap bg-zinc-900 text-zinc-200 border border-black px-2.5 py-1 text-xs font-telemetry uppercase tracking-wider shadow-lg">
                Jump To Top
              </span>
            )}
          </button>
        )}
      </div>

      {/* Mechanical Bottom Indicator */}
      <div className="py-1 px-1 flex justify-center bg-zinc-100 border-t border-zinc-200">
        <Crosshair className="w-3.5 h-3.5 text-zinc-400" />
      </div>
    </aside>
  );
}
