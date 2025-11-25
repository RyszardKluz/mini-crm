import z from 'zod';

export const loginSchema = z.object({
  email: z.email('Invalid email format!'),
  password: z.string().min(8),
});

export type LoginDTO = z.infer<typeof loginSchema>;
