import {
  PenTool,
  Megaphone,
  Target,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

function Services() {
  const services = [
    {
      number: "01",
      icon: PenTool,
      title: "Content & Editorial",
      description:
        "Create technology content that educates audiences, builds authority and supports the buyer journey.",
    },
    {
      number: "02",
      icon: Megaphone,
      title: "Advertorial & Media",
      description:
        "Position your brand through relevant media experiences designed to reach the audiences you want.",
    },
    {
      number: "03",
      icon: Target,
      title: "Demand Generation",
      description:
        "Build campaigns that connect your technology proposition with relevant business decision-makers.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Marketing Intelligence",
      description:
        "Use research, audience insights and campaign data to make smarter marketing decisions.",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="What we do"
            number="02"
            title="From technology story to market impact."
            description="A connected set of capabilities designed to help B2B technology brands communicate, engage and grow."
          />

          <Link
            to="/services"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-950"
          >
            View all services
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.number}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 p-8 lg:p-10"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-500/5 blur-3xl transition duration-500 group-hover:bg-teal-500/10" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon size={23} />
                      </div>

                      <span className="text-sm font-bold text-slate-300">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                      {service.description}
                    </p>

                    <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;