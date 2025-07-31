import { sidebarLinks } from '@/shared/constants/sidebar.constant';

import useIsPathActive from '@/shared/hooks/use-is-path-active.hook';

import { cn } from '@/shared/utils/index.utils';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/shared/components/ui/navigation-menu';

import { Link } from 'react-router';

import { Layout } from 'lucide-react';

interface IProps {
  className?: string;
}

const AppSubHeader = ({ className }: IProps) => {
  const { isPathActive } = useIsPathActive();

  const items = sidebarLinks['super-admin'];
  return (
    <header
      className={cn(
        'bg-sidebar p-1rem sticky top-[72px] z-40 flex shrink-0 items-center gap-2 overflow-x-auto transition-[width,height] ease-linear',
        className
      )}
    >
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item) =>
            !item.items ? (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  asChild
                  active={isPathActive(item.url)}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ) : null
          )}

          <NavigationMenuItem key='layout-builder'>
            <NavigationMenuLink
              asChild
              active={isPathActive('layout-builder')}
              className={navigationMenuTriggerStyle()}
            >
              <Link to='layout-builder'>
                <Layout className='h-4 w-4' />
                <span>Layout Builder</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default AppSubHeader;
