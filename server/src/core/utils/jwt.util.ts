import jwt, { Secret } from 'jsonwebtoken';
import { env } from '../config/env.config';

export const generateToken = (payload: object) =>
  jwt.sign(payload, env.secret as Secret, { expiresIn: '1h' });

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, env.secret as Secret);
  } catch {
    return null;
  }
};
