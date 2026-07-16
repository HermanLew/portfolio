import { readdirSync, readFileSync } from "fs";
import { extname, join } from "path";
import {
  conceptsImageExtensions,
  conceptsImageRoute,
  conceptsVideoExtensions,
  getConceptAlt,
  getConceptAspect,
} from "./concepts";
import type { ConceptImage, ConceptImageFile } from "./concepts";

const conceptsImageDirectory = join(process.cwd(), "public", "images", "concepts");
const conceptImageOrder = [
  "bi-club-prototype.mp4",
  "vpn-client.png",
  "vpn-client-fast-switch.png",
  "streaming_app_brand.png",
  "dating_app_main.png",
  "dating_app-flow.png",
  "streaming_app_structure.png",
];

type ImageSize = {
  width: number;
  height: number;
};

function readPngSize(filePath: string): ImageSize | null {
  const buffer = readFileSync(filePath);
  if (buffer.length < 24) return null;
  if (buffer.toString("ascii", 1, 4) !== "PNG") return null;

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function getImageSize(filePath: string): ImageSize {
  return readPngSize(filePath) ?? { width: 1, height: 1 };
}

export function getConceptImages(): ConceptImageFile[] {
  let files: string[];

  try {
    files = readdirSync(conceptsImageDirectory);
  } catch {
    return [];
  }

  return files
    .filter((fileName) => {
      const extension = extname(fileName).toLowerCase();
      return conceptsImageExtensions.has(extension) || conceptsVideoExtensions.has(extension);
    })
    .map((fileName) => {
      const filePath = join(conceptsImageDirectory, fileName);
      const extension = extname(fileName).toLowerCase();
      const isVideo = conceptsVideoExtensions.has(extension);
      const size = isVideo ? { width: 16, height: 9 } : getImageSize(filePath);
      const mediaType: ConceptImage["mediaType"] = isVideo ? "video" : "image";

      return {
        src: `${conceptsImageRoute}/${fileName}`,
        alt: getConceptAlt(fileName),
        aspect: getConceptAspect(size.width, size.height),
        mediaType,
        order: conceptImageOrder.indexOf(fileName),
      };
    })
    .sort((a, b) => {
      const aOrder = a.order === -1 ? Number.MAX_SAFE_INTEGER : a.order;
      const bOrder = b.order === -1 ? Number.MAX_SAFE_INTEGER : b.order;

      return aOrder - bOrder || a.src.localeCompare(b.src);
    })
    .map(({ order, ...image }) => image);
}

export function getConceptPreviewImages(count = 4): ConceptImageFile[] {
  return getConceptImages().slice(0, count);
}
