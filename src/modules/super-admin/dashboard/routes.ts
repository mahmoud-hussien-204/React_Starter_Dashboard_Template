import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    lazy: async () => ({
      Component: (await import('./pages/dashboard.page')).default,
    }),
  },
];

export default usersRoutes;
