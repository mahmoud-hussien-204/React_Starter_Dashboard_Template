import { z } from 'zod';

export const createNewPasswordFormSchema = z
  .object({
    code: z.string({ required_error: 'Code is required' }).min(6, 'Code must be at least 6 digits'),
    email: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm_password: z.string().min(8, 'Confirm password must be at least 8 characters'),
  })
  .refine((data) => data.confirm_password === data.password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export type ICreateNewPasswordFormSchema = z.infer<typeof createNewPasswordFormSchema>;
