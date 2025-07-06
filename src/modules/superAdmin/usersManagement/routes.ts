import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'users-management',
    lazy: async () => ({
      Component: (await import('./pages/UsersListPage')).default,
    }),
  },
];

export default usersRoutes;
