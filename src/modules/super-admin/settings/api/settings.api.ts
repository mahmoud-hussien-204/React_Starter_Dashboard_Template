import { interceptor } from '@/shared/api/interceptor.api';

import type { ISettings } from '../interfaces/settings.interface';

import type { IAccountFormSchema } from '../validation/account.schema';

import { safeCall } from '@/shared/api/safe-call.api';

export function apiGetSettings() {
  return interceptor<ISettings[]>({
    endpoint: 'settings',
  });
}

export function apiSaveAccountForm(payload: Partial<IAccountFormSchema>) {
  const isSafe = safeCall(payload);
  if (!isSafe) return Promise.reject();
  return interceptor({
    endpoint: 'settings/1',
    requestOptions: {
      method: 'PUT',
      body: JSON.stringify(payload),
    },
  });
}
