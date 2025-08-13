import { Badge } from '@/shared/components/ui/badge';

import { getKycStatusStringUtil, getKycStatusVariantUtil } from '../utils/kyc-status.utils';

interface IProps {
  status: number;
}

const UserKycStatus = ({ status }: IProps) => {
  return <Badge variant={getKycStatusVariantUtil(status)}>{getKycStatusStringUtil(status)}</Badge>;
};

export default UserKycStatus;
