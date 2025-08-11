import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import { createAppRouter } from './core/router/index.router';

import { store } from './core/store/index.store.ts';

import { userDataActions } from './core/store/slices/user-data-slice.store.slice.ts';

import { apiGetLogedInUserData } from './shared/api/index.api.ts';

import { EnumUserRoles } from './shared/enums/index.enum.ts';

import { STORAGE_KEYS } from './shared/constants/storage-keys.constant.ts';

import './styles/index.style.css';

async function main() {
  // get logged in user data to be fresh data
  const token = localStorage.getItem(STORAGE_KEYS.token);
  if (token) {
    try {
      const data = await apiGetLogedInUserData();
      store.dispatch(userDataActions.setRole(EnumUserRoles.SUPER_ADMIN));
    } catch (error) {
      store.dispatch(userDataActions.clearUserData());
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
