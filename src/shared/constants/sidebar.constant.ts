import { Ban, Building2, Car, LayoutDashboard, Settings, Truck, Users } from 'lucide-react';

export const sidebarLinks = [
  {
    title: 'Dashboard',
    url: '#',
    icon: LayoutDashboard,
    isActive: true,
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
    url: '#',
    icon: Settings,
  },
];
