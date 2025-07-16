import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { editUserFormSchema, type IEditUserFormSchema } from '../validation/user.schema';

import type { IUser } from '../interfaces/users.interface';

import { EnumUserRoles } from '@/shared/enums/index.enum';

const useEditUserForm = (user: IUser | undefined) => {
  const form = useForm<IEditUserFormSchema>({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      avatar: user?.avatar,
      phone: user?.phone,
      role: user?.role as EnumUserRoles,
      status: user?.status,
      image: undefined,
    },
    resolver: zodResolver(editUserFormSchema),
  });

  const onSubmit = (data: IEditUserFormSchema) => {
    console.log(data);
  };

  return { onSubmit, form };
};

export default useEditUserForm;
