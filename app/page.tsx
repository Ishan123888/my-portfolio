"use client";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { Code2, Cpu, Smartphone, MoveRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Advanced Tech Stack Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Core Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            <span className="bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Technologies I Master
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Code2,
              title: "Full-Stack Web",
              description: "Expertise in MERN Stack. Building scalable web apps with Next.js, React, and Node.js.",
              gradient: "from-blue-500 to-cyan-500",
              delay: 0,
            },
            {
              icon: Cpu,
              title: "Enterprise Java",
              description: "Robust backend systems using Java EE, Spring Boot, and MySQL. Experience with MVC and JSP.",
              gradient: "from-purple-500 to-pink-500",
              delay: 0.1,
            },
            {
              icon: Smartphone,
              title: "Mobile Dev",
              description: "Native Android development with Kotlin. Skilled in Neumorphic 3D design and smooth UI/UX.",
              gradient: "from-orange-500 to-red-500",
              delay: 0.2,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              {/* Card content */}
              <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-xl transition-all duration-500">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-linear-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Projects Section */}
      <Projects />

      {/* 4. Enhanced CTA Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-30" />
          
          {/* Main content */}
          <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-[3rem] p-10 md:p-20 overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" />
            
            {/* Floating orbs */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-10 right-10 w-64 h-64 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-10 left-10 w-80 h-80 bg-linear-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-6"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">
                    Available for Projects
                  </span>
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-white">
                  Have a project
                  <br />
                  <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    in mind?
                  </span>
                </h2>
                <p className="text-slate-400 text-lg max-w-md">
                  Currently a 3rd-year IT undergraduate at SLIIT, passionate about creating efficient, scalable solutions.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center gap-3 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Contact Section */}
      <Contact />
    </div>
  );
}