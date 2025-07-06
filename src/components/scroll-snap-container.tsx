"use client";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface ScrollSnapContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollSnapContainer({
  children,
  className = "",
}: ScrollSnapContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sections = container.querySelectorAll(".scroll-snap-section");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (
          rect.top <= containerRect.top + 100 &&
          rect.bottom > containerRect.top + 100
        ) {
          // Section is in view
          section.classList.add("in-view");
        } else {
          section.classList.remove("in-view");
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`scroll-snap-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
