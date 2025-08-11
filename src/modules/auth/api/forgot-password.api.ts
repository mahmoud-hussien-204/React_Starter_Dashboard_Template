import { safeCall } from '@/shared/api/safe-call.api';

import type { IForgotPasswordFormSchema } from '../validation/forgot-password.schema';

export function apiForgotPassword(payload: IForgotPasswordFormSchema) {
  const isSafe = safeCall(payload);
  if (!isSafe) return Promise.reject();
  return new Promise<{ email: string }>((resolve) => {
    setTimeout(() => {
      resolve({ email: payload.email });
    }, 500);
  });
}
