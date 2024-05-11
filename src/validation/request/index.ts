import { z } from "zod";

export const ImageRequestValidationSchema = z.object({
  fill: z.string().regex(/^([0-9a-f]{3}){1,2}$/i, "Invalid fill value !"),
  size: z.number().int().gte(1).lte(3),
});

export type GetImageRequestFields = z.infer<
  typeof ImageRequestValidationSchema
>;
