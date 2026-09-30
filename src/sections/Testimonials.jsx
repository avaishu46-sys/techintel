import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const testimonials = [
  {
    id: "jobs",
    quote:
      "TechIntel helped us communicate our technology story to a highly relevant audience and created a campaign experience that felt genuinely useful.",
    name: "Client Partner",
    role: "Technology Marketing",
    company: "B2B Technology Brand",
    portrait: "https://raw.githubusercontent.com/hemantparashar/images/quote-cards/stevejobs-s.jpg",
    bgImage: "https://raw.githubusercontent.com/hemantparashar/images/quote-cards/stevejobs-bg.jpg",
    metric: "140% Engagement Increase",
  },
  {
    id: "zuck",
    quote:
      "The combination of audience understanding, content and campaign execution gave us a much more connected approach to our marketing.",
    name: "Marketing Leader",
    role: "Demand Generation",
    company: "Enterprise Technology",
    portrait: "https://raw.githubusercontent.com/hemantparashar/images/quote-cards/markzuck-s.jpg",
    bgImage: "https://raw.githubusercontent.com/hemantparashar/images/quote-cards/markzuck-bg.jpg",
    metric: "3.2x ROI Delivered",
  },
  {
    id: "musk",
    quote:
      "The team understood the technology category quickly and helped us turn a complex proposition into a clear campaign.",
    name: "Growth Lead",
    role: "B2B Marketing",
    company: "Technology Company",
    portrait: "https://raw.githubusercontent.com/hemantparashar/images/quote-cards/elonmusk-s.jpg",
    bgImage: "https://raw.githubusercontent.com/hemantparashar/images/quote-cards/elonmusk-bg.jpg",
    metric: "45% Acquisition Reduction",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider (4.5s intervals)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative min-h-[750px] overflow-hidden bg-slate-50 py-20 lg:py-28 text-slate-900 flex flex-col justify-center">
      {/* 1. Dynamic Soft Background Ambient Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + "-bg"}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.12, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125"
          style={{ backgroundImage: `url(${current.bgImage})` }}
        />
      </AnimatePresence>

      {/* Ambient Lighting Light Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-slate-50/90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <SectionHeading
          label="Client Perspective"
          number="05"
          title="Better marketing starts with understanding."
          description="A few examples of the kind of partnership we aim to create with technology marketing teams."
          align="center"
        />

        {/* 2. Split Stage Canvas Wrapper */}
        <div className="relative mt-12 mx-auto max-w-4xl min-h-[420px] flex items-center justify-center">
          
          {/* Main Card Container */}
          <div className="relative w-full md:w-[85%] min-h-[380px] flex flex-col md:flex-row items-center rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-2xl shadow-slate-200/60 overflow-hidden">
            
            {/* Left Image Column */}
            <div className="relative w-full md:w-5/12 h-64 md:h-full min-h-[300px] overflow-hidden bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "-img"}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 60, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${current.portrait})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/80 border border-slate-200 px-3 py-1 shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                <span className="text-[11px] font-semibold tracking-wide text-slate-700 uppercase">
                  Featured Case
                </span>
              </div>
            </div>

            {/* Right Quote Content Column */}
            <div className="relative w-full md:w-7/12 p-8 lg:p-10 flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "-text"}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Quote Icon & Metric */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 text-teal-600">
                        <Quote className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200/60 px-3 py-1 rounded-full">
                        {current.metric}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-base md:text-lg leading-relaxed text-slate-700 font-light italic">
                      “{current.quote}”
                    </p>
                  </div>

                  {/* Author Meta Info */}
                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <p className="text-base font-bold text-slate-950">
                      {current.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {current.role} <span className="text-teal-600">/</span> {current.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-between pointer-events-none z-20">
            <button
              onClick={handlePrev}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:scale-110 hover:border-teal-500 hover:text-teal-600 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:scale-110 hover:border-teal-500 hover:text-teal-600 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* 3. Navigation Indicator Dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "w-10 bg-teal-600 shadow-md shadow-teal-600/30"
                  : "w-3 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;