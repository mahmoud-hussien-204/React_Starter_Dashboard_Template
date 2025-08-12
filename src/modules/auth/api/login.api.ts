import { safeCall } from '@/shared/api/safe-call.api';

import type { ILoginFormSchema } from '../validation/login.schema';

import { EnumUserRoles } from '@/shared/enums/index.enum';

export function apiLogin(payload: ILoginFormSchema) {
  const isSafe = safeCall(undefined, payload);
  if (!isSafe) return Promise.reject();
  // for testing login api
  return new Promise<IUserData>((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        token: 'token',
        role: EnumUserRoles.SUPER_ADMIN,
        email: payload.email,
        name: 'John Doe',
        avatar: '',
      });
    }, 1000);
  });
}
