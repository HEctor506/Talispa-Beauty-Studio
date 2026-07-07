"use client";

import { useEffect, useRef, useState } from "react";
import { drawScrubFrame, preloadFrames, type ScrubFrame } from "@/lib/scrub";

// Copy tomado tal cual de las 2 primeras slides de Martina (martina-web/index.html #experiencia).
const SLIDES = [
  { eyebrow: "La experiencia", title: "Un espacio diseñado ", em: "para ti" },
  { eyebrow: "Nuestro ambiente", title: "Elegancia y ", em: "relajación", after: " en cada detalle" },
];

// TODO: reemplazar por fotos reales del estudio en /public/images (ver design.md)
const FRAMES: ScrubFrame[] = [
  { src: "/images/image2.jpg", label: "ambiente del estudio" }, 
  { src: "/images/image3.png", label: "detalle de manicura" }];

export function Experiencia() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let currentFrame = 0;

    const draw = (index: number) => drawScrubFrame(ctx, canvas, images[index], FRAMES[index], index);

    const images = preloadFrames(FRAMES, (index) => {
      if (index === currentFrame) draw(index);
    });

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw(currentFrame);
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollRange = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollRange, 0), 1);

      const frameIdx = Math.min(Math.floor(progress * FRAMES.length), FRAMES.length - 1);
      if (frameIdx !== currentFrame) {
        currentFrame = frameIdx;
        draw(currentFrame);
      }

      const slideIdx = Math.min(Math.floor(progress * SLIDES.length), SLIDES.length - 1);
      setActiveSlide(slideIdx);
    };

    resize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="experiencia" ref={sectionRef} className="relative h-[240vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(32,42,54,.7) 0%, rgba(32,42,54,.3) 100%)",
          }}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.eyebrow}
              className={`absolute text-center transition-all duration-500 ease-out ${
                i === activeSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="mb-3 block text-xs tracking-[0.2em] text-rose-light uppercase">
                {slide.eyebrow}
              </span>
              <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[1.2] font-light text-white">
                {slide.title}
                <em className="text-rose-light italic">{slide.em}</em>
                {slide.after ?? ""}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
