import { GetImageRequestSchema } from "@/types/request";
import {
  NextMiddleware,
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

export function validateGetImageData(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    if (!req.nextUrl.pathname.startsWith("/api/v1")) {
      return middleware(req, event);
    }

    const { searchParams } = new URL(req.url);
    const validationResult = GetImageRequestSchema.safeParse({
      fill: searchParams.get("fill"),
      size: Number(searchParams.get("size")),
    });

    if (!validationResult.success) {
      return NextResponse.json({ errors: validationResult.error.errors });
    }

    return middleware(req, event);
  };
}
