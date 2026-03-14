import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ChevronDown } from "lucide-react";

export const IdleRobot = () => {
    const [isIdle, setIsIdle] = useState(false);
    const [isSuperIdle, setIsSuperIdle] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // Fallback coords updated below

    useEffect(() => {
        // Set initial mouse pos to somewhat center-right just in case
        setMousePos({ x: window.innerWidth - 100, y: window.innerHeight - 100 });

        let timeoutId;
        let superTimeoutId;

        const resetTimer = () => {
            setIsIdle(false);
            setIsSuperIdle(false);
            clearTimeout(timeoutId);
            clearTimeout(superTimeoutId);

            // Only show the prompt if they haven't started scrolling down deeply
            if (!hasScrolled) {
                // Set to 5 seconds of inactivity
                timeoutId = setTimeout(() => setIsIdle(true), 5000);

                // Set to 90 seconds (1.5 min) of inactivity
                superTimeoutId = setTimeout(() => {
                    setIsIdle(false);
                    setIsSuperIdle(true);
                }, 90000);
            }
        };

        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            resetTimer();
        };

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHasScrolled(true);
                setIsIdle(false);
                setIsSuperIdle(false);
                clearTimeout(timeoutId);
                clearTimeout(superTimeoutId);
            } else {
                setHasScrolled(false);
                resetTimer();
            }
        };

        // Initialize timer
        resetTimer();

        // Event listeners for user activity
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("keydown", resetTimer);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchstart", resetTimer);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(superTimeoutId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("keydown", resetTimer);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchstart", resetTimer);
        };
    }, [hasScrolled]);

    return (
        <>
            <AnimatePresence>
                {isIdle && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                        style={{
                            top: Math.min(mousePos.y + 20, window.innerHeight - 150),
                            left: Math.min(mousePos.x + 20, window.innerWidth - 250)
                        }}
                        className="fixed z-[100] flex flex-col items-end gap-3 pointer-events-none"
                    >
                        {/* Speech Bubble */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-neutral-900/90 backdrop-blur-md border border-cyan-500/30 text-white text-sm px-5 py-3 rounded-2xl rounded-br-sm shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center gap-2"
                        >
                            <span className="text-neutral-300">Hey there!</span>
                            <span className="font-semibold text-cyan-400">Scroll down</span>
                            <span className="text-neutral-300">to explore</span>
                        </motion.div>

                        {/* Robot Icon Container */}
                        <div className="relative mr-4">
                            {/* Glowing aura */}
                            <div className="absolute inset-0 bg-cyan-500/40 blur-xl rounded-full animate-pulse" />

                            {/* Robot body */}
                            <div className="relative bg-black border border-cyan-500/50 p-3 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                <Bot className="w-7 h-7 text-cyan-400 animate-bounce" />
                            </div>

                            {/* Download/Scroll Arrow */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                                <ChevronDown className="w-5 h-5 text-cyan-400/80 animate-bounce" style={{ animationDelay: '0.2s' }} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSuperIdle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                        className="fixed bottom-6 left-6 z-[100] flex flex-row items-end gap-3 pointer-events-none"
                    >
                        {/* Robot Icon */}
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-cyan-500/40 blur-lg rounded-full animate-pulse" />
                            <div className="relative bg-black border border-cyan-500/50 p-2.5 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                <Bot className="w-5 h-5 text-cyan-400" />
                            </div>
                        </div>

                        {/* Speech Bubble */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="bg-neutral-900/95 backdrop-blur-xl border border-cyan-500/30 text-white text-xs px-4 py-3 rounded-2xl rounded-bl-sm shadow-[0_0_20px_rgba(6,182,212,0.2)] flex flex-col gap-1.5 max-w-[200px]"
                        >
                            <span className="font-bold text-cyan-400 text-sm">Hey hey!</span>
                            <span className="text-neutral-300 leading-snug">
                                Taking a break? Let <span className="text-white font-bold">AAROH</span> reach you.
                            </span>
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
                                (Move mouse to dismiss)
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
