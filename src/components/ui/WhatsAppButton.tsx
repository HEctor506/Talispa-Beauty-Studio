"use client";

import { useEffect, useState } from "react";
import { buildWhatsappHref } from "@/lib/config";

type WhatsAppButtonVariant = "floating" | "nav" | "cta";

const VARIANT_CLASSES: Record<WhatsAppButtonVariant, string> = {
  floating:
    "fixed right-6 bottom-6 z-[60] gap-2.5 rounded-full bg-rose px-5 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_26px_rgba(201,116,138,0.34)] animate-pulse-wa transition-colors hover:bg-rose-deep",
  nav: "gap-2 rounded-full bg-rose px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(201,116,138,0.35)] transition-colors hover:bg-rose-deep",
  cta: "gap-2.5 rounded-full bg-rose px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(201,116,138,0.28)] transition-colors hover:bg-rose-deep",
};

export function WhatsAppButton({
  variant = "cta",
  label = "Reservar por WhatsApp",
  message,
  className = "",
}: {
  variant?: WhatsAppButtonVariant;
  label?: string;
  message?: string;
  className?: string;
}) {
  const [visible, setVisible] = useState(variant !== "floating");

  useEffect(() => {
    if (variant !== "floating") return;

    const hero = document.getElementById("hero");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      if (!mobileQuery.matches || !hero) {
        setVisible(true);
        return;
      }
      observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
        threshold: 0,
      });
      observer.observe(hero);
    };

    setup();
    mobileQuery.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      mobileQuery.removeEventListener("change", setup);
    };
  }, [variant]);

  if (variant === "floating" && !visible) return null;

  return (
    <a
      href={buildWhatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center no-underline ${VARIANT_CLASSES[variant]} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 5.6C4 4.7 4.7 4 5.6 4h12.8c.9 0 1.6.7 1.6 1.6v8.8c0 .9-.7 1.6-1.6 1.6H9.4L5 19.6V16h-.4C3.7 16 4 15.3 4 14.4V5.6z" />
      </svg>
      {label}
    </a>
  );
}
