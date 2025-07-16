import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import { createAppRouter } from './core/router/index.router.ts';

import './styles/index.style.css';

async function main() {
  const router = await createAppRouter();

  const root = createRoot(document.getElementById('root')!);

  root.render(
    <StrictMode>
      <App router={router} />
    </StrictMode>
  );
}

main();
