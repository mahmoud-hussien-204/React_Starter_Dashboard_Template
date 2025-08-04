import { injectRouteModule } from '@/core/router/inject-route-module.router';

import type { RouteObject } from 'react-router';

import { commonRoutes } from '../common/routes';

import { EnumUserRoles } from '@/shared/enums/index.enum';

const modules = import.meta.glob<{ default: RouteObject[] }>('./*/routes.ts');

const routes = await injectRouteModule(modules);

const usersRoutes: RouteObject[] = [
  {
    path: EnumUserRoles.SUPER_ADMIN,
    lazy: async () => ({
      Component: (await import('@/layouts/home.layout')).default,
    }),
    children: [...routes, ...commonRoutes],
  },
];

export default usersRoutes;
