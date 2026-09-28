import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Button({
  children,
  to,
  href,
  variant = "primary",
  arrow = true,
  className = "",
  onClick,
  type = "button",
}) {
  const variants = {
    primary:
      "bg-slate-950 text-white hover:bg-teal-500",
    secondary:
      "bg-teal-500 text-white hover:bg-teal-400",
    outline:
      "border border-slate-300 bg-white text-slate-950 hover:border-slate-950",
    dark:
      "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950",
  };

  const classes = `
    group inline-flex items-center justify-center gap-2
    rounded-full px-6 py-3
    text-sm font-semibold
    transition-all duration-300
    ${variants[variant]}
    ${className}
  `;

  const icon = (
    <span className="overflow-hidden">
      {arrow ? (
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : (
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
      {icon}
    </motion.button>
  );
}

export default Button;