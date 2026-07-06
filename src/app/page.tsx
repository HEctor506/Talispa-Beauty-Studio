import { CtaFinal } from "@/components/sections/CtaFinal";
import { Experiencia } from "@/components/sections/Experiencia";
import { Filosofia } from "@/components/sections/Filosofia";
import { Hero } from "@/components/sections/Hero";
import { ServiciosDestacados } from "@/components/sections/ServiciosDestacados";
import { TaglineStrip } from "@/components/sections/TaglineStrip";
import { Visita } from "@/components/sections/Visita";

export default function Home() {
  return (
    <>
      <Hero />
      <TaglineStrip />
      <Filosofia />
      <ServiciosDestacados />
      <Experiencia />
      <Visita />
      <CtaFinal />
    </>
  );
}
