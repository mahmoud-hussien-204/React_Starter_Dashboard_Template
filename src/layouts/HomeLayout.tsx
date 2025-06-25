import { useState } from 'react';
import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { Input } from '@/shared/components/ui/input';
import { Separator } from '@/shared/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/components/ui/sidebar';
import { Bell, Layout, Search, X } from 'lucide-react';
import { AppSidebar } from './components/app-sidebar';

const HomeLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: 'New user registered',
      description: 'John Smith has created a new account',
      time: '2 minutes ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Vehicle maintenance due',
      description: 'BMW X5 requires scheduled maintenance',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Payment received',
      description: 'Payment of $250 received from rental agency',
      time: '3 hours ago',
      unread: false,
    },
    {
      id: 4,
      title: 'Service provider updated',
      description: 'ABC Motors updated their service details',
      time: '1 day ago',
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />

            {/* Search Modal */}
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button variant='ghost' className='h-9 gap-2'>
                  <Search className='h-4 w-4' />
                  <span>Search</span>
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <div className='flex items-center space-x-2'>
                  <div className='grid flex-1 gap-2'>
                    <Input placeholder='Type to search...' autoFocus className='h-10' />
                  </div>
                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    onClick={() => setSearchOpen(false)}
                  >
                    <X className='h-4 w-4' />
                    <span className='sr-only'>Close</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className='ml-auto flex items-center gap-4 px-4'>
            {/* Layout Builder Link */}
            <Button variant='ghost' className='h-9 gap-2' asChild>
              <a href='#layout-builder'>
                <Layout className='h-4 w-4' />
                <span>Layout Builder</span>
              </a>
            </Button>

            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className='relative h-9 w-9'>
                  <Bell className='h-4 w-4' />
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
                            {notification.unread && (
                              <div className='h-2 w-2 rounded-full bg-blue-500' />
                            )}
                          </div>
                          <p className='text-muted-foreground mt-1 text-xs'>
                            {notification.description}
                          </p>
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
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className='bg-muted/50 aspect-video rounded-xl' />
            <div className='bg-muted/50 aspect-video rounded-xl' />
            <div className='bg-muted/50 aspect-video rounded-xl' />
          </div>
          <div className='bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min' />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default HomeLayout;
