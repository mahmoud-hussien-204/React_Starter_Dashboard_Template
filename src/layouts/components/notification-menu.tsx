import { Button } from '@/shared/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

import { notifications } from '@/shared/constants/fakeData/index.fakeData';

import { BellIcon } from 'lucide-react';

const NotificationMenu = () => {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='relative h-9 w-9'>
          <BellIcon className='h-4 w-4' />
          {unreadCount > 0 && (
            <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
              {unreadCount}
            </span>
          )}
          <span className='sr-only'>Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-80'>
        <DropdownMenuLabel className='flex items-center justify-between'>
          <span>Notifications</span>
          {unreadCount > 0 && (
            <span className='text-muted-foreground text-xs'>{unreadCount} unread</span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className='max-h-64 overflow-y-auto'>
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className='flex cursor-pointer flex-col items-start p-3'
            >
              <div className='flex w-full items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm font-medium'>{notification.title}</p>
                    {notification.unread && <div className='h-2 w-2 rounded-full bg-blue-500' />}
                  </div>
                  <p className='text-muted-foreground mt-1 text-xs'>{notification.description}</p>
                  <p className='text-muted-foreground mt-1 text-xs'>{notification.time}</p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='justify-center text-center'>
          <span className='text-muted-foreground text-sm'>View all notifications</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationMenu;
