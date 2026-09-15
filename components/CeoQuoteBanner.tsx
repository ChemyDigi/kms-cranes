import React from "react";
import Image from "next/image";

export default function CeoQuoteBanner() {
  return (
    <section className="relative w-full bg-[#FFCC00] text-black overflow-hidden py-12 md:py-0">
      {/* Blueprint Grid Watermark in Yellow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12 min-h-[460px]">
        {/* Executive Portrait (Left Column) */}
        <div className="md:col-span-4 flex justify-center md:justify-start relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 shadow-2xl border-4 border-black/20 bg-black/10 overflow-hidden">
            <Image
              src="/images/md-portrait.jpg"
              alt="K.M. Samantha - Managing Director of KMS Cranes"
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
            />
            {/* Subtle Name Overlay for Mobile */}
            <div className="absolute bottom-0 inset-x-0 bg-black/80 p-2 text-center md:hidden">
              <span className="text-xs font-telemetry font-bold text-[#FFCC00] uppercase">
                K.M. Samantha // Managing Director
              </span>
            </div>
          </div>
        </div>

        {/* Leadership Statement (Right Column - Matching Reference Image #3) */}
        <div className="md:col-span-8 relative flex flex-col justify-center py-6 md:py-12 z-10">
          {/* Giant Typographic Quotation Mark */}
          <div
            aria-hidden="true"
            className="absolute -top-6 right-2 text-black/15 font-serif font-black text-8xl md:text-9xl select-none pointer-events-none leading-none"
          >
            ”
          </div>

          <blockquote className="relative z-10">
            <p className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-black leading-snug tracking-tight italic">
              &ldquo;At KMS Cranes, our promise to Sri Lanka&apos;s construction and industrial sector is steadfast: deliver heavy-tonnage lifting and machinery hiring with uncompromising safety, honest pricing, and immediate depot mobilization. Every bridge girder, harbor crane erection, and factory setup is powered by our dedicated operators who treat your mission as our own.&rdquo;
            </p>

            <footer className="mt-8 pt-6 border-t-2 border-black/20 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-wide">
                  K. M. Samantha
                </div>
                <div className="text-sm font-telemetry font-bold text-black/80 uppercase tracking-wider mt-0.5">
                  Managing Director &amp; Chief of Rigging Engineering
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-telemetry text-black/70 uppercase tracking-widest font-semibold">
                  EST. SRI LANKA // 15+ YEARS
                </span>
                <div className="w-3 h-3 bg-black"></div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Bottom Thin Caution Trim */}
      <div className="w-full h-2 caution-stripes"></div>
    </section>
  );
}
