"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/Data";
import { FaExternalLinkAlt, FaGithub, FaTerminal } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-20 left-10 pointer-events-none select-none">
        <h2 className="text-[15rem] font-black text-white/[0.02] leading-none">
          WORK
        </h2>
      </div>
  <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-indigo-400 font-mono mb-4">
              <FaTerminal className="text-xs" />
              <span className="text-xs uppercase tracking-[0.3em]">Case Studies</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Releases.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-right font-light leading-relaxed border-r-2 border-indigo-500 pr-6"
          >
            A curated selection of cross-platform mobile apps built with precision.
          </motion.p>
        </div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, index }) => {
  const isLarge = index === 0 || index === 3; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative group ${isLarge ? "md:col-span-8" : "md:col-span-4"}`}
    >
      {/* Project Index Number */}
      <div className="absolute -top-4 -left-4 z-20 font-mono text-4xl font-black text-white/5 group-hover:text-indigo-500/20 transition-colors pointer-events-none">
        0{index + 1}
      </div>

      <div className="relative h-[450px] w-full rounded-2xl overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
        
        {/* Image Component */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${isLarge ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'} group-hover:scale-105`}
          />
          {/* MULTI-LAYER DARK OVERLAY: This solves the "White on White" issue */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-100" />
        </div>

        {/* Floating Content Bundle */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
          
          {/* Metadata revealed on hover */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-4 mb-4"
          >
            <div className="px-3 py-1 bg-indigo-500/20 backdrop-blur-md rounded border border-indigo-500/30 text-[10px] text-indigo-300 font-mono uppercase tracking-widest">
              Live Production
            </div>
          </motion.div>

          {/* PROJECT NAME: Using a text-shadow for extra safety on white images */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight" 
              style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>
            {project.title}
          </h3>
          
          {/* PROJECT DESCRIPTION */}
          <p className="text-slate-200 text-sm line-clamp-2 mb-6 max-w-xl group-hover:text-white transition-colors drop-shadow-md">
            {project.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.SkillsTools.slice(0, 4).map((skill, i) => (
                <span key={i} className="text-[10px] font-mono text-indigo-400/80 uppercase tracking-tighter">
                  #{skill.replace(/\s+/g, '')}
                </span>
              ))}
            </div>

            {/* Action Buttons: Changed from button to 'a' tags */}
            <div className="flex gap-4">
              <motion.a 
                href={project.github || "#"} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#6366f1" }}
                className="text-slate-300 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              >
                <FaGithub size={22} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Blueprint Border Animation */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-2xl transition-all duration-500 pointer-events-none">
            <div className="absolute top-0 right-0 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-700 delay-100" />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700 delay-100" />
        </div>
      </div>
    </motion.div>
  );
};