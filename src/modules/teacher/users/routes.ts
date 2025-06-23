import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'users',
    lazy: async () => ({
      Component: (await import('./layout/UsersLayout')).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/UsersListPage')).default,
        }),
      },
    ],
  },
];

export default usersRoutes;
