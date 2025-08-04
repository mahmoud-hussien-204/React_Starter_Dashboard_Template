import {
  Table,
  TableAction,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableLoading,
  TableNoDataFound,
  TableRow,
} from '@/shared/components/ui/table';

import useUserList from '../../users-management/hooks/use-user-list.hook';

import UserCard from '@/shared/components/user-card';

import UserStatus from '../../users-management/components/user-status';

import { PhoneIcon } from 'lucide-react';

import UserKycStatus from '../../users-management/components/user-kyc-status';

import { CardTitle } from '@/shared/components/ui/card';

const LatestUsers = () => {
  const { data, isLoading } = useUserList();

  const usersList = data?.data;

  return (
    <div>
      <CardTitle className='mb-1.25rem'>Latest Users</CardTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>KYC Status</TableHead>
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
                </TableRow>
              ))
            ) : (
              <TableNoDataFound colspan={6} message='No users found' />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LatestUsers;
