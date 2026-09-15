"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  Calendar, 
  MapPin, 
  SlidersHorizontal,
  HardHat
} from "lucide-react";

interface FleetEstimate {
  type: string;
  name: string;
  baseTonnage: number;
  maxTonnage: number;
  boomReach: string;
  bestFor: string;
}

const FLEET_OPTIONS: FleetEstimate[] = [
  {
    type: "rt-crane",
    name: "Rough Terrain (RT) Crane",
    baseTonnage: 25,
    maxTonnage: 130,
    boomReach: "31m - 62m Telescopic",
    bestFor: "Challenging construction sites, mud, uneven industrial grounds",
  },
  {
    type: "crawler-crane",
    name: "Lattice Boom Crawler Crane",
    baseTonnage: 50,
    maxTonnage: 300,
    boomReach: "42m - 96m Lattice Jib",
    bestFor: "Infrastructure bridges, harbor piling, wind turbine installations",
  },
  {
    type: "boom-truck",
    name: "Hydraulic Boom Truck",
    baseTonnage: 5,
    maxTonnage: 25,
    boomReach: "14m - 28m Articulated",
    bestFor: "Transport, self-loading cargo, street-side signage, transformer erection",
  },
  {
    type: "forklift",
    name: "Heavy Industrial Forklift",
    baseTonnage: 3,
    maxTonnage: 25,
    boomReach: "4.5m - 6.5m Triplex Mast",
    bestFor: "Port warehouses, container de-stuffing, factory machinery placement",
  },
  {
    type: "lowbed",
    name: "Multi-Axle Low Bed Trailer",
    baseTonnage: 40,
    maxTonnage: 120,
    boomReach: "Islandwide Haulage Deck",
    bestFor: "Moving excavators, bulldozers, transformers & heavy equipment across Sri Lanka",
  },
];

const SRI_LANKA_DISTRICTS = [
  "Colombo / Port City",
  "Gampaha / Kelaniya / Biyagama",
  "Kalutara / Horana",
  "Hambantota Port & Airport Zone",
  "Galle / Southern Province",
  "Kandy / Central Expressway",
  "Trincomalee / Eastern Harbor",
  "Jaffna / Northern Province",
  "Kurunegala / North Western",
  "Anuradhapura / Polonnaruwa",
];

