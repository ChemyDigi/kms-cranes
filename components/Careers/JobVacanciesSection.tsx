"use client";

import React, { useState } from "react";
import { CheckCircle2, MapPin, Send } from "lucide-react";

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
    description:
      "Operate high-tonnage 4x4 Kato and Tadano Rough Terrain cranes on bridge, building, and industrial plant sites across Sri Lanka. Responsible for daily pre-lift checks, SLI monitoring, and executing lifts according to approved lift plans.",
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
    description:
      "Lead precision heavy lift operations for major bridge girder placements, marine piling, and wind energy turbine components using heavy crawler crane units.",
    requirements: [
      "Extensive experience with lattice boom assembly, counterweight staging, and crawler tracking",
      "Certification in heavy lifting operations and computer SLI systems",
      "Ability to interpret complex 3D engineering rigging drawings",
      "Demonstrated experience on marine or expressway viaduct projects",
    ],
  },
  {
    id: "heavy-mechanic",
    title: "Heavy Equipment Hydraulic Technician",
    department: "Maintenance & Workshop",
    location: "Kelaniya Central Workshop & Field Dispatch",
    type: "Full-Time",
    experience: "4+ Years in Crane Hydraulics & Diesel Engines",
    description:
      "Diagnose, service, and maintain hydraulic pumps, telescoping cylinders, winches, and diesel powerplants across our mobile crane and prime mover fleet.",
    requirements: [
      "Diploma or NVQ Level 4/5 in Automobile / Heavy Equipment Engineering",
      "Practical experience with Mitsubishi, Cummins, Liebherr, and Tadano hydraulic systems",
      "Willingness to travel for on-site field breakdown assistance",
    ],
  },
  {
    id: "site-safety-officer",
    title: "Lifting Safety & Site Dispatch Coordinator",
    department: "Operations & HSE",
    location: "Colombo Office & On-Site Audits",
    type: "Full-Time",
    experience: "3+ Years in Industrial HSE / Construction Logistics",
    description:
      "Conduct site ground condition pre-inspections, prepare lift method statements, coordinate police/RDA permits for low-bed heavy transport, and audit job sites for OSHA compliance.",
    requirements: [
      "Relevant qualification in Occupational Health & Safety (NEBOSH / NIOSH)",
      "Strong coordination and client management capability",
      "Valid driver's license for site inspection travel",
    ],
  },
];

export default function JobVacanciesSection() {
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
    <section className="my-12">
      <div className="pb-4 mb-8">
        <span className="text-xs uppercase tracking-wider font-bold text-zinc-500 block">
          Active Vacancies
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-zinc-950 uppercase tracking-tight mt-1">
          Open Positions in Sri Lanka
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
                className={`w-full text-left p-5 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase text-black font-bold bg-[#FFCC00] px-2 py-0.5">
                    {job.department}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 ${
                      isSelected
                        ? "bg-zinc-800 text-zinc-200"
                        : "bg-zinc-200 text-zinc-700"
                    }`}
                  >
                    {job.type}
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase mt-2">
                  {job.title}
                </h3>
                <div
                  className={`flex items-center gap-4 text-xs mt-2 ${
                    isSelected ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected Job Details & Fast Apply Form (7 cols) */}
        <div className="lg:col-span-7 bg-zinc-50 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div>
            <div className="flex flex-wrap items-center justify-between pb-4 gap-2">
              <span className="text-xs text-zinc-500 font-bold uppercase">
                Position Details
              </span>
              <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5">
                Direct Hiring
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase mt-2">
              {activeJob.title}
            </h3>
            <div className="text-xs text-zinc-600 mt-1 font-medium">
              Experience Requirement: {activeJob.experience}
            </div>

            <p className="mt-4 text-sm text-zinc-700 font-sans leading-relaxed">
              {activeJob.description}
            </p>

            <div className="mt-6 space-y-3">
              <div className="text-xs text-zinc-700 uppercase font-bold tracking-wider">
                Mandatory Qualifications &amp; Prerequisites:
              </div>
              <ul className="space-y-2">
                {activeJob.requirements.map((req, rIdx) => (
                  <li
                    key={rIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fast Application Submission Box */}
            <div className="mt-8 pt-6">
              <div className="text-xs uppercase font-bold tracking-wider mb-4 text-zinc-800">
                Quick Application Submission
              </div>

              {applied ? (
                <div className="p-6 bg-white text-center space-y-3 shadow-xs">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div className="font-display font-black text-2xl text-zinc-950 uppercase">
                    Application Received
                  </div>
                  <p className="text-xs text-zinc-600 font-sans max-w-md mx-auto">
                    Thank you, <span className="text-zinc-950 font-bold">{applicantName}</span>. Our HR Operations Manager will review your credentials for the{" "}
                    <span className="text-black font-bold">{activeJob.title}</span> opening and reach out to you at{" "}
                    <span className="text-black font-bold">{applicantPhone}</span> within 48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setApplied(false)}
                    className="mt-2 text-xs text-black hover:underline uppercase font-bold cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase mb-1 text-zinc-700 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Sunil Karunaratne"
                        className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase mb-1 text-zinc-700 font-bold">
                        Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="e.g. +94 77 987 6543"
                        className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase mb-1 text-zinc-700 font-bold">
                        Relevant Experience
                      </label>
                      <select
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
                      >
                        <option value="1-3 Years">1 - 3 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5-10 Years">5 - 10 Years</option>
                        <option value="10+ Years (Senior Lead)">10+ Years (Senior Lead)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase mb-1 text-zinc-700 font-bold">
                        License / SLSI Certificate No.
                      </label>
                      <input
                        type="text"
                        value={applicantLicense}
                        onChange={(e) => setApplicantLicense(e.target.value)}
                        placeholder="e.g. DL-B-98762"
                        className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Application for {activeJob.title}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
