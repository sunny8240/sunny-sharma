import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        data-testid="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-10">
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-500 ${
              scrolled
                ? "glass px-4 sm:px-5 py-2.5"
                : "px-2 py-2"
            }`}
          >
            <a
              href="#hero"
              data-testid="header-logo"
              className="flex min-w-0 items-center gap-2 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5E00] shadow-[0_0_12px_#FF5E00]" />
              <span className="font-display font-bold text-sm sm:text-base tracking-tight truncate">
                {PROFILE.name}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className="px-3.5 py-1.5 text-[13px] text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                data-testid="header-hire-me"
                className="hidden sm:inline-flex items-center gap-1.5 btn-pill btn-primary text-sm py-2 px-4"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                data-testid="mobile-menu-toggle"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden p-2 rounded-full border border-white/10 hover:bg-white/5"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-3 sm:inset-x-4 top-20 z-40 md:hidden glass rounded-2xl p-4"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-zinc-300 hover:text-white border-b border-white/5 last:border-b-0"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

