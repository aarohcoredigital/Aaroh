import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

const useScramble = (text, trigger) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    if (!trigger) {
      setDisplay(text);
      return;
    }
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay((prev) =>
        text.split("").map((letter, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [trigger, text]);

  return display;
};

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn(
      "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6",
      className
    )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const scrambledTitle = useScramble(title, isHovered);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    // Calculate Tilt (Masterpiece 3D effect)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 20;
    const tiltY = (x - centerX) / -20;
    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out, border 0.5s ease"
      }}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-[2rem] group/bento p-1 bg-[#050505] border border-white/[0.05] hover:border-white/[0.15] justify-between flex flex-col space-y-4 shadow-2xl",
        className
      )}
    >
      {/* Dynamic Flashlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition duration-500 opacity-0 group-hover/bento:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.1), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex-1 w-full rounded-2xl overflow-hidden mb-6 border border-white/[0.03] bg-neutral-900/20 backdrop-blur-3xl">
           {header}
        </div>
        
        <div className="group-hover/bento:translate-x-1 transition duration-500">
          <div className="flex items-center gap-4 mb-3">
             <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/10 text-neutral-500 group-hover/bento:text-blue-500 group-hover/bento:border-blue-500/50 transition-all duration-500">
                {icon}
             </div>
             <div className="font-bold font-sans text-neutral-200 tracking-tight text-xl font-mono">
               {scrambledTitle}
             </div>
          </div>
          <p className="font-sans font-normal text-neutral-500 text-sm leading-relaxed group-hover/bento:text-neutral-300 transition-colors">
            {description}
          </p>
        </div>
      </div>

      {/* Laser Reflection Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/bento:opacity-100 transition-all duration-700" />
    </div>
  );
};