import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router';

import { verifyFormSchema, type IVerifyFormSchema } from '../validation/verify.schema';

import { apiVerify } from '../api/verify.api';

import { setVerifyCodeUtil } from '../utils/verify.utils';

import { useState } from 'react';

import { getForgotPasswordEmailUtil } from '../utils/forgot-password.utils';

const useVerifyForm = () => {
  const navigate = useNavigate();

  const [email] = useState(() => getForgotPasswordEmailUtil());

  const form = useForm<IVerifyFormSchema>({
    resolver: zodResolver(verifyFormSchema),
    defaultValues: {
      code: '',
      email,
    },
  });

  const { mutate, isPending } = useReactMutation({
    mutationFn: apiVerify,
    options: {
      onSuccess: (res) => {
        setVerifyCodeUtil(res.code);
        navigate('/auth/forgot-password/create-new-password');
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  return { email, onSubmit, form, isPending };
};

export default useVerifyForm;
