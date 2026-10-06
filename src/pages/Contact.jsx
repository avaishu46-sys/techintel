// import {
//   Mail,
//   MapPin,
//   ArrowUpRight,
// } from "lucide-react";

// import SectionLabel from "../components/SectionLabel";
// import SectionHeading from "../components/SectionHeading";
// import ContactForm from "../components/ContactForm";
// import Reveal from "../components/Reveal";

// function Contact() {
//   return (
//     <>

//       <main>

//         {/* HERO */}
//         <section className="bg-slate-950 pt-40 text-white">
//           <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

//             <SectionLabel>
//               Contact us
//             </SectionLabel>

//             <h1 className="max-w-5xl text-4xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
//               Let's talk about
//               <span className="block text-teal-400">
//                 what's next.
//               </span>
//             </h1>

//             <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
//               Have a campaign idea, a technology marketing challenge or simply
//               want to learn more about TechIntel? We'd love to hear from you.
//             </p>

//           </div>
//         </section>

//         {/* CONTACT */}
//         <section className="bg-slate-50 py-20 lg:py-28">
//           <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8">

//             {/* Information */}
//             <Reveal className="min-w-0">
//               <div>
//                 <SectionHeading
//                   label="Start a conversation"
//                   title="Tell us what you're working on."
//                   description="Share a few details and our team will get back to you."
//                 />

//                 <div className="mt-10 space-y-5">

//                   <a
//                     href="mailto:contact@techintel.tech"
//                     className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300"
//                   >
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
//                       <Mail
//                         size={19}
//                         className="text-teal-600"
//                       />
//                     </div>

//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                         Email
//                       </p>

//                       <p className="mt-1 text-sm font-semibold text-slate-950">
//                         contact@techintel.tech
//                       </p>
//                     </div>

//                     <ArrowUpRight
//                       size={17}
//                       className="ml-auto text-slate-400"
//                     />
//                   </a>

//                   <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50">
//                       <MapPin
//                         size={19}
//                         className="text-teal-600"
//                       />
//                     </div>

//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                         Locations
//                       </p>

//                       <p className="mt-1 text-sm leading-6 text-slate-600">
//                         Pune, India
//                         <br />
//                         Delaware, USA
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </Reveal>

//             {/* Form */}
//             <Reveal delay={0.15} className="min-w-0">
//               <ContactForm />
//             </Reveal>

//           </div>
//         </section>

//       </main>

//     </>
//   );
// }

// export default Contact;



import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Clock,
  MessageSquare,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const highlights = [
  { icon: Clock, text: "Reply within 1 business day" },
  { icon: MessageSquare, text: "No sales scripts, just a real conversation" },
  { icon: CheckCircle2, text: "Free initial consultation" },
];

const locations = [
  { city: "Pune", country: "India", note: "Delivery & operations" },
  { city: "Delaware", country: "USA", note: "Registered office" },
];

const nextSteps = [
  {
    title: "We read your message",
    text: "A team member reviews your details and goals.",
  },
  {
    title: "We reply with questions or ideas",
    text: "Expect a response within one business day.",
  },
  {
    title: "We schedule a short call",
    text: "We align on scope, timeline and the best way forward.",
  },
];

const ticker = [
  "Campaign strategy",
  "Technology marketing",
  "Lead generation",
  "Content & thought leadership",
  "Demand generation",
  "Account-based marketing",
  "Brand positioning",
];

/* ------------------------------------------------------------------ */
/* Animation styles (no extra dependencies needed)                     */
/* ------------------------------------------------------------------ */

