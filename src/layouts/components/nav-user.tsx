import { BadgeCheck, Bell, ChevronsUpDown, LogOut } from 'lucide-react';

import { Avatar, AvatarImage } from '@/shared/components/ui/avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/shared/components/ui/sidebar';

import { userData } from '@/shared/constants/fakeData/user-data.fakeData';

import { cn } from '@/shared/utils/index.utils';

import { useSetAtom } from 'jotai';

import { userDataClearAtoms } from '@/core/store/atoms/user-data.atoms';

export function NavUser({ variant }: { variant?: 'header' }) {
  const { isMobile } = useSidebar();

  const logout = useSetAtom(userDataClearAtoms);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='px-0'>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:text-sidebar-accent-foreground hover:text-sidebar-accent-foreground hover:bg-transparent data-[state=open]:bg-transparent'
            >
              <Avatar className='size-9 rounded-full'>
                <AvatarImage src={userData.avatar} alt={userData.name} />
              </Avatar>
              <div
                className={cn('grid flex-1 text-left text-sm leading-tight', {
                  'hidden sm:grid': variant === 'header',
                })}
              >
                <span className='truncate font-semibold'>{userData.name}</span>
                <span className='truncate text-xs'>{userData.email}</span>
              </div>
              <ChevronsUpDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='start'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='size-9 rounded-full'>
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>{userData.name}</span>
                  <span className='truncate text-xs'>{userData.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
