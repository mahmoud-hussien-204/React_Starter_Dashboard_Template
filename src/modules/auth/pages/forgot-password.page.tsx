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

import { Input } from '@/shared/components/ui/input';

import useForgotPasswordForm from '../hooks/use-forgot-password-form.hook';

import { Button } from '@/shared/components/ui/button';

import BackBtn from '../components/back-btn';

const ForgotPasswordPage = () => {
  const { form, onSubmit, isPending } = useForgotPasswordForm();

  return (
    <AnimationPage>
      <FormTitle title='Forgot Password?' description='Enter your email to reset your password' />

      <Form {...form}>
        <form onSubmit={onSubmit} id='forgot-password-form' className='gap-1.25rem flex flex-col'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='email-address'>Email address</FormLabel>
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

          <Button
            type='submit'
            className='mt-1.25rem'
            isLoading={isPending}
            disabled={isPending || !form.formState.isValid}
          >
            Submit
          </Button>

          <BackBtn />
        </form>
      </Form>
    </AnimationPage>
  );
};

export default ForgotPasswordPage;
