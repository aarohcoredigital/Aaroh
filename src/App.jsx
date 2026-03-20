import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { InfiniteMarquee } from "./components/ui/InfiniteMarquee";
import { MagneticButton } from "./components/ui/MagneticButton";
import { HeroBeam } from "./components/ui/HeroBeam";
import { IdleRobot } from "./components/ui/IdleRobot";
import { Footer } from "./components/Footer";
import { MediaPage } from "./pages/MediaPage";

import ErrorBoundary from "./components/ErrorBoundary";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <div className="bg-black w-full min-h-screen antialiased overflow-x-hidden selection:bg-cyan-500/30 relative">
      <Helmet>
        <title>AAROH CORE DIGITAL | Transforming Visions into Reality</title>
        <meta name="description" content="Aaroh Core Digital - Expert technology solutions, custom ecosystems, and digital engineering to scale your future." />
        <link rel="canonical" href="https://www.aarohcoredigital.com/" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AAROH CORE DIGITAL",
            "alternateName": ["Aaroh", "Aaroh Core"],
            "url": "https://www.aarohcoredigital.com",
            "logo": "https://www.aarohcoredigital.com/logo.png",
            "sameAs": [
              "https://www.instagram.com/aaroh_core_digital",
              "https://www.linkedin.com/company/aarohcoredigital"
            ]
          })}
        </script>
      </Helmet>
      <div className="noise-overlay" />
      <Navbar />

      {/* 3. Hero Section */}
      <section className="h-screen w-full flex items-center justify-center bg-black/[0.96] relative overflow-hidden">
        <HeroBeam />

        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="flex flex-col items-center justify-center">
              {/* Accessibility H1 for Search Engines */}
              <h1 className="sr-only">Aaroh Core Digital</h1>
              
              {/* Animated AAROH Letters Container */}
              <div className="flex gap-2 md:gap-8 text-6xl sm:text-7xl md:text-[10rem] font-black uppercase leading-[0.8] mb-2" style={{ perspective: "1000px" }} aria-hidden="true">
                {['A', 'A', 'R', 'O', 'H'].map((letter, idx) => (
                  <motion.span 
                    key={idx} 
                    className="relative inline-block group cursor-default drop-shadow-[0_10px_20px_rgba(0,0,0,1)]"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ rotateY: 180 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                        mass: 1
                    }}
                  >
                    <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-100 to-neutral-400 transition-opacity duration-300 group-hover:opacity-0">
                      {letter}
                    </span>
                    <span 
                      className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-br from-neutral-400 to-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    >
                      {letter}
                    </span>
                  </motion.span>
                ))}
              </div>

              <span className="text-3xl md:text-5xl text-neutral-200 mt-2 md:mt-4 font-normal tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                CORE <span className="text-white font-bold">DIGITAL</span>
              </span>
            </div>

            <p className="mt-12 md:mt-5 font-normal text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              Transforming ambitious visions into digital reality. We engineer <span className="font-serif italic text-white/80 px-1">custom ecosystems</span> designed to shatter limits and scale your future.
            </p>

            <div className="mt-12 flex justify-center w-full">
              <MagneticButton>
                <a href="#services" className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none group">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a7f3d0_0%,#0891b2_50%,#a7f3d0_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900/50">
                    Explore Our Work
                  </span>
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neutral-500 to-transparent animate-bounce" />
          <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em]">System.Scroll</span>
        </div>
      </section>

      <InfiniteMarquee />
      <AboutUs />

      <section id="services" className="relative z-20 px-6">
        <Services />
      </section>

      <section id="pipeline" className="relative z-20 border-y border-white/5 bg-[#030303] px-6">
        <Process />
      </section>

      <section id="contact" className="relative z-20 pb-20 px-6">
        <Contact />
      </section>

      <Footer />
      <IdleRobot />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;