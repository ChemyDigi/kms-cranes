import React from "react";

export default function ContactHero() {
  return (
    <section
      id="hero-section"
      className="relative w-full bg-zinc-950 text-white overflow-hidden bg-cover bg-center -mt-18 sm:-mt-20 pt-26 sm:pt-30 pb-12 sm:pb-16 min-h-[38vh] sm:min-h-[42vh] flex items-center"
      style={{
        backgroundImage: "url('/images/lowbed-trailer.jpg')",
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
            Contact KMS Cranes
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-2xl leading-relaxed">
            Need a heavy crane on site tomorrow or planning a major structural project? Contact our 24/7 dispatch desk in Kelaniya and Hambantota. We provide fast quotes, transparent pricing, and immediate equipment mobilization.
          </p>
        </div>
      </div>
    </section>
  );
}
