import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { validateGetImageRequest } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const validationResult = validateGetImageRequest(req);
  if (!validationResult.success) {
    return NextResponse.json(validationResult.errors);
  }
  const { fill, size } = validationResult.data;
  return new ImageResponse(
    (
      <svg
        width={299 * size}
        height={size * 400}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M112.801 334.833H0.30862C0.30862 334.833 -0.385776 81.3889 0.30862 51.8889C22.3626 56.6111 66.9706 91.5278 64.693 177.972C63.1931 234.667 55.777 261.806 56.3603 272.917L116.662 272.556C116.662 272.556 113.578 159.333 109.357 92.25C106.273 44.2778 148.882 0 148.882 0C148.882 0 191.656 44.2778 188.74 92.2778C184.518 159.361 181.435 272.583 181.435 272.583L241.653 272.944C242.125 261.833 234.709 234.667 233.32 178C231.015 91.5278 275.651 56.6389 297.705 51.9167C298.399 81.3889 297.705 334.861 297.705 334.861H185.24C177.991 362.194 158.714 388.556 149.132 400C139.438 388.583 120.161 362.222 113.023 334.861"
          fill={fill}
        />
      </svg>
    ),
    {
      width: 299 * size,
      height: 400 * size,
    },
  );
}