export default function QuoteEstimator() {
  const [selectedType, setSelectedType] = useState<string>("rt-crane");
  const [tonnage, setTonnage] = useState<number>(50);
  const [durationDays, setDurationDays] = useState<number>(7);
  const [hireType, setHireType] = useState<"wet" | "dry">("wet");
  const [location, setLocation] = useState<string>("Colombo / Port City");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");

  const currentMachine = FLEET_OPTIONS.find((f) => f.type === selectedType) || FLEET_OPTIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white border-2 border-zinc-300 crosshair-corner p-6 sm:p-8 lg:p-10 shadow-xl relative">
      {/* Header Telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-telemetry text-zinc-900 uppercase font-bold tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-black" />
            <span className="bg-[#FFCC00] px-2 py-0.5">KMS HIRE CALCULATOR &amp; DISPATCH ENGINE</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-zinc-950 uppercase tracking-tight mt-2">
            ESTIMATE YOUR HEAVY LIFT HIRE
          </h3>
        </div>
        <div className="bg-zinc-100 border border-zinc-300 px-4 py-2 font-telemetry text-xs text-zinc-700">
          MOBILIZATION: <span className="text-black font-bold">24 - 48 HRS</span>
        </div>
      </div>

      {submitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FFCC00] border-2 border-black flex items-center justify-center text-black">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="font-display font-black text-3xl text-zinc-950 uppercase">
            ESTIMATE REQUEST LOGGED!
          </h4>
          <p className="max-w-md text-zinc-600 text-sm font-sans">
            Our dispatch supervisor is reviewing your requirements for{" "}
            <span className="text-black font-bold">{currentMachine.name}</span> in{" "}
            <span className="text-black font-bold">{location}</span>. We will call you at{" "}
            <span className="text-black font-bold font-mono">{contactPhone}</span> within 30 minutes with guaranteed rates.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 bg-black hover:bg-zinc-800 text-white font-display text-sm uppercase tracking-wider transition-colors"
          >
            Calculate Another Machine
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Configuration Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Machine Category Selector */}
            <div>
              <label className="block text-xs font-telemetry text-zinc-700 uppercase tracking-wider mb-2 font-bold">
                1. SELECT MACHINERY CLASSIFICATION
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FLEET_OPTIONS.map((opt) => {
                  const isSelected = selectedType === opt.type;
                  return (
                    <button
                      type="button"
                      key={opt.type}
                      onClick={() => {
                        setSelectedType(opt.type);
                        setTonnage(Math.min(Math.max(tonnage, opt.baseTonnage), opt.maxTonnage));
                      }}
                      className={`text-left p-3 border transition-all ${
                        isSelected
                          ? "bg-zinc-100 border-black text-black shadow-md border-l-4 border-l-[#FFCC00]"
                          : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-black"
                      }`}
                    >
                      <div className="font-display font-bold text-base uppercase leading-tight">
                        {opt.name}
                      </div>
                      <div className="text-[11px] font-telemetry text-zinc-500 mt-0.5">
                        Range: {opt.baseTonnage}T - {opt.maxTonnage}T
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Capacity Tonnage Slider */}
            <div className="bg-zinc-50 p-5 border border-zinc-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-telemetry text-zinc-800 uppercase tracking-wider font-bold">
                  2. REQUIRED LIFTING CAPACITY
                </label>
                <span className="font-display font-black text-2xl text-black">
                  {tonnage} TONNES
                </span>
              </div>
              <input
                type="range"
                min={currentMachine.baseTonnage}
                max={currentMachine.maxTonnage}
                step={5}
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                className="w-full h-2 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-[#FFCC00]"
              />
              <div className="flex justify-between text-[11px] font-telemetry text-zinc-500 mt-2 font-medium">
                <span>Min: {currentMachine.baseTonnage}T</span>
                <span className="text-zinc-800 font-bold">{currentMachine.boomReach}</span>
                <span>Max: {currentMachine.maxTonnage}T</span>
              </div>
            </div>

            {/* Step 3: Location and Duration in Sri Lanka */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-telemetry text-zinc-700 uppercase tracking-wider mb-2 font-bold">
                  3. PROJECT LOCATION
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm font-sans focus:outline-none focus:border-black"
                  >
                    {SRI_LANKA_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-black absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-telemetry text-zinc-700 uppercase tracking-wider mb-2 font-bold">
                  4. HIRE CONTRACT DURATION
                </label>
                <div className="relative">
                  <select
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm font-sans focus:outline-none focus:border-black"
                  >
                    <option value={1}>1 Day (Single Shift Lift)</option>
                    <option value={3}>3 Days (Short Project)</option>
                    <option value={7}>1 Week (7 Days Standard)</option>
                    <option value={14}>2 Weeks (14 Days Extended)</option>
                    <option value={30}>1 Month (Long-Term Heavy Contract)</option>
                    <option value={90}>3+ Months (Major Infrastructure)</option>
                  </select>
                  <Calendar className="w-4 h-4 text-black absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Wet Hire vs Dry Hire Selection */}
            <div>
              <label className="block text-xs font-telemetry text-zinc-700 uppercase tracking-wider mb-2 font-bold">
                5. OPERATOR &amp; CREW PROVISION
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHireType("wet")}
                  className={`p-3 border text-left flex items-start gap-2.5 transition-all ${
                    hireType === "wet"
                      ? "bg-zinc-100 border-black text-black border-l-4 border-l-[#FFCC00]"
                      : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400"
                  }`}
                >
                  <HardHat className={`w-4 h-4 mt-0.5 ${hireType === "wet" ? "text-black" : "text-zinc-400"}`} />
                  <div>
                    <div className="font-display font-bold text-sm uppercase">WET HIRE (RECOMMENDED)</div>
                    <div className="text-[11px] text-zinc-500">Includes Certified Operator + Lead Rigger + Fuel</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setHireType("dry")}
                  className={`p-3 border text-left flex items-start gap-2.5 transition-all ${
                    hireType === "dry"
                      ? "bg-zinc-100 border-black text-black border-l-4 border-l-[#FFCC00]"
                      : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400"
                  }`}
                >
                  <Truck className={`w-4 h-4 mt-0.5 ${hireType === "dry" ? "text-black" : "text-zinc-400"}`} />
                  <div>
                    <div className="font-display font-bold text-sm uppercase">DRY HIRE</div>
                    <div className="text-[11px] text-zinc-500">Machine only (Client provides approved operator)</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Summary & Immediate RFQ Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-100 border border-zinc-300 p-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-300">
                <span className="text-xs font-telemetry uppercase text-zinc-600 font-bold">ESTIMATE OVERVIEW</span>
                <span className="text-xs font-telemetry text-black bg-[#FFCC00] px-2 py-0.5 font-bold">READY TO DISPATCH</span>
              </div>

              <div className="mt-4 space-y-3 font-telemetry text-sm">
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-500">MACHINE:</span>
                  <span className="font-bold text-zinc-950 uppercase text-right">{currentMachine.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-500">TONNAGE CLASS:</span>
                  <span className="font-black text-black">{tonnage} TONNES</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-500">ESTIMATED REACH:</span>
                  <span className="font-bold text-zinc-900">{currentMachine.boomReach}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-500">DESTINATION:</span>
                  <span className="font-bold text-zinc-900 text-right">{location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-500">SERVICE MODE:</span>
                  <span className="font-bold text-zinc-900 uppercase">{hireType === "wet" ? "Full Wet Hire" : "Dry Hire"}</span>
                </div>
              </div>

              <div className="mt-6 p-3.5 bg-white border-l-4 border-l-[#FFCC00] border border-zinc-200 text-xs font-sans text-zinc-700 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-black inline mr-1 -mt-0.5" />
                All KMS machinery is certified under annual load-test inspection with SLSI calibration &amp; comprehensive insurance.
              </div>

              {/* Direct Input Fields */}
              <div className="mt-6 space-y-3">
                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    YOUR FULL NAME / COMPANY
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Access Engineering / John Perera"
                    className="w-full bg-white border border-zinc-300 text-zinc-900 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    SRI LANKA CONTACT PHONE (MOBILE)
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. +94 77 123 4567"
                    className="w-full bg-white border border-zinc-300 text-zinc-900 px-3 py-2 text-sm font-telemetry focus:outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>

            {/* Instant Submit CTA */}
            <div className="mt-6 pt-4 border-t border-zinc-300">
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-200 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST INSTANT RATE &amp; AVAILABILITY</span>
              </button>
              <div className="text-[10px] font-telemetry text-center text-zinc-500 mt-2">
                NO HIDDEN CHARGES // IMMEDIATE SL DISPATCH
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
