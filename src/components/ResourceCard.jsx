import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

function ResourceCard({
  resource,
}) {
  const {
    title,
    description,
    category = "Resource",
    image,
    slug,
    type = "Report",
  } = resource;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-950 to-slate-800">
            <FileText
              size={48}
              className="text-teal-400"
            />
          </div>
        )}

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-400">
          <FileText size={14} />
          {type}
        </div>

        <h3 className="text-xl font-bold leading-snug text-slate-950">
          {title}
        </h3>

        {description && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}

        <Link
          to={`/resources/${slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
        >
          Explore Resource

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default ResourceCard;