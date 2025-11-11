import { Router } from 'express';
import { validateSchema } from '../core/middlewares/validateSchema.middleware';
import { createUserSchema } from '../users/createUser.dto';
import AuthenticationController from './auth.controller';

export const authRoutes = Router();
const authenticationController = new AuthenticationController();

authRoutes.post(
  '/register',
  validateSchema(createUserSchema),
  authenticationController.register,
);

authRoutes.post('/login');
