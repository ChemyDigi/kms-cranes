import React from "react";

export default function AboutHero() {
  return (
    <section
      className="relative w-full bg-zinc-950 text-white overflow-hidden bg-cover bg-center min-h-[35vh] sm:min-h-[38vh] flex items-center py-14 sm:py-20"
      style={{
        backgroundImage: "url('/images/hero_crane_showcase.jpg')",
      }}
    >
      {/* Dark Black Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.70) 50%, rgba(0, 0, 0, 0.45) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(9, 9, 11, 0.90) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.40) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-4">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95]">
            About KMS Cranes
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-2xl leading-relaxed">
            Founded in Sri Lanka with a vision to elevate national infrastructure standards, KMS Cranes has grown into one of the country&apos;s most dependable heavy machinery and crane hire partners.
          </p>
        </div>
      </div>
    </section>
  );
}
