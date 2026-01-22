"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Code2, Database, Layout, Smartphone, Download } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { icon: <Layout className="w-4 h-4" />, label: "React & Next.js" },
    { icon: <Database className="w-4 h-4" />, label: "MERN Stack" },
    { icon: <Smartphone className="w-4 h-4" />, label: "Android & Kotlin" },
    { icon: <Code2 className="w-4 h-4" />, label: "Java Enterprise" },
  ];

  // CV එක download කිරීමට අවශ්‍ය function එක
  const handleDownloadCV = () => {
    // ඔබගේ CV file එක public folder එකේ තිබිය යුතුය (උදා: public/Ishan-Ekanayaka-CV.pdf)
    const cvUrl = "/Ishan-Ekanayaka-CV.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Ishan-Ekanayaka-CV.pdf"; // Download වන විට ලැබෙන නම
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background elements code remain same as yours... */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[120px] opacity-30"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-linear-to-l from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-[150px] opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/20 dark:border-white/10 mb-8 shadow-lg shadow-blue-500/20"
        >
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-semibold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Ishan Ekanayaka • Full-Stack Developer
          </span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </motion.div>

        <motion.h1
          style={{ transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)` }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 perspective-1000"
        >
          <span className="inline-block bg-linear-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent drop-shadow-2xl">
            Building Robust
          </span>
          <br />
          <span className="inline-block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Digital Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
        >
          Transforming ideas into high-performance <span className="font-bold text-blue-500 underline decoration-blue-500/30 decoration-4 underline-offset-4">MERN</span> applications and 
          elegant <span className="font-bold text-purple-500 underline decoration-purple-500/30 decoration-4 underline-offset-4">Mobile</span> experiences using Java and Kotlin.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm font-medium hover:border-blue-500/50 hover:text-white transition-all"
            >
              {skill.icon}
              {skill.label}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/50 overflow-hidden"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* නිවැරදි කරන ලද Download CV Button එක */}
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl font-bold text-slate-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all shadow-lg flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Card code remain same... */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
        style={{ transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)` }}
        className="mt-20 w-full max-w-5xl relative group"
      >
        <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className="relative h-100 bg-linear-to-br from-white/80 via-white/60 to-white/40 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-800/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/30 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="relative h-full flex flex-col items-center justify-center p-8 z-10 text-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="mb-8">
              <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h3 className="text-4xl md:text-6xl font-black bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent uppercase">
              Innovate. Code.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md mt-4">
              Mastering Java, Python, and the MERN stack to deliver seamless, scalable, and elegant software solutions.
            </p>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradient 5s ease infinite; }
      `}</style>
    </section>
  );
};

export default Hero;