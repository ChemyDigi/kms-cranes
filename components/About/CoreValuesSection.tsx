import React from "react";
import { ShieldCheck, Scale, Clock, HardHat } from "lucide-react";

const CORE_VALUES = [
  {
    title: "1. UNCOMPROMISING SAFETY",
    desc: "We enforce a zero-incident policy. If ground pressure, wind velocity, or rigging angles exceed safety margins, our operators are empowered to pause work until conditions are verified.",
    icon: ShieldCheck,
  },
  {
    title: "2. TRANSPARENT PRICING",
    desc: "We provide upfront, competitive rates with clear shift hours, transparent mobilization costs, and no deceptive standby penalties. Fair prices for nation-building contractors.",
    icon: Scale,
  },
  {
    title: "3. RAPID DISPATCH",
    desc: "With operational hubs strategically positioned in Kelaniya (Western Province) and Hambantota (Southern Province), we dispatch heavy cranes islandwide within 24 to 48 hours.",
    icon: Clock,
  },
  {
    title: "4. CERTIFIED EXPERTISE",
    desc: "Every crane operator and rigging lead in the KMS team holds recognized national heavy-licensing endorsements, SLSI qualifications, and continuous safety training.",
    icon: HardHat,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-wider font-bold text-[#FFCC00] block">
          Our Foundation
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
          Core Principles Driving Every Rigging Operation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CORE_VALUES.map((val, idx) => {
          const Icon = val.icon;
          return (
            <div
              key={idx}
              className="bg-zinc-50 p-6 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="w-12 h-12 bg-white flex items-center justify-center text-black mb-5 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl text-zinc-950 uppercase tracking-wide">
                  {val.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
