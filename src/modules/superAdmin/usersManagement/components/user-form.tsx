import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';

import { EnumUserRoles } from '@/shared/enums/index.enum';

import { Input } from '@/shared/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';

import { Switch } from '@/shared/components/ui/switch';

import UserFileUploader from './user-file-uploader';

import type { IUser } from '../interfaces/users.interface';

import type { UseFormReturn } from 'react-hook-form';

import type { IUserFormSchema } from '../validation/user.schema';

interface IProps {
  user?: IUser;
  form: UseFormReturn<IUserFormSchema>;
}

const UserForm = ({ user, form }: IProps) => {
  return (
    <div className='gap-1rem flex flex-col'>
      {/* avatar */}
      <UserFileUploader
        id='user-avatar'
        src={user?.avatar}
        setFieldValue={(fileURL: string) => form.setValue('avatar', fileURL, { shouldDirty: true })}
      />
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
  );
};

export default UserForm;
