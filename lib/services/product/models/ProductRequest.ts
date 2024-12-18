import { z } from 'zod';

export const SearchProductRequestSchema = z.object({
  categoryId: z.string().optional().default(''),
});

export type SearchProductRequest = z.infer<typeof SearchProductRequestSchema>;
