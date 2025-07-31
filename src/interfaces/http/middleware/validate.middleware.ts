import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import { sendResponse } from "../utils/response.helper";

export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
      return sendResponse(res, 400, "Error de validación", err.errors);
    }
  };
