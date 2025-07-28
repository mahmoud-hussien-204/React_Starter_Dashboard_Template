import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'layout-builder',
    lazy: async () => ({
      Component: (await import('@/layouts/home.layout')).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/layout-builder.page')).default,
        }),
      },
    ],
  },
];

export default usersRoutes;
