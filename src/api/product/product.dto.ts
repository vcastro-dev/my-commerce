import { z } from "zod";
import { productSchema } from "./schema/product.schema";

export type ProductDTO = z.infer<typeof productSchema>;
