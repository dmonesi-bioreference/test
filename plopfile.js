/* eslint-disable sort-keys */
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create files for a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'plop/component/component.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{properCase name}}/{{properCase name}}.styles.js',
        templateFile: 'plop/component/component.styles.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'plop/component/component.stories.hbs',
      },
      {
        type: 'append',
        path: 'src/index.ts',
        pattern: /$/,
        templateFile: 'plop/component/export.hbs',
      },
    ],
  });
};
