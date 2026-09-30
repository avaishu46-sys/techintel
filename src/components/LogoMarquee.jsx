import { motion } from "framer-motion";

function LogoMarquee({ logos = [] }) {
  if (!logos.length) return null;

  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-8">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400/[0.06] via-teal-400/[0.10] to-violet-400/[0.06] blur-3xl" />

      <motion.div
        className="pointer-events-none absolute left-[10%] top-[35%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.7)]"
        animate={{ y: [-15, 15, -15], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute right-[12%] top-[60%] h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.7)]"
        animate={{ y: [15, -15, 15], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[15%] top-[28%] h-px w-[18%] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[15%] h-px w-[18%] bg-gradient-to-r from-transparent via-violet-300/30 to-transparent"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-24 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-40 lg:w-56" />
      <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-24 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-40 lg:w-56" />

      <LogoRow logos={logos} direction="left" duration={34} />
    </div>
  );
}

function LogoRow({ logos, direction = "left", duration = 35 }) {
  const repeated = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex w-max items-center"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((logo, index) => (
          <motion.div
            key={`${logo.name}-${direction}-${index}`}
            className="group/logo relative mx-8 flex h-28 w-[220px] shrink-0 items-center justify-center sm:mx-10 sm:h-32 sm:w-[250px] lg:mx-12 lg:w-[280px]"
            whileHover={{ scale: 1.1, y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/0 blur-2xl transition-all duration-500 group-hover/logo:bg-teal-400/20" />

            {logo.image && (
              <motion.img
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                draggable="false"
                className="relative z-10 h-auto w-auto max-h-[68px] max-w-[185px] object-contain opacity-95 transition-all duration-500 sm:max-h-[76px] sm:max-w-[210px] lg:max-h-[84px] lg:max-w-[235px]"
                whileHover={{ scale: 1.08 }}
              />
            )}

            <motion.span className="absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-teal-500 opacity-0 shadow-[0_0_14px_rgba(20,184,166,0.9)] transition-opacity duration-300 group-hover/logo:opacity-100" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default LogoMarquee;
