import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import { createAppRouter } from './core/router/index.router';

import { apiGetLoggedInUserData } from './shared/api/index.api.ts';

import { EnumUserRoles } from './shared/enums/index.enum.ts';

import { STORAGE_KEYS_CONSTANT } from './shared/constants/storage-keys.constant.ts';

import { store } from './core/store/index.store.ts';

import { userDataClearAtoms, userDataSetRoleAtom } from './core/store/atoms/user-data.atoms.ts';

import './styles/index.style.css';

async function main() {
  // get logged in user data to be fresh data
  const token = localStorage.getItem(STORAGE_KEYS_CONSTANT.token);
  if (token) {
    try {
      const data = await apiGetLoggedInUserData();
      store.set(userDataSetRoleAtom, EnumUserRoles.SUPER_ADMIN);
    } catch (error) {
      store.set(userDataClearAtoms);
    }
  }

  const router = await createAppRouter();

  const root = createRoot(document.getElementById('root')!);

  root.render(
    <StrictMode>
      <App router={router} />
    </StrictMode>
  );
}

main();
