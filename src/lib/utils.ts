import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractAndModifyGetImageData(url: string) {
  const { searchParams } = new URL(url);
  const fill = `#${searchParams.get("fill") || "fff"}`;
  const size = Number(searchParams.get("size") || 1);
  return { fill, size };
}

export function sliceText(text: string, take: number) {
  if (text.length > take) {
    return text.slice(0, take) + "...";
  }
  return text;
}
