"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ESLint error එක මගහැරීමට සහ Best practice එකක් ලෙස
  // Component එක mount වූ පසුව පමණක් setMounted(true) කරමු
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    return () => clearTimeout(timeout);
  }, []);

  // Hydration mismatch එක වළක්වා ගැනීමට component එක load වන තෙක් placeholder එකක් පෙන්වමු
  if (!mounted) {
    return <div className="p-2 w-9 h-9" />; 
  }

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-110 active:scale-90 transition-all cursor-pointer border border-transparent dark:border-slate-700 shadow-sm"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-slate-700" />
      )}
    </button>
  );
}