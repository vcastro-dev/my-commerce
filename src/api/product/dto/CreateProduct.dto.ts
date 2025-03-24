import { z } from "zod";

export const CreateProductDto = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

export type CreateProductDto = z.infer<typeof CreateProductDto>;
