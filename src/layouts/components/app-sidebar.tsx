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

import { sidebarLinks } from '@/shared/constants/sidebar';

import { userData } from '@/shared/constants/fakeData/userData';

import { Link } from 'react-router';

import { Layout } from 'lucide-react';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <NavUser user={userData} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild tooltip='Layout Builder' isActive={false} size='lg'>
          <Link to='/layout-builder'>
            <Layout className='h-4 w-4' />
            <span>Layout Builder</span>
          </Link>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
