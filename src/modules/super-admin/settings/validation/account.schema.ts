import { z } from 'zod';

export const accountFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  avatar: z.string().url('Invalid avatar URL'),
  phone: z.string().min(8, 'Phone must be at least 8 digits'),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.type.startsWith('image/'), {
      message: 'Avatar must be an image file',
    }),
});

export type IAccountFormSchema = z.infer<typeof accountFormSchema>;

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

export type ISecurityormSchema = z.infer<typeof securityFormSchema>;
