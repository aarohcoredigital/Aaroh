import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    Film,
    TrendingUp,
    Megaphone,
    Send,
    Loader2,
    CheckCircle,
    AlertCircle,
    Check,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { HeroBeam } from "../components/ui/HeroBeam";
import { Footer } from "../components/Footer";
import { IdleRobot } from "../components/ui/IdleRobot";
import emailjs from "@emailjs/browser";

/* ─── EmailJS env ─── */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* ─── Animation preset ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

/* ─── Service data ─── */
const services = [
    {
        id: "01", icon: Film, label: "Video Production",
        color: "from-cyan-500/10 to-cyan-500/0", border: "border-cyan-500/20",
        accent: "text-cyan-400", glow: "rgba(6,182,212,0.15)",
        tagline: "Cinematic storytelling for brands that dare to stand out.",
        description: "From concept to final cut, we produce high-quality video content that captures attention and drives results. Whether it's brand films, product showcases, event coverage, or social reels — we bring your vision to life with professional-grade production.",
        offerings: ["Brand & Corporate Films", "Product Launch Videos", "Event Coverage & Recaps", "Social Media Reels & Shorts", "Motion Graphics & Intros", "Post-Production & Editing"],
    },
    {
        id: "02", icon: TrendingUp, label: "Digital Marketing",
        color: "from-indigo-500/10 to-indigo-500/0", border: "border-indigo-500/20",
        accent: "text-indigo-400", glow: "rgba(99,102,241,0.15)",
        tagline: "Data-driven strategies that convert audiences into customers.",
        description: "We craft and execute end-to-end digital marketing strategies that grow your brand presence and generate measurable ROI. From SEO to paid performance campaigns, we cover every channel your audience lives on.",
        offerings: ["Search Engine Optimisation (SEO)", "Google & Meta Paid Ads", "Social Media Strategy & Management", "Email Marketing Campaigns", "Analytics & Performance Reporting", "Conversion Rate Optimisation"],
    },
    {
        id: "03", icon: Megaphone, label: "Promotions",
        color: "from-emerald-500/10 to-emerald-500/0", border: "border-emerald-500/20",
        accent: "text-emerald-400", glow: "rgba(16,185,129,0.15)",
        tagline: "Strategic amplification that puts your brand where it belongs.",
        description: "We design and execute promotion campaigns that build buzz, boost visibility, and drive action. From influencer partnerships to platform-specific launches, we make sure the right people discover your brand at the right moment.",
        offerings: ["Influencer Marketing & Outreach", "Launch Campaigns & Drops", "Community Building & Engagement", "Sponsored Content Strategy", "Brand Awareness Campaigns", "Cross-Platform Promotion"],
    },
];

/* ─── Hero word animation ─── */
const WORDS = ["MEDIA", "STUDIO"];

