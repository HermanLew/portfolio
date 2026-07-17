export type ConceptImage = {
  src?: string;
  alt: string;
  aspect: "wide" | "square" | "tall";
  mediaType?: "image" | "video";
};

export type ConceptImageFile = ConceptImage & {
  src: string;
};

export const conceptsImageRoute = "/images/concepts";

export const conceptsImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
export const conceptsVideoExtensions = new Set([".mp4"]);

const conceptAltOverrides: Record<string, string> = {
  "switcher-animation-for-vpn-client.mp4": "Switcher animation for VPN client",
};

export function getConceptAspect(width: number, height: number): ConceptImage["aspect"] {
  const ratio = width / Math.max(1, height);

  if (ratio > 1.12) return "wide";
  if (ratio < 0.82) return "tall";
  return "square";
}

export function getConceptAlt(fileName: string) {
  if (conceptAltOverrides[fileName]) return conceptAltOverrides[fileName];

  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
