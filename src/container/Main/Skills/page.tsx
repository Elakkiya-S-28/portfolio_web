"use client";
import { motion } from "framer-motion";
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24 
    }
  }
};

export const Skills = () => {
  return (
    <section className="min-h-screen py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-black/20 to-slate-900/50 relative">
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

        {/* Primary Skills */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-32"
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
                className="group relative h-[380px] lg:h-[440px]"
                variants={cardVariants}
                whileHover={{ y: -16 }}
              >
                {/* Glass Card */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 to-black/60 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl p-12 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:border-orange-400/40 group-hover:shadow-orange-500/20" />
                
                {/* Subtle Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-20 h-full flex flex-col items-center justify-center space-y-8">
                  
                  {/* Icon */}
                  <div className="w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-xl group-hover:scale-110 group-hover:border-orange-400/50 transition-all duration-500">
                    <Icon className={`text-5xl lg:text-6xl ${skill.color} drop-shadow-2xl`} />
                  </div>
                  
                  {/* Skill Name */}
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 px-6 leading-tight tracking-tight">
                      {skill.skills}
                    </h3>
                  </div>
                
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 bg-gradient-to-r from-slate-300 to-orange-400 bg-clip-text tracking-tight">
            Tools & Technologies
          </h2>
          <p className="text-lg text-slate-400 mb-16 max-w-2xl mx-auto">
            Production tools powering enterprise development workflows
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {TOOLS.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  className="group relative aspect-square"
                  whileHover={{ y: -12, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 backdrop-blur-xl rounded-2xl border border-white/15 shadow-xl p-8 flex items-center justify-center transition-all duration-500 group-hover:border-orange-400/40 group-hover:shadow-orange-500/20 group-hover:bg-white/20 rounded-2xl" />
                  
                  <div className="relative z-20 h-full flex flex-col items-center justify-center space-y-3">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 transition-all duration-400">
                      <Icon className={`text-3xl lg:text-4xl ${tool.color} drop-shadow-xl`} />
                    </div>
                    <span className="text-sm font-semibold text-white px-2 text-center tracking-wide group-hover:text-orange-300">
                      {tool.tools}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
