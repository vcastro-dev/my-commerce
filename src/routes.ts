import { Router } from "express";
import productRoute from "./domain/product";
import { schemaValidation } from "./middleware/schemaValidation";
import { schema } from "./domain/product/schema/product.schema";

const routes = Router();

routes.use("/product", productRoute);

export default routes;
