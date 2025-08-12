import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { loginFormSchema, type ILoginFormSchema } from '../validation/login.schema';

import { apiLogin } from '../api/login.api';

import { useSetAtom } from 'jotai';

import { userDataSetRoleAtom, userDataSetTokenAtom } from '@/core/store/atoms/user-data.atoms';

const useLoginForm = () => {
  const setToken = useSetAtom(userDataSetTokenAtom);
  const setRole = useSetAtom(userDataSetRoleAtom);

  const form = useForm<ILoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiLogin,
    options: {
      onSuccess: (res) => {
        setToken(res.token);
        setRole(res.role);
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  return { onSubmit, form, isPending };
};

export default useLoginForm;
