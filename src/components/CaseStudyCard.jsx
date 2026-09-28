import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function CaseStudyCard({
  caseStudy,
}) {
  const {
    title,
    description,
    category = "Case Study",
    image,
    slug,
    result,
    resultLabel,
  } = caseStudy;

  return (
    <motion.article
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-slate-950"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-950 to-teal-950" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold leading-tight text-white">
          {title}
        </h3>

        {description && (
          <p className="mt-4 text-sm leading-6 text-slate-400">
            {description}
          </p>
        )}

        {result && (
          <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/10">
              <TrendingUp
                size={19}
                className="text-teal-400"
              />
            </div>

            <div>
              <div className="text-2xl font-bold text-white">
                {result}
              </div>

              {resultLabel && (
                <div className="text-xs text-slate-500">
                  {resultLabel}
                </div>
              )}
            </div>
          </div>
        )}

        <Link
          to={`/case-studies/${slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-400"
        >
          View Case Study

          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default CaseStudyCard;