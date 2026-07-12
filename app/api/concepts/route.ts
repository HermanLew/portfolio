import { NextResponse } from "next/server";
import { getConceptPreviewImages } from "@/lib/concepts.server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    images: getConceptPreviewImages(),
  });
}
