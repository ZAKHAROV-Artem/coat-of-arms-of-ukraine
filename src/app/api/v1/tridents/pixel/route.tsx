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
        width={277 * size}
        height={400 * size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="61.5385" width="30.7692" height="30.7692" fill={fill} />
        <rect
          x="92.3076"
          y="61.5385"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="153.846"
          y="61.5385"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="92.3076"
          y="30.7692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="153.846"
          y="30.7692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="92.3076"
          y="92.3077"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="153.846"
          y="92.3077"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect y="92.3077" width="30.7692" height="30.7692" fill={fill} />
        <rect y="123.077" width="30.7692" height="30.7692" fill={fill} />
        <rect
          x="61.5386"
          y="123.077"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="184.615"
          y="123.077"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect y="153.846" width="30.7692" height="30.7692" fill={fill} />
        <rect
          x="61.5386"
          y="153.846"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="61.5386"
          y="215.385"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="184.615"
          y="153.846"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="184.615"
          y="215.385"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect y="184.615" width="30.7692" height="30.7692" fill={fill} />
        <rect y="215.385" width="30.7692" height="30.7692" fill={fill} />
        <rect y="246.154" width="30.7692" height="30.7692" fill={fill} />
        <rect y="276.923" width="30.7692" height="30.7692" fill={fill} />
        <path
          d="M61.5391 276.923H92.3083V307.692H61.5391V276.923Z"
          fill={fill}
        />
        <rect
          x="184.615"
          y="276.923"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="153.846"
          y="246.154"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="92.7202"
          y="246.154"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="30.4941"
          y="246.154"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="61.5386"
          y="307.692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="123.077"
          y="307.692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="123.077"
          y="184.615"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="123.077"
          y="246.154"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="123.077"
          y="123.077"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="123.077"
          y="276.923"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="123.077"
          y="153.846"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="123.077"
          y="215.385"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect x="123.077" width="30.7692" height="30.7692" fill={fill} />
        <rect
          x="123.077"
          y="369.231"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="184.615"
          y="307.692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="215.385"
          y="307.692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="215.385"
          y="246"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="30.769"
          y="307.692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="92.3076"
          y="307.692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="153.846"
          y="307.692"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          x="153.846"
          y="338.462"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect x="93" y="338.462" width="30.7692" height="30.7692" fill={fill} />
        <rect
          x="30.769"
          y="92.3077"
          width="30.7692"
          height="30.7692"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 61.5385)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 92.3077)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 123.077)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 153.846)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 184.615)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 215.247 184.615)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 92.5825 184.615)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 215.385)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 246.154)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 276.923 276.923)"
          fill={fill}
        />
        <rect
          width="30.7692"
          height="30.7692"
          transform="matrix(-1 0 0 1 246.154 92.3077)"
          fill={fill}
        />
      </svg>
    ),
    {
      width: 277 * size,
      height: 400 * size,
    },
  );
}
