import { useReactMutation } from '@/shared/hooks/use-react-query.hook';

import { Dialog, DialogContent, DialogFooter, DialogHeader } from './ui/dialog';

import type { QueryKey } from '@tanstack/react-query';

interface IProps {
  closeDialog: () => void;
  isDelayedOpenedDialog: boolean;
  isOpenedDialog: boolean;
  onConfirm: () => Promise<unknown>;
  invalidatesQuery?: QueryKey;
  title?: string;
  description?: string;
  message?: string;
  confirmButtonTitle?: string;
}

const DialogConfirmation = ({
  closeDialog,
  isDelayedOpenedDialog,
  isOpenedDialog,
  onConfirm,
  invalidatesQuery,
  title,
  description,
  message,
  confirmButtonTitle,
}: IProps) => {
  const { mutate, isPending } = useReactMutation({
    mutationFn: onConfirm,
    options: {
      onSuccess: closeDialog,
      meta: {
        invalidatesQuery,
      },
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <Dialog open={isOpenedDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader
          title={title || 'Be aware'}
          description={description || 'This action cannot be undone.'}
        />
        {isDelayedOpenedDialog ? (
          <form onSubmit={onSubmit}>
            <p>
              {message ||
                'if this was the action that you wanted to do, please confirm your choice, or cancel and return to the previous page'}
            </p>
            <DialogFooter
              isLoading={isPending}
              submitButtonTitle={confirmButtonTitle || 'Confirm'}
              submitButtonVariant='destructive'
            />
          </form>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default DialogConfirmation;
