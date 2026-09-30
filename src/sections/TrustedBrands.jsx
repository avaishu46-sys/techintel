
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
  const logos = [
    {
      name: "Microsoft",
      image: microsoftLogo,
    },
    {
      name: "Salesforce",
      image: salesforceLogo,
    },
    {
      name: "Databricks",
      image: databricksLogo,
    },
    {
      name: "Genetec",
      image: genetecLogo,
    },
    {
      name: "Oracle",
      image: oracleLogo,
    },
    {
      name: "Cisco",
      image: ciscoLogo,
    },
    {
      name: "ServiceNow",
      image: servicenowLogo,
    },
    {
      name: "AWS",
      image: awsLogo,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-20 sm:py-24">

      {/* Soft background decoration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto mb-12 max-w-2xl px-6 text-center">

          <div className="flex justify-center">
            <SectionLabel>
              Technology ecosystem
            </SectionLabel>
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Trusted by technology leaders
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Connecting technology brands with the audiences, decision-makers,
            and businesses that matter.
          </p>
        </div>

        {/* =========================
            LOGO MARQUEE
        ========================== */}
        <LogoMarquee logos={logos} />

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <div className="mx-auto mt-12 flex max-w-7xl items-center justify-center gap-3 px-6 text-xs font-medium text-slate-400 lg:px-8">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />

          <span>
            Technology brands • Business audiences • Meaningful connections
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;
