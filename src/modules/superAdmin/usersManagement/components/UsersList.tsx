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

import { getKycStatusString, getKycStatusVariant, getUserStatus } from '../utils/kycStatus';

import { CheckCircleIcon, CircleXIcon, PhoneIcon } from 'lucide-react';

const UsersList = () => {
  const { pageSearchParams, sizeSearchParams, searchSearchParams } = useURLFilters();

  const { data, isLoading, isFetching } = useReactQuery({
    queryFn: () =>
      apiGetUsersList({
        limit: sizeSearchParams,
        page: +pageSearchParams,
        search: searchSearchParams,
      }),
    queryKey: [
      queryKeys.users,
      { page: pageSearchParams, limit: sizeSearchParams, search: searchSearchParams },
    ],
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
                    <div className='gap-0.5rem flex items-center'>
                      <img src={user.avatar} alt={user.name} className='size-10 rounded-full' />
                      <div>
                        <h6>{user.name}</h6>
                        <span className='text-foreground text-xs'>ID: {user.id}</span>
                      </div>
                    </div>
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
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
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
    </section>
  );
};

export default UsersList;
