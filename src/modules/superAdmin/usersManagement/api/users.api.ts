import { interceptor } from '@/shared/api/interceptor.api';

import { toQueryString } from '@/shared/utils/url.utils';

import type { IUser } from '../interfaces/users.interface';

import { safeCall } from '@/shared/api/safe-call.api';

export function apiGetUsersList(searchQueryParams: IApiSearchParams) {
  const ss = toQueryString(searchQueryParams);
  return interceptor<IUser[]>({
    endpoint: `users?${ss}`,
  });
}

export function apiDeleteUser(userId: string | undefined) {
  const isSafe = safeCall(userId);
  if (!isSafe) return Promise.reject();
  return interceptor<IUser>({
    endpoint: `users/${userId}`,
    requestOptions: {
      method: 'DELETE',
    },
  });
}
