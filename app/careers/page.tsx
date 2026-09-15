"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  MapPin, 
  Send
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const OPENINGS: JobOpening[] = [
  {
    id: "rt-operator",
    title: "Senior Rough Terrain (RT) Crane Operator",
    department: "Heavy Lifting Operations",
    location: "Colombo / Islandwide Sites",
    type: "Full-Time (Permanent)",
    experience: "5+ Years on RT Cranes (50T - 130T)",
    description: "Operate high-tonnage 4x4 Kato and Tadano Rough Terrain cranes on bridge, building, and industrial plant sites across Sri Lanka. Responsible for daily pre-lift checks, SLI monitoring, and executing lifts according to approved lift plans.",
    requirements: [
      "Valid Sri Lankan Heavy Vehicle Driving License with Crane endorsement",
      "Proven track record operating 50T to 100T+ RT cranes without incident",
      "Thorough understanding of load charts, ground bearing pads, and wind limits",
      "Good communication skills and adherence to banksman hand signals",
    ],
  },
  {
    id: "crawler-operator",
    title: "Lattice Boom Crawler Crane Specialist",
    department: "Heavy Infrastructure Division",
    location: "Harbor & Port Projects (Colombo / Hambantota)",
    type: "Full-Time (Permanent)",
    experience: "7+ Years on Lattice Crawler Cranes (100T - 300T)",
    description: "Lead precision heavy lift operations for major bridge girder placements, marine piling, and wind energy turbine components using heavy crawler crane units.",
    requirements: [
      "Extensive experience with lattice boom assembly, counterweight staging, and crawler tracking",
      "Certification in heavy lifting operations and computer SLI systems",
      "Ability to interpret complex 3D engineering rigging drawings",
    ],
  },
  {
    id: "lead-rigger",
    title: "Certified Lead Rigger & Signalman (Banksman)",
    department: "Rigging & Safety Engineering",
    location: "Islandwide Project Deployments",
    type: "Full-Time",
    experience: "3+ Years in Construction Rigging",
    description: "Direct crane maneuvers, calculate sling angles, inspect rigging tackle (shackles, wire rope slings, spreader beams), and ensure complete personnel safety within the swing radius.",
    requirements: [
      "Certified in Rigging & Slinging by an accredited safety institution",
      "Fluency in standard international crane hand and radio signaling",
      "Proficient in center-of-gravity determination and multi-leg sling capacity math",
    ],
  },
  {
    id: "heavy-mechanic",
    title: "Hydraulic & Diesel Heavy Plant Mechanic",
    department: "Fleet Maintenance & Engineering",
    location: "Kelaniya Central Workshop & Mobile Service Van",
    type: "Full-Time",
    experience: "4+ Years in Heavy Crane / Hydraulic Machinery",
    description: "Perform scheduled preventive maintenance, hydraulic pump overhauls, telescoping cylinder seal replacements, and diagnostic troubleshooting on Liebherr, Kato, and Tadano cranes.",
    requirements: [
      "NVQ Level 4/5 or equivalent Diploma in Automobile / Hydraulic Engineering",
      "Strong electrical and hydraulic schematic reading ability",
      "Willingness to travel for on-site breakdown support across Sri Lanka",
    ],
  },
  {
    id: "site-safety-officer",
    title: "Lifting Safety & Site Dispatch Coordinator",
    department: "Operations & HSE",
    location: "Colombo Office & On-Site Audits",
    type: "Full-Time",
    experience: "3+ Years in Industrial HSE / Construction Logistics",
    description: "Conduct site ground condition pre-inspections, prepare lift method statements, coordinate police/RDA permits for low-bed heavy transport, and audit job sites for OSHA compliance.",
    requirements: [
      "Relevant qualification in Occupational Health & Safety (NEBOSH / NIOSH)",
      "Strong coordination and client management capability",
      "Valid driver's license for site inspection travel",
    ],
  },
];

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

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string>("rt-operator");
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("3-5 Years");
  const [applicantLicense, setApplicantLicense] = useState("");

  const activeJob = OPENINGS.find((j) => j.id === selectedJob) || OPENINGS[0];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantPhone || !applicantName) return;
    setApplied(true);
  };

  return (
    <div className="w-full flex flex-col py-12 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto bg-white text-zinc-900">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-10">
        <div className="text-xs font-telemetry text-zinc-800 uppercase font-bold tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FFCC00]"></span>
          <span>HUMAN RESOURCES &bull; CAREER OPPORTUNITIES</span>
        </div>
        <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-zinc-950 uppercase tracking-tight">
          JOIN SRI LANKA&apos;S HEAVY LIFTING TEAM
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-700 font-sans max-w-3xl leading-relaxed">
          At KMS Cranes, our greatest strength is our crew. We are constantly searching for dedicated, safety-conscious crane operators, riggers, and mechanical engineers to power the country&apos;s most vital infrastructure lifts.
        </p>
      </div>

      {/* Perks Grid */}
      <section className="my-16">
        <div className="mb-8">
          <span className="text-xs font-telemetry text-zinc-500 uppercase tracking-widest block font-bold">
            WHY OPERATORS &amp; ENGINEERS CHOOSE KMS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mt-1">
            CREW BENEFITS &amp; SAFETY STANDARDS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200 p-6 flex flex-col justify-between hover:border-black transition-colors shadow-sm"
            >
              <div>
                <div className="text-xs font-telemetry text-black font-bold mb-2">
                  BENEFIT 0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-zinc-950 uppercase">
                  {perk.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                  {perk.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 text-[11px] font-telemetry text-zinc-500 font-semibold">
                KMS EMPLOYEE CHARTER
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Job Openings & Interactive Application Form */}
      <section className="my-12">
        <div className="border-b border-zinc-200 pb-4 mb-10">
          <span className="text-xs font-telemetry text-zinc-800 uppercase tracking-widest font-bold">
            ACTIVE VACANCIES
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight mt-1">
            OPEN POSITIONS IN SRI LANKA
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {OPENINGS.map((job) => {
              const isSelected = selectedJob === job.id;
              return (
                <button
                  type="button"
                  key={job.id}
                  onClick={() => {
                    setSelectedJob(job.id);
                    setApplied(false);
                  }}
                  className={`w-full text-left p-5 border transition-all ${
                    isSelected
                      ? "bg-zinc-100 border-black border-l-8 border-l-[#FFCC00] shadow-md"
                      : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-telemetry uppercase text-black font-bold bg-[#FFCC00] px-2 py-0.5">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-telemetry text-zinc-600 bg-zinc-200 px-2 py-0.5">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-zinc-950 uppercase mt-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-telemetry text-zinc-600 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-black" />
                      {job.location}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Job Details & Fast Apply Form (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-300 p-6 sm:p-8 lg:p-10 shadow-sm">
            <div>
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-zinc-200 gap-2">
                <span className="text-xs font-telemetry text-black font-bold uppercase">
                  POSITION DETAILS &bull; REF: KMS-HR-{activeJob.id.toUpperCase()}
                </span>
                <span className="text-xs font-telemetry text-zinc-600 font-semibold">
                  MIN EXPERIENCE: {activeJob.experience}
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase mt-4">
                {activeJob.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-700 font-sans leading-relaxed">
                {activeJob.description}
              </p>

              {/* Requirements Checklist */}
              <div className="mt-6 pt-4 border-t border-zinc-200">
                <span className="text-xs font-telemetry text-zinc-800 uppercase tracking-wider font-bold block mb-3">
                  CANDIDATE REQUIREMENTS:
                </span>
                <ul className="space-y-2.5">
                  {activeJob.requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fast Application Form */}
              <div className="mt-8 pt-6 border-t border-zinc-200">
                <h4 className="font-display font-black text-2xl text-zinc-950 uppercase mb-4">
                  APPLY FOR THIS ROLE
                </h4>

                {applied ? (
                  <div className="p-6 bg-white border border-black text-center space-y-3 shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-black mx-auto" />
                    <div className="font-display font-black text-2xl text-zinc-950 uppercase">
                      APPLICATION RECEIVED
                    </div>
                    <p className="text-xs text-zinc-600 font-sans max-w-md mx-auto">
                      Thank you, <span className="text-zinc-950 font-bold">{applicantName}</span>. Our HR Operations Manager will review your credentials for the{" "}
                      <span className="text-black font-bold">{activeJob.title}</span> opening and reach out to you at{" "}
                      <span className="text-black font-bold font-mono">{applicantPhone}</span> within 48 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setApplied(false)}
                      className="mt-2 text-xs font-telemetry text-black hover:underline uppercase font-bold"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="e.g. Sunil Shantha"
                          className="w-full bg-white border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                          CONTACT PHONE (MOBILE) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          placeholder="e.g. +94 77 987 6543"
                          className="w-full bg-white border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm font-telemetry focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                          YEARS OF RELEVANT EXPERIENCE
                        </label>
                        <select
                          value={applicantExperience}
                          onChange={(e) => setApplicantExperience(e.target.value)}
                          className="w-full bg-white border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                        >
                          <option value="1-2 Years">1 - 2 Years</option>
                          <option value="3-5 Years">3 - 5 Years</option>
                          <option value="5-10 Years">5 - 10 Years</option>
                          <option value="10+ Years">10+ Years (Senior Lead)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-telemetry text-zinc-700 uppercase mb-1 font-bold">
                          LICENSE / CERTIFICATIONS HELD
                        </label>
                        <input
                          type="text"
                          value={applicantLicense}
                          onChange={(e) => setApplicantLicense(e.target.value)}
                          placeholder="e.g. Heavy Crane Class, SLSI, NVQ"
                          className="w-full bg-white border border-zinc-300 text-zinc-900 px-3.5 py-2.5 text-sm focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-3.5 px-6 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-200 shadow"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT DIRECT APPLICATION</span>
                    </button>
                    <div className="text-[10px] font-telemetry text-center text-zinc-500 font-medium">
                      OR WALK-IN WITH YOUR CV TO OUR KELANIYA WORKSHOP OFFICE
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
