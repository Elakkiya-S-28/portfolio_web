"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaBriefcase, FaCalendarAlt, FaRocket } from "react-icons/fa";
import { EXPERIENCE } from "@/Data";
import work from "../../../../public/lottie/work.json";

export default function Experience() {
  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-br from-[#222222] via-black/30 to-[#111] relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-r from-[#FA8112]/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-gradient-to-b from-[#F5E7C6]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Cinematic Header */}
        <motion.div 
          className="text-center mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-[#FAF3E1]/20 via-[#F5E7C6]/10 to-[#FA8112]/10 backdrop-blur-2xl rounded-3xl border border-[#F5E7C6]/30 shadow-2xl"
            initial={{ scale: 0, rotateX: -10 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-3 bg-gradient-to-br from-[#FA8112] to-[#F5E7C6] rounded-2xl shadow-xl"
            >
              <FaBriefcase className="w-7 h-7 text-[#FAF3E1] drop-shadow-lg" />
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#FAF3E1] via-[#F5E7C6] to-[#FA8112] bg-clip-text text-transparent tracking-tight">
              Work Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* 3-PART LAYOUT: Full Width Lottie | Center Line | Right Cards */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-0 lg:min-h-[80vh]">
          
          {/* PART 1: LEFT - TOTAL WIDTH Lottie (Full Occupation) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-[80vh]">
            <motion.div 
              className="w-full h-full bg-gradient-to-br from-[#FA8112]/10 via-[#F5E7C6]/5 to-[#FAF3E1]/5 backdrop-blur-xl rounded-3xl border border-[#F5E7C6]/20 shadow-xl p-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(250,129,18,0.2)" }}
            >
              <Lottie 
                animationData={work} 
                loop 
                className="w-full h-full drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
            </motion.div>
          </div>

          {/* PART 2: CENTER - Vertical Line + Aero Dots (STRAIGHT TO CARDS) */}
          <div className="lg:col-span-1 lg:pt-20 flex flex-col items-center lg:min-h-[70vh] lg:pl-8">
            {/* Vertical Aero Line */}
            <div className="w-[3px] h-full bg-gradient-to-b from-[#FA8112]/60 via-[#F5E7C6]/50 to-[#FAF3E1]/40 shadow-lg rounded-full relative mx-auto z-20">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FA8112]/30 rounded-full blur-md"
                animate={{ scaleY: [1, 1.08, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Aero Dots - PERFECTLY STRAIGHT TO CARD COMPANY HEADINGS */}
            <div className="absolute left-1/2 transform -translate-x-1/2 pt-20 space-y-28 lg:space-y-32 w-full flex flex-col items-center z-30">
              {EXPERIENCE.map((item, index) => (
                <motion.div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center relative mt-[-6px]"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.8, y: -12 }}
                >
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-[#FA8112] via-[#F5E7C6] to-[#FAF3E1] rounded-2xl shadow-2xl border-3 border-[#111] flex items-center justify-center relative overflow-hidden"
                    whileHover={{ boxShadow: "0 0 35px rgba(250,129,18,0.7)" }}
                  >
                    <FaRocket className="w-6 h-6 text-[#111] drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PART 3: RIGHT - Full Experience Cards */}
          <div className="lg:col-span-7 lg:pt-20 lg:pl-12 space-y-20 lg:space-y-28">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.15 }}
              >
                <motion.div 
                  className="group relative bg-black/20 backdrop-blur-3xl border border-[#F5E7C6]/30 shadow-2xl hover:shadow-[#FA8112]/30 hover:-translate-y-4 transition-all duration-700 max-w-lg rounded-3xl p-8"
                  initial={{ scale: 0.95, rotateX: 10 }}
                  whileInView={{ scale: 1, rotateX: 0 }}
                  whileHover={{ scale: 1.02, rotateX: -3, borderColor: "#F5E7C6" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FA8112]/5 via-[#F5E7C6]/5 to-[#FAF3E1]/5 backdrop-blur-2xl rounded-3xl -z-10 animate-pulse opacity-80" />
                  
                  <div className="flex items-start gap-4 pb-6 mb-8 border-b border-[#F5E7C6]/30 group-hover:border-[#F5E7C6]/60 transition-all duration-500 relative overflow-hidden">
                    <motion.div 
                      className="flex-shrink-0 mt-1 w-5 h-5 bg-gradient-to-r from-[#FA8112] to-[#F5E7C6] rounded-xl shadow-xl relative animate-pulse"
                      whileHover={{ scale: 1.2, y: -2 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/10 rounded-xl blur-sm animate-ping"
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h3 
                        className="text-xl lg:text-2xl font-black text-[#FAF3E1] leading-tight group-hover:text-[#F5E7C6] transition-all duration-500 drop-shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        {item.company}
                      </motion.h3>
                      <motion.div 
                        className="flex items-center gap-3 mt-3 text-base text-[#F5E7C6]/90 font-semibold"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaCalendarAlt className="w-4 h-4 text-[#FA8112] drop-shadow-lg flex-shrink-0" />
                        <span>{item.duration}</span>
                      </motion.div>
                    </div>
                  </div>

                  <motion.h4 
                    className="text-lg font-bold bg-gradient-to-r from-[#FA8112] via-[#F5E7C6] to-[#FA8112] bg-clip-text text-transparent mb-6 pl-6 border-l-6 border-[#F5E7C6]/50 shadow-lg"
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                  >
                    {item.role}
                  </motion.h4>

                  <motion.p 
                    className="text-base text-[#F5E7C6]/95 leading-relaxed font-medium tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FA8112]/20 via-[#F5E7C6]/10 rounded-3xl blur-3xl -z-10 opacity-0"
                    animate={{ 
                      opacity: [0, 0.4, 0], 
                      scale: [1, 1.06, 1] 
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
