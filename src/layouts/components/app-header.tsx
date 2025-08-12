import { Separator } from '@/shared/components/ui/separator';

import { SidebarTrigger } from '@/shared/components/ui/sidebar';

import AppSearch from './app-search';

import ThemeToggler from './theme-toggler';

import NotificationMenu from './notification-menu';

import { cn } from '@/shared/utils/index.utils';

import { appConfigPageDataAtom } from '@/core/store/atoms/app-config.atoms';

import { useAtomValue } from 'jotai';

interface IProps extends React.PropsWithChildren {
  showSidebarTrigger?: boolean;
  className?: string;
}

const AppHeader = ({ className, showSidebarTrigger = true, children }: IProps) => {
  const pageTitle = useAtomValue(appConfigPageDataAtom).title;

  return (
    <header
      className={cn(
        'p-1rem bg-background sticky top-0 z-40 flex shrink-0 items-center gap-2 transition-[width,height] ease-linear',
        className
      )}
    >
      <div className='flex items-center gap-2'>
        {showSidebarTrigger && (
          <>
            <SidebarTrigger />
            <Separator orientation='vertical' className='!h-1rem' />
          </>
        )}
        <h1 className=' font-semibold'>{pageTitle || 'Dashboard'}</h1>
      </div>

      <div className='gap-0.25rem ml-auto flex items-center'>
        <AppSearch />
        <ThemeToggler />
        <NotificationMenu />
        {children && children}
      </div>
    </header>
  );
};

export default AppHeader;
