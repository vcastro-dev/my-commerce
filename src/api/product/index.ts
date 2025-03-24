import { Router } from "express";
import { schemaValidation } from "../../middleware/schemaValidation";
import { create, findAll, findById, remove } from "./product.controller";
import { CreateProductDto } from "./dto/CreateProduct.dto";

const productRouter = Router();

productRouter.get("/", findAll);
productRouter.get("/:id", findById);
productRouter.post(
  "/",
  schemaValidation<CreateProductDto>(CreateProductDto),
  create
);
productRouter.put(
  "/:id",
  schemaValidation<CreateProductDto>(CreateProductDto),
  create
);
productRouter.delete("/:id", remove);

export { productRouter };
