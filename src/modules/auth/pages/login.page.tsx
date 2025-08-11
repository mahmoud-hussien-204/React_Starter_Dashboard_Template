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

import { Input, InputPassword } from '@/shared/components/ui/input';

import useLoginForm from '../hooks/use-login-form.hook';

import { Button } from '@/shared/components/ui/button';

const LoginPage = () => {
  const { form, onSubmit, isPending } = useLoginForm();

  return (
    <AnimationPage>
      <FormTitle
        title='Login to your account'
        description='Enter your email and password to login'
      />

      <Form {...form}>
        <form onSubmit={onSubmit} id='login-form' className='gap-1.25rem flex flex-col'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='email-address'>Full name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your Email address'
                    id='email-address'
                    type='email'
                    autoComplete='username'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormControl>
                  <InputPassword
                    placeholder='Enter your password'
                    id='password'
                    {...field}
                    autoComplete='current-password'
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
            Login
          </Button>
        </form>
      </Form>
    </AnimationPage>
  );
};

export default LoginPage;
