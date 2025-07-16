import EmptyState from '@/shared/components/empty-state';

import type { IUser } from '../interfaces/users.interface';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';

import { EnumUserRoles } from '@/shared/enums/index.enum';

import { DialogFooter } from '@/shared/components/ui/dialog';

import { Input } from '@/shared/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';

import { Switch } from '@/shared/components/ui/switch';

import useEditUserForm from '../hooks/use-edit-user-form.hook';

import UserFileUploader from './user-file-uploader';

interface IProps extends IDialogPropsData {
  user: IUser | undefined;
}

const EditUserForm = ({ user, closeDialog }: IProps) => {
  const { form, onSubmit } = useEditUserForm(user);

  return !user ? (
    <EmptyState message='User not found' />
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} id='edit-user-form'>
        <div className='gap-1rem flex flex-col'>
          {/* avatar */}
          <UserFileUploader id='user-avatar' src={user.avatar} />
          {/* *********** */}

          {/* name  */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='name'>Full name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter full name' id='name' type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* *********** */}

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

          {/* role  */}
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='User role' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={EnumUserRoles.SUPER_ADMIN}>Super Admin</SelectItem>
                    <SelectItem value={EnumUserRoles.ADMIN}>Admin</SelectItem>
                    <SelectItem value={EnumUserRoles.USER}>User</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* *********** */}

          {/* status  */}
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem className='gap-0.25rem flex items-center'>
                <FormControl>
                  <Switch
                    id='user-status'
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel htmlFor='user-status'>User status</FormLabel>
              </FormItem>
            )}
          />
          {/* *********** */}
        </div>

        <DialogFooter
          closeDialog={closeDialog}
          isLoading={false}
          submitButtonTitle='Save'
          submitButtonIsDisabled={!form.formState.isDirty}
        />
      </form>
    </Form>
  );
};

export default EditUserForm;
