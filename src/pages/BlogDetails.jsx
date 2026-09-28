import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

function BlogDetails() {
  const { slug } = useParams();

  const blog = {
    title: "The Changing Role of Technology Buyers",
    category: "Technology",
    date: "Insights",
    author: "TechIntel",
    excerpt:
      "Technology buyers have more information and more choices than ever. Here's how marketers can adapt.",
  };

  return (
    <>

      <main>

        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

            <Link
              to="/blogs"
              className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to insights
            </Link>

            <SectionLabel>
              {blog.category}
            </SectionLabel>

            <h1 className="text-5xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-400">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex gap-4 text-sm text-slate-500">
              <span>{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>

          </div>
        </section>

        <article className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="mb-12 flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-teal-950">
            <span className="text-7xl font-black text-teal-400">
              TI
            </span>
          </div>

          <div className="space-y-8 text-base leading-8 text-slate-600">

            <p>
              The technology buying journey has changed dramatically. Buyers
              can research products, compare vendors and learn from peers
              before ever speaking with a sales representative.
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-950">
              Information is everywhere
            </h2>

            <p>
              For B2B technology marketers, this means simply publishing more
              content isn't enough. The content needs to be relevant, useful
              and connected to the questions buyers are actually asking.
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-950">
              Relevance creates engagement
            </h2>

            <p>
              Understanding the audience behind a technology category helps
              marketers create better experiences. Research, audience
              intelligence and campaign data can all contribute to that
              understanding.
            </p>

            <p>
              When marketing becomes more relevant, it becomes easier for
              potential buyers to understand the value of a technology
              solution and continue their journey.
            </p>

          </div>

          <div className="mt-14 rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-950">
              Want to discuss your technology marketing strategy?
            </h3>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500"
            >
              Talk to TechIntel
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </article>

      </main>

    </>
  );
}

export default BlogDetails;