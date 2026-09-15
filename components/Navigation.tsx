"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  PhoneCall, 
  Menu, 
  X, 
  ChevronRight, 
  Compass, 
  Clock, 
  HardHat
} from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "HOME", num: "01", desc: "Overview & Heavy Fleet" },
  { href: "/services", label: "SERVICES & FLEET", num: "02", desc: "RT Cranes, Crawlers, Boom Trucks" },
  { href: "/about", label: "ABOUT US", num: "03", desc: "Legacy, Standards & Safety" },
  { href: "/careers", label: "CAREERS", num: "04", desc: "Operators & Riggers" },
  { href: "/contact", label: "CONTACT & RFQ", num: "05", desc: "Crane Hire Estimates" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md border-b border-zinc-200 shadow-md"
            : "bg-white border-b border-zinc-200"
        }`}
      >
        {/* Upper Telemetry & Status Ribbon (Clean Industrial Header Top) */}
        <div className="hidden lg:flex items-center justify-between px-6 xl:px-12 py-1.5 bg-[#111216] border-b border-zinc-900 text-[11px] font-telemetry tracking-wider text-zinc-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="font-bold text-white uppercase tracking-widest">SRI LANKA OPERATIONS ACTIVE</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">COLOMBO &amp; HAMBANTOTA DEPOTS</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Compass className="w-3.5 h-3.5 text-[#FFCC00]" />
              <span>6°55&apos;37&quot;N 79°51&apos;40&quot;E</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FFCC00]" />
              <span>24/7 EMERGENCY DISPATCH</span>
            </div>
            <span className="text-zinc-700">|</span>
            <a
              href="tel:+94112915566"
              className="flex items-center gap-2 text-[#FFCC00] hover:text-white font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>HOTLINE: +94 11 291 5566</span>
            </a>
          </div>
        </div>

        {/* Main Industrial Navigation Bar (Liebherr Clean White Style) */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
          {/* Monolithic Brand Logo */}
          <Link href="/" className="group flex items-center gap-3 select-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#FFCC00] flex items-center justify-center font-display font-black text-2xl text-black shadow-md group-hover:bg-black group-hover:text-white transition-colors duration-200">
              KMS
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl sm:text-3xl text-zinc-950 tracking-wider leading-none">
                  CRANES
                </span>
                <span className="text-[10px] font-telemetry bg-zinc-900 text-[#FFCC00] px-1.5 py-0.5 font-bold uppercase tracking-tight">
                  LK
                </span>
              </div>
              <span className="text-[9px] font-telemetry text-zinc-500 tracking-widest uppercase">
                HEAVY LIFT &amp; MACHINERY HIRE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Mechanical Bracket Styling */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 group font-display uppercase tracking-wider text-sm lg:text-base font-bold transition-all duration-150 ${
                    isActive
                      ? "text-black bg-zinc-100"
                      : "text-zinc-700 hover:text-black hover:bg-zinc-50"
                  }`}
                >
                  <span className="text-[10px] font-telemetry text-zinc-400 mr-1.5 group-hover:text-black">
                    {link.num}
                  </span>
                  <span>{link.label}</span>

                  {/* Active Underline Beam */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FFCC00]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Direct CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="relative group hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#FFCC00] text-black font-display font-black text-base uppercase tracking-wider transition-all duration-200 shadow hover:bg-black hover:text-white active:scale-95"
            >
              <HardHat className="w-4 h-4 text-black group-hover:text-[#FFCC00]" />
              <span>REQUEST A QUOTE</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600"></span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-11 h-11 bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-800 hover:text-black transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Clean Light Blueprint Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto">
          {/* Diagonal Caution Accent */}
          <div className="w-full h-1.5 caution-stripes mb-6"></div>

          <div className="space-y-3">
            <div className="text-[10px] font-telemetry tracking-widest text-zinc-500 uppercase font-bold mb-4">
              [ SITE NAVIGATION TELEMETRY ]
            </div>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3.5 border transition-colors ${
                    isActive
                      ? "border-[#FFCC00] bg-[#FFCC00]/10 text-black font-bold"
                      : "border-zinc-200 bg-zinc-50 text-zinc-800 hover:border-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-telemetry text-xs text-zinc-500 font-bold">
                      {link.num}
                    </span>
                    <div>
                      <div className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900">
                        {link.label}
                      </div>
                      <div className="text-xs text-zinc-500 font-sans">{link.desc}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-400" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8 space-y-4 pt-6 border-t border-zinc-200">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider shadow"
            >
              <HardHat className="w-5 h-5" />
              HIRE CRANE &amp; ESTIMATE RFQ
            </Link>

            <div className="p-4 bg-zinc-100 border border-zinc-200 text-xs font-telemetry text-zinc-600 space-y-2">
              <div className="flex items-center justify-between">
                <span>COLOMBO DEPOT</span>
                <span className="text-zinc-900 font-bold">+94 11 291 5566</span>
              </div>
              <div className="flex items-center justify-between">
                <span>HAMBANTOTA DISPATCH</span>
                <span className="text-zinc-900 font-bold">+94 77 732 1890</span>
              </div>
              <div className="text-[10px] text-zinc-500 pt-1">
                KMS Cranes (Pvt) Ltd. Heavy Rigging &amp; Machinery Hire.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
