import useDialog from '@/shared/hooks/useDialog';

import { Button } from '../ui/button';

import { PlusIcon } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader } from '../ui/dialog';

interface IProps {
  title: string;
  dialogCreateTitle: string;
  dialogCreateDescription?: string;
  renderProps: (props: { closeDialog: () => void }) => React.ReactNode;
}

const PageCreateNewButton = ({
  title,
  dialogCreateTitle,
  dialogCreateDescription,
  renderProps,
}: IProps) => {
  const { showDialog, closeDialog, isDelayedOpenedDialog, isOpenedDialog } = useDialog();

  return (
    <Dialog open={isOpenedDialog} onOpenChange={closeDialog}>
      <Button size='lg' onClick={showDialog}>
        <PlusIcon /> {title}
      </Button>
      <DialogContent>
        <DialogHeader title={dialogCreateTitle} description={dialogCreateDescription} />
        {isDelayedOpenedDialog && renderProps({ closeDialog })}
      </DialogContent>
    </Dialog>
  );
};

export default PageCreateNewButton;
