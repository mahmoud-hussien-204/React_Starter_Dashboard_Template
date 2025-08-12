import { safeCall } from '@/shared/api/safe-call.api';

import type { IVerifyFormSchema } from '../validation/verify.schema';

export function apiVerify(payload: IVerifyFormSchema) {
  const isSafe = safeCall(undefined, payload);
  if (!isSafe) return Promise.reject();
  return new Promise<{ code: string }>((resolve) => {
    setTimeout(() => {
      resolve({ code: payload.code });
    }, 500);
  });
}
