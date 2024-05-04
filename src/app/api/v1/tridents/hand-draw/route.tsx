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
        width={236 * size}
        height={400 * size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M143.852 247.831C160.608 236.184 177.308 224.565 194.174 212.823C192.704 211.463 190.781 209.76 188.927 207.974C179.725 199.061 177.336 187.373 176.031 175.397C173.943 156.335 177.734 137.835 182.719 119.637C188.502 98.528 196.316 78.1742 208.636 59.8531C209.954 57.8891 211.588 56.1311 214.115 54.7715C214.115 61.2814 214.28 67.7776 214.088 74.2875C213.525 92.9658 212.055 111.644 212.357 130.295C212.701 152.256 214.5 174.202 215.695 196.149C215.791 197.866 216.176 199.583 216.217 201.3C216.285 204.307 217.563 205.406 220.639 205.049C225.94 204.431 230.596 205.681 233.851 210.419C236.241 213.894 235.609 216.627 231.489 217.368C227.259 218.138 222.85 217.973 218.112 218.234C218.112 224.936 218.057 231.803 218.126 238.656C218.249 249.492 218.236 260.328 218.716 271.151C218.922 275.669 216.615 276.287 213.127 276.576C194.05 278.183 174.987 279.872 155.911 281.548C153.892 281.726 151.887 282.083 150.142 282.317C149.662 291.024 149.593 299.484 148.659 307.834C147.272 320.346 145.088 332.666 137.603 343.392C134.06 348.473 131.038 353.953 128.099 359.419C126.973 361.507 126.259 364.048 126.19 366.424C125.916 375.667 126.08 384.924 125.819 394.167C125.751 396.721 125.352 400.484 121.905 399.949C119.79 399.619 116.796 396.735 116.439 394.62C115.244 387.396 114.434 379.993 114.654 372.686C114.818 367.042 113.981 362.166 110.726 357.607C104.985 349.558 99.3952 341.414 93.5994 333.407C85.2766 321.926 79.3847 309.441 77.3933 295.295C77.0637 292.988 77.0774 290.626 76.9263 288.167C76.0611 287.975 75.3195 287.659 74.5778 287.659C59.5253 287.742 44.4729 287.865 29.4341 287.989C28.6513 287.989 27.8547 287.961 27.0856 288.099C22.7731 288.813 20.9465 287.096 20.4933 282.646C19.1473 269.242 17.4443 255.865 15.8374 242.488C15.604 240.497 15.1645 238.533 14.7799 236.28C13.3928 236.61 12.3353 236.733 11.3601 237.104C7.33608 238.642 3.5867 238.945 1.0871 234.618C-1.20648 230.649 0.235595 224.73 4.41074 222.148C7.15754 220.459 10.3713 219.511 13.4065 218.22C12.0331 165.234 6.91033 112.317 8.03652 59.235C8.86056 59.029 9.6846 58.823 10.5086 58.6307C26.0006 82.1708 40.5312 106.26 44.4179 135.088C48.2772 163.682 47.5905 191.796 32.9363 216.641C42.1655 220.047 51.3399 222.423 59.4841 226.735C67.5597 231.02 74.5916 237.255 82.8869 243.216C84.1504 233.973 85.0019 225.142 86.6088 216.462C90.0286 198.113 93.5308 179.778 97.596 161.567C99.972 150.896 103.735 140.54 106.358 129.91C107.1 126.93 106.427 123.4 105.699 120.283C97.802 86.7717 95.2887 53.0135 100.975 18.8982C101.785 14.0226 103.653 9.18827 105.836 4.75219C106.921 2.56848 109.888 -0.0272519 111.976 0.000216155C114.036 0.0276842 116.988 2.74702 117.881 4.97193C119.598 9.25694 121.026 14.0226 120.985 18.5686C120.861 31.2451 120.01 43.9216 119.268 56.5844C118.691 66.6102 118.334 76.6772 117.002 86.6207C115.533 97.6353 112.923 108.485 111.097 119.459C110.575 122.59 110.369 126.092 111.193 129.1C117.991 153.588 125.215 177.952 132.013 202.453C136.079 217.108 139.595 231.913 143.385 246.636C143.495 247.226 143.825 247.762 143.852 247.831ZM107.897 133.152C104.71 143.878 101.084 153.176 99.2441 162.817C94.3273 188.513 90.2209 214.374 85.6474 240.139C84.947 244.081 86.1968 246.746 88.6689 249.808C95.2475 257.925 101.867 266.138 107.306 275.01C111.989 282.66 111.275 283.099 120.477 282.138C120.793 282.111 121.095 282.028 121.411 282.028C124.089 282.028 125.38 280.833 126.396 278.169C128.443 272.785 130.05 266.495 133.895 262.663C142.918 253.681 141.037 244.383 137.919 233.987C128.868 203.813 120.298 173.502 111.495 143.273C110.616 140.279 109.421 137.409 107.897 133.152ZM212.77 62.4213C212.165 62.3526 211.561 62.2702 210.957 62.2016C210.119 63.52 209.103 64.7561 208.457 66.157C202.29 79.6987 195.368 92.9658 190.259 106.892C181.47 130.803 177.02 155.62 178.846 181.289C179.643 192.579 184.505 201.753 193.432 208.647C194.984 209.842 197.593 210.982 199.242 210.515C203.829 209.197 208.182 207.013 213.58 204.774C207.633 157.612 209.707 110.023 212.77 62.4213ZM148.975 278.21C169.301 276.562 189.38 274.941 209.46 273.293C213.676 272.95 215.036 269.819 215.022 266.371C214.967 251.511 214.665 236.665 214.349 221.805C214.321 220.486 214.033 218.714 213.168 217.973C209.569 214.869 197.813 214.32 193.542 217.066C181.964 224.551 170.373 232.009 159.042 239.851C154.455 243.024 150.431 247.034 146.352 250.893C145.404 251.786 144.717 253.681 144.923 254.958C146.16 262.979 147.684 270.959 148.975 278.21ZM12.2941 71.9802C15.2606 120.722 12.3902 169.505 16.5516 218.275C19.7516 218.014 22.2512 217.478 24.6959 217.684C27.9234 217.945 29.5028 216.393 30.8487 213.784C41.369 193.252 45.4342 171.277 43.1269 148.589C41.8222 135.775 38.2239 123.057 34.4882 110.655C30.1757 96.3031 22.1688 83.709 12.2941 71.9802ZM76.8165 284.706C77.9701 274.2 78.9727 264.531 80.1264 254.876C80.5796 251.154 81.3075 248.38 77.6405 244.782C65.2936 232.627 51.024 224.551 34.2548 220.692C33.1286 220.431 31.3706 220.761 30.6015 221.516C26.6186 225.472 21.2074 229.084 19.5182 233.945C17.8289 238.766 19.9714 244.919 20.4246 250.495C20.4521 250.811 20.4521 251.127 20.4933 251.429C21.6057 260.933 22.5396 270.45 24.0092 279.899C24.2839 281.657 26.6186 284.459 28.047 284.487C44.1844 284.816 60.3219 284.706 76.8165 284.706ZM113.624 352.758C114.873 343.68 116.274 333.531 117.634 323.368C117.771 322.296 117.84 321.129 117.579 320.085C115.093 310.059 112.58 300.034 109.902 290.063C109.6 288.95 108.254 287.302 107.361 287.288C98.6261 287.082 89.8913 287.165 81.0878 287.165C80.8955 289.129 80.7169 290.2 80.7032 291.271C80.456 303.495 84.2328 314.537 91.402 324.26C98.7634 334.231 106.647 343.845 113.624 352.758ZM108.295 116.863C108.748 116.849 109.188 116.822 109.641 116.808C110.012 114.885 110.533 112.976 110.726 111.04C112.676 91.8671 115.093 72.7081 116.302 53.4805C117.153 40.0761 116.508 26.5481 116.123 13.0887C116.027 9.91618 115.739 5.02687 111.55 5.10927C109.778 5.15047 107.265 9.97111 106.523 12.9789C100.384 38.0984 100.26 63.6162 102.774 89.134C103.68 98.4731 106.4 107.634 108.295 116.863ZM126.108 355.134C139.567 337.294 146.105 317.009 146.626 294.87C146.956 280.998 148.59 282.33 134.129 283.772C128.305 284.349 126.341 286.972 125.188 292.233C121.837 307.354 119.584 322.365 123.526 337.788C124.94 343.351 125.256 349.188 126.108 355.134ZM107.759 283.017C101.634 270.904 94.2724 260.892 83.9582 251.099C82.6809 262.965 81.541 273.444 80.3324 284.665C89.8363 284.102 98.3239 283.594 107.759 283.017ZM143.014 256.579C142.602 256.456 142.19 256.332 141.778 256.222C136.23 263.57 131.478 271.343 128.868 281.232C135.021 280.888 140.35 280.572 146.091 280.257C144.992 271.741 144.003 264.16 143.014 256.579ZM112.594 287.082C114.461 294.636 116.219 301.805 118.238 310.032C120.188 301.187 121.892 293.469 123.704 285.256C119.873 285.887 116.412 286.451 112.594 287.082ZM119.708 367.948C124.116 357.483 120.079 347.031 119.612 336.58C118.623 347.045 114.64 357.51 119.708 367.948ZM13.6125 219.896C9.65713 222.738 6.63565 224.551 4.12232 226.9C3.25708 227.71 3.27081 231.13 3.5867 231.226C6.4159 232.16 9.39618 232.943 12.3215 232.943C12.9396 232.943 13.8597 229.592 14.0795 227.71C14.3267 225.746 13.8872 223.7 13.6125 219.896ZM231.928 215.789C232.121 215.199 232.313 214.608 232.505 214.031C229.69 207.535 223.29 208.565 217.233 207.178C217.508 210.007 217.714 212.246 217.975 214.841C222.809 215.171 227.369 215.487 231.928 215.789ZM27.2641 219.896C18.3096 219.415 15.3842 219.113 18.8727 229.578C21.592 226.447 24.0778 223.576 27.2641 219.896ZM213.388 207.782C209.144 209.513 205.793 210.886 202.428 212.259C202.538 212.713 202.648 213.152 202.757 213.605C206.218 214.059 209.679 214.512 213.388 214.993C213.388 212.603 213.388 210.804 213.388 207.782ZM118.225 395.595C118.76 395.581 119.31 395.581 119.845 395.567C119.104 387.959 118.376 380.35 117.634 372.741C117.236 372.769 116.837 372.81 116.439 372.838C117.03 380.419 117.62 388 118.225 395.595ZM122.084 391.2C122.468 391.241 122.853 391.282 123.237 391.324C123.237 386.407 123.237 381.504 123.237 376.587C122.853 376.587 122.468 376.587 122.084 376.601C122.084 381.476 122.084 386.338 122.084 391.2Z"
          fill={fill}
        />
      </svg>
    ),

    {
      width: 236 * size,
      height: 400 * size,
    },
  );
}
