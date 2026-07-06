import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { siteConfig } from "@/lib/config";

export function Visita() {
  return (
    <section id="contacto" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal direction="left">
          <SectionEyebrow>Visitanos</SectionEyebrow>
          <h2 className="font-heading mt-4 text-[2.3rem] leading-[1.15] font-light text-ink-text">
            Encuentra tu <em className="text-rose italic">momento</em>
          </h2>

          <div className="mt-7 flex flex-col gap-5">
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-rose uppercase">Dirección</div>
              <div className="mt-1.5 text-base leading-relaxed text-ink-text">{siteConfig.address}</div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-rose uppercase">Horarios</div>
              <div className="mt-2 flex max-w-[320px] flex-col gap-1.5">
                {siteConfig.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-dotted border-black/10 py-0.5 text-[15px] text-ink-text"
                  >
                    <span>{h.day}</span>
                    <span className="text-ink-text-light">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-rose uppercase">WhatsApp</div>
              <div className="mt-1.5 text-base text-ink-text">{siteConfig.phoneDisplay}</div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div
            className="flex aspect-[16/12] items-center justify-center rounded-2xl border border-black/5 shadow-[0_18px_44px_rgba(0,0,0,0.06)]"
            style={{
              backgroundColor: "#fde9d7",
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 13px, rgba(201,116,138,.08) 13px 14px)",
            }}
          >
            <span className="rounded-full bg-white/70 px-3.5 py-1.5 font-mono text-xs tracking-[0.1em] text-rose-deep">
              mapa · ubicación
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
