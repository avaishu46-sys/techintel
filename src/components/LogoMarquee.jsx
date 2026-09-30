import { motion } from "framer-motion";

function LogoMarquee({ logos = [], direction = "left", speed = 30 }) {
  if (!logos.length) return null;

  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Light Edge Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent sm:w-44 lg:w-60" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent sm:w-44 lg:w-60" />

      <div className="flex w-max">
        <motion.div
          className="flex shrink-0 items-center gap-5 pr-5"
          initial={{ x: direction === "left" ? "0%" : "-50%" }}
          animate={{ x: direction === "left" ? "-50%" : "0%" }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${direction}-${index}`}
              className="group relative flex h-24 w-[200px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-md hover:shadow-teal-500/5 sm:h-26 sm:w-[230px]"
            >
              {logo.image && (
                <img
                  src={logo.image}
                  alt={logo.name}
                  loading="lazy"
                  draggable="false"
                  className="relative z-10 max-h-12 max-w-[140px] object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 sm:max-h-13 sm:max-w-[155px]"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default LogoMarquee;