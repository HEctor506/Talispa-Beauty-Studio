import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { catalog } from "@/lib/catalog";

const ICONS: Record<string, string> = {
  manos: "💅",
  combos: "🎁",
  pies: "👣",
  tratamientos: "🧖‍♀️",
  retiros: "🧼",
};

export function ServiciosDestacados() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="mx-auto max-w-[560px] text-center">
          <SectionEyebrow>Lo que ofrecemos</SectionEyebrow>
          <h2 className="font-heading mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-ink-text">
            Nuestros <em className="text-rose italic">Servicios</em>
          </h2>
          <p className="mt-4 text-base text-ink-text-light">
            Cada tratamiento está pensado para realzar tus manos y pies con la más alta calidad.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((cat) => (
            <Link
              key={cat.id}
              href={`/servicios#cat-${cat.id}`}
              className="group flex flex-col rounded-2xl bg-white p-7 no-underline shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-light/25 text-2xl">
                {ICONS[cat.id]}
              </span>
              <h3 className="font-heading mt-5 text-xl font-normal text-ink-text">{cat.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-text-light">{cat.blurb}.</p>
              <span className="mt-6 inline-flex w-fit items-center justify-center rounded-full border-2 border-rose px-5 py-2.5 text-sm font-medium text-rose transition-colors group-hover:bg-rose group-hover:text-white">
                Ver más →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
