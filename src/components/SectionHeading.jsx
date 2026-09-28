import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

function SectionHeading({
  label,
  number,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {label && (
        <SectionLabel number={number}>
          {label}
        </SectionLabel>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base leading-7 text-slate-500"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;