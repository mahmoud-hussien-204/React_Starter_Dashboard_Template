import { SidebarInset, SidebarProvider } from '@/shared/components/ui/sidebar';

import { AppSidebar } from '../app-sidebar';

import { Outlet } from 'react-router';

import AppHeader from '../app-header';

import Container from '@/shared/components/container';

const DefaultLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader className='bg-sidebar border-b' />
        <Container>
          <Outlet />
        </Container>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DefaultLayout;
