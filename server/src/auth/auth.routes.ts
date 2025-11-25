import AuthenticationController from './auth.controller';
import { Router } from 'express';
import { validateSchema } from '../core/middlewares/validateSchema.middleware';
import { loginSchema } from './login.dto';
import { registerSchema } from './register.dto';
import { authenticate } from '../core/middlewares/authenticate.middleware';

export const authRoutes = Router();
const authenticationController = new AuthenticationController();

authRoutes.post(
  '/register',
  validateSchema(registerSchema),
  authenticationController.register,
);

authRoutes.post('/login', validateSchema(loginSchema), authenticationController.login);

authRoutes.get('/me', authenticate, authenticationController.authorize);
