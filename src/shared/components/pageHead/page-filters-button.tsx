import { SlidersHorizontalIcon } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../ui/dialog';

import useDialog from '@/shared/hooks/useDialog';

import { useForm } from 'react-hook-form';

import useURLFilters from '@/shared/hooks/useURLFilters';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface IFiltersComponentProps {
  closeDialog: () => void;
}

interface IProps {
  renderProps?: (props: IFiltersComponentProps) => React.ReactNode;
}

const PageFiltersButton = ({ renderProps }: IProps) => {
  const { showDialog, closeDialog, isDelayedOpenedDialog, isOpenedDialog } = useDialog();
  return (
    <Dialog open={isOpenedDialog} onOpenChange={closeDialog}>
      <Button size='lg' variant='secondary' onClick={showDialog}>
        <SlidersHorizontalIcon /> Filters
      </Button>
      <DialogContent>
        <DialogHeader
          title='Filter Options'
          description='You can filter by any of the available options.'
        />
        {isDelayedOpenedDialog ? (
          renderProps ? (
            renderProps({ closeDialog })
          ) : (
            <DefaultFilters closeDialog={closeDialog} />
          )
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default PageFiltersButton;

interface IFilterForm {
  status: string;
  role: string;
}

const DefaultFilters = ({ closeDialog }: IFiltersComponentProps) => {
  const { statusSearchParams, roleSearchParams, setSearchParams } = useURLFilters();

  const form = useForm<IFilterForm>({
    defaultValues: {
      status: statusSearchParams || '',
      role: roleSearchParams || '',
    },
  });
  function onSubmit(data: IFilterForm) {
    setSearchParams({
      status: data.status,
      role: data.role,
    });
    closeDialog();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} id='page-filters-form'>
        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Filter by status' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='none'>All</SelectItem>
                  <SelectItem value='active'>Active</SelectItem>
                  <SelectItem value='inactive'>Inactive</SelectItem>
                  <SelectItem value='pending'>Pending</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='role'
          render={({ field }) => (
            <FormItem className='mt-1rem'>
              <FormLabel>User Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Filter by Role' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='none'>All</SelectItem>
                  <SelectItem value='super-admin'>Super Admin</SelectItem>
                  <SelectItem value='admin'>Admin</SelectItem>
                  <SelectItem value='service-provider'>Service Provider</SelectItem>
                  <SelectItem value='user'>User</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter
          closeDialog={closeDialog}
          isLoading={false}
          submitButtonTitle='Apply Filters'
          submitButtonIsDisabled={!form.formState.isDirty}
        />
      </form>
    </Form>
  );
};
