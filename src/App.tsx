import { Suspense } from 'react';

import { RouterProvider } from 'react-router';

import type { Router } from '@/core/router';

import { Provider } from 'react-redux';

import { store } from '@/core/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from '@ui/sonner';

interface IProps {
  router: Router;
}

const queryClient = new QueryClient();

function App({ router }: IProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
      <Toaster />
    </Suspense>
  );
}

export default App;
