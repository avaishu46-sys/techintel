import { Link } from "react-router-dom";
import { Linkedin, ArrowUp } from "lucide-react";
import logo from "../assets/logos/tech-logo.png";
import isoBadge from "../assets/logos/Untitled-design-11-removebg-preview.png";

const linkClass =
  "block text-[15px] leading-[34px] text-white transition-colors hover:text-white/70";

function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer 
      className="relative overflow-hidden border-t-4 border-teal-200 bg-[#02181d] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#005b6a_0%,#02232a_50%,#011115_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,242,254,0.25)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,229,255,0.2)_0%,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-[1580px] px-5 pt-12 lg:px-5">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div>
            <Link to="/" aria-label="TechIntel home" className="inline-block">
              <img
                src={logo}
                alt="TechIntel"
                className="h-[60px] w-auto object-contain"
              />
            </Link>
            <address className="mt-8 max-w-[340px] space-y-3 text-[15px] not-italic leading-6 text-white">
              <p>Office No. 605, Verdant 84, Koregaon Park, Pune - 411036</p>
              <p>16192 Coastal Hwy, Lewes, Delaware 19958, USA</p>
            </address>
          </div>
          <div>
            <h3 className="mb-5 text-[24px] font-medium">Legal &amp; Privacy</h3>
            <ul>
              <li><Link to="/terms" className={linkClass}>Terms of Use / T&amp;C</Link></li>
              <li><Link to="/privacy" className={linkClass}>Privacy Notice / Policy</Link></li>
              <li><Link to="/cookie-policy" className={linkClass}>Cookie Notice / Cookie Settings</Link></li>
              <li><Link to="/do-not-share" className={linkClass}>Do Not Share or Sell My Personal Information</Link></li>
              <li>
                <a
                  href="https://app.termly.io/dsar/d57b5309-8c31-4c47-9b42-9752e9504c41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Limit Use of Sensitive PI
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-[24px] font-medium">Trust &amp; Compliance</h3>
            <ul>
              <li><Link to="/accessibility" className={linkClass}>Accessibility Statement</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-[24px] font-medium">Support &amp; Contact</h3>
            <ul>
              <li><Link to="/contact" className={linkClass}>Contact / Support</Link></li>
              <li>
                <a
                  href="mailto:contact@techintel.tech"
                  className="block text-[15px] leading-[34px] text-white/80 transition-colors hover:text-white"
                >
                  contact@techintel.tech
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TechIntel on LinkedIn"
                  className="inline-block transition-colors hover:text-white/70"
                >
                  <Linkedin size={28} fill="currentColor" strokeWidth={0} />
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              <IsoBadge />
              <GdprBadge />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-10 max-w-[1580px] px-0">
        <div className="border-t border-white/20" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1580px] flex-col gap-3 px-5 py-6 text-[15px] md:flex-row md:items-center md:justify-between">
        <p>©Copyright {currentYear} | TechIntel | All rights reserved</p>
        <div className="flex items-center gap-4 md:pr-16">
          <Link to="/unsubscribe" className="transition-colors hover:text-white/70">Unsubscribe</Link>
          <span className="text-white/60">|</span>
          <Link to="/gdpr" className="transition-colors hover:text-white/70">GDPR Policy</Link>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition hover:bg-red-600"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
function IsoBadge() {
  return (
    <img src={isoBadge} alt="ISO 9001:2015 certified" className="h-16 w-36 object-contain" /> 
  );
}
function GdprBadge() {
  return null;
}
export default Footer;