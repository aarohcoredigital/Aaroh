import React from "react";

const tech = [
  "React.js", "Next.js", "Flutter", "Node.js", "MongoDB", 
  "PostgreSQL", "AWS", "Docker", "TensorFlow", "Framer Motion"
];

export const InfiniteMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-black py-4">
      <div className="animate-scroll flex whitespace-nowrap">
        {[...tech, ...tech].map((item, i) => (
          <span key={i} className="mx-8 text-4xl font-black uppercase tracking-tighter text-white/10 hover:text-white/40 transition-colors cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};