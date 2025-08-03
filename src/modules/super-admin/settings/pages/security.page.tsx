import usePageData from '@/shared/hooks/use-page-data.hook';

import AnimationPage from '@/shared/components/animations/animation-page';

import Box from '@/shared/components/box';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';

import { Button } from '@/shared/components/ui/button';

import useSecurityForm from '../hooks/use-security-form.hook';

import { InputPassword } from '@/shared/components/ui/input';

const SecurityPage = () => {
  usePageData({ title: 'Settings - Security' });

  const { form, onSubmit, isPending } = useSecurityForm();

  return (
    <AnimationPage>
      <Box title='Change Password'>
        <Form {...form}>
          <form onSubmit={onSubmit} id='account-settings' className=''>
            <div className='gap-1rem grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3'>
              <FormField
                control={form.control}
                name='current_password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='current_password'>Current password</FormLabel>
                    <FormControl>
                      <InputPassword
                        placeholder='Enter current password'
                        id='current_password'
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
                name='new_password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='new_password'>New password</FormLabel>
                    <FormControl>
                      <InputPassword
                        placeholder='Enter new password'
                        id='new_password'
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
                name='confirm_new_password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='confirm_new_password'>Confirm password</FormLabel>
                    <FormControl>
                      <InputPassword
                        placeholder='Confirm password'
                        id='confirm_new_password'
                        autoComplete='off'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='gap-1.25rem mt-1.25rem flex items-center'>
              <Button
                type='submit'
                variant='default'
                isLoading={isPending}
                disabled={!form.formState.isValid || isPending || !form.formState.isDirty}
                className='min-w-[150px]'
              >
                Save
              </Button>
              <Button
                type='reset'
                variant='ghost'
                onClick={() => form.reset()}
                disabled={isPending || !form.formState.isDirty}
              >
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </Box>
    </AnimationPage>
  );
};

export default SecurityPage;
