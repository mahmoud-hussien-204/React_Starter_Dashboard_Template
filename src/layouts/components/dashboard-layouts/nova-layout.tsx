import { SidebarInset, SidebarProvider } from '@/shared/components/ui/sidebar';

import { Outlet } from 'react-router';

import AppHeader from '../app-header';

import Container from '@/shared/components/container';

import { NavUser } from '../nav-user';

import AppSubHeader from '../app-sub-header';

const NovaLayout = () => {
  return (
    <SidebarProvider>
      <SidebarInset>
        <AppHeader showSidebarTrigger={false}>
          <div className='ms-0.75rem'>
            <NavUser variant='header' />
          </div>
        </AppHeader>
        <AppSubHeader />
        <Container>
          <Outlet />
        </Container>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default NovaLayout;
