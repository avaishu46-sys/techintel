import SectionHeading from "../components/SectionHeading";
import CaseStudyCard from "../components/CaseStudyCard";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function CaseStudies() {
  const caseStudies = [
    {
      title: "Driving awareness for an enterprise technology solution",
      description:
        "A targeted B2B campaign designed to connect a technology brand with relevant business audiences.",
      category: "Demand Generation",
      slug: "enterprise-technology-awareness",
      result: "2.4x",
      resultLabel: "Illustrative campaign result",
    },
    {
      title: "Building content engagement across technology audiences",
      description:
        "A content-led campaign focused on educating audiences and creating meaningful engagement.",
      category: "Content Marketing",
      slug: "technology-content-engagement",
      result: "68%",
      resultLabel: "Illustrative engagement rate",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Case studies"
            number="04"
            title="Strategy is only valuable when it creates impact."
            description="Explore how integrated content, audience and demand-generation approaches can support technology brands."
          />

          <Link
            to="/case-studies"
            className="group flex w-fit items-center gap-2 text-sm font-semibold"
          >
            View case studies
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <Reveal
              key={caseStudy.slug}
              delay={index * 0.1}
            >
              <CaseStudyCard caseStudy={caseStudy} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;