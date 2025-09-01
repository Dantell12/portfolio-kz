// hooks/useSectionTracking.js
import { useEffect, useRef } from "react";
import { trackSectionView } from "../analytics";

export const useSectionTracking = (sectionName, options = {}) => {
  const elementRef = useRef(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Solo trackear cuando la sección esté 50% visible y no se haya trackeado antes
        if (entry.isIntersecting && !hasTracked.current) {
          trackSectionView(sectionName);
          hasTracked.current = true;
        }
      },
      {
        threshold: options.threshold || 0.5,
        rootMargin: options.rootMargin || "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, options.threshold, options.rootMargin]);

  return elementRef;
};
