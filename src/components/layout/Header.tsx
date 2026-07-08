"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type NavItem = { label: string; anchor: string } | { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Filosofía", anchor: "filosofia" },
  { label: "Servicios", href: "/servicios" },
  { label: "Experiencia", anchor: "experiencia" },
  { label: "Contacto", anchor: "contacto" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const resolveHref = (item: NavItem) =>
    "href" in item ? item.href : isHome ? `#${item.anchor}` : `/#${item.anchor}`;

  const isActive = (item: NavItem) => "href" in item && pathname === item.href;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_4px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between gap-5 px-6 md:h-20 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-talispa.png"
            alt="Talispa Beauty Studio"
            width={160}
            height={87}
            className="h-[100px] w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={resolveHref(item)}
              className={`text-sm font-medium tracking-[0.02em] transition-colors hover:text-rose ${
                isActive(item) ? "text-rose" : "text-ink-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppButton variant="nav" label="Reservar" className="ml-40" />
        </nav>

        <button
          type="button"
          aria-label="Menú"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 rounded-full bg-ink-text" />
          <span className="h-0.5 w-6 rounded-full bg-ink-text" />
          <span className="h-0.5 w-6 rounded-full bg-ink-text" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 overflow-hidden md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center bg-cream transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-7 text-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={resolveHref(item)}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-3xl font-light text-ink-text transition-colors hover:text-rose"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <WhatsAppButton variant="cta" label="Reservar por WhatsApp" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
