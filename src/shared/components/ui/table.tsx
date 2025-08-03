import * as React from 'react';

import { cn } from '@/shared/utils/index.utils';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './dropdown-menu';

import { Button } from './button';

import { MoreVerticalIcon } from 'lucide-react';

import { Skeleton } from './skeleton';

function TableContainer({ children }: Required<React.PropsWithChildren>) {
  return <div className='rounded-md border'>{children}</div>;
}

function Table({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<'table'> & { containerClassName?: string }) {
  return (
    <div
      data-slot='table-container'
      className={cn(
        'relative h-[max(calc(100dvh-300px),400px)] w-full overflow-x-auto md:h-[max(calc(100dvh-234px),400px)]',
        containerClassName
      )}
    >
      <table
        data-slot='table'
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot='table-header'
      className={cn(
        '[&_tr]:bg-muted [&_tr]:hover:bg-muted sticky top-0 z-30 [&_tr]:border-0',
        className
      )}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot='table-body'
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot='table-footer'
      className={cn('bg-muted border-t font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot='table-row'
      className={cn('hover:bg-muted/50 data-[state=selected]:bg-muted border-b', className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot='table-head'
      className={cn(
        'text-foreground h-3rem px-1rem whitespace-nowrap text-start align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot='table-cell'
      className={cn(
        'px-1rem h-3.25rem truncate align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot='table-caption'
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  );
}

function TableAction({ children }: Required<React.PropsWithChildren>) {
  return (
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='text-muted-foreground data-[state=open]:bg-muted flex size-8'
            size='icon'
          >
            <MoreVerticalIcon />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-32'>
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  );
}

function TableLoading({ colspan, rowspan = 13 }: { rowspan?: number; colspan: number }) {
  return Array.from({ length: rowspan }, (_, i) => (
    <TableRow key={i}>
      <TableCell colSpan={colspan}>
        <Skeleton className='h-[60%]' />
      </TableCell>
    </TableRow>
  ));
}

function TableNoDataFound({
  message = 'No data found',
  colspan,
}: {
  message?: string;
  colspan: number;
}) {
  return (
    <TableRow>
      <TableCell colSpan={colspan}>
        <p className='text-muted-foreground text-center'>{message}</p>
      </TableCell>
    </TableRow>
  );
}

export {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableAction,
  TableLoading,
  TableNoDataFound,
};
