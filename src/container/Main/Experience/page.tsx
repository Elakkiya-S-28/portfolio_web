"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaCalendarAlt, FaTerminal, FaCodeBranch, FaCircle, FaLayerGroup } from "react-icons/fa";
import { EXPERIENCE } from "@/Data";
import work from "../../../../public/lottie/work.json";

export default function Experience() {
  // Logic to group experience by company
  const groupedExperience = EXPERIENCE.reduce((acc, item) => {
    if (!acc[item.company]) {
      acc[item.company] = [];
    }
    acc[item.company].push(item);
    return acc;
  }, {});

  return (
    <section className="relative min-h-screen bg-[#050505] py-20 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute top-20 left-10 pointer-events-none select-none">
        <h2 className="text-[15rem] font-black text-white/[0.02] leading-none">
          EXPERIENCE
        </h2>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-indigo-400 font-mono mb-4"
          >
            <FaTerminal className="text-xs" />
            <span className="text-xs uppercase tracking-[0.3em]">System_Logs / Experience</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter text-center">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Architecture.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT COLUMN: FIXED/STICKY LIVE MONITORING UNIT */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit order-2 lg:order-1">
            <motion.div
              className="w-full pt-4" // Added slight padding-top to align with the first card text
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                <div className="relative bg-slate-900/50 border border-white/10 backdrop-blur-3xl rounded-3xl p-8 overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Career_Visualizer.v2</span>
                  </div>

                  {/* Lottie Animation Container */}
                  <div className="flex justify-center items-center py-2">
                    <Lottie
                      animationData={work}
                      loop
                      className="w-full h-auto max-w-[260px] md:max-w-[300px] opacity-90"
                    />
                  </div>

                  {/* Progress Bar/Status Area */}
                  <div className="mt-8 space-y-3">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/3 bg-indigo-500/50"
                      />
                    </div>
                    <p className="text-center font-mono text-[10px] text-indigo-400 animate-pulse uppercase tracking-widest">
                      Visualizing Deployment History
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: DEPLOYMENT LOG (GROUPED) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12 relative pt-10 lg:pt-0">
            {/* The Main Timeline Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-transparent hidden md:block" />

            {Object.keys(groupedExperience).map((company, groupIndex) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-16 group"
              >
                {/* Deployment Node (Dot) */}
                <div className="absolute left-0 top-2 hidden md:flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-indigo-500/50 flex items-center justify-center z-10 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    <FaLayerGroup className="text-indigo-400 group-hover:text-cyan-400 text-sm transition-colors" />
                  </div>
                </div>

                {/* Main Card */}
                <div className="bg-slate-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-sm group-hover:border-indigo-500/30 transition-all duration-500 shadow-xl">
                  {/* Company Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {company}
                    </h3>
                    <div className="h-1 w-12 bg-indigo-500 mt-2 rounded-full" />
                  </div>

                  {/* Nested Roles (Sub-timeline) */}
                  <div className="space-y-10 relative">
                    {/* Inner Line for multiple roles */}
                    {groupedExperience[company].length > 1 && (
                      <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-slate-800" />
                    )}

                    {groupedExperience[company].map((role, roleIndex) => (
                      <div key={roleIndex} className="relative pl-8">
                        {/* Sub-dot */}
                        <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-slate-950 border-2 border-indigo-500 z-10" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                          <h4 className="text-xl font-semibold text-slate-100 tracking-wide">
                            {role.role}
                          </h4>
                          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-mono w-fit">
                            <FaCalendarAlt size={10} />
                            {role.duration}
                          </span>
                        </div>

                        <div className="relative">
                          <span className="absolute -left-5 top-1 text-indigo-900 font-mono text-sm">{">"}</span>
                          <p className="text-slate-400 text-sm leading-relaxed font-light">
                            {role.description}
                          </p>
                        </div>

                        {/* Status Bar */}
                        <div className="mt-4 flex gap-4 opacity-60">
                          <div className="flex items-center gap-1.5">
                            <FaCircle className="text-[6px] text-green-500 animate-pulse" />
                            <span className="text-[9px] font-mono text-slate-500 uppercase">Deployment: Successful</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}