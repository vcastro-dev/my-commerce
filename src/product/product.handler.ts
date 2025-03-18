import { Request, Response } from "express";
import { Product } from "./product.model";

const products: Product[] = [];

export async function createProduct(req: Request, res: Response) {
  const { name, price } = req.body;
  const product: Product = {
    id: Math.random().toString(),
    name,
    price,
  };
  products.push(product);
  res.status(201).json(product);
}

export async function getProducts(req: Request, res: Response) {
  res.json(products);
}
