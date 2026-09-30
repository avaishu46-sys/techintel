import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Search,
  FileText,
  Crosshair,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

// Replace with your actual background image import/path
import heroBgImage from "../assets/images/hero_1.avif";

// Slides shown in the bottom-center card
const SLIDES = [
  {
    icon: Search,
    title: "Research",
    text: "Research that finds the right buyers.",
  },
  {
    icon: FileText,
    title: "Content",
    text: "Content that earns decision-maker trust.",
  },
  {
    icon: Crosshair,
    title: "Targeting",
    text: "Targeting precise enough to skip the noise.",
  },
  {
    icon: TrendingUp,
    title: "Pipeline",
    text: "Pipeline you can trace, not just count.",
  },
];

const SLIDE_MS = 3400;

export default function Hero() {
  const containerRef = useRef(null);

  // Mouse Parallax Motion
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX / window.innerWidth - 0.5) * 12,
      y: (clientY / window.innerHeight - 0.5) * 12,
    });
  };

  // Slide auto-rotation (restarts when a dot is clicked)
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setTimeout(
      () => setSlide((i) => (i + 1) % SLIDES.length),
      SLIDE_MS
    );
    return () => clearTimeout(id);
  }, [slide]);

  // Scroll progress inside this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1 fade-out
  const heroOpacity = useTransform(scrollYProgress, [0, 0.09], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.09], [0, -30]);
  const heroDisplay = useTransform(scrollYProgress, (v) =>
    v >= 0.1 ? "none" : "flex"
  );

  // Dark overlay grows as Section 1 fades
  const bgDimOpacity = useTransform(scrollYProgress, [0.04, 0.13], [0, 0.85]);

  // Section 2 fades in and NEVER fades out: it stays fully visible
  // for the whole "hold" zone (after the last word) until the sticky area ends.
  const statementOpacity = useTransform(scrollYProgress, [0.09, 0.15], [0, 1]);

  const statementText =
    "We transform complex B2B technology offerings into scalable pipeline through research-backed content, high-precision decision-maker targeting, and full-funnel execution.";
  const words = statementText.split(" ");

  // Reveal runs from REVEAL_START to REVEAL_END. After that, the complete
  // text is held on screen (REVEAL_END -> 1.0) so it can be read before
  // the next section arrives.
  const REVEAL_START = 0.12;
  const REVEAL_END = 0.55;
  const WORD_SPAN = 0.04;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[300vh] bg-[#030812] text-white select-none"
    >
      {/* STICKY FULLSCREEN VIEWPORT */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE + DARKENING OVERLAY */}
        <motion.div
          style={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 20, damping: 25 }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat opacity-95"
            style={{ backgroundImage: `url(${heroBgImage})` }}
          />
          <motion.div
            style={{ opacity: bgDimOpacity }}
            className="absolute inset-0 bg-[#020b18]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030812]/40 via-transparent to-[#030812]/90" />
        </motion.div>

        {/* Ambient dot grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* SECTION 1: MAIN HERO CONTENT */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY, display: heroDisplay }}
          className="relative z-10 mx-auto w-full max-w-7xl flex-col items-start justify-center gap-10 px-6 pb-32 pt-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:pb-28"
        >
          {/* LEFT: copy */}
          <div className="flex w-full flex-col items-start lg:w-[54%]">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-teal-500/30 bg-teal-950/40 px-4 py-2 backdrop-blur-md">
              <Sparkles size={14} className="animate-pulse text-teal-400" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
                Demand Generation Engine
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl">
              Architecting <br />
              demand for <br />
              <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(45,212,191,0.35)]">
                enterprise tech leaders.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              We connect high-growth B2B technology brands with verified
              decision-makers through high-precision research, authority
              content, and targeted media engines.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/resources"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-teal-400/50 hover:bg-white/10"
              >
                Explore Resources
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT: animated SVG (faint backdrop on mobile, full on desktop) */}
          <motion.div
            animate={{ x: -mousePos.x * 1.6, y: -mousePos.y * 1.6 }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            className="pointer-events-none absolute -right-28 top-6 w-[420px] opacity-25 lg:static lg:w-[46%] lg:max-w-[500px] lg:opacity-100"
          >
            <DemandOrbit />
          </motion.div>
        </motion.div>

        {/* BOTTOM CENTER: slide card */}
        <motion.div
          style={{ opacity: heroOpacity, display: heroDisplay }}
          className="absolute inset-x-0 bottom-5 z-10 flex-col items-center gap-3 px-4 lg:bottom-7"
        >
          <SlideCard slide={slide} setSlide={setSlide} />

          {/* scroll hint */}
          <div className="flex flex-col items-center text-slate-400">
            <span className="text-[11px] font-medium tracking-wide">
              Scroll to explore
            </span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </div>
        </motion.div>

        {/* SECTION 2: STATEMENT (fills the screen, stays visible) */}
        <motion.div
          style={{ opacity: statementOpacity }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12"
        >
          <div className="w-full max-w-[1400px] text-center">
            {/* Font size is limited by BOTH viewport width and height,
                so the whole sentence always fits on screen. */}
            <h2 className="flex flex-wrap justify-center text-[clamp(1.5rem,min(5.2vw,7.6vh),4.75rem)] font-semibold leading-[1.15] tracking-tight">
              {words.map((word, i) => {
                const wordStart =
                  REVEAL_START +
                  (i / words.length) * (REVEAL_END - REVEAL_START);
                const wordEnd = wordStart + WORD_SPAN;
                return (
                  <Word
                    key={i}
                    word={word}
                    progress={scrollYProgress}
                    range={[wordStart, wordEnd]}
                  />
                );
              })}
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SlideCard: glass card with animated gradient border                 */
/* ------------------------------------------------------------------ */
function SlideCard({ slide, setSlide }) {
  const current = SLIDES[slide];
  const Icon = current.icon;

  return (
    <div className="flex w-full flex-col items-center gap-3">
      {/* animated gradient border */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl p-[1.5px] shadow-[0_10px_50px_-10px_rgba(45,212,191,0.45)]">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#2dd4bf,#22d3ee,#34d399,#2dd4bf)",
            backgroundSize: "300% 100%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "300% 50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative flex items-center gap-4 overflow-hidden rounded-[14px] bg-slate-950/85 px-4 py-3.5 backdrop-blur-xl sm:px-5">
          {/* icon tile */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-teal-400/30 bg-gradient-to-br from-teal-400/25 to-cyan-400/10">
            <AnimatePresence mode="wait">
              <motion.span
                key={slide}
                initial={{ scale: 0.4, rotate: -40, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.4, rotate: 40, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-teal-200"
              >
                <Icon size={26} strokeWidth={1.8} />
              </motion.span>
            </AnimatePresence>
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-teal-300/80" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-teal-300" />
          </div>

          {/* text */}
          <div className="relative h-[58px] flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ x: 60, opacity: 0, filter: "blur(6px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ x: -60, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center text-left"
              >
                <span className="text-xs font-semibold text-teal-300">
                  {current.title}
                </span>
                <span className="mt-0.5 text-base font-semibold leading-snug text-white sm:text-lg">
                  {current.text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* timer bar */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
            <motion.div
              key={slide}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
              className="h-full bg-gradient-to-r from-teal-300 to-cyan-300"
            />
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Show ${s.title}`}
            onClick={() => setSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === slide
                ? "w-8 bg-teal-300"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Word: invisible until scrolled to, then lights up                   */
/* ------------------------------------------------------------------ */
function Word({ word, progress, range }) {
  // Words start faintly visible (0.2) so the whole sentence is on screen
  // from the beginning, then light up to full white. Set 0.2 -> 0 to hide them.
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#475569", "#ffffff"]);

  const lower = word.toLowerCase();
  const isHighlight =
    lower.includes("pipeline") ||
    lower.includes("decision-maker") ||
    lower.includes("high-precision");

  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.25em] inline-block"
    >
      <span
        className={
          isHighlight
            ? "font-bold text-teal-300 underline decoration-teal-400/50 underline-offset-8 drop-shadow-[0_0_15px_rgba(45,212,191,0.4)]"
            : ""
        }
      >
        {word}
      </span>
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* DemandOrbit: animated SVG (orbiting buyers -> funnel -> pipeline)   */
/* ------------------------------------------------------------------ */
function DemandOrbit() {
  const spin = (duration, reverse = false) => ({
    animate: { rotate: reverse ? -360 : 360 },
    transition: { duration, repeat: Infinity, ease: "linear" },
  });

  const chips = [
    { label: "Verified decision-makers", cls: "left-[-6%] top-[10%]", delay: 0 },
    { label: "Research-backed content", cls: "right-[-4%] top-[40%]", delay: 1.2 },
    { label: "Qualified pipeline", cls: "bottom-[8%] left-[8%]", delay: 2.4 },
  ];

  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-[10%] rounded-full bg-teal-400/10 blur-3xl" />

      <svg
        viewBox="0 0 480 480"
        className="relative h-full w-full"
        fill="none"
        role="img"
        aria-label="Buyers orbiting a funnel that converts into pipeline"
      >
        <defs>
          <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="240" cy="240" r="130" fill="url(#coreGlow)" />

        {/* pulse rings */}
        {[0, 1.3].map((d) => (
          <motion.circle
            key={d}
            cx="240"
            cy="240"
            r="60"
            stroke="#5eead4"
            strokeWidth="1.2"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 3.6, opacity: 0 }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeOut",
              delay: d,
            }}
            style={{ originX: "240px", originY: "240px", transformBox: "view-box" }}
          />
        ))}

        {/* outer ring (slow) */}
        <motion.g {...spin(46)} style={{ originX: 0.5, originY: 0.5 }}>
          <circle
            cx="240"
            cy="240"
            r="200"
            stroke="rgba(148,163,184,0.35)"
            strokeWidth="1"
            strokeDasharray="3 9"
          />
          <circle cx="240" cy="40" r="6" fill="#5eead4" />
          <circle cx="440" cy="240" r="4" fill="#94a3b8" />
          <circle cx="240" cy="440" r="6" fill="#22d3ee" />
          <circle cx="40" cy="240" r="4" fill="#94a3b8" />
        </motion.g>

        {/* middle ring (reverse) */}
        <motion.g {...spin(30, true)} style={{ originX: 0.5, originY: 0.5 }}>
          <circle
            cx="240"
            cy="240"
            r="150"
            stroke="rgba(94,234,212,0.45)"
            strokeWidth="1.2"
          />
          <circle cx="346" cy="134" r="7" fill="url(#tealGrad)" />
          <circle cx="134" cy="346" r="7" fill="url(#tealGrad)" />
          <circle cx="240" cy="90" r="4" fill="#e2e8f0" />
          <circle cx="240" cy="390" r="4" fill="#e2e8f0" />
        </motion.g>

        {/* inner ring (fast) */}
        <motion.g {...spin(18)} style={{ originX: 0.5, originY: 0.5 }}>
          <circle
            cx="240"
            cy="240"
            r="104"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <circle cx="344" cy="240" r="5" fill="#5eead4" />
          <circle cx="136" cy="240" r="5" fill="#22d3ee" />
        </motion.g>

        {/* funnel */}
        <g>
          <path
            d="M186 196 H294 L262 246 V286 L218 302 V246 Z"
            fill="rgba(3,18,28,0.75)"
            stroke="url(#tealGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M200 212 H280"
            stroke="#5eead4"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M212 228 H268"
            stroke="#5eead4"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />

          {[212, 240, 268].map((x, i) => (
            <motion.circle
              key={x}
              cx={x}
              r="3.5"
              fill="#a7f3d0"
              initial={{ cy: 150, opacity: 0 }}
              animate={{ cy: [150, 230, 320], opacity: [0, 1, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeIn",
                delay: i * 0.55,
              }}
            />
          ))}
        </g>

        {/* rising pipeline bars */}
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i}
            x={206 + i * 18}
            width="10"
            rx="3"
            fill="url(#tealGrad)"
            initial={{ y: 400, height: 0 }}
            animate={{ y: [400, 400 - (14 + i * 10)], height: [0, 14 + i * 10] }}
            transition={{
              duration: 1.2,
              delay: 0.6 + i * 0.15,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>

      {/* floating chips (desktop only) */}
      {chips.map((c) => (
        <motion.div
          key={c.label}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: c.delay,
          }}
          className={`absolute hidden items-center gap-2 rounded-full border border-teal-400/30 bg-slate-950/60 px-3.5 py-2 text-xs font-semibold text-teal-100 backdrop-blur-md lg:flex ${c.cls}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
          {c.label}
        </motion.div>
      ))}
    </div>
  );
}