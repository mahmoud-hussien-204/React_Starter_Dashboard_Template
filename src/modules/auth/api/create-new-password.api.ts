import { safeCall } from '@/shared/api/safe-call.api';

import type { ICreateNewPasswordFormSchema } from '../validation/create-new-password.schema';

export function apiCreateNewPassword(payload: ICreateNewPasswordFormSchema) {
  const isSafe = safeCall(undefined, payload);
  if (!isSafe) return Promise.reject();
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
}
