# Design System — Talispa Beauty Studio

Fuente de verdad visual del proyecto. Antes de tocar colores, tipografía, espaciado o componentes, leer este archivo.

Base: paleta y tipografía tomadas del proyecto de referencia **Martina Beauty Studio** (`martina-web`), reemplazando los fondos oscuros ciruela/morado de Martina por el navy `#202a36` pedido para Talispa. El resto de la paleta (rosa, dorado, crema) y la tipografía se mantienen igual que en Martina.

## Paleta de colores

### Acento (rosa)
| Token | Hex | Uso |
|---|---|---|
| `rose` | `#C9748A` | Color primario: links activos, íconos, botones, eyebrows |
| `rose-light` | `#E8A8B8` | Texto de acento sobre fondos oscuros, hover claro |
| `rose-deep` | `#9E4F65` | Hover/estado activo de botones, extremo de gradientes |

### Acento secundario (dorado)
| Token | Hex | Uso |
|---|---|---|
| `gold` | `#C9A96E` | Estrellas de rating, detalles decorativos |
| `gold-light` | `#E8D5A3` | Variante clara, poco uso |

### Fondos claros
| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FDF8F4` | Fondo base del sitio |
| `white` | `#FFFFFF` | Cards sobre fondo crema, header |

### Fondos oscuros (navy — reemplazo del morado de Martina)
| Token | Hex | Uso |
|---|---|---|
| `ink` | `#202A36` | Fondo de sección oscura (equivalente al `--dark` de Martina) |
| `ink-2` | `#2B3846` | Fondo de card dentro de sección oscura (equivalente al `--dark2` de Martina), da profundidad sobre `ink` |

**Nota:** en Martina, los extremos de gradiente "vino" (`#6b2040`, `rgba(100,20,50,.75)`) se usan en cards CTA y overlays sobre fondo oscuro. En Talispa esos extremos se reemplazan por `ink-2` / `ink`, manteniendo `rose`→`rose-deep` como el otro extremo del gradiente (ej. `linear-gradient(145deg, var(--rose-deep), var(--ink))`).

### Texto
| Token | Hex | Uso |
|---|---|---|
| `text` | `#3D2535` | Texto principal sobre fondo claro |
| `text-light` | `#7A6070` | Subtítulos, descripciones sobre fondo claro |
| Blanco / blanco translúcido | `#FFFFFF`, `rgba(255,255,255,.45–.85)` | Texto sobre fondo oscuro (`ink`) |

## Tipografía

- **Títulos:** `Cormorant Garamond` (serif), pesos 300/400/600. Itálica para la palabra de énfasis dentro de un título (`<em>` → `font-style: italic; color: var(--rose)` o `--rose-light` sobre fondo oscuro).
- **Cuerpo y UI:** `Jost` (sans-serif), pesos 300/400/500.
- Cargadas vía `next/font/google` (self-hosted, sin request externo a Google Fonts).

### Escala
| Token | rem | Uso |
|---|---|---|
| `xs` | 0.75rem | Labels, eyebrows, captions |
| `sm` | 0.875rem | Botones, nav, texto secundario |
| `base` | 1rem | Cuerpo |
| `lg` | 1.125rem | Cita/testimonio destacado |
| `xl` | 1.375rem | Subtítulo de card |
| `2xl` | 1.75rem | H3 |
| `3xl` | 2.5rem | H2 |
| `4xl` | 3.5rem | Stat number, H2 grande |
| `5xl` | 5rem | H1 hero |

## Componentes

### Botones (pill)
- **Primario:** `background: linear-gradient(135deg, var(--rose), var(--rose-deep))`, texto blanco, `border-radius: 9999px`, `box-shadow: 0 8px 30px rgba(201,116,138,.4)`. Hover: `translateY(-3px)` + sombra más intensa.
- **Ghost:** transparente, borde `2px solid var(--rose)`, texto `rose`. Hover: relleno `rose`, texto blanco.
- **Ghost sobre fondo oscuro:** borde `rgba(255,255,255,.7)`, texto blanco. Hover: `rgba(255,255,255,.15)`.
- Todos los CTA de reserva usan el ícono de WhatsApp y apuntan a `wa.me/…` — ver `lib/config.ts`.

### Cards
- Sobre fondo claro: `background: #fff`, `border-radius: 16–20px`, `box-shadow: 0 4px 20px rgba(0,0,0,.05)`.
- Sobre fondo oscuro (`ink`): `background: var(--ink-2)`, `border: 1px solid rgba(255,255,255,.06)`, hover `translateY(-8px)` + sombra oscura.

### Eyebrow / section-tag
`font-size: 12–13px; font-weight: 500; letter-spacing: .14–.26em; text-transform: uppercase; color: var(--rose)` (o `--rose-light` sobre fondo oscuro).

### Radios
`9999px` (botones/pills), `16–24px` (cards, imágenes).

### Sombras
- Card clara: `0 4px 20px rgba(0,0,0,.05)`
- Botón primario: `0 8px 30px rgba(201,116,138,.4)`
- Card oscura hover: `0 20px 50px rgba(0,0,0,.4)`
- WhatsApp flotante (pulso): oscila entre `0 10px 26px rgba(201,116,138,.34)` y `0 12px 36px rgba(201,116,138,.55)`

## Animación

| Efecto | Mecanismo | Dónde |
|---|---|---|
| Hero scroll-scrub | `<canvas>` + listener de scroll, dibuja 1 de N frames según progreso de scroll en el primer viewport | Hero |
| Experiencia scroll-scrub | `<canvas>` dentro de sección `sticky` (350vh), scrubbing de frames + transición de texto entre 3 slides según progreso | Sección Experiencia |
| Reveal on scroll | `IntersectionObserver`, fade + translate una sola vez | Filosofía, Visita |
| Counter animado | `requestAnimationFrame` con ease-out cúbico | Solo si se reactiva un bloque de stats a futuro |
| Marquee | CSS `@keyframes` translateX infinito | Tagline strip |
| Pulso WhatsApp flotante | CSS `@keyframes` sobre `box-shadow` | Botón flotante |
| Hover cards / botones | Transición CSS/Tailwind | Global |

Regla de la librería: usar Tailwind para layout/spacing/estados simples, CSS puro (`globals.css`) para keyframes sin JS (marquee, pulso), y Framer Motion solo si se necesita una animación dirigida por estado de React (entrada/salida condicional, gestos). El scrubbing de canvas no usa Framer Motion — es lectura directa de `scrollY`/`getBoundingClientRect()` en un hook cliente.

## Diferencias respecto al handoff original (Studio Bloom)

El handoff de diseño original (`design_handoff_studio_bloom`) definía una paleta rosa-fucsia (`#EC1F7A`) sobre crema, sin secciones oscuras. Esa paleta **ya no aplica** — este documento la reemplaza. Lo que sí se conserva del handoff original:
- La estructura de catálogo de Servicios (7 categorías, layout editorial, nav sticky con scroll-spy).
- El copy de la sección Filosofía (texto + 3 puntos: productos profesionales, atención personalizada, higiene garantizada), ahora montado sobre el layout de "Sobre Nosotros" de Martina.
- El patrón WhatsApp-first: sin formularios, sin carrito, todo CTA apunta a `wa.me/…`.

## Pendiente de datos reales

- Teléfono / número de WhatsApp real de Talispa.
- Dirección y horarios reales.
- Fotos reales del estudio (hero scrub, sección Experiencia, catálogo).
- Copy de las 3 slides de la sección Experiencia (pendiente, lo pasa el cliente).
