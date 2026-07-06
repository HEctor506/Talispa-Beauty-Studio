import Link from "next/link";

export function ServiciosHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(60% 90% at 18% 0%, rgba(232,168,184,.45) 0%, rgba(232,168,184,0) 60%), radial-gradient(54% 80% at 95% 10%, rgba(232,213,163,.5) 0%, rgba(232,213,163,0) 62%), #fdf8f4",
      }}
    >
      <div className="animate-float-in mx-auto max-w-[1200px] px-6 py-16 text-center md:px-8 md:py-24">
        <div className="mb-4.5 flex items-center justify-center gap-2 text-[12.5px] text-ink-text-light">
          <Link href="/" className="text-ink-text-light no-underline hover:text-rose">
            Inicio
          </Link>
          <span className="text-rose-light">/</span>
          <span className="font-semibold text-rose">Servicios</span>
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.26em] text-rose uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-rose" />
          Carta completa
        </span>
        <h1 className="font-heading mt-4 text-[clamp(2.5rem,7vw,3.4rem)] leading-[1.05] font-light text-ink-text">
          Nuestro Menú de Lujo
        </h1>
        <p className="mx-auto mt-4 max-w-[50ch] text-[17px] leading-relaxed text-ink-text-light">
          Precio por servicio. Cuando elijas el tuyo, reservá tu cita por WhatsApp — sin formularios,
          directo con nosotras.
        </p>
      </div>
    </section>
  );
}
