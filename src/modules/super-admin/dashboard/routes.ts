import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    index: true,
    lazy: async () => ({
      Component: (await import('./pages/dashboard.page')).default,
    }),
  },
  {
    path: 'dashboard',
    lazy: async () => ({
      Component: (await import('./pages/dashboard.page')).default,
    }),
  },
];

export default usersRoutes;
