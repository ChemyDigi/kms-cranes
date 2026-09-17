import React from "react";
import Image from "next/image";

export default function CeoQuoteBanner() {
  return (
    <section className="w-full bg-zinc-950 text-white py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
        {/* Executive Portrait */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-zinc-900 overflow-hidden shadow-xl">
            <Image
              src="/images/CEO.jpg"
              alt="Lukshan Chanaka, Managing Director of KMS Cranes"
              fill
              sizes="(max-width: 768px) 260px, 300px"
              className="object-cover object-top filter grayscale contrast-110"
            />
          </div>
        </div>

        {/* Leadership Statement */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <blockquote className="space-y-6">
            <p className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug uppercase">
              &ldquo;Our commitment to Sri Lanka&apos;s infrastructure builders is absolute: heavy-tonnage precision, uncompromising rigging safety, and transparent hire pricing on every single lift.&rdquo;
            </p>

            <footer className="pt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <div className="font-display font-black text-2xl text-[#FFCC00] uppercase tracking-wide">
                  Lukshan Chanaka
                </div>
                <div className="text-xs font-telemetry text-zinc-400 uppercase tracking-wider mt-0.5">
                  Managing Director, KMS Cranes (Pvt) Ltd
                </div>
              </div>
              <div className="text-xs font-telemetry text-zinc-400">
                15+ Years Islandwide Operations
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
