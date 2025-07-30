import { MonitorCogIcon, MoonIcon, SunIcon } from 'lucide-react';

import { EnumThemes } from '../enums/index.enum';

export const themes = [
  {
    value: EnumThemes.LIGHT,
    title: EnumThemes.LIGHT,
    icon: SunIcon,
  },
  {
    value: EnumThemes.DARK,
    title: EnumThemes.DARK,
    icon: MoonIcon,
  },
  {
    value: EnumThemes.SYSTEM,
    title: EnumThemes.SYSTEM,
    icon: MonitorCogIcon,
  },
];

export const primaryColors = [
  'oklch(0.623 0.214 259.815)',
  'oklch(0.6 0.2 282.54)',
  'oklch(0.6 0.1 195.68)',
  'oklch(0.82 0.17 78.45)',
  'oklch(0.67 0.22 23.68)',
  'oklch(0.72 0.16 239.5)',
];
