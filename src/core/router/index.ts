import { createBrowserRouter } from 'react-router';

import { injectModuleRoutes } from './injectModuleRoutes';

export const createAppRouter = async () => {
  const moduleRoutes = await injectModuleRoutes();

  return createBrowserRouter([
    {
      path: '*',
      lazy: async () => ({
        Component: (await import('@/layouts/NotFoundLayout')).default,
      }),
    },
    {
      path: '/',
      lazy: async () => ({
        Component: (await import('@/layouts/RootLayout')).default,
      }),
      children: moduleRoutes,
    },
  ]);
};

export type Router = Awaited<ReturnType<typeof createAppRouter>>;
