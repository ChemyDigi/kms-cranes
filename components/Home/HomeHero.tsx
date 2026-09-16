"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------
   Scroll-scrubbed hero.

   The pinned region maps scroll progress 0..1 onto the video time, so
   the page settles exactly as the load comes to rest on the ground.
   The footage is a white-cyc product render, so the stage is white and
   the video is contained rather than cropped: the frame's own
   background bleeds into the page and the composition never loses its
   left caption lane at any aspect ratio.
   ------------------------------------------------------------------ */

const VIDEO_SRC = "/video/hero-scrub.mp4";
const POSTER_SRC = "/images/hero-poster.jpg";
const ENDING_SRC = "/images/hero-ending.jpg";

/* Sampled from the footage's own backdrop. The stage is painted this
   exact grey so the contained frame has no visible letterbox edge. */
const CYC = "#E5E3E4";

/* Scroll geometry in viewport heights. RANGE is the scrollable part of
   the pinned hero (total minus the one sticky viewport). Ramps are
   authored in vh and converted to progress, so retuning HERO_VH keeps
   the feel of every band edge identical. */
const HERO_VH = 460;
const RANGE_VH = HERO_VH - 100;
const RAMP = 20 / RANGE_VH;

/* The five static-hero gates. Driven from JS only, so there is no CSS
   copy that can drift out of sync with this list. */
const GATES = [
  "(max-width: 720px)",
  "(orientation: portrait) and (max-width: 1024px)",
  "(orientation: portrait) and (pointer: coarse)",
  "(orientation: landscape) and (pointer: coarse) and (max-height: 560px)",
  "(prefers-reduced-motion: reduce)",
];

const STATS = [
  { value: "300T", label: "Max Hoist Capacity", detail: "Single Crane Rating" },
  { value: "35+", label: "Heavy Fleet Machines", detail: "Modern RT & Crawlers" },
  { value: "24/7", label: "Dispatch Readiness", detail: "Kelaniya & Hambantota" },
  { value: "100%", label: "Certified Riggers", detail: "SLSI & OSHA Compliant" },
];

const HEADLINE = "Heavy Rigging for Sri Lanka's Major Lifts.";
const MID_LINE = "Every lift engineered before the outriggers go down.";
const SETTLE_LINE = "Placed exactly where it belongs.";

/* Seeded PRNG so the "random" offsets are identical on every load, and
   identical between the server and client render. */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
}

type WordSplit = { text: string; th: number };
type CharSplit = { chars: { ch: string; th: number; jx: number }[] };

function splitWords(text: string, seed: number, spread: number): WordSplit[] {
  const r = rng(seed);
  const words = text.split(" ");
  const last = Math.max(1, words.length - 1);
  return words.map((t, i) => ({ text: t, th: (i / last) * spread + r() * 0.05 }));
}

function splitChars(text: string, seed: number, spread: number): CharSplit[] {
  const r = rng(seed);
  const total = Math.max(1, text.replace(/ /g, "").length - 1);
  let i = 0;
  return text.split(" ").map((word) => ({
    chars: word.split("").map((ch) => ({
      ch,
      th: (i++ / total) * spread + r() * 0.06,
      jx: (r() * 2 - 1) * 30,
    })),
  }));
}

/* Split once at module scope: deterministic, never re-split on render. */
const HEADLINE_WORDS = splitWords(HEADLINE, 0x5eed, 0.5);
const MID_CHARS = splitChars(MID_LINE, 0xc7a5e, 0.55);
const SETTLE_WORDS = splitWords(SETTLE_LINE, 0x1ff7, 0.45);

