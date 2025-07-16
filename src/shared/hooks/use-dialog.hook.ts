import { useState } from 'react';

import useToggler from './use-toggler.hook';

const useDialog = <T>() => {
  const [isOpenedDialog, toggleOpenedDialog] = useToggler();

  const [isDelayedOpenedDialog, toggleDelayedOpenedDialog] = useToggler();

  const [dialogProps, setDialogProps] = useState<T>();

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
