import { injectRouteModule } from '@/core/router/inject-route-module.router';

import type { RouteObject } from 'react-router';

const modules = import.meta.glob<{ default: RouteObject[] }>('./*/routes.ts');

const routes = await injectRouteModule(modules);

const usersRoutes: RouteObject[] = [
  {
    path: 'super-admin',
    lazy: async () => ({
      Component: (await import('@/layouts/home.layout')).default,
    }),
    children: routes,
  },
];

export default usersRoutes;
