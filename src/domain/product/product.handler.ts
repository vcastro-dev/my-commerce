import { Request, Response } from "express";

const products: Product[] = [];

export async function createProduct(req: Request, res: Response) {
  const { name, price } = req.body;
  const product: Product = {
    id: `${products.length + 1}`,
    name,
    price,
  };
  products.push(product);
  res.status(201).json(product);
}

export async function getProducts(req: Request, res: Response) {
  res.json(products);
}

export async function getProductById(req: Request, res: Response) {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    res.status(404).json({});
    return;
  }
  res.json(product);
}
