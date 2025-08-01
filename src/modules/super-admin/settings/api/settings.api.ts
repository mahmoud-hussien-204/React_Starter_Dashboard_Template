import { interceptor } from '@/shared/api/interceptor.api';

import type { ISettings } from '../interfaces/settings.interface';

export function apiGetSettings() {
  return interceptor<ISettings[]>({
    endpoint: 'settings',
  });
}
