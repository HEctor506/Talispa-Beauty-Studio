import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-32 text-center md:py-40">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(145deg, #9e4f65, #202a36)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, rgba(32,42,54,.55), rgba(158,79,101,.45))" }}
      />

      <div className="relative z-10 mx-auto max-w-[680px] px-6">
        <SectionEyebrow light>¿Lista para transformarte?</SectionEyebrow>
        <h2 className="font-heading mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.15] font-light text-white">
          Reserva tu cita <em className="text-rose-light italic">hoy mismo</em>
        </h2>
        <p className="mt-5 mb-10 text-base text-white/70">
          Escribinos y reservamos juntas. Sin formularios, directo por WhatsApp.
        </p>
        <div className="flex justify-center">
          <WhatsAppButton variant="cta" label="Reservar por WhatsApp" />
        </div>
      </div>
    </section>
  );
}
