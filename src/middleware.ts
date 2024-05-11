import { chain, validateGetImageData } from "./middlewares";

export default chain([validateGetImageData]);

export const config = {
  matcher: "/api/v1/:path*",
};
