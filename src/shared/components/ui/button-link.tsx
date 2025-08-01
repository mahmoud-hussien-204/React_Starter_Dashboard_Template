import { cn } from '@/shared/utils/index.utils';

import { buttonVariants, type IButtonVariantProps } from './button';

import { Link, type LinkProps } from 'react-router';

interface IProps extends IButtonVariantProps, LinkProps {
  disabled?: boolean;
}

function ButtonLink({ className, variant, size, disabled, children, ...props }: IProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Link>
  );
}

export { ButtonLink };
