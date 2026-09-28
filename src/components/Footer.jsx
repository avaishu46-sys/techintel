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
    <footer className="relative border-t-4 border-teal-500 bg-[#555960] text-white">
      <div className="mx-auto max-w-[1580px] px-5 pt-12 lg:px-5">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + addresses */}
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

          {/* Legal & Privacy */}
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

          {/* Trust & Compliance */}
          <div>
            <h3 className="mb-5 text-[24px] font-medium">Trust &amp; Compliance</h3>
            <ul>
              <li><Link to="/accessibility" className={linkClass}>Accessibility Statement</Link></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="mb-5 text-[24px] font-medium">Support &amp; Contact</h3>
            <ul>
              <li><Link to="/contact" className={linkClass}>Contact / Support</Link></li>
              <li>
                <a
                  href="mailto:contact@techintel.tech"
                  className="block text-[15px] leading-[34px] text-white/60 transition-colors hover:text-white"
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

      {/* Bottom bar */}
      <div className="mx-auto mt-10 max-w-[1580px] px-0">
        <div className="border-t border-white/15" />
      </div>
      <div className="mx-auto flex max-w-[1580px] flex-col gap-3 px-5 py-6 text-[15px] md:flex-row md:items-center md:justify-between">
        <p>©Copyright {currentYear} | TechIntel | All rights reserved</p>
        <div className="flex items-center gap-4 md:pr-16">
          <Link to="/unsubscribe" className="transition-colors hover:text-white/70">Unsubscribe</Link>
          <span className="text-white/60">|</span>
          <Link to="/gdpr" className="transition-colors hover:text-white/70">GDPR Policy</Link>
        </div>
      </div>

      {/* Scroll to top */}
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

/* Stand-in badges. To use your real images instead, import them like the logo:
   import isoBadge from "../assets/iso-9001.png";
   and use <img src={isoBadge} alt="ISO 9001:2015 certified" className="h-16 w-16" /> */
function IsoBadge() {
  return (
   <img src={isoBadge} alt="ISO 9001:2015 certified" className="h-16 w-36" /> 
  );
}

function GdprBadge() {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return { x: 32 + 24 * Math.cos(a), y: 32 + 24 * Math.sin(a) };
  });
  
}

export default Footer;