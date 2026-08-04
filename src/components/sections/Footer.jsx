import { Mail, ArrowUpRight } from "lucide-react";
import GitHubIcon from "@/components/GitHubIcon";
import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative px-4 md:px-10 pt-16 md:pt-24 pb-10 md:pb-12 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <div className="label-mono">Let's connect</div>
            <h2
              className="mt-4 font-display font-black tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}
            >
              Sunny<span className="text-[#FF5E00]">.</span>
            </h2>
          </div>
          <div className="md:col-span-4 space-y-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group flex items-center justify-between rounded-full border border-white/10 bg-white/[0.02] px-4 sm:px-5 py-3 hover:border-[#FF5E00]/40 transition-colors"
              data-testid="footer-email-link"
            >
              <span className="inline-flex min-w-0 items-center gap-2 text-sm break-all sm:break-normal">
                <Mail className="w-4 h-4 text-[#FF5E00]" /> {PROFILE.email}
              </span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-full border border-white/10 bg-white/[0.02] px-4 sm:px-5 py-3 hover:border-[#FF5E00]/40 transition-colors"
              data-testid="footer-github-link"
            >
              <span className="inline-flex min-w-0 items-center gap-2 text-sm break-all sm:break-normal">
                <GitHubIcon className="w-4 h-4 text-[#FF5E00]" /> GitHub
              </span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div>© 2026 Sunny Sharma — Built with passion for web & security</div>
          <div className="flex items-center gap-4">
            <span>Lonavala · Pune</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}





