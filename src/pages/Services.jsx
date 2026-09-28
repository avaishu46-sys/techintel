import { motion } from "framer-motion";
import {
  PenTool,
  Megaphone,
  Target,
  BarChart3,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

function Services() {
  const services = [
    {
      icon: PenTool,
      number: "01",
      title: "Content & Editorial",
      description:
        "Develop content that simplifies complex technology topics and gives your audience useful reasons to engage.",
      points: [
        "Thought leadership",
        "Editorial content",
        "Whitepapers & eBooks",
        "Technology storytelling",
      ],
    },
    {
      icon: Megaphone,
      number: "02",
      title: "Advertorial & Media",
      description:
        "Build relevant media experiences that put your technology proposition in front of the right audiences.",
      points: [
        "Sponsored content",
        "Media campaigns",
        "Brand awareness",
        "Audience activation",
      ],
    },
    {
      icon: Target,
      number: "03",
      title: "Demand Generation",
      description:
        "Create campaigns designed to generate meaningful engagement and connect brands with relevant decision-makers.",
      points: [
        "Lead generation",
        "Account targeting",
        "Campaign execution",
        "Audience acquisition",
      ],
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Marketing Intelligence",
      description:
        "Use research and campaign insights to understand audiences and make more informed marketing decisions.",
      points: [
        "Audience research",
        "Market intelligence",
        "Campaign insights",
        "Performance reporting",
      ],
    },
    {
      icon: Search,
      number: "05",
      title: "Research & Insights",
      description:
        "Turn technology trends and audience perspectives into useful research-led marketing opportunities.",
      points: [
        "Industry research",
        "Buyer insights",
        "Trend analysis",
        "Research reports",
      ],
    },
  ];

  return (
    <>

      <main>

        {/* HERO */}
        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">

            <SectionLabel>
              What we do
            </SectionLabel>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-8xl"
            >
              Turning technology
              <span className="block text-teal-400">
                into conversations.
              </span>
            </motion.h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              From research and content to media and demand generation, we
              create connected marketing experiences for B2B technology
              brands.
            </p>

          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionHeading
              label="Capabilities"
              title="Everything you need to connect technology with demand."
              description="Choose the capabilities that fit your objectives or bring them together into a connected campaign."
            />

            <div className="mt-16 space-y-5">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal
                    key={service.number}
                    delay={index * 0.06}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="group rounded-3xl border border-slate-200 p-7 transition-shadow hover:shadow-xl hover:shadow-slate-900/5 lg:p-10"
                    >
                      <div className="grid gap-8 lg:grid-cols-[100px_1fr_1fr] lg:items-start">

                        <div className="flex items-center justify-between lg:block">
                          <span className="text-sm font-bold text-slate-300">
                            {service.number}
                          </span>

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white lg:mt-7">
                            <Icon size={21} />
                          </div>
                        </div>

                        <div>
                          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                            {service.title}
                          </h2>

                          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {service.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-center gap-2 text-sm text-slate-600"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                                {point}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:text-white">
                            <ArrowUpRight size={17} />
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SectionHeading
              label="Let's work together"
              title="Have a specific marketing challenge?"
              description="Tell us what you're trying to achieve and we'll explore the right approach together."
              align="center"
            />

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Talk to our team
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

      </main>

    </>
  );
}

export default Services;