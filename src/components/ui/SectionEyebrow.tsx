export function SectionEyebrow({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.26em] uppercase ${
        light ? "text-rose-light" : "text-rose"
      } ${className}`}
    >
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${light ? "bg-rose-light" : "bg-rose"}`} />
      {children}
    </span>
  );
}
