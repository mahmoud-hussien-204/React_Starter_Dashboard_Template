import { useMutation, useQuery } from '@tanstack/react-query';

import type { UseMutationOptions, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

interface UseCustomQueryOptions<TData, TError>
  extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
  enabled?: boolean;
}

export function useReactQuery<TData = unknown, TError = IApiError>({
  queryKey,
  queryFn,
  options,
}: {
  queryKey: string[];
  queryFn: () => Promise<TData>;
  options?: UseCustomQueryOptions<TData, TError>;
}): UseQueryResult<TData, TError> {
  return useQuery<TData, TError>({
    queryKey,
    queryFn,
    ...options,
    refetchOnWindowFocus: false,
  });
}

export function useReactMutation<TData = unknown, TError = IApiError, TVariables = unknown>({
  mutationFn,
  options,
}: {
  mutationFn: (data: TVariables) => Promise<TData>;
  options?: UseMutationOptions<TData, TError, TVariables>;
}) {
  return useMutation<TData, TError, TVariables>({
    mutationFn,
    retry: 0,
    ...options,
  });
}
