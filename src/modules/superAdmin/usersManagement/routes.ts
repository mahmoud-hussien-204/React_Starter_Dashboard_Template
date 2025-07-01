import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'users-management',
    lazy: async () => ({
      Component: (await import('./layout/UsersLayout')).default,
    }),
    children: [
      {
        path: 'admins',
        lazy: async () => ({
          Component: (await import('./pages/AdminsListPage')).default,
        }),
      },
      {
        path: 'users',
        lazy: async () => ({
          Component: (await import('./pages/UsersListPage')).default,
        }),
      },
    ],
  },
];

export default usersRoutes;
