import z from 'zod';
import { createUserSchema } from '../users/createUser.dto';

export const registerSchema = createUserSchema;

export type RegisterDTO = z.infer<typeof registerSchema>;
