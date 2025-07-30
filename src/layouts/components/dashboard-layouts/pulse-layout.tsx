import { SidebarInset, SidebarProvider } from '@/shared/components/ui/sidebar';

import { AppSidebar } from '../app-sidebar';

import { Outlet } from 'react-router';

import AppHeader from '../app-header';

import Container from '@/shared/components/container';

const PulseLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <Container>
          <Outlet />
        </Container>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PulseLayout;
