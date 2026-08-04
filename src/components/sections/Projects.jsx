import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import GitHubIcon from "@/components/GitHubIcon";

function ProjectCard({ p, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`project-card-${p.id}`}
      className="group relative grid md:grid-cols-12 gap-6 md:gap-12 items-center"
    >
      <div
        className={`md:col-span-7 ${reversed ? "md:order-2" : ""} relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.07] bg-[#0a0a0a]`}
      >
        <motion.div style={{ y }} className="relative">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-[220px] sm:h-[300px] md:h-[500px] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center gap-2">
          {p.featured && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF5E00] text-black text-[11px] font-mono uppercase tracking-wider">
              <Star className="w-3 h-3 fill-current" /> Featured
            </span>
          )}
          <span className="px-2.5 py-1 rounded-full glass text-[11px] font-mono uppercase tracking-wider text-zinc-300">
            {p.year}
          </span>
        </div>
      </div>

      <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
        <div className="label-mono">
          Project {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
        </div>
        <h3 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
          {p.title}
        </h3>
        <p className="mt-1 text-[#FF5E00] font-display text-lg">{p.subtitle}</p>
        <p className="mt-5 text-zinc-400 leading-relaxed">{p.description}</p>

        <ul className="mt-5 space-y-1.5">
          {p.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-zinc-300">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#FF5E00] flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 text-zinc-300 bg-black/30"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:items-center">
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            className="btn-pill btn-ghost justify-center sm:justify-start"
            data-testid={`project-code-${p.id}`}
          >
            <GitHubIcon className="w-4 h-4" /> View Code
          </a>
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-pill btn-primary justify-center sm:justify-start"
            data-testid={`project-demo-${p.id}`}
          >
            Live Demo <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-20 md:py-44 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-16 flex-wrap">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#FF5E00]" />
              <span className="label-mono">02 · Selected Work</span>
            </div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.02]">
              Featured Projects.
            </h2>
          </div>
          <a
            href="https://github.com/sunny8240"
            target="_blank"
            rel="noreferrer"
            data-testid="projects-github-link"
            className="btn-pill btn-ghost justify-center sm:justify-start"
          >
            <GitHubIcon className="w-4 h-4" /> Visit GitHub
          </a>
        </div>

        <div className="space-y-20 md:space-y-40">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}






