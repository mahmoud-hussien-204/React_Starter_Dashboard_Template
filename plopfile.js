export default function (plop) {
  plop.setGenerator('module', {
    description: 'Create a new module for a specific role',
    prompts: [
      {
        type: 'input',
        name: 'role',
        message: 'What is user role folder (e.g., super-admin, admin, user, ...):',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Module name (e.g., users-management):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/api/{{kebabCase name}}.api.ts',
        templateFile: 'plop-templates/api.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/components/.gitkeep',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/constants/{{kebabCase name}}.constant.ts',
        templateFile: 'plop-templates/constant.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/hooks/use-{{kebabCase name}}.hook.ts',
        templateFile: 'plop-templates/hook.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/interfaces/{{kebabCase name}}.interface.ts',
        templateFile: 'plop-templates/interface.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/pages/{{kebabCase name}}.page.tsx',
        templateFile: 'plop-templates/page.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/utils/{{kebabCase name}}.utils.ts',
        templateFile: 'plop-templates/utils.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/validation/{{kebabCase name}}.schema.ts',
        templateFile: 'plop-templates/schema.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/routes.ts',
        templateFile: 'plop-templates/routes.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase role}}/{{kebabCase name}}/store.ts',
        templateFile: 'plop-templates/store.hbs',
      },
    ],
  });
}
