import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});
