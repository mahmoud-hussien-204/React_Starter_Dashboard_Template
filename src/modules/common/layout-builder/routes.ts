import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'layout-builder',
    lazy: async () => ({
      Component: (await import('./pages/layout-builder.page')).default,
    }),
  },
];

export default usersRoutes;
