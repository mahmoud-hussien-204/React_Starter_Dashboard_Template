import { Suspense } from 'react';

import { RouterProvider } from 'react-router';

import type { Router } from '@/core/router/index.router';

import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
  type QueryKey,
} from '@tanstack/react-query';

import { Toaster } from '@ui/sonner';

import { AnimatePresence } from 'framer-motion';

import { Loading } from './shared/components/with-loading';

// for jotai devtools
import { DevTools } from 'jotai-devtools';

import 'jotai-devtools/styles.css';

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
        <AnimatePresence mode='wait'>
          <RouterProvider router={router} />
        </AnimatePresence>
      </QueryClientProvider>
      <Toaster />
      <DevTools key={'jotai-devtools'} />
    </Suspense>
  );
}

export default App;
