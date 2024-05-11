import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { extractAndModifyGetImageData } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const { fill, size } = extractAndModifyGetImageData(req.url);

  return new ImageResponse(
    (
      <svg width={247 * size} height={400 * size}>
        <path
          d="M0 272.878H122.463L145.757 295.507L244.925 274.21L151.747 304.825L121.797 400L122.463 272.878L99.8336 295.507L120.466 396.672L91.1814 304.825L0 272.878Z"
          fill={fill}
        />
        <path
          d="M99.1681 248.253L0 271.547L93.8436 239.601L122.463 0V272.879L99.1681 248.253Z"
          fill={fill}
        />
        <path
          d="M145.757 249.584L126.5 26.5L151.747 239.601L246.256 272.879H122.463L145.757 249.584Z"
          fill={fill}
        />
        <path
          d="M12.6 147H0V26L63 148.466L51.3143 161L63 170V238L0 259V176H12.6V240L47.0842 228V176L29.8918 161L47.0842 143.807L12.6 82V147Z"
          fill={fill}
        />
        <path
          d="M196.311 176H183V238L245.972 259V170L234.972 161L245.972 152V26L183.472 147H200.472L232.972 82L230.92 144L213.972 161L230.92 176V240L196.311 228V176Z"
          fill={fill}
        />
      </svg>
    ),
    {
      width: 247 * size,
      height: 400 * size,
    },
  );
}
