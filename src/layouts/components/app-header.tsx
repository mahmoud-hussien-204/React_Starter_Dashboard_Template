import { Separator } from '@/shared/components/ui/separator';

import { SidebarTrigger } from '@/shared/components/ui/sidebar';

import AppSearch from './app-search';

import ThemeToggler from './theme-toggler';

import NotificationMenu from './notification-menu';

import { useAppSelector } from '@/shared/hooks/use-store';

const AppHeader = () => {
  const pageTitle = useAppSelector((state) => state.appConfig.pageData.title);

  return (
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
  );
};

export default AppHeader;
