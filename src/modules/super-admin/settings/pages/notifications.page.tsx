import usePageData from '@/shared/hooks/use-page-data.hook';

import AnimationPage from '@/shared/components/animations/animation-page';

import { Button } from '@/shared/components/ui/button';

import Box from '@/shared/components/box';

import { Form, FormControl, FormField, FormItem } from '@/shared/components/ui/form';

import useNotificationsForm from '../hooks/use-notifications-form.hook';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';

import { SETTINGS_CONSTANT } from '../constants/settings.constant';

import { Checkbox } from '@/shared/components/ui/checkbox';

const NotificationsPage = () => {
  usePageData({ title: 'Settings - Notifications' });

  const { form, onSubmit, isPending } = useNotificationsForm();

  return (
    <AnimationPage>
      <Box title='Notifications Settings' className='bg-background border-0 !p-0'>
        <Form {...form}>
          <form onSubmit={onSubmit} id='notifications-settings' className=''>
            <TableContainer>
              <Table containerClassName='!h-max'>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Browser</TableHead>
                    <TableHead>App</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {SETTINGS_CONSTANT.notificationSettings.map((notification) => (
                    <TableRow key={notification.id}>
                      <TableCell>{notification.type}</TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`notifications.${notification.id}.email`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`notifications.${notification.id}.browser`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`notifications.${notification.id}.app`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className='gap-1.25rem mt-1.25rem flex items-center'>
              <Button
                type='submit'
                variant='default'
                isLoading={isPending}
                disabled={!form.formState.isValid || isPending || !form.formState.isDirty}
                className='min-w-[150px]'
              >
                Save Changes
              </Button>
              <Button
                type='reset'
                variant='ghost'
                onClick={() => form.reset()}
                disabled={isPending || !form.formState.isDirty}
              >
                Discard
              </Button>
            </div>
          </form>
        </Form>
      </Box>
    </AnimationPage>
  );
};

export default NotificationsPage;
