"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import HomeImage from "@/component/HomeImage/page";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Elakkiya_Resume.pdf";
    link.download = "Elakkiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-200 overflow-x-hidden font-sans">
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Only show mouse glow on desktop to save mobile performance */}
        <motion.div
          className="hidden md:block absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${dx}px ${dy}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
          }}
        />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs md:text-sm font-medium mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for New Projects
            </div>

            <div className="space-y-2 md:space-y-4">
              <h2 className="text-sm md:text-xl font-light text-slate-400 tracking-[0.2em] uppercase">
                Digital Architect
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-tight md:leading-none">
                Elakkiya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                  Selvarajan
                </span>
              </h1>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 h-10 md:h-12">
              <div className="w-1 bg-indigo-500 h-full rounded-full" />
              <TypeAnimation
                sequence={["React Native Expert", 2000, "Frontend Strategist", 2000, "UI/UX Developer", 2000]}
                wrapper="span"
                speed={50}
                className="text-lg sm:text-2xl md:text-3xl font-mono text-slate-300"
                repeat={Infinity}
              />
            </div>

            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-slate-400 leading-relaxed">
              Crafting high-performance mobile and web experiences with 2+ years of expertise.
              I bridge the gap between complex backend logic and pixel-perfect aesthetics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto relative group px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  <FaDownload /> Download Resume
                </span>
              </motion.button>

              <div className="flex gap-8 text-slate-500">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-white font-bold text-xl">2+</span>
                  <span className="text-[10px] uppercase tracking-widest">Years Exp</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-800" />
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-white font-bold text-xl">5+</span>
                  <span className="text-[10px] uppercase tracking-widest">Projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative mt-10 lg:mt-0"
          >
            <div className="relative z-10 aspect-square max-w-[400px] mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-3xl p-3 md:p-4 group">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-indigo-500 m-4 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500 m-4 rounded-br-lg" />

              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <HomeImage />
                </div>

                {/* Mobile: Smaller skill badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 right-6 p-2 md:p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl shadow-2xl"
                >
                  <FaCode className="text-indigo-400 text-xl md:text-2xl" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-16 left-4 p-2 md:p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl shadow-2xl"
                >
                  <FaMobileAlt className="text-cyan-400 text-xl md:text-2xl" />
                </motion.div>
              </div>
            </div>
            {/* Glow effect - smaller on mobile */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>

        {/* BOTTOM SECTION: BENTO DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <div className="md:col-span-2 p-6 md:p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <h3 className="text-indigo-400 font-mono mb-4 text-xs md:text-sm tracking-tighter flex items-center gap-2">
              <FaRocket /> THE MISSION
            </h3>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              "I don't just write code. I build <span className="text-white font-medium italic">scalable digital bridges</span> between human needs and technical possibilities."
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-white/5 bg-indigo-500/5 backdrop-blur-sm flex flex-col justify-center">
            <h4 className="text-white font-bold mb-2">Core Philosophy</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Clean architecture, intuitive UI, and performance-first logic. If it doesn't scale, it's not finished.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}