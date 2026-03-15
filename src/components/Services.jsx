import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Zap
} from "lucide-react";

export function Services() {
  return (
    <div className="py-24 bg-black relative w-full overflow-hidden smooth-gpu" id="services">
      {/* Background Decorative Element: Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.05] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
              Core <br /> <span className="text-neutral-500">Architecture</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-xs text-sm leading-relaxed border-l border-white/20 pl-4">
            We build digital ecosystems using the most advanced development frameworks and AI-driven automation.
          </p>
        </div>

        <BentoGrid className="md:auto-rows-[25rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

// --- NEW COMPONENT: Animated Code Block ---
const TechStackVisual = () => (
  <div className="relative w-full h-full bg-[#050505] rounded-xl border border-white/10 p-4 font-mono text-[11px] overflow-hidden group/visual">
    <div className="flex gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-red-500/50" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
      <div className="w-2 h-2 rounded-full bg-green-500/50" />
    </div>
    <div className="space-y-1 text-neutral-400">
      <p className="text-blue-400">const ecosystem = {"{"}</p>
      <p className="pl-4">frontend: <span className="text-emerald-400">"React.js"</span>,</p>
      <p className="pl-4">backend: <span className="text-emerald-400">"Node.js"</span>,</p>
      <p className="pl-4">database: <span className="text-emerald-400">"MongoDB"</span>,</p>
      <p className="text-blue-400">{"};"}</p>
    </div>
    {/* Floating Orb */}
    <motion.div
      animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500/20 blur-2xl rounded-full"
    />
  </div>
);

// --- NEW COMPONENT: Pulse AI Visual ---
const AIVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative">
    <div className="absolute inset-0 bg-grid-small-white/[0.05]" />
    <div className="relative">
      <div className="w-16 h-16 rounded-full border border-emerald-500/30 animate-ping absolute inset-0" />
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center">
        <Cpu className="text-emerald-400 w-8 h-8" />
      </div>
    </div>
  </div>
);

// --- NEW COMPONENT: Data Flow Visual ---
const DataFlowVisual = () => (
  <div className="w-full h-full bg-black rounded-xl border border-white/5 flex flex-col p-6 gap-4 overflow-hidden">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        initial={{ width: "30%" }}
        animate={{ width: ["30%", "100%", "30%"] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        className="h-2 bg-neutral-800 rounded-full overflow-hidden"
      >
        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-full" />
      </motion.div>
    ))}
  </div>
);

const items = [
  {
    title: "MERN Engineering",
    description: "High-performance full-stack applications with real-time capabilities.",
    header: <TechStackVisual />,
    icon: <Code2 className="h-5 w-5 text-blue-400" />,
    className: "md:col-span-2",
  },
  {
    title: "AI Integration",
    description: "Machine learning models and autonomous agents for business.",
    header: <AIVisual />,
    icon: <Cpu className="h-5 w-5 text-emerald-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Global Scalability",
    description: "Cloud-native solutions designed for millions of concurrent users.",
    header: <DataFlowVisual />,
    icon: <Globe className="h-5 w-5 text-cyan-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Mobile Architecture",
    description: "Next-gen cross-platform apps built with Flutter for seamless performance.",
    header: (
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl flex items-center justify-center relative">
        <div className="w-24 h-40 border border-white/10 rounded-2xl bg-black flex flex-col p-2">
          <div className="w-full h-2 bg-neutral-900 rounded-full mb-2" />
          <div className="flex-1 w-full bg-blue-500/5 rounded-lg border border-blue-500/10" />
        </div>
        <Zap className="absolute text-yellow-500/50 w-6 h-6 animate-pulse" />
      </div>
    ),
    icon: <Layers className="h-5 w-5 text-yellow-400" />,
    className: "md:col-span-2",
  },
];