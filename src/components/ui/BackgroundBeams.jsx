import React from "react";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="transparent" />
        <path
          d="M -100 100 Q 500 500 1200 100"
          stroke="url(#beam-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-beam"
        />
        <defs>
          <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};