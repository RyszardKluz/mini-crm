import { Request, Response, NextFunction, RequestHandler } from 'express';
import { z } from 'zod';

export const validateSchema =
  <T extends z.ZodTypeAny>(schema: T): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(JSON.stringify(req.body));
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Invalid data',
        details: result.error.flatten(),
      });
    }
    req.body = result.data;
    next();
  };
