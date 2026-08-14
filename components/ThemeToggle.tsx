"use client";

import { useEffect, useState } from "react";
import { THEME_KEY, type Theme } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle() {
  // Undefined until mounted — the real value lives on <html> (set by the
  // pre-paint script in layout), so reading it during render would mismatch.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) || "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* private mode — the choice just won't persist */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