const styles = `
@keyframes ti-rise {
  from { opacity: 0; transform: translateY(28px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
@keyframes ti-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}
@keyframes ti-float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(24px, -20px) scale(1.08); }
}
@keyframes ti-spin { to { transform: rotate(360deg); } }
@keyframes ti-spin-rev { to { transform: rotate(-360deg); } }
@keyframes ti-dash { to { stroke-dashoffset: -60; } }
@keyframes ti-pulse-ring {
  0%   { transform: scale(0.6); opacity: 0.7; }
  100% { transform: scale(2.4); opacity: 0; }
}
@keyframes ti-shimmer {
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
@keyframes ti-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes ti-draw {
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
}
@keyframes ti-pop {
  0%   { transform: scale(0.6); opacity: 0; }
  70%  { transform: scale(1.12); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes ti-blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.35; }
}

@keyframes ti-dot {
  0%, 60%, 100% { transform: translateY(0); opacity: .45; }
  30%           { transform: translateY(-5px); opacity: 1; }
}
@keyframes ti-bar {
  0%   { transform: scaleY(.15); }
  60%, 100% { transform: scaleY(1); }
}
@keyframes ti-twinkle {
  0%, 100% { opacity: .2; transform: scale(.7); }
  50%      { opacity: 1;  transform: scale(1.15); }
}
.ti-dot     { transform-box: fill-box; animation: ti-dot 1.2s ease-in-out infinite; }
.ti-bar     { transform-box: fill-box; transform-origin: bottom; animation: ti-bar 2.6s ease-in-out infinite alternate; }
.ti-twinkle { transform-box: fill-box; transform-origin: center; animation: ti-twinkle 3s ease-in-out infinite; }

.ti-rise      { opacity: 0; animation: ti-rise .9s cubic-bezier(.2,.7,.2,1) forwards; }
.ti-float     { animation: ti-float 6s ease-in-out infinite; }
.ti-float-slow{ animation: ti-float-slow 12s ease-in-out infinite; }
.ti-spin      { transform-origin: 200px 200px; animation: ti-spin 50s linear infinite; }
.ti-spin-rev  { transform-origin: 200px 200px; animation: ti-spin-rev 70s linear infinite; }
.ti-dash      { stroke-dasharray: 6 8; animation: ti-dash 3s linear infinite; }
.ti-pulse     { transform-box: fill-box; transform-origin: center; animation: ti-pulse-ring 2.6s ease-out infinite; }
.ti-shimmer   { background-size: 200% 100%; animation: ti-shimmer 5s linear infinite; }
.ti-marquee   { animation: ti-marquee 32s linear infinite; }
.ti-marquee:hover { animation-play-state: paused; }
.ti-blink     { animation: ti-blink 1.8s ease-in-out infinite; }
.ti-line      { transform-origin: left; transform: scaleX(0); }
.ti-line.is-in{ animation: ti-draw-x 1.4s cubic-bezier(.4,0,.2,1) .2s forwards; }
@keyframes ti-draw-x {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.ti-step      { opacity: 0; }
.ti-step.is-in{ animation: ti-rise .7s cubic-bezier(.2,.7,.2,1) forwards; }
.ti-badge.is-in{ animation: ti-pop .6s cubic-bezier(.2,.7,.2,1) forwards; }

@media (prefers-reduced-motion: reduce) {
  .ti-rise, .ti-float, .ti-float-slow, .ti-spin, .ti-spin-rev, .ti-dash,
  .ti-pulse, .ti-shimmer, .ti-marquee, .ti-blink, .ti-line.is-in,
  .ti-step.is-in, .ti-badge.is-in, .ti-dot, .ti-bar, .ti-twinkle {
    animation: none !important;
  }
  .ti-rise, .ti-step { opacity: 1 !important; }
  .ti-line { transform: scaleX(1) !important; }
}
`;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ------------------------------------------------------------------ */
/* Graphics                                                            */
/* ------------------------------------------------------------------ */

