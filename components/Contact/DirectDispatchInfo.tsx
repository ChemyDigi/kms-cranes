import React from "react";
import { Phone, Mail, Clock, Compass, Wrench } from "lucide-react";

export default function DirectDispatchInfo() {
  return (
    <div className="space-y-8">
      {/* Emergency Hotlines Card */}
      <div className="bg-zinc-50 p-6 sm:p-8 shadow-xs">
        <div className="text-xs text-[#FFCC00] font-bold uppercase tracking-wider mb-2">
          24/7 Direct Dispatch Hotline
        </div>
        <h3 className="font-display font-black text-3xl text-zinc-950 uppercase">
          Immediate Mobilization
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 font-sans mt-2">
          For emergency lifts, site breakdowns, port container handling, or immediate equipment dispatch, call our operations desk directly:
        </p>

        <div className="mt-6 space-y-3">
          <a
            href="tel:+94112915566"
            className="flex items-center gap-3 p-4 bg-white text-zinc-900 transition-colors shadow-xs"
          >
            <Phone className="w-5 h-5 text-black shrink-0" />
            <div>
              <div className="font-black text-lg text-black">+94 11 291 5566</div>
              <div className="text-[11px] text-zinc-500 font-medium">
                Headquarters Operations Desk &bull; Angoda
              </div>
            </div>
          </a>

          <a
            href="tel:+94777321890"
            className="flex items-center gap-3 p-4 bg-white text-zinc-900 transition-colors shadow-xs"
          >
            <Phone className="w-5 h-5 text-black shrink-0" />
            <div>
              <div className="font-black text-lg text-black">+94 77 732 1890</div>
              <div className="text-[11px] text-zinc-500 font-medium">
                24/7 Islandwide Emergency Dispatch Hotline
              </div>
            </div>
          </a>

          <a
            href="mailto:info@kmscranes.lk"
            className="flex items-center gap-3 p-4 bg-white text-zinc-900 transition-colors shadow-xs"
          >
            <Mail className="w-5 h-5 text-black shrink-0" />
            <div>
              <div className="font-bold text-sm text-zinc-900">info@kmscranes.lk</div>
              <div className="text-[11px] text-zinc-500 font-medium">
                Formal Quotations &amp; Tender Inquiries
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Headquarters & Yard Card */}
      <div className="bg-zinc-50 p-6 sm:p-8 space-y-6 shadow-xs">
        <h4 className="font-display font-black text-2xl text-zinc-950 uppercase tracking-wider">
          Headquarters &amp; Equipment Yard
        </h4>

        <div className="space-y-4 text-xs">
          <div className="p-4 bg-white shadow-xs">
            <div className="flex items-center justify-between text-black font-bold">
              <span>KMS Cranes &amp; Equipment (Pvt) Ltd</span>
              <span className="text-[10px] bg-zinc-900 text-white px-2 py-0.5">HQ &amp; Yard</span>
            </div>
            <div className="text-zinc-900 font-semibold mt-2">
              349 Avissawella Rd, Angoda 10620, Sri Lanka
            </div>
            <div className="text-zinc-500 text-[11px] mt-1 flex items-center gap-1.5 font-medium">
              <Compass className="w-3.5 h-3.5 text-black shrink-0" />
              <span>Avissawella Road &bull; Rapid Expressway &amp; Arterial Access</span>
            </div>
          </div>

          <div className="p-4 bg-white shadow-xs">
            <div className="flex items-center justify-between text-black font-bold">
              <span>Central Fleet Yard &amp; Maintenance Depot</span>
              <span className="text-[10px] bg-[#FFCC00] text-black px-2 py-0.5 font-bold">24/7 Ready</span>
            </div>
            <div className="text-zinc-600 mt-2 leading-relaxed">
              Complete fleet staging yard, hydraulic maintenance workshops, SLSI load test equipment, and heavy low-bed trailer transport hub.
            </div>
            <div className="text-zinc-500 text-[11px] mt-2 flex items-center gap-1.5 font-medium">
              <Wrench className="w-3.5 h-3.5 text-black shrink-0" />
              <span>Full-Service Repair &amp; Rigging Support</span>
            </div>
          </div>
        </div>

        <div className="pt-2 text-xs text-zinc-600 flex items-center gap-2">
          <Clock className="w-4 h-4 text-black shrink-0" />
          <span>Office: Mon - Sat 8:00 AM - 6:00 PM | Fleet Yard: 24/7 Dispatch Islandwide</span>
        </div>
      </div>
    </div>
  );
}
