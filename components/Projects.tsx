"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layout, BarChart3, Award, GraduationCap } from "lucide-react";
import { useState, useRef, useMemo } from "react";

const GITHUB_PROFILE = "https://github.com/Ishan123888";

const PROJECTS = [
  {
    title: "Gowigo - Agri Tech Platform",
    description: "A comprehensive React Native mobile application for farmers. Features real-time marketplace, PayHere payment integration, and a WordPress-based landing page.",
    tags: ["React Native", "Node.js", "WordPress", "PayHere API"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    size: "large",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    icon: "🚜",
  },
  {
    title: "Smart Campus System",
    description: "A full-stack Smart Campus platform built with React and Spring Boot REST API. Features student portal, resource booking, event management, and real-time notifications — with MongoDB Atlas cloud database and Git version control.",
    tags: ["React", "Spring Boot", "REST API", "MongoDB Atlas", "Git"],
    github: GITHUB_PROFILE,
    demo: "https://it3030-paf-2026-smart-campus-group.vercel.app/",
    size: "large",
    gradient: "from-indigo-500 via-purple-500 to-violet-500",
    icon: "🎓",
  },
  {
    title: "Astro Services - Jyothishya Web",
    description: "A professional astrology service platform developed for a specialized practitioner. Features a modern, spiritual aesthetic with localized content and service showcases.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: GITHUB_PROFILE,
    demo: "https://ravindrapiyasena123-ui.github.io/jyothishya/",
    size: "small",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    icon: "🕉️",
  },
  {
    title: "Design & Data Analytics",
    description: "Visualizing business intelligence using Power BI and advanced Excel. Includes UI/UX prototypes designed in Figma for medical and e-commerce systems.",
    tags: ["Figma", "Power BI", "Advanced Excel", "UI/UX"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    size: "small",
    gradient: "from-blue-400 to-indigo-600",
    icon: <BarChart3 className="w-10 h-10" />,
  },
  {
    title: "MediCura Medical System",
    description: "Full-stack Billing & Payment module. Built with the MERN stack to handle automated invoicing and expense tracking with secure data management.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    size: "small",
    gradient: "from-blue-500 to-cyan-500",
    icon: "💊",
  },
  {
    title: "MindEase Mobile App",
    description: "Mental health tracker with a 3D Neumorphic UI. Developed using Kotlin and Android Studio with deep attention to color theory and relaxing soundscapes.",
    tags: ["Kotlin", "C++", "Android Studio", "Firebase"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    size: "small",
    gradient: "from-purple-500 to-pink-500",
    icon: "🧘",
  },
  {
    title: "Reina Fashion Store",
    description: "Modern e-commerce experience for ladies' footwear. Featuring secure Google Authentication, real-time inventory management with Supabase, and a high-performance Next.js frontend.",
    tags: ["Next.js", "Supabase", "Tailored Auth", "PostgreSQL"],
    github: GITHUB_PROFILE,
    demo: "https://reina-store.vercel.app/",
    size: "small",
    gradient: "from-pink-500 to-rose-500",
    icon: "👠",
  },
  {
    title: "Employee Management System",
    description: "Desktop application with role-based login and internationalization (English/Sinhala). Generates PDF salary slips and manages corporate HR CRUD operations.",
    tags: ["Java Swing", "MySQL", "i18n", "JasperReports"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    size: "small",
    gradient: "from-indigo-500 to-blue-600",
    icon: "👨‍💼",
  },
  {
    title: "Transport Management System",
    description: "Web application using MVC pattern for logistics. Handles Driver Management and secure role-based access control using Tomcat.",
    tags: ["JSP", "Servlets", "JDBC", "MySQL"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    size: "small",
    gradient: "from-slate-500 to-slate-800",
    icon: "🚛",
  },
  {
    title: "Algorithm & Logic Lab",
    description: "A collection of fundamental system tools and data structure implementations. Explores core computing concepts and performance optimization.",
    tags: ["C", "C++", "Java", "Data Structures"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    size: "small",
    gradient: "from-slate-600 to-slate-900",
    icon: <Layout className="w-10 h-10" />,
  },
];

const CERTIFICATES = [
  { title: "Web Development", issuer: "University of Moratuwa" },
  { title: "Front-End Development", issuer: "University of Moratuwa" },
  { title: "Python Programming", issuer: "University of Moratuwa" },
  { title: "AI & Machine Learning (Stage I & II)", issuer: "SLIIT" },
  { title: "Java Programming", issuer: "SLIIT / Alison" },
];

const generateParticlePositions = () =>
  Array.from({ length: 5 }, (_, i) => ({
    x: (i * 23 + 17) % 100,
    y: (i * 37 + 29) % 100,
  }));

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const particlePositions = useMemo(() => generateParticlePositions(), []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleNavigate = (url: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onClick={() => handleNavigate(project.demo)}
      className={`group relative cursor-pointer ${project.size === "large" ? "md:col-span-2" : ""}`}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative h-full">
        <div
          className={`absolute -inset-1 bg-linear-to-r ${project.gradient} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        <div className="relative h-full min-h-100 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start mb-8">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-2xl bg-linear-to-br ${project.gradient}`}
              >
                {project.icon}
              </div>
              <div className="flex gap-3">
                {project.github !== "#" && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => handleNavigate(project.github, e)}
                    className="p-4 bg-white/10 rounded-2xl border border-white/20 text-white hover:bg-white/20 transition-colors"
                  >
                    <Github size={20} />
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => handleNavigate(project.demo, e)}
                  className={`p-4 bg-linear-to-br ${project.gradient} rounded-2xl border border-white/20 text-white`}
                >
                  <ExternalLink size={20} />
                </motion.button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-black text-white">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">{project.description}</p>
              <div className="flex items-center gap-2 text-white font-bold pt-2 group/link">
                <span className="text-sm uppercase tracking-widest">View Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>

            {isHovered && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particlePositions.map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], x: `${pos.x}%`, y: `${pos.y}%` }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    className={`absolute w-1.5 h-1.5 rounded-full bg-linear-to-r ${project.gradient}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Selected Works</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
              PROJECTS<span className="text-blue-500">.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-right leading-relaxed">
            From MERN stack applications to Data Analytics with Power BI and Mobile Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-20 border-t border-white/10"
        >
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-blue-500 w-8 h-8" />
            <h3 className="text-4xl font-black text-white uppercase tracking-tight">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/5 group transition-colors hover:bg-white/5"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                  <p className="text-slate-500 text-xs">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;