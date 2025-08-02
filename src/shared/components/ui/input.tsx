import * as React from 'react';

import { cn } from '@/shared/utils/index.utils';

import { EyeIcon, EyeOffIcon } from 'lucide-react';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input bg-background flex h-10 w-full min-w-0 rounded-md border px-3 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-10 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

function InputPassword({ ...props }: Omit<React.ComponentProps<'input'>, 'type'>) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className='relative'>
      <Input type={isPasswordVisible ? 'text' : 'password'} {...props} />
      <div className='end-0.75rem absolute top-1/2 -translate-y-1/2 cursor-pointer'>
        {isPasswordVisible ? (
          <EyeIcon onClick={() => setIsPasswordVisible(false)} size={14} />
        ) : (
          <EyeOffIcon onClick={() => setIsPasswordVisible(true)} size={14} />
        )}
      </div>
    </div>
  );
}
export { Input, InputPassword };
