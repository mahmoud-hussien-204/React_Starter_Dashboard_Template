import { createBrowserRouter } from 'react-router';

import { injectRouteModule } from './inject-route-module.router';

export const createAppRouter = async () => {
  const moduleRoutes = await injectRouteModule();

  return createBrowserRouter([
    {
      path: '*',
      lazy: async () => ({
        Component: (await import('@/layouts/not-fount.layout')).default,
      }),
    },
    {
      path: '/',
      lazy: async () => ({
        Component: (await import('@/layouts/root.layout')).default,
      }),
      children: moduleRoutes,
    },
  ]);
};

export type Router = Awaited<ReturnType<typeof createAppRouter>>;
