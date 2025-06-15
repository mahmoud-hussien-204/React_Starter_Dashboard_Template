import { Suspense } from 'react';

import { RouterProvider } from 'react-router';

import type { Router } from './core/router';

interface IProps {
  router: Router;
}

function App({ router }: IProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
