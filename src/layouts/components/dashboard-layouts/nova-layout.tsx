import { SidebarInset, SidebarProvider } from '@/shared/components/ui/sidebar';

import { AppSidebar } from '../app-sidebar';

import { Outlet } from 'react-router';

import AppHeader from '../app-header';

import Container from '@/shared/components/container';

const NovaLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <Container>
          nova
          <Outlet />
        </Container>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default NovaLayout;
