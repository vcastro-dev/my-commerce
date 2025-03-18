import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export function schemaValidation(schema: z.Schema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => ({
          message: err.path.join(".") + ": " + err.message,
        }));
        res.status(400).json({ errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
}
