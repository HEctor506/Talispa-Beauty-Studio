export type CatalogService = {
  name: string;
  desc: string;
  price: string;
};

export type CatalogCategory = {
  id: string;
  name: string;
  navLabel: string;
  blurb: string;
  services: CatalogService[];
};

export const catalog: CatalogCategory[] = [
  {
    id: "manos",
    name: "Manos",
    navLabel: "Manos",
    blurb: "Cuidado y belleza para tus manos",
    services: [
      { name: "Manicura Básica", desc: "Corte, limado, cuidado de cutículas y brillo natural.", price: "13,90 €" },
      { name: "Manicura Completa", desc: "Corte, limado, cutículas, exfoliación e hidratación.", price: "18,90 €" },
      { name: "Manicura Spa", desc: "Manicura completa con exfoliación, masaje e hidratación profunda.", price: "24,90 €" },
    ],
  },
  {
    id: "semi",
    name: "Esmaltado Semipermanente",
    navLabel: "Semipermanente",
    blurb: "Color de larga duración",
    services: [
      { name: "Semipermanente Color Liso", desc: "Aplicación de esmalte semipermanente de larga duración.", price: "14,90 €" },
      { name: "Semipermanente con Nivelación", desc: "Refuerzo de la uña natural con base niveladora.", price: "19,90 €" },
      { name: "Semipermanente Francesa", desc: "Acabado francés elegante y duradero.", price: "17,90 €" },
      { name: "Semipermanente con Decoración", desc: "Incluye diseños sencillos o detalles decorativos.", price: "19,90 €" },
    ],
  },
  {
    id: "artificiales",
    name: "Uñas Artificiales",
    navLabel: "Artificiales",
    blurb: "Extensiones y construcción a medida",
    services: [
      { name: "Uñas Gel", desc: "Extensión y construcción en gel con acabado profesional.", price: "45 €" },
      { name: "Relleno Gel", desc: "Mantenimiento y relleno del crecimiento.", price: "30 €" },
      { name: "Uñas Acrílicas", desc: "Extensiones resistentes y personalizadas.", price: "60 €" },
      { name: "Relleno Acrílico", desc: "Corrección y mantenimiento de uñas acrílicas.", price: "40 €" },
      { name: "Uñas Polygel", desc: "Extensiones ligeras con aspecto natural.", price: "50 €" },
      { name: "Relleno Polygel", desc: "Mantenimiento y relleno de estructura.", price: "35 €" },
    ],
  },
  {
    id: "nailart",
    name: "Nail Art",
    navLabel: "Nail Art",
    blurb: "Diseños y efectos para destacar",
    services: [
      { name: "Nail Art Básico", desc: "Diseños sencillos y minimalistas.", price: "15 €" },
      { name: "Nail Art Premium", desc: "Diseños avanzados con técnicas y detalles especiales.", price: "25 €" },
      { name: "Baby Boomer", desc: "Degradado elegante entre tonos naturales.", price: "20 €" },
      { name: "Cat Eye", desc: "Efecto magnético con acabado brillante.", price: "20 €" },
      { name: "Decoración con Cristales", desc: "Aplicación de cristales y detalles decorativos.", price: "10 €" },
    ],
  },
  {
    id: "pies",
    name: "Pies",
    navLabel: "Pies",
    blurb: "Pedicura y cuidado integral",
    services: [
      { name: "Pedicura Básica", desc: "Corte, limado, cutículas y brillo.", price: "16,90 €" },
      { name: "Pedicura Completa", desc: "Pedicura con exfoliación e hidratación.", price: "27,90 €" },
      { name: "Pedicura Spa", desc: "Tratamiento completo con masaje y cuidado intensivo.", price: "35 €" },
      { name: "Pedicura Semipermanente", desc: "Pedicura con esmalte semipermanente.", price: "20,90 €" },
    ],
  },
  {
    id: "retiros",
    name: "Retiros",
    navLabel: "Retiros",
    blurb: "Retirada segura y profesional",
    services: [
      { name: "Retiro de Semipermanente", desc: "Retirada segura del esmalte semipermanente.", price: "10 €" },
      { name: "Retiro de Gel", desc: "Retirada profesional de uñas de gel.", price: "15 €" },
      { name: "Retiro de Acrílico", desc: "Eliminación profesional de uñas acrílicas.", price: "18 €" },
      { name: "Retiro de Polygel", desc: "Retirada completa sin dañar la uña natural.", price: "16 €" },
    ],
  },
  {
    id: "tratamientos",
    name: "Tratamientos",
    navLabel: "Tratamientos",
    blurb: "Mimos extra para manos y uñas",
    services: [
      { name: "Reparación de Uña", desc: "Reconstrucción o arreglo de uña dañada.", price: "3 €" },
      { name: "Hidratación Profunda", desc: "Tratamiento nutritivo para manos y uñas.", price: "7 €" },
      { name: "Exfoliación Premium", desc: "Exfoliación e hidratación intensiva.", price: "5 €" },
      { name: "Parafina Manos", desc: "Tratamiento hidratante y reparador con parafina.", price: "10 €" },
    ],
  },
];
