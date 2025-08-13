import { STORAGE_KEYS_CONSTANT } from '@/shared/constants/storage-keys.constant';

export function setVerifyCodeUtil(code: string) {
  localStorage.setItem(STORAGE_KEYS_CONSTANT.verifyCode, code);
}

export function getVerifyCodeUtil(): string {
  return localStorage.getItem(STORAGE_KEYS_CONSTANT.verifyCode) || '';
}

export function removeVerifyCodeUtil() {
  localStorage.removeItem(STORAGE_KEYS_CONSTANT.verifyCode);
}
