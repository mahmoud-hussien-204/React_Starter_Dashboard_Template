import { useState } from 'react';

import useToggler from './use-toggler';

const useDialog = () => {
  const [isOpenedDialog, toggleOpenedDialog] = useToggler();

  const [isDelayedOpenedDialog, toggleDelayedOpenedDialog] = useToggler();

  const [dialogProps, setDialogProps] = useState<unknown>();

  const showDialog = () => {
    if (isOpenedDialog) return;
    toggleOpenedDialog();
    toggleDelayedOpenedDialog();
  };

  const closeDialog = () => {
    if (!isOpenedDialog) return;
    toggleOpenedDialog();
    const dialogElement = document.querySelector("[data-slot='dialog-content']");
    dialogElement?.addEventListener(
      'animationend',
      () => {
        toggleDelayedOpenedDialog();
        setDialogProps(undefined);
      },
      { once: true }
    );
  };

  return {
    isOpenedDialog,
    isDelayedOpenedDialog,
    showDialog,
    closeDialog,
    dialogProps,
    setDialogProps,
  };
};

export default useDialog;
