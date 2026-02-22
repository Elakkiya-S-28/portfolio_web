"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaTerminal, FaPaperPlane, FaLink, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { contactLinks } from "@/Data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, success, error

  // Mouse Tracking for Spotlight (Consistent with Home)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dx = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const dy = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_svi8l79",
        "template_ae0ahft",
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "iZrabm9sFjOBIswjQ"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen bg-[#050505] py-24 overflow-hidden font-sans">
      {/* 1. INTERACTIVE BACKGROUND */}
      <div className="absolute top-20 left-10 pointer-events-none select-none">
        <h2 className="text-[15rem] font-black text-white/[0.02] leading-none">
          CONTACT
        </h2>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${dx}px ${dy}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-indigo-400 font-mono mb-6"
          >
            <FaTerminal className="text-xs" />
            <span className="text-xs uppercase tracking-[0.3em]">Communication_Channel / Initializing</span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter text-center mb-8">
            Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Signal.</span>
          </h2>

          <div className="h-20 text-center">
            <TypeAnimation
              sequence={["Collaborate on Mobile.", 2000, "Build Modern Web.", 2000, "Create Pixel Perfection.", 2000]}
              wrapper="p"
              speed={50}
              className="text-xl md:text-2xl text-slate-400 font-light italic"
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT: NEURAL NODES (Social Links) */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="p-6 border-l-2 border-indigo-500 bg-indigo-500/5 mb-8">
              <h3 className="text-white font-bold text-lg mb-2">Network Nodes</h3>
              <p className="text-slate-400 text-sm font-light">Establish a direct connection via these secure endpoints.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                  className="group flex items-center justify-between p-5 bg-slate-900/30 border border-white/5 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-800 text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500">{link.label}</p>
                      <p className="text-slate-200 font-medium group-hover:text-indigo-300">{link.text}</p>
                    </div>
                  </div>
                  <FaLink className="text-slate-700 group-hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE UPLINK TERMINAL (Form) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="relative h-full bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl group">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-[10px] text-slate-500 hidden md:block">
                SECURE_UPLINK_ENCRYPTED
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/50">
                      <FaCheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Transmission Received</h3>
                    <p className="text-slate-400">Your signal has reached my terminal. Response incoming shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest ml-1">User_Identifier</label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-700 focus:border-indigo-500 outline-none transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest ml-1">Return_Path</label>
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-700 focus:border-indigo-500 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest ml-1">Data_Payload</label>
                      <textarea
                        rows={6}
                        placeholder="Tell me about your amazing project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none"
                        required
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden bg-white text-black font-black py-5 rounded-xl uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-3"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                        {isSubmitting ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                        {isSubmitting ? "Transmitting..." : "Send Signal"}
                      </span>
                    </motion.button>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-xs font-mono mt-4">
                        <FaExclamationTriangle />
                        Error: Signal failed to transmit. Please check your network.
                      </div>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER DECORATION */}
      <div className="container mx-auto px-6 mt-32 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-mono uppercase tracking-[0.4em]">
        <p>© {new Date().getFullYear()} ELAKKIYA_SELVARAJAN.DEV</p>
        <p>ALL_SYSTEMS_OPERATIONAL</p>
      </div>
    </section>
  );
}