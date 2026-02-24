// hooks/useBreakpoint.ts
"use client";

import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;

      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    };

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
    isReady: breakpoint !== null,
  };
};
