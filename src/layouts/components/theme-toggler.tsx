import { appConfigSetThemeAtom, appConfigThemeAtom } from '@/core/store/atoms/app-config.atoms';

import { Button } from '@/shared/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

import { THEME_CONSTANT } from '@/shared/constants/themes.constant';

import { notificationUtil } from '@/shared/utils/notification.utils';

import { useAtomValue, useSetAtom } from 'jotai';

import { useState } from 'react';

const ThemeToggler = () => {
  const theme = useAtomValue(appConfigThemeAtom);

  const setTheme = useSetAtom(appConfigSetThemeAtom);

  const [currentTheme, setCurrentTheme] = useState(() =>
    THEME_CONSTANT.themes.find((t) => t.value === theme)
  );

  const toggleTheme = (theme: (typeof THEME_CONSTANT.themes)[0]) => {
    if (!theme) {
      notificationUtil.error('You must select theme');
      return;
    }
    setTheme(theme.value);
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
        {THEME_CONSTANT.themes.map((theme) => (
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
