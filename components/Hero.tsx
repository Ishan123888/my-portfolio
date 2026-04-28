"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Download, 
  Globe,
  Layers,
  Database,
  Terminal,
  Cpu,
  Workflow
} from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Fixed: y and opacity are now both used in the motion.div below
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

  const skillGroups = [
    { icon: <Layers className="w-4 h-4" />, label: "MERN (React/Next/Node)", color: "from-emerald-400 to-cyan-500" },
    { icon: <Code2 className="w-4 h-4" />, label: "Java EE & Spring Boot", color: "from-blue-600 to-indigo-600" },
    { icon: <Smartphone className="w-4 h-4" />, label: "Android & Kotlin", color: "from-purple-500 to-pink-500" },
    { icon: <Terminal className="w-4 h-4" />, label: "Python & PHP", color: "from-orange-400 to-red-500" },
    { icon: <Database className="w-4 h-4" />, label: "SQL & MongoDB", color: "from-yellow-400 to-orange-500" },
    { icon: <Cpu className="w-4 h-4" />, label: "AI & ML (Stage I/II)", color: "from-cyan-400 to-blue-500" },
    { icon: <Globe className="w-4 h-4" />, label: "HTML/CSS/Tailwind", color: "from-pink-400 to-rose-500" },
    { icon: <Workflow className="w-4 h-4" />, label: "MVC & System Design", color: "from-slate-400 to-slate-600" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ishan_Ekanayaka_CV.pdf";
    link.download = "Ishan_Ekanayaka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Dynamic Interactive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #3b82f6 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="relative z-10 px-6 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Introduction */}
        <motion.div 
          style={{ y, opacity }} // Applied both transforms here
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Available for Projects</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-6">
            ISHAN <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
              EKANAYAKA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-8 leading-relaxed">
            A motivated <span className="text-white font-medium">BSc IT undergraduate at SLIIT</span> (3rd Year) specializing in building scalable <span className="text-emerald-400">Full-Stack</span>, <span className="text-blue-400">Java Enterprise</span>, and <span className="text-purple-400">Android</span> solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              Let&apos;s Talk <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-white/10 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </button>
          </div>
        </motion.div>

        {/* Right Side: Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skillGroups.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              // Fixed: Updated bg-white/[0.02] to bg-white/2
              className="p-4 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm flex items-center gap-4 group transition-all"
            >
              <div className={`p-3 rounded-xl bg-linear-to-br ${skill.color} shadow-lg shadow-black/20 group-hover:rotate-6 transition-transform`}>
                <div className="text-white">
                  {skill.icon}
                </div>
              </div>
              <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                {skill.label}
              </span>
            </motion.div>
          ))}
          
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;