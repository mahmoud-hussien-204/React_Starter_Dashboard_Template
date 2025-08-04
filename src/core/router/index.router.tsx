import { createBrowserRouter } from 'react-router';

import { injectRouteModule } from './inject-route-module.router';

import ErrorLayout from '@/layouts/error.layout';

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
      errorElement: <ErrorLayout />,
      children: moduleRoutes,
    },
  ]);
};

export type Router = Awaited<ReturnType<typeof createAppRouter>>;
