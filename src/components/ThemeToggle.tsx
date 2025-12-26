"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      aria-label="Toggle light and dark mode"
    >
      <span className="text-base" aria-hidden="true">
        {isDark ? "🌙" : "☀️"}
      </span>
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
