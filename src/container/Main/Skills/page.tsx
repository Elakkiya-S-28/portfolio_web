"use client";
import { motion } from "framer-motion";
import React from "react";
import { SKILLS, TOOLS } from "@/Data";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 350, 
      damping: 28 
    }
  }
};

export const Skills = () => {
  return (
    <section className="min-h-screen py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-black/20 to-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Executive Header */}
        <motion.div 
          className="text-center mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-6 leading-none tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xl lg:text-2xl font-medium text-slate-400 max-w-3xl mx-auto">
            Production expertise across modern development stack
          </p>
        </motion.div>

        {/* Primary Skills - Shorter Cards with Perfect Center Icon */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            
            return (
              <motion.div
                key={skill.id}
                className="group relative w-full h-72 lg:h-80"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Compact Glass Card */}
                <div className="mt-10 absolute inset-0 bg-gradient-to-br from-slate-800/40 to-black/50 backdrop-blur-3xl rounded-3xl border border-white/15 shadow-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:border-orange-400/40 group-hover:shadow-orange-500/25" />
                
                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5 }}
                />
                
                {/* Perfectly Centered Content */}
                <div className="relative t-10 z-20 w-full h-full flex flex-col items-center justify-center space-y-6 px-4">
                  
                  {/* Centered Icon - Larger & Prominent */}
                  <motion.div 
                    className="w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-3xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/30 shadow-2xl group-hover:scale-110 group-hover:border-orange-400/50 transition-all duration-500 flex-shrink-0"
                    whileHover={{ rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className={`text-5xl lg:text-6xl ${skill.color} drop-shadow-2xl`} />
                  </motion.div>
                  
                  {/* Compact Skill Name - Perfectly Centered */}
                  <div className="flex items-center justify-center flex-1 ">
                    <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text max-w-full text-center px-2">
                      {skill.skills}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools Section - Continuous Left-to-Right Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 bg-gradient-to-r from-slate-300 to-orange-400 bg-clip-text tracking-tight">
              Tools & Technologies
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Production tools powering enterprise development workflows
            </p>
          </div>

          {/* Continuous Left-to-Right Conveyor Belt */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl py-12 lg:py-16">
            
            {/* Track */}
            <div className="flex items-center w-max animate-scroll whitespace-nowrap px-8 lg:px-12 gap-6 lg:gap-8">
              
              {/* First Set */}
              {TOOLS.map((tool, index) => (
                <motion.div
                  key={`first-${tool.id}-${index}`}
                  className="group relative w-44 lg:w-52 h-28 lg:h-32 flex-shrink-0"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/20 shadow-xl p-6 lg:p-8 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-orange-400/50 group-hover:shadow-orange-500/30 hover:shadow-2xl" />
                  
                  <div className="relative z-20 h-full flex flex-col items-center justify-center space-y-2">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 transition-all duration-400">
                      <tool.icon className={`text-2xl lg:text-3xl ${tool.color} drop-shadow-xl`} />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-white px-2 text-center tracking-wide group-hover:text-orange-300 leading-tight">
                      {tool.tools}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate Set for Seamless Loop */}
              {TOOLS.map((tool, index) => (
                <motion.div
                  key={`second-${tool.id}-${index}`}
                  className="group relative w-44 lg:w-52 h-28 lg:h-32 flex-shrink-0"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/20 shadow-xl p-6 lg:p-8 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-orange-400/50 group-hover:shadow-orange-500/30 hover:shadow-2xl" />
                  
                  <div className="relative z-20 h-full flex flex-col items-center justify-center space-y-2">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 transition-all duration-400">
                      <tool.icon className={`text-2xl lg:text-3xl ${tool.color} drop-shadow-xl`} />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-white px-2 text-center tracking-wide group-hover:text-orange-300 leading-tight">
                      {tool.tools}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Custom CSS for continuous scroll */}
          <style jsx global>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};
