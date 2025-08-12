import AnimationPage from '@/shared/components/animations/animation-page';

import FormTitle from '../components/form-title';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';

import { Button } from '@/shared/components/ui/button';

import { Navigate } from 'react-router';

import useCreateNewPasswordForm from '../hooks/use-create-new-password-form.hook';

import { InputPassword } from '@/shared/components/ui/input';

import BackBtn from '../components/back-btn';

const CreateNewPasswordPage = () => {
  const { email, code, form, onSubmit, isPending } = useCreateNewPasswordForm();

  if (!email || !code) return <Navigate to='/auth/forgot-password' replace />;

  return (
    <AnimationPage>
      <FormTitle title='Set new password' description='Enter your new password' />

      <Form {...form}>
        <form
          onSubmit={onSubmit}
          id='create-new-password-form'
          className='gap-1.25rem flex flex-col'
        >
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormControl>
                  <InputPassword
                    placeholder='Enter password'
                    id='password'
                    autoComplete='off'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirm_password'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='confirm_password'>Confirm password</FormLabel>
                <FormControl>
                  <InputPassword
                    placeholder='Confirm password'
                    id='confirm_password'
                    autoComplete='off'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='mt-1.25rem'
            isLoading={isPending}
            disabled={isPending || !form.formState.isValid}
          >
            Reset Password
          </Button>

          <BackBtn />
        </form>
      </Form>
    </AnimationPage>
  );
};

export default CreateNewPasswordPage;
