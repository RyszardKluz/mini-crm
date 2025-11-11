import { z } from 'zod';

export const createCustomerSchema = z.object({
  name: z.string().min(2, 'Name must have at least 2 characters'),
  email: z.email('Invalid email format'),
  phone: z.number().optional(),
  status: z.string(),
  userId: z.string(),
});

export type CreateCustomerDTO = z.infer<typeof createCustomerSchema>;
