import { Router } from "express";
import {
  addProduct,
  createCart,
  getCart,
  getProducts,
  removeProduct,
} from "./cart.handler";

const route = Router();

route.get("/", getCart);
route.post("/", createCart);

route.get("/products", getProducts);
route.post("/products", addProduct);
route.delete("/products/:productId", removeProduct);

export default route;
