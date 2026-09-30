import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SectionLabel from "../components/SectionLabel";

function Privacy() {
  const termlyRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let timeout;

    const loadTermly = () => {
      if (!termlyRef.current) return;

      setLoading(true);
      setError(false);

      const existingScript = document.getElementById("termly-jssdk");

      if (existingScript) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } else {
        const script = document.createElement("script");

        script.id = "termly-jssdk";
        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;

        script.onload = () => {
          setTimeout(() => {
            setLoading(false);
          }, 500);
        };

        script.onerror = () => {
          setLoading(false);
          setError(true);
        };

        document.body.appendChild(script);
      }

      timeout = setTimeout(() => {
        setLoading(false);

        if (
          termlyRef.current &&
          termlyRef.current.innerHTML.trim() === ""
        ) {
          setError(true);
        }
      }, 10000);
    };

    loadTermly();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            PRIVACY POLICY HEADER
        ====================================================== */}
        <section className="bg-slate-950 pt-40 text-white">
          <div className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">

            <SectionLabel>
              Legal
            </SectionLabel>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-sm text-slate-400">
              Last updated: December 09, 2025
            </p>

          </div>
        </section>


        {/* =====================================================
            TERMLY PRIVACY POLICY
        ====================================================== */}
        <section className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-12">
          <article className="mx-auto max-w-5xl px-6 lg:px-8">

            {/* =================================================
                LOADING STATE
            ================================================== */}
            {loading && (
              <div className="flex min-h-[400px] items-center justify-center">
                <div className="text-center">

                  <div
                    className="
                      mx-auto
                      mb-5
                      h-10
                      w-10
                      animate-spin
                      rounded-full
                      border-4
                      border-slate-200
                      border-t-slate-950
                    "
                  />

                  <p className="text-sm text-slate-500">
                    Loading Privacy Policy...
                  </p>

                </div>
              </div>
            )}


            {/* =================================================
                ERROR STATE
            ================================================== */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">

                <h2 className="text-xl font-bold text-slate-950">
                  Privacy Policy could not be loaded
                </h2>

                <p className="mt-3 text-slate-600">
                  We were unable to load the Privacy Policy at this time.
                  Please refresh the page or try again later.
                </p>

                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="
                    mt-6
                    rounded-full
                    bg-slate-950
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-slate-800
                  "
                >
                  Try Again
                </button>

              </div>
            )}


            {/* =================================================
                EXACT TERMLY POLICY
                Original Termly ID:
                d57b5309-8c31-4c47-9b42-9752e9504c41
            ================================================== */}
            <div
              ref={termlyRef}
              name="termly-embed"
              data-id="d57b5309-8c31-4c47-9b42-9752e9504c41"
              className={`termly-policy ${
                loading || error ? "hidden" : "block"
              }`}
            />

          </article>
        </section>
      </main>


      {/* =====================================================
          TERMLY CUSTOM STYLES
      ====================================================== */}
      <style>{`

        /* ===================================================
           TERMLY CONTENT
        ==================================================== */

        .termly-policy {
          width: 100%;
          color: #475569;
          line-height: 1.8;
          overflow: hidden;
        }

        .termly-policy iframe {
          transform: translateY(-120px);
          margin-bottom: -120px;
        }


        /* ===================================================
           ALL TERMLY LINKS
        ==================================================== */

        .termly-policy a,
        .termly-policy a:link,
        .termly-policy a:visited {

          color: #9DE5DD !important;

          text-decoration: underline !important;

          text-underline-offset: 2px;

          transition:
            color 0.2s ease,
            opacity 0.2s ease;
        }


        /* ===================================================
           LINK HOVER
        ==================================================== */

        .termly-policy a:hover,
        .termly-policy a:focus {

          color: #78D5CC !important;

          text-decoration: underline !important;
        }


        /* ===================================================
           BULLET POINTS
        ==================================================== */

        .termly-policy ul {

          list-style-type: disc !important;
        }


        .termly-policy ul li::marker {

          color: #9DE5DD !important;
        }


        /* ===================================================
           NESTED BULLET POINTS
        ==================================================== */

        .termly-policy ul ul {

          list-style-type: circle !important;
        }


        .termly-policy ul ul li::marker {

          color: #9DE5DD !important;
        }


        /* ===================================================
           NUMBERED LISTS
        ==================================================== */

        .termly-policy ol {

          list-style-type: decimal !important;
        }


        .termly-policy ol li::marker {

          color: #9DE5DD !important;
        }


        /* ===================================================
           TERMly TABLE LINKS
        ==================================================== */

        .termly-policy table a,
        .termly-policy td a,
        .termly-policy th a {

          color: #9DE5DD !important;
        }


        .termly-policy table a:hover,
        .termly-policy td a:hover,
        .termly-policy th a:hover {

          color: #78D5CC !important;
        }


        /* ===================================================
           LINKS INSIDE HEADINGS
        ==================================================== */

        .termly-policy h1 a,
        .termly-policy h2 a,
        .termly-policy h3 a,
        .termly-policy h4 a,
        .termly-policy h5 a,
        .termly-policy h6 a {

          color: #9DE5DD !important;
        }


        /* ===================================================
           EMAIL LINKS
        ==================================================== */

        .termly-policy a[href^="mailto:"] {

          color: #9DE5DD !important;
        }


        /* ===================================================
           ORDERED LIST LINK COLORS
        ==================================================== */

        .termly-policy ol li a {

          color: #9DE5DD !important;
        }


        /* ===================================================
           UNORDERED LIST LINK COLORS
        ==================================================== */

        .termly-policy ul li a {

          color: #9DE5DD !important;
        }


        /* ===================================================
           HIDE ANY FOOTER INJECTED INSIDE TERMLY
        ==================================================== */

        .termly-policy footer,
        .termly-policy .footer {

          display: none !important;
        }


        /* ===================================================
           REMOVE UNNECESSARY BOTTOM SPACE
        ==================================================== */

        .termly-policy:last-child {

          margin-bottom: 0 !important;
        }


        /* ===================================================
           MOBILE
        ==================================================== */

        @media (max-width: 640px) {

          .termly-policy {

            font-size: 14px;

            overflow-wrap: break-word;
          }


          .termly-policy a {

            overflow-wrap: anywhere;
          }


          .termly-policy table {

            display: block;

            width: 100%;

            overflow-x: auto;
          }

        }

      `}</style>
    </>
  );
}

export default Privacy;