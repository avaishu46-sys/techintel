import { useState } from "react";
import { Search } from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import BlogCard from "../components/BlogCard";
import Reveal from "../components/Reveal";

function Blogs() {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      title: "The changing role of technology buyers",
      excerpt:
        "How technology decision-makers are discovering, researching and evaluating solutions.",
      category: "Technology",
      slug: "changing-role-of-technology-buyers",
      date: "Insights",
    },
    {
      title: "Building a B2B technology content strategy",
      excerpt:
        "A practical approach to creating content that supports the technology buyer journey.",
      category: "Marketing",
      slug: "b2b-technology-content-strategy",
      date: "Insights",
    },
    {
      title: "How audience intelligence improves campaigns",
      excerpt:
        "Why understanding your audience can improve the relevance of B2B marketing campaigns.",
      category: "Demand Generation",
      slug: "audience-intelligence-campaigns",
      date: "Insights",
    },
    {
      title: "Technology trends shaping enterprise decisions",
      excerpt:
        "A look at several technology themes influencing business priorities.",
      category: "Research",
      slug: "technology-trends-enterprise",
      date: "Insights",
    },
    {
      title: "Why useful content matters in B2B marketing",
      excerpt:
        "Moving beyond promotional content to create experiences that genuinely help buyers.",
      category: "Content",
      slug: "useful-content-b2b-marketing",
      date: "Insights",
    },
    {
      title: "The future of demand generation",
      excerpt:
        "How B2B marketers are thinking about audience engagement and measurable growth.",
      category: "Demand Generation",
      slug: "future-of-demand-generation",
      date: "Insights",
    },
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>

      <main>

        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

            <SectionLabel>
              Insights
            </SectionLabel>

            <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Ideas for the
              <span className="block text-teal-400">
                technology economy.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore perspectives on technology, marketing, demand generation
              and the changing B2B landscape.
            </p>

          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex justify-end">
              <div className="relative w-full max-w-sm">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search insights..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  className="w-full rounded-full border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog, index) => (
                <Reveal
                  key={blog.slug}
                  delay={index * 0.05}
                >
                  <BlogCard blog={blog} />
                </Reveal>
              ))}
            </div>

          </div>
        </section>

      </main>

    </>
  );
}

export default Blogs;