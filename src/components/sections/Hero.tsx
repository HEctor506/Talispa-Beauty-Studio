"use client";

import { useEffect, useRef } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { drawScrubFrame, preloadFrames, type ScrubFrame } from "@/lib/scrub";

// TODO: reemplazar por fotos reales del estudio en /public/images (ver design.md)
const FRAMES: ScrubFrame[] = [
  { src: "/images/image1.png", label: "interior del estudio" },
  { src: "/images/image2.jpg", label: "detalle nail art" },
];


export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = preloadFrames(FRAMES);
    let currentFrame = 0;

    const draw = (index: number) => drawScrubFrame(ctx, canvas, images[index], FRAMES[index], index);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw(currentFrame);
    };

    const onScroll = () => {
      const heroH = window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / heroH, 0), 1);
      const frameIdx = Math.min(Math.floor(progress * FRAMES.length), FRAMES.length - 1);
      if (frameIdx !== currentFrame) {
        currentFrame = frameIdx;
        draw(currentFrame);
      }
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
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(32,42,54,.65) 0%, rgba(32,42,54,.3) 60%, rgba(32,42,54,.55) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[780px] flex-col items-center justify-center px-6 text-center animate-float-in">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-rose-light uppercase">
          Centro estético de uñas
        </p>
        <h1 className="font-heading text-[clamp(3rem,8vw,5rem)] leading-[1.1] font-light text-white">
          Arte en tus manos, <em className="text-rose-light italic">perfección</em> en cada detalle.
        </h1>
        <p className="mt-5 mb-10 max-w-[42ch] text-sm tracking-[0.05em] text-white/70">
          Experimentá el lujo del cuidado personal en un ambiente diseñado para tu relajación y belleza.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <WhatsAppButton variant="cta" label="Agendar por WhatsApp" />
          <a
            href="/servicios"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-4 text-[15px] font-medium text-white no-underline transition-colors hover:bg-white/15"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
