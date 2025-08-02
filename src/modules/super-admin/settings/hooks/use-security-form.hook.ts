import { useForm } from 'react-hook-form';

import { securityFormSchema, type ISecurityormSchema } from '../validation/account.schema';

import { zodResolver } from '@hookform/resolvers/zod';

const useSecurityForm = () => {
  const form = useForm<ISecurityormSchema>({
    defaultValues: {
      current_password: '',
      new_password: '',
      confirm_new_password: '',
    },
    resolver: zodResolver(securityFormSchema),
    mode: 'all',
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return { onSubmit, form, isPending: false };
};

export default useSecurityForm;