/* Band ranges in progress units: three equal beats across the journey. */
const BANDS = [
  { a: 0.0, b: 0.34 },
  { a: 0.34, b: 0.68 },
  { a: 0.68, b: 1.0 },
];

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const smoothstep = (p: number, e0: number, e1: number) => {
  const t = clamp((p - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

function WordLine({ words }: { words: WordSplit[] }) {
  return (
    <span aria-hidden="true">
      {words.map((w, i) => (
        <span key={i} className="w" style={{ ["--th" as string]: w.th }}>
          {w.text}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

function CharLine({ words }: { words: CharSplit[] }) {
  return (
    <span aria-hidden="true">
      {words.map((word, wi) => (
        <span key={wi} className="w">
          {word.chars.map((c, ci) => (
            <span
              key={ci}
              className="c"
              style={{ ["--th" as string]: c.th, ["--jx" as string]: `${c.jx}px` }}
            >
              {c.ch}
            </span>
          ))}
          {wi < words.length - 1 ? <span className="c"> </span> : null}
        </span>
      ))}
    </span>
  );
}

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bandRefs = useRef<(HTMLDivElement | null)[]>([]);
  const meterRef = useRef<HTMLDivElement | null>(null);
  const veilRef = useRef<HTMLDivElement | null>(null);
  const veilOp = useRef(-1);

  const [scrubOn, setScrubOn] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  /* Drive-loop state lives in refs: none of it should trigger a render. */
  const target = useRef(0);
  const shown = useRef(0);
  const rafId = useRef<number | null>(null);
  const lastTick = useRef(0);
  const onScreen = useRef(true);
  const seekBusy = useRef(false);
  const pendingTime = useRef<number | null>(null);
  const cache = useRef(BANDS.map(() => ({ op: -1, k: -1 })));
  const objectUrl = useRef<string | null>(null);
  const loadStart = useRef<number | null>(null);

  const heroProgress = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return 0;
    const range = el.offsetHeight - window.innerHeight;
    if (range <= 0) return 0;
    return clamp(-el.getBoundingClientRect().top / range, 0, 1);
  }, []);

  /* Seek gating: never write currentTime while a seek is in flight.
     Coalesce to the newest target, issue exactly one follow-up on
     completion, and clear the flag on error so it cannot deadlock. */
  const requestSeek = useCallback((t: number) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    if (seekBusy.current) {
      pendingTime.current = t;
      return;
    }
    seekBusy.current = true;
    v.currentTime = t;
  }, []);

  /* Captions: delta-gated writes only, so a converged band costs nothing. */
  const updateCaptions = useCallback((p: number, loadK: number) => {
    for (let i = 0; i < BANDS.length; i++) {
      const el = bandRefs.current[i];
      if (!el) continue;
      const { a, b } = BANDS[i];
      const f = Math.min(RAMP, (b - a) / 3);
      const inEase = i === 0 ? 1 : smoothstep(p, a, a + f);
      const outEase = i === BANDS.length - 1 ? 1 : 1 - smoothstep(p, b - f, b);
      const op = inEase * outEase;

      let k = clamp((p - a) / Math.min(0.06, (b - a) * 0.35), 0, 1);
      /* Band one opens settled: a one-time load ramp hands over to scroll. */
      if (i === 0) k = Math.max(k, loadK);

      const c = cache.current[i];
      if (Math.abs(op - c.op) > 0.004) {
        c.op = op;
        el.style.opacity = String(op);
        el.style.visibility = op < 0.01 ? "hidden" : "visible";
      }
      if (Math.abs(k - c.k) > 0.008) {
        c.k = k;
        el.style.setProperty("--k", String(k));
        if (i === 2) {
          el.style.setProperty("--ks", String(clamp((k - 0.66) * 4, 0, 1)));
          el.style.setProperty("--kb", String(clamp((k - 0.78) * 5, 0, 1)));
        }
      }
    }
    if (meterRef.current) meterRef.current.style.transform = `scaleX(${p})`;

    /* The veil rides the journey. Through the opening orbit the machine
       fills the frame edge to edge and there is no natural caption lane,
       so the veil runs at full strength; once the boom swings right and
       the lane opens on its own it relaxes, and the footage reads clean
       for the descent and the settle. */
    const v = 1 - 0.55 * smoothstep(p, 0.3, 0.55);
    if (Math.abs(v - veilOp.current) > 0.004 && veilRef.current) {
      veilOp.current = v;
      veilRef.current.style.opacity = String(v);
    }
  }, []);

  const tick = useCallback(
    (now: number) => {
      const dt = Math.min(100, now - (lastTick.current || now));
      lastTick.current = now;
      const k = 0.16;
      shown.current += (target.current - shown.current) * (1 - Math.pow(1 - k, dt / 16.667));

      /* Band one's one-time entrance ramp, easing over ~900ms from first
         paint, then handing over to the scroll drive. */
      let loadK = 1;
      if (loadStart.current !== null) {
        const e = clamp((now - loadStart.current) / 900, 0, 1);
        loadK = e * e * (3 - 2 * e);
      }

      const converged = Math.abs(target.current - shown.current) < 0.0005;
      if (converged) {
        shown.current = target.current;
        lastTick.current = 0;
      }

      const v = videoRef.current;
      if (v && v.duration) requestSeek(shown.current * v.duration);
      updateCaptions(shown.current, loadK);

      if (converged && loadK >= 1) {
        rafId.current = null;
        return;
      }
      rafId.current = requestAnimationFrame(tick);
    },
    [requestSeek, updateCaptions]
  );

  const onScroll = useCallback(() => {
    target.current = heroProgress();
    if (rafId.current === null && onScreen.current) {
      lastTick.current = 0;
      rafId.current = requestAnimationFrame(tick);
    }
  }, [heroProgress, tick]);

  /* The gate, decided live: every rotation, resize and preference flip
     re-evaluates it, so a rotated tablet never lands on a dead hero. */
  useEffect(() => {
    const mqls = GATES.map((q) => window.matchMedia(q));
    const apply = () => setScrubOn(!mqls.some((m) => m.matches));
    mqls.forEach((m) => m.addEventListener("change", apply));
    apply();
    return () => mqls.forEach((m) => m.removeEventListener("change", apply));
  }, []);

  useEffect(() => {
    if (!scrubOn) return;
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let cancelled = false;

    const io = new IntersectionObserver(
      ([e]) => {
        onScreen.current = e.isIntersecting;
        if (e.isIntersecting && rafId.current === null) {
          lastTick.current = 0;
          rafId.current = requestAnimationFrame(tick);
        }
      },
      { rootMargin: "100px" }
    );
    io.observe(section);

    const onSeeked = () => {
      seekBusy.current = false;
      if (pendingTime.current !== null) {
        const t = pendingTime.current;
        pendingTime.current = null;
        requestSeek(t);
      }
    };
    const onError = () => {
      seekBusy.current = false;
      pendingTime.current = null;
    };
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("error", onError);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    /* Many hosts silently lack HTTP Range support, which clamps every
       seek to zero on the live site while working locally. Fetching the
       whole file as a Blob sidesteps it. At ~2 MB this needs no ring. */
    (async () => {
      try {
        const res = await fetch(VIDEO_SRC);
        if (!res.ok) throw new Error(String(res.status));
        const blob = await res.blob();
        if (cancelled) return;
        objectUrl.current = URL.createObjectURL(blob);
        video.src = objectUrl.current;
        video.load();
        video.addEventListener(
          "canplay",
          () => {
            if (cancelled) return;
            setVideoReady(true);
            requestSeek(heroProgress() * (video.duration || 0));
          },
          { once: true }
        );
      } catch {
        /* The page is complete without it: the poster carries the hero. */
      }
    })();

    /* Clear the seek gate on arm. A disarm mid-seek (an orientation flip,
       a reduced-motion toggle) would otherwise leave seekBusy stuck true
       and every later seek would queue behind a completion that already
       happened, freezing the scrub for good. */
    seekBusy.current = false;
    pendingTime.current = null;

    cache.current = BANDS.map(() => ({ op: -1, k: -1 }));
    loadStart.current = performance.now();
    target.current = heroProgress();
    shown.current = target.current;
    lastTick.current = 0;
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      io.disconnect();
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("error", onError);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      rafId.current = null;
      if (objectUrl.current) {
        URL.revokeObjectURL(objectUrl.current);
        objectUrl.current = null;
      }
    };
  }, [scrubOn, tick, onScroll, requestSeek, heroProgress]);

  /* ---- Static hero: phones, portrait tablets, short landscape, reduced
     motion. A designed layout, not an apology: the composed resting
     frame with the journey's opening and closing beats already settled. */
  if (!scrubOn) {
    return (
      <section
        id="hero-section"
        ref={sectionRef}
        data-nav-theme="light"
        className="relative w-full bg-white text-zinc-950 overflow-hidden -mt-18 sm:-mt-20 pt-28 sm:pt-32 pb-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-telemetry text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
            <span className="text-[#FFCC00]">&#9632;</span> Kelaniya &amp; Hambantota &middot; 24/7 Dispatch
          </p>
          <h1 className="mt-4 font-display font-black text-4xl sm:text-6xl text-zinc-950 uppercase tracking-tight leading-[0.92]">
            {HEADLINE}
          </h1>
          <div className="mt-5 h-[3px] w-20 bg-[#FFCC00]" />
          <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            RT cranes, crawlers, boom trucks and low-beds &mdash; dispatched across Sri Lanka
            with certified riggers and a signed lift plan.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-4 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-colors duration-200 flex items-center gap-2 active:scale-95"
            >
              <span>Request Instant Quote</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="px-6 py-4 border border-zinc-300 text-zinc-950 font-display font-bold text-base uppercase tracking-wider hover:border-zinc-950 transition-colors flex items-center gap-2"
            >
              <span>Explore Fleet &amp; Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ENDING_SRC}
            alt="A KMS Cranes boom truck lowering a steel counterweight to the ground"
            className="mt-10 w-full"
            width={1920}
            height={1080}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mt-10">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-5">
                <div className="font-display font-black text-3xl text-zinc-950">{s.value}</div>
                <div className="text-[11px] font-bold text-zinc-950 uppercase tracking-wider mt-1">
                  {s.label}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---- Scrub hero ---- */
  return (
    <section
      id="hero-section"
      ref={sectionRef}
      data-nav-theme="light"
      className="relative w-full bg-white text-zinc-950 -mt-18 sm:-mt-20"
      style={{ height: `${HERO_VH}vh` }}
    >
      {/* Screen readers get the real headline, unsplit and unanimated. */}
      <h1 className="sr-only">{HEADLINE}</h1>

      {/* The stage is painted in the footage's own cyc colour, so the
          contained frame's letterbox is invisible: field and frame are
          literally the same grey and the page reads as one image. */}
      <div
        className="scrub-stage sticky top-0 h-screen w-full overflow-hidden"
        style={{ backgroundColor: CYC }}
      >
        {/* The frame is held in the right of the stage so the action lane
            and the caption lane never contend. `contain` keeps the whole
            composition at every aspect; the left edge is feathered so the
            floor's gradient dissolves into the field instead of seaming. */}
        <div
          className="absolute inset-y-0 right-0 left-[26%]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, #000 11%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 11%)",
          }}
        >
          <div
            className="absolute inset-0 bg-contain bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url('${POSTER_SRC}')` }}
          />
          <video
            ref={videoRef}
            preload="none"
            muted
            playsInline
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-500"
            style={{ opacity: videoReady ? 1 : 0 }}
          />
        </div>

        {/* The inverted scrim. Dark type over light footage needs the
            mirror of the usual dark veil, and its strength is scrubbed
            with the journey (see updateCaptions). Measured against the
            worst frame — solid black machine under the strongest part of
            the veil — this holds carbon type at about 9:1. */}
        <div
          ref={veilRef}
          className="absolute inset-y-0 left-0 w-[64%] pointer-events-none"
          style={{
            opacity: 1,
            background: `linear-gradient(to right, ${CYC} 0%, ${CYC} 44%, rgba(229,227,228,0.88) 62%, rgba(229,227,228,0) 100%)`,
          }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Beat 1 — the load hangs, about to descend. Words drift down. */}
          <div
            ref={(el) => {
              bandRefs.current[0] = el;
            }}
            className="scrub-band band-drift absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 top-1/2 -translate-y-1/2 max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[34rem]"
          >
            <p className="font-telemetry text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">
              <span className="text-[#FFCC00]">&#9632;</span> Kelaniya &amp; Hambantota &middot; 24/7 Dispatch
            </p>
            <div className="line font-display font-black text-4xl lg:text-5xl xl:text-7xl text-zinc-950 uppercase tracking-tight leading-[0.9]">
              <WordLine words={HEADLINE_WORDS} />
            </div>
            <div className="mt-6 h-[3px] w-24 bg-[#FFCC00]" />
          </div>

          {/* Beat 2 — the controlled lowering. Characters snap into place. */}
          <div
            ref={(el) => {
              bandRefs.current[1] = el;
            }}
            className="scrub-band band-grid absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 top-1/2 -translate-y-1/2 max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[34rem]"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <div className="line font-display font-black text-3xl lg:text-4xl xl:text-6xl text-zinc-950 uppercase tracking-tight leading-[0.94]">
              <CharLine words={MID_CHARS} />
            </div>
            <p className="mt-6 text-base lg:text-lg text-zinc-600 leading-relaxed max-w-lg">
              Load charts, ground-bearing checks and rigging plans &mdash; signed off by
              certified riggers before a single outrigger touches the ground.
            </p>
          </div>

          {/* Beat 3 — the settle. Words rise, then the sub, then the CTAs. */}
          <div
            ref={(el) => {
              bandRefs.current[2] = el;
            }}
            className="scrub-band band-rise absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 top-1/2 -translate-y-1/2 max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[36rem]"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <div className="line font-display font-black text-4xl lg:text-5xl xl:text-7xl text-zinc-950 uppercase tracking-tight leading-[0.9]">
              <WordLine words={SETTLE_WORDS} />
            </div>
            <p className="settle-sub mt-5 text-base lg:text-lg text-zinc-600 leading-relaxed max-w-lg">
              300 tonnes of capacity, set down to the millimetre. Tell us the load and the
              site &mdash; we will price the lift today.
            </p>
            <div className="settle-cta mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-4 bg-[#FFCC00] text-black font-display font-black text-lg uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-colors duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Request Instant Quote</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="px-6 py-4 border border-zinc-300 bg-white/70 backdrop-blur-xs text-zinc-950 font-display font-bold text-base uppercase tracking-wider hover:border-zinc-950 transition-colors flex items-center gap-2"
              >
                <span>Explore Fleet &amp; Specs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Telemetry rail: the descent readout, on the same progress. */}
          <div className="absolute bottom-8 right-4 sm:right-6 lg:right-8 hidden lg:block text-right">
            <div className="font-telemetry text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
              Controlled Descent
            </div>
            <div className="mt-2 h-px w-40 bg-zinc-200 relative overflow-hidden">
              <div
                ref={meterRef}
                className="absolute inset-0 bg-[#FFCC00] origin-left"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
