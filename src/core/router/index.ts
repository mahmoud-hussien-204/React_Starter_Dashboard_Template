import type { RouteObject } from 'react-router';

const createDynamicRouter = () => {
  const routes: RouteObject[] = [];

  return {
    injectRoutes: (newRoutes: RouteObject[], moduleName: string) => {
      const wrappedRoutes = newRoutes.map(route => ({
        ...route,
        element: (
          <ModuleLoader moduleName={moduleName}>
            {route.element}
          </ModuleLoader>
        ),
      }));

      routes.push(...wrappedRoutes);
    },
    getRoutes: () => routes,
  };
};

export const dynamicRouter = createDynamicRouter();