/** Hero: floating chat window with typing indicator, chart card and sparkles */
function ChatGraphic() {
  const star = (x, y, r = 8) =>
    `M${x} ${y - r} L${x + r * 0.25} ${y - r * 0.25} L${x + r} ${y} L${x + r * 0.25} ${y + r * 0.25} L${x} ${y + r} L${x - r * 0.25} ${y + r * 0.25} L${x - r} ${y} L${x - r * 0.25} ${y - r * 0.25} Z`;

  const bars = [24, 38, 30, 52, 64];

  return (
    <svg
      // viewBox="0 0 460 420"
      // className="h-full w-full"
      // role="img"
      // aria-label="Illustration of a chat conversation with a team member"
    >
      {/* <defs>
        <linearGradient id="ti-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="ti-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111c33" />
          <stop offset="100%" stopColor="#0b1220" />
        </linearGradient>
      </defs> */}

      {/* Sparkles */}
      {/* <path d={star(24, 70)} fill="#5eead4" className="ti-twinkle" />
      <path
        d={star(436, 210, 6)}
        fill="#2dd4bf"
        className="ti-twinkle"
        style={{ animationDelay: "-1.2s" }}
      />
      <path
        d={star(18, 330, 5)}
        fill="#99f6e4"
        className="ti-twinkle"
        style={{ animationDelay: "-2.1s" }}
      /> */}

      {/* <g className="ti-float"> */}
        {/* Back card */}
        {/* <rect
          x="70"
          y="52"
          width="320"
          height="250"
          rx="22"
          fill="#0b1220"
          stroke="#2dd4bf"
          strokeOpacity="0.18"
          transform="rotate(-6 230 177)"
        /> */}

        {/* Main chat window */}
        {/* <rect
          x="50"
          y="70"
          width="340"
          height="262"
          rx="22"
          fill="url(#ti-card)"
          stroke="#2dd4bf"
          strokeOpacity="0.3"
        /> */}

        {/* Header */}
        {/* <circle cx="88" cy="102" r="15" fill="url(#ti-teal)" />
        <text
          x="88"
          y="106"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#042f2e"
        >
          TI
        </text>
        <rect x="112" y="93" width="96" height="7" rx="3.5" fill="#e2e8f0" opacity="0.85" />
        <rect x="112" y="107" width="62" height="5" rx="2.5" fill="#64748b" />
        <circle cx="366" cy="102" r="9" fill="#2dd4bf" fillOpacity="0.3" className="ti-pulse" />
        <circle cx="366" cy="102" r="4" fill="#2dd4bf" />
        <line x1="50" y1="128" x2="390" y2="128" stroke="#1e293b" /> */}

        {/* Incoming message */}
        {/* <rect x="70" y="144" width="196" height="54" rx="14" fill="#1e293b" />
        <rect x="86" y="161" width="154" height="6" rx="3" fill="#94a3b8" opacity="0.75" />
        <rect x="86" y="175" width="104" height="6" rx="3" fill="#94a3b8" opacity="0.45" /> */}

        {/* Outgoing message */}
        {/* <rect x="150" y="210" width="220" height="54" rx="14" fill="url(#ti-teal)" />
        <rect x="166" y="227" width="172" height="6" rx="3" fill="#042f2e" opacity="0.65" />
        <rect x="166" y="241" width="118" height="6" rx="3" fill="#042f2e" opacity="0.4" /> */}

        {/* Typing indicator */}
        {/* <rect x="70" y="278" width="72" height="34" rx="17" fill="#1e293b" />
        {[93, 106, 119].map((cx, i) => (
          <circle
            key={cx}
            cx={cx}
            cy="295"
            r="3.5"
            fill="#2dd4bf"
            className="ti-dot"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))} */}
      {/* </g> */}

      {/* Delivered badge */}
      {/* <g className="ti-float" style={{ animationDelay: "-2s" }}>
        <circle cx="398" cy="62" r="26" fill="#2dd4bf" fillOpacity="0.25" className="ti-pulse" />
        <circle cx="398" cy="62" r="21" fill="url(#ti-teal)" stroke="#0f172a" strokeWidth="3" />
        <path
          d="M388 62 l7 7 l13 -14"
          fill="none"
          stroke="#042f2e"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g> */}

      {/* Growth chart card */}
      {/* <g className="ti-float" style={{ animationDelay: "-3.5s" }}>
        <rect
          x="296"
          y="282"
          width="144"
          height="104"
          rx="16"
          fill="#0f172a"
          stroke="#2dd4bf"
          strokeOpacity="0.4"
        />
        <rect x="314" y="300" width="52" height="5" rx="2.5" fill="#64748b" />
        <rect x="314" y="311" width="30" height="4" rx="2" fill="#334155" />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={316 + i * 22}
            y={370 - h * 0.75}
            width="12"
            height={h * 0.75}
            rx="3"
            fill="url(#ti-teal)"
            className="ti-bar"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </g> */}
    </svg>
  );
}

