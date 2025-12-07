import { z } from 'zod';

export const createCustomerSchema = z
  .object({
    name: z.string().min(2, 'Name must have at least 2 characters'),
    email: z.email('Invalid email format'),
    phone: z.string().optional(),
    status: z.string().default('active'),
    userId: z.string('Missing user ID'),
  })
  .strict();

export type CreateCustomerDTO = z.infer<typeof createCustomerSchema>;
