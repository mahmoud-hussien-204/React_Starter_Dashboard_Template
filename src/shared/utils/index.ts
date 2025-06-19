import { clsx, type ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toQueryString(params: Record<string, string | boolean | number>) {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    if (params[key]) {
      searchParams.set(key, params[key].toString());
    }
  }

  return searchParams.toString();
}
