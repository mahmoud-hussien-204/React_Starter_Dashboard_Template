import { Separator } from '@/shared/components/ui/separator';

import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/components/ui/sidebar';

import { AppSidebar } from './components/app-sidebar';

import ThemeToggler from './components/ThemeToggler';

import NotificationMenu from './components/NotificationMenu';

import { useAppSelector } from '@/shared/hooks/useStore';

import AppSearch from './components/AppSearch';

import { Outlet } from 'react-router';

const HomeLayout = () => {
  const pageTitle = useAppSelector((state) => state.appConfig.pageData.title);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='bg-sidebar p-1rem sticky top-0 flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger />
            <Separator orientation='vertical' className='!h-1rem' />
            <h1 className=' font-semibold'>{pageTitle || 'Dashboard'}</h1>
          </div>

          <div className='gap-0.25rem ml-auto flex items-center'>
            <AppSearch />
            <ThemeToggler />
            <NotificationMenu />
          </div>
        </header>
        <div className='px-1rem py-1.25rem flex-1'>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default HomeLayout;
