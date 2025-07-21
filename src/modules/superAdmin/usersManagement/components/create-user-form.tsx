import { Form } from '@/shared/components/ui/form';

import UserForm from './user-form';

import { DialogFooter } from '@/shared/components/ui/dialog';

import useCreateUserForm from '../hooks/use-create-user-form.hook';

const CreateUserForm = () => {
  const { form, onSubmit, isPending } = useCreateUserForm();

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} id='create-user-form'>
        <UserForm form={form} />
        <DialogFooter
          isLoading={isPending}
          submitButtonTitle='Save'
          submitButtonIsDisabled={!form.formState.isDirty}
        />
      </form>
    </Form>
  );
};

export default CreateUserForm;
