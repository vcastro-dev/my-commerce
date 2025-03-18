import { Router } from "express";
import { createProduct, getProducts } from "./product.handler";

const route = Router();

route.post("/", createProduct);
route.get("/", getProducts);

export default route;
