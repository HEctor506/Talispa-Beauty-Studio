export type CatalogService = {
  name: string;
  desc: string;
  price: string;
};

export type CatalogNote = {
  title: string;
  items: string[];
};

export type CatalogCategory = {
  id: string;
  name: string;
  navLabel: string;
  blurb: string;
  services: CatalogService[];
  note?: CatalogNote;
};

export const catalog: CatalogCategory[] = [
  {
    id: "manos",
    name: "Manos",
    navLabel: "Manos",
    blurb: "Cuidado, belleza y estructura para tus uñas",
    services: [
      {
        name: "Manicura Clásica",
        desc: "El cuidado esencial para unas manos impecables: Manicura Rusa, esmaltado tradicional, scrub, hidratación profunda y aceite para cutículas — dejando tus manos suaves y con un acabado limpio y elegante.",
        price: "$10",
      },
      {
        name: "Manicura Shine",
        desc: "Ideal para un acabado brillante y elegante: Manicura Rusa, esmaltado semipermanente, scrub, hidratación profunda y aceite para cutículas.",
        price: "$15",
      },
      {
        name: "Manicura Strong",
        desc: "Fortalece y protege la uña natural: Manicura Rusa, nivelación con Rubber Base, esmaltado semipermanente, scrub, hidratación profunda y aceite para cutículas.",
        price: "$25",
      },
      {
        name: "Manicura Luxury",
        desc: "Experiencia premium que combina belleza, precisión y relajación: Manicura Rusa, extensiones Soft Gel, esmaltado semipermanente, hidratación profunda, masaje relajante de manos, aceite para cutículas y bebida de cortesía.",
        price: "$35",
      },
      {
        name: "Uñas Polygel",
        desc: "Uñas resistentes, ligeras y de apariencia natural con extensiones esculpidas en Polygel: preparación con Manicura Rusa, scrub, hidratación, construcción y moldeado, esmaltado semipermanente y aceite para cutículas.",
        price: "$45",
      },
      {
        name: "Relleno Polygel",
        desc: "Mantenimiento profesional: Manicura Rusa, relleno de la estructura existente, nivelación, corrección de crecimiento, esmaltado semipermanente y aceite para cutículas.",
        price: "$28",
      },
      {
        name: "Acrílicas",
        desc: "Extensiones esculpidas.",
        price: "$45",
      },
    ],
  },
  {
    id: "combos",
    name: "Combos",
    navLabel: "Combos",
    blurb: "Manos y pies impecables en una sola cita",
    services: [
      {
        name: "Talispa Clásico",
        desc: "Manicura Rusa + Pedicura Rusa con esmaltado tradicional, scrub, hidratación profunda y aceite para cutículas. Acabado limpio, elegante y de larga duración.",
        price: "$18",
      },
      {
        name: "Talispa Shine",
        desc: "Manicura Rusa con esmaltado semipermanente + Pedicura Spa Tradicional con esmaltado tradicional, scrub, hidratación, masaje relajante de pies y aceite para cutículas.",
        price: "$22",
      },
      {
        name: "Talispa Strong",
        desc: "Manicura Rusa con nivelación en Rubber Base y esmaltado semipermanente + Pedicura Spa Tradicional con remoción de callosidades, scrub, hidratación profunda y masaje relajante.",
        price: "$35",
      },
      {
        name: "Talispa Glow",
        desc: "El equilibrio perfecto entre belleza, cuidado y duración. Este combo incluye Manicura Rusa con esmaltado semipermanente y Pedicure Spa con esmaltado semipermanente, scrub, hidratación profunda, masaje relajante de pies y aplicación de aceite para cutículas. Diseñado para brindar un acabado impecable y una experiencia de relajación.",
        price: "$30",
      },
      {
        name: "Talispa Sculpt Duo",
        desc: "Extensiones Dual System con esmaltado semipermanente + Pedicura Spa con esmaltado semipermanente, remoción de callosidades, scrub, hidratación profunda y masaje relajante.",
        price: "$45",
      },
      {
        name: "Talispa Luxury",
        desc: "La máxima experiencia de belleza y bienestar: Manicura Rusa con extensiones Soft Gel y esmaltado semipermanente + Pedicura Spa Deluxe con esmaltado semipermanente, remoción de callosidades, scrub, hidratación profunda, masaje relajante con vela hidratante y aceite para cutículas.",
        price: "$60",
      },
    ],
  },
  {
    id: "pies",
    name: "Pies",
    navLabel: "Pies",
    blurb: "Cuidado esencial para pies saludables",
    services: [
      {
        name: "Pedicura Tradicional",
        desc: "Pedicura Rusa, esmaltado tradicional, scrub, hidratación profunda y aceite para cutículas — pies suaves, saludables y con acabado impecable.",
        price: "$12",
      },
      {
        name: "Pedicura Semipermanente",
        desc: "Pedicura Rusa con esmaltado semipermanente de larga duración: scrub, hidratación profunda y aceite para cutículas.",
        price: "$18",
      },
    ],
  },
  {
    id: "tratamientos",
    name: "Tratamientos",
    navLabel: "Tratamientos",
    blurb: "Un momento para consentirte",
    services: [
      {
        name: "Manicura Spa",
        desc: "Limpieza de manos, exfoliación con scrub profesional, mascarilla hidratante, toallas calientes, masaje relajante de manos y antebrazos, crema hidratante y aceite para cutículas.",
        price: "$25",
      },
      {
        name: "Pedicura Spa",
        desc: "Tratamiento completo con remoción de callosidades, exfoliación (scrub), hidratación profunda y masaje relajante con vela hidratante — la cera se transforma en un aceite tibio con mantecas y aceites naturales que dejan la piel suave, luminosa y revitalizada.",
        price: "$30",
      },
    ],
  },
  {
    id: "retiros",
    name: "Retiros",
    navLabel: "Retiros",
    blurb: "Retirada profesional y segura",
    services: [
      {
        name: "Retiro de Sistemas",
        desc: "Retiro profesional y seguro de Acrílico, Polygel, Soft Gel, Builder Gel o Rubber Base — con técnicas que protegen la uña natural. Incluye Manicura Rusa, limpieza de la uña, hidratación y aceite para cutículas.",
        price: "$18",
      },
    ],
    note: {
      title: "Política de Retiros",
      items: [
        "Retiro de sistema + Manicura Rusa (sin nuevo servicio): $18. Incluye retiro profesional, limpieza de la uña natural, Manicura Rusa, hidratación y aceite para cutículas.",
        "Retiro de sistema para un nuevo servicio en Talispa Beauty Studio: $8 (aplica a sistemas realizados en Talispa).",
        "Retiro de sistemas realizados en otros establecimientos: $10. Aplica cuando se realiza como parte de un nuevo servicio y está sujeto a evaluación del estado de las uñas.",
      ],
    },
  },
];
