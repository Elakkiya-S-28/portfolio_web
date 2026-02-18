// "use client";
// import { TypeAnimation } from "react-type-animation";

// import HomeImage from "@/component/HomeImage/page";

// export default function Home() {
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/Elakkiya_Resume.pdf";
//     link.download = "Elakkiya_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <div className="flex flex-row justify-between items-center m-10">
//         <div className="flex flex-col gap-5">
//           <div>
//             <span className="text-5xl">Hello </span>
//             <span className="text-5xl text-[#F26B4F]">.</span>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="w-40 h-[3px] bg-[#F26B4F]"></div>
//             <TypeAnimation
//               sequence={["I'm Elakkiya Selvarajan", 3000, "", 1000]}
//               wrapper="span"
//               speed={40}
//               className="text-4xl font-semibold min-w-[420px] inline-block"
//               repeat={Infinity}
//             />
//             {/* <h2 className="text-4xl font-semibold">I'm Elakkiya Selvarajan</h2> */}
//           </div>

//           <h1 className="text-5xl text-[#F26B4F]">Front End Developer</h1>
//           <button
//             onClick={handleDownload}
//             className="px-6 py-3 bg-[#F26B4F] text-white rounded-xl font-semibold hover:bg-[#e85f44] transition w-[50%]"
//           >
//             My Resume
//           </button>
//         </div>

//         <div>
//           <HomeImage />
//         </div>
//       </div>
//       <div>
//         <h1 className="text-2xl wrap-anywhere text-red-50">
//           I’m a React Native Developer with 2+ years of experience building
//           cross-platform mobile applications. I enjoy creating clean, intuitive
//           user experiences and scalable solutions. I also have experience in web
//           frontend development and working with backend APIs. I’m seeking
//           opportunities as a React Native or Frontend Developer to build
//           meaningful products and grow as a developer.
//         </h1>
//       </div>
//     </div>
//   );
// }



"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HomeImage from "@/component/HomeImage/page";
import { FaDownload } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Elakkiya_Resume.pdf";
    link.download = "Elakkiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900/90 via-black/30 to-slate-900 relative overflow-hidden py-20 px-8 lg:px-16">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-gradient-to-r from-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Content Column - EXACT SAME STRUCTURE */}
        <motion.div 
          className="flex flex-col gap-8 lg:gap-12 w-full lg:w-1/2 lg:max-w-lg"
          variants={containerVariants}
        >
          {/* Hello . */}
          <motion.div variants={containerVariants}>
            <div className="flex items-baseline gap-4">
              <motion.span 
                className="text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello
              </motion.span>
              <motion.span 
                className="text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                .
              </motion.span>
            </div>
          </motion.div>

          {/* Name Type Animation */}
          <motion.div className="flex items-center gap-6" variants={containerVariants}>
            <div className="w-40 h-[3px] lg:w-48 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg" />
            <TypeAnimation
              sequence={[
                "I'm Elakkiya Selvarajan",
                3000,
                "",
                1000
              ]}
              wrapper="span"
              speed={40}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight inline-block min-w-[400px] lg:min-w-[500px]"
              repeat={Infinity}
              cursor={true}
              cursorColor="#F59E0B"
            />
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent mb-8"
            variants={containerVariants}
          >
            Front End Developer
          </motion.h1>

          {/* CTA Button */}
          <motion.button
            onClick={handleDownload}
            className="group relative w-[50%] lg:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/50 border border-orange-500/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 max-w-max"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            variants={containerVariants}
          >
            <FaDownload className="w-5 h-5 inline mr-2 group-hover:translate-x-1 transition-transform" />
            <span>My Resume</span>
            <div className="absolute inset-0 bg-white/30 skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.button>
        </motion.div>

        {/* Right Image - Same Position */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          variants={containerVariants}
        >
          <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
            <motion.div 
              className="relative bg-gradient-to-br from-orange-500/5 via-white/5 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12 w-full aspect-[4/5] flex items-center justify-center overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <HomeImage />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 rounded-3xl blur-xl opacity-60 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>

      {/* Description - Same Position Below */}
      <motion.div 
        className="max-w-4xl mx-auto mt-24 lg:mt-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-12 shadow-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">
            About Me
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed tracking-wide">
            I’m a React Native Developer with 2+ years of experience building cross-platform mobile applications. 
            I enjoy creating clean, intuitive user experiences and scalable solutions. 
            I also have experience in web frontend development and working with backend APIs. 
            I’m seeking opportunities as a React Native or Frontend Developer to build meaningful products and grow as a developer.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
