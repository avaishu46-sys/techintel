import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Users,
  Lightbulb,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";

function About() {
  const values = [
    {
      icon: Target,
      title: "Audience First",
      description:
        "We start with the people you're trying to reach and build marketing experiences around their needs.",
    },
    {
      icon: Lightbulb,
      title: "Useful Ideas",
      description:
        "We believe technology marketing should educate, inform and create genuine value for audiences.",
    },
    {
      icon: Users,
      title: "Connected Thinking",
      description:
        "Research, content, media and demand generation work better when they're connected.",
    },
    {
      icon: Globe2,
      title: "Technology Focus",
      description:
        "We understand the complexity of B2B technology categories and the audiences within them.",
    },
  ];

  return (
    <>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 pt-40 text-white">
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[140px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
            <SectionLabel>
              About TechIntel
            </SectionLabel>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
            >
              Making technology
              <span className="block text-teal-400">
                easier to discover.
              </span>
            </motion.h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              TechIntel brings together technology research, content,
              audience intelligence and marketing execution to help B2B
              technology brands connect with the right people.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

            <Reveal>
              <div>
                <SectionLabel>
                  What we believe
                </SectionLabel>

                <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  Technology marketing works better when it starts with
                  understanding.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-6 text-base leading-8 text-slate-500">
                <p>
                  Technology buyers have more information available to them
                  than ever before. The challenge isn't simply getting noticed.
                  It's becoming useful and relevant when a buyer is researching
                  a problem or evaluating a solution.
                </p>

                <p>
                  That's the space TechIntel operates in. We help technology
                  companies communicate their value through research,
                  editorial, media and demand-generation experiences.
                </p>

                <p>
                  Our approach combines audience understanding with practical
                  marketing execution, helping brands move from awareness to
                  meaningful engagement.
                </p>
              </div>
            </Reveal>

          </div>
        </section>

        {/* VALUES */}
        <section className="bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionHeading
              label="Our approach"
              title="Four principles behind our work."
              description="The way we think about technology marketing influences everything from research to campaign execution."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <Reveal
                    key={value.title}
                    delay={index * 0.08}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="rounded-3xl border border-slate-200 bg-white p-8"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50">
                        <Icon
                          size={21}
                          className="text-teal-600"
                        />
                      </div>

                      <h3 className="mt-7 text-xl font-bold text-slate-950">
                        {value.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {value.description}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* STATS */}
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-10 md:grid-cols-3">

              <div>
                <div className="text-5xl font-bold">
                  <CountUp end={1000000} suffix="+" />
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Technology professionals reached
                </p>
              </div>

              <div>
                <div className="text-5xl font-bold">
                  <CountUp end={500} suffix="+" />
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Brands and campaigns supported
                </p>
              </div>

              <div>
                <div className="text-5xl font-bold">
                  <CountUp end={20} suffix="+" />
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Technology categories
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-500">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Let's create something meaningful.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
                  Tell us about your technology marketing challenge.
                </p>
              </div>

              <Link
                to="/contact"
                className="group flex w-fit items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Start a conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>
          </div>
        </section>

      </main>

    </>
  );
}

export default About;