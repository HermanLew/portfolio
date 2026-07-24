"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import type { CaseSlide } from "@/lib/case-studies";

export function CaseHorizontalScroller({ slides }: { slides: CaseSlide[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [translate, setTranslate] = useState(0);
  const [height, setHeight] = useState("220svh");

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      if (window.matchMedia("(max-width: 900px)").matches) {
        setTranslate(0);
        setHeight("auto");
        return;
      }

      const visibleWidth = track.parentElement?.clientWidth ?? section.clientWidth;
      const maxTranslate = Math.max(0, track.scrollWidth - visibleWidth);
      const nextHeight = Math.ceil(window.innerHeight + maxTranslate);
      const scrollable = Math.max(1, nextHeight - window.innerHeight);
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

      setHeight(`${nextHeight}px`);
      setTranslate(progress * maxTranslate);
    };

    update();
    const observer = new ResizeObserver(update);
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [slides.length]);

  return (
    <section
      className="case-horizontal-scroll"
      ref={sectionRef}
      style={{ "--case-horizontal-height": height } as CSSProperties}
    >
      <div className="case-horizontal-sticky">
        <div
          className="case-horizontal-track"
          ref={trackRef}
          style={{ transform: `translate3d(${-translate}px, 0, 0)` }}
        >
          {slides.map((slide, index) => (
            <article className="case-horizontal-card" key={slide.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
              {slide.video ? (
                <div className="case-horizontal-visual">
                  <video
                    src={slide.video}
                    aria-label={slide.visualLabel}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : slide.image ? (
                <div className="case-horizontal-visual">
                  <Image
                    src={slide.image}
                    alt={slide.visualLabel}
                    width={1536}
                    height={1152}
                  />
                </div>
              ) : (
                <div className="case-visual-placeholder">
                  <span>{slide.visualLabel}</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
