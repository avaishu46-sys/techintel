import { useState } from "react";
import { Search } from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import ResourceCard from "../components/ResourceCard";
import Reveal from "../components/Reveal";

function Resources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const resources = [
    {
      title: "The Future of Enterprise Technology",
      description:
        "Explore major technology trends shaping enterprise priorities and business decisions.",
      category: "Technology",
      type: "eBook",
      slug: "future-of-enterprise-technology",
    },
    {
      title: "Understanding Modern B2B Buyers",
      description:
        "A practical guide to understanding how technology buyers research and evaluate solutions.",
      category: "Research",
      type: "Report",
      slug: "understanding-modern-b2b-buyers",
    },
    {
      title: "AI Agents & The Future of Work",
      description:
        "Explore the growing role of AI agents and their impact on modern organizations.",
      category: "AI",
      type: "Guide",
      slug: "ai-agents-future-of-work",
    },
    {
      title: "Building a Stronger Demand Engine",
      description:
        "Key considerations for creating an effective B2B demand-generation strategy.",
      category: "Marketing",
      type: "Guide",
      slug: "building-a-stronger-demand-engine",
    },
    {
      title: "Enterprise Data & Analytics",
      description:
        "Understand how organizations are approaching data, analytics and business intelligence.",
      category: "Data",
      type: "Report",
      slug: "enterprise-data-analytics",
    },
    {
      title: "Cybersecurity Priorities for Businesses",
      description:
        "Key cybersecurity themes and considerations for technology decision-makers.",
      category: "Security",
      type: "eBook",
      slug: "cybersecurity-priorities",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Research",
    "AI",
    "Marketing",
    "Data",
    "Security",
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      category === "All" ||
      resource.category === category;

    const matchesSearch =
      resource.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>

      <main>

        {/* HERO */}
        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">

            <SectionLabel>
              Resource library
            </SectionLabel>

            <SectionHeading
              label=""
              title="Research, reports and ideas for technology professionals."
              description="Explore our collection of technology research, eBooks, guides and reports."
            />

          </div>
        </section>

        {/* RESOURCE LIST */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Filters */}
            <div className="flex flex-col gap-5 border-b border-slate-200 pb-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      category === item
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-72">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search resources..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  className="w-full rounded-full border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-teal-500"
                />
              </div>

            </div>

            {/* Cards */}
            {filteredResources.length > 0 ? (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredResources.map((resource, index) => (
                  <Reveal
                    key={resource.slug}
                    delay={index * 0.05}
                  >
                    <ResourceCard resource={resource} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <h3 className="text-xl font-bold text-slate-950">
                  No resources found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search or category.
                </p>
              </div>
            )}

          </div>
        </section>

      </main>

    </>
  );
}

export default Resources;