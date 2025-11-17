import z from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(6, 'Invalid, or too short name'),
    email: z.email('Invalid email '),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Password must be the same',
    path: ['repeatPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
