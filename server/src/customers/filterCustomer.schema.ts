import { z } from 'zod';

export const filterCustomerSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  status: z.string().optional(),
  phone: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string().optional,
});

export type FilterCustomerDTO = z.infer<typeof filterCustomerSchema>;
