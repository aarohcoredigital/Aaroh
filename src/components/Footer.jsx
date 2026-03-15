import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative z-20 bg-black pt-40 pb-12 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle Background Watermark */}
        <div className="absolute left-0 right-0 -bottom-20 text-[20vw] font-black text-white/[0.05] select-none tracking-tighter pointer-events-none uppercase text-center">
          AAROH
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32 relative z-10">
          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">Menu</span>
            <div className="flex flex-col gap-3 text-sm text-neutral-500 text-left">
              <a href="/#about" className="hover:text-white transition-colors">Who We Are</a>
              <a href="/#services" className="hover:text-white transition-colors">What We Do</a>
              <a href="/#pipeline" className="hover:text-white transition-colors">Pipeline</a>
              <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Media & Studio */}
          <div className="flex flex-col gap-6">
            <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">Studio</span>
            <div className="flex flex-col gap-3 text-sm text-neutral-500 text-left">
              <Link to="/media" className="hover:text-white transition-colors">Video Production</Link>
              <Link to="/media" className="hover:text-white transition-colors">Digital Marketing</Link>
              <Link to="/media" className="hover:text-white transition-colors">Promotions</Link>
            </div>
          </div>

          {/* Enquiry */}
          <div className="flex flex-col gap-6">
            <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">Enquiry</span>
            <div className="flex flex-col gap-3 text-sm text-neutral-500 text-left">
              <a href="mailto:aarohcoredigitalllp@gmail.com" className="hover:text-white transition-colors break-all leading-relaxed">
                aarohcoredigitalllp@gmail.com
              </a>
            </div>
          </div>

          {/* Origin & System Status */}
          <div className="flex flex-col gap-6 lg:items-end">
            <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">Origin</span>
            <div className="flex flex-col gap-1 lg:items-end text-sm text-neutral-500">
              <span>Aaroh Core Digital (Aaroh) Transforming ambitious visions into digital reality.</span>
              <span>India / IN</span>
              <span className="flex items-center gap-2 mt-4">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] tracking-widest uppercase">System Online</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-[10px] text-neutral-600 uppercase tracking-widest relative z-10">
          <p className="text-center md:text-left">© 2026 Aaroh Core Digital. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition">Terms of Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
