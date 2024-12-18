import { z } from 'zod';

// TODO: i18n
export const LoginRequestSchema = z.object({
  username: z.string({ message: 'This field is required' }),
  password: z.string({ message: 'This field is required' }),
});

export const loginInitialValues = LoginRequestSchema.parse({
  username: '',
  password: '',
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
