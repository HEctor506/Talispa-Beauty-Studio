// Datos reales del negocio pendientes de confirmar por el cliente — ver design.md.
export const siteConfig = {
  name: "Talispa Beauty Studio",
  shortName: "Talispa",
  tagline: "Centro estético de uñas",
  description:
    "Talispa Beauty Studio — manicura, pedicura, uñas artificiales, nail art y tratamientos. Reservá tu turno por WhatsApp.",
  // TODO: reemplazar por el teléfono real del cliente
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE ?? "+593 99 577 8990",
  // TODO: reemplazar por el número real de WhatsApp (solo dígitos, formato wa.me)
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP ?? "593995778990",
  whatsappDefaultMessage: "Hola Talispa 💅 Me gustaría reservar un turno.",
  // TODO: dirección real
  address: process.env.NEXT_PUBLIC_ADDRESS,
  city: process.env.NEXT_PUBLIC_CITY ,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
  hours: [
    { day: "Lunes a Viernes", time: "9:00 – 19:00" },
    { day: "Sábado", time: "9:00 – 17:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
} as const;

export function buildWhatsappHref(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
