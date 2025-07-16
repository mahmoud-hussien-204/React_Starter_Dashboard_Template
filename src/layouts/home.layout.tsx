import { SidebarInset, SidebarProvider } from '@/shared/components/ui/sidebar';

import { AppSidebar } from './components/app-sidebar';

import { Outlet } from 'react-router';

import AppHeader from './components/app-header';

const HomeLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className='px-1rem py-1.25rem flex-1'>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default HomeLayout;
