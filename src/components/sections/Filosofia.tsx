import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const POINTS = [
  {
    title: "Productos profesionales",
    desc: "Marcas premium de larga duración.",
  },
  {
    title: "Atención personalizada",
    desc: "Cada cita, dedicada solo a vos.",
  },
  {
    title: "Higiene garantizada",
    desc: "Material esterilizado en cada servicio.",
  },
];

export function Filosofia() {
  return (
    <section id="filosofia" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal direction="left" className="order-2 md:order-1">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/photo3.jpeg"
              alt="Detalle de manicura en Talispa Beauty Studio"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" className="order-1 md:order-2">
          <SectionEyebrow>Nuestra filosofía</SectionEyebrow>
          <h2 className="font-heading mt-4 text-[2.4rem] leading-[1.15] font-light text-ink-text">
            Un espacio pensado para que <em className="text-rose not-italic italic">te sientas bien</em>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-ink-text-light">
            Cuidamos cada detalle: productos premium, higiene impecable y el tiempo que tu cuidado
            merece. Más que un servicio, una pausa para vos.
          </p>
          <div className="mt-7 flex flex-col gap-4">
            {POINTS.map((point) => (
              <div key={point.title} className="flex items-start gap-3.5">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-rose" />
                <div>
                  <div className="text-[15.5px] font-semibold text-ink-text">{point.title}</div>
                  <div className="mt-0.5 text-sm text-ink-text-light">{point.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
