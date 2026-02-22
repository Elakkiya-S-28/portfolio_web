"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILLS, TOOLS } from "@/Data"; // Ensure your paths are correct

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const moduleVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
    },
  },
};

export const Skills = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] text-slate-200 py-32 overflow-hidden font-sans border-t border-white/5">
      {/* BACKGROUND: ARCHITECTURE GRID & GLOW */}
      <div className="absolute top-20 left-10 pointer-events-none select-none">
        <h2 className="text-[15rem] font-black text-white/[0.02] leading-none">
          SKILLS
        </h2>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-9xl relative z-10">

        {/* HEADER: SYSTEM INITIALIZATION */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
              System_Capabilities
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Architecture</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl font-light">
            The foundational technologies powering my scalable mobile and web solutions.
          </p>
        </motion.div>

        {/* PRIMARY SKILLS: THE HARDWARE MODULES */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id || index}
                variants={moduleVariants}
                whileHover={{ y: -5 }}
                className="group relative h-64 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/50 overflow-hidden transition-colors duration-500"
              >
                {/* Tech Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-indigo-400 transition-colors m-3" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-cyan-400 transition-colors m-3" />

                {/* Giant Background Watermark Icon */}
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110 group-hover:rotate-12">
                  <Icon className="text-[200px] text-white" />
                </div>

                {/* Content Container */}
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  {/* Top Row: Icon & Status */}
                  <div className="flex justify-between items-start">
                    <div className={`p-4 rounded-xl bg-white/5 border border-white/10 shadow-lg group-hover:bg-indigo-500/10 transition-colors`}>
                      <Icon className={`text-4xl ${skill.color || "text-slate-300"} drop-shadow-lg`} />
                    </div>

                    {/* Pulsing Status Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">ACTIVE</span>
                      <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 group-hover:animate-pulse transition-colors shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                    </div>
                  </div>

                  {/* Bottom Row: Title */}
                  <div>
                    <span className="text-xs font-mono text-indigo-400 mb-1 block opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Module_{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-200 group-hover:text-white tracking-tight transition-colors">
                      {skill.skills}
                    </h3>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* SECONDARY TOOLS: THE DATA STREAM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Integrated Tools & Workflow
            </h3>
            <p className="text-slate-400 font-mono text-sm">
              &lt; telemetry_data_stream active /&gt;
            </p>
          </div>

          {/* The Scrolling Conduit */}
          <div className="relative w-full overflow-hidden rounded-full bg-slate-950/50 border border-white/10 py-6 before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-[#050505] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-[#050505] after:to-transparent after:z-10">

            <div className="flex items-center w-max animate-infinite-scroll gap-6 px-6">

              {/* Set 1 */}
              {TOOLS.map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <div
                    key={`tool-1-${index}`}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 cursor-default group"
                  >
                    <ToolIcon className={`text-xl ${tool.color || "text-slate-400"} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white tracking-wide">
                      {tool.tools}
                    </span>
                  </div>
                );
              })}

              {/* Set 2 (Duplicate for smooth looping) */}
              {TOOLS.map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <div
                    key={`tool-2-${index}`}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 cursor-default group"
                  >
                    <ToolIcon className={`text-xl ${tool.color || "text-slate-400"} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white tracking-wide">
                      {tool.tools}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Keyframes for the Data Stream */}
          <style jsx global>{`
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 35s linear infinite;
            }
            .animate-infinite-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>

      </div>
    </section>
  );
};