"use client";

import { useEffect } from "react";

/**
 * Mount once. Adds `.in` to every `.reveal` element as it scrolls into view,
 * and force-shows everything on print, tab-hide, or after a 1.2s safety net so
 * content can never be stuck invisible.
 */
export default function Reveal() {
  useEffect(() => {
    const all = () => document.querySelectorAll<HTMLElement>(".reveal");
    const showAll = () => all().forEach((el) => el.classList.add("in"));

    if (document.hidden || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    all().forEach((el) => io.observe(el));

    const onHide = () => {
      if (document.hidden) showAll();
    };
    const timer = window.setTimeout(showAll, 1200);
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("beforeprint", showAll);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("beforeprint", showAll);
    };
  }, []);

  return null;
}
