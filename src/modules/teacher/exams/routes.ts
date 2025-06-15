import type { RouteObject } from 'react-router';

const examsRoutes: RouteObject[] = [
  {
    path: 'exams',
    lazy: async () => ({
      Component: (await import('./layout/ExamsLayout')).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/ExamsPage')).default,
        }),
      },
    ],
  },
];

export default examsRoutes;
