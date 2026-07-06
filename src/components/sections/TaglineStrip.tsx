const WORDS = ["Belleza", "Bienestar", "Confianza", "Elegancia", "Detalle", "Transformación"];

export function TaglineStrip() {
  const track = [...WORDS, ...WORDS];

  return (
    <div className="overflow-hidden bg-gradient-to-r from-rose-deep to-rose py-3.5 whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {track.map((word, i) => (
          <span key={i} className="font-heading text-lg text-white/90 italic">
            {word}&nbsp;✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
