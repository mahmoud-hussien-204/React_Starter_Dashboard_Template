import { interceptor } from './interceptor.api';

export function apiGetLogedInUserData() {
  return interceptor<IUserData>({
    endpoint: 'me/1',
  });
}
