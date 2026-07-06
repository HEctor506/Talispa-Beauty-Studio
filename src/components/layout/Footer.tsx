import Image from "next/image";
import Link from "next/link";
import { buildWhatsappHref, siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Image
            src="/logo-talispa.png"
            alt="Talispa Beauty Studio"
            width={160}
            height={87}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/45">
            Belleza para tus manos y pies, con la dedicación que merecés.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold tracking-[0.16em] text-white/45 uppercase">Navegación</div>
          <div className="mt-3.5 flex flex-col gap-2.5 text-sm">
            <Link href="/#filosofia" className="text-white/80 transition-colors hover:text-rose-light">
              Filosofía
            </Link>
            <Link href="/servicios" className="text-white/80 transition-colors hover:text-rose-light">
              Servicios
            </Link>
            <Link href="/#experiencia" className="text-white/80 transition-colors hover:text-rose-light">
              Experiencia
            </Link>
            <a
              href={buildWhatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose-light"
            >
              Reservar por WhatsApp →
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold tracking-[0.16em] text-white/45 uppercase">Contacto</div>
          <div className="mt-3.5 flex flex-col gap-2 text-sm text-white/45">
            <span>{siteConfig.phoneDisplay}</span>
            <span>{siteConfig.address}</span>
            {siteConfig.hours.map((h) => (
              <span key={h.day}>
                {h.day} · {h.time}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-6 py-5 text-xs text-white/30 md:px-8">
          <span>© {new Date().getFullYear()} Talispa Beauty Studio</span>
          <Link href="/" className="transition-colors hover:text-rose-light">
            Volver al inicio
          </Link>
        </div>
      </div>
    </footer>
  );
}
