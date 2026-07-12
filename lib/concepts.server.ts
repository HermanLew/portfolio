import { readdirSync, readFileSync, statSync } from "fs";
import { extname, join } from "path";
import {
  conceptsImageExtensions,
  conceptsImageRoute,
  getConceptAlt,
  getConceptAspect,
} from "./concepts";
import type { ConceptImageFile } from "./concepts";

const conceptsImageDirectory = join(process.cwd(), "public", "images", "concepts");

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
    .filter((fileName) => conceptsImageExtensions.has(extname(fileName).toLowerCase()))
    .map((fileName) => {
      const filePath = join(conceptsImageDirectory, fileName);
      const stats = statSync(filePath);
      const size = getImageSize(filePath);

      return {
        src: `${conceptsImageRoute}/${fileName}`,
        alt: getConceptAlt(fileName),
        aspect: getConceptAspect(size.width, size.height),
        modifiedAt: stats.mtimeMs,
      };
    })
    .sort((a, b) => a.modifiedAt - b.modifiedAt)
    .map(({ modifiedAt, ...image }) => image);
}

export function getConceptPreviewImages(count = 4): ConceptImageFile[] {
  return getConceptImages().slice(-count);
}