/** Locations card: dashed arc between the two offices with a travelling dot */
function RouteMap() {
  return (
    <svg
      viewBox="0 0 300 120"
      className="h-auto w-full"
      role="img"
      aria-label="Route between Delaware, USA and Pune, India"
    >
      <defs>
        <pattern id="ti-dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="#cbd5e1" />
        </pattern>
        <linearGradient id="ti-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>

      <rect width="300" height="120" rx="12" fill="#f8fafc" />
      <rect width="300" height="120" rx="12" fill="url(#ti-dots)" opacity="0.8" />

      <path
        id="ti-route"
        d="M55 78 Q150 -12 245 72"
        fill="none"
        stroke="url(#ti-arc)"
        strokeWidth="2"
        className="ti-dash"
      />

      {/* Travelling dot */}
      <circle r="4" fill="#14b8a6">
        <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
          <mpath href="#ti-route" />
        </animateMotion>
      </circle>

      {/* Delaware */}
      <circle cx="55" cy="78" r="8" fill="#14b8a6" fillOpacity="0.35" className="ti-pulse" />
      <circle cx="55" cy="78" r="5" fill="#0d9488" stroke="#fff" strokeWidth="2" />
      <text x="55" y="104" textAnchor="middle" fontSize="10" fontWeight="600" fill="#475569">
        Delaware
      </text>

      {/* Pune */}
      <circle
        cx="245"
        cy="72"
        r="8"
        fill="#14b8a6"
        fillOpacity="0.35"
        className="ti-pulse"
        style={{ animationDelay: "1.3s" }}
      />
      <circle cx="245" cy="72" r="5" fill="#0d9488" stroke="#fff" strokeWidth="2" />
      <text x="245" y="98" textAnchor="middle" fontSize="10" fontWeight="600" fill="#475569">
        Pune
      </text>
    </svg>
  );
}

/** Paper plane that floats above the form */
function PaperPlane() {
  return (
    <svg viewBox="0 0 120 80" className="h-full w-full" aria-hidden="true">
      <path
        d="M4 70 C 30 70, 40 40, 70 38"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2"
        className="ti-dash"
      />
      <g transform="translate(66 8) rotate(8)">
        <path d="M0 24 L48 0 L34 48 L22 30 Z" fill="#14b8a6" />
        <path d="M22 30 L48 0 L26 36 Z" fill="#0f766e" />
        <path d="M22 30 L26 36 L20 42 Z" fill="#115e59" />
      </g>
    </svg>
  );
}

