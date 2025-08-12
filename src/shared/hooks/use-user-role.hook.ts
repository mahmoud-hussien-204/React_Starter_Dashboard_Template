import { userDataRoleAtom } from '@/core/store/atoms/user-data.atoms';

import { useAtomValue } from 'jotai';

const useUserRole = () => useAtomValue(userDataRoleAtom);

export default useUserRole;
