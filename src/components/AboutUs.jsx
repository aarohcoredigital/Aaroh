import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
    {
        number: "01",
        title: "Build Technology",
        description: "We engineer scalable digital products from SaaS platforms to custom web systems built for real-world performance.",
    },
    {
        number: "02",
        title: "Train Innovators",
        description: "We bridge the gap between education and industry by mentoring developers with hands-on, production grade experience.",
    },
    {
        number: "03",
        title: "Create Opportunity",
        description: "Through digital transformation, we open doors building ecosystems where ideas evolve into impactful ventures.",
    },
];

const stats = [
    { value: "2026", label: "Founded" },
    { value: "5+", label: "Projects Delivered" },
    { value: "3", label: "Core Verticals" },
    { value: "∞", label: "Ambition" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const AboutUs = () => {
    return (
        <section
            id="about"
            className="relative z-20 bg-black py-32 overflow-hidden border-t border-white/5"
        >
            {/* Subtle ambient glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

                {/* ── Top label ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="w-8 h-px bg-cyan-500" />
                    <span className="text-cyan-400 text-xs font-semibold tracking-[0.35em] uppercase">
                        About AAROH
                    </span>
                </motion.div>

                {/* ── Hero Statement ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight"
                    >
                        Great ideas deserve{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                            great technology.
                        </span>
                    </motion.h2>

                    <div className="flex flex-col gap-6">
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-neutral-400 text-lg leading-relaxed"
                        >
                            AAROH CORE DIGITAL LLP is a technology-first company built on a singular conviction every ambitious vision deserves the infrastructure to become real.
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-neutral-500 text-base leading-relaxed"
                        >
                            We combine product development, technical training, and digital innovation into a unified ecosystem  where learning meets industry and ideas become products.
                        </motion.p>
                    </div>
                </div>

                {/* ── Stats Row ── */}
                <motion.div
                    variants={fadeUp}
                    custom={2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-24"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center py-10 px-6 bg-black hover:bg-white/[0.03] transition-colors duration-300"
                        >
                            <span className="text-4xl font-black text-white tracking-tight mb-2">
                                {stat.value}
                            </span>
                            <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* ── Core Pillars ── */}
                <motion.div
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="text-neutral-600 text-xs font-semibold tracking-[0.35em] uppercase">
                        Our Core Pillars
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            custom={i * 0.5 + 1}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative flex flex-col gap-4 p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/10 transition-all duration-500"
                        >
                            {/* Number accent */}
                            <span className="text-[11px] font-mono text-cyan-500/60 tracking-[0.3em] mb-2">
                                {pillar.number}
                            </span>
                            <h3 className="text-white text-xl font-semibold tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {pillar.description}
                            </p>
                            {/* Hover glow line */}
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* ── Closing Statement ── */}
                <motion.div
                    variants={fadeUp}
                    custom={2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-transparent blur-3xl rounded-full pointer-events-none" />
                    <p className="text-neutral-600 text-sm uppercase tracking-[0.3em] mb-6 font-medium">
                        Our North Star
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl mx-auto">
                        We are not just building software.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-300">
                            We are building the future of digital creators.
                        </span>
                    </h3>
                </motion.div>

            </div>
        </section>
    );
};
