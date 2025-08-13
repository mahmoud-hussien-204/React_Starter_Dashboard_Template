import { Ban, Building2, Car, LayoutDashboard, Settings, Truck, Users } from 'lucide-react';

type ISideBarLinks = {
  [key: string]: {
    title: string;
    url: string;
    icon: any;
    index?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
};

export const SIDEBAR_CONSTANT = {
  sidebarLinks: {
    'super-admin': [
      {
        title: 'Dashboard',
        url: 'dashboard',
        icon: LayoutDashboard,
        index: true,
      },
      {
        title: 'Users Management',
        url: 'users-management',
        icon: Users,
      },
      {
        title: 'Errors',
        url: '/errors',
        icon: Ban,
        items: [
          {
            title: 'Error 404',
            url: '/errors/404',
          },
          {
            title: 'Error 500',
            url: '/errors/500',
          },
        ],
      },
      {
        title: 'Vehicles',
        url: '#',
        icon: Car,
      },
      {
        title: 'Service Providers',
        url: '#',
        icon: Truck,
      },
      {
        title: 'Rental Agencies',
        url: '#',
        icon: Building2,
      },
      {
        title: 'Settings',
        url: 'settings',
        icon: Settings,
      },
    ],
    admin: [
      {
        title: 'Dashboard',
        url: 'dashboard',
        icon: LayoutDashboard,
        index: true,
      },
      {
        title: 'Errors',
        url: '/errors',
        icon: Ban,
        items: [
          {
            title: 'Error 404',
            url: '/errors/404',
          },
          {
            title: 'Error 500',
            url: '/errors/500',
          },
        ],
      },
    ],
    user: [
      {
        title: 'Dashboard',
        url: 'dashboard',
        icon: LayoutDashboard,
        index: true,
      },
    ],
  } as ISideBarLinks,
} as const;
