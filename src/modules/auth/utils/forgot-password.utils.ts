import { STORAGE_KEYS } from '@/shared/constants/storage-keys.constant';

export function setForgotPasswordEmail(email: string) {
  localStorage.setItem(STORAGE_KEYS.forgotPasswordEmail, email);
}

export function getForgotPasswordEmail(): string {
  return localStorage.getItem(STORAGE_KEYS.forgotPasswordEmail) || '';
}

export function removeForgotPasswordEmail() {
  localStorage.removeItem(STORAGE_KEYS.forgotPasswordEmail);
}
