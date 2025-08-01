import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'settings',
    lazy: async () => ({
      Component: (await import('./layout/settings.layout')).default,
    }),

    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/account.page')).default,
        }),
      },
      {
        path: 'account',
        lazy: async () => ({
          Component: (await import('./pages/account.page')).default,
        }),
      },
      {
        path: 'security',
        lazy: async () => ({
          Component: (await import('./pages/security.page')).default,
        }),
      },
      {
        path: 'notifications',
        lazy: async () => ({
          Component: (await import('./pages/notifications.page')).default,
        }),
      },
    ],
  },
];

export default usersRoutes;
