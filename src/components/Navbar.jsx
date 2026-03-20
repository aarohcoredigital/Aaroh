import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: scrolled ? 20 : 0,
        width: scrolled ? "90%" : "100%",
      }}
      className={cn(
        "fixed top-0 inset-x-0 mx-auto z-[5000] px-6 py-2 md:py-3 flex items-center justify-between transition-all duration-500",
        scrolled
          ? "max-w-3xl md:rounded-full border md:border-white/[0.08] bg-black/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:top-5"
          : "max-w-7xl bg-transparent"
      )}
    >
      {/* Brand */}
      <Link to="/" onClick={isHome ? scrollToTop : undefined} className="flex items-center gap-1 cursor-pointer group" aria-label="Aaroh Core Digital Home">
        <div className="h-10 w-10 relative shrink-0 flex items-center justify-center -ml-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-full w-full object-contain scale-[2.2] transition-all duration-500 group-hover:scale-[2.4] drop-shadow-[0_0_15px_rgba(255,100,100,0.3)]"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden h-5 w-5 bg-white rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold text-white tracking-tight text-xl md:text-2xl leading-none">AAROH</span>
          <span className="font-light text-neutral-400 text-[9px] tracking-[0.3em] uppercase mt-0.5 leading-none">CORE DIGITAL</span>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
        {isHome ? (
          <>
            <a href="#about" className="hover:text-white transition-colors">Who We Are</a>
            <a href="#services" className="hover:text-white transition-colors">What We Do</a>
            <a href="#pipeline" className="hover:text-white transition-colors">Pipeline</a>
          </>
        ) : (
          <>
            <Link to="/#about" className="hover:text-white transition-colors">Who We Are</Link>
            <Link to="/#services" className="hover:text-white transition-colors">What We Do</Link>
          </>
        )}
        <Link
          to="/media"
          className={cn(
            "hover:text-white transition-colors",
            location.pathname === "/media" && "text-cyan-400"
          )}
        >
          Studio
        </Link>
        {isHome ? (
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        ) : (
          <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-black/95 z-[5001] flex flex-col p-10 pt-32 gap-8 md:hidden h-screen"
      >
        <div className="flex flex-col gap-6 text-2xl font-bold uppercase tracking-tighter text-white">
          {isHome ? (
            <>
              <a href="#about" onClick={closeMenu} className="hover:text-cyan-400">Who We Are</a>
              <a href="#services" onClick={closeMenu} className="hover:text-cyan-400">What We Do</a>
              <a href="#pipeline" onClick={closeMenu} className="hover:text-cyan-400">Pipeline</a>
            </>
          ) : (
            <>
              <Link to="/#about" onClick={closeMenu} className="hover:text-cyan-400">Who We Are</Link>
              <Link to="/#services" onClick={closeMenu} className="hover:text-cyan-400">What We Do</Link>
            </>
          )}
          <Link
            to="/media"
            onClick={closeMenu}
            className={cn(
              "hover:text-cyan-400",
              location.pathname === "/media" && "text-cyan-400"
            )}
          >
            Studio
          </Link>
          {isHome ? (
            <a href="#contact" onClick={closeMenu} className="hover:text-cyan-400">Contact</a>
          ) : (
            <Link to="/#contact" onClick={closeMenu} className="hover:text-cyan-400">Contact</Link>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};