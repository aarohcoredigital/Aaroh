import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projectData = [
  {
    title: "Warehouse Intel",
    category: "System Engineering",
    tag: "v2.4",
    description: "Automated inventory logic with real-time tracking.",
    color: "#06b6d4",
    imageText: "WMS"
  },
  {
    title: "Dhwani Media",
    category: "Content Architecture",
    tag: "Live",
    description: "High-retention video pipeline & analytics.",
    color: "#8b5cf6",
    imageText: "MEDIA"
  },
  {
    title: "Cloud Nexus",
    category: "DevOps",
    tag: "Active",
    description: "Zero-latency deployment infrastructure.",
    color: "#10b981",
    imageText: "NEXUS"
  }
];

export function Projects() {
  return (
    <div className="py-32 bg-black w-full" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Minimalist & Elegant */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter">
              Featured <span className="font-serif italic text-neutral-500">Deployments</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-[280px] text-sm leading-relaxed">
            A curated selection of industrial-grade solutions engineered for performance.
          </p>
        </div>

        {/* Project Grid - The Masterpiece Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-[450px] w-full bg-[#0a0a0a] rounded-[2rem] border border-white/[0.05] overflow-hidden flex flex-col p-8 transition-all duration-500 hover:border-white/20"
    >
      {/* 1. The Floating Glass Pane (Mockup) */}
      <div className="relative flex-1 w-full bg-neutral-900/50 rounded-2xl border border-white/[0.03] overflow-hidden group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] transition-all">
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${project.color}, transparent)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/10 font-black text-4xl tracking-tighter italic">
            {project.imageText}
          </span>
        </div>

        {/* Futuristic Floating Tag */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] text-white/50 font-mono">
          {project.tag}
        </div>
      </div>

      {/* 2. Project Info */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold">
            {project.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* 3. Hover Background Glow */}
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700" />
    </motion.div>
  );
};