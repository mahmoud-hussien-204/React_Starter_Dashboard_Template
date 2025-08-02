import usePageData from '@/shared/hooks/use-page-data.hook';

import AnimationPage from '@/shared/components/animations/animation-page';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';

import UserAvatarFileUploader from '@/shared/components/user-avatar-file-uploader';

import useAccountForm from '../hooks/use-account-form.hook';

import { Input } from '@/shared/components/ui/input';

import { Button } from '@/shared/components/ui/button';

import Box from '@/shared/components/box';

const AccountPage = () => {
  usePageData({ title: 'Settings - Account' });

  const { form, onSubmit, settings, isPending } = useAccountForm();

  return (
    <AnimationPage>
      <Form {...form}>
        <Box>
          <form onSubmit={onSubmit} id='account-settings' className='w-full max-w-[600px]'>
            <div className='gap-1rem flex flex-col'>
              {/* avatar */}
              <UserAvatarFileUploader
                id='settings-user-avatar'
                src={settings?.avatar}
                setFieldValue={(fileURL: string) =>
                  form.setValue('avatar', fileURL, { shouldDirty: true, shouldValidate: true })
                }
              />
              {/* *********** */}

              <div className='gap-1rem grid grid-cols-1 md:grid-cols-2'>
                {/* name  */}
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='firstName'>First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter first name'
                          id='firstName'
                          type='text'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* *********** */}

                {/* name  */}
                <FormField
                  control={form.control}
                  name='lastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='lastName'>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter last name' id='lastName' type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* *********** */}
              </div>

              {/* email  */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter email' id='email' type='email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* *********** */}

              {/* phone  */}
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter phone number' id='phone' type='string' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* *********** */}
            </div>

            <div className='gap-1.25rem mt-1.25rem flex items-center'>
              <Button
                type='submit'
                variant='default'
                isLoading={isPending}
                disabled={!form.formState.isValid || isPending || !form.formState.isDirty}
                className='flex-1'
              >
                Save
              </Button>
              <Button
                type='reset'
                variant='ghost'
                onClick={() => form.reset()}
                disabled={isPending || !form.formState.isDirty}
                className='flex-1'
              >
                Reset
              </Button>
            </div>
          </form>
        </Box>
      </Form>
    </AnimationPage>
  );
};

export default AccountPage;
