import { useMutation, useQuery } from '@tanstack/react-query';

import type { UseMutationOptions, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

interface UseCustomQueryOptions<TData, TError>
  extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
  enabled?: boolean;
}

export function useReactQuery<TData = unknown, TError = Error>({
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
  });
}

export function useReactMutation<TData = unknown, TError = Error, TVariables = unknown>({
  mutationFn,
  options,
}: {
  mutationFn: (data: TVariables) => Promise<TData>;
  options?: UseMutationOptions<TData, TError, TVariables>;
}) {
  return useMutation<TData, TError, TVariables>({
    mutationFn,
    ...options,
  });
}
