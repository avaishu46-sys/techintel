import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";
import ResourceCard from "../components/ResourceCard";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Insights() {
  const blogs = [
    {
      title: "The changing role of technology buyers in the digital age",
      excerpt:
        "Explore how technology decision-makers are discovering, evaluating and selecting solutions.",
      category: "Technology",
      slug: "changing-role-of-technology-buyers",
      date: "Insights",
    },
    {
      title: "Building a B2B technology content strategy",
      excerpt:
        "A practical look at creating content that supports awareness, consideration and demand.",
      category: "Marketing",
      slug: "b2b-technology-content-strategy",
      date: "Insights",
    },
    {
      title: "From audience data to better campaign decisions",
      excerpt:
        "How audience intelligence can help technology marketers make more informed campaign choices.",
      category: "Demand Generation",
      slug: "audience-data-campaign-decisions",
      date: "Insights",
    },
  ];

  const resources = [
    {
      title: "The Future of Enterprise Technology",
      description:
        "A research-led resource exploring key technology trends and business priorities.",
      category: "Report",
      type: "eBook",
      slug: "future-of-enterprise-technology",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Insights & resources"
            number="03"
            title="Ideas that keep technology marketers moving."
            description="Explore perspectives, reports and useful resources created around the changing technology landscape."
          />

          <Link
            to="/blogs"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-950"
          >
            View all insights
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Reveal
              key={blog.slug}
              delay={index * 0.08}
            >
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1fr_.45fr]">

              <div className="rounded-3xl bg-slate-950 p-8 text-white lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">
                  Featured resource
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                  Go deeper with research built for today's technology buyers.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                  Access reports, eBooks and research designed to help
                  technology professionals make informed decisions.
                </p>

                <Link
                  to="/resources"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold transition hover:bg-teal-400"
                >
                  Explore resources
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <ResourceCard resource={resources[0]} />

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

export default Insights;