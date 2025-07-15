import { queryKeys } from '../constants';

import {
  Table,
  TableAction,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableLoading,
  TableNoDataFound,
  TableRow,
} from '@/shared/components/ui/table';

import { DropdownMenuItem, DropdownMenuSeparator } from '@/shared/components/ui/dropdown-menu';

import { DynamicPagination } from '@/shared/components/dynamic-pagination';

import { useReactQuery } from '@/shared/hooks/use-react-query';

import { apiGetUsersList } from '../api/users';

import useURLFilters from '@/shared/hooks/use-url-filters';

import { Badge } from '@/shared/components/ui/badge';

import { getKycStatusString, getKycStatusVariant, getUserStatus } from '../utils/kyc-status';

import { CheckCircleIcon, CircleXIcon, PhoneIcon } from 'lucide-react';

import UserCard from '@/shared/components/user-card';

import useDialog from '@/shared/hooks/use-dialog';

import { Dialog, DialogContent, DialogHeader } from '@/shared/components/ui/dialog';

import EditUserForm from './edit-user-form';

import DialogConfirmation from '@/shared/components/dialog-confirmation';

import { interceptor } from '@/shared/api/interceptor';

import { useMemo } from 'react';

const UsersList = () => {
  const {
    showDialog: showEditDialog,
    closeDialog: closeEditDialog,
    isDelayedOpenedDialog: isEditDelayedOpenedDialog,
    isOpenedDialog: isEditOpenedDialog,
    setDialogProps: setEditDialogProps,
    dialogProps: editDialogProps,
  } = useDialog();

  const {
    showDialog: showDeleteDialog,
    closeDialog: closeDeleteDialog,
    isDelayedOpenedDialog: isDeleteDelayedOpenedDialog,
    isOpenedDialog: isDeleteOpenedDialog,
    setDialogProps: setDeleteDialogProps,
    dialogProps: deleteDialogProps,
  } = useDialog();

  const { pageSearchParams, sizeSearchParams, searchSearchParams } = useURLFilters();

  const queryKey = useMemo(
    () => [
      queryKeys.users,
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

  const meta = data?.meta;

  const usersList = data?.data;

  return (
    <section>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>KYC Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && <TableLoading colspan={6} />}
            {usersList ? (
              usersList.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <UserCard src={user.avatar} subtitle={`ID: ${user.id}`} title={user.name} />
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <a href={`tel:${user.phone}`} className='gap-0.5rem flex items-center'>
                      <PhoneIcon size={15} className='text-primary' />
                      {user.phone}
                    </a>
                  </TableCell>
                  <TableCell>
                    <span className='gap-0.5rem flex items-center'>
                      {user.status ? (
                        <CheckCircleIcon className='text-primary' size={15} />
                      ) : (
                        <CircleXIcon className='text-destructive' size={15} />
                      )}
                      {getUserStatus(user.status)}{' '}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getKycStatusVariant(user.KYC_status)}>
                      {getKycStatusString(user.KYC_status)}
                    </Badge>
                  </TableCell>
                  <TableAction>
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        showEditDialog();
                        setEditDialogProps(user);
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        showDeleteDialog();
                        setDeleteDialogProps(user);
                      }}
                    >
                      Delete
                    </DropdownMenuItem>
                  </TableAction>
                </TableRow>
              ))
            ) : (
              <TableNoDataFound colspan={6} message='No users found' />
            )}
          </TableBody>
        </Table>
        <DynamicPagination totalPages={Math.ceil((meta?.pagesCount || 1) / +sizeSearchParams)} />
      </TableContainer>

      <Dialog open={isEditOpenedDialog} onOpenChange={closeEditDialog}>
        <DialogContent>
          <DialogHeader
            title='Edit User'
            description='You can edit any of the available options.'
          />
          {isEditDelayedOpenedDialog ? <EditUserForm /> : null}
        </DialogContent>
      </Dialog>

      <DialogConfirmation
        closeDialog={closeDeleteDialog}
        isDelayedOpenedDialog={isDeleteDelayedOpenedDialog}
        isOpenedDialog={isDeleteOpenedDialog}
        onConfirm={async () => apiDeleteUser(deleteDialogProps?.id || 0)}
        invalidatesQuery={queryKey}
      />
    </section>
  );
};

export default UsersList;

function apiDeleteUser(id: number) {
  console.log(id);

  return interceptor({
    endpoint: `users/${id}`,
    requestOptions: {
      method: 'Delete',
    },
  });
}
