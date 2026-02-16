"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaBriefcase, FaCalendarAlt, FaRocket } from "react-icons/fa";
import { EXPERIENCE } from "@/Data";
import work from "../../../../public/lottie/work.json";

export default function Experience() {
  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-br from-[#222222] via-black/30 to-[#111] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#FA8112]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-[#F5E7C6]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">

        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-10 py-6 bg-black/40 backdrop-blur-xl rounded-3xl border border-[#F5E7C6]/30 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-2 bg-gradient-to-br from-[#FA8112] to-[#F5E7C6] rounded-xl"
            >
              {/* <FaBriefcase className="w-6 h-6 text-[#FAF3E1] drop-shadow-lg" /> */}
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FAF3E1] via-[#F5E7C6] to-[#FA8112] bg-clip-text text-transparent">
              Work Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT LOTTIE */}
          <motion.div 
            className="lg:col-span-4 lg:sticky lg:top-32 lg:h-[85vh] order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-full h-full bg-black/20 backdrop-blur-xl rounded-3xl border border-[#F5E7C6]/20 shadow-2xl p-6 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lottie 
                animationData={work} 
                loop 
                className="w-full h-full drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT TIMELINE */}
          <div className="lg:col-span-8 relative order-1 lg:order-2">
            
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-[#FA8112]/80 via-[#F5E7C6]/70 to-[#FAF3E1]/60 shadow-lg rounded-full z-10" />

            <div className="space-y-20 relative z-20">
              {EXPERIENCE.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* ANIMATED AERO DOT - PERFECTLY ALIGNED */}
                  <div className="flex-shrink-0 mt-[22px]"> {/* Fixed vertical alignment */}
                    <motion.div 
                      className="cursor-pointer"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ 
                        scale: 1.4, 
                        y: -10
                      }}
                      whileTap={{ scale: 0.95 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 15,
                        delay: index * 0.1
                      }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-[#FA8112]/90 to-[#F5E7C6]/90 rounded-full flex items-center justify-center shadow-2xl border-4 border-[#111] overflow-hidden relative"
                        style={{ boxShadow: "0 10px 30px rgba(250, 129, 18, 0.4)" }}
                        animate={{ 
                          scale: [1, 1.08, 1]
                        }}
                        transition={{ 
                          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          boxShadow: "0 20px 40px rgba(250,129,18,0.6)"
                        }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-[#FA8112]/50 to-[#F5E7C6]/50 rounded-full blur-sm -z-10"
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                        />
                        <FaRocket className="text-black w-5 h-5 drop-shadow-xl z-20 relative" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div 
                    className="w-full max-w-2xl bg-black/40 backdrop-blur-3xl border border-[#F5E7C6]/30 rounded-3xl p-8 hover:border-[#F5E7C6]/70 hover:shadow-[#FA8112]/30 hover:-translate-y-2 transition-all duration-700 relative z-20 flex-1"
                    initial={{ scale: 0.95, rotateX: 10 }}
                    whileInView={{ scale: 1, rotateX: 0 }}
                    whileHover={{ scale: 1.02, rotateX: -5 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Background Glow */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-[#FA8112]/10 via-[#F5E7C6]/5 rounded-3xl blur-xl -z-10 opacity-80"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Company Name Row - LEVEL WITH AERO */}
                    <div className="flex items-center gap-4 pb-6 mb-6 border-b border-[#F5E7C6]/40 hover:border-[#F5E7C6]/70 transition-all duration-500">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#FA8112] to-[#F5E7C6] rounded-full shadow-lg flex-shrink-0" />
                      <h3 className="text-2xl lg:text-3xl font-black text-[#FAF3E1] leading-tight drop-shadow-xl">
                        {item.company}
                      </h3>
                    </div>

                    {/* Duration */}
                    <motion.div 
                      className="flex items-center gap-3 text-lg text-[#F5E7C6]/90 font-semibold mb-6"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <FaCalendarAlt className="w-5 h-5 text-[#FA8112] drop-shadow-lg flex-shrink-0" />
                      <span>{item.duration}</span>
                    </motion.div>

                    {/* Role */}
                    <motion.h4 
                      className="text-xl font-bold bg-gradient-to-r from-[#FA8112] via-[#F5E7C6] to-[#FA8112] bg-clip-text text-transparent mb-6 pl-6 border-l-6 border-[#F5E7C6]/50 shadow-lg"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {item.role}
                    </motion.h4>

                    {/* Description */}
                    <motion.p 
                      className="text-lg text-[#F5E7C6]/95 leading-relaxed font-medium tracking-wide"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
