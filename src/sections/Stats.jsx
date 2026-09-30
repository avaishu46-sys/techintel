import React, { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";

// Helper CountUp Component with IntersectionObserver / Reset support
const CountUpAnimated = ({ end, prefix = "", suffix = "", duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo) for smooth slowdown towards the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  // Format numbers with commas (e.g. 1,000,000) if raw value is high
  const formattedCount = count.toLocaleString();

  return (
    <span>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger count when section is in view, reset when it leaves
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 } // Triggers when 25% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      value: 1000000,
      suffix: "+",
      label: "Technology professionals reached",
      formattedDisplay: true, // Use 1M+ or full number formatted
    },
    {
      value: 500,
      suffix: "+",
      label: "Brands and campaigns supported",
    },
    {
      value: 20,
      suffix: "+",
      label: "Technology categories covered",
    },
    {
      value: 10,
      suffix: "+",
      label: "Years of industry experience",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32"
    >
      {/* Background Decorative Gradient Glow */}
      <div 
        className="aria-hidden:true pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 blur-3xl opacity-20"
      >
        <div className="h-[350px] w-[800px] bg-gradient-to-tr from-blue-600 to-violet-500 rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number Display */}
                <div className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 sm:text-5xl group-hover:from-blue-400 group-hover:to-violet-400 transition-all duration-300">
                  <CountUpAnimated
                    end={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    duration={2200}
                  />
                </div>

                {/* Label */}
                <p className="mt-4 text-sm font-medium leading-6 text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;