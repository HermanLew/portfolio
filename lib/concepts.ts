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
  // Add image paths here, for example:
  // { src: "/images/concepts/example.png", alt: "Mobile app concept", aspect: "wide" },
  { alt: "Concept image 1", aspect: "wide" },
  { alt: "Concept image 2", aspect: "wide" },
  { alt: "Concept image 3", aspect: "wide" },
  { alt: "Concept image 4", aspect: "wide" },
  { alt: "Concept image 5", aspect: "tall" },
];
