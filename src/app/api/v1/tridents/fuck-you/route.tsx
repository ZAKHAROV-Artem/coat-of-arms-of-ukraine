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
        width={175 * size}
        height={400 * size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_32_81)">
          <path
            d="M66.9082 314.052C63.0225 319.553 59.1368 325.054 55.251 330.547C54.8257 330.417 54.4003 330.295 53.975 330.165C53.975 327.779 53.4199 325.227 54.0831 323.042C55.7845 317.448 57.8896 311.955 60.1316 306.548C60.8742 304.76 61.1121 303.578 59.6991 302.1C56.1738 298.409 52.7639 294.609 49.3035 290.853C49.0151 290.99 48.7339 291.127 48.4456 291.264C48.4456 310.628 48.4456 329.992 48.4456 349.579C44.8122 349.579 41.4167 349.579 37.8625 349.579C37.8625 345.081 37.5814 340.762 37.9418 336.495C38.2951 332.313 36.8172 328.997 34.3373 325.933C29.2836 319.69 24.1796 313.49 18.5204 306.569C18.5204 321.377 18.5204 335.399 18.5204 349.637C14.8005 349.637 11.3905 349.637 8.08873 349.637C8.08873 327.534 8.08873 305.589 8.08873 283.154C11.5852 285.879 14.8149 288.265 17.8643 290.868C18.4411 291.358 18.5636 292.728 18.4339 293.629C17.6048 299.245 18.4915 304.428 22.1538 308.898C27.0921 314.925 32.1096 320.887 37.6895 327.591C37.6895 310.102 37.6895 293.362 37.6895 275.642C48.2293 282.743 56.0945 291.149 63.4767 300.543C65.8557 297.608 68.0905 294.847 70.6714 291.661C68.278 289.239 65.9422 286.723 63.4406 284.394C55.7412 277.243 47.5949 270.625 37.4084 267.431C33.3857 266.169 28.9592 266.205 24.713 265.657C23.7903 265.535 22.6873 265.744 21.9519 265.311C17.5976 262.767 13.2289 260.229 9.10522 257.345C8.1464 256.675 7.72827 254.692 7.71385 253.308C7.46153 230.722 7.27409 208.143 7.15875 185.557C7.01456 155.761 7.01456 125.973 6.8055 96.1774C6.71899 84.1453 6.04854 72.142 1.24724 60.8237C1.12468 60.5353 1.23282 60.146 2.04025 59.3818C5.0753 64.7671 8.26175 70.0802 11.0877 75.5736C12.9549 79.1926 14.3535 83.0567 15.8746 86.8415C18.9457 94.4832 20.3948 102.32 20.4957 110.668C21.058 157.751 21.9808 204.834 22.7954 251.917C22.8242 253.582 22.954 255.247 23.0621 257.316C35.2024 255.601 45.187 260.474 54.732 266.833C66.4829 274.654 75.9773 284.769 84.6067 295.799C85.4141 296.83 86.2143 297.868 87.2164 299.158C90.3524 295.374 93.2865 291.762 96.3 288.222C103.74 279.477 112.11 271.807 121.828 265.614C130.817 259.89 140.197 255.658 151.839 257.446C151.839 255.399 151.81 253.64 151.847 251.895C152.726 202.649 153.577 153.411 154.55 104.165C154.615 100.871 155.292 97.4822 156.287 94.3246C159.748 83.2946 164.16 72.6611 170.59 62.972C171.347 61.8329 172.169 60.7516 173.323 59.8144C170.057 69.0061 168.283 78.3707 168.168 88.0166C167.959 105.434 167.764 122.851 167.635 140.269C167.368 177.872 167.108 215.467 166.979 253.07C166.971 255.875 166.157 257.583 163.677 258.708C162.372 259.299 161.132 260.063 159.935 260.863C155.444 263.877 151.025 266.616 145.092 265.672C142.77 265.304 140.132 266.371 137.745 267.121C127.516 270.336 110.754 282.765 104.172 291.913C106.393 294.667 108.635 297.45 110.978 300.362C115.001 295.921 118.749 291.401 122.909 287.307C126.975 283.305 131.466 279.73 136.592 275.253C136.592 293.168 136.592 309.857 136.592 326.467C137.19 326.582 137.536 326.726 137.601 326.647C143.087 319.986 148.682 313.411 153.973 306.598C156.698 303.095 156.929 298.747 156.158 294.53C155.718 292.122 156.41 290.846 158.349 289.549C161.024 287.753 163.446 285.584 166.387 283.241C166.387 305.502 166.387 327.368 166.387 349.558C163.287 349.558 159.914 349.558 156.237 349.558C156.237 335.471 156.237 321.406 156.237 306.281C150.037 314.06 144.335 320.851 139.115 327.995C137.63 330.021 137.111 333.034 136.909 335.658C136.563 340.178 136.815 344.749 136.815 349.565C133.492 349.565 130.089 349.565 126.369 349.565C126.369 330.115 126.369 310.729 126.369 291.351C126.059 291.156 125.749 290.962 125.439 290.767C121.64 294.955 117.769 299.086 114.128 303.412C113.681 303.945 114.323 305.546 114.676 306.577C116.716 312.575 118.944 318.508 120.826 324.549C121.352 326.236 120.905 328.226 120.905 330.071C120.422 330.266 119.946 330.461 119.463 330.655C115.462 324.924 111.454 319.185 107.164 313.043C105.939 314.831 105.146 315.977 104.086 317.527C102.889 315.761 101.786 314.125 100.589 312.351C104.886 311.551 107.496 307.326 107.424 304.904C107.33 301.609 103.834 298.416 101.339 294.458C98.1671 298.805 95.4565 302.266 93.0991 305.957C92.6521 306.656 93.4019 308.336 93.9354 309.395C97.7202 317.001 102.305 324.297 105.297 332.205C113.494 353.89 105.686 383.65 88.3915 399.077C88.132 399.308 87.7932 399.452 86.8488 400.022C84.1742 396.828 81.1103 393.786 78.7745 390.268C62.2079 365.324 61.6672 340.042 77.5562 314.535C82.5088 306.584 82.516 306.577 76.7992 299.036C75.8692 297.803 74.8888 296.606 73.1658 294.415C70.8877 298.401 67.1389 301.97 67.4129 305.2C67.8166 309.893 71.9258 312.135 74.7446 311.385C73.5406 313.187 72.416 314.889 71.2698 316.561C71.0823 316.842 70.7651 317.03 70.9886 316.828C69.4314 315.905 68.0617 315.098 66.692 314.29C66.1008 312.214 65.5024 310.145 64.7311 307.463C59.627 313.548 57.2624 319.935 58.214 323.612C61.0616 320.461 63.9813 317.261 66.9082 314.052ZM87.3101 380.197C101.137 367.465 101.123 332.133 87.2885 315.747C72.9351 337.316 73.2018 362.332 87.3101 380.197ZM116.262 323.843C117.019 317.628 113.753 313.036 110.415 308.163C109.262 309.828 107.604 312.164 108.195 313.137C110.495 316.936 113.508 320.31 116.262 323.843Z"
            fill={fill}
          />
          <path
            d="M109.738 232.899C121.604 232.899 132.331 232.899 143.577 232.899C134.17 240.397 124.545 247.015 116.226 254.995C107.82 263.069 100.719 272.492 92.9187 281.467C93.9352 272.441 97.6912 264.194 102.356 256.307C107.063 248.355 113.631 242.156 121.28 236.691C110.718 236.23 100.15 235.768 89.6386 235.307C89.6386 234.413 89.5521 234.052 89.653 233.988C103.163 225.322 108.815 211.697 112.816 197.084C117.221 181.022 116.55 164.751 114.69 148.429C111.713 122.361 103.228 97.6769 95.8673 72.6971C93.0197 63.0369 90.7271 53.218 88.1751 43.4712C88.0021 42.8152 87.7209 42.188 87.5695 41.7843C83.9722 54.2273 80.1946 66.6847 76.7918 79.2359C71.6373 98.2248 66.007 117.127 61.9338 136.347C57.9904 154.961 56.635 173.971 60.8452 192.874C63.8298 206.268 68.3788 218.993 78.522 228.876C80.555 230.852 82.9485 232.459 85.1473 235.242C74.6219 235.718 64.0965 236.201 52.3672 236.734C69.5971 247.562 78.2193 262.904 81.3552 281.712C68.2923 261.786 51.1489 246.178 30.8479 233.807C31.0714 233.497 31.2877 233.187 31.5111 232.885C42.2095 232.885 52.9079 232.885 63.6351 232.885C63.6351 232.885 63.7361 232.524 63.664 232.481C51.5454 225.524 46.6936 213.658 42.8079 201.251C36.8387 182.204 38.4464 163.086 42.5123 143.924C48.4454 115.945 58.769 89.444 69.2655 62.9864C76.7702 44.0768 83.071 24.8356 85.7961 4.57063C85.9979 3.04949 86.5242 1.57162 87.62 -0.0216064C87.9877 1.1607 88.55 2.31416 88.7014 3.5253C91.686 27.1064 99.7891 49.1737 108.563 71.0535C118.756 96.4874 127.998 122.224 133.232 149.237C137.269 170.078 137.024 190.567 128.582 210.428C124.726 219.512 119.975 227.91 109.738 232.899Z"
            fill={fill}
          />
          <path
            d="M8.41309 265.686C23.0116 272.189 30.6389 283.125 32.3475 298.416C29.161 289.484 21.1156 284.863 15.0239 278.497C11.7005 275.022 9.50167 270.855 8.41309 265.686Z"
            fill={fill}
          />
          <path
            d="M166.301 265.218C165.133 271.014 162.826 275.253 159.344 278.771C156.41 281.741 152.913 284.185 150.116 287.27C147.261 290.414 144.954 294.054 142.676 297.111C141.869 293.824 142.842 289.592 146.014 284.69C148.501 280.847 150.57 276.536 153.786 273.429C157.124 270.214 161.615 268.202 166.301 265.218Z"
            fill={fill}
          />
          <path
            d="M154.261 71.5077C152.683 54.1048 158.198 45.6917 174.815 39.6288C171.152 44.8266 167.469 49.7216 164.152 54.8617C160.786 60.0884 157.787 65.5457 154.261 71.5077Z"
            fill={fill}
          />
          <path
            d="M0 39.1168C4.94548 41.8419 9.52329 44.1632 13.8632 46.8667C15.269 47.739 16.3432 49.4692 17.0713 51.0336C19.9405 57.2334 20.9498 63.8154 20.4956 70.8732C13.7046 60.355 7.04335 50.0243 0 39.1168Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_32_81">
            <rect width="174.815" height="400" fill={fill} />
          </clipPath>
        </defs>
      </svg>
    ),
    {
      width: 175 * size,
      height: 400 * size,
    },
  );
}