/* ─── Contact form ─── */
function MediaContact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");
    const [errorDetail, setErrorDetail] = useState("");

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
        setStatus("sending"); setErrorDetail("");
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setErrorDetail(err?.text || err?.message || String(err));
            setStatus("error");
        }
    };

    const isIdle = status === "idle" || status === "error";

    return (
        <div id="media-contact" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04),transparent_70%)] pointer-events-none" />
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-20 items-start">
                    {/* Left */}
                    <div className="flex-1">
                        <h3 className="text-indigo-400 font-mono text-xs tracking-[0.4em] uppercase mb-6">Get in Touch</h3>
                        <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-none mb-8">
                            Let's build the <br />
                            <span className="font-serif italic text-neutral-500">impossible.</span>
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed max-w-sm">
                            Ready to launch something remarkable? Tell us about your project.
                        </p>
                    </div>

                    {/* Right — Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="flex-1 w-full space-y-10">
                        <div className="group relative">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 group-focus-within:text-indigo-400 transition-colors">Identify Yourself</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Name / Company"
                                className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-indigo-400 transition-colors font-light text-xl placeholder:text-neutral-800" />
                        </div>
                        <div className="group relative">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 group-focus-within:text-indigo-400 transition-colors">Your Email</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                                className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-indigo-400 transition-colors font-light text-xl placeholder:text-neutral-800" />
                        </div>
                        <div className="group relative">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 group-focus-within:text-indigo-400 transition-colors">Transmission Details</label>
                            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your project..." rows={3}
                                className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-indigo-400 transition-colors font-light text-xl placeholder:text-neutral-800 resize-none" />
                        </div>

                        <motion.button type="submit" disabled={status === "sending" || status === "sent"}
                            whileHover={isIdle ? { x: 10 } : {}}
                            className="flex items-center gap-4 text-white uppercase tracking-[0.3em] text-xs font-bold group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? "Transmitting..." : status === "sent" ? "Sent!" : "Execute Send"}
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all
                                ${status === "sent" ? "border-green-500 bg-green-500/10" : status === "error" ? "border-red-500 bg-red-500/10" : "border-white/10 group-hover:bg-white group-hover:text-black"}`}>
                                {status === "sending" && <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />}
                                {status === "sent"    && <CheckCircle className="w-4 h-4 text-green-400" />}
                                {status === "error"   && <AlertCircle className="w-4 h-4 text-red-400" />}
                                {isIdle               && <Send className="w-4 h-4" />}
                            </div>
                        </motion.button>

                        <AnimatePresence>
                            {status === "sent" && (
                                <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    className="text-green-400 text-sm font-medium">
                                    ✓ Message received. We'll be in touch soon.
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    className="text-red-400 text-sm font-medium flex flex-col gap-1">
                                    <span>✕ Something went wrong. Please try again.</span>
                                    {errorDetail && <span className="text-red-500/70 text-xs font-mono break-all">{errorDetail}</span>}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Page ─── */
export function MediaPage() {
    return (
        <div className="bg-black min-h-screen w-full antialiased overflow-x-hidden selection:bg-cyan-500/20 relative">
            <Helmet>
                <title>Aaroh Studios | Video Production & Digital Marketing</title>
                <meta name="description" content="Aaroh Studios - Cinematic video production, strategic digital marketing, and high-impact promotions." />
                <link rel="canonical" href="https://www.aarohcoredigital.com/media" />
            </Helmet>
            <div className="noise-overlay" />
            <Navbar />

            {/* ══════════════════════════════
                HERO — Full viewport, cinematic
            ══════════════════════════════ */}
            <section className="h-screen w-full flex items-center justify-center bg-black/[0.96] relative overflow-hidden">


                {/* Ambient colored glows */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/8 blur-[180px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/8 blur-[160px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

                {/* Hero Top Light Effect */}
                <HeroBeam />

                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">


                    {/* Main title — big animated letters like AAROH */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center gap-2 mb-6"
                    >
                        <span className="text-xl md:text-2xl font-light tracking-[0.6em] uppercase text-neutral-500 mb-0">
                            aaroh
                        </span>
                        {/* Animated STUDIOS Letters Container */}
            <h1 className="flex gap-2 md:gap-8 text-5xl sm:text-7xl md:text-[10rem] font-black uppercase leading-[0.8] mb-4" style={{ perspective: "1000px" }}>
                            {["S","T","U","D","I","O","S"].map((letter, idx) => (
                                <motion.span 
                                    key={idx}
                                    className="relative inline-block group cursor-default drop-shadow-[0_10px_20px_rgba(0,0,0,1)]"
                                    style={{ transformStyle: "preserve-3d" }}
                                    whileHover={{ rotateY: 180 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 15,
                                        mass: 1
                                    }}
                                >
                                    <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400 group-hover:opacity-0 transition-opacity duration-300">
                                        {letter}
                                    </span>
                                    <span 
                                        className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 via-indigo-300 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                                    >
                                        {letter}
                                    </span>
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
                    >
                        Producing content, crafting campaigns, and{" "}
                        <span className="font-serif italic text-white/80 px-1">amplifying voices</span>{" "}
                        — where creativity meets digital precision.
                    </motion.p>

                    {/* Service pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {[
                            { label: "Video Production", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" },
                            { label: "Digital Marketing", color: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
                            { label: "Promotions", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
                        ].map((pill) => (
                            <span key={pill.label}
                                className={`px-5 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase ${pill.color}`}>
                                {pill.label}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neutral-500 to-transparent animate-bounce" />
                    <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em]">Explore</span>
                </div>
            </section>

            {/* ══════════════════════════════
                SERVICES GRID
            ══════════════════════════════ */}
            <section id="services" className="pt-20 pb-40 px-6 md:px-12 max-w-6xl mx-auto">
                {services.map((service, i) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.id}
                            variants={fadeUp}
                            custom={i * 0.3}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-80px" }}
                            className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 border-b border-white/5"
                        >
                            {/* Left */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <span className={`text-[11px] font-mono tracking-[0.3em] ${service.accent}`}>{service.id}</span>
                                    <div className={`w-8 h-px opacity-30 bg-current ${service.accent}`} />
                                </div>
                                <div className={`inline-flex items-center gap-3 w-fit px-4 py-2 rounded-full border bg-gradient-to-r ${service.color} ${service.border}`}>
                                    <Icon className={`w-4 h-4 ${service.accent}`} />
                                    <span className={`text-xs font-semibold tracking-widest uppercase ${service.accent}`}>{service.label}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">{service.label}</h2>
                                <p className={`text-base font-medium italic ${service.accent} opacity-80`}>"{service.tagline}"</p>
                                <p className="text-neutral-400 text-base leading-relaxed">{service.description}</p>
                            </div>

                            {/* Right — card */}
                            <div className={`relative rounded-3xl border p-8 bg-white/[0.02] ${service.border} flex flex-col gap-5`}
                                style={{ boxShadow: `0 0 60px ${service.glow}` }}>
                                <p className="text-xs font-semibold tracking-[0.3em] text-neutral-500 uppercase mb-2">What's Included</p>
                                <ul className="flex flex-col gap-4">
                                    {service.offerings.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${service.border}`}>
                                                <Check className={`w-3 h-3 ${service.accent}`} />
                                            </div>
                                            <span className="text-neutral-300 text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* ══════════════════════════════
                CONTACT FORM (same as main)
            ══════════════════════════════ */}
            <section id="contact" className="px-6">
                <MediaContact />
            </section>

            {/* ══════════════════════════════
                FOOTER
            ══════════════════════════════ */}
            <Footer />

            <IdleRobot />
        </div>
    );
}
