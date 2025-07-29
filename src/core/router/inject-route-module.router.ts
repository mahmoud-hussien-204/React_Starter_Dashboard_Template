import type { RouteObject } from 'react-router';

/**
 * Injects routes from modules
 * this is default injected modules path
 * we ignore injection of common module
 * common module is injected manually if needed
 */
const appModules = import.meta.glob<{ default: RouteObject[] }>('@/modules/!(common)*/routes.ts');

export const injectRouteModule = async (modules = appModules): Promise<RouteObject[]> => {
  const moduleRoutes: RouteObject[] = [];

  for (const path in modules) {
    const mod = await modules[path]();

    if (mod?.default) {
      moduleRoutes.push(...mod.default);
    }
  }

  return moduleRoutes;
};
