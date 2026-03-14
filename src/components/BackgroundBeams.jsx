import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M -20 100 Q 400 300 1200 -100" // A custom curved path
          stroke="rgba(120, 119, 198, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ 
            pathLength: [0, 0.2, 0], 
            pathOffset: [0, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </svg>
    </div>
  );
};