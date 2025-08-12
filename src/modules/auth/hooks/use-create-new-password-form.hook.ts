import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router';

import { apiVerify } from '../api/verify.api';

import { getVerifyCode, removeVerifyCode } from '../utils/verify.utils';

import { useState } from 'react';

import { getForgotPasswordEmail, removeForgotPasswordEmail } from '../utils/forgot-password.utils';

import {
  createNewPasswordFormSchema,
  type ICreateNewPasswordFormSchema,
} from '../validation/create-new-password.schema';

const useCreateNewPasswordForm = () => {
  const navigate = useNavigate();

  const [email] = useState(() => getForgotPasswordEmail());

  const [code] = useState(() => getVerifyCode());

  const form = useForm<ICreateNewPasswordFormSchema>({
    resolver: zodResolver(createNewPasswordFormSchema),
    defaultValues: {
      code,
      email,
      password: '',
      confirm_password: '',
    },
    mode: 'onChange',
  });

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiVerify,
    options: {
      onSuccess: () => {
        removeForgotPasswordEmail();
        removeVerifyCode();
        navigate('/auth/login');
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);

    mutate(data);
  });

  return { email, code, onSubmit, form, isPending };
};

export default useCreateNewPasswordForm;
