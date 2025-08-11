import { z } from 'zod';

export const forgotPasswordFormSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
});

export type IForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
