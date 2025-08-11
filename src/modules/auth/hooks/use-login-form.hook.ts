import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { loginFormSchema, type ILoginFormSchema } from '../validation/login.schema';

import { apiLogin } from '../api/login.api';

const useLoginForm = () => {
  const form = useForm<ILoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiLogin,
    options: {
      onSuccess: (res) => {
        console.log(res);

        // save user
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  return { onSubmit, form, isPending };
};

export default useLoginForm;
