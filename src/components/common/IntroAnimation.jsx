import { useState, useEffect } from "react";

// Check sessionStorage synchronously on initial evaluation
function checkShouldShowIntro() {
  if (typeof window === "undefined") return false;
  try {
    const seen = sessionStorage.getItem("portfolio-intro-seen");
    if (seen === "true") return false;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      sessionStorage.setItem("portfolio-intro-seen", "true");
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
}

export default function IntroAnimation() {
  const [shouldShow, setShouldShow] = useState(checkShouldShowIntro);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!shouldShow) return;

    // Record in sessionStorage so it never runs again in this browser session
    try {
      sessionStorage.setItem("portfolio-intro-seen", "true");
    } catch (e) {
      // Ignore storage errors
    }

    // Begin smooth fade-out at 750ms
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 750);

    // Completely unmount and remove overlay at 1000ms
    const removeTimer = setTimeout(() => {
      setShouldShow(false);
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [shouldShow]);

  // Completely unmounted from DOM
  if (!shouldShow) {
    return null;
  }

  return (
    <aside
      aria-label="Welcome screen"
      className={`fixed inset-0 z-[100] bg-[#08090D] flex flex-col items-center justify-center pointer-events-none select-none transition-opacity duration-250 ease-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle ambient gradient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-600/10 blur-[90px] pointer-events-none"></div>

      <div className="text-center px-4 space-y-3 relative z-10">
        {/* Name: NITIN SHARMA */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#F5F7FA] tracking-tight animate-intro-1">
          NITIN SHARMA
        </h1>

        {/* Role: Full-Stack MERN Developer */}
        <p className="text-base sm:text-xl font-medium bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent font-heading animate-intro-2">
          Full-Stack MERN Developer
        </p>

        {/* Tagline: Code. Build. Deploy. */}
        <div className="pt-2 animate-intro-3">
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#9CA3AF]">
            Code<span className="text-blue-500">.</span> Build<span className="text-indigo-500">.</span> Deploy<span className="text-violet-500">.</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
