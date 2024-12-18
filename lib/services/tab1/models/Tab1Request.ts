import { z } from 'zod';

export const CreateTab1RequestSchema = z.object({
  name: z.string(),
  description: z.string().default('').optional(),
});

export type CreateTab1Request = z.infer<typeof CreateTab1RequestSchema>;
