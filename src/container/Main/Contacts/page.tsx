"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-24 bg-black">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s <span className="text-[#F26B4F]">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm open to React Native opportunities, freelance projects, 
            and exciting collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl text-[#F26B4F] font-semibold">
                Email
              </h3>
              <p className="text-gray-300 mt-2">
               selvarajanelakkiya@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#F26B4F] font-semibold">
                LinkedIn
              </h3>
              <p className="text-gray-300 mt-2">
               https://www.linkedin.com/in/elakkiya-selvarajan-384b1a1aa/
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#F26B4F] font-semibold">
                GitHub
              </h3>
              <p className="text-gray-300 mt-2">
                github.com/yourname
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-10 rounded-2xl border border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white">
              Have a project in mind?
            </h3>

            <p className="text-gray-400 mt-4">
              Let’s build something scalable, fast, and beautiful.
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="inline-block mt-8 bg-[#F26B4F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Say Hello 👋
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
