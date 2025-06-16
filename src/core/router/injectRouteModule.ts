import type { RouteObject } from 'react-router';

const modules = import.meta.glob<{ default: RouteObject[] }>('@/modules/**/routes.ts');

export const injectRouteModule = async (): Promise<RouteObject[]> => {
  const moduleRoutes: RouteObject[] = [];

  for (const path in modules) {
    const mod = await modules[path]();

    if (mod?.default) {
      moduleRoutes.push(...mod.default);
    }
  }

  return moduleRoutes;
};
