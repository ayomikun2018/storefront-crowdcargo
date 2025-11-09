"use client";
import { useEffect, useState } from "react";

function useFooterIntersect() {
  const [intersectionData, setIntersectionData] = useState({
    isIntersecting: false,
    ratio: 0,
    pixelsVisible: 0,
  });

  useEffect(() => {
    const footerRef = document.getElementById("footer");

    const observer = new IntersectionObserver(
      ([entry]) =>
        setIntersectionData({
          isIntersecting: entry.isIntersecting,
          ratio: entry.intersectionRatio,
          pixelsVisible: entry.intersectionRect.height, // visible pixels in viewport
        }),
      {
        root: null, // viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(footerRef!);

    return () => observer.disconnect();
  }, []);

  return { intersectionData };
}
export default useFooterIntersect;
