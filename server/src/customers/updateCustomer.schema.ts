import { z } from 'zod';

export const updateCustomerSchema = z
  .object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    status: z.string().optional(),
    phone: z.string().optional(),
  })
  .strict();

export type UpdateCustomerDTO = z.infer<typeof updateCustomerSchema>;
