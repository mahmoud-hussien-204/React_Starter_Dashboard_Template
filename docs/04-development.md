# Project Development Guide

This README provides an overview of the development practices, conventions, and workflows for this project

## Table of Contents
- [Code Style & Formatting](#code-style--formatting)
- [Naming Conventions](#naming-conventions)
- [State Management](#state-management)
- [Routing System](#routing-system)
- [UI Components](#ui-components)
- [API Layer](#api-layer)
- [Module Generation](#module-generation)

## Code Style & Formatting
The project enforces consistent coding style using **ESLint** and **Prettier**.

- **ESLint** (`.eslintrc.json`):
  - Extends recommended rules for ESLint, TypeScript, React, React Hooks, and Prettier.
  - Key rules:
    - `react/react-in-jsx-scope`: off (React 17+ JSX transform)
    - `@typescript-eslint/no-unused-vars`: error
    - `import/no-unused-modules`: error
    - `prettier/prettier`: error

- **Prettier** (`.prettierrc`):
  - `printWidth`: 100
  - `singleQuote`: true
  - `semi`: true
  - Uses `prettier-plugin-tailwindcss` for automatic Tailwind class sorting.

**Commands**:
```bash
npm run lint   # Check for lint errors
npm run format # Format code using Prettier
```

## Naming Conventions
Files and folders use **kebab-case**. Specific naming rules:

| **Folder**        | **File Suffix / Prefix** | **Example**                | **Notes**                              |
|-------------------|--------------------------|----------------------------|----------------------------------------|
| api               | `api` prefix             | `apiGetUsers`              | API functions start with `api`         |
| constants         | `.constant.ts`           | `users.constant.ts`        | Export constants as `USERS_CONSTANT`   |
| utils             | `Util` suffix            | `toUpperCaseUtil`          | Util functions end with `Util`         |
| validation        | `.schema.ts`             | `users.schema.ts`          | Schemas end with `schema`              |
| store             | `Atom` suffix            | `userDataAtom`             | Jotai atoms end with `Atom`            |
| routes            | `routes.ts`             | `routes.ts`          | Route files end with `routes`          |
| pages             | `.page.tsx`              | `login.page.tsx`           | Page files end with `page`             |
| hooks             | `use-` prefix + `.hook.ts` | `use-login.hook.ts`      | Custom hooks start with `use`          |
| interfaces        | `.interface.ts`          | `user.interface.ts`        | Interface names start with `I`         |
| components        | kabab-case               | `user-card.tsx`             | UI components use kabab-case           |

## State Management
The project uses **Jotai** for state management:
- Each module has its own atoms for feature-specific state.
- Shared/global atoms (e.g., `userDataAtom`, `appConfigAtom`) are stored in `src/core/store/atoms`.

## Routing System
A dynamic routing injection system is used:
- Each module has a `routes.ts` file with an array of `RouteObject[]`.
- The `injectRouteModule()` function imports all `routes.ts` files from `modules/*` (except `modules/common`) using:
  ```ts
  const appModules = import.meta.glob<{ default: RouteObject[] }>('@/modules/!(common)*/routes.ts');
  ```
- Common module routes are imported manually when needed.
- Each user role has a dedicated router file that merges module routes with common routes.
- The **App Router** (`index.router.ts`) dynamically imports role routers and mounts them under `/`.


## UI Components
- Base UI components use **shadcn/ui**.
- Custom UI components are stored in `src/shared/components/ui`, following shadcn's architecture.
- Reusable non-UI components (e.g., guards, pagination, forms) are in `src/shared/components`.

## API Layer
API calls are centralized in `src/shared/api`:
- **`interceptor.api.ts`**: A `fetch()` wrapper that adds:
  - Auth headers from `userDataTokenAtom`.
  - Language headers from `appConfigLangAtom`.
  - Global error handling (e.g., redirect to `/auth/login` on 401).
  - Success/error toast notifications.
- **useReactQuery** & **useReactMutation**: Wrappers around TanStack Query for consistent API consumption.


**Example**:
```ts
// GET request
useReactQuery({
  queryKey: ['users'],
  queryFn: () => interceptor({ endpoint: '/users' }),
});

// POST request
useReactMutation({
  mutationFn: (data) => interceptor({ 
    endpoint: '/users', 
    requestOptions: { method: 'POST', body: JSON.stringify(data) } 
  })
});
```

## Module Generation
Use the **Plop.js** generator to create new modules:
```bash
npm run generate
```
This will:
- Prompt for user role and module name.
- Generate the full module folder structure with boilerplate files.