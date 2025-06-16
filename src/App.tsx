import { Suspense } from 'react';

import { RouterProvider } from 'react-router';

import type { Router } from './core/router';

import { Provider } from 'react-redux';

import { store } from './core/store';

interface IProps {
  router: Router;
}

function App({ router }: IProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  );
}

export default App;
