import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Check, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { PROFILE, INQUIRY_TYPES } from "@/lib/data";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "");
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry_type: INQUIRY_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const openEmailFallback = () => {
    const subject = encodeURIComponent(`${form.inquiry_type} from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInquiry: ${form.inquiry_type}\n\n${form.message}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    if (!API) {
      openEmailFallback();
      setStatus("success");
      toast.success("Email draft opened. I'll reply as soon as I receive it.");
      setForm({ name: "", email: "", inquiry_type: INQUIRY_TYPES[0], message: "" });
      return;
    }

    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      toast.success("Message delivered. I'll reply within 24h.");
      setForm({ name: "", email: "", inquiry_type: INQUIRY_TYPES[0], message: "" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Couldn't send right now. Try emailing me directly.";
      setError(msg);
      setStatus("error");
      toast.error(msg);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-20 md:py-44 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-8 h-px bg-[#FF5E00]" />
          <span className="label-mono">06 · Get in Touch</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] max-w-4xl"
        >
          Let's work <span className="italic font-medium text-[#FF5E00]">together.</span>
        </motion.h2>

        <div className="mt-10 md:mt-16 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              I'm actively looking for opportunities where I can contribute my
              skills in full-stack development and cybersecurity. Whether it's
              a full-time role, internship, or freelance project — I'd love to
              hear from you.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${PROFILE.email}`}
                data-testid="contact-email-link"
                className="group block rounded-2xl border border-white/[0.07] bg-[#0a0a0a] p-5 hover:border-[#FF5E00]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#FF5E00]" />
                  </div>
                  <div>
                    <div className="label-mono">Email</div>
                    <div className="mt-1 text-white font-display text-base sm:text-lg break-all sm:break-normal group-hover:text-[#FF5E00] transition-colors">
                      {PROFILE.email}
                    </div>
                  </div>
                </div>
              </a>

              <div className="rounded-2xl border border-white/[0.07] bg-[#0a0a0a] p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <div className="label-mono">Location</div>
                    <div className="mt-1 text-white font-display text-base sm:text-lg break-all sm:break-normal">
                      {PROFILE.location}
                    </div>
                    <div className="mt-0.5 text-xs font-mono text-zinc-500">
                      Open to Remote · Available immediately
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="rounded-2xl md:rounded-3xl border border-[#FF5E00]/40 bg-gradient-to-b from-[#FF5E00]/10 to-[#0a0a0a] p-6 sm:p-10 text-center"
                  data-testid="contact-success"
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-[#FF5E00] flex items-center justify-center">
                    <Check className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold text-white tracking-tight">
                    Message ready.
                  </h3>
                  <p className="mt-3 text-zinc-400 max-w-md mx-auto">
                    Thanks for reaching out. I usually reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-7 btn-pill btn-ghost"
                    data-testid="contact-send-another"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-2"
                  data-testid="contact-form"
                >
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label className="label-mono">Name</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={onChange}
                        placeholder="Your name"
                        className="line-input"
                        data-testid="contact-input-name"
                      />
                    </div>
                    <div>
                      <label className="label-mono">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={onChange}
                        placeholder="you@email.com"
                        className="line-input"
                        data-testid="contact-input-email"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <label className="label-mono">Inquiry Type</label>
                    <select
                      name="inquiry_type"
                      value={form.inquiry_type}
                      onChange={onChange}
                      className="line-input bg-transparent cursor-pointer"
                      data-testid="contact-input-inquiry"
                    >
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[#0a0a0a]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-2">
                    <label className="label-mono">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell me about your project, role, or idea..."
                      className="line-input resize-none"
                      data-testid="contact-input-message"
                    />
                  </div>

                  {status === "error" && (
                    <div className="mt-4 flex items-start gap-2 text-sm text-red-400">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="mt-8 grid gap-4 sm:flex sm:items-center sm:justify-between">
                    <p className="text-xs font-mono text-zinc-500">
                      {API ? "Sends straight to my inbox." : "Opens a pre-filled email draft."}
                    </p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      data-testid="contact-submit"
                      className="btn-pill btn-primary justify-center disabled:opacity-60 sm:justify-start"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Sending
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


