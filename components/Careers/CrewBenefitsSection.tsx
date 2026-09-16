import React from "react";

const PERKS = [
  {
    title: "PREMIUM REMUNERATION",
    desc: "Competitive base salary, generous per-lift allowances, and overtime compensation structured to reward technical precision and safety.",
  },
  {
    title: "MODERN, WELL-MAINTAINED FLEET",
    desc: "Work with top-tier international machinery with air-conditioned operator cabs, modern computer SLI systems, and rigorous maintenance.",
  },
  {
    title: "COMPANY-SPONSORED CERTIFICATIONS",
    desc: "We fund annual safety training, load-testing certificates, and international rigging courses for our crew.",
  },
  {
    title: "HEALTH & DISPATCH INSURANCE",
    desc: "Comprehensive medical cover, accident insurance, and high-quality on-site accommodation for outstation projects.",
  },
];

export default function CrewBenefitsSection() {
  return (
    <section className="my-12">
      <div className="mb-6">
        <span className="text-xs uppercase tracking-wider font-bold text-[#FFCC00] block">
          Why Operators &amp; Engineers Choose KMS
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
          Crew Benefits &amp; Safety Standards
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PERKS.map((perk, idx) => (
          <div
            key={idx}
            className="bg-zinc-50 p-6 flex flex-col justify-between shadow-xs"
          >
            <div>
              <h3 className="font-display font-bold text-xl text-zinc-950 uppercase">
                {perk.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                {perk.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
