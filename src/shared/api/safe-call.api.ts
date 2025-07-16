import { notification } from '../utils/notification.utils';

export function safeCall(...arg: unknown[]) {
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === undefined || arg[i] === null) {
      notification.error(`Argument ${i} is undefined or null`);
      return false;
    }
  }
  return true;
}
