import { motion } from "framer-motion";

function AnimatedText({
  children,
  className = "",
  delay = 0,
  once = true,
}) {
  const words = String(children).split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="mr-[0.25em] overflow-hidden"
        >
          <motion.span
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default AnimatedText;