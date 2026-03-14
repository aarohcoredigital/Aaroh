import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [errorDetail, setErrorDetail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus("sending");
    setErrorDetail("");
    try {
      // sendForm reads variables directly from the form's `name` attributes
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      const detail = err?.text || err?.message || String(err);
      setErrorDetail(detail);
      setStatus("error");
    }
  };

  const isIdle = status === "idle" || status === "error";

  return (
    <div className="py-32 bg-black relative overflow-hidden" id="contact">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-start">

          {/* Left Side: Editorial Typography */}
          <div className="flex-1">
            <h3 className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-6">
              Contact
            </h3>
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-none mb-8">
              Let's build the <br />
              <span className="font-serif italic text-neutral-500">impossible.</span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-sm">
              Inquire about a project or just say hi. Our system is always listening.
            </p>
          </div>

          {/* Right Side: Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 w-full space-y-10"
          >
            {/* Name */}
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 group-focus-within:text-blue-500 transition-colors">
                Identify Yourself
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Name / Company"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-blue-500 transition-colors font-light text-xl placeholder:text-neutral-800"
              />
            </div>

            {/* Email */}
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 group-focus-within:text-blue-500 transition-colors">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-blue-500 transition-colors font-light text-xl placeholder:text-neutral-800"
              />
            </div>

            {/* Message */}
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 group-focus-within:text-blue-500 transition-colors">
                Transmission Details
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                rows={3}
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-blue-500 transition-colors font-light text-xl placeholder:text-neutral-800 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={isIdle ? { x: 10 } : {}}
              className="flex items-center gap-4 text-white uppercase tracking-[0.3em] text-xs font-bold group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Transmitting..." : status === "sent" ? "Sent!" : "Execute Send"}
              <div
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all
                  ${status === "sent"
                    ? "border-green-500 bg-green-500/10"
                    : status === "error"
                    ? "border-red-500 bg-red-500/10"
                    : "border-white/10 group-hover:bg-white group-hover:text-black"
                  }`}
              >
                {status === "sending" && (
                  <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                )}
                {status === "sent" && (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                )}
                {status === "error" && (
                  <AlertCircle className="w-4 h-4 text-red-400" />
                )}
                {isIdle && <Send className="w-4 h-4" />}
              </div>
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-sm font-medium"
                >
                  ✓ Message received. We'll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm font-medium flex flex-col gap-1"
                >
                  <span>✕ Something went wrong. Please try again.</span>
                  {errorDetail && (
                    <span className="text-red-500/70 text-xs font-mono break-all">{errorDetail}</span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </form>

        </div>
      </div>
    </div>
  );
}