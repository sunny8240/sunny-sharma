import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-20 md:py-44 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <span className="w-8 h-px bg-[#FF5E00]" />
          <span className="label-mono">01 · About</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
          {/* Sticky left */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tighter text-white"
            >
              Crafted with{" "}
              <span className="italic font-medium text-[#FF5E00]">
                obsession
              </span>{" "}
              for speed, security & detail.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed max-w-md"
            >
              Full Stack Developer (MERN) with hands-on cybersecurity. I build
              modern, animation-rich web applications, secure REST APIs and
              interactive 3D experiences — fluent across Linux, pen-testing and
              the entire JavaScript stack.
            </motion.p>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((g, i) => (
              <motion.div
                key={g.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fadeUp}
                data-testid={`about-skill-card-${g.title.toLowerCase()}`}
                className="group relative rounded-2xl p-5 sm:p-6 bg-[#0a0a0a] border border-white/[0.07] hover:border-[#FF5E00]/40 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FF5E00]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="label-mono">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {g.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 text-zinc-300 bg-black/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


