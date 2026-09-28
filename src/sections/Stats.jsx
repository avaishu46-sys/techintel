import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";

function Stats() {
  const stats = [
    {
      value: 1000000,
      suffix: "+",
      label: "Technology professionals reached",
    },
    {
      value: 500,
      suffix: "+",
      label: "Brands and campaigns supported",
    },
    {
      value: 20,
      suffix: "+",
      label: "Technology categories covered",
    },
    {
      value: 10,
      suffix: "+",
      label: "Years of industry experience",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
            >
              <div className="border-l border-white/10 pl-6">
                <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <p className="mt-4 max-w-[200px] text-sm leading-6 text-slate-400">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;