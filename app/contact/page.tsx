"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Compass
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    machineType: "Rough Terrain (RT) Crane",
    capacity: "50 Tonnes",
    location: "Colombo / Port City",
    duration: "1 Week",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.name) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col py-12 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto bg-white text-zinc-900">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-10">
        <div className="text-xs font-telemetry text-zinc-800 uppercase font-bold tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FFCC00]"></span>
          <span>DISPATCH DESK &bull; REQUEST FOR QUOTATION (RFQ)</span>
        </div>
        <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-zinc-950 uppercase tracking-tight">
          CONTACT KMS CRANES
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-700 font-sans max-w-3xl leading-relaxed">
          Need a heavy crane on site tomorrow or planning a major structural project? Contact our 24/7 dispatch desk in Kelaniya and Hambantota. We provide fast quotes, transparent pricing, and immediate equipment mobilization.
        </p>
      </div>

      {/* Main 2-Column Contact Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact & Depot Details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Emergency Hotlines Card */}
          <div className="bg-zinc-50 border-2 border-black p-6 sm:p-8 relative shadow-md">
            <div className="flex items-center gap-2 text-xs font-telemetry text-black font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              24/7 DIRECT DISPATCH HOTLINE
            </div>
            <h3 className="font-display font-black text-3xl text-zinc-950 uppercase">
              IMMEDIATE MOBILIZATION
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans mt-2">
              For emergency lifts, site breakdowns, port container handling, or immediate equipment dispatch, call our operations desk directly:
            </p>

            <div className="mt-6 space-y-4 font-telemetry">
              <a
                href="tel:+94112915566"
                className="flex items-center gap-3 p-3.5 bg-white border border-zinc-300 hover:border-black text-zinc-900 transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5 text-black" />
                <div>
                  <div className="font-black text-lg text-black">+94 11 291 5566</div>
                  <div className="text-[10px] text-zinc-500 font-semibold">Main Depot // Kelaniya Direct</div>
                </div>
              </a>

              <a
                href="tel:+94777321890"
                className="flex items-center gap-3 p-3.5 bg-white border border-zinc-300 hover:border-black text-zinc-900 transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5 text-black" />
                <div>
                  <div className="font-black text-lg text-black">+94 77 732 1890</div>
                  <div className="text-[10px] text-zinc-500 font-semibold">Hambantota &amp; Islandwide Mobile Dispatch</div>
                </div>
              </a>

              <a
                href="mailto:info@kmscranes.lk"
                className="flex items-center gap-3 p-3.5 bg-white border border-zinc-300 hover:border-black text-zinc-900 transition-colors shadow-sm"
              >
                <Mail className="w-5 h-5 text-black" />
                <div>
                  <div className="font-bold text-sm text-zinc-900">info@kmscranes.lk</div>
                  <div className="text-[10px] text-zinc-500 font-semibold">Formal Quotations &amp; Tender Inquiries</div>
                </div>
              </a>
            </div>
          </div>

          {/* Depot Locations Card */}
          <div className="bg-white border border-zinc-300 p-6 space-y-6 shadow-sm">
            <h4 className="font-display font-black text-2xl text-zinc-950 uppercase tracking-wider pb-3 border-b border-zinc-200">
              DEPOT COORDINATES &amp; YARDS
            </h4>

            <div className="space-y-4 font-telemetry text-xs">
              <div className="p-4 bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between text-black font-bold">
                  <span>KELANIYA / COLOMBO CENTRAL YARD</span>
                  <span className="text-[10px] bg-black text-white px-2 py-0.5">HQ</span>
                </div>
                <div className="text-zinc-700 mt-2">
                  No. 142/B, Kandy Road, Peliyagoda / Kelaniya, Sri Lanka
                </div>
                <div className="text-zinc-500 text-[11px] mt-1 flex items-center gap-1.5 font-medium">
                  <Compass className="w-3.5 h-3.5 text-black" />
                  <span>GPS: 6.9582° N, 79.9142° E</span>
                </div>
              </div>

              <div className="p-4 bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between text-black font-bold">
                  <span>HAMBANTOTA SOUTHERN DEPOT</span>
                  <span className="text-[10px] bg-black text-white px-2 py-0.5">BRANCH</span>
                </div>
                <div className="text-zinc-700 mt-2">
                  Heavy Industrial Zone, Mirijjawila, Hambantota, Sri Lanka
                </div>
                <div className="text-zinc-500 text-[11px] mt-1 flex items-center gap-1.5 font-medium">
                  <Compass className="w-3.5 h-3.5 text-black" />
                  <span>GPS: 6.1345° N, 81.0821° E</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs font-telemetry text-zinc-600 flex items-center gap-2">
              <Clock className="w-4 h-4 text-black" />
              <span>OFFICE: MON - SAT 8:00 AM - 6:00 PM | YARD: 24/7 DISPATCH</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full Crane Hire Request (RFQ) Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border-2 border-zinc-300 p-6 sm:p-8 lg:p-10 crosshair-corner shadow-lg">
          <div className="pb-4 border-b border-zinc-200 mb-6">
            <span className="text-xs font-telemetry text-black bg-[#FFCC00] px-2 py-0.5 uppercase font-bold tracking-widest">
              OFFICIAL HIRE INQUIRY
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase mt-2">
              REQUEST A CRANE HIRE QUOTE
            </h3>
            <p className="text-xs text-zinc-600 font-sans mt-1">
              Fill in your lift specs below and our senior rigging engineer will calculate exact machine feasibility and send guaranteed rates.
            </p>
          </div>

          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFCC00] border-2 border-black flex items-center justify-center text-black mx-auto shadow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-black text-3xl text-zinc-950 uppercase">
                QUOTE REQUEST TRANSMITTED!
              </h4>
              <p className="max-w-md text-zinc-700 text-sm font-sans mx-auto leading-relaxed">
                Thank you, <span className="text-black font-bold">{formData.name}</span>. Your inquiry for a{" "}
                <span className="text-black font-bold">{formData.capacity} {formData.machineType}</span> in{" "}
                <span className="text-black font-bold">{formData.location}</span> has been routed to our dispatch engineers.
              </p>
              <div className="text-xs font-telemetry text-zinc-600">
                We will call your mobile <span className="text-black font-bold font-mono">{formData.phone}</span> shortly.
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-black hover:bg-zinc-800 text-white font-display text-sm uppercase tracking-wider transition-colors"
              >
                Submit Additional Inquiries
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ruwan Wickremasinghe"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    COMPANY / CONTRACTOR NAME
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Maga Engineering / Access"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    CONTACT PHONE (MOBILE) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +94 77 123 4567"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm font-telemetry focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. r.wick@engineering.lk"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    MACHINE TYPE REQUIRED
                  </label>
                  <select
                    value={formData.machineType}
                    onChange={(e) => setFormData({ ...formData, machineType: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                  >
                    <option value="Rough Terrain (RT) Crane">Rough Terrain (RT) Crane</option>
                    <option value="Lattice Crawler Crane">Lattice Crawler Crane</option>
                    <option value="Hydraulic Boom Truck">Hydraulic Boom Truck</option>
                    <option value="Heavy Industrial Forklift">Heavy Industrial Forklift</option>
                    <option value="Multi-Axle Low Bed Trailer">Multi-Axle Low Bed Trailer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    ESTIMATED CAPACITY
                  </label>
                  <select
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                  >
                    <option value="25 Tonnes">25 Tonnes</option>
                    <option value="50 Tonnes">50 Tonnes</option>
                    <option value="70 Tonnes">70 Tonnes</option>
                    <option value="100 Tonnes">100 Tonnes</option>
                    <option value="130 Tonnes">130 Tonnes</option>
                    <option value="200+ Tonnes (Crawler Heavy)">200+ Tonnes (Crawler Heavy)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    PROJECT SITE LOCATION IN SRI LANKA
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Kelani River Bridge / Hambantota Port"
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                    ESTIMATED HIRE DURATION
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                  >
                    <option value="1 Day (Single Shift)">1 Day (Single Shift)</option>
                    <option value="3 Days">3 Days</option>
                    <option value="1 Week (7 Days)">1 Week (7 Days)</option>
                    <option value="2 Weeks">2 Weeks</option>
                    <option value="1 Month+ (Long-Term)">1 Month+ (Long-Term)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                  SPECIFIC LIFT DETAILS / GROUND CONDITIONS / RADIUS (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Lifting precast bridge girders over water; need 40m reach with 20T load at 15m radius."
                  className="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#FFCC00] text-black font-display font-black text-xl uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-200 shadow-md"
                >
                  <Send className="w-5 h-5" />
                  <span>SUBMIT RFQ FOR IMMEDIATE RATE REVIEW</span>
                </button>
                <div className="text-[11px] font-telemetry text-center text-zinc-500 mt-2 font-medium">
                  CONFIDENTIAL TENDER &bull; ZERO OBLIGATION &bull; NO HIDDEN CHARGES
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
