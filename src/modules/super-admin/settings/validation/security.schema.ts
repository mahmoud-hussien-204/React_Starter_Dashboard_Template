import { z } from 'zod';

export const securityFormSchema = z
  .object({
    current_password: z.string().min(8, 'Current password must be at least 8 characters'),
    new_password: z.string().min(8, 'New password must be at least 8 characters'),
    confirm_new_password: z.string().min(8, 'Confirm password must be at least 8 characters'),
  })
  .refine((data) => data.new_password !== data.current_password, {
    message: 'New password must be different from current password',
    path: ['new_password'],
  })
  .refine((data) => data.confirm_new_password === data.new_password, {
    message: 'Passwords do not match',
    path: ['confirm_new_password'],
  });

export type ISecurityFormSchema = z.infer<typeof securityFormSchema>;
