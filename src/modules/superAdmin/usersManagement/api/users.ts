import { interceptor } from '@/shared/api/interceptor';

import { toQueryString } from '@/shared/utils/url';

import type { IUser } from '../interfaces/users';

export function apiGetUsersList(searchQueryParams: IApiSearchParams) {
  const ss = toQueryString(searchQueryParams);

  return interceptor<IUser[]>({
    endpoint: `users?${ss}`,
  });
}
