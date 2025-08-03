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
