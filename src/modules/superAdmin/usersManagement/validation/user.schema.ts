import { EnumUserRoles } from '@/shared/enums/index.enum';

import { z } from 'zod';

const userFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  avatar: z.string().url('Invalid avatar URL'),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.type.startsWith('image/'), {
      message: 'Avatar must be an image file',
    }),
  phone: z.string().min(8, 'Phone must be at least 8 digits'),
  role: z.nativeEnum(EnumUserRoles),
  status: z.boolean(),
});

export const createUserFormSchema = userFormSchema;

export const editUserFormSchema = userFormSchema.extend({
  id: z.string(),
});

export type ICreateUserFormSchema = z.infer<typeof createUserFormSchema>;

export type IEditUserFormSchema = z.infer<typeof editUserFormSchema>;

export type IUserFormSchema = ICreateUserFormSchema | IEditUserFormSchema;
