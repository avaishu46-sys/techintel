import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function FinalCTA() {
  return (
    <section className="overflow-hidden bg-teal-500">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* Decorative elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <Sparkles size={14} />
              Let's build what's next
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Your next technology marketing story starts here.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75">
              Tell us what you're trying to achieve and let's explore how
              research, content and demand generation can help.
            </p>
          </div>

          <Link
            to="/contact"
            className="group flex w-fit items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
          >
            Let's Talk

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}

export default FinalCTA;