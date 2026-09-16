"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function RfqForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.name) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-zinc-50/70 p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="pb-4 mb-6">
        <span className="text-xs text-[#FFCC00] uppercase font-bold tracking-wider block mb-1">
          Official Hire Inquiry
        </span>
        <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase">
          Request a Crane Hire Quote
        </h3>
        <p className="text-sm text-zinc-600 font-sans mt-1">
          Fill in your lift specs below and our senior rigging engineer will calculate exact machine feasibility and send guaranteed rates.
        </p>
      </div>

      {submitted ? (
        <div className="py-16 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-display font-black text-3xl text-zinc-950 uppercase">
            Quotation Request Logged
          </h4>
          <p className="text-sm text-zinc-600 font-sans max-w-md mx-auto">
            Thank you, <span className="text-black font-bold">{formData.name}</span>. Your inquiry has been routed to our dispatch engineers.
          </p>
          <div className="text-xs text-zinc-600">
            We will call your mobile <span className="text-black font-bold">{formData.phone}</span> shortly.
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white font-display text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            Submit Additional Inquiries
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-700 uppercase mb-1 font-bold">
                Full Name / Contact Person *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. D. K. Wickramasinghe"
                className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-700 uppercase mb-1 font-bold">
                Company / Contractor Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Maga Engineering / Access"
                className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-700 uppercase mb-1 font-bold">
                Contact Phone (Mobile) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +94 77 123 4567"
                className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-700 uppercase mb-1 font-bold">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. r.wick@engineering.lk"
                className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
              />
            </div>
          </div>


          <div>
            <label className="block text-xs text-zinc-700 uppercase mb-1 font-bold">
              Specific Lift Details / Ground Conditions / Radius (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Lifting precast bridge girders over water; need 40m reach with 20T load at 15m radius."
              className="w-full bg-white text-zinc-900 px-3.5 py-2.5 text-sm shadow-xs focus:outline-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#FFCC00] text-black font-display font-black text-xl uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>Submit RFQ for Immediate Rate Review</span>
            </button>
            <div className="text-xs text-center text-zinc-500 mt-2 font-medium">
              Confidential Tender &bull; Zero Obligation &bull; No Hidden Charges
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
