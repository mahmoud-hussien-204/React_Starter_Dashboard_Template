import { CheckCircleIcon, CircleXIcon } from 'lucide-react';

import { getUserStatusUtil } from '../utils/kyc-status.utils';

interface IProps {
  status: boolean;
}

const UserStatus = ({ status }: IProps) => {
  return (
    <span className='gap-0.5rem flex items-center'>
      {status ? (
        <CheckCircleIcon className='text-success' size={15} />
      ) : (
        <CircleXIcon className='text-destructive' size={15} />
      )}
      {getUserStatusUtil(status)}
    </span>
  );
};

export default UserStatus;
