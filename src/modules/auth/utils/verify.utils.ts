import { STORAGE_KEYS } from '@/shared/constants/storage-keys.constant';

export function setVerifyCode(code: string) {
  localStorage.setItem(STORAGE_KEYS.verifyCode, code);
}

export function getVerifyCode(): string {
  return localStorage.getItem(STORAGE_KEYS.verifyCode) || '';
}

export function removeVerifyCode() {
  localStorage.removeItem(STORAGE_KEYS.verifyCode);
}
