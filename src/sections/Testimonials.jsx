import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "TechIntel helped us communicate our technology story to a highly relevant audience and created a campaign experience that felt genuinely useful.",
      name: "Client Partner",
      role: "Technology Marketing",
      company: "B2B Technology Brand",
    },
    {
      quote:
        "The combination of audience understanding, content and campaign execution gave us a much more connected approach to our marketing.",
      name: "Marketing Leader",
      role: "Demand Generation",
      company: "Enterprise Technology",
    },
    {
      quote:
        "The team understood the technology category quickly and helped us turn a complex proposition into a clear campaign.",
      name: "Growth Lead",
      role: "B2B Marketing",
      company: "Technology Company",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          label="Client perspective"
          number="05"
          title="Better marketing starts with understanding."
          description="A few examples of the kind of partnership we aim to create with technology marketing teams."
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.08}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50">
                  <Quote
                    size={19}
                    className="text-teal-600"
                  />
                </div>

                <p className="mt-7 text-base leading-7 text-slate-600">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="text-sm font-bold text-slate-950">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;