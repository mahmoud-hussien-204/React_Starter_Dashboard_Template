import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/shared/components/ui/sidebar';

import { NavUser } from './nav-user';

import { NavMain } from './nav-main';

import { sidebarLinks } from '@/shared/constants/sidebar';

import { userData } from '@/shared/constants/fakeData/userData';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <NavUser user={userData} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
