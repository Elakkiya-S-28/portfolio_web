"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";

import { EXPERIENCE } from "@/Data";
import work from "../../../../public/lottie/work.json";

export default function Experience() {
  return (
    <section className="min-h-screen px-6 md:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
           WORK EXPERIENCE
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/3">
          <Lottie animationData={work} loop className="w-full h-auto" />
        </div>


        <div className="relative max-w-5xl mx-auto w-full">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/40 -translate-x-1/2" />

          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 relative"
            >
            
              <div className="md:text-right md:pr-10">
                <h3 className="text-xl font-semibold text-white">
                  {item.company}
                </h3>
              </div>

              <div className="absolute left-1/2 top-2 w-4 h-4 bg-[#F26B4F] rounded-full -translate-x-1/2" />

              <div className="md:pl-10">
                <span className="text-sm text-gray-400">
                  {item.duration}
                </span>
                <h4 className="text-lg font-bold text-[#F26B4F] mt-1">
                  {item.role}
                </h4>
                <p className="text-gray-300 mt-2 max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
