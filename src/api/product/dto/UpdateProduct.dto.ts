import { z } from "zod";

export const UpdateProductDto = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

export type UpdateProductDto = z.infer<typeof UpdateProductDto>;
