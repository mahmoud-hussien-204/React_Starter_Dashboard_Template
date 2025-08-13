### Repository Layout

```bash
React_Starter_Dashboard_Template
├── components.json                   # shadcn/ui components configuration
├── docs                              # Documentation files
├── eslint.config.js                  # ESLint configuration
├── index.html                        # App entry HTML file
├── package.json                      # Project metadata and dependencies
├── package-lock.json                 # Dependency lock file
├── plopfile.js                       # Plop.js generator configuration
├── plop-templates                    # Handlebars templates for code generation
├── public                            # Public static assets
├── README.md                         # Main project readme
├── src                               # Source code
│   ├── assets                        # Static assets used in the app
│   ├── core                          # Core infrastructure code
│   │   ├── config                    # Global configuration files
│   │   ├── router                    # Application routing configuration and dynamic route injection
│   │   └── store                     # Jotai atoms and store configuration
│   ├── layouts                       # Reusable layout components (root, home, dashboard variations)
│   ├── modules                       # Feature-based modules organized by user roles
│   ├── shared                        # Reusable shared code
│   │   ├── api                       # API utilities and interceptors
│   │   ├── components                # UI components and patterns
│   │   ├── constants                 # Application-wide constants
│   │   ├── enums                     # Enumerations
│   │   ├── hooks                      # Custom reusable hooks
│   │   ├── interfaces                # TypeScript interfaces
│   │   └── utils                     # Utility/helper functions
│   └── styles                        # Global styles
├── tsconfig.*.json                   # TypeScript configurations
├── vercel.json                       # Vercel deployment configuration
└── vite.config.ts                    # Vite bundler configuration
```

---

### Architecture Overview

This project follows a **modular architecture** combined with **component-based**. It is designed to support multiple **user roles** within the same dashboard (e.g., `admin`, `super-admin`, `user`).

Each role has its own dedicated set of modules under `src/modules/{roleName}`, and each module is self-contained with its own API, components, hooks, pages, validation, and a dedicated route file.

---

### Main Folders Overview

#### `core/`
- **config/** → Centralized app configuration.
- **router/** → Manages application routing, supports dynamic module injection, and handles automatic integration of module route files.
- **store/** → Global state management using Jotai.

#### `layouts/`
Reusable layout wrappers for different page types, including dashboard variations.

#### `shared/`
- **api/** → Base API handlers and interceptors.
- **components/** → Common UI components, animations, guards, and form elements.
- **constants/** → Static constant values used throughout the app.
- **enums/** → Enumerations for consistent value usage.
- **hooks/** → Custom hooks for state, data fetching, and utilities.
- **interfaces/** → TypeScript definitions for strong typing.
- **utils/** → General helper functions.

#### `styles/`
Global CSS and Tailwind styles.

#### `modules/`
Feature-based modular architecture with role separation:
- **auth/** → Authentication (login, reset password, verification).
- **common/** → Layout builder and shared tools.
- **super-admin/** → Admin dashboards, settings, and user management.

Each module includes its own **`routes.ts`** file, which is dynamically imported into the **main router file** for its user role. The role’s main router file is also dynamically imported into the **application router**, making route registration fully automated.

---

### Adding a New Feature Module (Using Plop.js Generator)

This project uses **Plop.js** to quickly scaffold new modules with the proper structure and routing integration.

To add a new module:
1. Run the command:
   ```bash
   npm run generate
   ```
2. You will be prompted to select **which user role** the new module belongs to (e.g., `admin`, `super-admin`, `user`).
3. You will then be prompted to enter the **module name**.
4. Plop.js will generate the folder structure and base files for your module automatically under `src/modules/{roleName}/{moduleName}`.
5. A `routes.ts` file will be created for the new module, and it will be automatically imported into the role’s main router file.
6. The role’s main router file will also be automatically imported dynamically into the app router — no manual route registration is required.

This approach ensures consistent structure, automated routing, and faster onboarding for new features.

