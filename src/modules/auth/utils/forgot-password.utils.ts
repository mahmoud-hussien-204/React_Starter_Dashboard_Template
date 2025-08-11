import { STORAGE_KEYS } from '@/shared/constants/storage-keys.constant';

export function setForgotPasswordEmail(email: string) {
  localStorage.setItem(STORAGE_KEYS.forgotPasswordEmail, email);
}

export function getForgotPasswordEmail() {
  localStorage.getItem(STORAGE_KEYS.forgotPasswordEmail);
}
