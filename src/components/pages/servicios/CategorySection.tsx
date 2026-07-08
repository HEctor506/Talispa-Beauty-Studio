import type { CatalogCategory } from "@/lib/catalog";

export function CategorySection({ category }: { category: CatalogCategory }) {
  return (
    <section
      id={`cat-${category.id}`}
      data-cat-section
      className="scroll-mt-[152px] border-t border-black/[0.07] py-10"
    >
      <div className="mb-1.5 flex flex-wrap items-baseline gap-4">
        <h2 className="font-heading text-[1.8rem] font-semibold text-ink-text">{category.name}</h2>
        <span className="text-[13px] tracking-[0.02em] text-rose">{category.blurb}</span>
      </div>
      <div className="mt-2">
        {category.services.map((svc) => (
          <div
            key={svc.name}
            className="flex items-baseline justify-between gap-7 border-b border-black/[0.07] py-4.5"
          >
            <div>
              <div className="font-heading text-[19px] font-semibold text-ink-text">{svc.name}</div>
              <div className="mt-1 max-w-[62ch] text-sm leading-relaxed text-ink-text-light">
                {svc.desc}
              </div>
            </div>
            <div className="font-heading text-[19px] font-semibold whitespace-nowrap text-ink-text">
              {svc.price}
            </div>
          </div>
        ))}
      </div>

      {category.note && (
        <div className="mt-5 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="font-heading text-lg font-semibold text-ink-text">{category.note.title}</div>
          <ul className="mt-3 flex flex-col gap-2.5 text-sm leading-relaxed text-ink-text-light">
            {category.note.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-rose" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
