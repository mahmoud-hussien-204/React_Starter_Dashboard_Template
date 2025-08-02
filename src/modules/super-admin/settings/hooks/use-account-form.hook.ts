import { useForm } from 'react-hook-form';

import { accountFormSchema, type IAccountFormSchema } from '../validation/account.schema';

import useSettings from './use-settings.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { queryKeys } from '@/shared/constants/query-keys.constant';

import { getDirtyFields } from '@/shared/utils/get-dirty-fields.utils';

import { apiSaveAccountForm } from '../api/settings.api';

const useAccountForm = () => {
  const { settings } = useSettings();

  const form = useForm<IAccountFormSchema>({
    defaultValues: {
      firstName: settings?.firstName || '',
      lastName: settings?.lastName || '',
      email: settings?.email || '',
      avatar: settings?.avatar || '',
      phone: settings?.phone || '',
      image: undefined,
    },
    resolver: zodResolver(accountFormSchema),
  });

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiSaveAccountForm,
    options: {
      meta: {
        invalidatesQuery: [queryKeys.settings.list],
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    const payload = getDirtyFields(data, form.formState.dirtyFields);
    mutate(payload);
  });

  return { settings, onSubmit, form, isPending };
};

export default useAccountForm;
