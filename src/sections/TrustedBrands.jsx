import SectionLabel from "../components/SectionLabel";
import LogoMarquee from "../components/LogoMarquee";
import microsoftLogo from "../assets/icons/28419-1-microsoft-logo-picture.png";
import salesforceLogo from "../assets/icons/Salesforce.com_logo.svg.webp";
import databricksLogo from "../assets/icons/logos-card-databricks.png";
import genetecLogo from "../assets/icons/Geneteclogo.png";
import oracleLogo from "../assets/icons/Oracle-Logo-1.png";
import ciscoLogo from "../assets/icons/Cisco-logo.png";
import servicenowLogo from "../assets/icons/servicenow-logo_brandlogos.net_aazvs.png";
import awsLogo from "../assets/icons/Amazon_Web_Services_Logo.svg.webp";

function TrustedBrands() {
  const row1Logos = [
    { name: "Microsoft", image: microsoftLogo },
    { name: "Salesforce", image: salesforceLogo },
    { name: "Databricks", image: databricksLogo },
    { name: "Genetec", image: genetecLogo },
  ];

  const row2Logos = [
    { name: "Oracle", image: oracleLogo },
    { name: "Cisco", image: ciscoLogo },
    { name: "ServiceNow", image: servicenowLogo },
    { name: "AWS", image: awsLogo },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/50 py-20 sm:py-24">
      {/* Soft Light Background Glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-800 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Technology Ecosystem
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by enterprise technology leaders
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed">
            Connecting high-growth B2B technology brands with verified decision-makers and enterprise buyers.
          </p>
        </div>

        {/* =========================
            DUAL-ROW LOGO MARQUEE
        ========================== */}
        <div className="space-y-5">
          <LogoMarquee logos={row1Logos} direction="left" speed={30} />
          <LogoMarquee logos={row2Logos} direction="right" speed={35} />
        </div>

        {/* =========================
            BOTTOM TRUST BADGE
        ========================== */}
        <div className="mx-auto mt-12 flex max-w-fit items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-medium text-slate-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-teal-500" />
          <span>Validated decision-makers across global tech stacks</span>
          <span className="h-2 w-2 rounded-full bg-teal-500" />
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;