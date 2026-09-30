
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/tech-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="w-full">

        {/* =========================
            MAIN NAVBAR
        ========================== */}
        <div className="relative border-b border-transparent bg-transparent shadow-none backdrop-blur-none">

          <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:h-[88px] lg:px-12">

            {/* =========================
                LOGO IMAGE
            ========================== */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="group col-start-1 flex shrink-0 items-center"
              aria-label="TechIntel Home"
            >
              <img
                src={logo}
                alt="TechIntel"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-14"
              />
            </Link>

            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <div className="col-start-2 hidden items-center lg:flex">

              <div className="flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/90 p-1.5 shadow-lg shadow-black/20 backdrop-blur-md">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="relative"
                  >
                    {({ isActive }) => (
                      <div
                        className={`relative flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white hover:text-white/80"
                        }`}
                      >

                        {/* Active teal background */}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            transition={{
                              type: "spring",
                              stiffness: 450,
                              damping: 32,
                            }}
                            className="absolute inset-0 rounded-full bg-teal-500 shadow-md shadow-teal-500/20"
                          />
                        )}

                        <span className="relative z-10">
                          {link.name}
                        </span>

                        {/* Active dot */}
                        {isActive && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="relative z-10 ml-2 h-1.5 w-1.5 rounded-full bg-white"
                          />
                        )}
                      </div>
                    )}
                  </NavLink>
                ))}

              </div>
            </div>

            {/* =========================
                RIGHT SIDE
            ========================== */}
            <div className="col-start-3 hidden items-center justify-self-end gap-4 lg:flex">

              {/* Explore indicator */}
              <div className="flex items-center gap-2 text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />

                <span>Explore TechIntel</span>
              </div>

              {/* Divider */}
              <div className="h-7 w-px bg-white/40" />

              {/* Contact CTA */}
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-full bg-slate-950 py-2.5 pl-5 pr-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <span>Contact Us</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

            </div>

            {/* =========================
                MOBILE BUTTON
            ========================== */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="col-start-3 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-slate-200 bg-slate-50 text-slate-800 transition-all duration-300 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-600 lg:hidden"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>

                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}

              </AnimatePresence>
            </button>
          </div>

          {/* =========================
              MOBILE MENU
          ========================== */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="overflow-hidden lg:hidden"
              >
                <div className="border-t border-slate-200 px-4 pb-4 pt-3 sm:px-6">

                  {/* Navigation Links */}
                  <div className="space-y-1">

                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                      >
                        <NavLink
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                        >
                          {({ isActive }) => (
                            <div
                              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all ${
                                isActive
                                  ? "bg-teal-500 text-white shadow-md shadow-teal-500/15"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                              }`}
                            >
                              <span>{link.name}</span>

                              {isActive && (
                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                              )}
                            </div>
                          )}
                        </NavLink>
                      </motion.div>
                    ))}

                  </div>

                  {/* Mobile Explore */}
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-500">
                    <Sparkles
                      size={15}
                      className="text-teal-500"
                    />

                    <span>
                      Explore TechIntel resources & insights
                    </span>
                  </div>

                  {/* Mobile Contact */}
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="group mt-3 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
                  >
                    <span>Let's Talk</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
