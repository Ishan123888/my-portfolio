"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#contact", key: "contact", label: "Contact" },
];

// --- Theme Toggle Component ---
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const initializeTheme = () => {
      const theme = localStorage.getItem('theme');
      const isDarkMode = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setIsDark(isDarkMode);
      if (isDarkMode) document.documentElement.classList.add('dark');
      setMounted(true);
    };
    initializeTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-3 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-white/10 transition-all bg-white/10 dark:bg-slate-800/50"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div key="sun" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
            <Sun size={20} className="text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
            <Moon size={20} className="text-slate-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// --- Main Navbar Component ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isImageOpen, setIsImageOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageUrl = "https://i.imgur.com/c3NIKZk.jpg";

  return (
    <>
      <motion.nav
        style={{ opacity: navOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div animate={{ scale: scrolled ? 0.98 : 1, y: scrolled ? 4 : 0 }} className="relative">
            <div className={`absolute -inset-2 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-4xl blur-2xl transition-opacity duration-500 ${scrolled ? 'opacity-15' : 'opacity-0'}`} />
            
            <div
              className={`relative flex items-center justify-between px-6 py-4 rounded-[1.75rem] border transition-all duration-500 ${
                scrolled ? 'bg-white/80 dark:bg-slate-900/80 border-white/20 dark:border-white/10 shadow-2xl' : 'bg-white/40 dark:bg-transparent border-white/10'
              }`}
              style={{ backdropFilter: "blur(20px)" }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  layoutId="profile-avatar"
                  onClick={() => setIsImageOpen(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-lg cursor-pointer relative z-10"
                >
                  <Image src={imageUrl} alt="Ishan" fill className="object-cover" />
                </motion.div>
                <Link href="/">
                  <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block">
                    Ishan Ekanayaka
                  </span>
                </Link>
              </div>

              <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-2xl border border-black/5 dark:border-white/5">
                {NAV_LINKS.map((link) => (
                  <Link key={link.key} href={link.href}>
                    <motion.div
                      onClick={() => setActiveSection(link.key)}
                      className={`relative px-6 py-2.5 rounded-xl font-bold text-sm cursor-pointer transition-all ${
                        activeSection === link.key ? 'text-white' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {activeSection === link.key && (
                        <motion.div layoutId="activeSection" className="absolute inset-0 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 -z-10 shadow-md" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                      )}
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hidden md:block px-6 py-3 rounded-2xl font-bold text-white text-sm bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25"
                >
                  Let&apos;s Talk
                </motion.button>
                <motion.button whileTap={{ scale: 0.9 }} className="md:hidden p-3 rounded-2xl bg-black/5 dark:bg-white/10 dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Profile Image Lightbox */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setIsImageOpen(false)}
          >
            <motion.div
              layoutId="profile-avatar"
              className="relative w-full max-w-100 aspect-square rounded-3xl overflow-hidden border-4 border-indigo-500/50 shadow-2xl"
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image src={imageUrl} alt="Ishan Enlarged" fill className="object-cover" />
            </motion.div>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="mt-8 px-8 py-3 bg-white dark:bg-slate-800 text-black dark:text-white rounded-2xl font-bold shadow-xl flex items-center gap-2"
              onClick={() => setIsImageOpen(false)}
            >
              <X size={20} /> Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-md z-60 md:hidden" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm z-70 bg-white dark:bg-slate-900 shadow-2xl md:hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                 <div className="w-12 h-12 rounded-xl overflow-hidden border border-indigo-500 relative">
                    <Image src={imageUrl} alt="Logo" fill className="object-cover" />
                 </div>
                 <button onClick={() => setMobileMenuOpen(false)} className="p-2 dark:text-white font-bold"><X /></button>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link key={link.key} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 dark:text-slate-100 hover:text-indigo-600 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800">
                <button onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold text-lg">
                  Let&apos;s Talk
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;