import { appConfigActions } from '@/core/store/slices/app-config-slice.store.slice';

import { Button } from '@/shared/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

import { themes } from '@/shared/constants/themes.constant';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/use-store.hook';

import { notification } from '@/shared/utils/notification.utils';

import { useState } from 'react';

const ThemeToggler = () => {
  const theme = useAppSelector((state) => state.appConfig.theme);

  const dispatch = useAppDispatch();

  const [currentTheme, setCurrentTheme] = useState(() => themes.find((t) => t.value === theme));

  const toggleTheme = (theme: (typeof themes)[0]) => {
    if (!theme) {
      notification.error('You must select theme');
      return;
    }
    dispatch(appConfigActions.setTheme(theme.value));
    setCurrentTheme(theme);
  };

  const isActive = (th: ITheme) => (th === theme ? 'bg-accent text-accent-foreground' : '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size={'icon'}>
          {currentTheme && <currentTheme.icon size={16} />}
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => toggleTheme(theme)}
            className={isActive(theme.value)}
          >
            <theme.icon /> <span className='capitalize'>{theme.title}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggler;