function Contact() {
  const [stepsRef, stepsInView] = useInView(0.25);

  return (
    <>
      <style>{styles}</style>

      <main>
        <section className="relative overflow-hidden bg-slate-950 pt-40 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at 30% 40%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 30% 40%, black 20%, transparent 75%)",
            }}
          />

          <div
            aria-hidden="true"
            className="ti-float-slow pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="ti-float-slow pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl"
            style={{ animationDelay: "-6s" }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-28 hidden h-[28rem] w-[31rem] xl:block 2xl:right-12"
          >
            <ChatGraphic />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <div className="ti-rise" style={{ animationDelay: ".05s" }}>
              <SectionLabel>Contact us</SectionLabel>
            </div>

            <h1 className="max-w-5xl text-4xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              <span
                className="ti-rise block"
                style={{ animationDelay: ".15s" }}
              >
                Let's talk about
              </span>
              <span
                className="ti-rise block"
                style={{ animationDelay: ".35s" }}
              >
                <span className="ti-shimmer inline-block bg-gradient-to-r from-teal-300 via-teal-500 to-teal-300 bg-clip-text pb-2 text-transparent">
                  what's next.
                </span>
              </span>
            </h1>

            <p
              className="ti-rise mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
              style={{ animationDelay: ".55s" }}
            >
              Have a campaign idea, a technology marketing challenge or simply
              want to learn more about TechIntel? We'd love to hear from you.
            </p>

            {/* Highlights */}
            <ul className="mt-10 flex flex-wrap gap-3">
              {highlights.map(({ icon: Icon, text }, i) => (
                <li
                  key={text}
                  className="ti-rise flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur transition hover:border-teal-400/40 hover:bg-teal-400/10"
                  style={{ animationDelay: `${0.7 + i * 0.12}s` }}
                >
                  <Icon size={15} className="text-teal-400" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Marquee ticker */}
          <div
            className="relative border-y border-white/10 bg-white/[0.02] py-4"
            aria-hidden="true"
          >
            <div
              className="flex overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              }}
            >
              <div className="ti-marquee flex shrink-0 items-center gap-10 pr-10">
                {[...ticker, ...ticker].map((item, i) => (
                  <span
                    key={i}
                    className="flex shrink-0 items-center gap-10 whitespace-nowrap text-sm font-medium text-slate-400"
                  >
                    {item}
                    <Sparkles size={14} className="text-teal-400" />
                  </span>
                ))}
              </div>
              <div className="ti-marquee flex shrink-0 items-center gap-10 pr-10">
                {[...ticker, ...ticker].map((item, i) => (
                  <span
                    key={i}
                    className="flex shrink-0 items-center gap-10 whitespace-nowrap text-sm font-medium text-slate-400"
                  >
                    {item}
                    <Sparkles size={14} className="text-teal-400" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          {/* Soft background accents */}
          <div
            aria-hidden="true"
            className="ti-float-slow pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="ti-float-slow pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl"
            style={{ animationDelay: "-5s" }}
          />

          <div className="relative mx-auto grid min-w-0 max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:px-8">
            {/* Information */}
            <Reveal className="min-w-0">
              <div>
                <SectionHeading
                  label="Start a conversation"
                  title="Tell us what you're working on."
                  description="Share a few details and our team will get back to you."
                />

                <div className="mt-10 space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:contact@techintel.tech"
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    {/* Hover sweep */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal-50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />

                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 transition group-hover:bg-teal-500">
                      <Mail
                        size={19}
                        className="text-teal-600 transition group-hover:text-white"
                      />
                      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-teal-500" />
                      </span>
                    </div>

                    <div className="relative min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-slate-950">
                        contact@techintel.tech
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="relative ml-auto shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-600"
                    />
                  </a>

                  {/* Locations */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                        <MapPin size={19} className="text-teal-600" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Locations
                      </p>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
                      <RouteMap />
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {locations.map((loc) => (
                        <div
                          key={loc.city}
                          className="rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-teal-50"
                        >
                          <p className="text-sm font-semibold text-slate-950">
                            {loc.city}, {loc.country}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {loc.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.15} className="min-w-0">
              <div className="relative">
                {/* Floating paper plane graphic */}
                <div
                  aria-hidden="true"
                  className="ti-float pointer-events-none absolute -top-14 right-6 z-10 hidden h-24 w-32 sm:block"
                >
                  <PaperPlane />
                </div>

                {/* Soft glow behind the form */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-400/20 via-transparent to-teal-600/10 blur-2xl"
                />

                {/* Animated gradient border */}
                <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-xl shadow-slate-900/5">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          "conic-gradient(from 0deg, transparent 0 60%, #2dd4bf 80%, #0d9488 90%, transparent 100%)",
                        animation: "ti-spin 6s linear infinite",
                        transformOrigin: "center",
                      }}
                    />
                  </div>

                  <div className="relative rounded-[22px] bg-white p-2">
                    <div className="mx-6 mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 to-teal-600" />
                    <ContactForm />
                  </div>
                </div>

                {/* Availability note */}
                <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
                  <span className="ti-blink h-2 w-2 rounded-full bg-teal-500" />
                  Our team is online and reading messages
                </p>
              </div>
            </Reveal>
          </div>

          {/* WHAT HAPPENS NEXT: full-width strip */}
          <div className="relative mx-auto mt-16 max-w-7xl px-6 lg:mt-24 lg:px-8">
            <Reveal>
              <div
                ref={stepsRef}
                className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12"
              >
                <div
                  aria-hidden="true"
                  className="ti-float-slow pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl"
                />

                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <Rocket size={18} className="text-teal-400" />
                    <p className="text-base font-semibold">What happens next</p>
                  </div>

                  <ol className="relative mt-10 grid gap-10 lg:grid-cols-3 lg:gap-8">
                    {/* Animated connecting line (desktop) */}
                    <span
                      aria-hidden="true"
                      className={`ti-line absolute left-[14px] right-[14px] top-[14px] hidden h-px bg-gradient-to-r from-teal-400 via-teal-400/50 to-teal-400/10 lg:block ${
                        stepsInView ? "is-in" : ""
                      }`}
                    />
                    {/* Static connecting line (mobile) */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 left-[14px] top-4 w-px bg-gradient-to-b from-teal-400/60 to-teal-400/10 lg:hidden"
                    />

                    {nextSteps.map((step, i) => (
                      <li
                        key={step.title}
                        className={`ti-step relative flex gap-4 lg:block ${
                          stepsInView ? "is-in" : ""
                        }`}
                        style={{ animationDelay: `${0.3 + i * 0.35}s` }}
                      >
                        <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-teal-400/50 bg-slate-950 text-xs font-semibold text-teal-400">
                          {i + 1}
                        </span>
                        <div className="lg:mt-5">
                          <p className="text-base font-medium text-white">
                            {step.title}
                          </p>
                          <p className="mt-1.5 max-w-xs text-sm leading-6 text-slate-400">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;