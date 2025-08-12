import { interceptor } from './interceptor.api';

export function apiGetLoggedInUserData() {
  return interceptor<IUserData>({
    endpoint: 'me/1',
  });
}
