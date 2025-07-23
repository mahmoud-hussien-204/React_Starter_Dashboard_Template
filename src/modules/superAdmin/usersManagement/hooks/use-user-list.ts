import { useMemo } from 'react';

import type { IUser } from '../interfaces/users.interface';

import { queryKeys } from '@/shared/constants/query-keys.constant';

import useDialog from '@/shared/hooks/use-dialog.hook';

import { useReactQuery } from '@/shared/hooks/use-react-query.hook';

import { apiGetUsersList } from '../api/users.api';

import useURLFilters from '@/shared/hooks/use-url-filters.hook';

const useUserList = () => {
  const {
    showDialog: showEditDialog,
    closeDialog: closeEditDialog,
    isDelayedOpenedDialog: isEditDelayedOpenedDialog,
    isOpenedDialog: isEditOpenedDialog,
    setDialogProps: setEditDialogProps,
    dialogProps: editDialogProps,
  } = useDialog<IUser>();

  const {
    showDialog: showViewDialog,
    closeDialog: closeViewDialog,
    isDelayedOpenedDialog: isViewDelayedOpenedDialog,
    isOpenedDialog: isViewOpenedDialog,
    setDialogProps: setViewDialogProps,
    dialogProps: viewDialogProps,
  } = useDialog<IUser>();

  const {
    showDialog: showDeleteDialog,
    closeDialog: closeDeleteDialog,
    isDelayedOpenedDialog: isDeleteDelayedOpenedDialog,
    isOpenedDialog: isDeleteOpenedDialog,
    setDialogProps: setDeleteDialogProps,
    dialogProps: deleteDialogProps,
  } = useDialog<IUser>();

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
    showEditDialog,
    closeEditDialog,
    isEditDelayedOpenedDialog,
    isEditOpenedDialog,
    setEditDialogProps,
    editDialogProps,
    showViewDialog,
    closeViewDialog,
    isViewDelayedOpenedDialog,
    isViewOpenedDialog,
    setViewDialogProps,
    viewDialogProps,
    showDeleteDialog,
    closeDeleteDialog,
    isDeleteDelayedOpenedDialog,
    isDeleteOpenedDialog,
    setDeleteDialogProps,
    deleteDialogProps,
    sizeSearchParams,
    queryKey,
  };
};

export default useUserList;
