import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { siteConfig } from "@/lib/config";

// Coordenadas del listing real de Talispa Beauty Studio en Google Maps
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Talispa+Beauty+Studio,-2.1561922,-79.8906202&z=17&output=embed";

const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/place/Talispa+Beauty+Studio/@0,0,17z/data=!4m14!1m7!3m6!1s0x902d6dbbaa8bac13:0x4ce038459380fbf6!2sTalispa+Beauty+Studio!8m2!3d-2.1561922!4d-79.8906202!16s%2Fg%2F11zgqdfx9x!3m5!1s0x902d6dbbaa8bac13:0x4ce038459380fbf6!8m2!3d-2.1561922!4d-79.8906202!16s%2Fg%2F11zgqdfx9x";

export function Visita() {
  return (
    <section id="contacto" className="overflow-x-hidden bg-cream py-24 md:py-32">
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
              <div className="text-xs font-semibold tracking-[0.16em] text-rose uppercase">Celular</div>
              <a
                href={`tel:+${siteConfig.whatsappNumber}`}
                className="mt-1.5 block text-base text-ink-text transition-colors hover:text-rose"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center justify-center gap-2 rounded-full border-2 border-rose px-6 py-3 text-sm font-semibold text-rose transition-colors hover:bg-rose hover:text-white"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Cómo llegar
          </a>
        </Reveal>

        <Reveal direction="right">
          <div className="aspect-[16/12] overflow-hidden rounded-2xl border border-black/5 shadow-[0_18px_44px_rgba(0,0,0,0.06)]">
            <iframe
              src={MAP_EMBED_URL}
              title="Ubicación de Talispa Beauty Studio en Google Maps"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
