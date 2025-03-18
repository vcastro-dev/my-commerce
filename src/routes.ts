import { Router } from "express";
import productRoute from "./product";

const routes = Router();

routes.use("/product", productRoute);

export default routes;
