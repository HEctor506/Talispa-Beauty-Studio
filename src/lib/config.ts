// Datos reales del negocio pendientes de confirmar por el cliente — ver design.md.
export const siteConfig = {
  name: "Talispa Beauty Studio",
  shortName: "Talispa",
  tagline: "Centro estético de uñas",
  description:
    "Talispa Beauty Studio — manicura, pedicura, combos, tratamientos y retiros. Reservá tu turno por WhatsApp.",
  phoneDisplay: "+593 99 577 8990",
  whatsappNumber: "593995778990",
  whatsappDefaultMessage: "Hola Talispa. Me gustaría reservar un turno.",
  address: "Guayaquil, Torre Medica Solaris, Piso T",
  city: "Guayaquil",
  instagram: "https://www.instagram.com/talispaec/",
  facebook: "https://www.facebook.com/talirodriguezb/",
  // TODO: agregar cuando el cliente tenga TikTok
  tiktok: "",
  hours: [
    { day: "Lunes a Viernes", time: "9:00 – 19:00" },
    { day: "Sábado", time: "9:00 – 17:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
} as const;

export function buildWhatsappHref(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
