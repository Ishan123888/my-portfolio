"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // FIX: Using requestAnimationFrame avoids the synchronous setState 
    // cascading render warning while ensuring hydration completes.
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Use a placeholder with the same dimensions to prevent layout shift
  if (!mounted) return <div className="w-20 h-10 rounded-full bg-slate-200/20 dark:bg-slate-900/20" />;

  const isDark = theme === "dark";

  return (
    <div className="relative group">
      {/* Dynamic Background Glow */}
      <div className={`absolute -inset-1 rounded-full blur-md opacity-40 transition-all duration-500 group-hover:opacity-70 ${
        isDark ? "bg-purple-600" : "bg-yellow-400"
      }`} />

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-20 h-10 rounded-full p-1 transition-all duration-500 bg-slate-200/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-[inner_0_2px_4px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer"
        aria-label="Toggle Theme"
      >
        {/* Physical 3D Thumb Switch */}
        <motion.div
          animate={{ x: isDark ? 40 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-[0_4px_10px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center z-10"
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              >
                <Moon size={16} className="text-purple-400 fill-purple-400/20" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              >
                <Sun size={16} className="text-yellow-500 fill-yellow-500/20" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Interior Decorations */}
        <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
          <Sparkles 
            size={12} 
            className={`transition-opacity duration-500 ${isDark ? "opacity-30 text-blue-200" : "opacity-0"}`} 
          />
          <div 
            className={`w-1 h-1 rounded-full bg-yellow-500 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-30"}`} 
          />
        </div>
      </button>

      {/* Modern Floating Label */}
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-1 pointer-events-none border border-slate-700 shadow-xl uppercase tracking-widest">
        {isDark ? "Light" : "Dark"}
      </span>
    </div>
  );
}