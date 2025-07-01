import { injectRouteModule } from '@/core/router/injectRouteModule';

import type { RouteObject } from 'react-router';

const modules = import.meta.glob<{ default: RouteObject[] }>('./*/routes.ts');

const routes = await injectRouteModule(modules);

const usersRoutes: RouteObject[] = [
  {
    path: 'super-admin',
    lazy: async () => ({
      Component: (await import('@/layouts/HomeLayout')).default,
    }),
    children: routes,
  },
];

export default usersRoutes;
