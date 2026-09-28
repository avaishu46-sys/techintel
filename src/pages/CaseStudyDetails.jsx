import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

function CaseStudyDetails() {
  const { slug } = useParams();

  const caseStudy = {
    title: "Enterprise Technology Awareness Campaign",
    category: "Demand Generation",
    description:
      "A targeted campaign designed to connect an enterprise technology solution with relevant technology audiences.",
    result: "2.4x",
    resultLabel: "Illustrative campaign result",
  };

  return (
    <>

      <main>

        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">

            <Link
              to="/case-studies"
              className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to case studies
            </Link>

            <SectionLabel>
              {caseStudy.category}
            </SectionLabel>

            <h1 className="text-5xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
              {caseStudy.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {caseStudy.description}
            </p>

          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[1fr_350px]">

              <article>

                <div className="flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-teal-950">
                  <span className="text-7xl font-black text-teal-400">
                    TI
                  </span>
                </div>

                <h2 className="mt-12 text-3xl font-bold text-slate-950">
                  The challenge
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  The campaign needed to create awareness among a specific
                  technology audience while communicating a complex enterprise
                  proposition clearly and effectively.
                </p>

                <h2 className="mt-12 text-3xl font-bold text-slate-950">
                  The approach
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  We combined audience understanding, content and campaign
                  distribution to create a connected experience designed
                  around the needs of the target audience.
                </p>

                <h2 className="mt-12 text-3xl font-bold text-slate-950">
                  The outcome
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  The campaign generated measurable engagement and helped
                  create stronger visibility for the technology proposition.
                </p>

              </article>

              <aside>
                <div className="sticky top-28 rounded-3xl bg-slate-950 p-7 text-white">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10">
                    <TrendingUp
                      size={22}
                      className="text-teal-400"
                    />
                  </div>

                  <div className="mt-7 text-5xl font-bold">
                    {caseStudy.result}
                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    {caseStudy.resultLabel}
                  </p>

                  <div className="mt-8 h-px bg-white/10" />

                  <Link
                    to="/contact"
                    className="mt-7 flex items-center justify-center gap-2 rounded-full bg-teal-500 px-5 py-3.5 text-sm font-semibold"
                  >
                    Discuss your campaign
                    <ArrowUpRight size={16} />
                  </Link>

                </div>
              </aside>

            </div>

          </div>
        </section>

      </main>

    </>
  );
}

export default CaseStudyDetails;