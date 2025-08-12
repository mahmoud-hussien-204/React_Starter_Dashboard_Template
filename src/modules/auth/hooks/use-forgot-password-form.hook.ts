import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import {
  forgotPasswordFormSchema,
  type IForgotPasswordFormSchema,
} from '../validation/forgot-password.schema';

import { apiForgotPassword } from '../api/forgot-password.api';

import { setForgotPasswordEmail } from '../utils/forgot-password.utils';

import { useNavigate } from 'react-router';

const useForgotPasswordForm = () => {
  const navigate = useNavigate();

  const form = useForm<IForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiForgotPassword,
    options: {
      onSuccess: (res) => {
        setForgotPasswordEmail(res.email);
        navigate('/auth/forgot-password/verify');
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  return { onSubmit, form, isPending };
};

export default useForgotPasswordForm;
