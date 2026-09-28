import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import CaseStudyCard from "../components/CaseStudyCard";
import Reveal from "../components/Reveal";

function CaseStudies() {
  const caseStudies = [
    {
      title: "Enterprise technology awareness campaign",
      description:
        "A targeted campaign designed to connect an enterprise technology proposition with relevant business audiences.",
      category: "Demand Generation",
      slug: "enterprise-technology-awareness",
      result: "2.4x",
      resultLabel: "Illustrative campaign result",
    },
    {
      title: "Technology content engagement",
      description:
        "A content-led approach focused on educating audiences and creating meaningful engagement.",
      category: "Content",
      slug: "technology-content-engagement",
      result: "68%",
      resultLabel: "Illustrative engagement rate",
    },
    {
      title: "Audience activation campaign",
      description:
        "An audience-focused campaign built around targeted technology professionals.",
      category: "Audience",
      slug: "audience-activation",
      result: "3.1x",
      resultLabel: "Illustrative campaign result",
    },
  ];

  return (
    <>

      <main>

        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

            <SectionLabel>
              Case studies
            </SectionLabel>

            <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Ideas are good.
              <span className="block text-teal-400">
                Impact is better.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore examples of how research, content, audience insight and
              demand generation can work together.
            </p>

          </div>
        </section>

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionHeading
              label="Our work"
              title="Campaigns built around the audience."
              description="Explore selected examples of our approach to B2B technology marketing."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {caseStudies.map((item, index) => (
                <Reveal
                  key={item.slug}
                  delay={index * 0.08}
                >
                  <CaseStudyCard caseStudy={item} />
                </Reveal>
              ))}
            </div>

          </div>
        </section>

      </main>

    </>
  );
}

export default CaseStudies;