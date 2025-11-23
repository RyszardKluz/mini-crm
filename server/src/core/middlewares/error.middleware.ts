import { NextFunction } from 'express';
import { AppError } from '../errors/app-error';
import { Request, Response } from 'express';

type ErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

export const errorHandler: ErrorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode;
  const message = err.message;
  res.status(statusCode).json({
    error: true,
    message: message,
  });
};
