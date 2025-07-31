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

import { Link } from 'react-router';

import { Layout } from 'lucide-react';

import useIsPathActive from '@/shared/hooks/use-is-path-active.hook';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isPathActive } = useIsPathActive();

  return (
    <Sidebar collapsible='offcanvas' {...props} className='z-50'>
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          asChild
          tooltip='Layout Builder'
          isActive={isPathActive('layout-builder')}
          size='lg'
        >
          <Link to='layout-builder'>
            <Layout className='h-4 w-4' />
            <span>Layout Builder</span>
          </Link>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
