import { motion } from "framer-motion";
import { useState } from "react";
import { SKILL_GROUPS } from "@/lib/data";

export default function Skills() {
  const [active, setActive] = useState(SKILL_GROUPS[0].title);
  const current = SKILL_GROUPS.find((g) => g.title === active);

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-20 md:py-44 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-8 h-px bg-[#FF5E00]" />
          <span className="label-mono">04 · Technical Skills</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.02]"
            >
              The stack behind the work.
            </motion.h2>
            <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-md">
              Tap a category to inspect the toolkit. Modern frontends, secure
              APIs, Linux & offensive security tooling — all in one engineer.
            </p>

            <div className="mt-8 md:mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {SKILL_GROUPS.map((g) => (
                <button
                  key={g.title}
                  data-testid={`skill-tab-${g.title.toLowerCase()}`}
                  onClick={() => setActive(g.title)}
                  className={`shrink-0 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                    active === g.title
                      ? "bg-[#FF5E00] text-black border border-[#FF5E00]"
                      : "bg-white/[0.03] text-zinc-300 border border-white/10 hover:border-white/30"
                  }`}
                >
                  {g.title}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              data-testid="skill-display"
              className="rounded-2xl md:rounded-3xl border border-white/[0.07] bg-[#0a0a0a] p-5 sm:p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="label-mono">Currently viewing</div>
                <div className="font-mono text-xs text-zinc-500">
                  {current.items.length} skills
                </div>
              </div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white">
                {current.title}
              </h3>

              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.items.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.5 }}
                    className="group rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 hover:border-[#FF5E00]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-200">{s}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



