import { Building2, Car, LayoutDashboard, Settings, Truck, Users } from 'lucide-react';

export const sidebarLinks = [
  {
    title: 'Dashboard',
    url: '#',
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: 'Users',
    url: '#',
    icon: Users,
    items: [
      {
        title: 'Admins',
        url: '#',
      },
      {
        title: 'Users',
        url: '#',
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
