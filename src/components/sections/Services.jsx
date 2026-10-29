import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Download,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { PROFILE, SERVICES_PREVIEW } from "@/lib/data";

const serviceIcons = [Code2, Layers3, Smartphone, Sparkles];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative overflow-hidden py-20 md:py-36 px-4 md:px-10"
    >
      <div className="pointer-events-none absolute -right-36 top-36 h-80 w-80 rounded-full bg-[#FF5E00]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 overflow-hidden border-y border-white/[0.07] py-4 md:mb-20 md:py-6">
          <div className="marquee-track flex w-max whitespace-nowrap gap-6 md:gap-10">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-6 md:gap-10">
                {[
                  "Websites",
                  "Mobile Apps",
                  "MERN",
                  "React Native",
                  "Built around your idea",
                ].map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-6 font-display text-2xl font-bold tracking-tight text-white/90 sm:text-4xl md:gap-10 md:text-6xl"
                  >
                    {item}
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF5E00] md:h-3 md:w-3" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex items-center gap-3 md:mb-12">
          <span className="h-px w-8 bg-[#FF5E00]" />
          <span className="label-mono">05 · What I can build with you</span>
        </div>

        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end md:gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl font-bold leading-[1.03] tracking-tighter text-white sm:text-5xl md:col-span-7 md:text-6xl lg:text-7xl"
          >
            Got an idea?
            <br />
            <span className="text-[#FF5E00]">Let’s make it real.</span>
          </motion.h2>
          <div className="text-zinc-400 md:col-span-5">
            <p className="text-base leading-relaxed sm:text-lg">
              Need a website, a mobile app, or both? Tell me what you have in
              mind. We can shape the right solution together — no preset
              packages, just a conversation about your project.
            </p>
            <p className="mt-3 font-mono text-xs text-zinc-500 sm:text-sm">
              Web · iOS · Android · Full-stack
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {SERVICES_PREVIEW.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                data-testid={`service-tile-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-5 transition-colors duration-300 hover:border-[#FF5E00]/40 sm:p-6"
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#FF5E00]/10 blur-3xl"
                  animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.7, 0.35] }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="label-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-[#FF5E00]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {service.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#FF5E00] transition-colors hover:text-white"
                  >
                    Let’s talk
                    <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 grid gap-5 rounded-2xl border border-[#FF5E00]/25 bg-gradient-to-br from-[#FF5E00]/10 via-[#0a0a0a] to-[#0a0a0a] p-5 sm:p-7 md:mt-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10"
        >
          <div className="min-w-0">
            <span className="label-mono">Have a project in mind?</span>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              Tell me what you need.
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Share your idea, goals, and timeline. I’ll get back to you and we
              can figure out the next step together.
            </p>
          </div>
          <div className="grid shrink-0 gap-3 sm:flex sm:flex-wrap">
            <a
              href="#contact"
              className="btn-pill btn-primary justify-center"
              data-testid="services-project-contact"
            >
              I need a website or app
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              download
              data-testid="services-resume-download"
              className="btn-pill btn-ghost justify-center"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
