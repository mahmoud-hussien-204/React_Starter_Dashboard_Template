import { SlidersHorizontalIcon } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

import useDialog from '@/shared/hooks/useDialog';

import { useForm } from 'react-hook-form';

import useURLFilters from '@/shared/hooks/useURLFilters';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface IProps {
  FiltersComponent?: React.ReactNode;
}

const PageFiltersButton = ({ FiltersComponent = <DefaultFilters /> }: IProps) => {
  const { showDialog, closeDialog, isDelayedOpenedDialog, isOpenedDialog } = useDialog();
  return (
    <Dialog open={isOpenedDialog}>
      <Button size='lg' variant='secondary' onClick={showDialog}>
        <SlidersHorizontalIcon /> Filters
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filter Options</DialogTitle>
          <DialogDescription>You can filter by any of the available options.</DialogDescription>
        </DialogHeader>
        {isDelayedOpenedDialog && FiltersComponent}
        <DialogFooter>
          <Button variant='outline' onClick={closeDialog} className='flex-1'>
            Cancel
          </Button>
          <Button type='submit' form='page-filters-form' className='flex-1'>
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PageFiltersButton;

interface IFilterForm {
  status: string;
  role: string;
}

const DefaultFilters = () => {
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
      </form>
    </Form>
  );
};
