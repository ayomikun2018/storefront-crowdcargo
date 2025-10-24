"use client";
import { useEffect, useRef, useState } from "react";

const useIsFlexWrapped = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkWrap = () => {
      const firstTop = container.children[0]?.getBoundingClientRect().top;
      for (const child of container.children) {
        if ((child as HTMLElement).getBoundingClientRect().top !== firstTop) {
          setIsWrapped(true);
          return;
        }
      }
      setIsWrapped(false);
    };

    checkWrap();
    window.addEventListener("resize", checkWrap);
    containerRef.current?.addEventListener("resize", checkWrap);
    return () => {
      window.removeEventListener("resize", checkWrap);
      containerRef.current?.removeEventListener("resize", checkWrap);
    };
  }, []);

  return { isWrapped, containerRef };
};

export default useIsFlexWrapped;
