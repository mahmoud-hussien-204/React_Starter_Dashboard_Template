import { Badge } from '@/shared/components/ui/badge';

import { getKycStatusString, getKycStatusVariant } from '../utils/kyc-status.utils';

interface IProps {
  status: number;
}

const UserKycStatus = ({ status }: IProps) => {
  return <Badge variant={getKycStatusVariant(status)}>{getKycStatusString(status)}</Badge>;
};

export default UserKycStatus;
