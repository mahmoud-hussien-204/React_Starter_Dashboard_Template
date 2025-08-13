import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router';

import { apiVerify } from '../api/verify.api';

import { getVerifyCodeUtil, removeVerifyCodeUtil } from '../utils/verify.utils';

import { useState } from 'react';

import {
  getForgotPasswordEmailUtil,
  removeForgotPasswordEmailUtil,
} from '../utils/forgot-password.utils';

import {
  createNewPasswordFormSchema,
  type ICreateNewPasswordFormSchema,
} from '../validation/create-new-password.schema';

const useCreateNewPasswordForm = () => {
  const navigate = useNavigate();

  const [email] = useState(() => getForgotPasswordEmailUtil());

  const [code] = useState(() => getVerifyCodeUtil());

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
        removeForgotPasswordEmailUtil();
        removeVerifyCodeUtil();
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
