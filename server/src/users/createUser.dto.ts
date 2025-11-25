import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(2, 'Name must have at least 2 characters'),
  email: z.email('Invalid email format'),
  password: z.string().min(8, 'Password must have at last 8 characters'),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
