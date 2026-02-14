"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import { contactLinks } from "@/Data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="min-h-screen px-4 sm:px-8 lg:px-12 py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-orange-300/30 to-orange-500/30 rounded-full blur-xl animate-ping"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Hero Header */}
        <motion.div className="text-center mb-24" variants={cardVariants}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 tracking-tight">
              Let&apos;s
            </h1>
            <div className="text-5xl md:text-7xl lg:text-8xl font-black">
              <TypeAnimation
                sequence={[
                  "Connect",
                  2000,
                  "Collaborate",
                  2000,
                  "Create",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
              />
            </div>
          </motion.div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mt-12">
            Open to{" "}
            <span className="text-orange-400 font-semibold">React Native</span>
            opportunities and growing into
            <span className="text-orange-400 font-semibold">
              {" "}
              Web Development
            </span>
            roles, along with freelance and collaborative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Links - FIXED */}
          <motion.div variants={cardVariants} className="space-y-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-700
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/25 hover:bg-gradient-to-br from-[#FA8112] to-red-500 hover:text-white hover:border-white/30`}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative z-10 flex items-center space-x-6">
                  <motion.div
                    className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-2xl group-hover:scale-110 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <link.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-white">
                      {link.label}
                    </h3>
                    <p className="text-gray-300 mt-1 font-mono text-lg font-medium group-hover:text-white/90">
                      {link.text}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/70 rounded-full animate-bounce [animation-delay:0.3s]" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            className="bg-white/3 backdrop-blur-3xl border border-white/15 rounded-3xl p-10 lg:p-12 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-orange-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400/30 rounded-full blur-lg animate-pulse delay-1000" />
            </div>

            <div className="text-center mb-10 relative z-10">
              <h3 className="text-4xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">
                Project Ready?
              </h3>
              <p className="text-xl text-gray-300">
                Let&apos;s build something{" "}
                <span className="text-orange-400 font-bold">exceptional</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: 1 }}
                    >
                      <FaMailBulk className="w-12 h-12 text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-300">
                      I&apos;ll get back to you within 24 hours
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mb-4 w-full p-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 text-lg backdrop-blur-sm focus:border-orange-500 focus:outline-none transition-all duration-300 hover:bg-white/15"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mb-4 w-full p-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 text-lg backdrop-blur-sm focus:border-orange-500 focus:outline-none transition-all duration-300 hover:bg-white/15"
                        required
                      />
                    </div>
                    <textarea
                      placeholder="Tell me about your amazing project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="mb-2 w-full p-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 text-lg resize-vertical backdrop-blur-sm focus:border-orange-500 focus:outline-none transition-all duration-300 hover:bg-white/15"
                      required
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full bg-gradient-to-r from-[#FA8112] via-red-600 to-yellow-500 text-white py-6 px-8 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 overflow-hidden disabled:opacity-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Get In Touch</span>
                            <FaMailBulk className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
