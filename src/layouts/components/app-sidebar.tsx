import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from '@/shared/components/ui/sidebar';

import { NavUser } from './nav-user';

import { NavMain } from './nav-main';

import { sidebarLinks } from '@/shared/constants/sidebar.constant';

import { userData } from '@/shared/constants/fakeData/user-data.fakeData';

import { Link } from 'react-router';

import { Layout } from 'lucide-react';

import useIsPathActive from '@/shared/hooks/use-is-path-active.hook';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isPathActive } = useIsPathActive();

  return (
    <Sidebar collapsible='offcanvas' {...props} className='z-50'>
      <SidebarHeader>
        <NavUser user={userData} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          asChild
          tooltip='Layout Builder'
          isActive={isPathActive('/common/layout-builder')}
          size='lg'
        >
          <Link to='/common/layout-builder'>
            <Layout className='h-4 w-4' />
            <span>Layout Builder</span>
          </Link>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
