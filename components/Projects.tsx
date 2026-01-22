"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Astro Services - Jyothishya Web",
    description: "A professional astrology service platform developed for a specialized practitioner. Features a modern, spiritual aesthetic with localized content and service showcases.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "#",
    demo: "https://ravindrapiyasena123-ui.github.io/jyothishya/",
    size: "large",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    icon: "🕉️",
  },
  {
    title: "MediCura Medical System",
    description: "Full-stack Billing & Payment Management module for medical centers. Features include automated invoice generation, expense tracking, and comprehensive PDF/Excel financial reports.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Ishan123888",
    demo: "#",
    size: "small",
    gradient: "from-blue-500 to-cyan-500",
    icon: "💊",
  },
  {
    title: "MindEase Mobile App",
    description: "A mental health and meditation app designed with a 60-30-10 color rule and neumorphic 3D UI. Includes a meditation player and relaxing soundscapes.",
    tags: ["Kotlin", "Android Studio", "UI/UX"],
    github: "#",
    demo: "#",
    size: "small",
    gradient: "from-purple-500 to-pink-500",
    icon: "🧘",
  },
  {
    title: "Reina Fashion Store",
    description: "Ladies' slippers e-commerce platform. Built with an admin panel for product management, cart system, order tracking, and automated PDF invoices.",
    tags: ["Java", "JSP", "MySQL", "Tomcat"],
    github: "#",
    demo: "#",
    size: "small",
    gradient: "from-pink-500 to-rose-500",
    icon: "👠",
  },
  {
    title: "Employee Management System",
    description: "Desktop application with role-based login and internationalization (English/Sinhala). Generates PDF salary slips and manages CRUD operations.",
    tags: ["Java Swing", "MySQL", "i18n"],
    github: "#",
    demo: "#",
    size: "small",
    gradient: "from-indigo-500 to-blue-500",
    icon: "👨‍💼",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // වෙබ් අඩවියට navigate කරවන function එක
  const handleNavigate = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-blue-500">Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">
                Selected <br />
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects.</span>
              </h2>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md md:text-right">
                A collection of full-stack applications, mobile apps, and professional websites built with precision.
              </p>
              <button className="flex items-center gap-2 text-blue-500 font-bold hover:underline group transition-all">
                View All Work <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              // Card එක click කළ විට navigate වීමට
              onClick={() => handleNavigate(project.demo)}
              className={`group relative rounded-[2.5rem] cursor-pointer overflow-hidden ${
                project.size === "large" ? "md:col-span-2" : ""
              }`}
            >
              {/* Main Card Content */}
              <div className={`relative h-full min-h-100 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 ${hoveredIndex === index ? 'shadow-2xl scale-[1.01]' : 'shadow-xl'}`}>
                
                {/* Top Row: Icon and External Links */}
                <div className="flex justify-between items-start mb-8 relative z-20">
                  <div className={`w-16 h-16 bg-linear-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Card එකේ click එක වැලැක්වීමට
                        className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:scale-110 transition-transform relative z-30"
                      >
                        <Github size={20} className="text-slate-700 dark:text-white" />
                      </a>
                    )}
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} 
                      className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:scale-110 transition-transform text-blue-500 relative z-30"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Bottom Row: Text Content */}
                <div className="space-y-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>
                </div>

                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-10' : 'opacity-0'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;