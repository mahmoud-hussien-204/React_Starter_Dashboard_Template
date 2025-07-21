import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { editUserFormSchema, type IEditUserFormSchema } from '../validation/user.schema';

import type { IUser } from '../interfaces/users.interface';

import { EnumUserRoles } from '@/shared/enums/index.enum';

import { getDirtyFields } from '@/shared/utils/get-dirty-fields.utils';

import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { apiEditUser } from '../api/users.api';

import { queryKeys } from '@/shared/constants/query-keys.constant';

import { useDialogContext } from '@/shared/components/ui/dialog';

const useEditUserForm = (user: IUser | undefined) => {
  const { closeDialog } = useDialogContext();

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

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiEditUser,
    options: {
      meta: {
        invalidatesQuery: [queryKeys.users.list],
      },
      onSuccess: () => {
        closeDialog();
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    const payload = getDirtyFields(data, form.formState.dirtyFields);
    mutate({
      id: data.id,
      ...payload,
    });
  });

  return { onSubmit, form, isPending };
};

export default useEditUserForm;
