export type ConceptImage = {
  src?: string;
  alt: string;
  aspect: "wide" | "square" | "tall";
};

export const conceptsPreviewImages: ConceptImage[] = [
  { alt: "Concept preview 1", aspect: "square" },
  { alt: "Concept preview 2", aspect: "square" },
  { alt: "Concept preview 3", aspect: "square" },
  { alt: "Concept preview 4", aspect: "square" },
];

export const conceptsGalleryImages: ConceptImage[] = [
  {
    src: "/images/concepts/dating-app.png",
    alt: "Dating app mobile concept",
    aspect: "wide",
  },
  {
    src: "/images/concepts/dating-flow.png",
    alt: "Dating app scheduling flow",
    aspect: "wide",
  },
  {
    src: "/images/concepts/soundstream-structure.png",
    alt: "Soundstream app structure concept",
    aspect: "wide",
  },
  {
    src: "/images/concepts/soundstream-brand.png",
    alt: "Soundstream brand concept",
    aspect: "square",
  },
];
