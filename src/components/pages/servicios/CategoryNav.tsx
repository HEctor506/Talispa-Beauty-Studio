"use client";

import { useEffect, useState } from "react";
import { catalog } from "@/lib/catalog";

export function CategoryNav() {
  const [active, setActive] = useState(catalog[0]?.id);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-cat-section]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id.replace("cat-", ""));
        });
      },
      { rootMargin: "-150px 0px -64% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-16 z-40 border-t border-black/5 border-b border-black/[0.07] bg-cream/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="no-scrollbar flex gap-2.5 overflow-x-auto py-3.5">
          {catalog.map((cat) => (
            <a
              key={cat.id}
              href={`#cat-${cat.id}`}
              className={`flex-none rounded-full border px-4.5 py-2.5 text-[13.5px] font-medium whitespace-nowrap transition-colors ${
                active === cat.id
                  ? "border-rose bg-rose text-white"
                  : "border-black/10 bg-white text-ink-text-light"
              }`}
            >
              {cat.navLabel}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
