import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.util';
import { JwtPayload } from 'jsonwebtoken';
import { AppError } from '../errors/app-error';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.auth_token;

  if (!token) {
    throw new AppError('No token provided', 401);
  }
  try {
    const decoded = verifyToken(token);

    req.userId = (decoded as JwtPayload).userId;

    next();
  } catch {
    throw new AppError('Invalid or expired token', 401);
  }
};
