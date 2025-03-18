import { Router } from "express";
import { createProduct, getProductById, getProducts } from "./product.handler";
import { schemaValidation } from "../../middleware/schemaValidation";
import { productSchema } from "./schema/product.schema";

const route = Router();

route.post("/", schemaValidation(productSchema), createProduct);
route.get("/", getProducts);
route.get("/:id", getProductById);

export default route;
