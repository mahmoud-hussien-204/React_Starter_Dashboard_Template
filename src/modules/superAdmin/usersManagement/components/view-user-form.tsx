import EmptyState from '@/shared/components/empty-state';

import type { IUser } from '../interfaces/users.interface';

import { MailIcon, PhoneIcon } from 'lucide-react';

import UserStatus from './user-status';

import UserKycStatus from './user-kyc-status';

interface IProps {
  user: IUser | undefined;
}

const ViewUserForm = ({ user }: IProps) => {
  return !user ? (
    <EmptyState message='User not found' />
  ) : (
    <div className='gap-1.5rem flex items-start'>
      {/* User Info */}
      <div className='flex-1'>
        <h3 className='mb-0.75rem text-xl font-bold'>
          {user.name} <small className='text-muted-foreground font-normal'>&nbsp;{user.role}</small>
        </h3>

        {/* Contact Info */}
        <div className='mb-0.75rem'>
          <div className='mb-0.5rem text-muted-foreground hover:text-foreground gap-0.75rem flex items-center transition-colors duration-200'>
            <MailIcon size={14} />
            <span className='text-sm'>{user.email}</span>
          </div>

          <a
            href={`tel:${user.phone}`}
            className='text-muted-foreground hover:text-primary group/phone gap-0.75rem flex items-center transition-all duration-200 hover:translate-x-1'
          >
            <PhoneIcon size={14} />
            <span className='text-sm font-medium'>{user.phone}</span>
          </a>
        </div>

        {/* Status Badges */}
        <div className='gap-0.75rem flex items-center'>
          <UserKycStatus status={user.KYC_status} />
          <UserStatus status={user.status} />
        </div>
      </div>
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className='shadow-soft size-8rem relative rounded-full border-4 border-white/50 object-cover transition-transform duration-300 group-hover:scale-105'
      />
    </div>
  );
};

export default ViewUserForm;
