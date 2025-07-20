import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { createUserFormSchema, type ICreateUserFormSchema } from '../validation/user.schema';

import { EnumUserRoles } from '@/shared/enums/index.enum';

import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { queryKeys } from '@/shared/constants/query-keys.constant';

import { useDialogContext } from '@/shared/components/ui/dialog';

import { apiCreateUser } from '../api/users.api';

const useCreateUserForm = () => {
  const { closeDialog } = useDialogContext();

  const form = useForm<ICreateUserFormSchema>({
    defaultValues: {
      role: EnumUserRoles.USER,
    },
    resolver: zodResolver(createUserFormSchema),
  });

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiCreateUser,
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
    mutate(data);
  });

  return { onSubmit, form, isPending };
};

export default useCreateUserForm;
