import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "../components/SectionLabel";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) return;

    /*
      Backend integration will be added later.

      Example:

      await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
    */

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-center sm:px-12 lg:px-20"
        >
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">

            <SectionLabel>
              Stay informed
            </SectionLabel>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get technology insights delivered to your inbox.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Keep up with technology trends, marketing insights and useful
              resources without the noise.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full border border-teal-400/20 bg-teal-400/10 px-5 py-3 text-sm text-teal-300"
                >
                  <CheckCircle size={17} />
                  You're subscribed successfully.
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="Enter your work email"
                    required
                    className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-teal-400"
                  />

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-400"
                  >
                    Subscribe
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="relative mt-5 text-[11px] text-slate-600">
              You can unsubscribe at any time.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Newsletter;