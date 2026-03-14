import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const HeroBeam = ({ className }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 z-0 overflow-hidden flex items-start justify-center pointer-events-none bg-transparent",
                className
            )}
        >
            {/* The persistent Top Light */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 flex justify-center items-start"
            >
                {/* A soft, wide white light shining down from the top edge */}
                <div className="absolute top-0 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12)_0%,transparent_80%)] blur-[40px]" />
                <div className="absolute top-0 w-[40vw] h-[30vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2)_0%,transparent_70%)] blur-[30px]" />
            </motion.div>
        </div>
    );
};
