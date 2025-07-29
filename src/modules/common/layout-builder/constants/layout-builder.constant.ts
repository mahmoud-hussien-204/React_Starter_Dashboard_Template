import IconLayout1 from '@/shared/components/icons/icon-layout-1';

import IconLayout2 from '@/shared/components/icons/icon-layout-2';

import IconLayout3 from '@/shared/components/icons/icon-layout-3';

import IconLayout4 from '@/shared/components/icons/icon-layout-4';
import { EnumDashboardLayouts } from '@/shared/enums/index.enum';

export const layouts = [
  {
    icon: IconLayout1,
    title: 'Default',
    value: EnumDashboardLayouts.DEFAULT,
  },
  {
    icon: IconLayout2,
    title: 'Pulse',
    value: EnumDashboardLayouts.PULSE,
  },
  {
    icon: IconLayout3,
    title: 'Nova',
    value: EnumDashboardLayouts.NOVA,
  },
  {
    icon: IconLayout4,
    title: 'Slate',
    value: EnumDashboardLayouts.SLATE,
  },
];
