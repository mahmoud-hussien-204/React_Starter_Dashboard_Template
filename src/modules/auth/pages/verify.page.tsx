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

import useVerifyForm from '../hooks/use-verify-form.hook';

import { Navigate } from 'react-router';

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/components/ui/input-otp';

import BackBtn from '../components/back-btn';

const VerifyPage = () => {
  const { email, form, onSubmit, isPending } = useVerifyForm();

  if (!email) return <Navigate to='/auth/forgot-password' replace />;

  return (
    <AnimationPage>
      <FormTitle title='Password Reset' description={`We sent a code to ${email}`} />

      <Form {...form}>
        <form onSubmit={onSubmit} id='verify-form' className='gap-1.25rem flex flex-col'>
          <FormField
            control={form.control}
            name='code'
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
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

export default VerifyPage;
