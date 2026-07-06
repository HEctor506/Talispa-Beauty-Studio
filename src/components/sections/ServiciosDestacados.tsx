import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { catalog } from "@/lib/catalog";

// 5 de las 7 categorías del catálogo — se dejan afuera Retiros y Tratamientos (más utilitarias, menos "vitrina").
const FEATURED_IDS = ["manos", "semi", "artificiales", "nailart", "pies"];

const ICONS: Record<string, string> = {
  manos: "💅",
  semi: "✨",
  artificiales: "💎",
  nailart: "🎨",
  pies: "👣",
};

const featured = FEATURED_IDS.map((id) => catalog.find((c) => c.id === id)).filter(
  (c): c is NonNullable<typeof c> => Boolean(c)
);

export function ServiciosDestacados() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="mx-auto max-w-[560px] text-center">
          <SectionEyebrow light>Lo que ofrecemos</SectionEyebrow>
          <h2 className="font-heading mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-white">
            Nuestros <em className="text-rose-light italic">Servicios</em>
          </h2>
          <p className="mt-4 text-base text-white/50">
            Cada tratamiento está pensado para realzar tus manos y pies con la más alta calidad.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/servicios#cat-${cat.id}`}
              className="group overflow-hidden rounded-[20px] border border-white/[0.06] bg-ink-2 no-underline transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="flex h-[200px] items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: "#3a2530",
                  backgroundImage:
                    "repeating-linear-gradient(135deg, transparent 0 10px, rgba(232,168,184,.08) 10px 11px)",
                }}
              >
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-rose-light transition-transform duration-500 group-hover:scale-105">
                  {cat.name.toLowerCase()}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-2.5 text-[1.8rem]">{ICONS[cat.id]}</div>
                <h3 className="font-heading text-xl font-normal text-white">{cat.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{cat.blurb}.</p>
                {i === 0 && (
                  <span className="mt-3 inline-block rounded-full bg-gradient-to-br from-rose to-rose-deep px-3 py-1 text-xs tracking-[0.06em] text-white">
                    Más popular
                  </span>
                )}
              </div>
            </Link>
          ))}

          <Link
            href="/servicios"
            className="flex flex-col items-center justify-center rounded-[20px] p-8 text-center no-underline transition-transform duration-300 hover:-translate-y-2"
            style={{ background: "linear-gradient(145deg, var(--color-rose-deep), var(--color-ink))" }}
          >
            <div className="mb-2.5 text-[1.8rem]">📖</div>
            <h3 className="font-heading text-2xl font-normal text-white">Carta completa</h3>
            <p className="mt-2 mb-5 text-sm text-white/75">
              Precios y detalle de las 7 categorías de servicios.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium text-white">
              Ver carta completa →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
