"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  direction = "left",
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = direction === "left" ? "-translate-x-10" : "translate-x-10";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-x-0 opacity-100" : `${hiddenTransform} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
