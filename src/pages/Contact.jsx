import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";

function Contact() {
  return (
    <>

      <main>

        {/* HERO */}
        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

            <SectionLabel>
              Contact us
            </SectionLabel>

            <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Let's talk about
              <span className="block text-teal-400">
                what's next.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Have a campaign idea, a technology marketing challenge or simply
              want to learn more about TechIntel? We'd love to hear from you.
            </p>

          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8">

            {/* Information */}
            <Reveal>
              <div>
                <SectionHeading
                  label="Start a conversation"
                  title="Tell us what you're working on."
                  description="Share a few details and our team will get back to you."
                />

                <div className="mt-10 space-y-5">

                  <a
                    href="mailto:contact@techintel.tech"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
                      <Mail
                        size={19}
                        className="text-teal-600"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        contact@techintel.tech
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="ml-auto text-slate-400"
                    />
                  </a>

                  <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                      <MapPin
                        size={19}
                        className="text-teal-600"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Locations
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Pune, India
                        <br />
                        Delaware, USA
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>

          </div>
        </section>

      </main>

    </>
  );
}

export default Contact;