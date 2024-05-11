import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { extractAndModifyGetImageData } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const { fill, size } = extractAndModifyGetImageData(req.url);

  return new ImageResponse(
    (
      <svg
        width={317 * size}
        height={400 * size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M316.814 40V360H237.611L158.407 400L79.2036 360H6.10352e-05V40L79.2036 80V280H118.805V20L158.407 0L198.009 20V280H237.611V80L316.814 40Z"
          fill={fill}
        />
      </svg>
    ),
    {
      width: 317 * size,
      height: 400 * size,
    },
  );
}
