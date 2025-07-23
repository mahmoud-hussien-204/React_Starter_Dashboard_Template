import { defaultAppConfig } from '@/core/config/index.config';

import { appConfigActions } from '@/core/store/slices/app-config-slice.store.slice';

import { Button } from '@/shared/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { EnumThemes } from '@/shared/enums/index.enum';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/use-store.hook';

import { MonitorCogIcon, MoonIcon, SunIcon } from 'lucide-react';

const themeIcons = {
  [EnumThemes.LIGHT]: SunIcon,
  [EnumThemes.DARK]: MoonIcon,
  [EnumThemes.SYSTEM]: MonitorCogIcon,
};

const ThemeToggler = () => {
  const theme = useAppSelector((state) => state.appConfig.theme);

  const dispatch = useAppDispatch();

  const toggleTheme = (theme: ITheme) => {
    dispatch(appConfigActions.setTheme(theme));
  };

  const CurrentTheme = themeIcons[theme || defaultAppConfig.theme];

  const isActive = (th: ITheme) => (th === theme ? 'bg-accent text-accent-foreground' : '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size={'icon'}>
          <CurrentTheme size={16} />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => toggleTheme(EnumThemes.LIGHT)}
          className={isActive(EnumThemes.LIGHT)}
        >
          <SunIcon /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleTheme(EnumThemes.DARK)}
          className={isActive(EnumThemes.DARK)}
        >
          <MoonIcon /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleTheme(EnumThemes.SYSTEM)}
          className={isActive(EnumThemes.SYSTEM)}
        >
          <MonitorCogIcon /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggler;
