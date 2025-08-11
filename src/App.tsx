import { Suspense } from 'react';

import { RouterProvider } from 'react-router';

import type { Router } from '@/core/router/index.router';

import { Provider } from 'react-redux';

import { store } from '@/core/store/index.store';

import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
  type QueryKey,
} from '@tanstack/react-query';

import { Toaster } from '@ui/sonner';

import { AnimatePresence } from 'framer-motion';

import { Loading } from './shared/components/with-loading';

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: {
      invalidatesQuery?: QueryKey;
    };
  }
}

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      if (mutation.meta?.invalidatesQuery) {
        queryClient.invalidateQueries({
          queryKey: mutation.meta.invalidatesQuery,
        });
      }
    },
  }),
});

interface IProps {
  router: Router;
}

function App({ router }: IProps) {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AnimatePresence mode='wait'>
            <RouterProvider router={router} />
          </AnimatePresence>
        </Provider>
      </QueryClientProvider>
      <Toaster />
    </Suspense>
  );
}

export default App;
