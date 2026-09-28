import { motion } from "framer-motion";

function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 4,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        scale: {
          duration: 0.6,
          delay,
        },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default FloatingCard;