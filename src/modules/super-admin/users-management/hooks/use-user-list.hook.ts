import { useMemo } from 'react';

import type { IUser } from '../interfaces/users.interface';

import { queryKeys } from '@/shared/constants/query-keys.constant';

import useDialog from '@/shared/hooks/use-dialog.hook';

import { useReactQuery } from '@/shared/hooks/use-react-query.hook';

import { apiGetUsersList } from '../api/users.api';

import useURLFilters from '@/shared/hooks/use-url-filters.hook';

const useUserList = () => {
  const editDialog = useDialog<IUser>();

  const viewDialog = useDialog<IUser>();

  const deleteDialog = useDialog<IUser>();

  const { pageSearchParams, sizeSearchParams, searchSearchParams } = useURLFilters();

  const queryKey = useMemo(
    () => [
      queryKeys.users.list,
      { page: pageSearchParams, limit: sizeSearchParams, search: searchSearchParams },
    ],
    [pageSearchParams, sizeSearchParams, searchSearchParams]
  );

  const { data, isLoading } = useReactQuery({
    queryFn: () =>
      apiGetUsersList({
        limit: sizeSearchParams,
        page: +pageSearchParams,
        search: searchSearchParams,
      }),
    queryKey: queryKey,
  });

  return {
    data,
    isLoading,
    editDialog,
    viewDialog,
    deleteDialog,
    sizeSearchParams,
    queryKey,
  };
};

export default useUserList;
