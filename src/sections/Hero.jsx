import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Replace with your actual background image import/path
import heroBgImage from "../assets/images/abstrac-wave-background-colorful_677411-783.avif";

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

  // Track scroll progress within this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.08], [0, -30]);

  // Hide Section 1 from layout completely after fade-out to prevent ghost overlap
  const heroDisplay = useTransform(scrollYProgress, (v) => (v >= 0.09 ? "none" : "flex"));

  // DARK OVERLAY: Darkens background image as Section 1 fades out
  const bgDimOpacity = useTransform(scrollYProgress, [0.04, 0.12], [0, 0.85]);

  // SECTION 2 CONTAINER: Enters at 0.10, stays pinned until 0.88, then fades out before unpinning
  const statementOpacity = useTransform(scrollYProgress, [0.09, 0.14, 0.88, 0.96], [0, 1, 1, 0]);

  // Full statement text
  const statementText =
    "We transform complex B2B technology offerings into scalable pipeline through research-backed content, high-precision decision-maker targeting, and full-funnel execution.";
  const words = statementText.split(" ");

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[450vh] bg-[#030812] text-white select-none"
    >
      {/* STICKY FULLSCREEN VIEWPORT */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">

        {/* ========================================================== */}
        {/* BACKGROUND IMAGE + DARKENING OVERLAY                       */}
        {/* ========================================================== */}
        <motion.div
          style={{
            x: mousePos.x,
            y: mousePos.y,
          }}
          transition={{ type: "spring", stiffness: 20, damping: 25 }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          {/* Base Teal Curve Image */}
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat opacity-95"
            style={{ backgroundImage: `url(${heroBgImage})` }}
          />

          {/* Dynamic Darkening Overlay for maximum high-contrast text reveal */}
          <motion.div
            style={{ opacity: bgDimOpacity }}
            className="absolute inset-0 bg-[#020b18]"
          />

          {/* Top/Bottom Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030812]/40 via-transparent to-[#030812]/90" />
        </motion.div>

        {/* Ambient Grid Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ========================================================== */}
        {/* SECTION 1: MAIN HERO CONTENT                               */}
        {/* ========================================================== */}
        <motion.div
          style={{
            opacity: heroOpacity,
            y: heroY,
            display: heroDisplay,
          }}
          className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start justify-center px-6 pt-16 lg:px-8"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-teal-500/30 bg-teal-950/40 px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-teal-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
              Demand Generation Engine
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
            Architecting <br />
            demand for <br />
            <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(45,212,191,0.35)]">
              enterprise tech leaders.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl font-normal">
            We connect high-growth B2B technology brands with verified
            decision-makers through high-precision research, authority content,
            and targeted media engines.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 rounded-full bg-teal-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.4)]"
            >
              Explore Services
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link> */}

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
        </motion.div>

        <motion.div
          style={{
            opacity: statementOpacity,
          }}
          className="absolute inset-0 z-20 flex items-center justify-center px-6 lg:px-12 pointer-events-none"
        >
          <div className="max-w-4xl text-center">
            <h2 className="flex flex-wrap justify-center text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight">
              {words.map((word, i) => {
                // All words light up sequentially between 0.12 and 0.65 scroll progress
                const wordStart = 0.12 + (i / words.length) * 0.50;
                const wordEnd = wordStart + 0.03;

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

// Sub-component: Starts completely invisible (opacity 0) until scrolled to
function Word({ word, progress, range }) {
  // Starts at 0 opacity so text is completely hidden before revealing
  const opacity = useTransform(progress, range, [0, 1]);
  const color = useTransform(progress, range, ["#334155", "#ffffff"]);

  const isHighlight =
    word.toLowerCase().includes("pipeline") ||
    word.toLowerCase().includes("decision-maker") ||
    word.toLowerCase().includes("high-precision");

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.25em]">
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