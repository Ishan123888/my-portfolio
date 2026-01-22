"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from "./ThemeToggle"; // ThemeToggle Component එක මෙතැනින් Import වේ

const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#contact", key: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modern Red-Brown Color Palette
  const accentGradient = "from-[#8B0000] via-[#5D2906] to-[#4A1E1E]"; 
  const hoverGradient = "from-[#A52A2A] to-[#5D2906]";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            animate={{
              scale: scrolled ? 0.98 : 1,
            }}
            className={`relative flex items-center justify-between px-6 md:px-8 py-4 rounded-3xl transition-all duration-500 ${
              scrolled
                ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-red-900/10 dark:border-red-500/10 shadow-[0_8px_32px_rgba(139,0,0,0.15)]'
                : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/10'
            }`}
          >
            {/* Logo Section */}
            <Link href="/" className="relative group">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <div className={`relative w-10 h-10 bg-linear-to-br ${accentGradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Sparkles className="w-5 h-5 text-white/90" />
                </div>
                <span className="text-2xl font-black tracking-tighter bg-linear-to-r from-[#5D2906] to-[#8B0000] dark:from-white dark:to-red-200 bg-clip-text text-transparent">
                  Ishan Ekanayaka
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-slate-200/30 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl px-2 py-2 border border-red-900/5 dark:border-white/5">
              {NAV_LINKS.map((link) => (
                <Link key={link.key} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSection(link.key)}
                    className={`relative px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                      activeSection === link.key
                        ? 'text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:text-[#8B0000]'
                    }`}
                  >
                    {activeSection === link.key && (
                      <motion.div
                        layoutId="activeSection"
                        className={`absolute inset-0 bg-linear-to-r ${accentGradient} rounded-xl shadow-md`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Side: Toggle + CTA */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              <div className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group px-6 py-3 bg-linear-to-r ${accentGradient} text-white text-sm rounded-xl font-bold shadow-lg overflow-hidden transition-all`}
                >
                  <span className="relative z-10">Let&apos;s Talk</span>
                  <div className={`absolute inset-0 bg-linear-to-r ${hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.button>
              </div>

              {/* Mobile Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-red-950/30 text-red-900 dark:text-red-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-red-950/20 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 bg-white/95 dark:bg-[#1A0B0B] backdrop-blur-2xl z-50 md:hidden border-l border-red-900/10 shadow-2xl"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                <div className="space-y-3">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-6 py-4 rounded-2xl text-lg font-bold transition-all text-slate-900 dark:text-red-50 hover:bg-linear-to-r hover:${hoverGradient} hover:text-white`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/50 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-500">Switch Theme</span>
                    <ThemeToggle />
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`w-full px-6 py-4 bg-linear-to-r ${accentGradient} text-white rounded-2xl font-bold shadow-lg`}
                  >
                    Let&apos;s Talk
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;