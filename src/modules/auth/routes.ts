import type { RouteObject } from 'react-router';

const authRoutes: RouteObject[] = [
  {
    path: '/auth',
    lazy: async () => ({
      Component: (await import('./layout/auth.layout')).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/login.page')).default,
        }),
      },
      {
        path: 'login',
        lazy: async () => ({
          Component: (await import('./pages/login.page')).default,
        }),
      },
    ],
  },
];

export default authRoutes;
