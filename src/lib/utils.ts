import { GetImageRequestSchema } from "@/types/request";
import { type ClassValue, clsx } from "clsx";
import { NextRequest, NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateGetImageRequest(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const validationResult = GetImageRequestSchema.safeParse({
    fill: searchParams.get("fill"),
    size: Number(searchParams.get("size")),
  });
  if (!validationResult.success) {
    return { errors: validationResult.error.errors };
  }

  let data = validationResult.data;
  data.fill = "#" + data.fill;
  return { success: true, data };
}
