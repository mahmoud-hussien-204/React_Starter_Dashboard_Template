import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { loginFormSchema, type ILoginFormSchema } from '../validation/login.schema';

import { apiLogin } from '../api/login.api';

import { userDataActions } from '@/core/store/slices/user-data-slice.store.slice';

import { useAppDispatch } from '@/shared/hooks/use-store.hook';

const useLoginForm = () => {
  const dispatch = useAppDispatch();

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
        console.log(res);
        dispatch(userDataActions.setToken(res.token));
        dispatch(userDataActions.setRole(res.role));
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  return { onSubmit, form, isPending };
};

export default useLoginForm;
