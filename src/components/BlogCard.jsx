import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

function BlogCard({
  blog,
}) {
  const {
    title,
    excerpt,
    category = "Insights",
    image,
    slug,
    date,
    author,
  } = blog;

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
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100">
            <span className="text-5xl font-black text-teal-200">
              TI
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          {date && (
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {date}
            </span>
          )}

          {author && (
            <>
              <span>•</span>
              <span>{author}</span>
            </>
          )}
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug text-slate-950">
          {title}
        </h3>

        {excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
            {excerpt}
          </p>
        )}

        <Link
          to={`/blogs/${slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
        >
          Read More

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default BlogCard;