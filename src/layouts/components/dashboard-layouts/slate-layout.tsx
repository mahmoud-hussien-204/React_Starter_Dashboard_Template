import { SidebarInset, SidebarProvider } from '@/shared/components/ui/sidebar';

import { AppSidebar } from '../app-sidebar';

import { Outlet } from 'react-router';

import AppHeader from '../app-header';

import Container from '@/shared/components/container';

const SlateLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar variant='inset' />
      <SidebarInset>
        <AppHeader />
        <Container>
          <Outlet />
        </Container>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SlateLayout;
