import { injectRouteModule } from '@/core/router/inject-route-module.router';

import type { RouteObject } from 'react-router';

const modules = import.meta.glob<{ default: RouteObject[] }>('./*/routes.ts');

export const commonRoutes = await injectRouteModule(modules);
