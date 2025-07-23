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

import { apiDeleteUser } from '../api/users.api';

import { PhoneIcon } from 'lucide-react';

import UserCard from '@/shared/components/user-card';

import { Dialog, DialogContent, DialogHeader } from '@/shared/components/ui/dialog';

import EditUserForm from './edit-user-form';

import DialogConfirmation from '@/shared/components/dialog-confirmation';

import ViewUserForm from './view-user-form';

import UserKycStatus from './user-kyc-status';

import UserStatus from './user-status';

import useUserList from '../hooks/use-user-list.hook';

const UsersList = () => {
  const {
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
  } = useUserList();

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
              <TableHead>Status</TableHead>
              <TableHead>Phone</TableHead>
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
                    <UserStatus status={user.status} />
                  </TableCell>
                  <TableCell>
                    <a href={`tel:${user.phone}`} className='gap-0.5rem flex items-center'>
                      <PhoneIcon size={15} />
                      {user.phone}
                    </a>
                  </TableCell>
                  <TableCell>
                    <UserKycStatus status={user.KYC_status} />
                  </TableCell>
                  <TableAction>
                    <DropdownMenuItem
                      onClick={() => {
                        showViewDialog();
                        setViewDialogProps(user);
                      }}
                    >
                      View
                    </DropdownMenuItem>
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
          {isEditDelayedOpenedDialog ? <EditUserForm user={editDialogProps} /> : null}
        </DialogContent>
      </Dialog>

      <Dialog open={isViewOpenedDialog} onOpenChange={closeViewDialog}>
        <DialogContent>
          <DialogHeader title='View User' />
          {isViewDelayedOpenedDialog ? <ViewUserForm user={viewDialogProps} /> : null}
        </DialogContent>
      </Dialog>

      <DialogConfirmation
        closeDialog={closeDeleteDialog}
        isDelayedOpenedDialog={isDeleteDelayedOpenedDialog}
        isOpenedDialog={isDeleteOpenedDialog}
        onConfirm={async () => apiDeleteUser(deleteDialogProps?.id)}
        invalidatesQuery={queryKey}
      />
    </section>
  );
};

export default UsersList;
