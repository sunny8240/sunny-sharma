import { motion } from "framer-motion";
import { Check, ArrowUpRight, Download } from "lucide-react";
import { PRICING, ADDONS, SERVICES_PREVIEW, PROFILE } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-20 md:py-44 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Marquee */}
        <div className="overflow-hidden mb-12 md:mb-20 border-y border-white/[0.07] py-4 md:py-6">
          <div className="marquee-track flex whitespace-nowrap gap-8 md:gap-12">
            {Array(2)
              .fill(0)
              .map((_, k) => (
                <div key={k} className="flex items-center gap-8 md:gap-12">
                  {[
                    "Open to Roles",
                    "Freelance",
                    "Internships",
                    "Full-time",
                    "Pen-Testing",
                    "Frontend",
                    "Full-Stack MERN",
                  ].map((w) => (
                    <span
                      key={w + k}
                      className="font-display text-3xl md:text-6xl font-black tracking-tight text-white/90 flex items-center gap-8 md:gap-12"
                    >
                      {w}
                      <span className="w-3 h-3 rounded-full bg-[#FF5E00]" />
                    </span>
                  ))}
                </div>
              ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-8 h-px bg-[#FF5E00]" />
          <span className="label-mono">05 · Services & Hire Me</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-12 items-end mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 font-display text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.02]"
          >
            Available for work. Let's build something.
          </motion.h2>
          <div className="lg:col-span-5 text-zinc-400">
            <p className="text-lg">
              Currently open for freelance work, internships and entry-level
              developer roles. Focused on secure and scalable solutions.
            </p>
            <p className="mt-3 text-sm font-mono text-zinc-500">
              Response time · within 24h
            </p>
          </div>
        </div>

        {/* Service tiles */}
        <div className="grid md:grid-cols-3 gap-4 mb-14 md:mb-24">
          {SERVICES_PREVIEW.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="rounded-2xl p-5 sm:p-7 bg-[#0a0a0a] border border-white/[0.07] hover:border-[#FF5E00]/40 transition-colors"
              data-testid={`service-tile-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="label-mono">0{i + 1}</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#FF5E00] hover:text-white transition-colors"
              >
                Contact <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="label-mono mb-3">Pricing · Web Development</div>
              <h3 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter">
                Pick a package.
              </h3>
            </div>
            <div className="text-sm text-zinc-500 font-mono max-w-sm">
              Note: Delivery time may vary based on project complexity. WhatsApp &
              email communication. No delays.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {PRICING.map((p, i) => (
              <motion.div
                key={p.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`pricing-card-${p.tier.toLowerCase()}`}
                className={`relative rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col ${
                  p.highlighted
                    ? "bg-gradient-to-b from-[#FF5E00]/15 to-[#0a0a0a] border border-[#FF5E00]/40"
                    : "bg-[#0a0a0a] border border-white/[0.07]"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[#FF5E00] text-black text-[11px] font-mono uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="label-mono">{p.tier} · {p.delivery}</div>
                <div className="mt-3 font-display text-4xl sm:text-5xl font-black text-white tracking-tighter">
                  {p.price}
                </div>
                <div className="mt-2 text-sm text-zinc-400">{p.blurb}</div>

                <ul className="mt-7 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-[#FF5E00] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  data-testid={`pricing-cta-${p.tier.toLowerCase()}`}
                  className={`mt-7 btn-pill ${
                    p.highlighted ? "btn-primary" : "btn-ghost"
                  } justify-center`}
                >
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Addons */}
        <div className="mt-10 md:mt-16 rounded-2xl md:rounded-3xl border border-white/[0.07] bg-[#0a0a0a] p-5 sm:p-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="label-mono">Additional Services</div>
              <h3 className="mt-2 font-display text-3xl font-bold text-white tracking-tight">
                À la carte.
              </h3>
            </div>
            <a href="#contact" className="text-sm text-[#FF5E00] hover:text-white inline-flex items-center gap-1.5">
              Contact directly <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {ADDONS.map((a) => (
              <div key={a.name} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3">
                <span className="text-sm text-zinc-200">{a.name}</span>
                <span className="font-mono text-sm text-[#FF5E00]">{a.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <div className="mt-10 md:mt-16 rounded-2xl md:rounded-3xl border border-white/[0.07] bg-[#0a0a0a] p-5 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="label-mono">Need a deeper look?</div>
            <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Download my resume.
            </h3>
            <p className="mt-2 text-zinc-400 text-sm">PDF · updated April 2025 · CGPA 9.03/10 · 200+ TryHackMe rooms.</p>
          </div>
          <a
            href={PROFILE.resumeUrl}
            download
            data-testid="services-resume-download"
            className="btn-pill btn-primary justify-center sm:justify-start"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}



