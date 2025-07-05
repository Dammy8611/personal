import { useEffect, useRef } from "react";

interface UseScrollSnapOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollSnap(options: UseScrollSnapOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = "0px" } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");

            // Trigger animations for elements within this section
            const animatedElements =
              entry.target.querySelectorAll(".animate-on-scroll");
            animatedElements.forEach((el) => {
              el.classList.add("animate-spring-slide-up");
            });
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold,
        rootMargin,
        root: container,
      }
    );

    const sections = container.querySelectorAll(".scroll-snap-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [threshold, rootMargin]);

  return containerRef;
}
