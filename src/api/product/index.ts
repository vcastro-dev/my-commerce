import { Router } from "express";
import { createProduct, getProductById, getProducts } from "./product.handler";
import { schemaValidation } from "../../middleware/schemaValidation";
import { productSchema } from "./schema/product.schema";

const route = Router();

route.get("/", getProducts);
route.get("/:id", getProductById);
route.post("/", schemaValidation(productSchema), createProduct);

export default route;
