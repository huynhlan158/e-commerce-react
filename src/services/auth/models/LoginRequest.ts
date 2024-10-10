import { z } from 'zod';

// TODO: i18n
export const LoginRequestSchema = z.object({
  username: z.string({ message: 'This field is required' }).default(''),
  password: z.string({ message: 'This field is required' }).default(''),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
