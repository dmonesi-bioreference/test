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
        path: 'src/components/{{properCase name}}/index.js',
        templateFile: 'plop/component/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: 'plop/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.story.js',
        templateFile: 'plop/component/component.story.hbs',
      },
      {
        type: 'append',
        path: 'src/index.js',
        pattern: /$/,
        templateFile: 'plop/component/export.hbs',
      },
    ],
  });
};
