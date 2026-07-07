"use client";

import { useEffect, useState } from "react";

type CaseDotSection = {
  id: string;
  label: string;
};

export function CaseDotsNav({ sections }: { sections: CaseDotSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) return;

    const updateActiveSection = () => {
      const viewportMarker = window.innerHeight * 0.45;
      let nextActiveId = sections[0]?.id ?? "";
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const distance = Math.abs(rect.top - viewportMarker);
        if (distance < closestDistance) {
          closestDistance = distance;
          nextActiveId = section.id;
        }
      });

      setActiveId(nextActiveId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  return (
    <nav className="case-dots" aria-label="Case sections">
      {sections.map((section) => (
        <a
          aria-current={activeId === section.id ? "true" : undefined}
          aria-label={section.label}
          href={`#${section.id}`}
          key={section.id}
        >
          <span>{section.label}</span>
        </a>
      ))}
    </nav>
  );
}
