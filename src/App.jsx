import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import ResourceDetails from "./pages/ResourceDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/cookie-policy";
import DoNotShare from "./pages/do-not-share";
import Accessibility from "./pages/accessibility";
import GDPRPolicy from "./pages/GDPR_Policy";
import Unsubscribe from "./pages/unsubscribe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* Resources */}
          <Route path="/resources" element={<Resources />} />
          <Route
            path="/resources/:slug"
            element={<ResourceDetails />}
          />

          {/* Blogs */}
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/blogs/:slug"
            element={<BlogDetails />}
          />

          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route
            path="/case-studies/:slug"
            element={<CaseStudyDetails />}
          />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/do-not-share" element={<DoNotShare />} />
          <Route path="/do-not-sell" element={<DoNotShare />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/gdpr" element={<GDPRPolicy />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;