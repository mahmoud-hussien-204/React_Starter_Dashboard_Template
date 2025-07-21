import EmptyState from '@/shared/components/empty-state';

import type { IUser } from '../interfaces/users.interface';

import { Form } from '@/shared/components/ui/form';

import { DialogFooter } from '@/shared/components/ui/dialog';

import useEditUserForm from '../hooks/use-edit-user-form.hook';

import UserForm from './user-form';

interface IProps {
  user: IUser | undefined;
}

const EditUserForm = ({ user }: IProps) => {
  const { form, onSubmit, isPending } = useEditUserForm(user);

  return !user ? (
    <EmptyState message='User not found' />
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} id='edit-user-form'>
        {/* @ts-expect-error TODO: fix ts error */}
        <UserForm form={form} user={user} />
        <DialogFooter
          isLoading={isPending}
          submitButtonTitle='Save'
          submitButtonIsDisabled={!form.formState.isDirty}
        />
      </form>
    </Form>
  );
};

export default EditUserForm;
