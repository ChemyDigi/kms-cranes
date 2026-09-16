"use client";

import React, { useState } from "react";
import { Check, ArrowRight, CheckCircle2 } from "lucide-react";

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
    boomReach: "31m to 62m Telescopic",
    bestFor: "Bridge foundations, unpaved terrain & tight access",
  },
  {
    type: "crawler-crane",
    name: "Lattice Crawler Crane",
    baseTonnage: 50,
    maxTonnage: 300,
    boomReach: "42m to 96m Lattice Jib",
    bestFor: "Harbor piling, wind turbines & precast girder launch",
  },
  {
    type: "boom-truck",
    name: "Hydraulic Boom Truck",
    baseTonnage: 5,
    maxTonnage: 25,
    boomReach: "14m to 28m Articulated",
    bestFor: "Factory machinery shifting & urban transport",
  },
  {
    type: "lowbed",
    name: "Multi-Axle Low Bed Trailer",
    baseTonnage: 30,
    maxTonnage: 120,
    boomReach: "Islandwide Transit",
    bestFor: "Heavy machinery haulage across provinces",
  },
];

export default function QuoteEstimator() {
  const [selectedType, setSelectedType] = useState<string>("rt-crane");
  const [tonnage, setTonnage] = useState<number>(50);
  const [duration, setDuration] = useState<string>("Daily (8-Hour Shift)");
  const [location, setLocation] = useState<string>("Colombo / Western Province");
  const [contactName, setContactName] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const currentMachine = FLEET_OPTIONS.find((f) => f.type === selectedType) || FLEET_OPTIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-zinc-50/80 p-6 sm:p-10 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 gap-4">
        <div>
          <span className="text-xs uppercase text-[#FFCC00] font-bold tracking-wider block mb-1">
            Quick Estimate Calculator
          </span>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight leading-none">
            Calculate Equipment &amp; Rate Guidance
          </h3>
        </div>
        <div className="text-xs text-zinc-600 bg-white px-3 py-1.5 self-start md:self-auto shadow-xs">
          Mobilization: 24 to 48 Hours Islandwide
        </div>
      </div>

      {submitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-display font-black text-3xl text-zinc-950 uppercase">
            Estimate Request Submitted
          </h4>
          <p className="max-w-md text-zinc-600 text-sm font-sans leading-relaxed">
            Our dispatch engineer is calculating equipment availability for your{" "}
            <span className="text-zinc-950 font-bold">{currentMachine.name}</span> in{" "}
            <span className="text-zinc-950 font-bold">{location}</span>. We will contact you at{" "}
            <span className="text-zinc-950 font-bold">{contactPhone}</span> promptly with certified rates.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 bg-zinc-950 text-white font-display text-base uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Calculate Another Machine
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Machine Selection & Slider (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs text-zinc-700 uppercase tracking-wider mb-2 font-bold">
                1. Select Equipment Classification
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className={`text-left p-4 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-zinc-950 text-white shadow-xs"
                          : "bg-white text-zinc-800 hover:bg-zinc-100 shadow-xs"
                      }`}
                    >
                      <div className="font-display font-bold text-base uppercase leading-tight">
                        {opt.name}
                      </div>
                      <div className={`text-[11px] mt-1 ${isSelected ? "text-zinc-300" : "text-zinc-500"}`}>
                        Range: {opt.baseTonnage}T to {opt.maxTonnage}T
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Capacity Slider */}
            <div className="bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs text-zinc-700 uppercase tracking-wider font-bold">
                  2. Required Lifting Capacity
                </label>
                <span className="font-display font-black text-2xl text-zinc-950">
                  {tonnage} Tonnes
                </span>
              </div>
              <input
                type="range"
                min={currentMachine.baseTonnage}
                max={currentMachine.maxTonnage}
                step={5}
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-xs appearance-none cursor-pointer accent-[#FFCC00]"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-2 font-medium">
                <span>Min: {currentMachine.baseTonnage}T</span>
                <span className="text-zinc-800 font-bold">{currentMachine.boomReach}</span>
                <span>Max: {currentMachine.maxTonnage}T</span>
              </div>
            </div>

            {/* Location & Duration Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-zinc-700 uppercase tracking-wider mb-2 font-bold">
                  3. Job Site Province
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 bg-white text-sm font-sans text-zinc-900 shadow-xs focus:outline-none"
                >
                  <option>Western Province (Colombo, Gampaha, Kalutara)</option>
                  <option>Southern Province (Hambantota, Galle, Matara)</option>
                  <option>Central Province (Kandy, Nuwara Eliya, Matale)</option>
                  <option>North Western Province (Kurunegala, Puttalam)</option>
                  <option>Eastern Province (Trincomalee, Batticaloa)</option>
                  <option>Northern Province (Jaffna, Mannar, Kilinochchi)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-zinc-700 uppercase tracking-wider mb-2 font-bold">
                  4. Expected Rental Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-3 bg-white text-sm font-sans text-zinc-900 shadow-xs focus:outline-none"
                >
                  <option>Daily (8-Hour Shift with Operator)</option>
                  <option>Weekly Hire (6-Day Dedicated Rig)</option>
                  <option>Monthly Project Contract (With Maintenance Crew)</option>
                  <option>Long-Term Infrastructure Project (3+ Months)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Summary & Submission Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-bold mb-1">
                Specification Summary
              </div>
              <div className="font-display font-black text-2xl text-zinc-950 uppercase">
                {currentMachine.name}
              </div>
              <div className="text-xs text-zinc-600 mt-1">
                Configured Capacity: {tonnage} Metric Tonnes
              </div>
            </div>

            <div className="space-y-2.5 py-2 text-xs sm:text-sm text-zinc-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black shrink-0" />
                <span>Certified crane operator &amp; signal lead included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black shrink-0" />
                <span>Computerized SLI safe load limiter calibrated</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black shrink-0" />
                <span>24/7 on-site mechanic and fueling support</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs text-zinc-700 uppercase tracking-wider mb-1 font-bold">
                  Contact Person / Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Perera / Maga Engineering"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full p-3 bg-zinc-50 text-sm text-zinc-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-700 uppercase tracking-wider mb-1 font-bold">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +94 77 123 4567"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full p-3 bg-zinc-50 text-sm text-zinc-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Request Rate Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
