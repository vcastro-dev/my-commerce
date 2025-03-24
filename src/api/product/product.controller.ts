import { Request, Response } from "express";
import * as ProductService from "./product.service";
import { UpdateProductDto } from "./dto/UpdateProduct.dto";
import { CreateProductDto } from "./dto/CreateProduct.dto";

export async function findAll(req: Request, res: Response) {
  try {
    const products = await ProductService.findAll();
    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export async function findById(req: Request, res: Response) {
  try {
    const product = await ProductService.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export async function create(req: Request, res: Response) {
  try {
    const body: CreateProductDto = req.body;
    const product = await ProductService.create(body);
    res.status(201).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export async function update(req: Request, res: Response) {
  try {
    const body: UpdateProductDto = req.body;
    const product = await ProductService.update(req.params.id, body);
    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export async function remove(req: Request, res: Response) {
  try {
    await ProductService.remove(req.params.id);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
