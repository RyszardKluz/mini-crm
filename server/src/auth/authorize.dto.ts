import z from 'zod';
export const authorizeDTO = z.object({
  userId: z.string(),
});

export type AuthorizeDTO = z.infer<typeof authorizeDTO>;
