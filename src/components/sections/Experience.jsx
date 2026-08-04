import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-20 md:py-44 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-8 h-px bg-[#FF5E00]" />
          <span className="label-mono">03 · Experience & Education</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.02] max-w-3xl"
        >
          A timeline of building & breaking things.
        </motion.h2>

        <div className="mt-12 md:mt-20 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-3 md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-[#FF5E00] via-white/20 to-transparent"
          />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCE.map((e, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`experience-item-${i}`}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    isRight ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`pl-10 md:pl-0 ${isRight ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="label-mono">{e.when}</div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {e.title}
                    </h3>
                    <div className="mt-1 text-[#FF5E00] font-display text-lg">{e.org}</div>
                    <div className="mt-1 text-xs font-mono uppercase tracking-wider text-zinc-500">
                      {e.where}
                    </div>
                  </div>
                  <div className={`pl-10 md:pl-0 mt-4 md:mt-0 ${isRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <ul className="space-y-2.5">
                      {e.points.map((p) => (
                        <li
                          key={p}
                          className={`text-zinc-400 text-sm md:text-base leading-relaxed flex gap-2 ${
                            isRight ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#FF5E00] flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full bg-[#FF5E00] shadow-[0_0_16px_#FF5E00]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


