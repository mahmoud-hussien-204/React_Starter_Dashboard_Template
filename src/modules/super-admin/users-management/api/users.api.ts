import { interceptor } from '@/shared/api/interceptor.api';

import { toQueryString } from '@/shared/utils/url.utils';

import type { ICreateUserForm, IEditUserForm, IUser } from '../interfaces/users.interface';

import { safeCall } from '@/shared/api/safe-call.api';

export function apiGetUsersList(searchQueryParams: IApiSearchParams) {
  const ss = toQueryString(searchQueryParams);
  return interceptor<IUser[]>({
    endpoint: `users?${ss}`,
  });
}

export function apiDeleteUser(userId: string | undefined) {
  const isSafe = safeCall(undefined, userId);
  if (!isSafe) return Promise.reject();
  return interceptor<IUser>({
    endpoint: `users/${userId}`,
    requestOptions: {
      method: 'DELETE',
    },
  });
}

export function apiEditUser(payload: IEditUserForm) {
  const isSafe = safeCall(undefined, payload);
  if (!isSafe) return Promise.reject();
  const { id, ...data } = payload;
  return interceptor<IUser>({
    endpoint: `users/${id}`,
    requestOptions: {
      method: 'PUT',
      body: JSON.stringify(data),
    },
  });
}

export function apiCreateUser(payload: ICreateUserForm) {
  const isSafe = safeCall(undefined, payload);
  if (!isSafe) return Promise.reject();
  return interceptor<IUser>({
    endpoint: 'users',
    requestOptions: {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  });
}
