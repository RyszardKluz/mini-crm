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
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    error: true,
    message: message,
  });
};
