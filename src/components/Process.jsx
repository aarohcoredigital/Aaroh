import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { 
    id: "01", 
    title: "Discovery", 
    desc: "Analyzing logic & workflow",
    icon: <Search className="w-5 h-5" />,
    color: "from-blue-500/20 to-blue-500/0"
  },
  { 
    id: "02", 
    title: "Prototype", 
    desc: "High-fidelity wireframing",
    icon: <PenTool className="w-5 h-5" />,
    color: "from-purple-500/20 to-purple-500/0"
  },
  { 
    id: "03", 
    title: "Development", 
    desc: "Sprints & Agile execution",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-cyan-500/20 to-cyan-500/0"
  },
  { 
    id: "04", 
    title: "Deployment", 
    desc: "Scalable cloud release",
    icon: <Rocket className="w-5 h-5" />,
    color: "from-emerald-500/20 to-emerald-500/0"
  },
];

export function Process() {
  return (
    <div className="py-32 bg-black relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">
            Operational Protocol
          </h3>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter">
            Our <span className="font-serif italic text-neutral-500">Pipeline</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
          {/* The Connection Beam (Desktop Only) */}
          <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
             <motion.div 
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
             />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center group px-4"
            >
              {/* Node Circle */}
              <div className="relative z-20 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 group-hover:border-white/30 transition-colors duration-500 shadow-2xl">
                <div className="text-white group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                </div>
                {/* ID Badge */}
                <span className="absolute -top-2 -right-2 bg-blue-600 text-[8px] font-bold px-1.5 py-0.5 rounded-md text-white">
                    {step.id}
                </span>
              </div>

              {/* Glass Content Card */}
              <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed max-w-[150px] mx-auto">
                    {step.desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b ${step.color} rounded-full blur-3xl -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}