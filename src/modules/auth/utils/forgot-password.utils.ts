import { STORAGE_KEYS_CONSTANT } from '@/shared/constants/storage-keys.constant';

export function setForgotPasswordEmailUtil(email: string) {
  localStorage.setItem(STORAGE_KEYS_CONSTANT.forgotPasswordEmail, email);
}

export function getForgotPasswordEmailUtil(): string {
  return localStorage.getItem(STORAGE_KEYS_CONSTANT.forgotPasswordEmail) || '';
}

export function removeForgotPasswordEmailUtil() {
  localStorage.removeItem(STORAGE_KEYS_CONSTANT.forgotPasswordEmail);
}
