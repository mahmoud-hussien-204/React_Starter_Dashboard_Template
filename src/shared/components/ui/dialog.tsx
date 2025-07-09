import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { XIcon } from 'lucide-react';

import { cn } from '@/shared/utils/index';

import { Button, type IButtonVariantProps } from './button';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot='dialog' {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot='dialog-close' {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot='dialog-overlay'
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot='dialog-content'
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 gap-1.5rem fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] rounded-lg border p-6 shadow-lg duration-200 sm:max-w-xl',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot='dialog-close'
            className="size-1.75rem ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground focus:outline-hidden absolute right-4 top-4 flex items-center justify-center rounded-full border opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
          >
            <XIcon />
            <span className='sr-only'>Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

interface IDialogHeaderProps extends React.ComponentProps<'div'> {
  title?: string;
  description?: string;
}

function DialogHeader({ className, title, description, children, ...props }: IDialogHeaderProps) {
  return (
    <div
      data-slot='dialog-header'
      className={cn('pb-1rem flex flex-col gap-2 border-b text-center sm:text-left', className)}
      {...props}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {description && <DialogDescription>{description}</DialogDescription>}
      {children && children}
    </div>
  );
}

interface IDialogFooterProps extends React.ComponentProps<'div'> {
  isLoading: boolean;
  isSubmitButton?: boolean;
  submitButtonTitle?: string;
  submitButtonVariant?: IButtonVariantProps['variant'];
  submitButtonClassName?: string;
  submitButtonIsDisabled?: boolean;
  isCancelButton?: boolean;
  cancelButtonTitle?: string;
  cancelButtonVariant?: IButtonVariantProps['variant'];
  cancelButtonClassName?: string;
  cancelButtonIsDisabled?: boolean;
  closeDialog: () => void;
}

function DialogFooter({
  className,
  isLoading,
  isSubmitButton = true,
  submitButtonTitle = 'Submit',
  submitButtonVariant = 'default',
  submitButtonClassName,
  submitButtonIsDisabled,
  isCancelButton = true,
  cancelButtonTitle = 'Cancel',
  cancelButtonVariant = 'outline',
  cancelButtonClassName,
  cancelButtonIsDisabled,
  closeDialog,
  children,
  ...props
}: IDialogFooterProps) {
  return (
    <div
      data-slot='dialog-footer'
      className={cn(
        'mt-1.5rem gap-1rem flex flex-col-reverse sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    >
      {isCancelButton && (
        <Button
          type='button'
          variant={cancelButtonVariant}
          onClick={closeDialog}
          className={cn('flex-1', cancelButtonClassName)}
          disabled={cancelButtonIsDisabled}
        >
          {cancelButtonTitle}
        </Button>
      )}

      {isSubmitButton && (
        <Button
          type='submit'
          variant={submitButtonVariant}
          className={cn('flex-1', submitButtonClassName)}
          disabled={submitButtonIsDisabled}
        >
          {submitButtonTitle}
        </Button>
      )}

      {children && children}
    </div>
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot='dialog-title'
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot='dialog-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
