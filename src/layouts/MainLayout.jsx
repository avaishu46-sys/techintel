import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PAGE_METADATA = {
  "/": {
    title: "B2B Technology Demand Generation | TechIntel",
    description:
      "TechIntel helps B2B technology brands reach decision-makers through research, content, and demand generation.",
  },
  "/about": {
    title: "About TechIntel | B2B Technology Marketing",
    description:
      "Learn how TechIntel helps technology companies connect with decision-makers through research-led marketing.",
  },
  "/services": {
    title: "B2B Technology Marketing Services | TechIntel",
    description:
      "Explore TechIntel research, content, audience intelligence, and demand-generation services for technology brands.",
  },
  "/resources": {
    title: "Technology Research and Resources | TechIntel",
    description:
      "Browse technology reports, guides, eBooks, and research for technology professionals and business leaders.",
  },
  "/blogs": {
    title: "Technology Marketing Insights | TechIntel",
    description:
      "Read perspectives on technology marketing, demand generation, content, and audience intelligence.",
  },
  "/case-studies": {
    title: "B2B Technology Marketing Case Studies | TechIntel",
    description:
      "See how research-led campaigns help B2B technology brands reach audiences and drive measurable outcomes.",
  },
  "/contact": {
    title: "Contact TechIntel | Talk to Our Team",
    description:
      "Contact TechIntel to discuss research, content, audience intelligence, and demand-generation programs.",
  },
  "/privacy": {
    title: "Privacy Policy | TechIntel",
    description: "Read the TechIntel privacy policy and learn how personal information is handled.",
  },
  "/terms": {
    title: "Terms of Use | TechIntel",
    description: "Review the terms and conditions for using the TechIntel website.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | TechIntel",
    description: "Learn how TechIntel uses cookies and similar technologies on this website.",
  },
  "/do-not-share": {
    title: "Your Privacy Choices | TechIntel",
    description: "Review your choices about the sale or sharing of personal information.",
  },
  "/do-not-sell": {
    title: "Your Privacy Choices | TechIntel",
    description: "Review your choices about the sale or sharing of personal information.",
  },
  "/accessibility": {
    title: "Accessibility Statement | TechIntel",
    description: "Read TechIntel's accessibility statement and ways to contact us about accessibility.",
  },
  "/gdpr": {
    title: "GDPR Privacy Notice | TechIntel",
    description: "Read information about data protection rights under the GDPR.",
  },
  "/unsubscribe": {
    title: "Manage Email Preferences | TechIntel",
    description: "Manage your TechIntel email subscription preferences.",
  },
};

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const page = PAGE_METADATA[pathname];
    const heading = document.querySelector("main h1")?.textContent
      .replace(/\s+/g, " ")
      .trim();
    const description =
      page?.description ||
      document
        .querySelector("main h1")
        ?.parentElement?.querySelector("p")
        ?.textContent.replace(/\s+/g, " ")
        .trim()
        .slice(0, 160) ||
      `Explore ${heading || "TechIntel content"} on TechIntel.`;
    const title = page?.title || `${heading || "Technology Insights"} | TechIntel`;
    const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const canonicalPath = normalizedPath === "/do-not-sell" ? "/do-not-share" : normalizedPath;
    const canonicalUrl = `https://techintel.tech${canonicalPath}`;

    const setMeta = (attribute, name, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", pathname === "/unsubscribe" ? "noindex,follow" : "index,follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "TechIntel");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;