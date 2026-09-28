import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  FileText,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

function ResourceDetails() {
  const { slug } = useParams();

  const resource = {
    title: "The Future of Enterprise Technology",
    category: "Technology",
    type: "eBook",
    description:
      "Explore the technology trends, business priorities and changing expectations shaping the modern enterprise.",
  };

  return (
    <>

      <main>

        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">

            <Link
              to="/resources"
              className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to resources
            </Link>

            <SectionLabel>
              {resource.category}
            </SectionLabel>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
              {resource.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {resource.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                {resource.type}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Technology Insights
              </span>
            </div>

          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_350px] lg:px-8">

            <article className="prose prose-slate max-w-none">

              <div className="mb-10 flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-teal-950">
                <FileText
                  size={80}
                  className="text-teal-400"
                />
              </div>

              <h2 className="text-3xl font-bold text-slate-950">
                About this resource
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-500">
                Technology continues to influence how organizations operate,
                compete and serve customers. Understanding these shifts can
                help businesses identify opportunities and prepare for what's
                next.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">
                This resource explores key themes and considerations for
                technology professionals navigating a rapidly changing
                environment.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-slate-950">
                What you'll discover
              </h2>

              <ul className="mt-5 space-y-3 text-slate-500">
                <li>• Major technology trends</li>
                <li>• Changing business priorities</li>
                <li>• Emerging technology opportunities</li>
                <li>• Considerations for technology leaders</li>
              </ul>

            </article>

            <aside>
              <div className="sticky top-28 rounded-3xl bg-slate-50 p-7">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Get the resource
                </p>

                <h3 className="mt-4 text-2xl font-bold text-slate-950">
                  Download the full {resource.type}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Access the complete resource and explore the insights in
                  detail.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                >
                  Request Resource
                  <Download size={16} />
                </Link>

              </div>
            </aside>

          </div>
        </section>

      </main>

    </>
  );
}

export default ResourceDetails;