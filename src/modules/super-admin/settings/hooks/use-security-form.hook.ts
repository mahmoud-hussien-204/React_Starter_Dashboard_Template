import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { securityFormSchema, type ISecurityFormSchema } from '../validation/security.schema';

const useSecurityForm = () => {
  const form = useForm<ISecurityFormSchema>({
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
