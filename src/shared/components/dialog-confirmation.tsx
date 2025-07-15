import { useReactMutation } from '@/shared/hooks/use-react-query';

import { Dialog, DialogContent, DialogHeader } from './ui/dialog';

import type { QueryKey } from '@tanstack/react-query';

interface IProps {
  closeDialog: () => void;
  isDelayedOpenedDialog: boolean;
  isOpenedDialog: boolean;
  onConfirm: () => Promise<unknown>;
  invalidatesQuery?: QueryKey;
}

const DialogConfirmation = ({
  closeDialog,
  isDelayedOpenedDialog,
  isOpenedDialog,
  onConfirm,
  invalidatesQuery,
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

  return (
    <Dialog open={isOpenedDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader title='Be aware' description='This action cannot be undone.' />
        {isDelayedOpenedDialog ? (
          <>
            Are you sure?
            <button onClick={mutate}>{isPending && 'loading'} click</button>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default DialogConfirmation;
