import EmptyState from '@/shared/components/empty-state';

import type { IUser } from '../interfaces/users.interface';
import { CheckCircleIcon, CircleXIcon, PhoneIcon } from 'lucide-react';
import { getKycStatusString, getKycStatusVariant, getUserStatus } from '../utils/kyc-status.utils';
import { Badge } from '@/shared/components/ui/badge';

interface IProps {
  user: IUser | undefined;
}

const ViewUserForm = ({ user }: IProps) => {
  return !user ? (
    <EmptyState message='User not found' />
  ) : (
    <div id='view-user-form' className='gap-1rem flex items-center'>
      <img src={user.avatar} alt='user avatar' className='size-12rem rounded-full object-cover' />
      <div>
        <h4 className='text-xl font-semibold'>{user.name}</h4>
        <h4 className='text-muted-foreground text-sm'>{user.email}</h4>
        <h4 className='text-muted-foreground text-sm'>{user.role}</h4>
        <a href={`tel:${user.phone}`} className='gap-0.5rem flex items-center'>
          <PhoneIcon size={15} />
          {user.phone}
        </a>
        <span className='gap-0.5rem flex items-center'>
          {user.status ? (
            <CheckCircleIcon className='text-success' size={15} />
          ) : (
            <CircleXIcon className='text-destructive' size={15} />
          )}
          {getUserStatus(user.status)}
        </span>
        <Badge variant={getKycStatusVariant(user.KYC_status)}>
          {getKycStatusString(user.KYC_status)}
        </Badge>
      </div>
    </div>
  );
};

export default ViewUserForm;
