import { Router } from "express";
import { productRouter } from "../api/product";

const apiRoutes = Router();

apiRoutes.use("/products", productRouter);

export { apiRoutes };
