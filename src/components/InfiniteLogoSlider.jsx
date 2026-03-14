import React from "react";

const logos = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Flutter", icon: "💙" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐋" },
];

export const InfiniteLogoSlider = () => {
  return (
    <div className="py-10 overflow-hidden bg-black w-full">
      <div className="flex whitespace-nowrap">
        {/* We animate this container using the 'scroll' keyframe in your tailwind config */}
        <div className="flex animate-scroll hover:[animation-play-state:paused] gap-20 items-center">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition duration-300">
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-neutral-500 font-bold text-xl tracking-tighter uppercase">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};