import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'users-management',
    lazy: async () => ({
      Component: (await import('./pages/users-list.page')).default,
    }),
  },
];

export default usersRoutes;
