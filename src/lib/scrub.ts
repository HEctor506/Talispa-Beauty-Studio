export type ScrubFrame = {
  /** Ruta en /public a la foto real. Si falta, se dibuja un placeholder. */
  src?: string;
  label: string;
};

// Paletas de respaldo mientras no hay fotos reales del estudio (ver design.md).
// Solo tonos rosa/navy: el overlay oscuro que va encima mezcla mal con el dorado (queda oliva/sucio).
const PLACEHOLDER_PALETTES: [string, string][] = [
  ["#f3d7de", "#e8a8b8"],
  ["#e8a8b8", "#9e4f65"],
];

/** Dibuja el frame `frameIndex` de una secuencia scrub en canvas, con cover-fit si hay imagen cargada. */
export function drawScrubFrame(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  image: HTMLImageElement | null,
  frame: ScrubFrame,
  frameIndex: number
) {
  const cW = canvas.width;
  const cH = canvas.height;
  ctx.clearRect(0, 0, cW, cH);

  if (image && image.complete && image.naturalWidth > 0) {
    const scale = Math.max(cW / image.naturalWidth, cH / image.naturalHeight);
    const x = (cW - image.naturalWidth * scale) / 2;
    const y = (cH - image.naturalHeight * scale) / 2;
    ctx.drawImage(image, x, y, image.naturalWidth * scale, image.naturalHeight * scale);
    return;
  }

  const [from, to] = PLACEHOLDER_PALETTES[frameIndex % PLACEHOLDER_PALETTES.length];
  const gradient = ctx.createLinearGradient(0, 0, cW, cH);
  gradient.addColorStop(0, from);
  gradient.addColorStop(1, to);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, cW, cH);

  // Label pegado abajo, lejos del centro donde va superpuesto el texto de la sección.
  ctx.font = "12px ui-monospace, Menlo, monospace";
  ctx.fillStyle = "rgba(32,42,54,0.45)";
  ctx.textAlign = "center";
  ctx.fillText(`foto · ${frame.label}`, cW / 2, cH - 28);
}

export function preloadFrames(
  frames: ScrubFrame[],
  onLoad?: (index: number) => void
): (HTMLImageElement | null)[] {
  return frames.map((frame, index) => {
    if (!frame.src) return null;
    const img = new Image();
    if (onLoad) img.onload = () => onLoad(index);
    img.src = frame.src;
    return img;
  });
}
