import { motion } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight, Mail, MapPin } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { PROFILE, STATS } from "@/lib/data";
import { lazy, Suspense } from "react";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const ease = [0.22, 1, 0.36, 1];

const Word = ({ children, delay = 0 }) => (
  <span className="inline-block overflow-hidden align-bottom mr-[0.18em]">
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.05, delay, ease }}
      className="inline-block"
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-32 pb-10 md:pb-12"
    >
      {/* 3D canvas layer for the hero */}
      <div className="absolute inset-0 z-0">
        <div className="hero-scene-mobile absolute right-[-42%] top-[2%] w-[128%] h-[58%] sm:right-[-20%] sm:w-[92%] md:right-[-12%] md:top-[-8%] md:h-[112%] md:w-[68%] lg:right-[-6%] opacity-95">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">
        {/* Top mono label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#FF5E00]" />
          <span className="label-mono">Portfolio · 2026</span>
        </motion.div>

        {/* Headline */}
        <h1
          className="font-display font-black tracking-tighter leading-[0.95] text-white"
          style={{ fontSize: "clamp(3rem, 9.5vw, 9.5rem)" }}
          data-testid="hero-name"
        >
          <div>
            <Word delay={0.7}>Sunny</Word>
          </div>
          <div className="ml-[0.05em]">
            <Word delay={0.85}>Sharma.</Word>
          </div>
        </h1>

        {/* Role + intro */}
        <div className="mt-10 grid md:grid-cols-12 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease }}
            className="md:col-span-7"
          >
            <div className="label-mono mb-3">Currently</div>
            <p className="font-display text-xl md:text-2xl text-white/90 max-w-xl leading-snug">
              Full Stack Developer{" "}
              <span className="text-[#FF5E00]">(MERN)</span> · Penetration
              Tester.
            </p>
            <p className="mt-5 text-zinc-400 max-w-lg text-base md:text-lg leading-relaxed">
              {PROFILE.intro}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center">
              <MagneticButton
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-pill btn-primary justify-center sm:justify-start"
                data-testid="hero-hire-me-btn"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <a
                href={PROFILE.resumeUrl}
                download
                data-testid="hero-resume-btn"
                className="btn-pill btn-ghost justify-center sm:justify-start"
              >
                Resume
                <Download className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                data-testid="hero-view-work-btn"
                className="btn-pill btn-ghost justify-center sm:justify-start"
              >
                View Work
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-5 gap-y-2 text-xs text-zinc-500 font-mono">
              <span className="inline-flex min-w-0 items-center gap-1.5 break-all sm:break-normal">
                <Mail className="w-3.5 h-3.5" />
                {PROFILE.email}
              </span>
              <span className="inline-flex min-w-0 items-center gap-1.5 break-all sm:break-normal">
                <MapPin className="w-3.5 h-3.5" />
                {PROFILE.location}
              </span>
            </div>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease }}
            className="md:col-span-5 md:col-start-8"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6 md:mt-12">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.25 + i * 0.08, ease }}
                  className="glass rounded-2xl p-3 sm:p-4"
                  data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="label-mono">{s.label}</div>
                  <div className="mt-2 font-display text-xl md:text-3xl font-bold text-white">
                    {s.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="label-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}








