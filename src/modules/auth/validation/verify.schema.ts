import { z } from 'zod';

export const verifyFormSchema = z.object({
  code: z.string({ required_error: 'Code is required' }).min(6, 'Code must be at least 6 digits'),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
});

export type IVerifyFormSchema = z.infer<typeof verifyFormSchema>;
