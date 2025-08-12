import { atom } from 'jotai';

import { STORAGE_KEYS } from '@/shared/constants/storage-keys.constant';

// ************ token atom
type ITokenAtom = string | null | undefined;

export const userDataTokenAtom = atom<ITokenAtom>(localStorage.getItem(STORAGE_KEYS.token));

export const userDataSetTokenAtom = atom(null, (_, set, newToken: string) => {
  set(userDataTokenAtom, newToken);
  localStorage.setItem(STORAGE_KEYS.token, newToken);
});

// ************ role atom
type IUserAtom = IUserRole | null | undefined;

export const userDataRoleAtom = atom<IUserAtom>(null);

export const userDataSetRoleAtom = atom(null, (_, set, newRole: IUserRole) => {
  set(userDataRoleAtom, newRole);
});

// ************ clear user data atom
export const userDataClearAtoms = atom(null, (_, set) => {
  set(userDataTokenAtom, null);
  set(userDataRoleAtom, null);
  localStorage.clear();
});
