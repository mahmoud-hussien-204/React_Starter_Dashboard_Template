import type { RouteObject } from 'react-router';

const authRoutes: RouteObject[] = [
  {
    path: 'auth',
    lazy: async () => ({
      Component: (await import('./layout/AuthLayout')).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/LoginPage')).default,
        }),
      },
      {
        path: 'login',
        lazy: async () => ({
          Component: (await import('./pages/LoginPage')).default,
        }),
      },
    ],
  },
];

export default authRoutes;
