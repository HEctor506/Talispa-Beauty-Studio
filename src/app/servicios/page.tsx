import type { Metadata } from "next";
import { CategoryNav } from "@/components/pages/servicios/CategoryNav";
import { CategorySection } from "@/components/pages/servicios/CategorySection";
import { ServiciosHero } from "@/components/pages/servicios/ServiciosHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { catalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Servicios | Talispa Beauty Studio",
  description: "Catálogo completo de precios: manos, pies, uñas artificiales, nail art, retiros y tratamientos.",
};

export default function ServiciosPage() {
  return (
    <>
      <ServiciosHero />
      <CategoryNav />
      <div className="mx-auto max-w-[1100px] px-6 pt-7 pb-2 md:px-8">
        {catalog.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>
      <div className="mx-auto max-w-[1100px] px-6 pt-3.5 pb-24 text-center md:px-8">
        <p className="mb-5 text-sm text-ink-text-light">
          ¿Lista para tu cita? Escribinos y reservamos juntas. 💗
        </p>
        <div className="flex justify-center">
          <WhatsAppButton variant="cta" label="Reservar por WhatsApp" />
        </div>
      </div>
    </>
  );
}
